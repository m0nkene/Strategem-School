const strat_vals = [
    {
        name: 'Machine Gun',
        combo: ['s','a','s','w','d']
    },{
        name: 'Anti-Material Rifle',
        combo: ['s','a','d','w','s']
    },{
        name: 'Stalwart',
        combo: ['s','a','s','w','w','a']
    },{
        name: 'Expendable Anti-Tank',
        combo: ['s','s','a','w','d']
    },{
        name: 'Recoilless Rifle',
        combo: ['s','a','d','d','a']
    },{
        name: 'Flamethrower',
        combo: ['s','a','w','s','w']
    },{
        name: 'Autocannon',
        combo: ['s','a','s','w','w','d']
    },{
        name: 'Railgun',
        combo: ['s','d','s','w','a','d']
    },{
        name: 'Spear',
        combo: ['s','s','w','s','s']
    },{
        name: 'Orbital Gatling Barrage',
        combo: ['d','s','a','w','w']
    },{
        name: 'Orbital Airburst Strike',
        combo: ['d','d','d']
    },{
        name: 'Orbital 120MM HE Barrage',
        combo: ['d','s','s','a','s','d','s','s']
    },{
        name: 'Orbital 380MM HE Barrage',
        combo: ['d','s','w','w','a','s','s']
    },{
        name: 'Orbital Walking Barrage',
        combo: ['d','s','d','s','d','s']
    },{
        name: 'Orbital Laser Strike',
        combo: ['d','s','w','d','s']
    },{
        name: 'Orbital Railcannon Strike',
        combo: ['d','w','s','s','d']
    },{
        name: 'Eagle Rearm',
        combo: ['w','w','a','w','d']
    },{
        name: 'Eagle Strafing Run',
        combo: ['w','d','d']
    },{
        name: 'Eagle Airstrike',
        combo: ['w','d','s','d']
    },{
        name: 'Eagle Cluster Bomb',
        combo: ['w','d','s','s','d']
    },{
        name: 'Eagle Napalm Airstrike',
        combo: ['w','d','s','w']
    },{
        name: 'Jump Pack',
        combo: ['s','w','w','s','w']
    },{
        name: 'Eagle Smoke Strike',
        combo: ['w','d','w','s']
    },{
        name: 'Eagle 110MM Rocket Pods',
        combo: ['w','d','w','a']
    },{
        name: 'Eagle 500KG Bomb',
        combo: ['w','d','s','s','s']
    },{
        name: 'Orbital Precision Strike',
        combo: ['d','d','w']
    },{
        name: 'Orbital Gas Strike',
        combo: ['d','d','s','d']
    },{
        name: 'Orbital EMS Strike',
        combo: ['d','d','a','s']
    },{
        name: 'Orbital Smoke Strike',
        combo: ['d','d','s','w']
    },{
        name: 'HMG Emplacement',
        combo: ['s','w','a','d','d','a']
    },{
        name: 'Shield Generator Relay',
        combo: ['s','s','a','d','a','d']
    },{
        name: 'Tesla Tower',
        combo: ['s','w','d','w','a','d']
    }
];










//timer state starts as 0 to indicate it is not started
// let TIMER_STATE = false;
let GAME_STATE = false;

//timer vars
let time = 0;
let intervalId = null;

//gameplay variables
//let levelStart = false;
let levelSel = 0;
let guessIndex = 0;





function timer (){

    //start if not
    console.log(GAME_STATE);  
    if (!GAME_STATE){
        GAME_STATE = true; 
        intervalId = setInterval(function() {
            time++;
            var seconds = (time / 100).toFixed(2);
            document.getElementById('timer').textContent = seconds;
        }, 10);
    }else{
        GAME_STATE = false;
        clearInterval(intervalId);
        intervalId = null;
    }
}


function setGameType(type){
    switch (type){
        case 1000:
            sessionStorage.setItem("gameType", 'c');
            console.log('c');
            window.location.href='game.html';
            break;
        case 5:
            sessionStorage.setItem("gameType", '1');
            console.log('1');
            window.location.href='game.html';
            break;
        case 10:
            sessionStorage.setItem("gameType", '0');
            console.log('0');
            window.location.href='game.html';
            break;
        
    }
}


function randSelection(length){
    return randomValue = Math.floor(Math.random() * length);
}

function roundStart(){

    let gameType = sessionStorage.getItem("gameType");
    console.log(gameType);

    switch (gameType){

        case 'c':
            levelSel = randSelection(strat_vals.length);

            let lvlName = strat_vals[levelSel].name;
            let lvlCombo = strat_vals[levelSel].combo;
            let lvlLen = strat_vals[levelSel].combo.length;

            console.log(gameType+", "+lvlName+", "+lvlCombo+", "+lvlLen);
            
            document.getElementById('name').textContent = lvlName;
            
            let cont = document.getElementById('imgContainer');
            cont.innerHTML = '';
            for(var i=0; i<lvlLen;i++){
                let img = document.createElement('img');
                img.src = 'img\\' + lvlCombo[i] + '_gray.png';
                cont.appendChild(img);
            }
            break;




    }






    
    
}

function gameEnd(){
    
    
    
    
    timer();
}



function guess(input){

    let lvlCombo = strat_vals[levelSel].combo;
    let corrInput = strat_vals[levelSel].combo[guessIndex];
    let lvlLen = strat_vals[levelSel].combo.length;


    let cont = document.getElementById('imgContainer');
    let imgs = cont.getElementsByTagName('img');

    console.log(input);
    console.log(corrInput);

    if (input == corrInput){
        var img = imgs[guessIndex];
        img.src = 'img\\' + lvlCombo[guessIndex] + '_green.png';
        guessIndex++;

        if (guessIndex == lvlLen){
            guessIndex = 0;
            roundStart();
        }

    }else{
        var img = imgs[guessIndex];
        img.src = 'img\\' + lvlCombo[guessIndex] + '_red.png';
    }



}


//event listener for the space bar action
window.addEventListener('keydown', function(e){

    if (e.code === 'Space'){
        //console.log('space pressed');
        if (!GAME_STATE){
            GAME_STATE = true;
            roundStart();
        }else{
            timer();
        }
    }

    switch(e.code){
        case 'KeyW':
            guess('w');
            break;

        case 'KeyA':
            guess('a');
            break;

        case 'KeyS':
            guess('s');
            break;
            
        case 'KeyD':
            guess('d');
            break;
    }
});
