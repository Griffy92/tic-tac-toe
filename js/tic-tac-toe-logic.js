
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

