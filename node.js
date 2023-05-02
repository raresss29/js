//. Prima chstie
console.log("Aicie prima chestie");
function boolNum (num) {return num % 10 === 0}
console.log(boolNum(10))
//. A doua chestie
console.log("Aici e a doua chestie");
function tellFortune (N, Z, Y, X){
  const output = `Vei fi un ${X} in ${Y} casatorit cu ${Z} si vei avea ${N} copii`;
  console.log(output)
}
tellFortune (3, "Emanuel", "Italia", "Programator")
//. A treia chestie
console.log("Aici e a treia chestie");
  function numeleUneiZileASaptamanii(myNumber){
    switch (myNumber){
      case 1:
        console.log(`luni`);
        break;
      case 2:
        console.log(`Marti`);
        break;
      case 3:
        console.log(`Miercuri`);
        break;
      case 4:
        console.log(`Joi`);
        break;
      case 5:
        console.log(`Vineri`);
        break;
      case 6:
        console.log(`Sambata`);
        break;
      case 7:
        console.log(`Duminica`);
        break;
    }
}
numeleUneiZileASaptamanii(1);
numeleUneiZileASaptamanii(2);
numeleUneiZileASaptamanii(3);
numeleUneiZileASaptamanii(4);
numeleUneiZileASaptamanii(5);
numeleUneiZileASaptamanii(6);
numeleUneiZileASaptamanii(7);