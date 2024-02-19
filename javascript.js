let fName = false;
let lName = false;
let phoneNumber = false;
let theEmail = false;
let pass = false;
let cPass = false;

let theFirstName = document.getElementById("firstName")
let theLastName = document.getElementById("lastName")

function showSpecificAlertLabel(alertLabelId, message) { /* Function that creates red text under input elements */
    var alertLabel = document.getElementById(alertLabelId);
    alertLabel.textContent = message;
    alertLabel.style.display = 'block';
}
function hideSpecificAlertLabel(alertLabelId) { /* Function that removes red text under input elements */
    var alertLabel = document.getElementById(alertLabelId);
    alertLabel.textContent = '';
    alertLabel.style.display = 'none';
}

theFirstName.addEventListener("keyup", function(){    /*First name event listener*/
    if(this.value.length > 0 && !isNaN(this.value.slice(-1))){
        showSpecificAlertLabel("alertLabelName", "You can only input text in this field");
        this.value = this.value.slice(0, -1);
        this.style.border = "2px red solid";
        fName = false;
    }else{
        hideSpecificAlertLabel("alertLabelName");
        if(this.value.length>1){
            this.style.border = "2px solid green";
            fName = true;
        }else{
            this.style.border = "2px solid rgb(220,220,220)";
            fName = false;
        }
    }


});

theLastName.addEventListener("keyup", function(){    /*Last name event listener*/
    if(this.value.length > 0 && !isNaN(this.value.slice(-1))){
        showSpecificAlertLabel("alertLabelLastName", "You can only input text in this field");
        this.value = this.value.slice(0, -1);
        this.style.border = "2px red solid";
        lName = false;
    }else{
        hideSpecificAlertLabel("alertLabelLastName");
        if(this.value.length>1){
            this.style.border = "2px solid green";
            lName = true;
        }else{
            this.style.border = "2px solid rgb(220,220,220)";
            lName = false;
        }
    }
});
/*above this line is code for first and last name*/
/*under this line is code for email and number */

let thePhoneNumber = document.getElementById("phoneNumber")
let theEmailAddress = document.getElementById("email")

thePhoneNumber.addEventListener("keyup", function(){    /*Phone number listener */
    if(this.value.length > 0 && isNaN(this.value.slice(-1))){
        showSpecificAlertLabel("alertLabelPhoneNumber", "You can only input numbers in this field");
        this.value = this.value.slice(0, -1);
        this.style.border = "2px red solid";
        phoneNumber = false;
    }else{
        hideSpecificAlertLabel("alertLabelPhoneNumber");
        if(this.value.length>1){
            this.style.border = "2px solid green";
            phoneNumber = true;
        }else{
            this.style.border = "2px solid rgb(220,220,220)";
            phoneNumber = false;
        }
    }
})

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

theEmailAddress.addEventListener("blur", function(){
    let email = isValidEmail(this.value)
    if(email){
        this.style.border = "2px solid green";
        hideSpecificAlertLabel("alertLabelEmail");
        theEmail = true;
    }else if(this.value === ""){
        this.style.border = "2px solid rgb(220,220,220)";
        hideSpecificAlertLabel("alertLabelEmail");
        theEmail = false;
    }else{
        this.style.border = "2px red solid";
        showSpecificAlertLabel("alertLabelEmail", "This is not a valid email address!");
        theEmail = false;
    }
})

/*Testing if passwords are matching*/
let thePassword = document.getElementById("password");
let theConfirmPassword = document.getElementById("confirmPassword");

thePassword.addEventListener("keyup", function(){
    if(this.value === theConfirmPassword.value){
        this.style.border = "2px solid green";
        theConfirmPassword.style.border = "2px solid green";
        pass = true;
        cPass = true;
    }else if(this.value != theConfirmPassword.value){
        this.style.border = "2px solid red";
        theConfirmPassword.style.border = "2px solid red";
        pass = false;
        cPass = false;
    }
})
theConfirmPassword.addEventListener("keyup", function(){
    if(this.value === thePassword.value){
        this.style.border = "2px solid green";
        thePassword.style.border = "2px solid green";
        pass = true;
        cPass = true;
    }else if(this.value != theConfirmPassword.value){
        this.style.border = "2px solid red";
        thePassword.style.border = "2px solid red";
        pass = false;
        cPass = false;
    }
})

let createAccBtn = document.getElementById("createAcc");

createAccBtn.addEventListener("click", function(){
    if(fName && lName && phoneNumber && theEmail && pass && cPass){
        alert("Creating account...")
    }else{alert("Something went wrong, please correct red inputs")}
})

