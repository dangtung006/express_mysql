const BaseRepository = require("../base");

class StudentRepository extends BaseRepository {
    constructor({ table }) {
        super({ table })
    }
}
module.exports = StudentRepository;