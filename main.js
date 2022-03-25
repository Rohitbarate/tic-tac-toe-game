let overSound = new Audio("gameover.wav");
let clickMUsic = new Audio("gamestart.wav");
let drawSound = new Audio("gamedraw.wav");
let boxItem = document.querySelectorAll(".box");
let move = 0;
isgameEnd = false;
for (const item of boxItem) {
    item.addEventListener('click', (e) => {
        document.getElementById('resultDiv').innerText = "Game is running...";
        if (!item.classList.contains("clicked")) {
            clickMUsic.play(); // play click music
            let itemValue = document.getElementById('playerName');
            item.innerText = itemValue.innerText;
            changeplayerName(); // call the change player name function
            item.classList.add("clicked");
            move++;  //increment the moves
            checkwinner(); // call the check winner function

            //    function for change player name 
            function changeplayerName() {
                let player = document.getElementById("playerName");
            (player.innerText == "O")?(player.innerText = "X"):(player.innerText = "O");//condition for chnage the player name
            }

        }
    }
    )

    function checkwinner() {
        let boxItem = document.querySelectorAll(".box");
        let wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]


        wins.forEach( (e) => {  
            if ((move<=9) && (boxItem[e[0]].innerText === boxItem[e[1]].innerText) && (boxItem[e[2]].innerText === boxItem[e[1]].innerText) && (boxItem[e[0]].innerText !== "")) {
                document.getElementById('resultDiv').innerText = "Game Ended";
                document.getElementById('result').innerHTML = `Player <span class="winnerName">${boxItem[e[0]].innerText}</span> Won 🎉🎉`;
                document.getElementById('playAgain').style.display = "flex";
                document.getElementById('game').style.filter ="blur(6px)";
                overSound.play();
                isgameEnd = true
            }
            else if((move==9)&&(isgameEnd ===false )){
                drawSound.play();
                document.getElementById('resultDiv').innerText =  "Game Ended";
                document.getElementById('result').innerHTML =` Game <span class="winnerName"> Draw </span> 💪🤝`;
                document.getElementById('playAgain').style.display = "flex";
                document.getElementById('game').style.filter ="blur(6px)";
            }

        })
    }
}
let playAgain = () => {
    clickMUsic.play();
    setTimeout(() => {
        location.reload();
    }, 300);
}
