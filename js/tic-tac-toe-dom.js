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

    $('#player-o').text(game.player2.counter);
    $('#player-x').text(game.player1.counter);
}

$(document).ready( function () {
    
    $('.box').on('click', function(event) {
        
        if ( !$(this).hasClass('disabled') ) {
            
            $(this).addClass('disabled'); // disable button after click

            // get user input on which square was clicked
            const row = event.target.id.charAt(3); 
            const col = event.target.id.charAt(8); 
    
            // record player move
            let player = game.recordMove(row, col);
            console.log(player)
            console.log(typeof player)
    
            if ( game.checkWin(player) ) {
                $('.box').addClass('disabled'); // disables all buttons if someone wins games
                game.updateCounter(player);
                $('.notification').removeClass('hidden')
                $('.notification').html(`<p>The winner is ${player}!</p>`);
            } else if ( game.checkDraw() ) {
                $('.notification').removeClass('hidden')
                $('.notification').html(`<p>It's a draw!</p>`);
            }
    
            // check winner
            render(); // update the game board

        }
        
    })

    $('#restart').on('click', function () {
        game.reset();
        render();
        $('.box').removeClass('disabled');
        $('.notification').addClass('hidden')
    });

});
