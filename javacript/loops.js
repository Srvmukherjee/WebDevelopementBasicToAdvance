//Check a number is even or odd:
// for(let i=0; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
//     }else{
//         continue;
//     }
// }

// Guess the number:
let num1 = 4;
let userNum = prompt("Guess the number:");
while( userNum != num1){
 userNum = prompt("Guess again") ;  
}
console.log("Congrats");