function calculateScore() {
    let score = 0;
    const quizForm = document.getElementById("quiz-form");

    // Check each question's answer
    for (let i = 1; i <= 3; i++) {
        const answer = quizForm.querySelector(`input[name="q${i}"]:checked`);
        if (answer && parseInt(answer.value) === 1) {
            score++;
        }
    }

    // Display result
    const resultText = `You scored ${score} out of 3. ${score === 3 ? "Excellent!" : "Keep learning!"}`;
    document.getElementById("quiz-result").textContent = resultText;
}
