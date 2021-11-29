//Blueprint for module pattern

// (function () {
//     //all the private variables and functions here

//     return {
//         //all the public variables and functions here
//     }
// })(); 

//Example of module pattern

const modulePattern = (function () {
    const x=2, y=2;
    function add(x, y) {
        return x+y;
    }

    return {
        publicFunction: function () {
            return add(x,y);
        }
    }
})();
console.log(modulePattern.publicFunction());

//Blueprint for revealing module pattern 
// (function () {
//     //all variables and functions

//     return {
//         //only functions or variables we intend to make public from above. 
//     }
// })();

//Example

const revealingModulePattern = (function () {
    let users = [];

    function addUser(user) {
        users.push(user);
    }
    function getUser(id) {
        return users.find(user => {
            return user.id === id;
        })
    }

    return {
        addUser: addUser,
        getUser: getUser
    }
})();

revealingModulePattern.addUser({id: 1, name: 'Shatabdi'});
revealingModulePattern.addUser({id: 2, name: 'Swarna'});

console.log(revealingModulePattern.getUser(2));