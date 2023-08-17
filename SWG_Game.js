// const prompt = require("prompt-sync")();

let arr = ["S", "W", "G"];

function comp_choice() {
  return arr[Math.floor(Math.random() * arr.length)];
}
// document.write.background = "white";
i = 0;
ans_arr = [];
while (i < 10) {
  i = i + 1;
  comp_ans = comp_choice();
  user_choice = prompt(
    'Choose Your Response, "S" for SNAKE, "W" for WATER or "G" for GUN: '
  );
  user_choice = user_choice.toUpperCase();
  // console.log(`<hr>`);
  if (user_choice === comp_ans) {
    ans_arr.push("D");
    alert("Match Draw");
    document.write(
      `Match Draw, You Choose: ${user_choice}, Computer Chose: ${comp_ans} <hr>`
    );
  } else if (user_choice === "S" && comp_ans === "W") {
    ans_arr.push("W");
    alert("You Won");
    document.write(
      `You Won, You Chose: ${user_choice}, Computer Chose: ${comp_ans} <hr> `
    );
  } else if (user_choice === "S" && comp_ans === "G") {
    ans_arr.push("L");
    alert("You Lost");
    document.write(
      `You Lost, You Chose: ${user_choice}, Computer Chose: ${comp_ans} <hr>`
    );
  } else if (user_choice === "W" && comp_ans === "G") {
    ans_arr.push("W");
    alert("You Won");
    document.write(
      `You Won, You Chose: ${user_choice}, Computer Chose: ${comp_ans} <hr>`
    );
  } else if (user_choice === "W" && comp_ans === "S") {
    ans_arr.push("L");
    alert("You Lost");
    document.write(
      `You Lost, You Chose: ${user_choice}, Computer Chose: ${comp_ans} <hr>`
    );
  } else if (user_choice === "G" && comp_ans === "S") {
    ans_arr.push("W");
    alert("You Won");
    document.write(
      `You Won, You Chose: ${user_choice}, Computer Chose: ${comp_ans} <hr>`
    );
  } else if (user_choice === "G" && comp_ans === "W") {
    ans_arr.push("L");
    alert("You Lost");
    document.write(
      `You Lost, You Chose: ${user_choice}, Computer Chose: ${comp_ans} <hr>`
    );
    // }
  } else {
    alert("Invalid Input");
    document.write(`Give a valid input<hr>`);
  }
}

let t_length = 10;

let loose = ans_arr.filter((x) => x == "L");
let win = ans_arr.filter((x) => x == "W");
let draw = ans_arr.filter((x) => x == "D");

if (win.length > loose.length) {
  document.write("You Won the Match.<br>");
} else if (win.length == loose.length) {
  document.write("Match Draw!<br>");
} else {
  document.write("You Lost the Match.<br>");
}

document.write(
  `Your Score is :  ${win.length} wins out of ${
    ans_arr.length
  } valid choices with ${draw.length} draws, ${loose.length} losts and ${
    t_length - ans_arr.length
  } invalids.<hr>`
);
