const Joi = require("joi");
const BaseEntities = require("./base");
const AddressEntity = require("./address");
const FullNameEntity = require("./fullname");

class UserEntities extends BaseEntities {
    email; //string
    password; //string
    dob;// Date
    sex; // Tiny
    fullname;// string
    address; // string

    constructor({ id, email, password, dob, sex, fullname, address }) {
        super({ id });
        this.email = email;
        this.password = password;
        this.fullname = new FullNameEntity(fullname);;
        this.address = new AddressEntity(address);
        this.dob = dob;
        this.sex = sex;
    }

    validateCreate() {

        const isValidAddr = this.address.validateCreate();
        if (isValidAddr && isValidAddr["error"]) {
            return isValidAddr;
        }

        const isValidFullName = this.fullname.validateCreate();

        if (isValidFullName && isValidFullName["error"]) {
            return isValidFullName;
        }

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