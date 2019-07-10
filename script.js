console.log("Script loading");
////Global Variable
// var outputPic;
var userLousy = false;
var countdownTimer;
var counter = 0;
var countdown = 11;
var gameStage = 0;
var h2;
var output;
var clearImage = "images/yougotit.png";
var wrongImage = "images/redwrong.png";
var winImage = "images/youwin.png";
var loseImage = "images/gameover.png";
var buildingArray = [
{
    name: "pyramid",
    image: "images/pyramid.jpg",
    first: "images/pyramid2.png",
    second:"images/pyramid3.png",
    third:"images/pyramid4.png"
},
{
    name: "towerbridge",
    image: "images/towerbridge.jpeg",
    first: "images/towerbridge2.png",
    second: "images/towerbridge3.png",
    third: "images/towerbridge4.png"
},
{
    name: "parthenon",
    image: "images/parthenon.jpg",
    first: "images/parthenon2.png",
    second: "images/parthenon3.png",
    third: "images/parthenon4.png"
},
{
    name: "tajmahal",
    image: "images/tajmahal.jpg",
    first: "images/tajmahal2.png",
    second: "images/tajmahal3.png",
    third: "images/tajmahal4.png"
},
{
    name: "petra",
    image: "images/petra.jpg",
    first: "images/petra2.png",
    second: "images/petra3.png",
    third: "images/petra4.png"
}
];



////create h1 for the title of the game
var title = function(){
    var h1 = document.createElement("h1");
    h1.style.fontFamily = "cursive";
    h1.style.fontWeight = "bold";
    h1.style.marginTop = "30px";
    h1.innerText = "Guess The Picture";
    h2 = document.createElement("h2");
    h2.innerText = "Stage " + (gameStage+1);
    h2.style.marginBottom = "20px"
    document.body.prepend(h2);
    document.body.prepend(h1);

}

////create output for user to see the images(display) and hint(display2)

var createWinOutputPic = function(winPic){
    console.log("Display win pyramid");
    outputWinPic = document.createElement("img");
    outputWinPic.setAttribute("id","outputpic");
    // outputWinPic.style.border = "2px solid black";
    outputWinPic.style.height = "280px";
    outputWinPic.style.width = "540px";
    outputWinPic.style.margin = "20px";
    outputWinPic.setAttribute("src", winPic);
    document.querySelector(".container").prepend(outputWinPic);

}

var createOutputHint1 = function (image) {
    outputHint1Pic = document.createElement("img");
    outputHint1Pic.setAttribute("id","hint1");
    outputHint1Pic.classList.add("hint");
    outputHint1Pic.style.border = "2px solid black";
    outputHint1Pic.style.height = "150px";
    outputHint1Pic.style.width = "300px";
    outputHint1Pic.setAttribute("src", image);
    document.querySelector(".containerleft").appendChild(outputHint1Pic);
}

var createOutputHint2 = function (image) {
    outputHint2Pic = document.createElement("img");
    outputHint2Pic.setAttribute("id","hint2");
    outputHint2Pic.classList.add("hint");
    outputHint2Pic.style.border = "2px solid black";
    outputHint2Pic.style.height = "150px";
    outputHint2Pic.style.width = "300px";
    outputHint2Pic.setAttribute("src", image);
    document.querySelector(".containercenter").appendChild(outputHint2Pic);
}

var createOutputHint3 = function (image) {
    outputHint3Pic = document.createElement("img");
    outputHint3Pic.setAttribute("id","hint3");
    outputHint3Pic.classList.add("hint");
    outputHint3Pic.style.border = "2px solid black";
    outputHint3Pic.style.height = "150px";
    outputHint3Pic.style.width = "300px";
    outputHint3Pic.setAttribute("src", image);
    document.querySelector(".containerright").appendChild(outputHint3Pic);
}

////for creating countdown timer

var createOutput = function(){
    console.log("createOutput");
    output = document.createElement("p");
    output.setAttribute("id","output");
    output.style.border = "1px solid black";
    output.style.borderRadius = "50%";
    output.style.outline = "none";
    output.style.height = "80px";
    output.style.width = "300px";
    output.style.margin = "20px";
    output.style.background =  "white";
    output.style.fontSize = "30px";
    output.style.textAlign = "center";
    output.style.padding = "14px";
    output.innerText = "Time left: "
    document.querySelector(".containerbright").appendChild(output)
}


////Create input(for user to input their answer);
var createInput = function(){
    console.log("created inputBox");
    var inputBox = document.createElement("input");
    inputBox.setAttribute("id","input");
    inputBox.setAttribute("placeholder","Your Answer");
    // inputBox.setAttribute("autofocus")
    inputBox.style.border = "1px solid black";
    inputBox.style.borderRadius = "50%";
    inputBox.style.outline = "none";
    inputBox.style.height = "80px";
    inputBox.style.width = "300px";
    inputBox.style.margin = "20px";
    inputBox.style.fontSize = "30px";
    inputBox.style.textAlign = "center";
    // document.querySelector(".containerbtm").appendChild(inputBox)
    document.querySelector(".containerbleft").appendChild(inputBox)
}

////player answers for pyramid
var enter = function(event){
    //console.log(event)
    // if(gameStage === 0){
        if(event.keyCode === 13){
            var userInput = event.target.value;
            console.log("Please Enter Function");
            answer(userInput);
        }
}

////when player wins the stage
var clearStage = function(){
    console.log("You cleared this stage");
    createWinOutputPic(clearImage);
}

////when player got the ans wrong
var wrongStage = function(){
    console.log("You got it wrong!");
    createWinOutputPic(wrongImage);
    if(counter === 0){
        console.log("We at wrongstage function in else if counter 0")
        var hint2 = document.getElementById("hint2");
        hint2.style.visibility = "hidden";
        var clear = document.getElementById("input");
        clear.style.visibility = "hidden";

    }
    else if(counter === 1){
        console.log("We at wrongstage function in else if counter 1")
        var hint1 = document.getElementById("hint1");
        hint1.style.visibility = "hidden";
        var hint2 = document.getElementById("hint2");
        hint2.style.visibility = "hidden";
        var clear = document.getElementById("input");
        clear.style.visibility = "hidden";
    }

}

////remove wrong pic
var clearWrong = function(){
    document.querySelector(".row").style.visibility = "visible";
    if(counter === 0){
        console.log("clearing at counter 0");
        var clearW = document.getElementById("outputpic");
        document.querySelector(".container").removeChild(clearW);
        var hint2 = document.getElementById("hint2");
        hint2.style.visibility = "visible";
        var clear = document.getElementById("input");
        clear.style.visibility = "visible";
        counter += 1;
    }
    else if(counter === 1){
        console.log("clearing at counter 1")
        var clearW = document.getElementById("outputpic");
        document.querySelector(".container").removeChild(clearW);
        var hint1 = document.getElementById("hint1");
        hint1.style.visibility = "visible";
        var hint2 = document.getElementById("hint2");
        hint2.style.visibility = "visible";
        var clear = document.getElementById("input");
        clear.style.visibility = "visible";
        counter += 1;
    }
}

var winGame = function(){
    console.log("You win this game");
    createWinOutputPic(winImage);
}

var loseGame = function(){
    console.log("You lose this game");
    hint2 = document.getElementById("hint2");
    document.querySelector(".containercenter").removeChild(hint2);
    hint1 = document.getElementById("hint1");
    document.querySelector(".containerleft").removeChild(hint1);
    hint3 = document.getElementById("hint3");
    document.querySelector(".containerright").removeChild(hint3);
    clear = document.getElementById("input");
    document.querySelector(".containerbleft").removeChild(clear);
}

var shakeAnimation = function(){
    if (countdown < 6){
        var outputShake = document.body
        outputShake.style.animation = "shake 0.1s";
        outputShake.style.animationIterationCount = "infinite";
    }
}

var timer = function(){
    if (countdown >0){
        countdown -= 1;
        var time = document.getElementById("output");
        time.innerText = "Time left: "+countdown;
        console.log("Time left: ", countdown);
        // shakeAnimation();
    }
    else if(countdown === 0){
        userLousy = true;
        console.log("countdown timer: ", countdownTimer)
        clearInterval(countdownTimer);
        document.querySelector('#input').removeEventListener("keydown", enter);
        setTimeout(loseGame,1000);
        setTimeout(function(){
            var clear = document.getElementById("input")
            document.querySelector(".containerbleft").removeChild(clear);
        },1000)
        setTimeout(function(){
            var output = document.getElementById("output")
            document.querySelector(".containerbright").removeChild(output);
        },1000)
        setTimeout(function(){
            createWinOutputPic(loseImage);
        },1000);
    }
    console.log("Lose?: ", userLousy);
}


////function for player to answer
var answer = function(userInput){
    console.log("Counter: " + counter);
    // cleared false
    var clear = false;
    if (userInput.toLowerCase() === buildingArray[gameStage].name){
        console.log("You got it correct");
        // stageSwitch();
        createWinOutputPic(buildingArray[gameStage].image);
        document.querySelector(".containerbright").removeChild(output);
        var hints = document.querySelectorAll(".hint");
        for(let i = 0; i < hints.length; i++){
            hints[i].style.visibility = "hidden";
        }
        gameStage ++;
        clearInterval(countdownTimer);
        console.log("load next stage no.: " + gameStage);
        setTimeout(clearOutput, 2000);
        setTimeout(clearStage, 3000);
        setTimeout(clearOutput, 4000);
        setTimeout(startGame, 4000);
        setTimeout(function() {
                counter = 0;
            },4000);
        setTimeout(function() {
                countdown = 11;
            },4000);
            console.log("Please start the next game!!!!!!!!!");
    }
    else if(counter < 2){
        if(counter === 0){
            setTimeout(wrongStage,500);
            setTimeout(clearWrong,1000);
            //settimeout
            setTimeout(function() {
                createOutputHint1(buildingArray[gameStage].second);
            },2000);
            setTimeout(function() {
                countdown += 5;
            },2000);
        }
        else if(counter === 1){
            setTimeout(wrongStage, 500);
            setTimeout(clearWrong,1000);
            //settimeout
            setTimeout(function() {
                createOutputHint3(buildingArray[gameStage].third);
            },2000);
            setTimeout(function() {
                countdown += 5;
            },2000);
        }
    }
    // when counter === 3, player lose
    else{
        clearInterval(countdownTimer);
        setTimeout(loseGame,1000);
        setTimeout(function(){
            document.querySelector(".containerbright").removeChild(output);
        },1000);
        setTimeout(function(){
            createWinOutputPic(loseImage);
        },2000);
        // createWinOutputPic(loseImage);
        console.log("You lose!")
        document.querySelector('#input').removeEventListener("keydown", enter);
    }
}



////clear output when guess the correct word
var clearOutput = function(){
    var answerPic;
    var hint2;
    var hint1;
    var hint3;
    var clear;
    console.log("clearing!");
    // no matter what, you'll have to remove outputWinPic
    if (counter === 0){
        answerPic = document.getElementById("outputpic");
        document.querySelector(".container").removeChild(answerPic);
        hint2 = document.getElementById("hint2");
        document.querySelector(".containercenter").removeChild(hint2);
        clear = document.getElementById("input");
        document.querySelector(".containerbleft").removeChild(clear);
    }
    else if(counter === 1){
        answerPic = document.getElementById("outputpic");
        document.querySelector(".container").removeChild(answerPic);
        hint2 = document.getElementById("hint2");
        document.querySelector(".containercenter").removeChild(hint2);
        hint1 = document.getElementById("hint1");
        document.querySelector(".containerleft").removeChild(hint1);
        clear = document.getElementById("input");
        document.querySelector(".containerbleft").removeChild(clear);
    }
    else if(counter === 2){
        answerPic = document.getElementById("outputpic");
        document.querySelector(".container").removeChild(answerPic);
        hint2 = document.getElementById("hint2");
        document.querySelector(".containercenter").removeChild(hint2);
        hint1 = document.getElementById("hint1");
        document.querySelector(".containerleft").removeChild(hint1);
        hint3 = document.getElementById("hint3");
        document.querySelector(".containerright").removeChild(hint3);
        clear = document.getElementById("input");
        document.querySelector(".containerbleft").removeChild(clear);
        }
}

var startGame = function(){
    if (gameStage < buildingArray.length){
        createOutputHint2(buildingArray[gameStage].first);
        console.log("Showed the first hint")
        createInput();
        createOutput();
        document.querySelector('#input').addEventListener("keydown",enter);
        h2.innerText = "Stage " + (gameStage+1);
        console.log("stage no.: " + gameStage);
        countdownTimer = setInterval(timer, 1000);
    }
    else{
        setTimeout(clearOutput, 1000);
        setTimeout(winGame,1000);
        console.log("Youve won the game");
        document.querySelector('#input').removeEventListener("keydown", enter);
    }
}
// document.addEventListener("DOMContentLoaded", function(event){
//     var btn = document.createElement("button");
//     btn.innerHTML = "Start game";
//     btn.addEventListener("click", startGame);
//     document.body.appendChild(btn);
title();
setTimeout(startGame,1000);