const AuthService = require("../services/auth");
const UserEntities = require("../Entities/user");
const signUp = async (req, res) => {
    const User = new UserEntities(req.body);
    const isValidInputs = User.validateCreate();
    console.log("isValidInputs : ", isValidInputs);

}
const signIn = async (req, res) => { }

module.exports = {
    signUp,
    signIn
}