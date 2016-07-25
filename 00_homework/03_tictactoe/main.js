/* make playfield with 3x3 fields
 * 2 player
 * player 1 begins
 * signs X and O
 * if player clicks in field, 1 sign
 * if 3 signs in a row, game over.
 * playfield locked, "start new game"
 */

(function() {
    'use strict';
    
    var playField = document.querySelector('#playField');
    var playFieldWidth = 3;
    var playFieldHeight = 3;
    var PLAYER_X = 'X';
    var PLAYER_O = 'O';
    var currentPlayer = PLAYER_X;
    var gameOver = false;

    function init() {
        createPlayField(); 
    }

    function createPlayField() {
        playField.innerHTML = '';
        for (var i = 0; i < playFieldHeight; i++) {
            var row = document.createElement('div');
            row.className = 'row' + (i+1);
            playField.appendChild(row);
            for (var j = 0; j < playFieldWidth; j++) {
                var cell = document.createElement('div');
                cell.addEventListener('click', makeMove);
                row.appendChild(cell);
            }
        }
    }

    function makeMove(event) {
        if (gameOver) {
            return;
        }
        if (event.target.className) {
            return;
        }
        event.target.className = currentPlayer;
        if (!checkWin()) {
            switchPlayer();
        }

        // add class currentPlayer sign to event.target if current field is empty and switch player else do nothing
        // before switchingPlayer checkWin();
    }

    function switchPlayer() {
        // currentPlayer = currentPlayer === PLAYER_X ? PLAYER_Y : PLAYER_X;
        if (currentPlayer === PLAYER_X) {
            currentPlayer = PLAYER_O;
        } else {
            currentPlayer = PLAYER_X;
        }
    }

    function checkWin() {
        var field = [[x,o,x],
                     [x,o,o]
                     [x,null, null]];
        for (var row = 0; row < field.length; row++) {
            for (var col = 0; col < row.length; col++) {
                colValues
            }
            if (field[row][0] === field[row][1] && field[row][1] === field[row][2]) {
                return true;
            }



        }



        // if a player has 3 fields in a horizontal, vertical or diagonal row he is a winer, display an alert
        // if is win alert(currentPlayer + ' hat gewonnen!');
        // gameOver = true;

    }
    
    init();

})();
