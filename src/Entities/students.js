const Joi = require("joi");
const BaseEntity = require("./base");

class StudentEntity extends BaseEntity {
    major // string varchar(50)
    faculty // string varchar(50)
    class // string varchar(50)
    studentResult // string varchar(50)
    validateCreate() { }
}

module.exports = StudentEntity;