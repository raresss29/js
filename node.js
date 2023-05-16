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

//.ex 1 array and loops 

function evenNumbers(nr) {
  if(nr >=0){
    if (nr % 2 === 0){
      console.log(nr)
    }  
    nr--;    
    return evenNumbers(nr) 
  }
}
evenNumbers(10);

var mm = 0;
function evenNumbers(nr) {
  if(mm <= nr){
    if (mm % 2 === 0){
      console.log(mm)
    }  
    mm++;    
    return evenNumbers(nr) 
  }
}
evenNumbers(10);

let nr=10;
for(let i=0; i<=nr; i++){
  if(i % 2 === 0)
    console.log(i)
}

let nr2 = 10;
while(nr>=0){
  if(nr % 2 === 0)
    console.log(nr)
  nr--;
}

//.ex 2 array and loops

const aListOfItems1 = [2, 4, 6, 12, 16];
var sum = 0;
for (let i=0; i<aListOfItems.length; i++){
  if(i>=0){
    sum=sum + aListOfItems[i];
  }
}
console.log(sum)

//.ex 3 array and loops

const aListOfItems2 = [2, 4, 6, 12, 16];
let da3=[];
for (let i=aListOfItems.length-1; i>=0; i--){
  if(i>=0){
    da=da+[aListOfItems[i]];
  }
  if(i>0){
    da=da+", "
  }
  asta="["+da+"]"
}
console.log(asta)

//.ex 4 array and loops

const aListOfItems = "ana are mere";
let da=0;
for (let i=0; i<=aListOfItems.length; i++){
  if(aListOfItems[i]==="a")
    da=da+1;
  else if(aListOfItems[i]==="e")
    da=da+1;
  else if(aListOfItems[i]==="i")
    da=da+1;
  else if(aListOfItems[i]==="o")
    da=da+1;
  else if(aListOfItems[i]==="u")
    da=da+1;
}
console.log(da)

//. tema obiecte

//.ex1 obiecte

const retete = {}
retete.titlu="Pizza"
retete.portii=3
retete.ingrediente=["sunca", "cas", "ketchup"]
console.log(retete)

//.ex2 obiecte

function lista()

const obiect = {
  a: 1,
  b: 2
}, proprietate ="b";
delete obiect[proprietate];

console.log(obiect)

//.ex3 obiecte

const lista=[ 
  { titlu: "Carte 1",
   autor: "Autor 1",
   esteCitita: 1 },
  { titlu: "Carte 2",
   autor: "Autor 2",
   esteCitita: 0 },
]
for (let i=0; i<=dada.length; i++)
  if(lista[i].esteCitita)
    console.log(
      `ai citit deja ${dada[i].titlu} de ${dada[i].autor}`
    )
  else
    console.log(
      `trebuie sa citesti ${dada[i].titlu} de ${dada[i].autor}`
    )  