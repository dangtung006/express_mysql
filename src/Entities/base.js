class BaseEntities {
    id // string;
    page
    limit
    keySearch
    createdAt
    updatedAt

    constructor({ id, page, limit, keySearch }) {
        this.id = id ? id : null;
        this.page = page ? page : 1;
        this.limit = limit ? limit : 10;
        this.keySearch = keySearch ? keySearch : "";
    }
}

module.exports = BaseEntities;