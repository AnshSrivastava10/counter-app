let count = 0;

const countDisplay = document.getElementById("count");

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

function updateCounter() {

    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = "lime";
    }

    else if (count < 0) {
        countDisplay.style.color = "red";
    }

    else {
        countDisplay.style.color = "white";
    }
}

increaseButton.addEventListener("click", function () {

    count++;

    updateCounter();

});

decreaseButton.addEventListener("click", function () {

    count--;

    updateCounter();

});

resetButton.addEventListener("click", function () {

    count = 0;

    updateCounter();

});