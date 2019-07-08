console.log("Script loading");
////Global Variable
// var outputPic;
var counter = 0;
var stageCounter = 0;
var gameStage = 0;
var h2;
var clearImage = "images/yougotit.png";
var wrongImage = "images/redwrong.png";
var winImage = "images/youwin.png";
var loseImage = "images/gameover.png";
var buildingArray = [
{
    name: "Pyramid",
    image: "images/pyramid.jpg",
    first: "images/pyramid2.jpg",
    second:"images/pyramid3.jpg",
    third:"images/pyramid4.jpg"
},
{
    name: "Taj Mahal",
    image: "images/tajmahal2.jpg",
    first: "images/tajmahal.jpeg",
    second: "images/tajmahal3.jpg",
    third: "images/tajmahal4.jpg"
},
{
    name: "Petra",
    image: "images/petra.jpg",
    first: "images/petra2.jpg",
    second: "images/petra3.jpg",
    third: "images/petra4.jpg"
}
];



////create h1 for the title of the game
var title = function(){
    var h1 = document.createElement("h1");
    h1.innerText = "Guess The Building";
    h2 = document.createElement("h2");
    h2.innerText = "Stage " + (gameStage+1);
    document.body.prepend(h2);
    document.body.prepend(h1);

}

////create output for user to see the images(display) and hint(display2)

var createWinOutputPic = function(winPic){
    console.log("Display win pyramid");
    outputWinPic = document.createElement("img");
    outputWinPic.setAttribute("id","outputpic");
    // outputWinPic.style.border = "2px solid black";
    outputWinPic.style.height = "300px";
    outputWinPic.style.width = "600px";
    outputWinPic.style.margin = "20px";
    outputWinPic.setAttribute("src", winPic);
    document.querySelector(".container").prepend(outputWinPic);

}

var createOutputHint1 = function (image) {
    outputHint1Pic = document.createElement("img");
    outputHint1Pic.setAttribute("id","hint1");
    outputHint1Pic.style.border = "2px solid black";
    outputHint1Pic.style.height = "150px";
    outputHint1Pic.style.width = "300px";
    outputHint1Pic.setAttribute("src", image);
    document.querySelector(".containerleft").appendChild(outputHint1Pic);
}

var createOutputHint2 = function (image, position) {
    outputHint2Pic = document.createElement("img");
    outputHint2Pic.setAttribute("id","hint2");
    outputHint2Pic.style.border = "2px solid black";
    outputHint2Pic.style.height = "150px";
    outputHint2Pic.style.width = "300px";
    outputHint2Pic.setAttribute("src", image);
    document.querySelector(".containercenter").appendChild(outputHint2Pic);
}

var createOutputHint3 = function (image) {
    outputHint3Pic = document.createElement("img");
    outputHint3Pic.setAttribute("id","hint3");
    outputHint3Pic.style.border = "2px solid black";
    outputHint3Pic.style.height = "150px";
    outputHint3Pic.style.width = "300px";
    outputHint3Pic.setAttribute("src", image);
    document.querySelector(".containerright").appendChild(outputHint3Pic);
}


var createOutput = function(){
    console.log("createOutput");
    var output = document.createElement("p");
    output.setAttribute("id","output");
    output.style.border = "2px solid black";
    output.style.height = "100px";
    output.style.width = "300px";
    output.innerText = "output2";
    document.querySelector(".containerbtm").appendChild(output)
}
////Create input(for user to input their answer);
var createInput = function(){
    console.log("created inputBox");
    var inputBox = document.createElement("input");
    inputBox.setAttribute("id","input");
    // inputBox.setAttribute("autofocus")
    inputBox.style.border = "1px solid black";
    inputBox.style.borderRadius = "50%";
    inputBox.style.outline = "none";
    inputBox.style.height = "80px";
    inputBox.style.width = "300px";
    inputBox.style.margin = "20px";
    inputBox.style.fontSize = "30px";
    inputBox.style.textAlign = "center";
    inputBox.textContent = "Your Answer";
    document.querySelector(".containerbtm").appendChild(inputBox)
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

// var stageSwitch = function(){
//     createWinOutputPic(buildingArray[gameStage].image);
//     if(stageCounter === 0){
//         var hint2 = document.getElementById("hint2");
//         hint2.style.visibility = "hidden";
//         var clear = document.getElementById("input");
//         clear.style.visibility = "hidden";
//     }
//     else if(stageCounter === 1){
//         console.log("Stage counter " + stageCounter);
//         var hint2 = document.getElementById("hint2");
//         hint2.style.visibility = "hidden";
//         var clear = document.getElementById("input");
//         clear.style.visibility = "hidden";
//         var hint1 = document.getElementById("hint1");
//         hint1.style.visibility = "hidden";
        // stageCounter ++;
    // }
//     else if(stageCounter === 2){
//         console.log("Stage counter " + stageCounter);
//         var hint2 = document.getElementById("hint2");
//         hint2.style.visibility = "hidden";
//         var clear = document.getElementById("input");
//         clear.style.visibility = "hidden";
//         var hint1 = document.getElementById("hint1");
//         hint1.style.visibility = "hidden";
//         var hint3 = document.getElementById("hint3");
//         hint3.style.visibility = "hidden";

//     }
// }

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
    document.querySelector(".containerbtm").removeChild(clear);
}

// var switchStage = function(){
//     createWinOutputPic(buildingArray[gameStage].image);

// }


////function for player to answer
var answer = function(userInput){
    console.log("Counter: " + counter);
    // cleared false
    var clear = false;
    if (userInput === buildingArray[gameStage].name){
        console.log("You got it correct");
        // stageSwitch();
        createWinOutputPic(buildingArray[gameStage].image);
        // document.querySelector(".row").style.visibility = "hidden";
        // document.querySelector('#input').removeEventListener("keydown",firstEnter);
        // stageCounter ++;
        console.log("Stage counter " + stageCounter);
        gameStage ++;
        console.log("load next stage no.: " + gameStage);
        setTimeout(clearOutput, 1000);
        setTimeout(clearStage, 2000);
        setTimeout(clearOutput, 3000);
        setTimeout(startGame, 3000);
        setTimeout(function() {
                counter = 0;
            },3000);
        // setTimeout(function() {
        //         stageCounter = 0;
        //     },4000);
            // console.log("Win pic reset");
            console.log("Please start the next game!!!!!!!!!");
    }
    else if(counter < 2){
        if(counter === 0){
            setTimeout(wrongStage,1000);
            setTimeout(clearWrong,2000);
            //settimeout
            setTimeout(function() {
                createOutputHint1(buildingArray[gameStage].second);
            },3000);
        }
        else if(counter === 1){
            setTimeout(wrongStage, 1000);
            setTimeout(clearWrong,2000);
            //settimeout
            setTimeout(function() {
                createOutputHint3(buildingArray[gameStage].third);
            },3000);
        }
    }
    else{
        setTimeout(loseGame,1000);
        setTimeout(function(){
            createWinOutputPic(loseImage);
        },2000);
        // createWinOutputPic(loseImage);
        console.log("You lose!")
        document.querySelector('#input').removeEventListener("keydown", enter);
    };
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
        document.querySelector(".containerbtm").removeChild(clear);
    }
    else if(counter === 1){
        answerPic = document.getElementById("outputpic");
        document.querySelector(".container").removeChild(answerPic);
        hint2 = document.getElementById("hint2");
        document.querySelector(".containercenter").removeChild(hint2);
        hint1 = document.getElementById("hint1");
        document.querySelector(".containerleft").removeChild(hint1);
        clear = document.getElementById("input");
        document.querySelector(".containerbtm").removeChild(clear);
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
        document.querySelector(".containerbtm").removeChild(clear);
        }
}

var startGame = function(){
    if (gameStage < buildingArray.length){
        createOutputHint2(buildingArray[gameStage].first);
        console.log("Showed the first hint")
        createInput();
        // createOutput();
        document.querySelector('#input').addEventListener("keydown",enter);
        // document.querySelector('#input').removeEventListener("keydown",enterFunction);
        h2.innerText = "Stage " + (gameStage+1);
        // document.querySelector(".row").style.visibility = "visible";
        console.log("stage no.: " + gameStage);
    }
    else{
        setTimeout(clearOutput, 1000);
        setTimeout(winGame,1000);
        console.log("Youve won the game");
        document.querySelector('#input').removeEventListener("keydown", enter);
    }
}

title();
startGame();