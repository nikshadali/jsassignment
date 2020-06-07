//Assignment No 5
// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var a  = 3;
var  b = 5;
var c = a + b;
document.write("Sum of " + a + " and " + b + " is " + c + "<br><br>");


//2. Repeat task1 for subtraction, multiplication, division & modulus.
var a  = 3;
var  b = 5;
var c = b - a;
document.write("Subtraction of " + b + " and " + a + " is " + c  + "<br><br>"); 

//2. Repeat task1 for multiplication, 
var a  = 3;
var  b = 5;
var c = a * b;
document.write("Multiplication of " + a + " and " + b + " is " + c  + "<br><br>"); 

//2. Repeat task1 for division, 
var a  = 10;
var  b = 5;
var c = a * b;
document.write("Diviion of " + a + " and " + b + " is " + c  + "<br><br>"); 

//2. Repeat task1 for modulus, 
var a  = 10;
var  b = 3;
var c = a % b;
document.write("Modulus of " + a + " and " + b + " is " + c  + "<br><br>"); 

//3.Do the following using JS Mathematic Expressions a. Declare a variable.

var x;

document.write("Vlaue of variable after declaration is"  + x + "<br>");

for (x = 5; x <= 6; x++){
    if(x === 5){
        document.write("Initial value: " + x + "<br>")
    }

    else if (x === 6){
        document.write("Value:" + x + "<br>")
        var y = x + 7;

        document.write("Value after addtion is " + y + "<br>");

        y--;

        document.write("Value after decreament is " + y + "<br>")

        z = 3;

        i = y % z;

        document.write("The Remainde is " + i + "<br><br>")




    }


}

//4. Cost of one movie ticket is 600 PKR. Write a script to store


var movieCost = 600;
var buingTicket = 5;
var totalCost = movieCost * buingTicket;
document.write("Total cost of to buy 5 tickets to the moives is " + totalCost + "<br><br>");


//5. Write a script to display multiplication table of any number in your browser. E.g



for(var i = 1; i <= 10; i++){


    document.write("4 " + " x " + i + " = " + 4 * i + "<br><br>");
}
//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.

var c = 25;
var f = 70
var cen =(f -32)*5/9;
var fah =(c * 9/5)+32;
document.write(c + "<sup>0</sup>C is " + fah + "<sup>0</sup>F <br>" );
document.write(f + "<sup>0</sup>F is " + cen + "<sup>0</sup>C <br><br>" );


//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables


var item1Price = 650;
var item2Price = 100
var orderitem1 = 3;
var orederitem2 =7;
var shippingCharges= 100;

ordercost1 = item1Price * orderitem1;
ordercost2 = item2Price * orederitem2;

totalCostOfOrder = ordercost1 + ordercost2 + shippingCharges;

document.write("Price of Item 1 is " + item1Price + "<br>");
document.write("Quantity of Item 1 is " + orderitem1 + "<br>");
document.write("Price of Item 2 is " + item2Price + "<br>");
document.write("Quantity of Item 2 is " + orederitem2 + "<br>");
document.write("Shipping Charges is" + shippingCharges + "<br>");
document.write("Total Cost of Your Order is " + totalCostOfOrder + "<br><br>");

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

var totolMarks = 980;
var obtainedMarks = 880;
var percent = obtainedMarks/totolMarks*100;

document.write("Total Marks " + totolMarks + "<br>");
document.write("Obtained Marks "+obtainedMarks + "<br>");
document.write("Percentage "+percent + "%" + "<br><br>");

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)


var us = 10 * 104.80, Saudi = 25 *  28;

var totalPakRupees = us + Saudi;

document.write("Total Currency in PAK Rupees " + totalPakRupees + "<br><br>" )

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c.
// Divide the result by 2 Perform all calculations in a single expression

var i = 2 + 5 * 10 / 2;

document.write(i + "<br><br>");


//11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. 
//Calculate their 2 possible ages based on the stored values.

var currentYerar = new Date();


currentYerar = currentYerar.getFullYear();

var  birthYear = 1992

totalYear = currentYerar -birthYear;

document.write( " Current Year is " + currentYerar + "<br>");
document.write( " Birth Year is " + birthYear + "<br>");

document.write(totalYear + " you are old <br><br>");


//12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.

 var r = 20;

 var cf = 2 * Math.PI * r;

 var  area = Math.PI * r * r

 document.write("The Circle is " + r + "<br>");
document.write("The Circumference is " + cf + "<br>");
 document.write("The Area is " + area + "<br><br>");


 //13. The Lifetime Supply Calculator: Ever wonder how much a
 // “lifetime supply” of your favorite snack is? Wonder no more.

 var snack = "Lays";

 var currentAge = 38;

 var mixAge = 55;

 var remainAge = mixAge - currentAge;

 var estimatedAmount = 2;
 

document.write("Favourite Snack: " + snack + "<br>")

document.write("Current Age is: " + currentAge + "<br>")

document.write("Estimated Miximum Age: " + mixAge + "<br>")

document.write("You will Need: " + remainAge * estimatedAmount +" " + snack + " to last you untill the ripe old Age of " + mixAge + "<br>")







