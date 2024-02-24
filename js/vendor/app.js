//timer state starts as 0 to indicate it is not started
const TIMER_STATE = 0;

let time = 0;
let intervalId = null;


function timer (){

    //start if not
    if (!TIMER_STATE){
        intervalId = setInterval(function() {
            time++;
            document.getElementById('timer').textContent = time;
        }, 10);
    }else{
        clearInterval(intervalId);
        intervalId = null;
    }

}


//event listener for the space bar action
window.addEventListener('keydown', function(e){
    switch(e.code){
        case 'space':
            timer();
            break;
    }
});