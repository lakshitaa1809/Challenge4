const dogs = [
  { weight: 22, curfood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curfood: 200, owners: ["Matlida"] },
  { weight: 13, curfood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curfood: 340, owners: ["Michael"] },
];
let rec_food = "";
let rec_food1 = "";
for (let i = 0; i <= dogs.length - 1; i++) {
  let rec_food1 = Math.ceil(dogs[i].weight ** 0.75 * 28);
  console.log(rec_food1);
  dogs[i].rec_food = rec_food1;
}
console.log(dogs);
let sarah_owner = dogs.slice(2, 3);
console.log(sarah_owner);
if (sarah_owner[0].curfood > sarah_owner[0].rec_food) {
  console.log("Sarah dog eating too much");
} else {
  console.log("Sarah dog eating too little");
}

let ownersEatTooMuch = ["Alice", "Bob", "Matlida"];
let ownersEatTooLittle = new Array("Sarah", "John", "Michael");
console.log(ownersEatTooMuch, "dogs eat too Much");
console.log(ownersEatTooLittle, "dogs eat too Little");
for (let j = 0; j <= dogs.length - 1; j++) {
  if (dogs[j].curfood == dogs[j].rec_food) {
    console.log("true");
  } else {
    console.log("false");
  }
}
for (let k = 0; k <= dogs.length - 1; k++) {
  let accept_amounthigh = Math.ceil(0.1 * dogs[k].rec_food + dogs[k].rec_food);
  let accept_amountlow = Math.ceil(dogs[k].rec_food - 0.1 * dogs[k].rec_food);
  if (
    dogs[k].curfood === accept_amounthigh ||
    dogs[k].curfood === accept_amountlow
  ) {
    console.log("true");
    let okayamountfood = new Array(dogs[k]);
    console.log(okayamountfood);
  }
  console.log("false");
}
let dogs_copy = Array.from(dogs);
console.log(dogs_copy);
let dogs_sort = dogs_copy.sort((a, b) => a.rec_food - b.rec_food);
console.log(dogs_sort);
