document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerField = document.getElementById('perplayer-rate');
    const playerRateString = perPlayerField.value;
    const playerRate = parseFloat(playerRateString);
    const playerRateTotal = playerRate * 5;
    console.log(playerRateTotal);
    const expensesTotalElement = document.getElementById('player-expenses');
    expensesTotalElement.innerText = playerRateTotal;
    perPlayerField.value = ' ';
})


