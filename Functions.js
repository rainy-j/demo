let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}

pressGrindBeans();
pressGrindBeans();

/*const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from ${accnum}`);
}

cashWithdrawal(300, accnumber);
cashWithdrawal(30, 50449921);
cashWithdrawal(200, 50449921);


let accNumber1 = 50449921;
let accNumber2 = 1000;


const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from ${accnum}`);
}

cashWithdrawal(300, accNumber1);
cashWithdrawal(30, accNumber2);
cashWithdrawal(200, 50449921);*/


const addUp = (num1, num2) => {
    return num1 + num2;
}

addUp(7,3);
console.log(addUp(2,5));

//act 1
function factorial1 (n) {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial1 (n-1));
    }
}

console.log(factorial1(33));

const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial (n-1));
    }
}

console.log(factorial(33));

//act 2
let orderCount = 0;

const takeOrder = (topping, drink) => {
    console.log(`Pizza with ${topping} and ${drink} deal`);
    orderCount++;
}

takeOrder("pineapple", "pepsi");
takeOrder("chicken", "coke");
console.log(orderCount);


//act 3 create cash machine function that checks pin is correct before dispense cash. 


let pin = 1234
let balance = 500

const cashWithdrawal = (amount, accNum, pin, balance) => {
    if (pin === 1234 && balance >= amount) { 
     console.log(`Withdrawing ${amount} from ${accNum}.`);
} else {
    if (pin != 1234) {
        console.log("Incorrect PIN")
    } else if (amount > balance) {
    console.log("Insufficient balance");
} 
}}

cashWithdrawal(400, 50559921, 1234, balance);


//const pin = 2222;
//let balance = 1000;

/*const cashMachine = (pin, amount, transaction) => {
  if (pin !== 2222) {
    return console.log('Incorrect pin, please try again');
  } else if (transaction === 'withdraw' && balance - amount >= 0) {
    balance -= amount;
    return console.log(
      `You have withdrawn ${amount}, your new balance is ${balance}.`
    );
  } else if (transaction === 'withdraw' && balance - amount < 0) {
    return console.log(
      `You have insufficient funds in your account, your balance is ${balance}.`
    );
  } else if (transaction === 'pay in') {
    balance += amount;
    return console.log(
      `You have paid in ${amount}, your new balance is ${balance}.`
    );
  } else
    return console.log(
      `Unknown error; your account balance is unchanged. Please try your transaction again.`
    );
};

cashMachine(1111, 300, 'withdraw');
cashMachine(2222, 3000, 'withdraw');
cashMachine(2222, 1000, 'pay in');
cashMachine(2222, 1500, 'withdraw');
cashMachine(2222, 500, 'add');
cashMachine(2222, 500, 'pay in');
cashMachine(2222, 1000, 'withdraw');*/



//person
 const person = {
  name: "Jane",

};
person.favSongs = ["Twinkle Twinkle", "That Song"];
console.log(person.favSongs);
function sayHi() {
  console.log(`Hello my name is ${person.name}.`)
};
sayHi();

//cafe
let offer = "none";
let time = 1200;

const cafe = {
  name: "Whitesheep",
  seatingCapacity: 100,
  hasSpecialOffers: true,
  drinks: [
    "Cappucino",
    "Latte",
    "Filter Coffee",
    "Tea",
    "Hot chocolate"
  ],

  breakfastOffer: "Free croissant with coffee",
  lunchOffer: "Free drink with surprisingly priced sandwich",
  noOffer: "Sorry no offer",
  openCafe(){
    if(this.hasSpecialOffers){
      return "Time for a special offer";
    }
  },
  closeCafe(){
    return "We are closed";
  }
};
console.log(cafe.openCafe());
console.log(cafe.closeCafe());

if (time < 1100){
  offer = cafe.breakfastOffer;
  console.log(cafe.breakfastOffer);
} else if (time < 1500){
  offer = cafe.lunchOffer;
  console.log(cafe.lunchOffer);
}

let day = "Saturday";
let alarm = "";

const alarmClock = {
  weekendAlarm: "no alarm needed",
  weekdayAlarm: "get up at 7am"
};

if (day == "Saturday" || day == "Sunday"){
  alarm = alarmClock.weekendAlarm;
  console.log(`Good Morning, ${alarm}.`);
} else {
  alarm = alarmClock.weekdayAlarm;
  console.log(`Hello, ${alarm}.`);
}

//activity 2: pet

const pet = {
  name: "Nan",
  typeOfPet: "dog",
  age: 1,
  colour: "Black"
}
pet.eat =  (`${pet.name} is eating.`);
pet.drink = (`${pet.name} is drinking.`);

  console.log(pet.eat);
  console.log(pet.drink);


//activity 3: Coffee Shop


const coffeeShop = {
  branch: "Manchester",
  drinksPrices: [
    ["Americano","Cappucino","Water","Hot chocolate"],
   [1.50,2.00,.20,1.20]
],
  foodPrices: [
    ["cake","panini","bacon roll"],
    [1.00,1.50,.99]
  ],
  foodOrdered(){
    return this.foodPrices[0][1];
},
drinkOrdered(){
    return this.drinksPrices[0][1];
},

order(){
  return console.log(`your order is ${this.drinksOrdered} and ${this.foodOrdered}.`)
  
}}
 
coffeeShop.order();




