var current_light = -1;
var current_direction = "RIGHT";
var light_count = 6;
var interval_id = null;

const myFunction = ()=> {
    $('.light').css("background", "white");
    if(current_direction==="RIGHT"){
        current_light++;
        $('.light').eq(current_light).css("background", "red");
        if(current_light>=0){
            $('.light').eq(current_light-1).css("background", "#FA5F55");
        }

        $('.light').eq(current_light+1).css("background", "#FA5F55");
        if(current_light===light_count-1){
            current_direction="LEFT";
        }
    }else{
        current_light--;
        $('.light').eq(current_light).css("background", "red");
        $('.light').eq(current_light-1).css("background", "#FA5F55");
        $('.light').eq(current_light+1).css("background", "#FA5F55");
        if(current_light===0){
            current_direction = "RIGHT";
        }
    }
}
$('#start').on('click', ()=> {
    if(interval_id===null) {
        interval_id = setInterval(myFunction, 300); /*give function name with time, time ms(1000ms=1s)*/
        $('#audio')[0].play();
    }
});
$('#stop').on('click', ()=> {
    clearInterval(interval_id);
    interval_id = null;
    $('#audio')[0].pause();
});