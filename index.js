//wk 2 teaching videos
var x = 45;
var y = 16;
console.log( x - y);0
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log('whatever is next');
//this will pull the even numbers out of the loop and only display those using the % sign
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
    console.log(i);
    }
}
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

//this will prompt the window to create a pop-up message
var name = window.prompt('what is your name?');
window.alert('Welcome, ${name}');
