 //task=1

var age =prompt("enter your age: ");
var result1 = (age < 5)? "free admission":(age < 13)? "admission fee:$10":"admission fee:$20";
console.log(result1);

//task=2

var time = prompt("enter time in 24 hours format: ");
var result2 = (time >= 5 && time < 12) ? "good morning" : (time >= 12 && time < 18) ? "good afternoon" :
    (time >= 18 && time < 22) ? "good evening" : (time >= 22 && time > 5 && time <= 24 && time >= 1) ? "good night" : "enter currect time";
    console.log(result2)

//task-3

var number =prompt("enter your number: ");
var result3 = (number > 0)? "number is positive":(number < 0)? "number is negative":"number is zero";
console.log(result3);

//task-4

var type1 = "standard menbership";

if (type1 == "basic membership") {
    console.log("Access to only free books");
}
else if (type1 == "standrad membership"){
    console.log(" Access to free books and discounted paid books.")
}
else if (type1 = "premium membership"){
    console.log(" Access to all books, including exclusive content.")
}
else{
     console.log("enter your membership");
}

//task-5

var customers = "regular customers";
var totalPrice = 300;

if ("regular customers" === customers && totalPrice < 100){
    console.log(" No discount for purchases under $100");
}
else if ("regular customers" === customers && totalPrice >= 100 && totalPrice <= 500){
    console.log(" A 5% discount for purchases between $100 and $500")
}
else {
    console.log("A 10% discount for purchases over $500")
}

var customer2 = "VIP customers";
var price = 300;
if ("VIP customers" === customer2 && price < 100){
    console.log("  A 10% discount for purchases under $100");
}
else if ("VIP customers" === customer2 && price >= 100 && price <= 500){
    console.log(" A 15% discount for purchases between $100 and $500")
}
else {
    console.log("A 20% discount for purchases over $500")
}

//tssk-6

var gpa =prompt("enter your GPA: ");
var activity = prompt("enter your extracurricular activities: ");
var hours = prompt("enter your work hours: ")
if(gpa >=3.5){
    console.log("eligble for merit-based membership");
}
else if (gpa >= 3 && activity <= 2){
        console.log("eligible for leadership membership");
}
else if (gpa >= 2.5 && hours >= 100){
    console.log("eligible for community service membership")
}
else{
    console.log("enter your GPA,activities,work hours")
}

//task-7

console.log("Movie ticket booking:");
console.log("weekdays-mon,tue,wed,thu,fri (1) and weekends-sat,sun (2)");

var day = prompt("enter your day: ");
var age = prompt("enter your age: ");

if((age >= 65 || age <= 12) && day == 1){
    console.log("you get a discount 50%. you will pay $6.5");
}
else if ((age<=65 || age>=12) && day == 1){
    console.log("you pay $12");
}
else if ((age >= 65 || age <= 12) && day == 2){
    console.log("you get a discount 30%. you will pay $8.0");
}
else if ((age<=65 || age>=12) && day == 2){
    console.log("you pay $15");
}
else{
    console.log("enter your age");
}

//task-9

var teaType = "Masala";
var addOn = "Extra Sugar";

var basePrice = 0;
var addOnPrice = 0;

if (teaType === "Regular") {
    basePrice = 15;
} 
else if (teaType === "Masala") {
    basePrice = 20;
} 
else if (teaType === "Ginger") {
    basePrice = 25;
} 
else {
    console.log("Invalid tea type selected.");
}

if (addOn === "Extra Sugar") {
    addOnPrice = 2.50;
} 
else if (addOn === "Extra Milk") {
    addOnPrice = 5;
} 
else if (addOn === "No Add-ons") {
    addOnPrice = 0;
} 
else {
    console.log("Invalid add-on selected.");
}

var total = basePrice + addOnPrice;

console.log("your total bill is" + total);
