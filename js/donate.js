document.getElementById('donation-amount').addEventListener('click',function(){
    console.log('donating money');

    const addMoney = document.getElementById('add-donation-amount').value;
    console.log(addMoney);
    const dmoney=parseFloat(addMoney);

    const balance = document.getElementById('add-donation-money-from-donate').innerText;
    console.log(balance);


    const money=parseFloat(balance);

    const newbalance=money+dmoney;

    document.getElementById('add-donation-money-from-donate').innerText=newbalance;
})