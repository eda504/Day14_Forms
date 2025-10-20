let fname = "";
let triviaTimer;
let radioTimer;
let checkboxTimer;

function greet() {
    let greetParagraph = document.getElementById("greet");
    fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let ageInput = document.getElementById("age").value;

    if (!fname || !lname || !ageInput) {
        greetParagraph.innerHTML = "Please fill in all required fields.";
        return;
    }

    let birthDate = new Date(ageInput);
    let referenceDate = new Date("2025-10-20");
    let age = referenceDate.getFullYear() - birthDate.getFullYear();
    let monthDiff = referenceDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && referenceDate.getDate() < birthDate.getDate())) {
        age--;
    }
    greetParagraph.innerHTML = "Hello " + fname + " " + lname + "! You are " + age + " years old.";

    let secret = document.getElementById("secret").value.trim().toLowerCase();
    if (secret) {
        if (secret === "cute") {
            showFeedback("secret-feedback", "yes! enjoy this song!", "correct");
            document.body.classList.add("correct");
            setTimeout(() => document.body.classList.remove("correct"), 3000);
            let song = document.getElementById("secret-song");
            if (!song.paused) song.currentTime = 0; 
            song.play();
        } else {
            showFeedback("secret-feedback", "nope! no CUTEness for you.", "incorrect");
            document.body.classList.add("incorrect");
            setTimeout(() => document.body.classList.remove("incorrect"), 3000);
        }
    }
}

function startTriviaTimer() {
    let timeLeft = 30;
    document.getElementById("timer-display").textContent = timeLeft;
    triviaTimer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer-display").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(triviaTimer);
            document.getElementById("trivia-submit").disabled = true;
            showFeedback("trivia-feedback", "Time's up! The answer is honey.", "incorrect");
            document.body.classList.add("incorrect");
            setTimeout(() => document.body.classList.remove("incorrect"), 3000);
        }
    }, 1000);
}

function startRadioTimer() {
    let timeLeft = 30;
    document.getElementById("radio-timer-display").textContent = timeLeft;
    radioTimer = setInterval(() => {
        timeLeft--;
        document.getElementById("radio-timer-display").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(radioTimer);
            document.getElementById("radio-submit").disabled = true;
            showFeedback("radio-feedback", "Time's up! The lie is: I have been on international TV AND spoken to a celebrity. I've done both, but not at once :)", "incorrect");
            document.body.classList.add("incorrect");
            setTimeout(() => document.body.classList.remove("incorrect"), 3000);
        }
    }, 1000);
}

function startCheckboxTimer() {
    let timeLeft = 45;
    document.getElementById("checkbox-timer-display").textContent = timeLeft;
    checkboxTimer = setInterval(() => {
        timeLeft--;
        document.getElementById("checkbox-timer-display").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(checkboxTimer);
            document.getElementById("checkbox-submit").disabled = true;
            showFeedback("checkbox-feedback", "Time's up! Truths: Mario Kart & gymnast. Lie: I have no turtle!", "incorrect");
            document.body.classList.add("incorrect");
            setTimeout(() => document.body.classList.remove("incorrect"), 3000);
        }
    }, 1000);
}

function trivia1() {
    clearInterval(triviaTimer);
    let triviaAnswer = document.getElementById("trivia1-answer");
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    if (chocolateSelected) {
        showFeedback("trivia-feedback", "wrong, " + (fname || "player") + "! chocolate is great, but not the answer.", "incorrect");
        document.body.classList.add("incorrect");
        setTimeout(() => document.body.classList.remove("incorrect"), 3000);
    }
    if (tunaSelected) {
        showFeedback("trivia-feedback", "ewww, " + (fname || "player") + "! of course tuna goes bad!", "incorrect");
        document.body.classList.add("incorrect");
        setTimeout(() => document.body.classList.remove("incorrect"), 3000);
    }
    if (honeySelected) {
        showFeedback("trivia-feedback", "correct, " + (fname || "player") + "! you are sooo smart!", "correct");
        document.body.classList.add("correct");
        setTimeout(() => document.body.classList.remove("correct"), 3000);
    }
    if (!chocolateSelected && !tunaSelected && !honeySelected) {
        showFeedback("trivia-feedback", "Please select an answer!", "incorrect");
        document.body.classList.add("incorrect");
        setTimeout(() => document.body.classList.remove("incorrect"), 3000);
    }
}

function radioGame() {
    clearInterval(radioTimer);
    let tvSelected = document.getElementById("tv").checked;
    let languageSelected = document.getElementById("language").checked;
    let bikingSelected = document.getElementById("biking").checked;

    if (tvSelected) {
        showFeedback("radio-feedback", "correct! I've done both, but never at the same time", "correct");
        document.body.classList.add("correct");
        setTimeout(() => document.body.classList.remove("correct"), 3000);
        document.getElementById("tv").parentElement.classList.add("pulse");
    }
    if (languageSelected) {
        showFeedback("radio-feedback", "wrong! I can speak English, Turkish, and Spanish.", "incorrect");
        document.body.classList.add("incorrect");
        setTimeout(() => document.body.classList.remove("incorrect"), 3000);
        document.getElementById("language").parentElement.classList.add("pulse");
    }
    if (bikingSelected) {
        showFeedback("radio-feedback", "wrong! I don't know how to bike.", "incorrect");
        document.body.classList.add("incorrect");
        setTimeout(() => document.body.classList.remove("incorrect"), 3000);
        document.getElementById("biking").parentElement.classList.add("pulse");
    }
    if (!tvSelected && !languageSelected && !bikingSelected) {
        showFeedback("radio-feedback", "please select one!!", "incorrect");
        document.body.classList.add("incorrect");
        setTimeout(() => document.body.classList.remove("incorrect"), 3000);
    }
}

function checkboxGame() {
    clearInterval(checkboxTimer);
    let turtleSelected = document.getElementById("turtle").checked;
    let marioSelected = document.getElementById("mario").checked;
    let gymnastSelected = document.getElementById("gymnast").checked;

    if (gymnastSelected && marioSelected && !turtleSelected) {
        showFeedback("checkbox-feedback", "good job, you selected both truths! the lie is: I have a pet turtle!", "correct");
        document.body.classList.add("correct");
        setTimeout(() => document.body.classList.remove("correct"), 3000);
        document.getElementById("turtle").parentElement.classList.add("pulse");
        document.getElementById("mario").parentElement.classList.add("pulse");
    }
    if (!gymnastSelected || !marioSelected || turtleSelected) {
        showFeedback("checkbox-feedback", "wrong!", "incorrect");
        document.body.classList.add("incorrect");
        setTimeout(() => document.body.classList.remove("incorrect"), 3000);
        if (turtleSelected) document.getElementById("turtle").parentElement.classList.add("pulse");
        if (marioSelected) document.getElementById("mario").parentElement.classList.add("pulse");
        if (gymnastSelected) document.getElementById("gymnast").parentElement.classList.add("pulse");
    }
    if (!turtleSelected && !marioSelected && !gymnastSelected) {
        showFeedback("checkbox-feedback", "select two truths! you selected zero.", "incorrect");
        document.body.classList.add("incorrect");
        setTimeout(() => document.body.classList.remove("incorrect"), 3000);
    }
}

function showFeedback(elementId, message, type) {
    let feedback = document.getElementById(elementId);
    feedback.textContent = message;
    feedback.className = `feedback ${type} show`;
    setTimeout(() => {
        feedback.classList.remove("show");
    }, 5000);
}

window.onload = function() {
    // Start trivia timer on first click
    document.getElementById("chocolate").onclick = startTriviaTimer;
    document.getElementById("tuna").onclick = startTriviaTimer;
    document.getElementById("honey").onclick = startTriviaTimer;

    // Start radio timer on first click
    document.getElementById("tv").onclick = startRadioTimer;
    document.getElementById("language").onclick = startRadioTimer;
    document.getElementById("biking").onclick = startRadioTimer;

    // Start checkbox timer on first click
    document.getElementById("turtle").onclick = startCheckboxTimer;
    document.getElementById("mario").onclick = startCheckboxTimer;
    document.getElementById("gymnast").onclick = startCheckboxTimer;
};