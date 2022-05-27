function getExpenses(id){
    const expensesAmount = document.getElementById(id);
 
    const amount = expensesAmount.value;

    expensesAmount.value = '';

    return amount;
}



document.getElementById('calculate').addEventListener('click',function(){

    const income = getExpenses('income');
    const food = getExpenses('food');
    const rent = getExpenses('rent');
    const clothes = getExpenses('clothes');
    
      
       if(income < 0 || food < 0 || rent < 0 || clothes < 0){
          const calcError = document.getElementById('calc-error');
          calcError.style.display = 'block';
      }
      else if(income > 0 && food > 0 && rent > 0 && clothes > 0){
   
        const totalExpenses = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
        const balance = income - totalExpenses;
    
        document.getElementById('total-expenses').innerText = totalExpenses;
        document.getElementById('balance').innerText = balance;
      }
      else {
       document.getElementById('total-expenses').innerText = 0;
        document.getElementById('balance').innerText = 0;
      }
      
    /* const totalExpenses = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
    const balance = income - totalExpenses;
    
    document.getElementById('total-expenses').innerText = totalExpenses;
    document.getElementById('balance').innerText = balance; */

    
 document.getElementById('saving').addEventListener('click',function(){
       
    
    const saving = document.getElementById('save-rate');
    const savingValue = saving.value;

    saving.value  ='';



    const savingAmount = document.getElementById('saving-amount');
     const save = (savingValue * income)/100;
    
     
    const remaining = document.getElementById('remaining-balance');

    const balanceTotal = document.getElementById('balance');
    const balance = balanceTotal.innerText;
   if(balance < save){
       const saveError = document.getElementById('save-error');
       saveError.style.display = 'block';
       remaining.innerText = balance;
   }
   else {
      savingAmount.innerText = save;
      
      
       const remainingBalance = balance - save;
    
    remaining.innerText = remainingBalance;
   }
      
       
   
    
    
})
    
    
});

/* document.getElementById('saving').addEventListener('click',function(){
       
    
    const saving = document.getElementById('save-rate');
    const savingValue = saving.value;

    const income = document.getElementById('income');
    const totalIncome = income.value;

    const balance = document.getElementById('balance');
    const balanceTotal = balance.innerText;

    const savingAmount = document.getElementById('saving-amount');
     const save = (savingValue * totalIncome)/100;
    
     
    const remaining = document.getElementById('remaining-balance');
    
   
   
      // console.log(save);
       savingAmount.innerText = save;
       const remainingBalance = balanceTotal - save;
    
    remaining.innerText = remainingBalance;
   
    
    
}) */



