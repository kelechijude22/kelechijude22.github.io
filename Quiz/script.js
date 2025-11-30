const questions = [
    {
        question: "1.What is the color of love?",
        answers: [
            { text: "A.Red", correct: true },
            { text: "B.Blue", correct: false },
            { text: "C.Green", correct: false },
            { text: "D.Yellow", correct: false }
        ]
    },
    {
        question: "2.Which day is Valentine's Day celebrated?",
        answers: [
            { text: "A.February 14", correct: true },
            { text: "B.March 8", correct: false },
            { text: "C.December 25", correct: false },
            { text: "D.January 1", correct: false }
        ]
    },
    {
        question: "3.Which flower is commonly associated with love?",
        answers: [
            { text: "A.Tulip", correct: false },
            { text: "B.Rose", correct: true },
            { text: "C.Sunflower", correct: false },
            { text: "D.Daisy", correct: false }
        ]
    },
    {
        question: "4.What symbol is often used to represent love?",
        answers: [
            { text: "A.Star", correct: false },
            { text: "B.Heart", correct: true },
            { text: "C.Moon", correct: false },
            { text: "D.Diamond", correct: false }
        ]
    },
    {
        question: "5.Which of these animals is the slowest?",
        answers: [
        {text: "A.Elephant", correct: false},
        {text: "B.Shark", correct: false},
        {text: "C.Sloth", correct: true},
        {text: "D.Bear", correct: false }
         ]
    },
    {
        question: "6.What fruits is use make wine?",
        answers: [
        {text: "A.Strawberries", correct: false},
        {text: "B.Oranges", correct: false},
        {text: "C.Grapes", correct: true},
        {text: "D.Bananas", correct: false }
         ]
    },
    {
        question: "7.What products does Apple NOT manufacture?",
        answers: [
        {text: "A.Laptops", correct: false},
        {text: "B.Satelites", correct: true},
        {text: "C.Music Players", correct: false},
        {text: "D.Phones", correct: false }
         ]
    },
    {
        question: "8.Which month has only 28 days, and every 4 years has 29?",
        answers: [
        {text: "A.February", correct: true},
        {text: "B.December", correct: false},
        {text: "C.July", correct: false},
        {text: "D.August", correct: false }
         ]
    },
];

const questionElement = document.getElementById("Question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerText =` You scored ${score} out of ${questions.length}!`;
    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();