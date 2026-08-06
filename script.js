let buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.textContent =  button.dataset.defaulttext;
    button.addEventListener("click", function() {
        button.disabled = true;
        button.textContent = button.dataset.clicktext ?? "No Click Text Found";
        console.log(button.dataset.clicktext)
        setTimeout(() => {
            button.textContent =  button.dataset.defaulttext ?? "No Text Found";
            button.disabled = false;
        }, 1000);
    });
});