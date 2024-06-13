// HAPPY
let clicks = 0;

document.getElementById("btn_click").addEventListener("click", buttonClicked);
document.getElementById("btn_decrease").addEventListener("click", decreaseClicked);
document.getElementById("btn_reset").addEventListener("click", resetClicked);

function buttonClicked() {
    clicks++;
    updateClickCounter();
    console.log("The button was clicked");
}

function decreaseClicked() {
    clicks--;
    updateClickCounter();
    console.log("The decrease button was clicked");
}

function resetClicked() {
    clicks = 0;
    updateClickCounter();
    console.log("The reset button was clicked");
}

function updateClickCounter() {
    document.getElementById("click_counter").textContent = clicks;
}