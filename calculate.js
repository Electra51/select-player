// Total player Expenses 
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerField = document.getElementById('perplayer-rate');
    const playerRateString = perPlayerField.value;
    const playerRate = parseFloat(playerRateString);
    if (cartArray.length > 5) {
        cartArray.length = 5;
        return;
    }
    const playerRateTotal = playerRate * cartArray.length;
    console.log(playerRateTotal);
    const expensesTotalElement = document.getElementById('player-expenses');
    expensesTotalElement.innerText = playerRateTotal;
    // perPlayerField.value = ' ';
})


// total Expenses
document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const playerExpensesField = document.getElementById('player-expenses');
    const playerExpensesRateString = playerExpensesField.innerText;
    const playerExpensesRate = parseFloat(playerExpensesRateString);



    const managerField = document.getElementById('manager-rate');
    const managerRateString = managerField.value;
    const managerRate = parseFloat(managerRateString);
    

    const coachField = document.getElementById('coach-rate');
    const coachRateString = coachField.value;
    const coachRate = parseFloat(coachRateString);

    const totalrate = playerExpensesRate + managerRate + coachRate;
    console.log(totalrate);

    const totalElement = document.getElementById('total-expenses');
    totalElement.innerText = totalrate;


   
})
