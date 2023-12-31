// initialize the score
let score1 = 0;
let score2 = 0;

// add eventListner to Start Game button
document.getElementById('start-game-btn').addEventListener('click', hideInstruction);

// ad event listeners to Host, Guest and Reset buttons
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
 * make score photos visible
*/
function updateScore(player) {

    // calling for hideAllImages() function at the beggining of new game
    hideAllImages();

    // random score between 0 and 3
    let score = Math.floor(Math.random() * 4);

    // Show the respective image based on the score
    if (score === 0) {
        document.getElementById('miss').style.display = 'block';
        document.getElementById('audioMiss').play();
    } else if (score === 1) {
        document.getElementById('onePoint').style.display = 'block';
        document.getElementById('audioOnePoint').play();
    } else if (score === 2) {
        document.getElementById('twoPoints').style.display = 'block';
        document.getElementById('audioTwoPoints').play();
    } else if (score === 3) {
        document.getElementById('threePoints').style.display = 'block';
        document.getElementById('audioThreePoints').play();
    }

    //increase the original score for the value of the outcome of the "If statement" from above
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
        document.getElementById('endGame').play();
    } else if (score2 >= 21) {
        hideAllImages();
        document.getElementById('endGame').play();
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
 * calls hideAllImages function 
 * reset scores for both players to zero
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
    // calling stopAllAudio function
    stopAllAudio();
}

/**
 * removes the Instruction layer from the screen
 */
function hideInstruction() {
    document.getElementById('instruction-container').style.display = 'none';
}
/**
 * function to stop the sound when plyers press the play button again
*/
function stopAllAudio() {
    // retrive audio files
    let audios = document.getElementsByTagName('audio');
    // for loop 
    for (let i = 0; i < audios.length; i++) {
        audios[i].pause();
        audios[i].currentTime = 0;
    }
}