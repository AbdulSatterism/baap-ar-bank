// handle deposite button event
document.getElementById('deposite-button').addEventListener('click', function () {
    // get amount deposite 
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText)

    // update deposit total
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositText = depositeTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositeTotal = previousDepositAmount + newDepositeAmount;

    depositeTotal.innerText = newDepositeTotal;


    // update account balance
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;;
    balanceTotal.innerText = newBalanceTotal;

    // clear deposite input
    depositeInput.value = ''
});

// handle withdrow field

document.getElementById('withdrow-button').addEventListener('click', function () {
    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowAmountText = withdrowInput.value;
    const newWithdrowAmoutn = parseFloat(withdrowAmountText)

    // set withdrow total

    const withdrowTotal = document.getElementById('withdrow-total');
    const previousWithdrowText = withdrowTotal.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowText);

    const newWithdrowTotal = previousWithdrowTotal + newWithdrowAmoutn;
    withdrowTotal.innerHTML = newWithdrowTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrowAmoutn;
    balanceTotal.innerText = newBalanceTotal;
    // clear withdrow input
    withdrowInput.value = ''
})