$(document).ready(function() {

    // Create our graph from the data table and specify a container to put the graph in
    createGraph('#skill-table', '.chart');
 
    function createGraph(data, container) {
        // Declare some common variables and container elements
        var bars = []
        var figureContainer = $('<div id="figure"></div>');
        var rowContainer = $('<div class="rowContainer"></div>');
        var barContainer = $('<div class="bars"></div>');
        var data = $(data);
        var container = $(container);
        var chartXMax;
        var yLegends;
        var xLegend;
        var rowGroups;
        //Timer variables
        var barTimer;
        var graphTimers;

        // Create the table data object
        var tableData = {
            chartHeading: function(){
                var charHeading = data.find('caption').text();
                return charHeading;
            },
            chartXMax: function(){
                return data.find('thead tr th').length;
            },
            //Contains legend for X-axis
            xLegend: function(){
                var xLegend = [];
                data.find('thead tr th').each(function(){
                    xLegend.push($(this).text());
                });
                return xLegend;
            },
            //Contains legend for Y-axis
            yLegends: function(){
                var yLegend = [];
                data.find('tbody tr').each(function(){
                    yLegend.push($(this).find('th').text());
                });
                return yLegend;
            },
            //Contains value from each row.
            rowGroup: function(){
                var rowGroups = [];
                data.find('tbody tr').each(function(){
                    rowGroups.push($(this).find('td').text());
                });
                return rowGroups;
            }
        }

        // Useful variables to access table data
        chartXMax = tableData.chartXMax();
        rowGroups = tableData.rowGroup();
        yLegends = tableData.yLegends();

        // Construct the graph

        $.each(rowGroups, function(i){
            var rowGroup = $('<div class="row-group"></div>');
            var yLegend = $('<div class="yLegend">'+yLegends[i] +'</div>');
            yLegend.appendTo(rowGroup)
            var barfig = $('<div class = "barfig fig'+[i] + '">'+ this + '</div>');
            barfig.width = Math.floor( this/chartXMax * 87) + '%';
            bars.push(barfig);
            barfig.appendTo(rowGroup);
            rowGroup.appendTo(rowContainer);
        });

        //Add Title
        var chartHeading = tableData.chartHeading();
        var heading = $('<div class="programming_language">'+ chartHeading +'</div>');
        heading.appendTo(figureContainer);

        //Add Legend to graph
        var xLegend = tableData.xLegend();
        var xAxisDiv = $('<div class="x-axis-div"></div>');
        var xAxisList = $('<ul class="x-axis"></ul>');
        $.each(xLegend, function(i) {
            var listItem = $('<li><span>' + this + '</span></li>').appendTo(xAxisList);
        });
        xAxisList.appendTo(xAxisDiv);
        xAxisDiv.appendTo(figureContainer);

        rowContainer.appendTo(figureContainer);
        
        figureContainer.appendTo(container);

        // Set the individual heights of bars
        function displayGraph(bars, i) {
            if(i < bars.length) {
                $(bars[i]).animate({
                    width: bars[i].width
                }, 800);
                barTimer = setTimeout(function() {
                    i++;
                    displayGraph(bars,i);
                }, 100);
            }
        }

        // Reset the graph's settings and prepare for display
        function resetGraph() {
            clearTimeout(barTimer);
            clearTimeout(graphTimers);

            graphTimer = setTimeout(function() {
                displayGraph(bars,0);
            }, 200);
        }
        // Finally, display the graph via reset function
        resetGraph();
    }
});