const mysql = require("mysql");
const DB_HOST = "localhost";
const DB_NAME = "demo";
const DB_USER = "root";
const DB_PASSWORD = "123456";

class MyDB {
    constructor() {
        this.connection = mysql.createConnection({
            host: DB_HOST,
            database: DB_NAME,
            user: DB_USER,
            password: DB_PASSWORD
        });
        this.connect();
    }

    connect() {
        this.connection.connect(e => {
            if (e) throw e
            console.log("Connect success");
        })
    }

    static getDBInstance() {
        if (!MyDB.instance) {
            MyDB.instance = new MyDB();
        }
        return MyDB.instance.connection;
    }
}

module.exports = MyDB;