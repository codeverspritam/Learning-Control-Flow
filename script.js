// let age = prompt("tell your age?");
// if (age === null) {
//   console.error("age not getted");
// } else {
//   if (age.trim() === "") {
//     console.error("give your age details...");
//   } else {
//     age = Number(age);
//     if (isNaN(age)) {
//       console.error("plz enter a number...");
//     } else {
//       if (age < 1) {
//         console.error("wrong age...");
//       } else if (age >= 18) {
//         console.log("you can vote");
//       } else {
//         console.log("you can't vote");
//       }
//     }
//   }
// }

{
  for (let i = 1; i < 11; i++) {
    console.log(`5 x ${i} = ${5 * i} `);
  }
}
{
  for (let i = 1; i < 11; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
}
{
  for (let i = 1; i < 11; i++) {
    console.log(`8 x ${i} = ${8 * i}`);
  }
}
// multiplication table of 8
{
  let count = 0;

  for (let i = 1; i < 16; i++) {
    if (i > 8) {
      count++;
    }
  }
  console.log(count);
}
{
  let count = 0;
  for (let i = 1; i < 11; i++) {
    if (i > 4) {
      count++;
      console.log(i);
    }
    console.log(`total is ${count}`);
  }
}

{
  let count = 0;
  for (let i = 1; i < 41; i++) {
    if (i > 10) {
      count++;
      console.log(i);
    }
    console.log(`total is ${count}`);
  }
}

// multiplication table of 9

{
  let Password = "start";
  let pass = prompt("password bol");
  if (pass === null) {
    console.error("Abe dal ne password");
  } else {
    if (pass === Password) {
      console.log("aaja be ander be");
    } else {
      console.log("wrong password dala tune");
    }
  }
}

{
  let password = "pritam";
  let pass = prompt("Passwoord kaya hai ");
  if (pass === null) {
    console.error("sahi password bol be ");
  } else {
    if (pass === password) {
      console.log("sahi bola tune");
    } else {
      console.log(`${pass} is not a password `);
    }
  }
}

// three attempt password

{
  let i = 1;
  while (i < 11) {
    console.log("hello");
    i++;
  }
}

// {
//   let i = 11;
//   while (i < 11) {
//     console.log("hello");
//     i++;
//   }
// }
{
  let attempts = 0;
  let pass = "rock";
  let Khulgaya = false;
  let password = prompt("passwaord bolo bhai");
  attempts++;
  if (password === pass) Khulgaya = true;

  while (password !== pass) {
    if (attempts === 3) {
      console.error("Account ki to maa C**d gai....");
      break;
    }
    password = prompt("password bolo bahi");
    attempts++;
  }

  if (Khulgaya === true) {
    console.log("chal chalu karat hu mot ka khel");
  }
}

{
  let attemp = 0;
  let pass = "ending";
  let Khuljabe = false;
  let password = prompt("password bata de last bar");
  attemp++;
  if (password === pass) Khuljabe = true;
  while (password !== pass) {
    if (attemp === 3) {
      console.error(`abe ye ${pass} password nahi hai`);
      break;
    }
    password = prompt("password bata de last bar");
    attemp++;
  }

  if (Khuljabe === true) {
    console.log("jannat mai swaget hai");
  }
}
{
  let word = prompt("word bolo");
  let counter = 0;

  while (word !== "stop") {
    if (word === "yes") counter++;
    word = prompt("word bolo");
  }
  console.log(`total time yes count : ${counter}`);
}

{
  let word = prompt("word bolo");
  let counter = 0;

  while (word !== "stop") {
    if (word === "word bolo") counter++;
    word = prompt("word bolo");
  }
  console.log(`total time yes count : ${counter}`);
}

{
  let sum = 0;
  for (let i = 1; i < 31; i++) {
    if (i % 2 !== 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
}
{
  let m = 10;
  console.log(m--);
  console.log(m);
}
{
  let n = 5;
  let result = n++ + n;
  console.log(result);
}

// if else ...
{
  function getGrade(score) {
    if (score >= 90 && score <= 100) {
      return "A";
    } else if (score >= 80 && score <= 89) {
      return "B";
    } else if (score >= 70 && score <= 79) {
      return "C";
    } else if (score >= 60 && score <= 69) {
      return "D";
    } else if (score >= 33 && score <= 59) {
      return "E";
    } else if (score >= 0 && score <= 32) {
      return "Fail";
    } else {
      ("Invalid marks.....");
    }
  }
  getGrade(85);
}

//early return
{
  function getGrade(score) {
    if (score >= 90 && score <= 100) return "A";
    else if (score >= 80 && score <= 89) return "B";
    else if (score >= 70 && score <= 79) return "C";
    else if (score >= 60 && score <= 69) return "D";
    else if (score >= 33 && score <= 59) return "E";
    else if (score >= 0 && score <= 32) return "Fail";
    else {
      ("Invalid marks.....");
    }
  }
  getGrade(85);
}

// Rock Paper Scissor logic
{
  function rps(user, computer) {
    if (user === computer) return "tie";
    if (user === "rock" && computer === "scissor") return "user win";
    if (user === "paper" && computer === "rock") return "user win";
    if (user === "scissor" && computer === "paper") return "user win";

    return "computer win";
  }
  console.log(rps("scissor", "rock"));
}

// switch case
{
  switch (1) {
    case 1:
      console.log("no.1");
      break;
    case 2:
      console.log("no.2");
      break;
    case 3:
      console.log("no.3");
      break;
    default:
      console.log("not found");
  }
}
// loops
{
  start;
  while (end) {
    //code
    change;
  }
}
{
  let i = 1;
  while (i < 33) {
    //Code
    console.log(i);
    i++;
  }
}

// do while
{
  do {} while (end);
}
{
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i < 20);
}

// break and continue
{
  /*break */
  for (i = 1; i < 201; i++) {
    console.log(i);
    if (i === 32) {
      break;
    }
  }

  /*continue */
  for (i = 1; i < 201; i++) {
    if (i === 32) continue;
  }
  console.log(i);
}

// Q1. Print numbers from 1 to 10 using a for loop.

{
  for (let i = 1; i < 11; i++) {
    console.log(i);
  }
}
//Q2. print numbers from 10 to 1 using a for, while loop.
{
  //for
  for (let i = 10; i < 0; i--) {
    console.log(i);
  }
  // while
  let i = 10;
  while (i > 0) {
    console.log(i);
  }
}
// Q3. Print even number from 1 to 20 using a for loop.
{
  for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) console.log(i);
  }
}

// Q4. Print odd number from 1 to 15 using a while loop.
{
  let i = 1;
  while (i < 16) {
    if (i % 2 === 1) {
      console.log(i);
    }
    i++;
  }
}

// Q5. Print the Multiplication table of 5 (5 x 1 = 5 to 5 x 10 = 50)

{
  for (i = 1; i < 11; i++) {
    console.log(`5 x ${i} = ${i * 5}`);
  }
}

// Q6. Fingd the sum of numbers from 1 to 100 using a loop.
{
  let sum = 0;
  for (let i = 1; i < 101; i++) {
    sum = sum + i;
  }
  console.log(sum);
}

// Q7. Print all number between 1 to 50 that are divisible by 3.

{
  for (let i = 1; i < 51; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}

// Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd.("1 is odd", "2 is even", ... )

{
  let val = prompt("give a number");

  for (let i = 1; i <= val; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
}

// Q9. Count how many numbers between 1 to 100 are divisible by both 3 and 5

{
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
}
/* Q 10. Stop a First Multiple of 7
Write a loop rom 1 to 100 that;
 > Prints each number 
 > Stop completely when it finds the first number 
 divisible by 7 
*/
{
  for (let i = 1; i < 101; i++) {
    console.log(i);
    if (i % 7 === 0) break;
  }
}

/*Q 11. Skip  Multiples of 3
Write a loop from 1 to 20 that:
 > Skip numbers divisible by 3 
 > Prints all others
  - use Continue 
  Expected Output:
  1 2 4 5 7 8 10 11 .... (no 3,6,9, etc.)
*/
{
  for (let i = 1; i < 21; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
  }
}

/*Q 12. Print First 5 Odd Numbers Only 
  Write a loop from 1 to 100 that:
  > Prints only 5 odd Number 
  >Then stop the loop
  user both if, continue, and a counter + break 
  Expected output:
  1 3 5 7 9 
*/
{
  let count = 0;
  for (let i = 1; i < 101; i++) {
    if (i % 2 === 1) {
      count++;
      console.log(i);
    }
    if (count === 5) break;
  }
}
// Default, rest and spread Parameters

/*Default Parameters*/
function add(v1 = 0, v2 = 0) {
  console.log(v1 + v2);
}
add();

/*Rest Parameters */
function abcd(...val) {
  console.log(val);
}
abcd(1, 2, 3, 4, 5, 6);

function abcd(a, b, c, ...val) {
  console.log(a, b, c, val);
}
abcd(1, 2, 3, 4, 5, 6);

// return values and early return

/*return values */
function abcd(v) {
  return 12 + v;
}
let val = abcd(24);
console.log(val);
{
  function xyz(a) {
    return 12 + a;
  }
  let val = xyz(20);
  console.log(val);
}

//Functions

/*Functions declarations*/
function lolo() {
  console.log("Happy New Year");
}

lolo();

/*expressions function */
let fnc = function () {
  console.log("hayhayhayhayhay");
};
fnc();
/*Arrow functions */

let think = () => {
  console.log("heygays");
};
think();

let start = () => {
  console.log("work start");
};
fnc();

let stop = () => {
  console.log("work stop");
};
stop();

/*
type:-1
function abcd(){

}
type:-2
let fnc = function(){

}
type:-3
let abcd = ()=>{
  
}
*/
/*Parameters and arguments */

function add(v1, v2) {
  console.log(v1 + v2); /*(v1, v2 ) this all are Parameters */
}

add(1, 2); /* add( 1,2 then 11,22 then 111,222 This all are Arguments)*/
add(11, 22);
add(111, 222);

// Default, rest and spread parameters

/*Default */
function add(a1 = 0, a2 = 0) {
  console.log(a1 + a2);
}
add(1 + 2);

/*Rest operator */
// jab arguments kai saare ho to humein utne hi parameter banaana padege, issey bachne ke liye, hum rest ka use karte hai... agar... function ke parameter  space main lage to wo rest operator hai.
{
  function abcd(a, b, c, ...val) {
    console.log(val);
  }
  abcd(1, 2, 3, 4, 5, 6);
}
{
  function abcd(v) {
    return 12 + v;
  }
  let val = abcd(24);
  console.log(val);
}

// first class function -> fuction ko values ki tara treat kr sakte hai
function abcd(val) {
  val();
}
abcd(function () {
  console.log("hey");
});
/*so first class aak jisme function ko hm value kin tarajha use kr sakte hai pure function mai value function ke tara use ho sakte hai */

//high order function -> aise function jo ki return kare aak function ya fir acceept kare ek function apne parameter mai
{
  function abcd() {
    return function () {
      console.log("hay");
    };
  }
  abcd()();
}
{
  function abcd() {
    return function () {
      return function () {
        console.log("123");
      };
    };
  }
  abcd()()();
}
/* So Higher oreder ek aisa function jo ya to parametermai function acceept kare nahito return kare ek function or vo dono saath main bhi kr sakta hai*/

// pure vs impure functions
/* aisa functions jo baahar ki value ko na badle wo hai pure functions*/
function abcd() {
  console.log("hay ");
}
abcd();
/* aisa functions jo baahar ki value ko badal de wo hai impure functions */
let a = 10;
function ok() {
  a++;
}
console.log(a);

// closures -> ek function jo return kare ek aur function aur return hone waala function humesha use karega parent function ka koi variable
function abcd() {
  let a = 10;
  return function () {
    console.log(a);
  };
}
abcd()();

//Lexical scoping  -> ek inner function apne parent function ke variable ko use kr sake. jaha vo  code main deffine kiya gaya hai.
{
  function abcd() {
    let a = 10;
    function efgh() {
      let b = 11;
      function ijkl() {
        let c = 12;
        console.log(c);
        console.log(b);
        console.log(a);
      }
      ijkl();
    }
    efgh();
  }
  abcd();
}
/*Lexical example */

{
  function abcd() {
    let a = 10; // 'a' is in abcd's scope
    function efgh() {
      let b = 11; // 'b' is in efgh's scope
      function ijkl() {
        let c = 12; // 'c' is in ijkl's scope
        console.log("Inside ijkl function:");
        console.log("Value of c:", c); // Accessing its own variable
        console.log("Value of b (from efgh):", b); // Accessing 'b' due to lexical scoping
        console.log("Value of a (from abcd):", a); // Accessing 'a' due to lexical scoping
      }
      ijkl(); // Calling ijkl to execute it
    }
    efgh(); // Calling efgh to execute it
  }
  abcd(); // Calling abcd to execute it
}

// IIFE (Immediately invoked Function Expressions)
(function () {
  console.log("hay");
})();

// Hosting
/*Agar hm function statement banai to hm run kar sakte hai funson ko pehele agar vo hosting ho   */
{
  abcd();

  function abcd() {
    console.log("hey");
  }
}

/*Q.1: What's the diffrence between function declaration and expresssion in terms of hoisting? */

//this is  hoisting
abcd();

function abcd() {}

//this is not hoisting
abcd();

let abcd = function () {};
// hoisting example

greet();

function greet() {
  console.log("Hello!");
}

/*Q2: Convert this function into an arrow function */

{
  function multiply(a, b) {
    return a * b;
  }
  /*now in arrow function */
  let multiply = (a, b) => {
    return a * b;
  };
}

/* Q3: Identify the parameter and arguments */
function welcome(country) {
  console.log(country);
} // country = parameter
welcome("India"); // "India" = argument

/*Q4: How many parameters does this function have, and how many arguments are passed?*/
function demo(a, b, c) {
  demo(1, 2);
}
/*3 parameters and 2 argunments */

/*Q5: predict output */
function sayHi(name = "Guest") {
  console.log("Hi", name);
}
sayHi();
/*Output = Hi Guest */

/*Q6: What does the ... operator mean in parameters ? */
function abcd(...val) {
  console.log(...val);
}
abcd(1, 2, 3, 4, 5, 6);

/*Q7: Use rest parameter to accept any number of scores and return the total. */
{
  function getScore(...scores) {
    let total = 0;
    scores.forEach(function (val) {
      total = total + val;
    });
    return total;
  }
  console.log(getScore(10, 12, 14, 16, 18));
}

/*Q8: Fix the function using early return. */
function checkAge(age) {
  if (age < 18) {
    console.log("Too young");
  } else {
    console.log("Allowed");
  }
  /*so */
  {
    function checkage(age) {
      if (age < 18) return "Too young";
      return "Allowed";
    }
    console.log(checkage(22));
  }
}

/*Q9: What is the return value of this function? */
{
  function f() {
    return;
  }
  console.log(f());
  /*Output = Undefined */
}

/*Q10: What does it mean when we say "functions are first-class citizens"? */

/*In JavaScript, when we say "functions are first-class citizens" (or "first-class functions"), it means that functions are treated like any other variable. You can:

1. Assign them to variables: Store a function in a variable.
2. Pass them as arguments: Send a function as an input to another function.
3. Return them from other functions: A function can produce another function as its output.
Here's a code example demonstrating these concepts: */
// 1. Assigning a function to a variable
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("Alice")); // Output: Hello, Alice!

// 2. Passing a function as an argument (callback)
function operateOnNumbers(num1, num2, operation) {
  return operation(num1, num2);
}

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

console.log(operateOnNumbers(10, 5, add)); // Output: 15
console.log(operateOnNumbers(10, 5, subtract)); // Output: 5

// 3. Returning a function from another function (higher-order function / closure)
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const multiplyByTwo = createMultiplier(2);
const multiplyByTen = createMultiplier(10);

console.log(multiplyByTwo(5)); // Output: 10
console.log(multiplyByTen(5)); // Output: 50

/*Q11: Can you assign a function a variable and then call it show how. */
{
  let a = function () {};
  a();

  // Define a function
  function sayHello() {
    return "Hello from the function!";
  }

  // Assign the function to a variable
  const myFuncVariable = sayHello;

  // Call the function using the variable
  console.log(myFuncVariable()); // Output: Hello from the function!

  // You can also define an anonymous function and assign it directly
  const greetUser = function (name) {
    return `Hi, ${name}!`;
  };

  console.log(greetUser("Alice")); // Output: Hi, Alice!
}

/*Q12: Pass a function into another function and execute it inside. */
{
  function abcd() {
    val();
  }
  abcd(function () {
    console.log("hay");
  });
}

/*Q13: What is a highter-order function? */
/*Higher-order functions are a fundamental concept in functional programming and allow for greater abstraction, reusability, and composability of code. */
/*A higher-order function is a function that does at least one of the following:

1. Takes one or more functions as arguments.*/

// Example from your code: The operate function takes add or subtract as an argument.

function operate(num1, num2, operation) {
  return operation(num1, num2);
}

/*2. Returns a function as its result.*/

//Example from your code: The createMultiplier function returns an anonymous function.

function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

{
  function abcd(val) {
    val();
  }
  abcd(function () {});
}

/*Q14: Convert the above function into a pure function */
let total = 0;
function addTotal(num) {
  let newtotal = total;
  newtotal += num;
}

/*Q15: What is a closure? when is it created? */
/*A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In simpler terms, a closure gives you access to an outer function's scope from an inner function.*/

/*When is it created?
A closure is created every time a function is created, at function creation time. It "remembers" its lexical environment (the variables and functions that were in scope where it was defined) even when the function is executed outside that environment. */

function abcd() {
  let val = 0;
  return function () {
    console.log(val);
  };
}

/*Q16: What will console.log output? */

{
  function outer() {
    let count = 0;
    return function () {
      count++;
      console.log(count);
    };
  }
  let counter = outer();
  counter(); // output = 1
  counter(); // output = 2
}

/*Q17: Convert this normal funtion into an IIFE */
(function init() {
  console.log("now i am IIFE functionF");
});

/*Q18: What is the use of IIFE? Name one real-world use case. */
//An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined.

/*Use of IIFE:
The primary use of an IIFE is to create a private scope for variables and functions, thereby preventing them from polluting the global scope. This helps in avoiding naming conflicts and keeps the global namespace clean.*/

/*Real-world use case:
A common real-world use case for IIFEs is in the Module Pattern to encapsulate code and create private variables and methods, exposing only a public interface. This was widely used before ES6 modules became standard.*/
{
  let MyModule = (function () {
    let privateVariable = "I am private";

    function privateMethod() {
      console.log(privateVariable);
    }

    return {
      publicMethod: function () {
        console.log("This is a public method.");
        privateMethod();
      },
      publicProperty: "I am public",
    };
  })();
}

MyModule.publicMethod(); // Output: This is a public method. \n I am private
// console.log(MyModule.privateVariable); // Undefined - cannot access private variable
{
  let points = (function () {
    let score = 0;
    return {
      getScore: function () {
        console.log(score);
      },
      setScore: function (val) {
        score = val;
      },
    };
  })();
}
