//1. Write a program to take “city” name as input from user.
// If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

var city = prompt("Enter city Name!");
city = city.toLocaleLowerCase();

if(city === "karachi"){
    document.write("Wel Come to city of Light <br>");
}

//2. Write a program to take “gender” as input from user. If the user is male, give the message:
// Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your Gender");
gender = gender.toLocaleLowerCase();

if (gender === 'male'){
    document.write("Good Morning Sir");
}
else if(gender === "female"){
     document.write("Good Morning Ma’am.");
}

else{
    document.write("Please Enter correct Gender!");
}

//3. Write a program to take input color of road traffic
// signal from the user & show the message according to this table:

var color = prompt("Enter the Color Name!");

color = color.toLocaleLowerCase();

if(color === "red"){

    document.write(" Red  = Most stop");
}
else if(color === "yellow"){
    document.write("Yellow = Ready to move");
}
else if(color === "green"){

    document.write("Green  =  Move");
}

//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, 
//show the message “Please refill the fuel in your car”


var fuel = +prompt("Enter Remain Fuel");

if(fuel < 0.25){
    document.write("Please refill the fuel in your car");
}
5. Run this script, & check whether alert message would be displayed or not. Record the outputs.


 var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true");
 }

 var b = 82; 
 if (b++ === 83){ 
     alert("given condition for variable b is true"); 
    }

    var c = 12; 
    if (c++ === 13)
    { alert("condition 1 is true"); 
}
if (c === 13){ 
    alert("condition 2 is true"); 
}
if (++c < 14){
     alert("condition 3 is true"); 
    }
    if(c === 14){
         alert("condition 4 is true"); 
        }


    var materialCost = 20000;
    var laborCost = 2000; 
    var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost ){ 
         alert("The cost equals"); 
     }
 if (true){
      alert("True"); 
    } 
if (false){ 
    alert("False"); 
}

if("car" < "cat"){ 
    alert("car is smaller than cat"); 
}
//6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page.
// Take percentage & compute grade as per following table:

var sub1 = prompt("Enter subject");
var sub2 = prompt("Enter subject");
var sub3 = prompt("Enter subject"); 

var marks1 = +prompt("Enter Number of " + sub1);
var marks2 = +prompt("Enter Number of " + sub2);

var marks3 = +prompt("Enter Number of " + sub3);

 var totalMarks = 300;
var obtainMarks = marks1 + marks2+ marks3;

var pers =( obtainMarks/ totalMarks )*100;
pers = pers.toFixed(2);


if(pers >= 80){

    
    var remark = "Excellent";
    var grade = "A+"
}
else if(pers >= 70  && pers < 80){

    

    var remark = "Good";
    var grade = "A"
}

else if(pers >= 60 && pers < 69){

    
   var remark = "You need to improve";
    var grade = "B"
}
else if(pers < 60 ){

   
   var remark ="Sorry";
    var grade = "Fail"
}

document.write("<h1>Mark Sheet</h1> <br>");

document.write("<h2> Total Marks: "+totalMarks+"</h2> <br>");
document.write("<h2> Obtain Marks: "+obtainMarks+"</h2> <br>");
document.write("<h2> Percentage : "+pers+" %</h2> <br>");
document.write("<h2> Rmark : "+ remark +" </h2> <br>");

 //7. Guess game:Store a secret number (ranging from 1 to 10) in a variable.
 // Prompt user to guess the secret number.

var num = 6;

var num1 = +prompt("Guess a number range for 1 to 10");

if(num === num1){
   alert("Bingo! Correct answer");
}
else if(num + 1 ===num1){
    alert("Close enough to the correct answer");

}

//8. Write a program to check whether the given number is divisible by 3.
// Show the message to the user if the number is divisible by 3.

var num2 = +prompt("enter a Number");

var num3 = num2 % 3;

if(num3 === 0){
    alert("This Number divisble by 3")
}

else {
    alert("This Number not divisble by 3")
}

//9. Write a program that checks whether the given input is an even number or an odd number.

var num = +prompt("Enter a Number");
var enenNum = num % 2;

if(enenNum === 0){

    alert("This is Even Number");
}

else{
    alert("This is Odd Number");
}

10. Write a program that takes temperature as input and shows a message based on following criteria

var temp = +prompt("Enter Temprature value");
if(temp  >= 40){
    alert("It is too hot outside");
}
else if(temp  >= 30 && temp < 40){
    alert("The Weather today is Normal");
}
else if(temp  >= 20 && temp < 30){
    alert("Today’s Weather is cool");
}
else if(temp  >= 10 && temp < 20){
    alert("Today’s weather is so Cool");
}

//11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:

var firstVal = +prompt("Enter first degit");
var opr = prompt("Enter Oprator");
var secVal = +prompt("Enter Second degit");

if(opr === "+"){

    // add value 

    alert(firstVal + secVal);
}
else if(opr === "-"){

    //subtract value

    alert(firstVal - secVal);
}
else if(opr === "*"){
    // mulitply value

    alert(firstVal * secVal);
}
else if(opr === "/"){

    // Divid value

    alert(firstVal / secVal);
}
else if(opr === "%"){

    // use of modulus

    alert(firstVal % secVal);
}
else{
    alert("Enter Proper Value!")
}


