//=====================================================================================
//                           VARIABLES & DATATYPES
//=====================================================================================


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



//                                 C. BOOLEANS
//=========================================================================================
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



//                                     D. THE FARM
//=======================================================================================================

// 1.Declare a variable animal. Set it to be either "cow" or something else
// 2.Write code that will print out "mooooo" if the it is equal to cow
// 3.Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// 4.Commit
  
let animal = "dog";
if (animal === "snake"){
	// console.log("hisssss");
} else {
	// console.log("Hey! You're not a snake.");
}



//           E. Drivers Ed

// 1.Make a variable that holds a person's age; be semantic
// 2. code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young.

// let age =11;
// if(age >= 16) {
//   console.log("Here are the keys")
// } else {
//   console.log("Sorry you're too young!");

// }

//==========================================================================================================
//                                               II. LOOPS
//==========================================================================================================             
//                                              A. THE BASICS
//==========================================================================================================
 
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

//                                           B. GET EVEN
//===================================================================================================
// 1.Print out the numbers that are within the range of 1 - 100
// 2.Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
 
// for(let i=0; i <=100; i++) {
//   console.log(i)
//   if (i % 2 === 0) {
//     console.log( ' is an even number')
//   } 
// }


//                                           C. GIVE ME FIVE
//=====================================================================================================
// 1.For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

//   for(let i = 0; i<= 100; i++) {
//   if (i % 5 ==- 0) 
//     // console.log("I found a " + i, "." + " High Five !" );
//     else if (i % 3 === 0) console.log("Three is a crowd");
//     else console.log(i);
  
// }

//                                              D. SAVINGS ACCOUNT
//=========================================================================================================
// 1.Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//Check your work! Your bank_account should have $55 in it.

let bank_account = 0
for(let i = 0; i<=10; i++){
    bank_account += i
}
// console.log(bank_account)


// 2.You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your bank_account should have $10,100 in it.

let bank_account2 = 0
for(let i = 0; i <= 100; i++){
    bank_account2 += i
}
bank_account2 *=2;
// console.log(bank_account2)

 

//=============================================================================================
//                                        III. ARRAYS & CONTROL FLOW
//=============================================================================================

//                                             A. TALK ABOUT IT:
//=============================================================================================
// 1.What are the things in an array called?
// Each item in the array are called 'elements'
// 2.Do Arrays guarantee those things will be in order?
// We could arrange them to be in a specific order
// 3.What real-life thing could you model with an array?

//                                              B. EASY DOES IT
//==============================================================================================
// Create an array that contains three quotes and store it in a variable called quotes

// let quotes = ["Gatorade", "Here We Go, Steelers!", "Nike"]
// console.log(quotes)

//                                     C. ASSESSING ELEMENTS
//===============================================================================================

// Given the following array 
// const randomThings = [1, 10, "Hello", true]
// // 1.How do you access the 1st element in the array?
// console.log(randomThings[0])
// // 2.Change the value of "Hello"to "World"
// randomThings.splice(2,2, "world")
// // 3.Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings)

//                                        D. CHANGE VALUES
//===============================================================================================

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

//                                         E. MIX IT UP
//======================================================================================================

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
// console.log(myArray)

//                                               F. BIGGIE SMALLS
//=============================================================================================
// 1.console.log()s "little number" if the number is entered is less than 100
// 2.console.log()s big numberif the number is greater than or equal to 100.


let i = 56; 

 if (i < 100) {
    // console.log("little number");

   } else {
     (i >= 100)
    // console.log("big number");
   }

  //                                           G MONKEY IN THE MIDDLE 
  //=============================================================================================
  // 1.console.log()little number if the number entered is less than 5.
// 2.If the number entered is more than 10, log big number.
// 3.Otherwise, log "monkey".

// let num = 8;

// if(num < 5) {
//   console.log("little number");

// } else if (num >= 10)
//   console.log("big number")
// else {
//   console.log("monkey")
// }

//                                            H. WHATS IN YOUR CLOSET?
//================================================================================================

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!" )

// 2.Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

kristynsCloset.splice(6,0, "raybans")
// console.log(kristynsCloset)

// 3.Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow

kristynsCloset.splice(5,1, "stained knit hat")
// console.log(kristynsCloset)

// 4.Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// let thomShirt = thomsCloset[0][0];
// 5.In the same way, access one item from Thom's pants array.
// let thomsPants = thomsCloset[1][1];
// 6.Access one item from Thom's accessories array
// let thomsAccessory = thomsCloset[2][2];
// 7.Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// console.log(`Thom is looking fierce in a ${thomShirt}, ${thomsPants}, and ${thomsAccessory}!`);


// 8.Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
 thomsCloset[1][2] ="Footie Pajamas";
//  console.log(thomsCloset[1][2]);
//  console.log(thomsCloset)

//================================================================================================
//                                                IV.FUNCTIONS
//================================================================================================

// A. printGreeting

// function printGreeting(name) {
//     return `Hello there,  ${name}!`;
// }
//  const greeting = printGreeting ("Slimer");
//  console.log(greeting)


// B. printCool

// function printCool(name) {
//   return `${name} is cool!`;
// }
// const print = printCool ("Captain Reynolds")
// console.log(print)


// C. calculateCube

function calculateCube(sideLength) {
  const volume = sideLength * sideLength * sideLength;
  console.log(`The volume of a cube with a length of ${sideLength} is ${volume}`);
}

// calculateCube(8);

// C. Another example 

function calculateCube(sideLength) {
  const volume = Math.pow(sideLength, 3);
  console.log(`The volume of a cube with a length of ${sideLength} is ${volume}`);
}

// calculateCube(10);


// D. isVowel

function isVowel (vowel) {
 
  if (vowel === 'a'&&'e'&&'i'&&'o'&&'u') {
      return "The character is a Vowel";
  }
  else {
  return "The character is not a vowel";
  }
}

// console.log(isVowel("a"));
   
   
// E. getTwoLengths

function getTwoLengths(food1,food2){
     let length1 = food1.length
     let length2= food2.length
      return [length1, length2]
     }
// const lengths = getTwoLengths("superliminal", "iPhone")
// console.log(lengths)


// F. getMultipleLengths

function getMultipleLengths(food1,food2,food3,food4,food5,food6){
  let length1 = food1.length
  let length2 = food2.length
  let length3 = food3.length
  let length4 = food4.length
  let length5 = food5.length
  let length6 = food6.length
  
  return [length1, length2, length3, length4, length5, length6 ]
  }
// const lengths = getMultipleLengths("pancakes", "Bankroll","Shaady","Quesadilla","Boston Celtics", "Pittsburgh")
// console.log(lengths)

// G. maxOfThree

function maxOfThree(x,y,z) {
  if (x >= y && x >= z) {
    return x;
  } else if ( y >= x && y >= z) {
    return y;
  }  else {
      return z;
  }
    }

// console.log(maxOfThree(8, 430, 20));

// H. printLongestWord

function printLongestWord (wordsArray) {
  if (wordsArray.length === 0) {
    return null;
  } // Edge Case
    
  let longestWord = wordsArray[0];
  for (let i =1; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }
  return longestWord;
}

const words =["Textbooks","Texas", "California", "Max", "PlayStation"]
const longest = printLongestWord(words);
// console.log(longest)


//================================================================================================
//                                                                     OBJECTS
//================================================================================================

// A. MAKE A USER OBJECT
// 1.Create an object called user.
// 2.Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.

const user = {
  name: "john",
  email: "johnbakes2300@gmail.com",
  age: 35,
  purchased: []


}
//              B. UPDATE THE USER
//================================================
// 1.Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// 2.Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

user.email = ("bakerjohnny23@gmail.com")
// console.log(user)

user.age = 36;
// console.log(user)

//           C. ADDING KEYS AND VALUES
//===============================================
// 1.Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

user.location = "Pittsburgh"
// console.log(user)

//                 D. SHOPAHOLIC
//================================================
// 1.Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
user.purchased.push("carbohyrdrates")
// console.log(user)
// 2.Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
user.purchased.push("A peace of mind")
// console.log(user)
// 3.Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push("Merino jodhpurs")
// console.log(user)
// 4.Console.log just the "Merino jodhpurs" from the purchasedarray.
// console.log(user.purchased[2])

//           E. OBJECT-WITHIN-OBJECT
//================================================
//1.Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
  name: "Nate Robinson",
  age: 25,
  purchased: []
}
// console.log(user)

//2.Console.log just the friend's name
// console.log(user.friend.name)

// 3.Console.log just the friend's location
user.friend.location = "Houston"
// console.log(user.friend.location)

// 4.CHANGE the friend's age to 55
user.friend.age = 55;
// console.log(user.friend.age)

//5.The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring")

// 6.The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte")
// console.log(user.friend.purchased)
//7.Console.log just "A latte" from the friend's purchasedarray.
// console.log(user.friend.purchased[1])

//                   F. LOOPS
//===============================================
// 1.Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.

for(let i = 0; i < user.purchased.length; i++){
  // console.log(user.purchased[i])
}
// 2.Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

for(let i = 0; i < user.friend.purchased.length; i++){
  // console.log(user.friend.purchased[i])
}

//       G. FUNCTIONS CAN OPERATE ON OBJECTS
//================================================
//1.Write a single function updateUser that takes no parameters. When the function is run, it should:
//it should increment the user's age by 1
//make the user's name uppercase

function updateUser() {
  user.age++;
  user.name = user.name.toUpperCase();
}

updateUser();
// console.log(user.name)
// console.log(user.age)

// 2.Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with user as the argument.
//              NEEDS WORK
// function oldAndLoud(person){
//     user.age++;
//     user.name.toUpperCase();
//     user.person.name.toUpperCase(); 
//     user.person.age++;
//     person ("Niko")
// }
//     oldAndLoud();
//     console.log(user.person.name)
//     console.log(usere.person.age)    
  


// user.name = user.name.charAt(0).toUpperCase() + user.name.slice(1)