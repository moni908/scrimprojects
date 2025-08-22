
//Variable Scores
let homeScore = 0;
let guestScore = 0;

//Home Score Function
function increaseHomeScoreOne() {
    homeScore += 1;
    updateHomeScore();
}

function increaseHomeScoreTwo() {
    homeScore += 2;
    updateHomeScore();
}

function increaseHomeScoreThree() {
    homeScore += 3;
    updateHomeScore();
}


//Guest Score Function
function increaseGuestScoreOne() {
    guestScore += 1;
    updateGuestScore();
}

function increaseGuestScoreTwo() {
    guestScore += 2;
    updateGuestScore();
}

function increaseGuestScoreThree() {
    guestScore += 3;
    updateGuestScore();
}

// Displayed Scores
function updateHomeScore() {
    document.getElementById('home-point').textContent = homeScore;
}

function updateGuestScore() {
    document.getElementById('guest-point').textContent = guestScore;
}

// Reset Button for Scores
function resetScore() {
    homeScore = 0;
    guestScore = 0;
    updateHomeScore();
    updateGuestScore();
}