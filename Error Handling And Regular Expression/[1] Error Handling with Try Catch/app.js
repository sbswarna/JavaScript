const user = {name: 'sbs'};

try {
    // console.log('This is try block execution. In try block, we test something');
    // //Reference error example. 
    // undefinedFunc();
    // //Type error example.
    // null.undefinedFunc();
    // //Syntax Error
    // eval('Hello World'); //eval() evaluates hello as variable.
    //custom error
    if(!user.email) {
        throw 'User does not have any email'
    }
} catch(error) {
    console.log('This is catch block execution. Catch block catches and handles errors')
    console.log(error);
    // console.log(error.message);
    // console.log(error.name);
} finally {
    console.log('This is finally block execution. Finally block executes no matter what happens');
}
//Try catch block helps to continue program even if error occurs
console.log('This block executes after try-catch. Program Continues!');