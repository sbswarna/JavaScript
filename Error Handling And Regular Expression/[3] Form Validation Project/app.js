//Form Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('zip').addEventListener('blur', validateZipcode);
document.getElementById('phone').addEventListener('blur', validatePhoneNumber);

function validateName(e) {
    const re = /^[A-Z][A-Za-z]{1,10}$/;
    const name = e.target.value;
    //console.log(name);
    if(!(re.test(name))) {
        //console.log('ok');
        document.getElementById('name').classList.add('is-invalid');
    } else  {
        //console.log('not ok');
        document.getElementById('name').classList.remove('is-invalid');
    }
}

function validateEmail(e) {
    const re = /^([A-za-z0-9_\-\.]+)@([A-za-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const email = e.target.value;
    //console.log(name);
    if(!(re.test(email))) {
        //console.log('ok');
        document.getElementById('email').classList.add('is-invalid');
    } else  {
        //console.log('not ok');
        document.getElementById('email').classList.remove('is-invalid');
    }
}

function validateZipcode(e) {
    const re = /^[0-9]{4}$/;
    const zip = e.target.value;
    //console.log(name);
    if(!(re.test(zip))) {
        //console.log('ok');
        document.getElementById('zip').classList.add('is-invalid');
    } else  {
        //console.log('not ok');
        document.getElementById('zip').classList.remove('is-invalid');
    }
}

function validatePhoneNumber(e) {
    const re = /^[0-9]{11}$/;
    const phone = e.target.value;
    //console.log(name);
    if(!(re.test(phone))) {
        //console.log('ok');
        document.getElementById('phone').classList.add('is-invalid');
    } else  {
        //console.log('not ok');
        document.getElementById('phone').classList.remove('is-invalid');
    }
}