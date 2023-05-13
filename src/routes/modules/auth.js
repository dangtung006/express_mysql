const express = require('express')
const BaseRoute = require("./base");
// const {
//     wrapperAsync
// } = require("../../middlewares/request")

class AuthRoutes extends BaseRoute {
    constructor({ middlewares }) {
        super({
            router: express.Router(),
        });
        this.initRoutes();

    }

    initRoutes() {
        this.router.get("/test", async (req, res) => {
            return res.send({ rs: "ok" })
        })
    }
}

module.exports = AuthRoutes