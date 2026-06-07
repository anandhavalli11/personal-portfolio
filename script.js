document. addEventListener("DOMContentLoaded",function()
{
    alert("Welcome to Anandha Valli's Portfolio Website!");
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("result").innerText =
        "Message Submitted Successfully!";
});
