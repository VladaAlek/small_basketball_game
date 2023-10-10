// algorithm 

// initialize the score
let score1 = 0;
let score2 = 0;

// ad event listeners to Host and Guest buttons
// attach the functions to the event listeners
document.getElementById('playBtnHost').addEventListener('click', playHost);
document.getElementById('playBtnGuest').addEventListener('click', playGuest);
document.getElementById('resetBtn').addEventListener('click', resetGame);

function playHost() {
    updateScore(1);
}

function playGuest() {
    updateScore(2);
}
// check the code in updateScore function
function updateScore(player) {
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

    //increase the score
    if (player === 1) {
        score1 += score;
        // update the score
        document.getElementById('score1').innerHTML = score1;
    } else {
        score2 += score;
        //update the score
        document.getElementById('score2').innerHTML = score2;
    }
}
// check CI running project to see how to add comments in functions

// task - develop this function tomorrow so that the immages are not visible
// on the page
function hideAllImages() {

}

// functions for the event listeners for players buttons

// ad event listeners to Reser button

// find the way to declere the winner

// create function to update score

// create function to reset game

// find the way to hide previous images


// Show the image based on the score *

// Check for winner


