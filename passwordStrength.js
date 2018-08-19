let username = document.getElementById("username");
let password = document.getElementById("password");
let check = document.getElementById("check");
let display = document.getElementById("display");

const testPassword = () => {
    const alphaLow = "abcdefghijklmnopqrstuvwxyz";
    const alphaCaps = alphaLow.toUpperCase();
    const num = "0123456789";
    const symbols = "$@#&!";
    let i, j, testSum;

    if ((password.value === "") || (username.value === "")) {
        display.style.color = "red";
        return display.innerHTML = "Please input username or password"
    } else if ((password.value).length < 6) {
        display.style.color = "red";
        return display.innerHTML = "Minimum password length is 6"
    } else if ((password.value).length > 12) {
        display.style.color = "red";
        return display.innerHTML = "Maximum password length is 12"
    }

    const testAlphaLow = () => {
        for (i = 0; i < (password.value).length; i++) {
            for (j = 0; j < (alphaLow.length); j++) {
                if ((password.value).charAt(i) === alphaLow.charAt(j)) {
                    return 25;
                }
            }
        }
        return 0;
    }


    const testAlphaCaps = () => {
        for (i = 0; i < (password.value).length; i++) {
            for (j = 0; j < (alphaCaps.length); j++) {
                if ((password.value).charAt(i) === alphaCaps.charAt(j)) {
                    return 25;
                }
            }
        }
        return 0;
    }

    const testNum = () => {
        for (i = 0; i < (password.value).length; i++) {
            for (j = 0; j < (num.length); j++) {
                if ((password.value).charAt(i) === num.charAt(j)) {
                    return 25;
                }
            }
        }
        return 0;
    }

    const testSymbols = () => {
        for (i = 0; i < (password.value).length; i++) {
            for (j = 0; j < (symbols.length); j++) {
                if ((password.value).charAt(i) === symbols.charAt(j)) {
                    return 25;
                }
            }
        }
        return 0;
    }

    testSum = testAlphaLow() + testAlphaCaps() + testNum() + testSymbols();

    if (testSum < 50) {
        display.style.color = "red";
    } else if (testSum >= 50 && testSum < 75) {
        display.style.color = "yellow";
    } else if (testSum === 75) {
        display.style.color = "rgb(148, 216, 47)";
    } else {
        display.style.color = "green";
    }
    return display.innerHTML = `Password Strength is ${testSum}%`;
}

check.onclick = function () {
    testPassword();
}