//normal
// sonst hello = function () {
//     console.log('Hello!');
// }

//Arrow Function doing the same
// const hello = () => {
//     console.log('Hello!');
// }

//one line body does not need {}
//const hello = () => console.log('Hello!');

//one line return 
//const hello = () => 'Hello!';

//returning object literals
// const hello = () => ({text: 'Hello!'}) //ned to wrap in parenthesis. otherwise it'll be considered as function body.

// console.log(hello());

// //single parameter does not need parenthesis 
// const hello = name => console.log(`Hello ${name}!`);

// hello('sbs');

//multiple parameters do need parenthesis 
// const hello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}!`);

// hello('shatabdi', 'biswas swarna');

const users = ['shatabdi', 'swarna'];

const nameLength = users.map(name => name.length);
console.log(nameLength);