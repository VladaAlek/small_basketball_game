// algorithm 

// initialize the score
let score1 = 0;
let score2 = 0;

// ad event listeners to Host and Guest buttons
// attach the functions to the event listeners
document.getElementById('playBtnHost').addEventListener('click', playHost);
document.getElementById('playBtnGuest').addEventListener('click', playGuest);
document.getElementById('resetBtn').addEventListener('click', resetGame);

//calls for playBtnHost function with nested updateScore function
function playHost() {
    updateScore(1);
}
//calls for playGuest function with nested updateScore function
function playGuest() {
    updateScore(2);
}

// Hide previous images - it doesn´t work when I call it
function hideAllImages() {
    let divs = document.getElementsByClassName('imageDisplay');

    for (let i = 0; i < divs.length; i++) {
        let images = divs[i].getElementsByTagName('img');
        for (let j = 0; j < images.length; j++) {
            images[j].style.display = 'none';
        }
    }
}

// check the code in updateScore function
function updateScore(player) {

    hideAllImages();

    // random score between 0 and 3
    let score = Math.floor(Math.random() * 4);

    // Show the respective image based on the score
    if (score === 0) {
        document.getElementById('miss').style.display = 'block';
    } else if (score === 1) {
        document.getElementById('onePoint').style.display = 'block';
    } else if (score === 2) {
        document.getElementById('twoPoints').style.display = 'block';
    } else if (score === 3) {
        document.getElementById('threePoints').style.display = 'block';
    }

    //increase the original score for the value of the outcome of the if statement from above
    if (player === 1) {
        score1 += score;
        // update the score1
        document.getElementById('score1').innerHTML = score1;
    } else {
        score2 += score;
        // update the score1
        document.getElementById('score2').innerHTML = score2;
    }
}
// check CI running project to see how to add comments in functions

// task - develop this function tomorrow so that the immages are not visible
// on the page
function hideAllImages() {

}


// ad event listeners to Reser button

// find the way to declere the winner

// create function to update score

// create function to reset game

// find the way to hide previous images


// Show the image based on the score *

// Check for winner


