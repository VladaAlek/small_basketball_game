// initialize the score
let score1 = 0;
let score2 = 0;

// add eventListner to Start Game button
document.getElementById('start-game-btn').addEventListener('click', hideInstruction);

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

/**
 * creates the random score and increase its values
 * make crore photos visible
*/ 
function updateScore(player) {

    // calling for hideAllImages() function at the beggining of new game
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

    // Check for winner by calling the appropriate function
    checkForWinner();
}

/**
 * iterates through imageDisplay to make them invisible on the screen
*/ 
function hideAllImages() {
    let divs = document.getElementsByClassName('imageDisplay');

    for (let i = 0; i < divs.length; i++) {
        let images = divs[i].getElementsByTagName('img');
        for (let j = 0; j < images.length; j++) {
            images[j].style.display = 'none';
        }
    }
}

/**
 * Determins the winner of the game and delivers the report 
 */
function checkForWinner() {

    if (score1 >= 21) {
        hideAllImages();
        document.getElementById('host-winer-image').style.display = 'block';
        disablePlayButtons();
    } else if (score2 >= 21) {
        hideAllImages();
        document.getElementById('guest-winer-image').style.display = 'block';
        disablePlayButtons();
    }
}

/**
 * prevent players to play anny more if the score is more than 21 points
 */

function disablePlayButtons() {
    document.getElementById('playBtnHost').disabled = true;
    document.getElementById('playBtnGuest').disabled = true;
}
/**
 * reset scores for both players to zero
 * calls hideAllImages function / removes all photos from the screen
 */
function resetGame() {
    hideAllImages();
    // set score to 0
    score1 = 0;
    score2 = 0;
    document.getElementById('score1').innerHTML = score1;
    document.getElementById('score2').innerHTML = score2;
    // activate the players buttons 
    document.getElementById('playBtnHost').disabled = false;
    document.getElementById('playBtnGuest').disabled = false;
}

/**
 * removes the Instruction layer from the screen
 */
function hideInstruction() {
    document.getElementById('instruction-container').style.display = 'none';
}



