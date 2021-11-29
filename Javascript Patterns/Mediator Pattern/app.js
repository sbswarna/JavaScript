const Users = function (name) {
    this.name = name;
    this.chatroom = null;
}
Users.prototype = {
    send: function (msg, to) {
        this.chatroom.send(msg, this, to);
    },
    receive: function (msg, from) {
        console.log(`${from.name} to ${this.name}: ${msg}`);
    }
}

const chatroom = function () {
    let users = {};

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(msg, from, to) {
            if(to) {
                to.receive(msg, from);
            }
            else {
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].receive(msg, from);
                    }
                }
            }
        }
    }
}
const u1 = new Users('shatabdi');
const u2 = new Users('biswas');
const u3 = new Users('swarna');

const chatrm = new chatroom();
chatrm.register(u1);
chatrm.register(u2);
chatrm.register(u3);

u1.send('Hello', u2);
u2.send('Hello', u3);
u3.send('Hello Everyone!');
