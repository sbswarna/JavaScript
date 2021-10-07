document.getElementById('loan-form').addEventListener('submit', function(e) {

    //Hide result initially
    document.getElementById('result').style.display = "none";

    //show loading gif after clicking calculate
    document.getElementById('loading').style.display = "block";
    
    //call calculate after 2sec and load gif for 2 sec
    setTimeout(calculateResult, 2000);

    e.preventDefault();
});

function calculateResult(e) {

    const amount = document.getElementById('amount');
    //console.log(amount);
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthly_payment = document.getElementById('monthly-payment');
    const total_payment = document.getElementById('total-payment');
    const total_interest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculated_interest = (parseFloat(interest.value)/100.00)/12.00;
    const calculated_payment = parseFloat(years.value)*12;
    
    const x = Math.pow(1 + calculated_interest, calculated_payment);
    const monthly = (principal*x*calculated_interest)/(x-1);

    if(isFinite(monthly)) {
        monthly_payment.value = monthly.toFixed(2);
        total_payment.value = (monthly * calculated_payment).toFixed(2);
        total_interest.value = ((monthly * calculated_payment)-principal).toFixed(2);
        //Hide gif
        document.getElementById('loading').style.display = "none";
        //show result
        document.getElementById('result').style.display = "block";
    }
    else {
        showError('Please Check Your Numbers');
    }
}

function showError(ErrorMsg) {
     //Hide result
     document.getElementById('result').style.display = "none";

     //hide loading
     document.getElementById('loading').style.display = "none";

    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(ErrorMsg));
    card.insertBefore(errorDiv, heading);
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}