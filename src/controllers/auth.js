const AuthService = require("../services/auth");
const UserEntity = require("../Entities/user");
const {
    SuccessResponse,
    CreatedResponse
} = require("../commons/response/success");
const {
    BadRequestError
} = require("../commons/response/error");

const signUp = async (req, res) => {

    const User = new UserEntity(req.body);
    const isValidInputs = User.validateCreate();

    if (isValidInputs && isValidInputs["error"]) {
        throw new BadRequestError(isValidInputs["error"].message);
    }

    return new CreatedResponse({
        message: "Success",
        metaData: await AuthService.signUp(User)
    }).send(res);
}
const signIn = async (req, res) => { }

const getUsers = async (req, res) => {
    return new SuccessResponse({
        message: "Success",
        metaData: await AuthService.getUsers()
    }).send(res);
}

const updateUser = async (req, res) => {
    return new SuccessResponse({
        message: "Success",
        metaData: await AuthService.updateUser(req.params.id, req.body)
    }).send(res);
}

module.exports = {
    signUp,
    signIn,
    getUsers,
    updateUser
}