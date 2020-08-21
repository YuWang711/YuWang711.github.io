var visual_div = document.getElementById("blocks");

for(i = 0; i < 20; i++)
{
    var x_div = document.createElement("div");
    x_div.className = "row";
    visual_div.appendChild(x_div);
    for(j = 0; j < 50; j++)
    {
        var square_div = document.createElement("div");
        square_div.addEventListener('click', function(){ChangeSquareType(this)});
        square_div.className = "square";
        square_div.id = (i*50)+j;
        x_div.appendChild(square_div);
    }
}

function ChangeSquareType(ele){
    options = document.querySelectorAll('input[name="options"]');
    let selectedValue;
    for (option of options) {
        if(option.checked){
            selectedValue = option.value;
            break;
        }
    }
    switch(selectedValue){
        case "starting":
            var start = document.getElementsByClassName("starting");
            for(var i = 0; i < start.length; i++){
                start[i].className = "square";
            }
            ele.className = "starting";
            break;
        case "ending":
            var end = document.getElementsByClassName("ending");
            for(var i = 0; i < end.length; i++){
                end[i].className = "square";
            }
            ele.className = "ending";            
            break;
        case "Walls":
            if(ele.className != "starting" && ele.className != "ending"){
                ele.className = "Walls";       
            }     
            break;
        default:
            ele.className = "square";
            break;
    }
}


function findPath(){
    var start = document.getElementsByClassName("starting");
    var ending = document.getElementsByClassName("ending");
    if(start.length < 1 || ending.length < 1){
        alert('You need to creating a starting point and ending point');
        return;
    }
    var node_id = start[0].id;

    var result = checkPath(node_id);

    while(result[0] == false){
        var new_list = [false];
        for(var i = 1; i < result.length; i++)
        {
            var temp_result = checkPath(result[i]);
            if(temp_result[0] == true){
                result = new Array();
                result = [...temp_result];
                console.log(result);
                break;
            }
            else{
                for(var j = 1; j < temp_result.length; j++)
                {
                    new_list.push(temp_result[j]);
                }
            }
        }
        if(result[0] != true){
            result = [...new_list];
        }
    }
    var ending_node = document.getElementById(result[1]);
    ending_node.setAttribute('data-parent', result[2]);
    ConnectPath(ending_node);
    return;
}

function checkPath(id_val){
    var int_id_val = parseInt(id_val);
    var result_array = [false];
    if(int_id_val - 50 > 0) //check top side
    {
        var top_node = document.getElementById(int_id_val - 50);
        if(top_node.className == "ending"){
            return [true, top_node.id, int_id_val];
        }
        else if(top_node.className != "Passed" && top_node.className != "starting" && top_node.className != "Walls"){
            top_node.setAttribute('data-parent', int_id_val);
            result_array.push(top_node.id);
            passby(top_node.id);
        }
        Delay();
    }
    if(( ((int_id_val + 1)%50) - (int_id_val%50)) == 1)
    {
        var right_node = document.getElementById(int_id_val + 1);
        if(right_node.className == "ending"){
            return [true, right_node.id, int_id_val];
        }
        else if(right_node.className != "Passed" && right_node.className != "starting" && right_node.className != "Walls"){
            right_node.setAttribute('data-parent', int_id_val);
            result_array.push(right_node.id);
            passby(right_node.id);
        }
        Delay();
    }
    if( int_id_val + 50 < 1000)
    {
        var bottom_node = document.getElementById(int_id_val + 50);
        if(bottom_node.className == "ending"){
            return [true, bottom_node.id, int_id_val];
        }
        else if(bottom_node.className != "Passed" && bottom_node.className != "starting" && bottom_node.className != "Walls"){
            bottom_node.setAttribute('data-parent', int_id_val);
            result_array.push(bottom_node.id);
            passby(bottom_node.id);
        }
        Delay();
    }
    if( ((((int_id_val - 1)%50)+1)%50) > 0)
    {
        var left_node = document.getElementById(int_id_val - 1);
        if(left_node.className == "ending"){
            return [true, left_node.id, int_id_val];
        }
        else if(left_node.className != "Passed" && left_node.className != "starting" && left_node.className != "Walls"){
            left_node.setAttribute('data-parent', int_id_val);
            result_array.push(left_node.id);
            passby(left_node.id);
        }
        Delay();
    }
    return result_array;
}

function passby(id_val)
{
    var node = document.getElementById(id_val);
    node.className = "Passed";
    return;
}

function ConnectPath(ending_node)
{
    var prev_node = document.getElementById(ending_node.getAttribute('data-parent'));
    while(prev_node.className != "starting"){
        prev_node.className = 'Path';
        prev_node = document.getElementById(prev_node.getAttribute('data-parent'));
    }
    return;
}

function Delay(){
    setTimeout( () => {null;}, 30000);
}
