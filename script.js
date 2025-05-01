document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.querySelector("input[name='name']").value;
        const message = document.querySelector("textarea[name='message']").value;

        if (!name || !message) {
            alert("Please fill out both fields.");
        } else {
            alert(`Thanks for your message, ${name}!`);
            form.reset();
        }
    });
});
const toggleBtn = document.getElementById("toggle-theme");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

