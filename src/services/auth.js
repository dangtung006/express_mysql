
const {
    BadRequestError
} = require("../commons/response/error");

const UserRepository = require("../repositories/user");
class AuthService {
    static async signUp({ email, password, fullname, address }) {
        const { insertId } = await UserRepository.create({
            email,
            password,
            fullname,
            address
        });

        return { result: insertId }
    }

    static async signIn({ email, password }) { }

    static async getUsers() {
        const data = await UserRepository.getAll();
        return { users: data };
    }

    static async updateUser(id, data) {
        const { affectedRows } = await UserRepository.updateById(id, data);
        if (!affectedRows) throw new BadRequestError("Update failed")

        return {
            _r: affectedRows
        }
    }
}

module.exports = AuthService;