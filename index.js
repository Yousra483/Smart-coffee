    // Assignment 7: Smart Coffee Order Assistant

// ------------------ Part 1: Login & Access Control ------------------ //
function startCoffeeAssistant(){
let username = prompt ("Enter your username:");
let password = prompt ("Enter your password:");

if ((username === "admin" || username === "user") && password === "1234") {
    let role = username === "admin" ? "admin" : "user";
    let security = username === "admin" ? "high" : "low";

    // ------------------ Part 2: Coffee Shop Order Calculator ------------------ //
    let name = prompt("What is your name?");
    let age = parseInt(prompt("What is your age?"));
    let coffeeType = prompt("What type of coffee would you like? (espresso, latte, cappuccino)");
    let quantity = parseInt(prompt("How many cups?"));

    let pricePerCup;
    if (coffeeType === "espresso") {
        pricePerCup = 2.5;
    } else if (coffeeType === "latte") {
        pricePerCup = 3.5;
    } else if (coffeeType === "cappuccino") {
        pricePerCup = 4.0;
    } else {
        alert("Invalid coffee type selected.");
        throw new Error("Invalid coffee type.");
    }

    let originalTotal = pricePerCup * quantity;
    let discount = 0;

    if (age < 18 || age > 60) {
        discount = originalTotal * 0.10;
    }

    let finalTotal = originalTotal - discount;

    // ------------------ Part 3: Bill Splitter with Tip ------------------ //
    let people = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
    let tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, or 15):"));

    let tipAmount = finalTotal * (tipPercent / 100);
    let totalWithTip = finalTotal + tipAmount;
    let perPerson = totalWithTip / people;

    // ------------------ Display Final Result ------------------ //
    alert("Hello " + name + "!\n" +
          "You ordered " + quantity + " " + coffeeType + "(s).\n" +
          "Original total: $" + originalTotal.toFixed(2) + "\n" +
          "Discount: $" + discount.toFixed(2) + "\n" +
          "Tip: $" + tipAmount.toFixed(2) + "\n" +
          "Total with Tip: $" + totalWithTip.toFixed(2) + "\n" +
          "Split between " + people + " people: $" + perPerson.toFixed(2) + " each");

} else {
    alert("Access Denied. Incorrect credentials.");
} }