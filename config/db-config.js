const { dbHost, dbUser, dbPassword, dbName } = require('../constants/config');

module.exports = {
     host: dbHost,
     user: dbUser,
     password: dbPassword,
     database: dbName,
     connectTimeout: 60000,
};
