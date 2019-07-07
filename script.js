console.log("Script loading");
////Global Variable
// var outputPic;
var counter = 0;
var gameStage = 0;

////my options variables!!!
var numberStage = ["1","2"];

// if gameStage/ level is 0, pic to guess is buildingArray[gameStage].name => pyramid
// if gameStage/ level is 1, pic to guess is buildingArray[gameStage].name => taj mahal

var buildingArray = [
{
    name: "Pyramid",
    image: "images/pyramid.jpg",
    first: "images/pyramid2.jpg",
    second:"images/pyramid3.jpg",
    third:"images/pyramid4.jpg",
    location:"Egypt",
    continent:"Africa",
    clear: " "
},
{
    name: "Taj Mahal",
    image: "images/tajmahal.jpeg",
    first: "images/tajmahal2.jpg",
    second: "images/tajmahal3.jpg",
    third: "images/tajmahal4.jpg",
    location: "India",
    continent: "Asia",
    clear: " "
}
];
// var img = document.createElement("img");
// img.src = buildingArray[0].image;

// document.body.appendChild(img);

////First output function(to display images for user to guess || when user succeed guessing, display the full pic)

// var display = function(data){
//         var output = document.querySelector(#output);
//         output.innerText = data;
//     }

////Second output function(to display hints when user enter a wrong answer || congratulate user when enter a correct answer)

// var display2 = function( data ){
//         var output2 = document.querySelector(#output2);
//         output2.innerText = data;
//     }


////create h1 for the title of the game
var title = function(){
    var h1 = document.createElement("h1");
    h1.innerText = "Guess The Building";
    var h2 = document.createElement("h2");
    h2.innerText = "Stage " + (gameStage+1);
    document.body.prepend(h2);
    document.body.prepend(h1);

}

////create h2 for the stage
// var h2;
// var stage = function(){
//     h2 = document.createElement("h2");


// }


////create output for user to see the images(display) and hint(display2)

var createWinOutputPic = function(winPic){
    console.log("Display win pyramid");
    outputWinPic = document.createElement("img");
    outputWinPic.setAttribute("id","outputpic");
    outputWinPic.style.border = "2px solid black"
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
    outputHint1Pic.style.height = "100px";
    outputHint1Pic.style.width = "200px";
    outputHint1Pic.setAttribute("src", image);
    document.querySelector(".containerleft").appendChild(outputHint1Pic);
}

var createOutputHint2 = function (image) {
    outputHint2Pic = document.createElement("img");
    outputHint2Pic.setAttribute("id","hint2");
    outputHint2Pic.style.border = "2px solid black";
    outputHint2Pic.style.height = "100px";
    outputHint2Pic.style.width = "200px";
    outputHint2Pic.setAttribute("src", image);
    document.querySelector(".containercenter").appendChild(outputHint2Pic);
}

var createOutputHint3 = function (image) {
    outputHint3Pic = document.createElement("img");
    outputHint3Pic.setAttribute("id","hint3");
    outputHint3Pic.style.border = "2px solid black";
    outputHint3Pic.style.height = "100px";
    outputHint3Pic.style.width = "200px";
    outputHint3Pic.setAttribute("src", image);
    document.querySelector(".containerright").appendChild(outputHint3Pic)
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
    inputBox.style.border = "2px solid black";
    inputBox.style.height = "100px";
    inputBox.style.width = "600px";
    inputBox.style.margin = "10px";
    inputBox.textContent = "Your Answer";
    document.querySelector(".containerbtm").appendChild(inputBox)
}

////player answers for pyramid
var firstEnter = function(event){
    //console.log(event)
    // if(gameStage === 0){
        if(event.keyCode === 13){
            var userInput = event.target.value;
            console.log("Please Enter Function");
            firstAnswer(userInput);
        }
    // }
    // else if(gameStage === 1){
    //     if(event.keyCode === 13){
    //         var userInput = event.target.value;
    //         console.log("Please Enter Function");
    //         secondAnswer(userInput);
    //     }
    // }

}

////player  answer for taj mahal

var secondEnter = function(event){
    //console.log(event)
    // if(gameStage === 0){
        if(event.keyCode === 13){
            var userInput = event.target.value;
            console.log("Please Enter Function");
            secondAnswer(userInput);
        }
    // }
    // else if(gameStage === 1){
    //     if(event.keyCode === 13){
    //         var userInput = event.target.value;
    //         console.log("Please Enter Function");
    //         secondAnswer(userInput);
    //     }
    // }

}

////function for player to answer
var firstAnswer = function(userInput){
    console.log("Counter: " + counter);
    // cleared false
    var clear = false;
    if (userInput === buildingArray[gameStage].name){
        console.log("You got it correct");
        createWinOutputPic(buildingArray[gameStage].image);
        // document.querySelector('#input').removeEventListener("keydown",firstEnter);
        gameStage ++;
        console.log("load next stage no.: " + gameStage);
        setTimeout(clearOutput, 1000);
        setTimeout(startGame, 2000);

            // document.getElementById("hint2").src = buildingArray[gameStage].image;
            console.log("Win pic reset");
            console.log("Please start the next game!!!!!!!!!");

    }
    else if(counter < 2){
        if(counter === 0){
            console.log("You got it wrong!");
            createOutputHint1(buildingArray[gameStage].first);
            counter += 1;
        }
        else if(counter === 1){
            counter += 1;
            console.log("You got it wrong!");
            createOutputHint3(buildingArray[gameStage].second);
        }
    }
    else{
        console.log("You lose!")
        document.querySelector('#input').removeEventListener("keydown",firstEnter);
    };
        // if(clear === true){
        //     startGame();
        //     break;
        // };
    // if cleared true, startgame()
}

////function for taj mahal
// var secondAnswer = function(userInput){
//     console.log("Counter: " + counter);
//     for(let i = 0; i < buildingArray.length; i++){
//         if (userInput === buildingArray[i].name){
//             console.log("You got it correct");
//             createWinOutputPic(buildingArray[i].image);
//             document.querySelector('#input').removeEventListener("keydown",secondEnter);
//         }
//         else if(counter < 2){
//             if(counter === 0){
//                 console.log("You got it wrong!");
//                 createOutputHint1(buildingArray[i].first);
//                 counter += 1;
//                 break;
//             }
//             else if(counter === 1){
//                 counter += 1;
//                 console.log("You got it wrong!");
//                 createOutputHint3(buildingArray[i].second);
//                 break;
//             }
//         }
//         else{
//             console.log("You lose!")
//             document.querySelector('#input').removeEventListener("keydown",secondEnter);
//         }
//     }
// }

////clear output when guess the correct word
var clearOutput = function(){
    var answerPic;
    var hint2;
    var hint1;
    var hint3;
    console.log("clearing!");
    // no matter what, you'll have to remove outputWinPic
    if (counter === 0){
        answerPic = document.getElementById("outputpic");
        document.querySelector(".container").removeChild(answerPic);
        hint2 = document.getElementById("hint2");
        document.querySelector(".containercenter").removeChild(hint2);
    }
    else if(counter === 1){
        answerPic = document.getElementById("outputpic");
        document.querySelector(".container").removeChild(answerPic);
        hint2 = document.getElementById("hint2");
        document.querySelector(".containercenter").removeChild(hint2);
        hint1 = document.getElementById("hint1");
        document.querySelector(".containerleft").removeChild(hint1);
    }
    else if(counter === 2){
        answerPic = document.getElementById("outputpic");
        document.querySelector(".container").removeChild(answerPic);
        hint2 = document.getElementById("hint2");
        document.querySelector(".containercenter").removeChild(hint2);
        hint1 = document.getElementById("hint1");
        document.querySelector(".containerleft").removeChild(hint1);
        hint3 = document.getElementById("hint3");
        document.querySelector(".containerright").removeChild(hint3)
    }



    // if document.querySelector("outputHint1Pic") is not null, means it's present, hence remove it


    // if outputHint3Pic is not null, means it's present, hence remove it


    // if(counter === 0){
    //     document.querySelector(".container").remove(outputWinPic);
    //     console.log("Hint1 pic reset");
    // }
    // else if (counter === 1){
    //     document.querySelector(".container").remove(outputWinPic);
    //     console.log("Hint1 pic reset");
    //     document.querySelector(".containerleft").removeChild(outputHint1Pic);
    //     console.log("Hint3 pic reset");
    // }
    // else if(counter === 2){
    //     document.querySelector(".container").remove(outputWinPic);
    //     console.log("win pic reset");
    //     document.querySelector(".containerleft").removeChild(outputHint1Pic);
    //     console.log("Hint3 pic reset");
    //     document.querySelector(".containerright").removeChild(outputHint3Pic)
    //     console.log("hint1 pic reset");
    // }
}

var startGame = function(){
    if (gameStage === 0){
        createOutputHint2(buildingArray[gameStage].image);
        console.log("Showed the first hint")
        // createOutput();
        document.querySelector('#input').addEventListener("keydown",firstEnter);
        // document.querySelector('#input').removeEventListener("keydown",enterFunction);
        console.log("stage no.: " + gameStage);
    }
    else if(gameStage === 1){
        createOutputHint2(buildingArray[gameStage].image);
        // createOutput();
        document.querySelector('#input').addEventListener("keydown",firstEnter);
        // document.querySelector('#input').removeEventListener("keydown",enterFunction);
        // gameStage++;
        console.log("stage no.: " + gameStage);
    }
}

// title();
// createOutputHint2(buildingArray[0].image);
// createInput();
// // createOutput();
// document.querySelector('#input').addEventListener("keydown",enterFunction);
// // document.querySelector('#input').removeEventListener("keydown",enterFunction);
// stage();
title();
createInput();
startGame();