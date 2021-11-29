const factory = function () {
  this.createMember = function (name, memberType) {

    let member;

    if (memberType === "simple") {
        member = new simpleMember(name);
    } else if(memberType === "standard") {
        member = new standardMember(name);
    } else if(memberType === "super") {
        member = new superMember(name);
    }
    member.type = memberType;

    member.details = function() {
        console.log(`${this.name}: ${this.type} member \ncost: ${this.cost}`);
    }
    return member;
  };
};

const simpleMember = function (name) {

    this.name = name;
    this.cost = '$5';
}
const standardMember = function (name) {

    this.name = name;
    this.cost = '$15';
}
const superMember = function (name) {

    this.name = name;
    this.cost = '$25';
}

let members = [];

const f = new factory();
members.push(f.createMember('Shatabdi', 'super'));
members.push(f.createMember('Biswas', 'standard'));
members.push(f.createMember('Swarna', 'simple'));
//console.log(members)

members.forEach(function (member) {
    console.log(member.details());
})

