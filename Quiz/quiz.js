// Array of objects
const questions = [
    {
        question: "1.You built a website that loads slowly on mobile. What’s the best first step to fix it?",
        answers: [
            { text: "A.Compress images", correct: true },
            { text: "B.Add more animation", correct: false },
            { text: "C.Increase font size", correct: false },
            { text: "D.Remove CSS", correct: false }
        ]
    },
    {
        question: "2.If your laptop suddenly shuts down while using it, what’s the most likely cause?",
        answers: [
            { text: "A.Battery or overheating issue", correct: true },
            { text: "B.Virus infection", correct: false },
            { text: "C.No internet", correct: false },
            { text: "D.RAM upgrade needed", correct: false }
        ]
    },
    {
        question: "3.Which of these is the best way to prevent phishing attacks?",
        answers: [
            { text: "A.Open all links in your mail", correct: false },
            { text: "B.Ignore all unknown emails", correct: true },
            { text: "C.Share your password only with friends", correct: false },
            { text: "D.Click on bank updates immediately", correct: false }
        ]
    },
    {
        question: "4.You’re budgeting ₦50,000 for the month. What’s the best way to start??",
        answers: [
            { text: "A.Spend first, track later", correct: false },
            { text: "B.Create a list of needs and wants", correct: true },
            { text: "C.Buy food in bulk first", correct: false },
            { text: "D.Save last", correct: false }
        ]
    },
    {
        question: "5.What’s the most productive way to start your day??",
        answers: [
        {text: "A.Check social media first", correct: false},
        {text: "B.Scroll through TikTok", correct: false},
        {text: "C.Drink water and plan tasks", correct: true},
        {text: "D.Sleep more", correct: false }
         ]
    },
    {
        question: "6.What does “HTML” stand for?",
        answers: [
        {text: "A.Hyper Text Making Language", correct: false},
        {text: "B.IHigh Transfer Markup Language", correct: false},
        {text: "C.Hyper Text Markup Language", correct: true},
        {text: "D.Hyperlink and Text Management Language", correct: false }
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
        question: "8.Which cloud platform is NOT real?",
        answers: [
        {text: "A.Google Cloud", correct: false},
        {text: "B.Meta Skybox", correct: true},
        {text: "C.Microsoft Azure", correct: false},
        {text: "D.Amazon Web Services", correct: false }
         ]
    },
    {
        question: "9.A designer wants a responsive website. What does that mean?",
        answers: [
        {text: "A.It replies to emails", correct: false},
        {text: "B.It has chat support", correct: false},
        {text: "C.It loads only on phones", correct: false},
        {text: "D.It adjusts to all screen sizes", correct: true }
         ]
    },
      {
        question: "10.You’re working on a team project online. What’s the best tool to track changes in code?",
        answers: [
        {text: "A.Whatsapp", correct: false},
        {text: "B.GitHub", correct: true},
        {text: "C.Instagram", correct: false},
        {text: "D.Google Maps", correct: false }
         ]
    },
    {
        question: "11.What does “Wi-Fi” allow you to do?",
        answers: [
        {text: "A.Watch movies offline", correct: false},
        {text: "B.Connect devices wirelessly to the internet", correct: true},
        {text: "C.Charge your phone", correct: false},
        {text: "D.Transfer money", correct: false }
         ]
    },
    {
        question: "12.Which company developed the Windows operating system?",
        answers: [
        {text: "A.IBM", correct: false},
        {text: "B.Google", correct: false},
        {text: "C.Microsoft", correct: true},
        {text: "D.Apple", correct: false }
         ]
    },
    {
        question: "13.Which of the following is a programming language?",
        answers: [
        {text: "A.Python", correct: true},
        {text: "B.YouTube", correct: false},
        {text: "C.Instagram", correct: false},
        {text: "D.Google", correct: false }
         ]
    },
    {
        question: "14.What does “CSS” stand for in web development?",
        answers: [
        {text: "A.Creative Style Syntax", correct: false},
        {text: "B.Computer Style System", correct: false},
        {text: "C.Cascading Style Sheets", correct: true},
        {text: "D.Code Styling Sheet", correct: false }
         ]
    },
     {
        question: "15.What is GitHub mainly used for?",
        answers: [
        {text: "A.Watching videos", correct: false},
        {text: "B.Shopping online", correct: false},
        {text: "C.Creating presentations", correct: false},
        {text: "D.Hosting code and collaborating on projects", correct: true }
         ]
    },
     {
        question: "16.Which of the following is a database management system?",
        answers: [
        {text: "A.MySQL", correct: true},
        {text: "B.Figma", correct: false},
        {text: "C.Photoshop", correct: false},
        {text: "D.Excel", correct: false }
         ]
    },
     {
        question: "17.What is the purpose of an API?",
        answers: [
        {text: "A.To style a webpage", correct: false},
        {text: "B.To write HTML documents", correct: false},
        {text: "C.To connect different software systems to share data", correct: true},
        {text: "D.To store passwords", correct: false }
         ]
    },
     {
        question: "18.What does “AI” ?",
        answers: [
        {text: "A.Artificial Internet", correct: false},
        {text: "B.Automatic Intelligence", correct: false},
        {text: "C.Artificial Intelligence", correct: true},
        {text: "D.Automated Information", correct: false }
         ]
    },
        {
        question: "19.What is the brain of the computer called?",
        answers: [
        {text: "A.Hard Drive", correct: false},
        {text: "B.RAM", correct: false},
        {text: "C.Monitor", correct: false},
        {text: "D.CPU", correct: true }
         ]
    },
];

const questionElement = document.getElementById("Question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    clearInterval(timerInterval); 
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60; 
    nextButton.innerHTML = "Next";
    showQuestion();
    startTimer(); 

      document.getElementById("timer").style.display = "flex";
}


function showQuestion() {
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    const questionNumberElement = document.getElementById("question-number");
    questionNumberElement.innerText = `Question ${currentQuestionIndex + 1} / ${questions.length}`;

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

    document.getElementById("question-number").style.display = "flex";
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
    clearInterval(timerInterval); 
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questions.length}`;
    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";

    document.getElementById("timer").style.display = "none";
    document.getElementById("question-number").style.display = "none";
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
    if (nextButton.innerText === "Play Again") {
        currentQuestionIndex = 0;
        score = 0;
        timeLeft = 5;
        startQuiz();
    } else {
        handleNextButton();
    }
});


let timeLeft = 60; 
let timerInterval;
function startTimer() {
    clearInterval(timerInterval); 
    const timerElement = document.getElementById("timer");

    timeLeft = 120; // 
    timerElement.innerText = `Time Left: ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showScore(); 
        }
    }, 1000 );
}


startQuiz();