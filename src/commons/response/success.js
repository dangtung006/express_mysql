const {
    StatusCodes,
    ReasonPhrases
} = require("../../commons/const/http/index");

class BaseResponse {
    constructor({
        message,
        statusCode = StatusCodes.OK,
        reasonStatusCode = ReasonPhrases.OK,
        metaData = {}
    }) {
        this.message = message ? message : reasonStatusCode;
        this.status = statusCode;
        this.metaData = metaData;
    }

    send(res, headers = {}) {
        return res.status(this.status).json(this)
    }
}

class SuccessResponse extends BaseResponse {
    constructor({ message, metaData, opt }) {
        super({
            message, metaData
        })
        this.opt = opt;
    }
}

class CreatedResponse extends BaseResponse {
    constructor({
        message,
        statusCode = StatusCodes.CREATED,
        reasonStatusCode = ReasonPhrases.CREATED,
        metaData = {},
        opt
    }) {
        super({
            message,
            statusCode,
            reasonStatusCode,
            metaData
        });

        this.opt = opt;
    }
}

module.exports = {
    SuccessResponse,
    CreatedResponse
}