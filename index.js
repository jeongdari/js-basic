console.log("Hello Danny!");
let name = 'Danny';
console.log(name);
const interestRate = 0.3;
console.log(interestRate);
let age = 30;
let isApproved = true;
let firstName = undefined;
let selectedColor = null;


let person = {
    name: 'Danny',
    age: 46
};
person.name = 'Da Un';
person['name'] = 'Mary'
console.log(person);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[4] = 'yellow';
selectedColors[3] = 'grey';
console.log(selectedColors[3]);
console.log(selectedColors);


function greet(name) {
    console.log ('Hello ' + name)
}
greet('Danny')
