class Person {
    constructor(name, age, email, roll) {
        this.Name = name;
        this.Age = age;
        this.Email = email;
        this.Roll = roll;
    }
}
class Student extends Person {
    constructor(name, age, email, roll) {
        super(name, age, email);
        this.roll = roll;
    }
    getInfo() {
        console.log(`
        Name = ${this.name}, Age = ${this.age} and Email = ${this.email} Roll = ${this.roll}
        `)
    }
}

class Teacher extends Person {
    constructor (name, age, email, dept) {
        super(name, age, email)
    }
}

let s = new Student('Mike', 12, 'm@example.com', 1);
s.getInfo()

//############
debugger;
class Account {
    constructor(accno, accname, blc){
        this.accono = accno;
        this.accname = accname;
        this.blc = blc;
    }
    deposite(amt) {
        this.blc += amt;
        console.log(`Your new balance is Rs> ${this.ble}`);
    }
    withdrow(amt) {
        this.blc += amt;
        console.log(`Your new balance is Rs. ${this.blc}`);
    }
    calculateIntrest (rate) {
        this.intrest = this.blc * rate;
        return this.intrest;
    }
}

class SavingAccount extends Account {
    constructor(accno, accname, blc, intrestRate) {
        super(accno, accname, blc);
        this.intrestRate = intrestRate;
    }
}

let sa = new SavingAccount(1112222444, 'Janak Bohara', 1000, 0.05);
console.log(sa.calculateIntrest(sa.intrestRate))








