////////////////////////////ASSIGNMENT 1///////////////////////////////////////////////////////////////////////////////////
// Calculate your age based on the current year and your birth year.
// var birthyear = 1999;
// var currentyear = 2024;
// var age = currentyear - birthyear;    //logic--> 2024 - 1999=25
// console.log("My calculatd age based on the current year and year of birth is",age"years.");
export {};
// Write a programme that caiculates the area of the rectangle using length and width variables.
// var a = 15;
// var b = 4;
// var area = a*b;  //15*4=60
// console.log("The area of rectangle is", area ".");
// Write a program that calculates the area of a circle.
// let radius = 10;
// var area = 3.14*radius**2;   //3.14*10**2=3.14*100= 314
// console.log("Let radius of a circle is 10  then area of circle is=", area ".");
// Write a prograam that calculates the area of a cube?
//  let onesideofcube = 5;
//  let areaofcube = 6*onesideofcube**2;   //6*5**2= 6*25=150
// console.log("When a side of cube is",onesideofcube, "then the area of cube is =" areaofcube, ".");
// Create a programme that convert fahrenheit to celsius and vice versa using a varable.
// var F = 98.6;
// var C= (F-32)*5/9;  //(98.6-32)*5/9= 66*5/9 = 36.66°C
// console.log("C=",C,"°C");
// Convert celsius to fahrenheit 
// var Celsius = 37;
// var fahrenheit= (Celsius *9/5)+32;  //(37 *9/5)+32= (333/5)+32= 66.6+32=98.6°F
// console.log("farhenheit=", fahrenheit "°F");
// Convert a given number of seconds into minutes and seconds using variables.
// let timesec= 1000;
// let timeminutes= timesec/60     //1000/60= 16min and 66sec
// console.log("minutes=", timeminutes);
// Write a program that calculates the percentage?
// let obtainednum= 75;
// let totalnum= 80;
// let percentage=obtainednum*100/totalnum;   //7500/80=93.75
// console.log("percentage of marks =", percentage);
// // // INCREMENT AND DECREMENT
// QUESTION 1
// let a = 2;               //Logic--->  a = a+1 = 2+1 = 3
// var b = ++a*2;           //Logic--->  b=3*2=6
// console.log("b=",b); 
// QUESTION 2
// let x = 5;               //Logic--->  x=5-1=4
// let y = x-- +2;          //Logic--->  y=5+2=7
// console.log("y=", y);
// QUESTION 3
// let x = 3                   //Logic---> x= 3 -->4 -->5 -->6
// let y = ++x + x++ + ++x;    //Logic---> y=4 + 4 + 6 = 14
// console.log("y=", y);    
// QUESTION 4                  
// let m =2;                      //Logic---> m=2 -->3 -->4 -->3 
// let n = ++m * m++ * --m;       //Logic---> n=3*3*3=27
// console.log("n=", n); 
// QUESTION 5
// let a=3;                            //Logic---> a=3 -->4 -->5
// let b=5;                            //Logic---> b=5 -->4 -->3
// let result= ++a + b-- - a++ + --b;  //Logic--->result=4+5-4+3 =12-4 =8
// console.log("result=", result);
// QUESTION 6
// let m=2;                               //Logic--->m=2 -->3 -->2 
// let n=4;                               //Logic--->n=4 -->5 -->4
// let p=m++ + ++n - --m + n--;          //Logic--->p=2+5-2+5 = 12-2=10
// console.log("m=" m, "n=", n, "p=", p);
// QUESTION 7
// let a=5;                          //Logic--->a=5 -->6
// let b=3;                          //Logic--->b=3 -->2
// let c=2;                          //Logic--->c=2 -->2
// let d=7;                          //Logic--->d=7 -->6
// let result= ++a*(b-- + c)/--d;    //Logic--->result=6*(3+2)/6 =6*(5)/6 = 6*5/6 =6*0.833 =5
// console.log("a=" a, "b=", b, "c=", c, "d=", d, "result=", result);
// QUESTION 8
// let m=2;                              //Logic--->m=2 -->3
// let n=3;                              //Logic--->n=3 -->2
// let o=4;                                 //Logic--->o=4 -->3
// let result= m++*(--n +m)/(o-- - n);      //Logic--->result=2*(2+3)/(4-2)=2*(5)/(2) =2*5/2 =2*2.5 =5
// console.log("m=",m, "n=",n, "o=",o, "result=",result);
/////////////////////////ASSIGNMENT 2///////////////////////////////////////////////////////////////////////////////////
// QUESTION 1 (a): Using conditional statements, check if the number is: - Even or Odd.  
// var number=40;
// if(number%2==0 && number%3!==0){
//     console.log("If number is completely divided by 2, means remainder is equal to zero, but on other side number is not completely divide by 3, then the number is called  even number.");
// }
// else {
//     console.log("If number is not completely divided by 2, means remainder is not equal to zero but on other side number is completely divided by 3, then the number is called odd number.");
// }
// //QUESTION 1(b): Using conditional statements, check if the number is:-Positive, Negative, or Zero.
// var num=-10;
// if(num>0 && num!=0){
//     console.log("Number is positive.");
// }
//  else if(num<0 && num!=0){
//      console.log("Number is negative.");
// }
// else{
//      console.log("Number is equal to zero.");
//     };
// // QUESTION 1 (c): Whether it is divisible by both 2 and 3 or anyone of them or not divisible by both check all the cases and print statement for each case.
// var num1=85;
// if(num1/2  && num1/3){
//   console.log(" Given number is divisible by both 2 and 3 number.");
// }
// else if (num1/2){
//   console.log("Given number is divisible by 2 number.");
// }
// else if (num1/3){
//   console.log("Given number is divisible by 3 number.");
// }
// else {
//   console.log("Given number is not divisible by both 2 and 3.");
// }
// // QUESTION 2:Take the user age, If the age is 18 or above;Ask if they have a nationality of "Pakistani"; If yes, print "You are eligible to vote."; If no, print "Please obtain a valid ID to vote."
// var age = 21;
// var nationallity= "pakistani";
//   if(age>=18 && nationallity==="pakistani") {
//       console.log("You are eligible to vote.")
//   }
//   else{
//     console.log("Please obtain a valid ID to vote.")
//   }
// // QUESTION 3: Write a program that takes the age of a person as input and determines whether they are a child (0-12 years), teenager (13-19 years), adult (20-59 years), or senior citizen (60 years and above).
// var age = 54;
//  if(age>=0 && age<=12){
//   console.log("you are a child.");
//  }
//  else if (age >= 13 && age <=19 ) {
//   console.log("you are a teenager.");
//  }
//  else if (age>=20 && age<=59){
//   console.log("you are a adult.");
//  }
//  else {
//   console.log("you are a senior citizen when age is above 60.");
//  }
// // QUESTION 4:  - Enter a month (as a number between 1 and 12). Print the number of days in that month. Assume a non-leap year.
// // var monthnum= 3;
// // var year = 2023;
// //  if (monthnum=1){
// //   console.log("number of days in month 1 is 31.");
// //  }
// //  else if (monthnum=2){
// //   console.log("number of days in month 2 is 28.");
// //  } 
// //  else if (monthnum=3){
// //   console.log("number of days in month 3 is 31.");
// //  }
// //  else if (monthnum=4){
// //   console.log("number of days in month 4 is 30.");
// //  }
// //  else if (monthnum=5){
// //   console.log("number of days in month 5 is 31.");
// //  }
// //  else if (monthnum=6){
// //   console.log("number of days in month 6 is 30.");
// //  }
// //  else if (monthnum=7){
// //   console.log("number of days in month 7 is 31.");
// //  }
// //  else if (monthnum=8){
// //   console.log("number of days in month 8 is 31.");
// //  } 
// //  else if (monthnum=9){
// //   console.log("number of days in month 9 is 30.");
// //  }
// //  else if (monthnum=10){
// //   console.log("number of days in month 10 is 31.");
// //  }
// //  else if (monthnum=11){
// //   console.log("number of days in month 11 is 30.");
// //  }
// //  else if (monthnum=12) {
// //   console.log("number of days in month 12 is 31.");
// //  }
// //  else {"Number of month is not valid."}
// // // QUESTION 5:- Check if a year is a leap year or not.
// // //  var year = 2023;
// // // if (year%400 ==0 && year%4 ==0 || year%100 !==0){
// // //     console.log(" 2023 is not a leap year");
// // // }
// // // else {
// // //     console.log("2023 is a leap year");}
/////////////////////////ASSIGNMENT 3///////////////////////////////////////////////////////////////////////////////////
// // // // QUESTION 1
// // Calculate your age based on the current year and your birth year.
// function age(){
// var birthyear:number = 1999;
// var currentyear:number = 2024;
// var age:number = currentyear - birthyear;    //logic--> 2024 - 1999=25
// console.log("My calculatd age based on the current year and year of birth is",age, "years.");
// }
// age()
// // // // QUESTION 2
// // Write a programme that caiculates the area of the rectangle using length and width variables.
// function areaOfRectangle(){
// var a = 15;
// var b = 4;
// var area = a*b;  //15*4=60
// console.log("The area of rectangle is", area, ".");
// }
// areaOfRectangle()
// // // // QUESTION 3
// // Write a program that calculates the area of a circle.
// function areaOfCircle(){
// let radius = 10;
// var area = 3.14*radius**2;   //3.14*10**2=3.14*100= 314
// console.log("Let radius of a circle is 10  then area of circle is=", area, ".");
// }
// areaOfCircle()
// // // // QUESTION 4
// // Write a prograam that calculates the area of a cube?
// function area(){
// let onesideofcube = 5;
//  let areaofcube = 6*onesideofcube**2;   //6*5**2= 6*25=150
// console.log("When a side of cube is",onesideofcube, "then the area of cube is =", areaofcube, ".");
// }
// area()
// // // // QUESTION 5
// // Create a programme that convert fahrenheit to celsius and vice versa using a varable.
// function FToC(){
// var F = 98.6;
// var C= (F-32)*5/9;  //(98.6-32)*5/9= 66*5/9 = 36.66°C
// console.log("C=",C,"°C");}
// FToC()
// // Convert celsius to fahrenheit 
// function CToF(){
// var Celsius = 37;
// var fahrenheit= (Celsius *9/5)+32;  //(37 *9/5)+32= (333/5)+32= 66.6+32=98.6°F
// console.log("farhenheit=", fahrenheit, "°F");
// }
// CToF()
// // // // QUESTION 6
// // Convert a given number of seconds into minutes and seconds using variables. (ARROW FUNCTION WITH PARAMETERS)
// var timeconversion= (timesec: number)=> {
// let timeminutes= timesec/60     //1000/60= 16min and 66sec
// console.log("minutes=", timeminutes);
// }; 
// timeconversion (1000);
// timeconversion(1500);
// // // // QUESTION 7
// // Write a program that calculates the percentage? when supposed obtained marks is 75 out of 80. (FUNCTION WITH PARMETRS)
// function percentage(obtainednum: number, totalnum: number){
// let percentage=obtainednum*100/totalnum;   //7500/80=93.75
// console.log("percentage of marks =", percentage);
// }
// percentage(75, 80)
// // // // QUESTION 8
// // (a): Using conditional statements, check if the number is: - Even or Odd ( let supposed there are two numbers 40, and 73). (FUNCTION WITH PARAMETR) 
// function Num (num: number) {
// if(num%2==0 && num%3!==0){
// console.log("If number is completely divided by 2, means remainder is equal to zero, but on other side number is not completely divide by 3, then the number is called  even number.");
// }
// else {
// console.log("If number is not completely divided by 2, means remainder is not equal to zero but on other side number is completely divided by 3, then the number is called odd number.");
// }}
// Num (40)
// Num (73)
// // (b): Using conditional statements, check if the number is:-Positive, Negative, or Zero ( let supposed there are two numbers 4, 0, and -73).   (ARROW FUNCTION WITH PARAMETRS)
// var numSign =  (num: number)=> {
// if(num>0 && num!=0){
//     console.log("Number is positive.");
// }
//  else if(num<0 && num!=0){
//      console.log("Number is negative.");
// }
// else{
//      console.log("Number is equal to zero.");
//     };}
//     numSign(4)
//     numSign(0)
//     numSign(-73)
// //(c): Whether it is divisible by both 2 and 3 or anyone of them or not divisible by both check all the cases and print statement for each case.
// function numDivisible() {
// var num=85;
// if(num/2  && num/3){
//   console.log(" Given number is divisible by both 2 and 3 number.");
// }
// else if (num/2){
//   console.log("Given number is divisible by 2 number.");
// }
// else if (num/3){
//   console.log("Given number is divisible by 3 number.");
// }
// else {
//   console.log("Given number is not divisible by both 2 and 3.");
// }
// }
// numDivisible()
// // // // QUESTION 9
// // Take the user age, If the age is 18 or above;Ask if they have a nationality of "Pakistani"; If yes, print "You are eligible to vote."; If no, print "Please obtain a valid ID to vote."
// function voteCapable (){
// var age = 58;
// var nationallity= "pakistani";
//   if(age>=18 && nationallity==="pakistani") {
//       console.log("You are eligible to vote.")
//   }
//   else{
//     console.log("Please obtain a valid ID to vote.")
//   };
// }
// voteCapable()
// //  // // QUESTION 10
// // Write a program that takes the age of a person as input and determines whether they are a child (0-12 years), teenager (13-19 years), adult (20-59 years), or senior citizen (60 years and above).
// function ageLevel (age: number){
//  if(age>=0 && age<=12){
//   console.log("you are a child.");
//  }
//  else if (age >= 13 && age <=19 ) {
//   console.log("you are a teenager.");
//  }
//  else if (age>=20 && age<=59){
//   console.log("you are a adult.");
//  }
//  else {
//   console.log("you are a senior citizen when age is above 60.");
//  };
// }
// ageLevel (5)
// ageLevel (15)
// ageLevel (47)
// ageLevel (69)
// // // // QUESTION 11
// // Enter a month (as a number between 1 and 12). Print the number of days in that month. Assume a non-leap year. (FUNCTION WITH PARMETERS)
//  function month (monthNum: number, year: number) {
//  if (monthNum==1){
//   console.log("number of days in month 1 is 31.");
//  }
//  else if (monthNum==2){
//   console.log("number of days in month 2 is 28.");
//  } 
//  else if (monthNum==3){
//   console.log("number of days in month 3 is 31.");
//  }
//  else if (monthNum==4){
//   console.log("number of days in month 4 is 30.");
//  }
//  else if (monthNum==5){
//   console.log("number of days in month 5 is 31.");
//  }
//  else if (monthNum==6){
//   console.log("number of days in month 6 is 30.");
//  }
//  else if (monthNum==7){
//   console.log("number of days in month 7 is 31.");
//  }
//  else if (monthNum==8){
//   console.log("number of days in month 8 is 31.");
//  } 
//  else if (monthNum==9){
//   console.log("number of days in month 9 is 30.");
//  }
//  else if (monthNum==10){
//   console.log("number of days in month 10 is 31.");
//  }
//  else if (monthNum==11){
//   console.log("number of days in month 11 is 30.");
//  }
//  else if (monthNum==12) {
//   console.log("number of days in month 12 is 31.");
//  }
//  else {"Number of month is not valid."};
//  }
//  month(3,2023)
//  month(11,2023)
// // // // QUESTION 12
// //Check if a year is a leap year or not. (FUNCTION WITH PARAMETERS)
// function year1 (year: number) {
// if (year%400 ==0){
//      console.log(" This is a leap year");
// } else if (year%400 !==0){
//      console.log("This is not a leap year")
// }else {
//     console.log("invalid year");
// }
// }
// year1 (2021);
/////////////////////////ASSIGNMENT 4///////////////////////////////////////////////////////////////////////////////////
// / - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
//  function array (rollnum: number[] , index: number , param: number){ 
//      var allstudentrollnum: number []= rollnum;
//  allstudentrollnum.splice (4, 0, 7)
//  return allstudentrollnum;
// } 
// array ([1,2,3,4,5],2,6);
// let result: number[]= array ([1,2,3,4,5],2,6);
// console.log(result);
// // //[1,2,3,4,7,5]
// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
//add item by using push function 
// let shoppingCart: string[] = ["banana" , "butter" , "milk"];
// function PushToArray (item: string){
// shoppingCart[shoppingCart.length] = item;
// }
// PushToArray ("juice");
// console.log(shoppingCart); 
// //remove item by using pop function 
// let shoppingCart2: string[] = ["banana" , "butter" , "milk"];
// shoppingCart2.pop();
// console.log(shoppingCart2);
// //["banana" , "butter"];
// //update items using the splice method
// let shoppingCart3: string[] = ["banana" , "butter" , "milk"];
// shoppingCart3.splice(2, 1, "apple"); 
// console.log(shoppingCart3);
// // // ["banana" , "butter" , "apple"];
//- Write a program that uses a while loop to print the first 25 integers.
// console.log("before loop");
// let index: number = 1;
// while (index<=25){
// console.log(index);
// index = index + 1;
// }
// console.log("after loop");
// - Write a program that uses a while loop to print the first 10 even numbers.
//  let indexnew = 1;
// while (indexnew<22){
// if (indexnew % 2 == 0){
// console.log("even numbers", indexnew);
// }
// indexnew = indexnew + 1;
// }
// - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
// function positiveInteger(num1: number): number {
//  if (num1 < 0) {
//  console.log("negative number");
// }
// let value = 1;
// let index2 = 1;
// while (index2 <= num1) {
//  value *= index2;
// index2 = index2 + 1;
// }
// return value;
// }
// positiveInteger(4);
// let result = positiveInteger(4);
// console.log(result);
// - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
//  function delnegativenumber(num1: number[]): number [] {
//  let result = num1.filter(number => number >= 0);
//  return result;
// }
// let value = [1,-3,2,3,-4,5];
// delnegativenumber(value)
// let result2 = delnegativenumber(value);
// console.log(result2);
// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
// function addition (array1: number[]): number {
// let sum = 0;
// let index = 0;
// while (index < array1.length) {
// sum += index;
// index = index +1;
// }
// return sum; }
// let additionresult: number = addition([0,1, 2, 3, 4]);
// console.log(additionresult);
// - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
// function CToF(C: number[]): number[] {
// let Ftemp: number[] = [];
// let index = 0;
// while (index < C.length) {
//  let CTemp = C[index];
// let F = (CTemp * 9 / 5) + 32;
// Ftemp.push(F);
// index = index + 1;
//  }
// return Ftemp;}
// let C= [38, 40, 42];
// let converttemps = CToF(C);
// console.log(converttemps);         //[ 100.4, 104, 107.6 ]
// - Write a program to remove all the odd numbers from an array.
// function deleteoddnum (num: number[]): number[]{
// let num1: number [] = [];
// let index1 = 1;
// while (index1 < num1.length) {
// if (num1[index1] %2 == 0) {
// num1.push(num1[index1]);
// }
// index1 = index1 + 1;
// }
// console.log(num1);
// }
// deleteoddnum([1, 2, 3, 4, 5, 6, 7 ,8, 9,10]);
/////////////////////////////////////////////////////////////////ASSIGNMENT 5///////////////////////////////////////
//QUESTION 1
//Write a program that uses filter to remove all negative numbers from an array of numbers
// let number: number[] = [1, -1, 2, -2, 3, -3, 4, -4];
// let  positivenumber: number[] = number.filter(number => number >= 0);
// console.log(positivenumber);           // solution--->[1, 2, 3, 4]
//QUESTION 2
//Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
// let givenArray: number[] = [1, 2, 3, 4, 5];
// let resultArray: number[] = givenArray.map(num => num * 2);
// console.log(resultArray);              // solution---> [2, 4, 6, 8, 10]
//QUESTION 3
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
// let fruitsArray: string[] = ["apple", "banana", "cherry", "date", "grape"];
// let newArray: string[] = fruitsArray.filter(fruit => fruit.length>5);
// console.log(newArray);                  // solution --->["banana", "cherry"]
//QUestion 4
//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
// let num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result: number[] = num.filter(num => num % 2 === 0).map(num => num ** 2); 
// console.log(result);                    // solution--->[4, 16, 36, 64, 100]
//QUESTION 5
//Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
// let celsiustemp: number[] = [0, 10, 20, 30, 40];
// let farhenhiettemp: number[] = celsiustemp.map (num => (num * 9/5) + 32);
// console.log(farhenhiettemp);             // solution---> [ 32, 50, 68, 86, 104 ]
//QUESTION 6
//Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
// let array: number[] = [3, 6, 9, 12, 15, 18];
// let newArray1:number[] = array.filter(num => num % 2 !== 0 ).map (num => num*2);
// console.log(newArray1);                     // solution ---> [ 6, 18, 30 ]
//QUESTION 7
// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
// let namelist: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
// namelist.forEach(name => {
//     console.log(`${name}!`); 
// });
// solution ---> Alice!
// Bob!
// Charlie!
// David!
// Emily!
