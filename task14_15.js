//1. Declare an empty array using JS literal notation to store student names in future.

var stu = new Array();

stu.unshift("abid","ali","majid");

//2. Declare an empty array using JS object notation to store student names in future.


var student = {};

student[0] = "Name:Abid";
student[1] = "Name: Ali";
student[2] = "Name: Majid"; 

//3. Declare and initialize a strings array.

var city = ["Karachi", "Peshawer", "Islamabad", "Lahore"];

//4. Declare and initialize a numbers array.

var num = [10,15,20,25,30,35];

//5. Declare and initialize a boolean array.

var a = [];
for (i=0; i<7; i++) {
    a[i] = i%2===0;
}
//6. Declare and initialize a mixed array.

var array = ["Karachi",10,"Lahor",10,"Peshawer",15];

//7. Declare and Initialize an array and store available

var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]

for (var i =0; i < edu.length; i++){
    document.write("<h2>" + edu[i] +"</h2>");

}

//8. Write a program to store 3 student names in an array.another array to store score of these three students. 
//Assume that total marks are 500 for each student, display the scores & percentages of students 
//like:another array to store score of these three students. Assume that total marks are 500 for each 
//student, display the scores & percentages of students like:

var studentName =["Hamid", "Zahid","Majid"];
var studentMarks =[450,410,380];
var totalMarks = 500;

for(var i = 0; i < studentName.length; i++){

    document.write("Score of " + studentName[i] + " is " + studentMarks[i] + ". Percentage :" + studentMarks[i]/totalMarks *100 + "% <br>");


}

//9. Initialize an array with color names. Display the array elements in your browser.

var color = ['Red', 'Blue', 'White', 'Green','Pink'];

for(var z = 0; z < color.length; z++){
    document.write(color[z] + "<br>")

}

//a. Ask the user what color he/she wants to add to the beginning

var colorName = prompt("What color you wish to add at Begin");

color.unshift(colorName);


for(var z = 0; z < color.length; z++){
    document.write(color[z] + "<br>")

}

//b. Ask the user what color he/she wants to add to the end

var colorName = prompt("What color you wish to add at end");

color.unshift(colorName);

color.push(colorName);
for(var z = 0; z < color.length; z++){
    document.write(color[z] + "<br>")

}

//c. Add two more color to the beginning of the array. Display the updated array in your browser.

color.unshift("pearl","ivory","daisy");
for(var z = 0; z < color.length; z++){
        document.write(color[z] + "<br>")
    
    }

    //d. Delete the first color in the array. Display the updated array in your browser.


    color.shift();
    for(var z = 0; z < color.length; z++){
        document.write(color[z] + "<br>")
    
    }

    //Delete the last color in the array. Display the updated array in your browser.

    color.pop();
    for(var z = 0; z < color.length; z++){
        document.write(color[z] + "<br>")
    
    }

   // f. Ask the user at which index he/she wants to add a color & color name. 
   //Then add the color to desired position/index.

   var indexWish = +prompt("Enter index Number which you want to add color");

   color[indexWish] ="black";

   //g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.


    var indexdel = +prompt("Enter index Number which you want to add color");
   color.remove(indexdel);

//10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort method.

var studentScore = [320,230,480,120]
document.write(studentScore.sort());

//11. Write a program to initialize an array with city names. Copy 3 array elements from cities
// array to selectedCities array.

var city = ["Karachi","Lahore","Islamabad","Quetta","Peshawer"];

var City = city.slice(0,3);

document.write("<h3>Selected Cities</h3><br>");

document.write(City)

//12. Write a program to create a single string from the below mentioned array:

var animal = ["This", "is","my", "cat"];
var name = animal.join('');
document.write(name);

//13. Create a new array. Store values one by one in such a way that you can access the values
// in the order in which they were stored. (FIFO-First In First Out)

var orderFifo = ['Keyboard','mouse','monitor','printer'];

for(var i = 0; i < orderFifo.length; i++){

    document.write("<h4>Out: </h4>" + orderFifo[i] + "<br>")
}

//14. Create a new array. Store values one by one in such a way that you can access the values 
//in reverse order. (Last In-First Out)

var orderFifo = ['Keyboard','mouse','monitor','printer'];

for(var i = orderFifo.length-1; i >= 0; i--){

    document.write("<h4>Out: </h4>" + orderFifo[i] + "<br>")
}

//15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) 
//in an array. Display the following dropdown/select menu in your browser using document.write() method:

var brand =["Apple", "Samsung", "Motorola", 'Nokia'," Sony"," Haier"];

document.write("<select>")

for (var x = 0; x < brand.length; x++){
    document.write("<option> " +brand[x] + "</option>")
}
document.write("</select>")





