document.addEventListener("DOMContentLoaded", function() {
    const emailField = document.getElementById("email");
    const submitButton = document.querySelector("button");

    // Function to handle the email validation and submission
    function handleEmailSubmission() {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isEmail = emailPattern.test(emailField.value.trim());

        if (isEmail) {
            localStorage.setItem("userEmail", emailField.value.trim());
            window.location.href = "thanks.html";
        } else {
            const invalidPrompt = document.getElementById("invalid");
            invalidPrompt.style.display = "block";
            emailField.style.border = "1px solid hsl(4, 100%, 67%)";
        }
    }

    // Add event listener for button click
    submitButton.addEventListener("click", handleEmailSubmission);

    // Add event listener for Enter key press
    emailField.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            // Prevent the default form submission behavior
            event.preventDefault();
            handleEmailSubmission();
        }
    });
});
