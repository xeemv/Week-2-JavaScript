// #1 create a variable called speedLimit and another called mySpeed
// set their values to numbers between 1 and 100
var speedLimit = 40;
var mySpeed = 90;

// using a conditional, determine if mySpeed is greater than the speedLimit
if(mySpeed > speedLimit) {
    console.log('Slow Down! Mom is mad!'); // if true, print "Slow Down! Mom is mad!" to the console
} else if(mySpeed == speedLimit) { // if mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
    console.log('Everyone is happy!');
} else {  // if mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
    console.log('Speed up! Dad is mad!'); //**we are using our own logic since there is a greater than, equal to, so we must have a less then. In this statement, do not need to use "else if" and can leave "else" as is**//
} //my answer is 'Slow Down! Mom is mad!


// #2 create two variables, one named alarmSet, the other openDoor
// set them to a boolean value
let alarmSet = true; //true = open
let openDoor = false; //this is saying it's closed

// using a conditional, determine if alarm is set. 
if(alarmSet = true) {   // if alarm is set and door is set to open, print "Sound Alarm!" to the console
    console.log('Sound Alarm!');
} else {
    console.log("Everything is fine."); // otherwise, print "Everything is fine." to the console.
}   //this did solve the answer but not what is used in the vide

//if(alarmSet == true) {  **solution 1
//  if(opendoor == true) {
//      console.log("Sound Alarm!");
//  }    
//}


//**soution 2/simplify ---> since the operator "and (symbol = &&)" is in the question and combine w/ openDoor
//if(alarmSet == true && openDoor == true) {  
//  if(opendoor == true) {  <---NO NEED FOR THIS LINE OF CODE **DELETE**
//      console.log("Sound Alarm!");
//  }    
//}

//**solutiion 2 code result should be:
//if(alarmSet == true && openDoor == true) { 
//  console.log("Sound Alarm!");
//}

//**solution 3 = simplify some more
//if statment is checking to see if something is true
// if statement, openDoor, and alarmSet = boolean value
//if alarmSet = true or false
//if(alarmSet && openDoor) {    //** <---we can only do this with boolean values or to check to see if something is not empty (empty string values because it is checking for the value)**//
//  console.log("Sound Alarm!");
//}

//**solutiion 3 code result should be:
//if(alarmSet && openDoor) { 
//  console.log("Sound Alarm!");
//}


// #3 create two variables, username and password
let username; //nothing is placed here because we weren't given the variables; only the condition
let password; //nothing is placed here because we weren't given the variables; only the condition

// create a conditional, if the username is "Tommy123" and the password is "12345"
if ((username === "Tommy1223" && password === "12345") || (username === "Timmy456" && password === "64789")) {  
//"or" symbol is || **make sure to start one condition before the second condition in the case of "or"
//use 3 equal symbols(===) to make a string and exactly for both Tommy1234 and Timmy456
    console.log("Admin Login Successful");
} else {
    console.log("Admin Access Denied")
}
// or the username is "Timmy456" and the password is "6789", print "Admin Login Successful" to the console
// otherwise, print "Admin Access Denied"
//result = "Admin Access Denied"



// #4 write code that will set the value of studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle
// 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
//let studentGrade; how you woud write the code first value if you dont know the grade or class
//let studentClass;

let studentGrade = 11;
let studentClass;


switch(studentGrade){ //leave this section as is so that the code could determine which class a grade is associated with
    case 'K':
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:   
    case 6:   
        studentClass = "Elementary";
        break; //break; means that if it's any of case 1 - 6, it will run the code against those conditions and stop without running the other cases.
        //a quick check for large cases
        //if it didn't find it after case 1-6, the code will run against the next set of cases below the first break
   // case "1": //this is a repeating element
    //in coding, we want to look for repeating elements and look for another way to write the code. 
    //** No need to write this case code from K-12 since it's repeating elements
        //studentClass = "Elementary";
    case 7:
        studentClass = "Middle";
        break;
    case 8:
        studentClass = "Middle";
        break;
    case 9:
        studentClass = "Freshman";
        break;
    case 10:
        studentClass = "Sophomore";
        break;
    case 11:
        studentClass = "Junior";
        break;
    case 12:
        studentClass = "Senior";
        break;
    default:
        console.log("Error"); // Anything other than these values will return "Error" to the console
}
console.log(studentClass);
//


// #6 write a for loop that will iterate backwards from 10 to -10
for(let i = 10; i >= -10; i--){ //i-- is to go backwards from what ever i was 
    console.log(7);
}
//

// #7 write a do/while loop that prints 1 through 50
let iterator = 1;
do {
    console.log(iterator);
    iterator++;
 } while(iterator <= 50); // **you always want to start with the while portion of the loop - it allows us to stop an infinite loop or preventing errors from occurring if we accidentally put something in there**//
//* this will create a stack overflow that we do not want to occur causing something to crash*//

// #8 edit the previous do/while loop so that it prints the remainder when the loop number is divided by 4

// divide = using the precentage sign %
// for example: 10/5 = 2
// 7/3 = 2 w/ remainder of 1
do {
    console.log(iterator % 4); // added modulus to this section of the loop
    iterator++;
 } while(iterator <= 50); 


// # 9 Someone messed up the following for loop
// fix the following infinite loop, uncomment to test
/* 
    for(let i = 11; i > 10; i++){
        console.log(i);
    } 
*/

// ** do not attempt to take this code out of the uncomment as it will cause a stack overflow and crash something. Just rewrite the correct answer.**//

// the issue is that the i is already starting at 11 which is greater than 10.
// this means that the loop will continue to run infinitely

// for(let i = 1; i < 10; i++); { <-- this is a possible solution to stop the loop
//      console.log(i);
//} **this will print 1-9

// for(let i = 11; i < 100; i++); { <-- this is a possible solution to stop the loop
//      console.log(i);
//} **this will print 11-99


// for(let i = 110; i > 10; i++); { <-- this is a possible solution to stop the loop
//      console.log(i);
//} **this will print 110-10 ==> counting backwards

//OpenClass:
// #1 what is the expect output?
var a = 100;
var b = 200;
var c = 300;
console.log(a >= b || a <= c);
//

//#2
a = 2;
b = 15;
c = 9;
console.log(a >= b || a <= c && a + c > b);
//

// #3 What is the expected output?
var num1 = 16;
var num2 = 52;
var num3 = 45;

console.log(num1 >= num2);
console.log(num2 <= num3);
console.log(num1 < num3);
//

// #4 What is the expected output?
var num1 = 16;
var num2 = 52;
var num3 = 45;

console.log(num1 >= num2 && num3 > 2 );
//

// #1 What will be printed to the console? ---Openclass Conditionals
if (45 > 45) {
    console.log("Poodles")
}   else {
    console.log("Labradors")
}
//

// #2 What will print to the console if num1 = 3 and num2 = 5?
if(num1 == num2) {
    console.log("A");
} else if (num1 > num2) {
    console.log("B");
} else {
    console.log("C");
}
//

// #3 What will print to the console?
var num1 = 37;
if(num1){
    console.log("Parakeet")
} else {
    console.log("Parrot")
}
//

// #5 What will print to the console if num1 = 5 and num2 = 5?
num1 = 5
num2 = 5
if (num1 == num2) {
    console.log("A");
} else if (num1 >= num2) {
    console.log("B");
} else {
    console.log("C");
}
//

// Loop section
// #1 - will the following code accomplish the same task?

//var i = 0;
//do{
//    if(i % 3 === 0){
//        console.log(i);
//    }
//   i++;
//} 
//while (i <= 99)

// loops #3
// // do {
//      console.log("The bowl contains " + currentCupsOfRice++ + " cups of rice.");
//  } while(currentCupsOfRice !== requiredCupsOfRice);
// console.log("We have enough rice!");
// //

// // for (var i = 0; i < 10; i--) {

//     console.log(i);
  
//   }

var name = "Tommy";

var age = 52;

if (name == "Tommy") {

  console.log("Hi, Tommy!");

} else if (age == 52) {

  console.log("52 years old.");

}