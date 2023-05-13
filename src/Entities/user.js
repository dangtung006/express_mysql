class UserEntities {
    email; //string
    password; //string
    fullname;// string
    address; // string

    constructor({ email, password, fullname, address }) {
        this.email = email;
        this.password = password;
        this.fullname = fullname;
        this.address = address;
    }

    validateGetList() { }
    validateGetDetail() { }
    validateCreate() { }
    validateUpdate() { }
    validateDelete() { }
}