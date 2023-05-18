const StudentRepository = require("../users/student");

class UserFactoryRepository {
    static userRepositories = {};

    static initUserRepository(types, classRef) {
        this.userRepositories[types] = classRef;
    }

    static createUser(accountType, payload) {
        return new this.userRepositories[accountType](payload).insert()
    }
}
UserFactoryRepository.initUserRepository("student", StudentRepository);
module.exports = UserFactoryRepository;