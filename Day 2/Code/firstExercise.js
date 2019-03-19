// -----------------------
// Exercise 1
// -----------------------
const maxCapacity = 14;
let surfTime = true;
let bestStudent;
//const purpseInLife;

console.log(maxCapacity);
console.log(surfTime);
console.log(bestStudent);
//console.log(purpseInLife);



// -----------------------
// Exercise 2
// -----------------------
let string = "my variable";
string += " is the best thing ever";

console.log(string);


// -----------------------
// Exercise 3
// -----------------------

let password = "1234";
let confirmPassword ="1234";

if ( password == confirmPassword )
    console.log("equal..");
else 
    console.log("not equal");

let temp = (password == confirmPassword) ? true : false;
console.log(temp);

// -----------------------
// Exercise 4
// -----------------------

/*
423 x 12
802 ÷ 2
The sum of 5 and 6, multiplied by 3 (use parentheses)
*/

let result1 = 423 * 12;
let result2 = 802 / 2;
let result3 = ( 5 + 6 ) * 3;

// -----------------------
// Exercise 5 
// -----------------------

if ( 5>2 && false) 
    console.log("1");
if (!("knife" === "sword"))
    console.log("2");
if ( (1<2) || (-1 > -1 ) || !false)
    console.log("3");
if ( "" )
    console.log("4");
if (!!true)
    console.log("5");
if ( ("5th Avenue" != "5th Avenue") )
    console.log("6");
if ( (52) === ("52") ) 
    console.log("7?");
if ( undefined || null )
    console.log("8");

// -----------------------
// Exercise 6
// -----------------------
let a = 3
a = 4
let c = 0
let b = a
b = 2
a = b
b = c
c = a
a = b

console.log("a : " + a  + ",b : " + b + ",c : " + c);