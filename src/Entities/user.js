const Joi = require("joi");
const BaseEntities = require("./base");
class UserEntities extends BaseEntities {
    email; //string
    password; //string
    fullname;// string
    address; // string

    constructor({ id, email, password, fullname, address }) {
        super({ id });
        this.email = email;
        this.password = password;
        this.fullname = fullname;
        this.address = address;
    }

    validateCreate() {
        const schema = Joi.object({
            email: Joi.string().min(3).max(30).required(),
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            fullname: Joi.string().required(),
            address: Joi.string().required(),
        });

        return schema.validate({
            email: this.email,
            password: this.password,
            fullname: this.fullname,
            address: this.address,
        });
    }
    validateGetList({ page, limit }) { }
    validateGetDetail(id) { }
    validateUpdate() { }
    validateDelete() { }
}

module.exports = UserEntities;