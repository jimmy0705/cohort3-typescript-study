//problem-1
function hello(firstName) {
    console.log('hello' + firstName);
}
hello('yoyo');
//problem-2
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
//problem 3
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(8));
console.log(isLegal(19));
//problem 4
function one(x) {
    setTimeout(x, 1000);
}
one(function () { return console.log('typeScript'); });
var person1 = {
    name: 'jimmy',
    age: 25,
    greet: function () { return 'hi'; },
};
console.log(person1.greet());
