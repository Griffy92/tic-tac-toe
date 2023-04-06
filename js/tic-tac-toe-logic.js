
let isPlayerXTurn = true;

const game = {
    turn: 0,
    aiMode: false,
    player1: {
        name: "x",
        counter: 0,
    },
    player2: {
        name: "o",
        counter: 0,
    },
    board: [
        ["","",""],
        ["","",""],
        ["","",""],
    ],
    recordMove: function ( row, col ) { 
        // takes in row col argument from click and updates the game board
        // changes the turn between players
        // updates the turn count
        // returns the move made
        if ( !game.aiMode ) {
            if ( isPlayerXTurn ) {
                this.board[row][col] = 'x'
                isPlayerXTurn = false;
                this.turn += 1;
                return this.board[row][col];
            } else {
                this.board[row][col] = 'o'
                isPlayerXTurn = true;
                this.turn += 1;
                return this.board[row][col];
            }
        } else {
            if ( isPlayerXTurn ) {
                this.board[row][col] = 'x'
                isPlayerXTurn = false;
                this.turn += 1;
                return this.board[row][col];
            } else {
                this.aiMove();
                isPlayerXTurn = true;
                this.turn += 1;
                return this.board[row][col]
            }
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
            return true
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
    },
    updateCounter: function (player) {
        if ( player === game.player1.name ) {
            this.player1.counter += 1;
        } else {
            this.player2.counter += 1;
        }
    },
    // aiMove: function () {
    //     // opener move
    //     const randInt = function ( max ) {
    //         return Math.floor(Math.random() * max )
    //     }

    //     if ( this.turn <= 2 ) {
    //         if ( this.board[0][0] === 'x' || this.board[0][2] === 'x' || this.board[2][0] === 'x' || this.board[2][2] === 'x' ) {
    //             this.board[1][1] = 'o';
    //             return this.board[1][1];
    //         } else {
    //             this.board[0][0] = 'o'; 
    //             return this.board[0][0];
    //         }
    //     }

    //     console.log(randInt(3));
    //     this.board[randInt(3)][randInt(3)] = 'o';
    //     return this.board[randInt(3)][randInt(3)];
    // }
}

