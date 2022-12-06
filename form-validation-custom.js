/**
 * Cecilia Tong
 * Class 7 Exercise & Homework
 * Nov 29, 2022
 * CUSTOM VALIDATION
 */

// TODO
//js ready
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const min3 = 3;

    //function to check firstname, lastname
    function checkName(e, name) {
        let allValid = false;
        name.setCustomValidity('');

        // check lenght of name entered >= 3
        if (name.value.length < 3) {
            name.validity.valid = false;
            name.parentElement.classList.add("invalid");
            name.setCustomValidity(`${name.name} must be ${min3} chars or more`);
        } else {
            name.validity.valid = true;
            name.parentElement.classList.remove("invalid");
            allValid = true;
        }
        if (!allValid) {
            e.preventDefault();
            console.log(`Bad input.`);
        }
    } //end function

    //fucntion to check email
    function checkEmail(e) {
        let allValid = false;
        email.setCustomValidity('');

        const regEx = /\w+@\w+\.\w+/;
        if (!regEx.test(email.value)) {
            email.validity.valid = false;
            email.parentElement.classList.add("invalid");
            if (email.value == '') {
                email.setCustomValidity(`you must enter an email`);
            }
            else {
                email.setCustomValidity(`You must enter a valid email in the format '${regEx}'`);
            }
        }
        else {
            email.validity.valid = true;
            email.parentElement.classList.remove("invalid");
            allValid = true;
        }
        if (!allValid) {
            e.preventDefault();
            console.log(`Bad input.`);
        }
    } //end function

    //call functions to check firstname, lastname and email when submit
    form.addEventListener('submit', (e) => {
        firstName.focus();
        checkName(e, firstName);
        form.reportValidity();
        checkName(e, lastName);
        form.reportValidity();
        checkEmail(e);
        form.reportValidity();
    })
}); //end js readiness