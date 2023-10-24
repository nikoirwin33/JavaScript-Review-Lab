//=============================
//   VARIABLES & DATATYPES
//=============================


// I. VARIABLE & DATATYPES

/*
A. Q + A
How do we assign a value to a variable? You would you use the assignment (=) operator to assign a value to a variable. let a = 10;
How do we change the value of a variable? Assign the variable to a function so you can change the value.
How do we assign an existing variable to a new variable? You can assign a variable using assignment operators. 
Remind me, what are declare, assign, and define? you declare a variable with the 'let' keyword. You assign a variable with the equal sign. To define a variable use the let or const keywords. 
What is pseudocoding and why should you do it? Its used for a rough draft version of coding. 
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
*/

// B. Strings 
// 1.Create a variable called firstVariable
// 2. Assign it the value of the string "Hello World"
// 3.Change the value of this variable to some number
// 4.Store the value of firstVariablein a new variable called secondVariable
// 5.Change the value of secondVariableto any string.
// 6.What is the value of firstVariable?
// 7.Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
 
// const firstVariable = ("Hello World");
// let variable = 20
// let secondVariable = ("My name is")
// let yourName = ("Niko")
// let lastVariable =(firstVariable + secondVariable + yourName)
// // console.log(firstVariable)
// // console.log(variable)
// // console.log(yourName)
// // console.log(secondVariable)
// console.log(lastVariable)



//          C. BOOLEANS


// const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Niko';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Niko' >= 'Niko');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false && false && false && false && false || true);
//   console.log(false <= false)
//   console.log(e >= 'Kevin');
//   console.log(a <= b <= c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a >= a <= d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 >= '48');



//           D. THE FARM


// 1.Declare a variable animal. Set it to be either "cow" or something else
// 2.Write code that will print out "mooooo" if the it is equal to cow
// 3.Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// 4.Commit
  
// let animal = "";
// if (animal === "snake"){
// 	console.log("hisssss");
// } else {
// 	console.log("Hey! You're not a cow.");
// } else if {
//   console.log("snake")
// }
// // animal = "cow";
// // animal = "dog";
// console.log("snake")


//           E. Drivers Ed

// 1.Make a variable that holds a person's age; be semantic
// 2. code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young.

// let age =11;
// if(age >= 16) {
//   console.log("Here are the keys")
// } else {
//   console.log("Sorry you're too young!");

// }

//========================================
//               II. LOOPS
//========================================               
//             A. THE BASICS
//========================================
 // 1.Write a loop that will print out all the numbers from 0 to 10, inclusive
// 2.Write a loop that will print out all the numbers from 10 up to and including 400
// 3.Write a loop that will print out every third number starting with 12 and going no higher than 4000

// for(let i = 0; i <= 10; i++){
//   console.log(i)
// }

// for(let i = 10; i <= 400; i++){
//   console.log(i)
// }

// for(let i=12; i <= 3999; i++){
//   if( i % 3 == 0) {
//     console.log(i)
//   }
// }

//              B. GET EVEN
//============================================
// 1.Print out the numbers that are within the range of 1 - 100
// 2.Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
 
// for(let i=0; i <=100; i++) {
//   console.log(i)
//   if (i % 2 === 0) {
//     console.log( ' is an even number')
//   } 
// }


//              C. GIVE ME FIVE
//=======================================================
// 1.For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

// for(let i = 0; i<= 100; i++) {
//   console.log(i)
//   if (i % 5 == 0) {
//     console.log("I found a " + i, "." + " High Five !" );
//   }   // NEEDS WORK
// }

//                D. SAVINGS ACCOUNT
//======================================================
// 1.Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// 2.You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2

// NEEDS WORK 

//=================================================
//           III. ARRAYS & CONTROL FLOW
//=================================================

//                   A. TALK ABOUT IT:
//==================================================
// 1.What are the things in an array called?
// Each item in the array are called 'elements'
// 2.Do Arrays guarantee those things will be in order?
// We could arrange them to be in a specific order
// 3.What real-life thing could you model with an array?

//                      B. EASY DOES IT
//=====================================================
// Create an array that contains three quotes and store it in a variable called quotes

// let quotes = ["Gatorade", "Here We Go, Steelers!", "Nike"]
// console.log(quotes)

//                   C. ASSESSING ELEMENTS
//=======================================================

// Given the following array 
// const randomThings = [1, 10, "Hello", true]
// // 1.How do you access the 1st element in the array?
// console.log(randomThings[0])
// // 2.Change the value of "Hello"to "World"
// randomThings.splice(2,2, "world")
// // 3.Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings)

//                      D. CHANGE VALUES
//=======================================================

// Given the following array 
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// // 1.What would you write to access the 3rd element of the array? 
// // console.log(ourClass[2])
// // 2.Change the value of "Github" to "Octocat"
// ourClass.splice(4,4, "Octocat")
// // console.log(ourClass)
// // 3.Add a new element, "Cloud City" to the array
// ourClass.unshift("Cloud City")
// console.log(ourClass)

//                       E. MIX IT UP
//=======================================================

//Given the following array: 
const myArray = [5, 10, 500, 20]

// 1.Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon","Pittsburgh Steelers")
// console.log(myArray)
// 2.Remove the 5from the beginning of the array.
myArray.shift([0])
// console.log(myArray)
// 3.Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
// console.log(myArray)
// 4.Remove the string of your choice from the end of the array.
myArray.splice(4,1)
// console.log(myArray)
// 5.Reverse this array using Array.prototype.reverse(). Did you mutate the array? Yes. What does mutate mean? To reverse Did the .reverse()method return anything?

myArray.reverse()
console.log(myArray)

