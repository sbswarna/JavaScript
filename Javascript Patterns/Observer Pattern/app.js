function Subject () {
    this.observers = [];
}
Subject.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
    },
    unsubscribe: function (fn) {
        this.observers = this.observers.filter(function (f) {
            if(f !== fn) {
                return fn;
            }
        })
        console.log(`${fn.name} unsubscribed!`);
    },
    fire: function (fn) {
        this.observers.forEach (function (f) {
            f.call();
        })
    }
}

const observer1 = function () {
    console.log('observer 1 fired!');
}

const observer2 = function () {
    console.log('observer 2 fired!');
}

const sub = new Subject();

sub.subscribe(observer1);
sub.subscribe(observer2);
sub.unsubscribe(observer1);

sub.fire();