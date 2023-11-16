document.addEventListener("DOMContentLoaded", function() {
    const span = document.querySelector("span");
    const email = localStorage.getItem("userEmail");
    span.textContent = email; //embed the user's email in the thank you page

    const button = document.querySelector("button");
    button.addEventListener("click", function() {
        window.location.href = "index.html"; //go back to home pageS
    })
});