let current_light = -1;
let current_direction = "RIGHT";
let light_count = 20;
let interval_id = null;
let reset = {
    "background": "#ffffff",
    "box-shadow": "none"
};
let on = {
    "background": "#ff0000",
    "box-shadow": "0 0 5px #8a0202, 0 0 8px #de0505, 0 0 10px #ee0c0c, 0 0 15px #ee3131"
};
let shadow = {
    "background": "#FF7E7AE5",
    "box-shadow": "0 0 3px #8a0202, 0 0 5px #de0505, 0 0 7px #ee0c0c, 0 0 10px #ee3131"
};

const lighting = ()=> {
    $('.light').css(reset);
    if(current_direction==="RIGHT"){
        current_light++;
        $('.light').eq(current_light).css(on);
        if(current_light>=0){
            $('.light').eq(current_light-1).css(shadow);
        }
        if(current_light===light_count-1){
            current_direction="LEFT";
        }
    }else{
        current_light--;
        $('.light').eq(current_light).css(on);
        $('.light').eq(current_light+1).css(shadow);
        if(current_light===0){
            current_direction = "RIGHT";
        }
    }
}
$('#start').on('click', ()=> {
    if(interval_id===null) {
        interval_id = setInterval(lighting, 100); /*give function name with time, time ms(1000ms=1s)*/
        $('#audio')[0].play();
        $('#audio')[0].loop=true;
    }
});
$('#stop').on('click', ()=> {
    clearInterval(interval_id);
    interval_id = null;
    $('#audio')[0].pause();
});