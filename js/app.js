//timer state starts as 0 to indicate it is not started
let TIMER_STATE = false;

let time = 0;
let intervalId = null;


function timer (){

    //start if not
    console.log(TIMER_STATE);  
    if (!TIMER_STATE){
        TIMER_STATE = true; 
        intervalId = setInterval(function() {
            time++;
            document.getElementById('timer').textContent = time;
        }, 10);
    }else{
        TIMER_STATE = false;
        clearInterval(intervalId);
        intervalId = null;
    }

}


//event listener for the space bar action
window.addEventListener('keydown', function(e){
    switch(e.code){
        case 'Space':
            console.log('space pressed');
            timer();
            break;

        case 'KeyW':
            console.log('W key was pressed');
            break;

        case 'KeyA':
            console.log('A key was pressed');
            break;

        case 'KeyS':
            console.log('S key was pressed');
            break;
            
        case 'KeyD':
            console.log('D key was pressed');
            break;
    }
});