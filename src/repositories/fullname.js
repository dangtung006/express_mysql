const BaseRepository = require("../base");
class FullNameRepository extends BaseRepository {

    constructor() {
        super({ table: 'fullname' });
    }
}
module.exports = new FullNameRepository()