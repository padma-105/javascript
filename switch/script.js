//task-1
var age =prompt("enter your age: ");
switch (true) {
    case (age<5):console.log("free admission");break;
    case (age>=5 && age<=12):console.log("Admission fee of $10");break;
    case (age>12):console.log("admission fee of $20");break;
    default:console.log("enter your age");
}
//task-2

var time = prompt("enter time: ");
switch (true){
    case (time>=5 && time<12):console.log("good morning");break;
    case (time>=12 && time<18):console.log("good afternoon");break;
    case (time>=18 && time<22):console.log("good evening");break;
    case(time >= 22 && time > 5 || time <= 24 && time >= 1):console.log("good night");break;
    default:console.log("enter valid time");
}

//task-3
var number =prompt("enter anumber: ");
switch (true){
    case (number>0):console.log("positive number");break;
    case (number<0):console.log("negative number");break;
    case (number==0):console.log("number is zero");break;
    default:console.log("enter valid number");
}

//task-4
console.log("membership tye are basic membership,standard membership,premium membership");
var membership =prompt("enter your membership");
switch (true){
    case (membership==="basic membership"):
        access = "only free books";
        break;
    case (membership==="standard membership"):
        access = "free books and discounted paid books";
        break;
    case (membership==="premium membership"):
        access ="all books, including exclusive content";
        break;
    default:
        access="enter your membership";  
} 
console.log(access);

//task-5
console.log("emter you are a regular customer or VIP customer");
var customer = prompt("enter customer type: ");
var amount = prompt("enter total amount: ");
switch (true) {
    case (customer == "regular customer" && amount < 100):
        discount = "no discount";
        break;
    case (customer == "VIP customer" && amount < 100):
        discount = "you will get 10% discount";
        break;
    case (customer == "regular customer" && (amount >= 100 && amount <= 500)):
        discount = "you will get 5% discount";
        break;
    case (customer == "VIP customer" && (amount >= 100 && amount <= 500)):
        discount = "you will get 15% discount";
        break;
    case (customer == "regular customer" && amount > 500):
        discount = "you will get 10% discount";
        break;
    case (customer == "VIP customer" && amount > 500):
        discount = "you will get 20% discount";
        break;
    default: discount = "enter a customer and amount";
}
console.log(discount);

//task-6
var gpa =prompt("enter your GPA: ");
var activity = prompt("enter your extracurricular activities: ");
var hours = prompt("enter your work hours: ")
switch (true){
    case (gpa >=3.5):console.log("eligble for merit-based membership");break;
    case (gpa >= 3 && activity <= 2):console.log("eligible for leadership membership");break;
    case (gpa >=2.5 && hours >= 100): console.log("eligible for community service membership");break;
    default:console.log("enter your GPA,activities,work hours");
}

//task-7
console.log("Movie ticket booking:");
console.log("weekdays-mon,tue,wed,thu,fri (1) and weekends-sat,sun (2)");

var day = prompt("enter your day: ");
var age = prompt("enter your age: ");
switch(true){
    case ((age >= 65 || age <= 12) && day == 1): console.log("you get a discount 50%. you will pay $6.5");break;
    case ((age<=65 || age>=12) && day == 1):console.log("you pay $12");break;
    case ((age >= 65 || age <= 12) && day == 2): console.log("you get a discount 30%. you will pay $8.0");break;
    case ((age<=65 || age>=12) && day == 2): console.log("you pay $15");break;
    default:console.log("enter your age and day");
}
//task-9
var teaType = "Masala";
var addOn = "Extra Sugar";

var basePrice = 0;
var addOnPrice = 0;
switch (true) {
    case (teaType === "Regular"):
        basePrice = 15; break;
    case (teaType === "Masala"):
        basePrice = 20; break;
    case (teaType === "Ginger"):
        basePrice = 25; break;
    default: basePrice = "Invalid tea type selected.";
}
console.log(basePrice);

switch (true){
    case (addOn === "Extra Sugar"):
        addOnPrice = 2.50;break;
    case (addOn === "Extra Milk"):
        addOnPrice = 5;break;
    case (addOn === "No Add-ons"):
        addOnPrice = 0;break;
    default:addOnPrice = "Invalid add-on selected.";
}
console.log(addOnPrice);
var total = basePrice + addOnPrice;

console.log("your total bill is: " + total);