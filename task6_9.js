var a = 10;

document.write("<h2>Result </h2>");
document.write("The value of a is: " + a + "<br> ");
++a;

document.write("The value of ++a is: " + a + "<br> ");

a;

document.write("The value of a is: " + a + "<br> ");

a++;

document.write("The value of a++ is: " + a + "<br> ");

a;

document.write("The value of a is: " + a + "<br> ");

--a;
document.write("The value of --a is: " + a + "<br> ");

a;

document.write("The value of a is: " + a + "<br> ");

a--;
document.write("The value of --a is: " + a + "<br> ");

a;

document.write("The value of a is: " + a + "<br> ");

//2. What will be the output in variables a, b & result after execution of the following script:


document.write("<h2>Result </h2>");

var a = 2, b = 1; 



document.write(" a = "+ a + "<br>");


document.write(" b = "+ b + "<br>");



var result = --a;
document.write(" Result is "+result + "<br>");

var result = --a - --b;
document.write(" Result is "+result + "<br>");
var result = --a - --b + ++b;
document.write(" Result is "+result + "<br>");

var result = --a - --b + ++b + b--;
document.write(" Result is "+result + "<br>");


var result = --a - --b + ++b + b--;

document.write(" Result is "+result + "<br>");


//3. Write a program that takes input a name from user & greet the user.

var user = prompt("Enter user Name");

document.write("Hello " + user + "<br>");


//5. Write a program to take input a number from user & display it’s multiplication table on your browser. 
//If user does not enter a new number, multiplication table of 5 should be displayed by default.

var num = +prompt("Please enter Number");
var num1 = +prompt("Please enter Number");



if(num> 0 && num1 > 0){
    document.write(num * num1);
}
else{
    document.write(5);

}




