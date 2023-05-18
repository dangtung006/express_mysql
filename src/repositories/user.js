const BaseRepository = require("../repositories/base");
class UserRepository extends BaseRepository {
    constructor() {
        super({
            table: "users"
        })
    }

    updateById(id, { address, fullname, password }) {
        const sql = `UPDATE ${this.table} SET fullname = ?, address = ?, password = ? WHERE id = ?`;
        return new Promise((resolve, reject) => {
            this.dbIntance.query(
                sql,
                [fullname, address, password, id],
                (err, res) => {
                    if (err) return reject(err);
                    return resolve(res);
                }
            )
        })
    };
}

module.exports = new UserRepository();