//constructor and this keyword section

function Person(name, dateOfBirth) {
    this.name = name;
    this.birthday = new Date(dateOfBirth);

    this.calculateAge = function() {
        const dif = Date.now() - this.birthday.getTime();
        const ageDate = new Date(dif);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const person1 = new Person('sbs', '11-12-1998');
console.log(person1);
console.log(person1.calculateAge());


//built in constructor and different objects and primitives
const p1 = 'Sbs';
const p2 = new String('Sbs');

if(p1 === 'Sbs') {
    console.log('YES');
} else {
    console.log("NO");
}
// === checks the type
if(p2 === 'Sbs') {
    console.log('YES');
} else {
    console.log("NO");
}
// == checks the value
if(p2 == 'Sbs') {
    console.log('YES');
} else {
    console.log("NO");
}

const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1);
console.log(bool2);

const sum1 = function(x,y) {
    return x+y;
}
const sum2 = new Function('x', 'y', 'return 1+1');

console.log(sum1(1+1));
console.log(sum2(1+1));

const p = {name: 'P'};
const o = new Object({name: 'P'});
console.log(p);
console.log(o);

const arr = [1,2 ,3, 4];
const arr2 = new Array(1,2,3,4);
console.log(arr);
console.log(arr2);

const reg1 = /\w+/;
const reg2 = new RegExp('\\w+');
console.log(reg1);
console.log(reg2);

//prototypes
//Ever object has a prototype. and all the methods and properties objects inherit come from the prototype.

function PersonDetails(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dateOfBirth);
}

PersonDetails.prototype.calculateAge = function() {
    const dif = Date.now() - this.birthday.getTime();
    const ageDate = new Date(dif);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
PersonDetails.prototype.showFullName = function() {
    console.log(this.firstName + " " + this.lastName);
}


let human = new PersonDetails('Shatabdi', 'Biswas', '11-12-1998');
console.log(human);
console.log(human.calculateAge());
console.log(human.hasOwnProperty('firstName'));
console.log(human.hasOwnProperty('calculateAge'));

//Prototypal Inheritance
//suppose, customer will inherit from PersonDetais.

function Customer(firstName, lastName, phone, membership) {
    //calling constructor from PersonDetails
    PersonDetails.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

//inherit prototypes from other 
Customer.prototype = Object.create(PersonDetails.prototype);

let customer1 = new Customer('Shatbdi', 'Biswas', '123456789', 'Normal');
console.log(customer1);
console.log(customer1.showFullName());

//overriding is possible

Customer.prototype.showFullName = function() {
    console.log(`First name: ${this.firstName} and Last name: ${this.lastName}`);
}

console.log(customer1.showFullName());

//ES6 classes
class Man {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }
    // calculateAge() {
    //     const dif = Date.now() - (this.birthday.getTime());
    //     const ageDate = new Date(dif);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
    showFullName() {
        console.log(`First name: ${this.firstName} and Last name: ${this.lastName}`);
    }
}

let m = new Man('shatabdi', 'biswas', '11-12-1998');
console.log(m);
//console.log(m.calculateAge());
console.log(m.showFullName());
