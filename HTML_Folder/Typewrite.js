var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
 
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap {border-right: 0.08em solid #770}";
    document.body.appendChild(css);
};

// challenge 4 solution (Fizz buzz)
/*
let num = 9; 

if (num % 3 === 0 && num % 5 === 0)
{
    console.log("fizz buzz");
} 
 else if (num % 3 === 0) 
{
    console.log("Fizz")
}
else if (num % 5 === 0) 
{
    console.log("Buzz")
}
else 
{
    console.log("incorrect");

}*/


/*let number = 20;

if(number % 3 === 0 && number % 5 === 0) {
    console.log("fizz buzz")
} else if (number % 3 === 0) {
    console.log("fizz")
} else if (number % 5 === 0) {
    console.log("buzz")
} else {
    console.log(`${number} is not divisible by 3 or 5`)
}*/

/*
let numberTwo = 2;


numberTwo = Math.random((1));
console.log(numberTwo);




let coffeeOrder = ["James - Americano", "Hannah - Frappuccino", " Alex - Latte"]

console.log(coffeeOrder[2])
console.table(coffeeOrder)

// update an array value 

coffeeOrder[1];
console.log(coffeeOrder[1]);

// array property 

console.log(coffeeOrder.length) // how many items are in this array. Great for checking and review the amount of items inside of a array.



// Array Methods 

coffeeOrder.push("Tahir");
console.log(coffeeOrder);
console.log(coffeeOrder.length);


coffeeOrder.pop()
console.log(coffeeOrder.length);

let colours = [

    "red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "gray", "white"

]
    
console.log(colours)

// increment operator ++

let a = 1; 
let b = a++
let by = a;

console.log(a)
console.log(b)

// for loop 

for (let i = 0; i < colours.length; i++) 
{
    console.log(colours[i])
    console.log("This is run through " + [i])

}

let multiplesTwo = [];

for (let i = 1; i < 21; i++) 
{
    if (i % 2 === 0) {
        multiplesTwo.push(i)
    }
}
console.log(multiplesTwo)


let numbery = 0; 

while (numbery < 10) {
    console.log(numbery) 
    numbery++;
}


function $(x)
{
    return document.getElementById(x);
}

// While loop 

let cards = ["Diamond", "Club", "Spade", "Heart"]
let currentCard = "";

console.log(cards)

while (currentCard !== "Spade") {
    console.log(currentCard)
    currentCard = cards[Math.floor(Math.random() * 4)]
}

console.log("Game Over you drew a spade!")

let num = 1;

do {
    console.log(num)
}
while (num > 1) {
    console.log(num + num)
}*/

// break keyword ina loop 
/*
for (let i = 1; i <=5; i++) {
    if (i === 4) {
        break
    }
    if (i === 4) {
    }
    console.log(i)
}

const weekdays = [
    "monday", "Tuesday", "Wednesday", "Thursday", "Friday"
]


for (let day of weekdays) {
    console.log(day)
}

let string = "hello"

for (let h of string) {
    console.log(h)
}

*/

/*
let film = ["Spiderman", "Batman", "Avatar", "Scream", "Mario"];


{
    film.push("sonic", "superman");
}

console.log(film);
*/



/*
let multiplesTwo = [];

for (let i = 1; i < 21; i++) 
{
    if (i % 6 === 0) {
        multiplesTwo.push(i)
    }
}
console.log(multiplesTwo)


let favFilms =[" fight Club", "No Country For Old Men", "The Prestige", "Moneyball", "Superbad "]


for (let i = 0; i < favFilms.length; i++) 
{
    console.log(favFilms[i])

}

for (let i = 20; i >= 0; i--) {
    console.log(i)
}
 


for (let i = 0; i < 5; i++) 
{
   let randomNumber = Math.floor(Math.random() * 50) + 1;

    if (randomNumber % 5 === 0) {
        console.log(`${randomNumber} Is divisible by 5.`)
    }
    else 
    {
        console.log (`${randomNumber} is NOT divisible by 5.`)
    }
}


let total = 20;

function greeting(total)
{
    console.log("hello World")
    return total * 2;
}  
*/
/*
let userOnline;

function userStatus() 
{
    if (userOnline)
    {
        userOnline = false 
        console.log("User Signed Out!")
        console.log(userOnline)

    }
    else 
    {
        userOnline = true; 
        console.log("User Signed In!")
        console.log(userOnline)
    }
}

userStatus()
userStatus()
userStatus()
userStatus()
*/
/*for (let i = 0; i > film.length); */

// atm individuals personal account details. 

function atm(accountNumber, amount) {
    console.log("Account Number: " + accountNumber + "  Amount: " + amount + ".00.")
}

atm(12345678, 200)

function add(num1, num2) {

  return num1 + num2
}



let place = "san Francisco "

function getPersonInfo() {
    const name = "Sarah"
    const age = 22; 
   return `${name} is ${age} and lives in ${place}`
}

console.log(getPersonInfo())


let figure;

for (i = 0; i < 5, i++;) 
{
    figure = Math.floor(Math.random(50 * 2))

    if (figure % 5 === 0) {

       console.log(`${figure} Is divisible by 5.`)
        
    }
}


function double(num) {
    return num * 2;
}

function quadruple(num) {
    return double(double(num))
}

console.log(quadruple(10))


function squareDeclaration(num) {
    return num * num
}

console.log(squareDeclaration(3))


const squareAnon = function(num) 
{
    return num * num
}

// arrow function 
// implicit return
const squaredArrow = (num) =>
{ 
   return num * num; 
}

let name = "Tahir"

function hello(name) {
    return name;
}
console.log(name)

let figure1 = 0;

function number(figure1) {
    if (figure1 === 1) {
        return figure1
    }
    else
    {
        console.log("The number is incorrect")
    }
}

console.log(number(figure1))


let pinNumber = 2436;
let withdrawalAmount = 150;

function ATM(pinNumber, withdrawalAmount) {
    if (pinNumber === 2436 && withdrawalAmount < 150) {
        return `the pin number is correct`
    } 
    else
    {
        console.log(`Sorry, we can't proceed with your withrawal`)
    }
    return ` pin number: ${pinNumber} Withdrawal 
     Amount: ${withdrawalAmount} pounds`
}



console.log(ATM(pinNumber, withdrawalAmount))


for (i = 0; i > i.length, i++;) {

}


// user account information
/*
let accBal = 1000
let myPin = 1111

const withdraw = (withdrawAmount, pinNum) => {
    if (accBal >= withdrawAmount && pinNum === myPin) 
    {
        console.log(`transaction approved. Please collect your £${withdrawAmount}.00.`)
    }
    else if (accBal >= withdrawAmount && pinNum !== myPin)
    {
        console.log(`Transaction Denied. Incorrect Pin Number.`)
    }
    else
    {
        console.log(`Transaction failed. Insufficient Funds.`)
    }
}

withdraw(200, 1111)

*/
/*
const objExample = {
    key1: "value1",
    key2: "value2", 
    key3: "value3"
}


// person 
const person = {
    name: "Tahir",
    Age: "27"
}


*/
/*

let halfPrice = 20
let fullPrice = 25
let price = 10;




let coffeeShop = (halfPrice, fullPrice) => {
    if (fullPrice >= halfPrice && halfPrice !== fullPrice) {
        console.log(`The stadard price for ${name, drink} is ${price}`)
    }
    else if (fullPrice <= halfPrice && halfPrice === fullPrice) {
        fullPrice =- price;
        console.log(`The discounted price for ${name, drink} is ${fullPrice}`)
    }
}

coffeeShop(20, 25)

shop = {
    name: "Costa",
    drink: "Americano",
    branchNumber: 250,
    specialOffer: true,
    drinks: [
        "Americano", 
        "Latte", 
        "Tea"
    ]
}

// alarm object

const alarm = {
    weekdayAlarm: "Get up at 7:00am.",
    weekendAlarm: "Sleep in it's the weekend!",
    checkAlarm: function (day) 
    {
        if (day === "Saturday" || day === "Sunday") {
            console.log(alarm.weekendAlarm)
        }
        else 
        {
            console.log(alarm.weekdayAlarm)
        }
    }
    
}
alarm.checkAlarm("Monday")


// Task 1 and 2 extended
person = {
    nameT: "Tahir",
    age: "27",
    city: "London",

}
person = ["Spiderman", "Sonic"] 
console.log(person)

person.favouriteSongs = [
    "Music"
]
*/



// task 3 
/*
pet = {
    nameA: "dogG",
    typeOfAnimal: "dog",
    ageA: "7",
    eat: () => {
       return `${this.nameA} is eating `
    },

    drink: function() {
        return `${this.nameA} is drinking` 
    }
  
}

console.log(pet.eat())
console.log(pet.drink())


// taks 4 

Supervisor = {
    nameB: "Ben", 
    sex: "Male",
    Industry: "Retail", 
    Age: "30",
    moreInfo:  {
        favouritefilm: "the great gatsby",
        Hobby: "football"
    }
}
console.log(`the supervisors name is ${Supervisor.nameB} and he works in the ${Supervisor.Industry} industry.
He's also ${Supervisor.Age} years old and his favourite film is
${Supervisor.moreInfo.favouritefilm} and he likes to play ${Supervisor.moreInfo.Hobby}`)


/*
const pet = {
    petName: "LilKittyKat",
    typeOfAnimal: "Purrfect",
    age: "4th life"
 }
pet.eat = function (){
    console.log(`${pet.petName} is eating! Do not disturb!`)
 }
pet.drink = function (){
    console.log(`${pet.petName} is drinking! Boombastic side eye!`)
}
pet.meow = function(){
    console.log(`${pet.petName} is MeowMeowMeow'ing! Pet the KittyKat!`)
}


pet.meow = function() {
    console.log()
}

pet.eat()
pet.drink()
pet.meow()

*/

// Task 2

  pet = {
    name: "wolfee",
    animal: "Wolf",
    age: "9"
  }
  console.log(pet)

  pet.eat = function () {
    console.log(` the ${pet.name} is eating his food!`)
  }

  pet.drink = function () {
    console.log(` the ${pet.name} is drinking water!`)
  }
  pet.eat()
  pet.drink()



/*
let object;
let moveObject = 0;
let transform = document.getElementsByTagName("a")

object = document.querySelector("#Name");

function Translate(moveObject) 
{
    screenX = 1024;
    screenY = 768;
    moveObject = Math.floor(Math.random(50 * 2)) + screenLeft || screenTop 
    Math.floor(Math.random(50 * 2)) + screenX || screenY 
    object.document.Translate()

    return Translate();
}

console.log(Translate(moveObject))

Translate(object * screenLeft * 10)

transform = screenX * screenY
moveLeft = screenLeft * 2;
*/











