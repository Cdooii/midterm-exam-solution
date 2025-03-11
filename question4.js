const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

// setting up the database and sequelize

module.exports = db = {};

async function initialize() {
    // connect to db assuming it has been made already
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // initialize models and add them to the exported db object
    db.User = require('..db_models')(sequelize);

    // sync all models with database
    await sequelize.sync({ alter: true });
}

// Create a Sequelize model for a users table with fields id, name, email an     status.
function model(sequelize) {
    const attributes = {
        id: { type: DataTypes.INT, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false }
    };
}

// Define a route /users that fetches and returns all users from the users table using the Sequelize model.

function fetchAll(req, res, next) {
    userService.fetchAll()
    .then(users => res.json(users))
    .catch(next);
}
