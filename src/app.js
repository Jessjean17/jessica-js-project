/* eslint-disable */
//write your code here
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
function myFunction(arr) {
  return Math.floor(Math.random() * arr.length);
}
let result = `${who[myFunction(who)]}
  ${action[myFunction(action)]}
    ${what[myFunction(what)]} 
    ${when[myFunction(when)]}`;
document.getElementById("excuse").innerHTML = result;
