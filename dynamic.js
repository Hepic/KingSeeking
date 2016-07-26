$(document).ready(function() {
    cards = ['king.jpg', 'queen.jpg', 'jcard.png'];

    $('#play').click(function() {
        $('.card-container').css('display', 'inline-block');
        
        for(var i=0; i<3; ++i) {
            var pos = Math.floor((Math.random() * 10)) % 3;
            var temp = cards[pos];
            cards[pos] = cards[i];
            cards[i] = temp;
        }

        for(var i=0; i<3; ++i) {
            var id = '#cont-' + (i+1) + ' > div > div:first-child img';
            $(id).attr('src', cards[i]);
        }
    });

    $('.card-container').mouseover(function() {
        var id = '#' + $(this).attr('id') + ' > div > div:first-child img';
        var src = $(id).attr('src');

        if(src == 'king.jpg') {
            setTimeout(function() {
                alert('You found it! Press Play to re-shuffle the cards');
            }, 1000);
        }
        
        else {
            setTimeout(function() {
                alert('You lost it! Press Play to re-shuffle the cards'); 
            }, 1000);
        }
    });
});
