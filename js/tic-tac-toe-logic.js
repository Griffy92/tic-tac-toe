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
        if (this.box1 + this.box2 + this.box3 === 'ooo' || 'xxx') {
            console.log(this.box1)
            return this.box1;
        } else if ( this.box1 + this.box4 + this.box7 === 'ooo' || 'xxx' ) {
            return this.box1;
        } else if ( this.box1 + this.box5 + this.box9 === 'ooo' || 'xxx' ) {
            return this.box1;
        } else if ( this.box2 + this.box5 + this.box8 === 'ooo' || 'xxx' ) {
            return this.box2;
        } else if ( this.box3 + this.box5 + this.box7 === 'ooo' || 'xxx' ) {
            return this.box3;
        } else if ( this.box3 + this.box6 + this.box9 === 'ooo' || 'xxx' ) {
            return this.box3;
        } else if ( this.box4 + this.box5 + this.box6 === 'ooo' || 'xxx' ) {
            return this.box4;
        } else if ( this.box7 + this.box8 + this.box9 === 'ooo' || 'xxx' ) {
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
        
        if ( isPlayerXTurn ) {
            nineBoard[event.target.id] = 'x'
            isPlayerXTurn = false;
        } else {
            nineBoard[event.target.id] = 'o'
            isPlayerXTurn = true;
        }
        nineBoard.winner();
        // click a box and put a marker on it
        // check winner

        render();
    })

});

