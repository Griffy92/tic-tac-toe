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
            
            // get user input on which square was clicked
            const row = event.target.id.charAt(3); 
            const col = event.target.id.charAt(8); 
    
            // record player move
            game.recordMove(row, col);
    
            if ( game.checkWin('x') ) {
                $('.box').addClass('disabled');
                game.player1.counter += 1;
                alert('x wins!');
            };
            if ( game.checkWin('o') ) {
                $('.box').addClass('disabled');
                game.player2.counter += 1;
                alert('o wins')
            };
            game.checkDraw();
    
            // check winner
            render(); // update the game board

            $(this).addClass('disabled');

        }
        
    })

    $('#restart').on('click', function () {
        game.reset();
        render();
        $('.box').removeClass('disabled');
    });

});
