const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'olivia.l7475@gmail.com',
      // Your MySQL password
      password: 'Hairyreptile7676!',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

  module.exports = db;