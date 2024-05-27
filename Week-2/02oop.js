// OOP => Object Oriented Programming
//Object literals => as like object
let user = {
    email: 'janakcustomx@gmail.com',
    password: 'Janak007',
    id: 1,
    logIN: () => {

    }
}

// class => group, grouping, 
//class name start Capital word
//class as like function for run
//need to call
class User {
    email = 'janakcustom@gmail.com';
    password = 'janak007';
}

let user1 = new User()
console.log(user1)

let user2 = new User()
console.log(user2)
console.log(user2.password)
user2.email = 'Janakcustomxxx@gmail.com'
console.log(user2.email)
//we use one class property in different variable.
//constructor
class Guser {
    constructor (gmail, paassword){
    this.GGmail = gmail;
    this.PPaassword = paassword;
    }
    signIn (gmail, password) {
        if (this.GGmail == gmail) {
            console.log('password mathch')
        }
    }
   getEmail () {
    return this.GGmail;
   }
   setEmail(email) {
    this.GGmail = email;
   }
}

let guser1 = new Guser("guser@gmail.com", 'GGGGGGG88');
console.log(guser1)
guser1.signIn('guser@gmail.com')
guser1.setEmail('abc@gmail.com')
console.log(guser1.getEmail())