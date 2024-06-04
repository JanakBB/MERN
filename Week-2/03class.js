class CreateUser {

    #age
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this._lastName = lastName;//this defined private property
        this.#age = age;//use # this.age not shown in node terminal. But shown in browser console.
    }

    #Hi = 'Hello';
    static address = 'Kathmandu';

    getBirthYear() {
        console.log(this.#Hi)
        console.log(this.#getFullName())
        return new Date().getFullYear() - this.#age
    }

    #getFullName() {
        return this.firstName + ' ' + this._lastName;
    }
}

console.log(CreateUser.address)

const user1 = new CreateUser("Janak", "Bohara", 32)
const user2 = new CreateUser("Sita", "Thapa", 30)
console.log(user1)

// console.log(user1.age)
console.log(user1.getBirthYear())

///////////////////////////////////
// const A = {
//     name: 'Harish',
//     '#age': 44
// }

// console.log(A['#age'])
//////////////////////////////////
