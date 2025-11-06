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
  let Password = "wwe";
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
  let pass = "jadu";
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

{let  sum = 0;
  for (let i = 1; i < 31; i++) {
    if (i % 2 !== 0) {
    sum =  sum +i; 
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
function getGrade(score){
  if(score >= 90 && score<= 100){
    return'A';
  }
  else if (score >= 80 && score <= 89 ){
    return'B';
  }
  else if (score >= 70 && score <= 79){
    return'C';
  }
  else if (score >= 60 && score <= 69){
    return'D';
  }
  else if (score >= 33 && score <= 59){
    return'E'
  }
  else if (score >= 0 && score <= 32){
    return'Fail'
  }
  else {"Invalid marks....."}
}
getGrade(85);
}


// end of script.js
// {
//   let age = prompt("tell me your age bro");
//   if (age === null) {
//     console.error("bro what is your age ?");
//   } else {
//     if (age.trim() === "") {
//       console.error("man what are you doing...");
//     } else {
//       if (age < 0) {
//         console.error("marunga sir pe hugega gharpre chal bhag yaha se.....");
//       } else if (age >= 18) {
//         console.log("chal aa ja ");
//       } else {
//         if (age >= 50) {
//           console.log("chcha kaise ho");
//         } else {
//           console.log("tu abhi ja re ");
//         }
//       }
//     }
//   }
// }
