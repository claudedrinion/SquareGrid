$(document).ready(function() {
    var size = 16;
    drawGrid(size);
    
    $("button").click(function(){
        //Delete existing grid
        $(".row").remove();
        var gridSize = prompt("Enter grid size:");
        drawGrid(gridSize);
    });
    

    function hoverEffect() {
        $(".tile").mouseenter(function() {
            var newColor = '#'+(0x22ee2ee+(Math.random())*0xffffff).toString(16).substr(1,6);
            $(this).css("background-color", newColor);
        });
    }

    // Function used when document is ready and when called by reset button
    function drawGrid(size){

        // Draw each row and then each tile
        for (var i = 0; i < size; i++) {
        $("#container").append($("<div class='row'></div>"));
        }

        for (var i = 0; i < size; i++) {
        $(".row").append($("<div class='tile'></div>"));
        }
        
        // calculate the height of the new tile and modify CSS properties
        var tileLength = $('#container').height() / size;
        // keeping only two decimals
        tileLength = tileLength.toFixed(2);
        console.log(tileLength);
        console.log($('#container').height()); 
        // adjusting to make sure everything fits within the container
        // it's an ugly solution that doesn't work well (see size = 64)
        // Fix: need to change the way the tiles are displayed
        if (tileLength * size > $("#container").height()) {
            tileLength -= 0.1;
        }
        $('.tile').height(tileLength);
        $('.tile').width(tileLength);
        
        hoverEffect();
    }

});

