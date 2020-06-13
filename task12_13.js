//1. Write a program that takes a character (number or string)


var a = prompt("Enter Something");
 var b =  a.charCodeAt();

if(b >=65 && b < 91){
    alert(a + "  is Uper Alphabit")
}
else if(b >=97 && b < 123){
    alert(a + "  is Lower Case ")
}

else if(b >=48 && b < 66){
    alert(a + "  is a number ")
}
//2. Write a JavaScript program that accept two integers and
//display the larger. Also show if the two integers are equal.
 var num1 = +prompt("Enter a Number");
 var num2 = +prompt("Enter a number");

if(num1 > num2){
    alert(num1 + " is Greater")
}
else if(num1 < num2){
    alert(num2 + " is Greater")
}

else {
    alert(num1 + " and " + num2 + "are equl")
}
//3. Write a program that takes input a number from user & 
//state whether the number is positive, negative or zero.

var a = +prompt("Enter a Number");

if(a > 0){
    alert(a + " is positive Number");
}
else if(a < 0){
    alert(a + " is Nagitive Number");
}
 else{
     alert(a + " is zero Number")
 }

 //4. Write a program that takes a character (i.e. string of
//length 1) and returns true if it is a vowel, false otherwise

var int = prompt("Enter English single diget");
int = int.toLocaleLowerCase();
if(int === "a" || int === "e" || int === "i" || int === "o" || int === "u"){
    alert("True");
}
else{
    alert("False");
}


// //5. Write a program that a. Store correct password in a JS variable.
var pass = prompt("Enter Password!");
var confPass = "pakistan";
if(pass === confPass){
    alert("“Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password")
}
//6. This if/else statement does not work. Try to fix it:

var greeting;
var hour = 13;
if(hour < 18){

   greeting = " Good Day!";
}

else{
    greeting = "Good Evening!";
}

document.write(greeting);


 //7. Write a program that takes time as input from user in 24 hours clock format like:

var currTime = new Date(2020, 6, 12, 23);
currTime = currTime.getHours();
var greeting;
if(currTime === 00 && currTime < 12){
    greeting = "Good Morning!"
}
else if(currTime >= 12 && currTime < 17){
    greeting = "Good Afternoon!"
}
else if(currTime >= 17 && currTime < 21){
    greeting = "Good Evening!"
}
else if(currTime >= 21 && currTime < 23.59){
    greeting = "Good Evening!"
}

document.write("Hi Sir " + greeting)