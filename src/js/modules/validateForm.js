const mainForm = document.forms["mainForm"]
let fname = mainForm["fname"];
let lname = mainForm["lname"];
let email = document.querySelector("#email");
let textarea = mainForm["message"]
let inputForm = mainForm.querySelectorAll("input")

let errInpFN = document.querySelector('.errInpFN')
let errInpLN = document.querySelector('.errInpLN')
let errInpEm = document.querySelector('.errInpEm')

function startCheck(results) {
    let result = true;
    //проверка на 0
    inputForm.forEach(el => {
        if (el.value === "") {
            el.style.borderColor = "red"
            result = false
        }
    })

    //проверка на соответствие содержимому
    const PATTERN = /^[a-zA-Zа-яёА-ЯЁ]+$/;
    const lnameValidate = PATTERN.test(lname.value);
    const fnameValidate = PATTERN.test(fname.value);

    const EMAIL_REGEXP = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const emailValid = EMAIL_REGEXP.test(email.value)
    const errorInp = function (inp) {
        inp.style.borderColor = "red"
    }
    const removeErrorInp = function (inp) {
        inp.style.borderColor = "#878787"
    }
    if (!lnameValidate) {
        errorInp(lname)
        errInpLN.style.display = "block"
    } else {
        removeErrorInp(lname)
    }
    if (!fnameValidate) {
        errorInp(fname)
        errInpFN.style.display = "block"
    } else {
        removeErrorInp(fname)
    }
    if (!emailValid) {
        errorInp(email)
        errInpEm.style.display = "block"
    } else {
        removeErrorInp(email)
    }

    !lnameValidate || !fnameValidate || !emailValid ? result = false : result = true
    return result
}

function validateForm() {
    mainForm.addEventListener("submit", function (event) {
        event.preventDefault()

        let resultValidate = startCheck()
        if (resultValidate === true) {
            inputForm.forEach(el => {
                el.value = ''
            })
            textarea.value = ''
            errInpLN.style.display = "none"
            errInpFN.style.display = "none"
            errInpEm.style.display = "none"
        }
    })
}

export default validateForm;










