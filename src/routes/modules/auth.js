const express = require('express')
const BaseRoute = require("./base");
const {
    wrapperAsync
} = require("../../middlewares/request")

const AuthController = require("../../controllers/auth");
class AuthRoutes extends BaseRoute {
    constructor({ middlewares }) {
        super({
            router: express.Router(),
        });
        this.initRoutes();

    }

    initRoutes() {
        this.router.post("/signUp",
            wrapperAsync(AuthController.signUp));

        this.router.get("/users",
            wrapperAsync(AuthController.getUsers));

        this.router.patch("/update/:id",
            wrapperAsync(AuthController.updateUser))
    }
}

module.exports = AuthRoutes