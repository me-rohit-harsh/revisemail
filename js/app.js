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
    duration: 1200,  // Animation duration
    easing: 'ease-in-out',  // Easing function for the animation
    once: false,  // Whether animation should only occur once
    delay: 100,  // Delay in animation start
})
// productive js section starts 
document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll('.productive-img, .productive-content');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('move-right');
            }
        });
    }, {
        threshold: 0.5
    }); // Trigger when half the element is in view
    
    elementsToAnimate.forEach(el => observer.observe(el));
});
// productive js section ends 
// testimonials js section starts 
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible'); // Optional: remove animation if out of view
            }
        });
    }, {
        threshold: 0.4
    }); // Trigger when 10% of the item is visible

    document.querySelectorAll('.testimonial-item[data-animate]').forEach(item => {
        observer.observe(item);
    });
});

// testimonails js section ends 
// footer part js subscription starts
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible'); // Optional: remove class if out of view
            }
        });
    }, {
        threshold: 0.3
    }); // Adjust if you want it to trigger earlier or later
    
    document.querySelectorAll('.cta-item[data-animate]').forEach(item => {
        observer.observe(item);
    });
});
// footer part js subscription ends
// Auth Page Animation starts 
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('jbrwe-visible');
            }
        });
    }, {
        threshold: 0.1
    }); // Trigger when half of the element is visible
    
    document.querySelectorAll('[data-animate]').forEach(item => {
        observer.observe(item);
    });
    // Auth Page Animation ends
});
