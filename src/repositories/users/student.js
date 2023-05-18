const BaseRepository = require("../base");
const UserRepository = require("./index");
const AddressRepository = require("../address");
const FullnameRepository = require("../fullname");

class StudentRepository extends BaseRepository {

    constructor(user) {
        super({ table: 'student' });
        this.user = user;
    }

    async creatUser() {
        const { student, email, password, sex, dob, fullname, address } = this.user;

        const [stu, addr, name] = await Promise.all([
            this.create(student),
            AddressRepository.create(address),
            FullnameRepository.create(fullname)
        ])


        return UserRepository.create({
            id: stu.insertId,
            email,
            password,
            sex,
            dob,
            address: addr.insertId,
            fullname: name.insertId
        })

    }
}
module.exports = StudentRepository;