let current_number = -1;
let interval_id = null;
let b1 = {"background-color": "#FE0000","box-shadow": "0 0 0 0 #FE0000,0 20px 15px -20px #FE0000"};
let b2 = {"background-color": "#008001","box-shadow": "0 0 0 0 #008001,0 20px 15px -20px #008001"};
let b3 = {"background-color": "#0000FE","box-shadow": "0 0 0 0 #0000FE,0 20px 15px -20px #0000FE"};
let b4 = {"background-color": "#FFFF00","box-shadow": "0 0 0 0 #FFFF00,0 20px 15px -20px #FFFF00"};
let b5 = {"background-color": "#FFBFCD","box-shadow": "0 0 0 0 #FFBFCD,0 20px 15px -20px #FFBFCD"};
let b6 = {"background-color": "#e46ce5","box-shadow": "0 0 0 0 #e46ce5,0 20px 15px -20px #e46ce5"};
let colorArray = [b1, b2, b3, b4, b5, b6];
const changing = ()=> {
    current_number++;
    if(current_number>=0){
        let colorArrayDuplicate = [b1, b2, b3, b4, b5, b6];
        colorArray.pop();
        colorArray.unshift(colorArrayDuplicate[5-current_number]);
        for (let i=0; i<=5; i++){
            $("#boxes .box").eq(i).css(colorArray[i]);
        }
    }
    if(current_number===5){
        current_number = -1;
    }
}
$('#start').on('click', ()=> {
    if(interval_id===null) {
        interval_id = setInterval(changing, 750);
    }
});
$('#stop').on('click', ()=> {
    clearInterval(interval_id);
    interval_id = null;
});