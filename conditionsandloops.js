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
let username; //nothing is placed here because we weren't given the variables; only the condition
let password; //nothing is placed here because we weren't given the variables; only the condition

// create a conditional, if the username is "Tommy123" and the password is "12345"
if ((username === "Tommy1223" && password === "12345") || (username === "Timmy456" && password === "64789")) {  //"or" symbol is || **make sure to start one condition before the second condition in the case of "or"
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

let studentClass = 1;
let studentGrade;


switch(studentGrade = "K"){
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
   // case "1": //this is a repearing element
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

