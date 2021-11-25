//Iterator example

function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < names.length ? 
                {value: names[nextIndex++], done: false} :
                {done: true}
        }
    }
}

const names = ['shatabdi', 'biswas', 'swarna']
const it = nameIterator(names);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); //done will be true. and the value will be undefined


//Generator Example
function* printNumbers() { // * is used to mark a function as generator
    let x = 0;
    while(true) {
        yield x++; //yield works as return
    }
}
const print = printNumbers();
console.log(print.next());
console.log(print.next());
console.log(print.next());
console.log(print.next());

