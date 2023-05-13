const BaseRepository = require("../repositories/base");

class UserRepository extends BaseRepository {
    constructor() {
        super({
            table: "users"
        })
    }
}

module.exports = UserRepository;