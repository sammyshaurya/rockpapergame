function playgame(name) {
    const choices = ['rock', 'paper', 'scissors'];
    let comp = choices[Math.floor(Math.random() * choices.length)];
    player = name;
    let result;
    if (player === comp) {
        result = "Its a Tie!!"
    } else if (player === 'rock' && comp === "scissors" ||
        player === 'paper' && comp === "rock" ||
        player === 'scissors' && comp === "paper"
    ) {
        result = "Its a Win!!"
    } else {
        result = "Its a lose!!"
    }
    document.getElementById('res').innerText = `You chose ${player}. Computer chose ${comp}. ${result}`
}