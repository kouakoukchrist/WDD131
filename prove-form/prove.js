
const cardInput = document.querySelector('#card-num');
const monthInput = document.querySelector('#mm');
const yearInput = document.querySelector('#yy');
const form = document.querySelector('.form-grid');


function isCardNumberValid(number) {
// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
    return number === '1234123412341234';
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';

    // Get current values
    const cardValue = cardInput.value.replace(/\s+/g, ''); // Remove any spaces
    const expMonth = parseInt(monthInput.value);
    const expYear = parseInt(yearInput.value);
    
   
    const now = new Date();
    const currentYearShort = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1;

    if (!isCardNumberValid(cardValue)) {
        errorMsg += 'Invalid Card Number. Please use 1234123412341234.\n';
    }


    if (expYear < currentYearShort || (expYear === currentYearShort && expMonth < currentMonth)) {
        errorMsg += 'The card is expired.\n';
    }

    
    if (errorMsg !== '') {
        alert(errorMsg); 
        return;
    }

    
    form.innerHTML = '<h2>Payment Was Successfull.</h2>';
}

// 3. Attach the listener to the form
form.addEventListener('submit', submitHandler);