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
