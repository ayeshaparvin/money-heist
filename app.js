function getExpenses(id){
    const expensesAmount = document.getElementById(id);
    const amount = expensesAmount.value;
    
    return amount;
}



document.getElementById('calculate').addEventListener('click',function(){

    const income = getExpenses('income');
    const food = getExpenses('food');
    const rent = getExpenses('rent');
    const clothes = getExpenses('clothes');

    const totalExpenses = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
    const balance = income - totalExpenses;
    
    document.getElementById('total-expenses').innerText = totalExpenses;
    document.getElementById('balance').innerText = balance;

    

    
    
});

document.getElementById('saving').addEventListener('click',function(){
       
    
    const saving = document.getElementById('save');
    const savingValue = saving.value;

    const income = document.getElementById('income');
    const totalIncome = income.value;

    const savingAmount = document.getElementById('saving-amount');

    const save = (savingValue * totalIncome)/100;
    
    savingAmount.innerText = save;
    console.log(savingAmount.innerText);
    const balance = document.getElementById('balance');
    const balanceTotal = balance.innerText;
    console.log(balanceTotal);
    const remainingBalance = balanceTotal - save;
    const remaining = document.getElementById('remaining-balance');
    remaining.innerText = remainingBalance;
    
})