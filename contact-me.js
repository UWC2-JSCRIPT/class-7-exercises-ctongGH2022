/**
 * Cecilia Tong
 * Class 7 Exercise & Homework
 * Nov 29, 2022
 * CONTACT-ME FORM
 */

// TODO
//js ready
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    /**
     * Function checkStrLen()
     * @param {event,String,number} e, string, minLen
     * function to check string length (for name and message)
     */
    function checkStrLen(e, string, minLen) {
        let allValid = false;
        string.setCustomValidity('');

        // check string lenght
        if (string.value.length < minLen) {
            string.validity.valid = false;
            string.parentElement.classList.add("invalid");
            string.setCustomValidity(`${string.name} must be ${minLen} chars or more`);
        } else {
            string.validity.valid = true;
            string.parentElement.classList.remove("invalid");
            allValid = true;
        }
        if (!allValid) {
            e.preventDefault();
            console.log(`Bad input.`);
        }
    } //end function checkStrLen(e, string, minLen)

    /**
    * Function checkEmail(e)
    * @param {event} e
    * fucntion to check email
    */
    function checkEmail(e) {
        let allValid = false;
        email.setCustomValidity('');
        const regEx = /\w+@\w+\.\w+/;
        if (!regEx.test(email.value)) {
            email.validity.valid = false;
            email.parentElement.classList.add("invalid");
            email.setCustomValidity(`You must enter a valid email in the format '${regEx}'`);
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
    } //end function checkEmail(e)

    // To show/hide elements
    const contactReason = document.getElementById('contact-reason');
    const jobTitle = document.getElementById('job-title');
    const comUrl = document.getElementById('url');
    const coding = document.getElementById('coding-language');

    contactReason.addEventListener('click', () => {
        if (contactReason.value == "job-opportunity") {
            //show Job title (text type) & company website (url type)
            coding.style.display = 'none';
            jobTitle.style.display = 'block';
            comUrl.style.display = 'block';
            jobTitle.setAttribute('required', '');
            comUrl.setAttribute('required', "");
            form.reportValidity() == false;
        }
        if (contactReason.value == "talk-code") {
            //show coding language(type text)
            jobTitle.style.display = 'none';
            comUrl.style.display = 'none';
            coding.style.display = 'block';
            coding.setAttribute('required', "");
            form.reportValidity() == false;
        }
    })

    //call functions to check name, email, and message when submit
    form.addEventListener('submit', (e) => {      
        name.focus();
        checkStrLen(e, name, 3);
        form.reportValidity();
        checkEmail(e);
        form.reportValidity();
        checkStrLen(e, message, 10);
        form.reportValidity();      
    })
}); //end js readiness