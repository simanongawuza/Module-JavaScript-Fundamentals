
// const password = "secretword123";
// const userInput = "secretword123";
// if (userInput === password){
//    console.log("Correct password entered");
// }else {
//  console.log("Incorrect password entered")
//} 

// 2 Multiple outcomes
const password = "secretword123";
const userInput = "override";
const adminPassword = "override";

if (userInput === password){
  console.log("Correct password entered");
} else if (userInput === adminPassword){
    console.log("Admin access granted")
}else {
  console.log("Incorrect password!");
}