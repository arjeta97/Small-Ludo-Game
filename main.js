var p1Score = 0;
var p2Score = 0;
var btnplus_1=document.querySelector("#buttonplus1");
var btnmin_1=document.querySelector("#buttonmin1");
var btnplus_2=document.querySelector("#buttonplus2")
var btnmin_2=document.querySelector("#buttonmin2");
var newGame=document.querySelector("#new");
var score_1=document.querySelector(".score_1");
var score_2=document.querySelector(".score_2");
var numInput = document.querySelector("input"); 
var winnerText = document.querySelector("#winner-display");
var winningScore = Number(numInput.value);

var gameOver = false;

function myludo(){
    var dice1=Math.random()*6 +1;
    dice1=Math.floor(dice1);
    var  dice11=dice1+".jpg";
    document.getElementById("d1").setAttribute('src',dice11);
    var dice2=Math.random()*6 +1;
    dice2=Math.floor(dice2);
    var  dice12=dice2+".jpg";
    document.getElementById("d2").setAttribute('src',dice12);


    if(dice1>dice2)
        {
        document.getElementById('winner').innerHTML="One heart goes to player one";
        // p1Score++;
        // score_1.textContent = p1Score;
        }
    else if(dice1<dice2)
        {
        document.getElementById('winner').innerHTML="One heart goes to player two";
        // p2Score++;
        // score_2.textContent = p2Score;
        }

    else{
        document.getElementById('winner').innerHTML="Both players get one heart";
        p1Score++ && p2Score++;
        // score_2.textContent = p2Score;
        // score_1.textContent = p1Score;
    }

    
}


    btnplus_1.addEventListener("click", function(){
        if (!gameOver) { 
            p1Score++;
            if (p1Score === winningScore) {
                score_1.classList.add("winner");
                gameOver = true;
                winnerText.textContent = "Player 1 gets more love!"
            }
            score_1.textContent = p1Score;
        }
    })
    
    btnmin_1.addEventListener("click", function(){
        if (!gameOver && p1Score > 0) { 
            p1Score--;
            score_1.textContent = p1Score;
        }
        if (p1Score <= 0) {
            alert("You cannot make score a negative number");
        }
    })
    btnplus_2.addEventListener("click", function(){
        if (!gameOver) {
            p2Score++;
            if (p2Score === winningScore) {
                score_2.classList.add("winner");
                gameOver = true;
                winnerText.textContent = "Player 2 gets more love!"
            }
            score_2.textContent = p2Score;
        }
    })
    
    btnmin_2.addEventListener("click", function(){
        if (!gameOver && p2Score > 0) { 
            p2Score--;
            score_2.textContent = p2Score;
        }
        if (p2Score <= 0) {
            alert("You cannot make score a negative number");
        }
    })

    newGame.addEventListener("click", function(){
        reset();
    })
    
    function reset() {
        p1Score = 0; 
        p2Score = 0;
        score_1.textContent =0;
        score_2.textContent =0;
        winnerText.textContent = "";
        score_1.classList.remove("winner");
        score_2.classList.remove("winner");
        gameOver = false;
    }

    
    numInput.addEventListener("change", function() {
        if (numInput.value >= 1) {
            winningScore = Number(numInput.value);
            reset();
        }
        else {
            alert("Please enter a positive number");
        }
    })

