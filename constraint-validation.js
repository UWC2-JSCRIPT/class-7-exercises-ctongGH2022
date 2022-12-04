/**
 * Cecilia Tong
 * Class 7 Exercise & Homework
 * Nov 29, 2022
 * CONSTRAINT VALIDATION
 */

// TODO

//function to validate firstname, lastname and email
function validateInput(id) {
    const inputVal = document.getElementById(id);
    inputVal.addEventListener("input", () => {
        inputVal.setCustomValidity("");
        if (inputVal.checkValidity() === false) {
            if (id == "email") {
                inputVal.setCustomValidity(` ${id} must be a correct format for an email (i.e. 'e@e')`);
            } else {
                inputVal.setCustomValidity(` ${id} must be from 2 to 25 letters!!!`);
            }
        }; //end if
    }); //end event
} //end function

//call function validateInput() to validate firstname, lastname and email
validateInput('first-name');
validateInput('last-name');
validateInput("email");