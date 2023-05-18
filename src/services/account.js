
const UserFactoryRepository = require("../repositories/users/user_factory");

class AccountService {
    static async createAccount(payload) {
        const { accountType } = payload;
        return UserFactoryRepository.createUser(accountType, payload)
    }

    static async updateAccount(payload) {

    }

    static async getAccountDetail() {

    }

    static async getAccounts() {

    }
}

module.exports = AccountService;