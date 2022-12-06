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

    //function to check firstname, lastname
    function checkName(e, id) {
        const inputVal = document.getElementById(id);
        let allValid = false;
        inputVal.setCustomValidity('');

        // check lenght of name entered >= 3
        if (inputVal.value.length < 3) {
            inputVal.validity.valid = false;
            inputVal.parentElement.classList.add("invalid");
            inputVal.setCustomValidity(`you entered ${inputVal.value.length} chars, name must be 3 chars or more`);
            //inputVal.reportValidity();
        } else {
            inputVal.validity.valid = true;
            inputVal.parentElement.classList.remove("invalid");
            allValid = true;
        }
        if (!allValid) {
            e.preventDefault();
            console.log(`Bad input.`);
        }
    } //end function

    //fucntion to check email
    function checkEmail(e, id) {
        const inputVal = document.getElementById(id);
        let allValid = false;
        inputVal.setCustomValidity('');

        const regEx = /\w+@\w+\.\w+/;
        if (!regEx.test(inputVal.value)) {
            inputVal.validity.valid = false;
            inputVal.parentElement.classList.add("invalid");

            inputVal.setCustomValidity(`you entered ${inputVal.value}. It is an invalid email.`);
            //inputVal.reportValidity();

            // if (inputVal.value == '') {
            //     alert(`you must enter an email`);
            // }
            // else {
            //     alert(`you entered ${inputVal.value}. It is an invalid email.`);
            // }
        }
        else {
            inputVal.validity.valid = true;
            inputVal.parentElement.classList.remove("invalid");
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
        checkName(e, "first-name");
        form.reportValidity();
        checkName(e, "last-name");
        form.reportValidity();
        checkEmail(e, "email");
        form.reportValidity();
    })
}); //end js readiness





