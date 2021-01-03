$(document).ready(function() {
    var upper_quote = ['Sometimes', 'it', 'is', 'the', 'people'];
    var middle_quote = [ 'no', 'one', 'imagines', 'anything', 'of'];
    var lower_quote = ['who', 'do', 'the', 'things', 'that', 'no', 'one', 'can', 'imagine', '.'];

    
    var fontSize = 30;
    var hover_fontSize = 40;
    var rightMargin = 20;
    var borderSize = 10;
    createQuotes(upper_quote, '#upper_quote', 'left');
    createQuotes(middle_quote, '#middle_quote', 'left');
    createQuotes(lower_quote, '#lower_quote', 'left');


    function createQuotes(data, container,float){
        var container = $(container);
        addWord();

        function addWord(){
            for (var i=0, l=data.length; i<l; i++) {
                var word = $('<div class="words">'+ data[i]+ '</div>');
                $(word).css({
                    "fontSize": fontSize + 'px',
                    "margin-right" : rightMargin + 'px',
                    'position': 'relative',
                    'float': float,
                });
                word.appendTo(container);
            }
        }
        $('.words').mouseover(
            function(){
            console.log("moused over");
            $(this).css({
                "fontSize": hover_fontSize + 'px',
                'border-bottom': borderSize + 'px' + ' solid white',
            });
        }).mouseout(function(){
            $(this).css({
                "fontSize": fontSize + 'px',
                'border-bottom': '0px',
            });

        });
    };

});



