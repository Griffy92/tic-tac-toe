let isPlayerXTurn = true;

const nineBoard = {
    player1: {
        name: "X",
        counter: 0,
    },
    player2: {
        name: "O",
        counter: 0,
    },
    box1: "",
    box2: "",
    box3: "",
    box4: "",
    box5: "",
    box6: "",
    box7: "",
    box8: "",
    box9: "",
    winner: function () {
        // omg fucking abomination
        if (this.box1 + this.box2 + this.box3 === 'ooo' || this.box1 + this.box2 + this.box3 === 'xxx') {
            return this.box1;
        } else if ( this.box1 + this.box4 + this.box7 === 'ooo' || this.box1 + this.box2 + this.box3 ===  'xxx' ) {
            return this.box1;
        } else if ( this.box1 + this.box5 + this.box9 === 'ooo' || this.box1 + this.box5 + this.box9 ===  'xxx' ) {
            return this.box1;
        } else if ( this.box2 + this.box5 + this.box8 === 'ooo' || this.box2 + this.box5 + this.box8 === 'xxx' ) {
            return this.box2;
        } else if ( this.box3 + this.box5 + this.box7 === 'ooo' || this.box3 + this.box5 + this.box7 === 'xxx' ) {
            return this.box3;
        } else if ( this.box3 + this.box6 + this.box9 === 'ooo' || this.box3 + this.box6 + this.box9 === 'xxx' ) {
            return this.box3;
        } else if ( this.box4 + this.box5 + this.box6 === 'ooo' || this.box4 + this.box5 + this.box6 === 'xxx' ) {
            return this.box4;
        } else if ( this.box7 + this.box8 + this.box9 === 'ooo' || this.box7 + this.box8 + this.box9 === 'xxx' ) {
            return this.box7;
        }
    }
}

const render = function() {
    $('#box1').text(nineBoard.box1);
    $('#box2').text(nineBoard.box2);
    $('#box3').text(nineBoard.box3);
    $('#box4').text(nineBoard.box4);
    $('#box5').text(nineBoard.box5);
    $('#box6').text(nineBoard.box6);
    $('#box7').text(nineBoard.box7);
    $('#box8').text(nineBoard.box8);
    $('#box9').text(nineBoard.box9);
}
// update the boxes and checks for winner

$(document).ready( function () {
    
    $('.box').on('click', function(event) {

        render();
        if ( nineBoard[event.target.id] === "" ) {

            if ( isPlayerXTurn ) {
                nineBoard[event.target.id] = 'x'
                isPlayerXTurn = false;
                winner = nineBoard.winner();
                if (winner) {
                    console.log('Player X is the winner')
                }
            } else {
                nineBoard[event.target.id] = 'o'
                isPlayerXTurn = true;
                winner = nineBoard.winner();
                if (winner) {
                    console.log('Player O is the winner')
                }
            }
        }

        // click a box and put a marker on it
        // check winner
        render();
    })

});

