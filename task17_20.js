//1. Declare and initialize an empty multidimensional array.

var arr = [
    [],
    [],
    [],
    []
];

//2. Declare and initialize a multidimensional array representing the following matrix:

var arr2 = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1],
];

document.write(arr2[0].join(' ') + "<br>")
document.write(arr2[1].join(' ') + "<br>")
document.write(arr2[2].join(' ') + "<br>")

//3. Write a program to print numeric counting from 1 to 10.

for(var i = 1; i <= 10; i++){
    document.write(i + "<br>")
}

//4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.4. Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user.

var a = +prompt("Enter a number to show its multipication table");
var b = +prompt("Enter length of multipication table");

for(i = 1; i <=  b; i++){
    document.write(a + "x" + i + " = " + a * i + "<br>")
}

//5. Write a program to print items of the following array using for loop:

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for(var i = 0 ; i < fruits.length; i++){

    document.write(fruits[i] + "<br>")
   
}

for(var i = 0 ; i < fruits.length; i++){

    
    document.write("Element at index" + i + " is " + fruits[i] + "<br>")
}

//6. Generate the following series in your browser. See example output.
// a. Counting:
document.write("<h2>Counting</h2>")
for(var i = 1; i <= 10; i++){
    document.write(i + " ");
}

//b. Reverse counting:

document.write("<h2>Reverse Counting</h2>")
 for(var i = 10; i > 0; i--){
     document.write(i + " ");
 }

 //c. Even:
 document.write("<h2>Even Numbers</h2>")
 for(var i = 0; i <= 20; i= i+2){
        document.write(i + " ");
    }

//d. Odd:
document.write("<h2>Odd Number </h2>")
for(var i = 1; i <= 20; i= i+2){
       document.write(i + " ");
   }
//e. Series

document.write("<h2>Series</h2>")
for(var i = 2; i <= 20; i= i+2){
       document.write(i + "K ");
   }
//7. You have an array

var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcom to 3b Onlie shop what do you want sir/ma'am");
search = search.toLocaleLowerCase();

if(a.indexOf(search)!= -1 ){
    document.write("Yes " + search + " is avalible ")
}
else{
    document.write("No " + search + " is not avalible ")

}

//8. Write a program to identify the largest number in the given array.

var b = [24, 53, 78, 91, 12];
document.write("Array Item: " + b + "<br>")
document.write("The Lagest Number is " + Math.max(...b) );

//9. Write a program to identify the smallest number in the given array.

var b = [24, 53, 78, 91, 12];
document.write("Array Item: " + b + "<br>")
document.write("The Smallest Number is " + Math.min(...b) );


//10. Write a program to print multiples of 5 ranging 1 to 100.

for(var i = 5; i <= 100; i= i+5){
     document.write(i + " ");
}



// With Grace of Allah I have done my Assignment with all task Special thanks to Sir Ali and his Team
// I learnt new things in java script and this assignment also helpfull in growing my skill