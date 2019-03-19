/*

    Questions: 

    1. 
    remove the line:
    'document.getElementById('header_text').style.display = "none" ' 
    in gameOver

    Explaining: whenver i set the interval to 1000 seconds, and when i remove it by clearInterval(_intervalID)
    it still runs the last function... how to prevent it ? 


    2. difference between innerHTML and innerText ? 

    3. generate random place without getting one on another...
*/



// -----------------------------
// TODO
// -----------------------------
// 1. numOfFrogsToGenerate according to level + 1
// 2. it generates only one frog per time.. ( after level update ) 

// -----------------------------     
// initializing vars


let currentLevel;
let numOfFrogs;
let numOfFrogsClicked;
let arrFrogs;
let numOfFrogsToGenerate;
let frogsLeft;
let seconds;
let intervalID;
let divContainer;       // easier access to divContainer that contains frogs
let frog_ID_Counter = 1;   // generated id that will go from 1 ++ everytime new frog is created
const HEIGHT_LIMIT = document.getElementById('container').clientHeight;
const WIDTH_LIMIT = document.getElementById('container').clientWidth;
window.onload = init();

function init() {
    // -----------------------------
    // initing vars...
    currentLevel = 1;
    numOfFrogs = 10;
    numOfFrogsClicked = 0;
    arrFrogs = [];
    frogsLeft = 1;
    seconds = 5;
    numOfFrogsToGenerate = 1;
    divContainer = document.getElementById('container')

    // -----------------------------
    // updating first load ( or restart )
    document.getElementById('mainButton').innerText = "START GAME, CLICK ON A FROG!";
    document.getElementById('header_text').innerText = "Timer will appear here... ";
    document.getElementById('header_text').style.display = "block"

    nextLeveL();
    updateFrogsLeft();
    // -----------------------------
    // adding listeners
    document.getElementById('mainButton').addEventListener('click', gameStart);
    document.getElementById('level').addEventListener('click', updateLevelNumber);
    // document.getElementById('frog1').addEventListener('click', frogClicked);


}

function updateTime() {
    clearInterval(intervalID);
    intervalID = setInterval(() => {
        if (seconds == 0) {

            nextLeveL()

            // uncomment gameOver and put if (seconds == 0  && frogsLeft > 0)
            // gameOver()
        }
        seconds--
        document.getElementById('header_text').innerText = seconds + " seconds left..."
    }, 1000)
}
function generateArrayOfFrogs() {
    arrFrogs.push(generateSingleFrog());
}

function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
function generateSize() {
    let num = Math.random() * 5 + 1;
    return num;
}
function generateSingleFrog() {
    let generatedColor = randomRGB();
    let generatedSize = generateSize()
    let generatedFrog = document.createElement("i")

    generatedID = "id" + frog_ID_Counter;
    generatedFrog.id = generatedID
    generatedFrog.className = "fas fa-frog"
    generatedFrog.style.fontSize = generatedSize + "em"
    generatedFrog.style.color = generatedColor
    generatedFrog.style.position = "absolute";
    generatedFrog.style.left = Math.floor(Math.random() * (WIDTH_LIMIT)) + 1 + "px";
    generatedFrog.style.top = Math.floor(Math.random() * (HEIGHT_LIMIT)) + 1 + "px";
    divContainer.appendChild(generatedFrog)
    document.getElementById(generatedID).addEventListener('click', frogClicked);

    //console.log(generatedFrog)
    frog_ID_Counter++

    return generatedFrog;
}
function gameOver() {
    console.log("game over...")
    clearInterval(intervalID);
    document.getElementById('header_text').style.display = "none"
}
function checkWin() {
    console.log("Check Win ? ")
    console.log(arrFrogs)
}

function updateFrogsLeft() {
    if (frogsLeft == 1) {
        frogsLeft--
        nextLeveL()
    }
    else
        frogsLeft--
    document.getElementById('num_of_frogs').innerText = frogsLeft + " frogs left..."
}

function frogClicked() {
    let frogID = this.id
    console.log("clicked frogID: " + frogID)
    //document.getElementById(frogID).style.display = "none"
    document.getElementById(frogID).innerText = "i'm none"
    removeFrog(frogID)
    frogsLeft - 1;
    checkWin()
    updateFrogsLeft()
}

function removeFrog(argFrogID) {
    console.log("frog with id: " + argFrogID + " has been removed.. ");
    removeElement(argFrogID)
}

function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

function gameStart() {
    init()
    updateTime()
    document.getElementById('mainButton').innerText = "Catch the frogs !";
}

function nextLeveL() {
    generateArrayOfFrogs()
    document.getElementById('level').innerText = "level " + currentLevel
    frogsLeft = frogsLeft + currentLevel
    currentLevel++
    updateTimer()
}

function updateTimer() {
    //clearInterval(intervalID);
    seconds = 5 + currentLevel;
}

function updateLevelNumber() {
    console.log("updating level number... ")
}

function updateSecondsLeft() {
    console.log("updating seconds left... ")
}