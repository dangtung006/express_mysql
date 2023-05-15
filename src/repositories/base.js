const DB = require("../init/dbs/index");

class BaseRepository {
    dbIntance = DB.getDBInstance();

    constructor({ table }) {
        this.table = table;
    }

    create(opt) {
        const sql = `INSERT INTO ${this.table} SET?`;
        return new Promise((resolve, reject) => {
            this.dbIntance.query(sql, opt, (err, r) => {
                if (err) return reject(err);
                return resolve(r);
            });
        });
    }
    getOneById(id) {
        const sql = `SELECT * FROM ${this.table} WHERE id =${id}`;
        return new Promise((resolve, reject) => {
            this.dbIntance.query(sql, (err, row) => {
                if (err) return reject(err);
                return resolve(row);
            })
        });
    }

    getAll() {
        const sql = `SELECT * FROM ${this.table}`;
        return new Promise((resolve, reject) => {
            this.dbIntance.query(sql, (err, row) => {
                if (err) return reject(err);
                return resolve(row);
            })
        });
    }

    getByCondition(conditions) {
        const sql = `SELECT * FROM ${this.table} WHERE ${conditions}`;
        return new Promise((resolve, reject) => {
            this.dbIntance.query(sql, (err, row) => {
                if (err) return reject(err);
                return resolve(row);
            })
        });
    }

    deleteOneById(id) {
        const sql = `DELETE FROM ${this.table} WHERE id =${id} = ?`;
        return new Promise((resolve, reject) => {
            this.dbIntance.query(sql, id, (err, res) => {
                if (err) return reject(err);
                resolve(res);
            })
        });
    }

    deleteAll() {
        const sql = `DELETE FROM ${this.table}`;
        return new Promise((resolve, reject) => {
            this.dbIntance.query(sql, (err, res) => {
                if (err) return reject(err);
                resolve(res);
            })
        });
    }
}

module.exports = BaseRepository;