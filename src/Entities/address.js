const Joi = require("joi");
const BaseEntity = require("./base");

class AddressEntity extends BaseEntity {
    section // string varchar(50)
    road // string varchar(50)
    town // string varchar(50)
    district // string varchar(50)
    city//string varchar(50)

    validateCreate() { }
}

module.exports = AddressEntity;