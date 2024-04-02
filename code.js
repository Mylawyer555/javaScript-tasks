

//Assignment 9:
//Temperature Warning System
//Issue a temperature warning based on the following conditions;
//If the temperature is below 0 degrees cl, warn about potential freezing conditions.If
//If the temperature is above 35 degrees cl, warn about a heatwave.

// let temp = -10;
// if (temp <= 0) {
//     console.log("Potential Freezing!");
// } else if(temp >= 35){
//     console.log("Potential heatwave!");
// } else if(temp >0 && temp < 35){
//     console.log("Normal Tempeture!");
// }


//Assignment 8:
//Given three variables that indicates if friends are available for movie night (true or false)
//decide If the movie night is on:
//If at least two friends are available, movie night is on.
// //If only one or none can make it, it's Off.\

// let numberOffriends = ;

// if(numberOffriends >= 2){
//     console.log("Movie night is On!");
// }else if(numberOffriends <= 1 && numberOffriends >= 0){
//     console.log("Movie is Off! ");
// }


// Assignment 10: Validate Triangle Sides
// Given three numbers representing the lengths of the sides of a triangle, determine if forming a triangle with these sides is possible. (Hint: The sum of the lengths of any two sides of a triangle must be greater than the length of the remaining side.)

// // given that x,y,z are the length of the three sides of the triangle

// let a = 10;
// let b = 10;
// let c = 50;

// if (a == b && c < (a+b)) {
//     console.log("Triangle");
// }else{
//     console.log("invalid input");
// }



// Assignment 7: Validate Triangle Type
// Given the lengths of the sides of a triangle, determine if the triangle is Equilateral, Isosceles, or Scalene.

// let sideA= 2;
// let sideB = 100;
// let sideC= 100;

// if (sideA == sideB && sideC ==(sideA && sideB)) {
//     console.log("equalateral Triangle");
// }else if((sideA == sideB && sideC !=(sideA == sideB)) || (sideB == sideC && sideA !=(sideB == sideC)) || (sideA == sideC && sideB !=(sideA == sideC))){
//     console.log("Isoceles Triangle");
// }else if(sideA != sideB && sideC !=(sideA || sideB)){
//     console.log("Scalene Triangle");
// }



// Assignment 11: Basic License System
// Write a system that grants licenses based on age and a written test score:
// Must be at least 16 years old and have a score of 80% or above for a driver's license.
// If under 16 but the score is 90% or above, a learner's permit is granted.

// let age =  14;
// let testScore = 90;

// // console.log(testScore < 1 || testScore > 100)
// if (age >= 16 && testScore >= 80) {
//     console.log("Grant driver's license");
// } else if((age < 16 && testScore < 80) || (age >= 16 && testScore < 80)) {
//     console.log("Drivers license denied");
// } else if(age < 16 && (testScore >= 90 && testScore <= 100)){
//     console.log("Grant learner's permit");
// }else if(age < 1 || (testScore < 1 || testScore > 100) ){
//     console.log("Invalid number");
// }


// Assignment 12: Simple Subscription Model
// Implement a simple subscription model based on user age and content preference:
// Under 18, only offer "Basic" subscription.
// 18 and above with a preference for sports, offer "Premium Sports" package.
// 18 and above without a specific preference, offer "Standard" package.

// let userAge = 18;
// let preference = "";

// if (userAge < 18) {
//     console.log("Basic subscription");
// } else if(userAge >= 18 && preference === "sports") {
//     console.log("Premium sports");
// } else if(userAge >= 18 && preference === ""){
//     console.log("Standard");
// }



// Assignment 13: Job Application Filter
// Create a filter for job applications based on experience and skill level:
// If the applicant has at least 3 years of experience and knows JavaScript, consider them for a senior developer position.
// If the applicant has less than 3 years of experience but knows JavaScript, consider them for a junior developer position.
// If the applicant does not know JavaScript, reject their application.

// let experience = 2;
// let skills = "JavaScript";

// if (experience >= 3 && skills === "JavaScript") {
//     console.log("Senior developer");
// } else if(experience < 3 && skills === "JavaScript") {
//     console.log("Junior developer");
// } else if(skills !== "JavaScript"){
//     console.log("Reject application");
// }


// Assignment 14: Health Insurance Eligibility
// Determine eligibility for a health insurance plan based on age and pre-existing conditions:
// If the applicant is between 18 and 60 years old and has no pre-existing conditions, approve their application.
// If the applicant is over 60 years old but has no pre-existing conditions, offer them a limited coverage plan.
// If the applicant has pre-existing conditions, reject their application.

// let applicantAge = 100;
// let preexistingConditions = "No";

// if ((applicantAge >= 18 && applicantAge <= 60) && preexistingConditions === "NO" ) {
//     console.log("Approve their application");
// } else if(applicantAge > 60 && preexistingConditions === "No") {
//     console.log("Offer a limited coverage plan");
// } else if(preexistingConditions === "Yes"){
//     console.log("Reject thier application");
// }



// Assignment 15: Loan Application Approval System
// Design a loan application approval system with stricter criteria:
// If the applicant's income is over $80,000, their credit score is above 750, and they have no outstanding debts, approve the loan.
// If the income is between $50,000 and $80,000, the credit score is above 700, and they have no more than one outstanding debt, offer a reduced interest rate.
// If the income is below $50,000 but above $30,000, the credit score is above 650, and they have less than three outstanding debts, consider the application.
// Otherwise, reject the loan application.

// let income = (25000 );
// let creditScore = 300;
// let outstandingDebts = 5;

// if ((income > 80000)  && (creditScore > 750) && ( outstandingDebts <= 0)) {
//     console.log("Approve the loan");
// } else if((income >= 50000 && income <= 80000) && (creditScore > 700) && (outstandingDebts <= 0)){
//     console.log("Offer reduced interest rates");
// } else if((income < 50000 && income > 30000) && (creditScore > 650) && (outstandingDebts < 3)){
//     console.log("Consider the application");
// }else{
//     console.log("Reject the loan application!")
// }



// Assignment 16: University Scholarship Eligibility
// Implement a scholarship eligibility checker for a university with specific criteria:
// If the applicant's GPA is above 3.8 and they have exceptional extracurricular activities, offer a full scholarship.
// If the GPA is between 3.5 and 3.8 and they have a strong academic record, offer a partial scholarship.
// If the GPA is between 3.0 and 3.5 and they demonstrate financial need, consider them for financial aid.
// Otherwise, reject the scholarship application.

// let applicantGPA = 3;
// let specificCriteria = "demostrate financial need";

// if ((applicantGPA > 3.8)  && (specificCriteria == "exceptional extracurricular activities")) {
//     console.log("Offer full scholarship");
// } else if((applicantGPA >= 3.5 && applicantGPA <= 3.8) && (specificCriteria == "strong academic record") ){
//     console.log("Partial scholarship");
// } else if((applicantGPA >= 3.0 && applicantGPA <= 3.5) && (specificCriteria == "demostrate financial need")){
//     console.log("Consider them for financial aid");
// } else{
//     console.log("Reject the scholarship application");
// }


// Assignment 17: Number Guesser
// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.

// const secretNumber = 5
// let guess = 5;

// if (guess > 5) {
//     console.log("Your guess is higher!");
// } else if(guess < 5) {
//     console.log("Your guess is lower!");
// } else if(guess == 5){
//     console.log("Correct!");
// }




// Assignment 18: Complex Access Control System
// Design a complex access control system for a high-security facility with multiple entry points and varying levels of clearance. The system should incorporate the following criteria:
// The facility has three main entry points: A, B, and C.
// Each entry point requires different levels of clearance for access.
// Clearance levels range from 1 to 5, with 5 being the highest level of access.
// Access to Entry Point A requires clearance level 3 or higher.
// Access to Entry Point B requires clearance level 4 or higher.
// Access to Entry Point C requires clearance level 5.
// Additionally, individuals with VIP status have special access privileges, granting them clearance to all entry points regardless of their clearance level.
// Your task is to implement an access control system that prompts the user to enter their clearance level and VIP status, and then determines which entry points they are allowed to access based on the provided criteria.

// let clearanceLevel = 3;
// let vipStatus =  ;


// if ((clearanceLevel ==3) && (clearanceLevel <5)) {
//     console.log("Entry point A");
// } else if((clearanceLevel ==4) && (clearanceLevel <5)) {
//     console.log("Entry point B");
// }else if(clearanceLevel ==5){
//     console.log("Entry point C");
// }else if(vipStatus == clearanceLevel >= 3 ){
//     console.log("Access all entry point");
// } else{
//     console.log("Access Denied!");
// }


// Assignment 5: Simple Calculator
// Given two numbers and an arithmetic operator (+, -, *, /), perform the corresponding operation.

// let q =5;
// let p = 10;
// console.log(q * p);
// console.log(q / p);
// console.log(q + p);
// console.log(q - p);


// Assignment 6: Find the Season
// Given a month (as a number from 1 to 12), display the season it falls in (Spring, Summer, Autumn, Winter).

// let month = 0;

// if ((month >= 1) && (month <= 3) ) {
//     console.log("Winter");
// } else if((month >= 4) && (month <= 6)){
//     console.log("Autumn");
// }else if((month >= 7) && (month <= 9)){
//     console.log("Summer");
// }else if((month >= 10) && (month <= 12)){
//     console.log("Spring");
// }else {
//     console.log("Invalid Input!");
// }


// Assignment 2: Leap Year Checker
// // Create a program that checks if a year is a leap year

// let year =3;

// if ((year == 365) && (year < 366) ) {
//     console.log("Not a leap year")
// } else if((year > 365) && (year == 366)){
//     console.log("leap year!");
// }else{
//     console.log("Invalid")
// }


// Assignment 3: Even or Odd
// // Determine if a given number is even or odd.

// let number = 150;

// let remainder = (number % 2);

// if ( remainder == 0) {
//     console.log(`${number} is even`);
// } else {
//     console.log(`${number} is Odd`);
// }



// Assignment 4: Divisible by 5 and 11
// Check if a number is divisible by both 5 and 11.

// let num = 151 ;

// let quotient = ((num % 5) && (num % 11));

// // console.log(num % 10);

//  if (quotient == 0) {
//     console.log("Divisible by 5 and 10")
//  } else {
//     console.log("Not divisible!")
//  }


// Assignment 1: Custom Password Strength Checker
// Write a program that checks the strength of a password based on the following criteria:
// If the password length is less than 6, it's too weak.
// If it contains only numbers or only letters, it's weak.
// // If it contains both letters and numbers and is at least 6 characters long, it's strong.

// let password = "sjsi234";
// let alpha = (/[a-z]/);
// let numbers = (/[0-9]/);

// if ((password.length < 6) ) {
//     console.log("Too weak!");
// } else if(password === (alpha && numbers)){
//     console.log("Meduim");
// } else if(password == (alpha && numbers) && (password.length >= 6) ){
//     console.log("Very strong");
// }
