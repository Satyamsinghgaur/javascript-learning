//intialize arrays to store the sequence of user and game

let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["yellow", "red", "purple", "green"];

//event listneer to start the game
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is started");
        started = true;
        levelUp();
    }

});


//function for level upgrade(changing h2 text and calling for button flash)
let h2 = document.querySelector("h2");
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //choosing the random index
    let randIdx = Math.floor(Math.random()*3);  
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);

    // console.log("the random button which is selected is;")
    // console.log(randColor);
    // console.log(randbtn.innerText);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function gameFlash(btn){
    //adding flash class to random button
    btn.classList.add("flash");

    //timer for flashing and removing the flash class
    setTimeout(
        function(){
            btn.classList.remove("flash");
        },
        250
    );
} 


//user input
function userFlash(btn){    //gives green color when user click on it
    btn.classList.add("userFlash");

    //timer for flashing and removing the flash class
    setTimeout(
        function(){
            btn.classList.remove("userFlash");
        },
        250
    );
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);


    //calling the check ans
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

//logic for color matching and checking the answer
function checkAns(idx){;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }

    }
    else{
        h2.innerHTML = `Game Over!, Your score was <b>${level - 1}</b>,<br/> Press Any Key to Start Again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(
            function(){
                document.querySelector("body").style.backgroundColor = "white";
            },
            150
        );
        reset();
    }
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0; 
}