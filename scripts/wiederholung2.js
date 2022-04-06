// //Functions
//// Conditionals
// //loops
//// predefined Objects
// Objects


function addTwoNumbers(a=1, b=1){
    if (typeof(a) === "number" && typeof(b) === "number")
        return a+b;
    else if(a > 0){
        return a+b;
    }
    else{
        return "Geht nicht";
    }
}

switch(variable) {
    case "A":
        "A";
        break;
    default:
        "default";
}

// while
// do while
// for

// doof:
// while, do while

// cool
// for

// Kopfgesteuerten
// for()
// while()

//Fußgesteuereten
// do while()

// array
// string

// numArr = new Array(1, 2, 3);
let numArr = [1, 2, 3, 4, 5, 6];

let evenNum = numArr.filter(x => x % 2 === 0);

console.log(numArr[3]);

// Objects:

// 1. literal JSON 
let person1 = {bla: "blub"};

// 2. Object COnstructor
let person2 = new Object();
person2.bla = "blubb";
person2["foo"] = "bar";

// 3. Shorthand
let foo = "bar";
let peroson3 = {foo};