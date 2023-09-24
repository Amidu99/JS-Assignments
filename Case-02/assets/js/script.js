let letterArray = ["A", "B", "C", "D", "E", "F"];
let current_letter_no = -1;
let interval_id = null;
let image = {"src": "./assets/walking.gif"};
let reset = {"background": "#ffffff", "box-shadow": "none"};
let on = {"background": "#ff0000", "box-shadow": "0 0 5px #8a0202, 0 0 8px #de0505, 0 0 10px #ee0c0c, 0 0 15px #ee3131"};
let shadow = {"background": "#FF7E7AE5", "box-shadow": "0 0 3px #8a0202, 0 0 5px #de0505, 0 0 7px #ee0c0c, 0 0 10px #ee3131"};
function resetFunction() {
    for (let i = 0; i <= 5; i++) {
        $("#gifs .gif").eq(i).attr("src", "./assets/bg.png");
    }
}
const walking = ()=> {
    resetFunction();
    current_letter_no++;
    if(current_letter_no>=0){
        let letterArrayDuplicate = ["A", "B", "C", "D", "E", "F"];
        letterArray.pop();
        letterArray.unshift(letterArrayDuplicate[5-current_letter_no]);
        if(current_letter_no===5){
            $("#gifs .gif").eq(0).attr(image);
        }else{
            $("#gifs .gif").eq(current_letter_no+1).attr(image);
        }
        for (let j=0; j<=5; j++){
            $("#letters .letter").eq(j).html(letterArray[j]);
        }
    }
    if(current_letter_no===5){
        current_letter_no = -1;
    }
}
$('#start').on('click', ()=> {
    if(interval_id===null) {
        interval_id = setInterval(walking, 1500);
        if(current_letter_no===-1){
            $("#gifs .gif").eq(0).attr(image);
        }else{
            $("#gifs .gif").eq(current_letter_no+1).attr(image);
        }
    }
});
$('#stop').on('click', ()=> {
    clearInterval(interval_id);
    interval_id = null;
});