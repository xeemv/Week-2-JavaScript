//wk 2 teaching videos
var x = 45;
var y = 16;
console.log( x - y);0
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log('whatever is next');
//

//this will pull the even numbers out of the loop and only display those using the % sign
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
    console.log(i);
    }
}
//

//while loop
let names = ['Sam', 'Tom', 'Hillary'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
let a = 110;
while (a < 10) {
    console.log(a);
    a++;
}
//do-while loop
do {
    console.log(a);
} while (a < 10)
//short version of writing the traditional four loop
//this will repeat the name
for (i in names) {
    console.log(names[i]); //console.log(i);
}
//could use names instead of i
//of will loop through the object/value of "i" and not the index
//the difference of the names
for (i of names) { //for (names of names) {
    console.log(i); //console.log(names)}
}
//


//User Input lesson section
//this will prompt the window to create a pop-up message
//do not worry about why line 45 cross out "name"; it will work
//if you use ' or "" it will not generate the user's name
var name = window.prompt('what is your name?');
window.alert(`Welcome, ${name}`); //what the user will see after they enter their name
//per Javy and Mark on the general slack channel, vscode strike thru global scope variables not defined in a constructor or other format.
//per Mark, some web browsers and coding languages reserve "name" as a keyword and does not allow "name" as a variable
//Per Mark, a way to avoid this is to change the variable to userName or firstName

//username and password credentials
let username = prompt(`Username:`);
let password = prompt(`Password:`);

if (username == 'sammy123' && password == '12345') {
    alert('welcome back, ' + username);     //most browsers will let you call prompt with out windows.alert
} else {
    alert('Incorrect username or password');
} //next step is to add a loop to keep asking the user to enter username or password until correct
///

///
var loggedIn = false;

while(!loggedIn) {
    let username = prompt(`Username:`);
    let password = prompt(`Password:`);

    if (username == 'sammy123' && password == '12345') {
        alert('welcome back, ' + username);
        loggedIn = true;   //if the login credentials is correct, browser will give access, stop prompt, and end the loop
    } else {
        alert('Incorrect username or password');
    }  
}