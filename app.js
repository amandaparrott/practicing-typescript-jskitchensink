var myName = 'Amanda';
var usStates = 50;
var sum = 4 + 5;
// Hello World alert
function sayHello() {
    alert('Hello World');
}
;
sayHello();
// checking age
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you are not old enough to view this page!");
    }
    ;
}
;
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
// favorite veggies
var favVeggies = ["Asparagus", "Brussel Sprouts", "Sweet Potatoes"];
// loop for veggies
for (var i = 0; i < favVeggies.length; ++i) {
    console.log(favVeggies[i]);
}
;
//object for pet
var myPet = {
    name: 'Molly',
    breed: 'Calico'
};
// console log for pet
console.log(myPet.name, myPet.breed);
// 5 objects with name and age
var people = [
    {
        name: "Amy",
        age: 32
    },
    {
        name: "Linc",
        age: 35
    },
    {
        name: "Paul",
        age: 40
    },
    {
        name: "chelsea",
        age: 20
    },
    {
        name: "Maya",
        age: 18
    },
];
// run objects through loop
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
// getLength function
function getLength(word) {
    return word.length;
}
var wordLength = getLength('Hello World');
console.log(wordLength);
function isEven(length) {
    if (length % 2 == 0) {
        console.log('The world is nice and even!');
    }
    else {
        console.log('The world is an odd place!');
    }
}
;
isEven(wordLength);
