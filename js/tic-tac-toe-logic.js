
let isPlayerXTurn = true;

const game = {
    turn: 0,
    player1: {
        name: "X",
        counter: 0,
    },
    player2: {
        name: "O",
        counter: 0,
    },
    board: [
        ["","",""],
        ["","",""],
        ["","",""],
    ],
    recordMove: function ( row, col ) { 
        // takes in row col argument from click and updates the game board
        if ( isPlayerXTurn ) {
            this.board[row][col] = 'x'
            isPlayerXTurn = false;
            this.turn += 1;
        } else {
            this.board[row][col] = 'o'
            isPlayerXTurn = true;
            this.turn += 1;
        }
    },
    checkWin: function ( string ) {
        // diagnoals
        if ( this.turn >= 3 ) {
            if ( this.board[0][0] === string && this.board[1][1] === string && this.board[2][2] === string ) {
                return true;
            }
            if ( this.board[0][2] === string && this.board[1][1] == string && this.board[2][0] === string ) {
                return true;
            }
    
            for ( let i = 0; i < this.board.length; i ++ ) {
                if ( this.board[i][0] === string && this.board[i][1] === string && this.board[i][2] === string) { // checks rows
                    return true;
                }
                if ( this.board[0][i] === string && this.board[1][i] === string && this.board[2][i] === string) { // checks columns
                    return true;
                }
            }
        }
        return false;
    },
    checkDraw: function () {
        if ( this.turn === 9 && this.board.join("") !== ",,,,,,") {
            alert('draw')
        }
    },
    reset: function () {
        for ( let i = 0; i < this.board.length; i++ ) {
            for ( let j = 0; j < this.board[i].length; j++ ) {
              
                this.board[i][j] = "";
            }
        };
        game.turn = 0;
        isPlayerXTurn = true;
    }
}

const render = function() {
    $(`#row0-col0`).text(game.board[0][0]);
    $(`#row0-col1`).text(game.board[0][1]);
    $(`#row0-col2`).text(game.board[0][2]);
    $(`#row1-col0`).text(game.board[1][0]);
    $(`#row1-col1`).text(game.board[1][1]);
    $(`#row1-col2`).text(game.board[1][2]);
    $(`#row2-col0`).text(game.board[2][0]);
    $(`#row2-col1`).text(game.board[2][1]);
    $(`#row2-col2`).text(game.board[2][2]);
}

$(document).ready( function () {
    
    $('.box').on('click', function(event) {
        
        $(this).off('click'); // disables the button after it's been pressed.
        
        // get user input on which square was clicked
        const row = event.target.id.charAt(3); 
        const col = event.target.id.charAt(8); 

        // record player move
        game.recordMove(row, col);

        if ( game.checkWin('x') ) {
            alert('x wins!');
        };
        if ( game.checkWin('o') ) {
            alert('o wins')
        };
        game.checkDraw();

        // check winner
        render(); // update the game board
    })

    $('#restart').on('click', function () {
        game.reset();
        render();
        $('.box').on('click');
    });

});
