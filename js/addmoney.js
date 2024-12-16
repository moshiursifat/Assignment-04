
document.getElementById('donation-amount').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney =getInputFieldValueById('add-donation-amount');
    const balance = innertext('add-donation-money-from-donate');
    
    const newbalance= balance+addMoney;
    
    const minimise = innertext('minimise');
    const rowbalance=minimise-addMoney;
    

    
    
    if(rowbalance>=0 && newbalance!=rowbalance){
        document.getElementById('add-donation-money-from-donate').innerText=newbalance;
        document.getElementById('minimise').innerText=rowbalance;
    }else
    {
        alert("Not Enough Balance to Donate")
    }

})