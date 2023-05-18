const Joi = require("joi");
const BaseEntity = require("./base");

class FullNameEntity extends BaseEntity {
    firstname // string
    midname // string
    lastname // string

    validateCreate() { }
}

module.exports = FullNameEntity;