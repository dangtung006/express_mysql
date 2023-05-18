const BaseRepository = require("../base");
class AddressRepository extends BaseRepository {

    constructor() {
        super({ table: 'address' });
    }
}
module.exports = new AddressRepository()