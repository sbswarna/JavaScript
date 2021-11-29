const singletonPattern = (function () {
    let instance;

    function createInstance () {
        const obj = new Object({firstname: 'Shatabdi', lastname: 'Biswas'});
        return obj;
    }
    function getInstance () {
        if(!instance) {
            instance = createInstance();
        }
        return instance;
    }
    return {
        getInstance: getInstance
    }
})();

const instance1 = singletonPattern.getInstance();
console.log(instance1);

const instance2 = singletonPattern.getInstance();
console.log(instance2);

if(instance1 === instance2) {
    console.log('Both are same.')
}