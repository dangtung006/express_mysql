const BaseRepository = require("../base");

class UserRepository extends BaseRepository {
    constructor() {
        super({
            table: 'users'
        });
    }
}
module.exports = new UserRepository();