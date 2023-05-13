class UserEntities {
    email;
    password;
    fullname;
    address;

    constructor({ email, password, fullname, address }) {
        this.email = email;
        this.password = password;
        this.fullname = fullname;
        this.address = address;

        isValid = this.validate();
        if (!isValid) throw new Error("Invalid params");
    }

    validate() { }
}