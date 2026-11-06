let userform = document.querySelector("#userForm");
userform.addEventListener("submit",(e)=>{
e.preventDefault();

let isValid = true;

let username = document.querySelector("#name").value;
let nameError = document.querySelector("#nameError");
nameError.textContent="";
if(username.length<3){
    isValid=false;
    nameError.textContent = "Name must contain at least 3 characters";
}


let age = document.querySelector("#age").value;
let ageError = document.querySelector("#ageError");
ageError.textContent= "";
if(!Number.isInteger(Number(age))){
    isValid=false;
    ageError.textContent = "Age must be a Whole Number"
}
else if(age<18){
    isValid=false;
    ageError.textContent="Age must be above 18"
}
else if(age>100){
    isValid=false;
    ageError.textContent = "Age must be below 100"
}


let gender = document.querySelector("#gender").value;
let genderError = document.querySelector("#genderError");
// console.log(gender);
genderError.textContent="";
if(!gender){
    isValid=false;
    genderError.textContent = "The user must select a Gender";
}


let email = document.querySelector("#email").value;
let emailError = document.querySelector("#emailError");
emailError.textContent="";
if(!email.includes("@")){
    isValid=false;
    emailError.textContent = "email must contain @"
}
else if(!email.includes(".")){
    isValid=false;
    emailError.textContent = "email must contain .";
}


let address = document.querySelector("#address").value;
let addressError = document.querySelector("#addressError");
addressError.textContent = "";
if(address.length<10){
    isValid=false;
    addressError.textContent = "Must Contain atleast 10 characters";
}

let password = document.querySelector("#password").value;
let passwordError = document.querySelector("#passwordError");

passwordError.textContent = "";

let iscaps = false;
let issmall = false;
let isnum = false;

if (password.length < 8) {
    isValid=false;
    passwordError.textContent = "Must contain at least 8 characters.";
}
else {
    for (let i = 0; i < password.length; i++) {

        if (caps(password[i])) {
            iscaps = true;
        }

        if (small(password[i])) {
            issmall = true;
        }

        if (num(password[i])) {
            isnum = true;
        }
    }

    if (!iscaps) {
        isValid=false;
        passwordError.textContent = "Must contain at least one uppercase letter (A-Z).";
    }
    else if (!issmall) {
        isValid=false;
        passwordError.textContent = "Must contain at least one lowercase letter (a-z).";
    }
    else if (!isnum) {
        isValid=false;
        passwordError.textContent = "Must contain at least one number (0-9).";
    }
}

function caps(str) {
    let code = str.charCodeAt(0);

    if (code >= 65 && code <= 90) {
        return true;
    }
    return false;
}

function small(str) {
    let code = str.charCodeAt(0);

    if (code >= 97 && code <= 122) {
        return true;
    }
    return false;
}

function num(str) {
    let code = str.charCodeAt(0);

    if (code >= 48 && code <= 57) {
        return true;
    }
    return false;
}

let confirmPassword = document.querySelector("#confirmPassword").value;
let confirmPasswordError = document.querySelector("#confirmPasswordError");
confirmPasswordError.textContent="";
if(password!=confirmPassword){
    isValid=false;
    confirmPasswordError.textContent = "Must match the password entered above";
}

if (isValid) {

    let usercards = document.querySelector("#userCards");

    let card = document.createElement("div");
    card.classList.add("user-card");

    let namediv = document.createElement("div");
    namediv.textContent = "Name: " + username;

    let agediv = document.createElement("div");
    agediv.textContent = "Age: " + age;


    let genderdiv = document.createElement("div");
    genderdiv.textContent = "Gender: " + gender;

    let emaildiv = document.createElement("div");
    emaildiv.textContent = "Email: " + email;

    let addressdiv = document.createElement("div");
    addressdiv.textContent = "Address: " + address;

    card.append(namediv);
    card.append(agediv);
    card.append(genderdiv);
    card.append(emaildiv);
    card.append(addressdiv);

    
    usercards.append(card);

    userform.reset();
}
})



