document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("mvishalgoud@gmail.com"); // Initialize EmailJS with your user ID

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                alert('Email sent successfully!');
            }, function(error) {
                alert('Failed to send email. Please try again later.');
            });
    });
});