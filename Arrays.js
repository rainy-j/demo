let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"

];

console.log(coffeeOrder);
coffeeOrder[1] = "Ann - Vanilla latte";
console.log(coffeeOrder);

console.log(coffeeOrder.length);

coffeeOrder.push("Chris - coffee");
console.log(coffeeOrder);

let favouriteSongs = [
    "Twin Peaks - Making Breakfast",
    "French Cassettes - Sunday Soda",
    "Etta James - At Last"

];
console.log(favouriteSongs);

 favouriteSongs.shift();

 console.log(favouriteSongs);

 favouriteSongs.unshift("Gasoline", "Dancing in the Moonlight");

 console.log(favouriteSongs);


 let shoppingList = ["apple", "orange", "bananna",]
    shoppingList.splice(1,1,"sausage")
    console.log(shoppingList)


    

//Activity 1 
let faveSongs = [
    "Return of the mack",
    "Sugar Pie Honey",
    "Fugees",
];
faveSongs.unshift ("Ive got 5 on it " ,"Hit me baby one more time");
faveSongs.pop();
console.log (faveSongs);

//Activity 2 
let dogs =[
    "Jack Russell",
    "Bull Terrier",
    "Labrador",
];

dogs.splice(1);
console.log(dogs);


//activity 2, generate random numbers between 1-50
for (let i = 0; i < 6; i++){
    console.log(Math.floor(Math.random() * 50));

}

for (let i = 9; i >= 0 ; i--){
    console.log(i)
}

for (let i = 0; i <= 9 ; i++){
    console.log(i)
}