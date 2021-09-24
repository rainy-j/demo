
let firstName = "Jane";
console.log(firstName);
let i = 10;
console.log(i);
i += 2;
console.log(i);
let favColour = "Blue";
let myAge = 28;
console.log(favColour);
console.log("My favourite colour is " + favColour);
console.log(`Hi my name is ${firstName} and I am ${myAge}. My favourite colour is ${favColour}.`)

myAge = 29;
firstName = "Jay"
favColour = "Green"
console.log(`Hi my name is ${firstName} and I am ${myAge}. My favourite colour is ${favColour}.`)

breakfast = "oats";
lunch = "chicken sandwich";
dinner = "pie"

console.log(`Today I will have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner. `)

breakfast = "an apple"
lunch = "soup"
dinner = "pizza"
console.log(`Tomorrow I will have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner. `)

function thalapathyBirthday(month, day) {

    var manos = new Date(),
      vijay = manos.getFullYear(),
      next = new Date(vijay, month - 1, day);
  
    manos.setHours(0, 0, 0, 0);
  
    if (manos > next) next.setFullYear(vijay + 1);
  
    return Math.round((next - manos) / 8.64e7);
  }
  
  var vajasan = thalapathyBirthday(07, 29);
  
  if (vajasan === 0) console.log('Birthday!');
  
  else console.log(vajasan + ' day' + (vajasan > 1 ? 's' : '') + ' to go until birthday');


  //noughts and crosses
  const myLines = ['    |   |    ', '    |   |    ','    |   |    ', '-------------', '    |   |    ', '    |   |    ', '    |   |    ', '-------------', '    |   |    ', '    |   |    ', '    |   |    '];
myLines.forEach(function(number) {
console.log(number)
})

console.log(" ");

space1 = "x"
space2 = " "
space3 = "o"
space4 = " "
space5 = "x"
space6 = " "
space7 = "o"
space8 = "x"
space9 = " "


console.log("    |   |    ");
console.log(` ${space1}  |   |    `);
console.log("    |   |    ");
console.log("-------------");
console.log("    |   |    ");
console.log(` ${space3}  | ${space1} |    `);
console.log("    |   |    ");
console.log("-------------");
console.log("    |   |    ");
console.log(` ${space1}  |   |    `);
console.log("    |   |    ");
console.log("             ");



if(10 === "10"){
    console.log("they are the same")
} else{
    console.log("they are not the same")
}

let age = 20;
let country = "UK";

if(age > 17 && country == "UK"){
    console.log("Yes, I can serve you")
} else{
    console.log("You aren't old enough")
}

country = "US"
if(age > 17 && country == "UK"){
    console.log("Yes, I can serve you")
} else{
    console.log("You aren't old enough")
}

let topping = "pepperoni";

switch(topping){
    case "chicken":
    case "jalapenos":
        console.log("these are important ingredients for my pizza");
        break;
    case "pepperoni":
        console.log(`I dont mind having ${topping} on my pizza`);
        break;
    case "mushrooms":
    case "fish":
    case "pineapple":
        console.log(`${topping} should not be on a pizza`);


}
let password = "password";

if(password < 8 ){
    console.log("password not 8 characters")
} else{
    console.log(password)
}

let num = 30

if (num % 3 == 0 && num % 5 == 0){
    console.log("fizzbuzz")
} else if (num % 5 == 0){
    console.log("buzz")
    } else (num % 3 == 0);{
    console.log("fizz")
    }


//5
let string = "1001"; 

const len = string.length;

for (let i = 0; i < len / 2; i++) {

    if (string[i] !== string[len - 1 - i]) {
            return console.log( 'It is not a palindrome');
        }
    }
    return console.log( 'It is a palindrome');

    //teacher answer
    let num = 7337
    let numString = num.toString();
    let reverseNumString = numString.split('').reverse().join('');

    if (num == reverseNumString){
        console.log(`yes ${num} is a palindrome`)
    } else {
        console.log(`No ${num} is not a palindrome`)
    }



//6
let time = 6;
let placeOfWork = "the office";
let townOfHome = "London";
if (time > 7){
    console.log(`I am at ${placeOfWork}`)
}
else {
    console.log(`I am at ${townOfHome}`)
}
