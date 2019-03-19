// ---------------------------
// Exercise 1
// ---------------------------
let numChildren = 3;
let isCareful = true;
if ( !isCareful )
    numChildren++;
console.log(numChildren);

// ---------------------------
// Exercise 2
// ---------------------------
let silverwareCount = 31;
let isOdd = (silverwareCount % 2) == 0 ? true : false;
console.log("isOdd :" + isOdd);
// ---------------------------
// Exercise 3
// ---------------------------

let performance = "stellar";
let salary = 10000;
const goodBonus = 1000;
const stellarBonus = 3000;

if ( performance == "stellar " ) 
    salary += stellarBonus;
else
    salary += goodBonus;

// ---------------------------
// Exercise 4
// ---------------------------

const isVIP = false;
let cash = 500;

if (isVIP || (cash > 300 ) ) 
    console.log("go in.. ")
else
    console.log("bribe me, then enter... ")
// ---------------------------
// Exercise 5
// ---------------------------

const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if(d){
  b = a
}

d = a + (b * c)
d++
b += 2

console.log( a + "," + b + "," + c  + "," + d  )
// ---------------------------
// Exercise 6
// ---------------------------

const gender = null
let profession = "business"

if ( gender == "male" ) 
    profession += "man"
else if ( profession == "female" )
    profession += "woman"
else
    profession += "person"

console.log("profession : " + profession)
// ---------------------------
// Exercise 7
// ---------------------------

