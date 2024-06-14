function increaseValue() {
console.log ('you clicked the button');
}

let home = 5
let away = 0

function homeScoreOne() {
    home += 1;
}

function homeScoreThree() {
    home += 3;
    console.log(home)
}

function awayScoreOne() {
    away += 1;
}

function awayScoreThree() {
    away += 3;
}

function updateTotal() {
    const updateTotalElement = document.getElementById('homeTotal');
    updateTotalElement.innerText = home
}
