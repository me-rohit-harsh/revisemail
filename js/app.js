function emailSubmition(event) {
    event.preventDefault();
    var emailId = document.getElementById("email_id");
    if (emailId.value !== '') {
        alert("Email Submitted Successfully!");
        emailId.value = '';
    } else {
        alert("Kindly fill in all the details");
    }
}

function login(e) {
    e.preventDefault();
    var alertBox = document.getElementById("alertBox");
    var password = document.getElementById("login_password");
    var username = document.getElementById("login_username");
    if (password.value !== '' && username.value !== '') {
        alertBox.innerHTML = "  Incorrect Credentials! "
        alertBox.classList.remove("d-none");
        password.value = '';
        username.value = '';
    } else {
        alertBox.classList.remove("d-none");
        alertBox.innerHTML = "Fil in all the details";
    }
}

function register(event) {
    event.preventDefault();
    var alertBoxR = document.getElementById("RalertBox");
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var email = document.getElementById("email");
    if (username.value !== '' && password.value !== '' && email.value !== '') {
        window.location.href = "/#price-section";
    } else {
        alertBoxR.classList.remove("d-none");
        alertBoxR.innerHTML = "Fil in all the details";
    }
}


AOS.init({
    duration: 1200, // Animation duration
    easing: 'ease-in-out', // Easing function for the animation
    once: false, // Whether animation should only occur once
    delay: 100, // Delay in animation start
});

