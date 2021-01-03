$(document).ready(function() {
    var upper_quote = ['Sometimes', 'it', 'is', 'the', 'people', 'no', 'one', 'imagines', 'anything', 'of'];
    var lower_quote = ['who', 'do', 'the', 'things', 'that', 'no', 'one', 'can', 'imagine', '.'];

    
    var fontSize = 25;
    var hover_fontSize = 40;
    var rightMargin = 8;
    var borderSize = 10;
    createQuotes(upper_quote, '#upper_quote');
    createQuotes(lower_quote, '#lower_quote');


    function createQuotes(data, container){
        var container = $(container);
        addWord();

        function addWord(){
            for (var i=0, l=data.length; i<l; i++) {
                var word = $('<div class="words">'+ data[i]+ '</div>');
                $(word).css({
                    "fontSize": fontSize + 'px',
                    "margin-right" : rightMargin + 'px',
                    'position': 'relative',
                    'float': 'left',
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
            $(this).parent().css({
                'width': '70vw',
            })
        }).mouseout(function(){
            $(this).css({
                "fontSize": fontSize + 'px',
                'border-bottom': '0px',
            });
            $(this).parent().css({
                'width': '62vw',
            })
        });
    };

});



