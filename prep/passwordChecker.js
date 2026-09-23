
// const password = "secretword123";
// const userInput = "secretword123";
// if (userInput === password){
//    console.log("Correct password entered");
// }else {
//  console.log("Incorrect password entered")
//} 

// 2 Multiple outcomes
const password = "secretword123";
const userInput = "secretword123";
const adminPassword = "override";
//Changed the const to let so that the response variable can be changed
let response = "";

if (userInput === password){ 
  response = "Correct password entered";
} else if (userInput === adminPassword){
  response = "Admin access granted";
} else {
  response = "Incorrect password!";
}

console.log(response);