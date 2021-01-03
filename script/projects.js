$(document).ready(function() {

    createBlocks('#project_info','.projects_container')
    /*Syntax for creating block
        <projects class="projects">
            <h1>label</h1>
            <p>url</p>
            <preview>img</preview>
        </projects>
    */

    function createBlocks(data, container){
        //First declare variable
        var blocks = [];
        var data = $(data);
        var container = $(container);
        var blockHeight = '350';
        var blockWidth = '400';
        var margin = '10';

        blockData = {
            blockProjects: function(){
                var blockProjects = [];
                data.find('projects').each(function(){
                    blockProjects.push($(this));
                });
                return blockProjects;
            },
        }

        var blockProjects = blockData.blockProjects();
        //event.target.style.width / document.documentElement.clientWidth * 100

        $.each(blockProjects, function(i){
            var block = $('<a class="block" href="' + $(this).find('p').text() + '"></a>');
            var blockPreview = $('<img class="block_preview" src="'+ $(this).find('preview').text() + '"</img>');
            var blocklabel = $('<div class="block_label">'+ $(this).find('h1').text() + '</div>' );
            blockPreview.appendTo(block);
            blocklabel.appendTo(block);
            blocks.push(block);
        });
        $.each(blocks, function(){
            console.log(this);
            this.appendTo(container);
            styleBlocks(this);
        });

        function styleBlocks(block){
            $(block).css({
                "height": blockHeight + 'px',
                "width" : blockWidth + 'px',
                'position': 'relative',
                'margin' : margin + 'px',
                'float' : 'left',
                'border': '0px',
            });
            $(block).find('img').css({
                'height': '100%',
                'width': '100%',
                'position': 'absolute',
                'z-index': '3',
            });
            $(block).find('.block_label').css({
                'top': blockHeight/2 + 'px',
                'left': blockWidth/3 + 'px',
                'position': 'absolute',
                'z-index': '1',
            });
        }

        $(".block").hover(
            function(){
                $(this).css({
                });
                $(this).find('img').css({
                    'opacity': '0.1',
                });
                $(this).find('.block_label').css({
                });
            },
            function(){
                $(this).css({
                });
                $(this).find('img').css({
                    'opacity': '1',
                });
                $(this).find('.block_label').css({
                    'position': 'absolute',
                });
            }

        );

    }
});