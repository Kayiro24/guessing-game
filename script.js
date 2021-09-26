let theNum = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click",function(){
    
    const guess = Number(document.querySelector(".guess").value);
    if(!guess){
        document.querySelector(".message").textContent = "Please enter a number!";
    }
    else{
        if(score >= 1){
            if(guess > theNum){
                document.querySelector(".message").textContent = "Hint: Go Lower...";
                score--;    
                document.querySelector(".score").textContent = score;   
            }
            else if(guess < theNum){
                document.querySelector(".message").textContent = "Hint: Go Higher...";
                score--;
                document.querySelector(".score").textContent = score;
                
            }
            else if(guess === theNum){
                document.querySelector(".message").textContent = "Hurray!, You,ve won.";
                document.querySelector(".number").textContent = theNum;

                document.querySelector("body").style.backgroundColor = "#60b347";

                document.querySelector(".number").style.width = "20rem";

                // document.querySelector(".highscore").textContent = document.querySelector(".score").textContent;
                if(score > highscore){
                    highscore = score;
                    document.querySelector(".highscore").textContent = highscore;
                }
            }
        }
        else{
            document.querySelector(".message").textContent = "You,ve Lost!";
        }
    }
});

document.querySelector(".again").addEventListener("click", function(){

    score = 20;
    theNum = Math.trunc(Math.random()*20)+1;

    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value= "";
    document.querySelector(".score").textContent = score;

});