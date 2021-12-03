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
    console.log('Speed up! Dad is mad!'); //we are using our own logic since there is a greater than, equal to, so we must have a less then. In this statement, do not need to use "else if" and can leave "else" as is
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
//if(alarmSet && openDoor) {    <---we can only do this with boolean values or to check to see if something is not empty (empty string values because it is checking for the value)
//  console.log("Sound Alarm!");
//}

//**solutiion 3 code result should be:
//if(alarmSet && openDoor) { 
//  console.log("Sound Alarm!");
//}


// #3 create two variables, username and password
var username = "Tommy123";
var password = "12345";
// create a conditional, if the username is "Tommy123" and the password is "12345"
if (username = "Tommy1223");
// or the username is "Timmy456" and the password is "6789", print "Admin Login Successful" to the console
// otherwise, print "Admin Access Denied"




// write code that will set the value of studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle
// 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
// Anything other than these values will return "Error" to the console





// write a for loop that will iterate backwards from 10 to -10



// write a do/while loop that prints 1 through 50


// edit the previous do/while loop so that it prints the remainder when the loop number is divided by 4


// Someone messed up the following for loop
// fix the following infinite loop, uncomment to test
/* 
    for(let i = 11; i > 10; i++){
        console.log(i);
    } 
*/

