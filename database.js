const mysql = require("mysql2");
const connection = mysql.createPool({
    host: "localhost",
    user: 'Tommi',
    password: 'moccamaster',
    database: 'opintorekisteri',
})
module.exports = connection;