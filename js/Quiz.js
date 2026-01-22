const questions = [
    {
        question: "Quel accessoire les filles portent souvent au poignet pour connaître l’heure ?",
        answers: ["Chapeau", "Montre", "Collier"],
        correct: 1
    },
    {
        question: "Quelle pièce de vêtement est souvent portée avec une jupe ou un pantalon ?",
        answers: ["T-shirt", "Casque", "Écharpe"],
        correct: 0
    },
    {
        question: "Les chaussures avec un talon sont appelées :",
        answers: ["Sneakers", "Bottes", "Talons hauts"],
        correct: 2
    },
    {
        question: "Quel accessoire complète souvent une tenue en hiver ?",
        answers: ["Écharpe", "Lunettes de soleil", "Bracelet"],
        correct: 0
    },
    {
        question: "Quel type de sac est souvent utilisé pour sortir le soir ?",
        answers: ["Sac à dos", "Pochette", "Sac de sport"],
        correct: 1
    },
    {
        question: "Quel vêtement est typiquement porté pour aller à la plage ?",
        answers: ["Maillot de bain", "Manteau", "Jean"],
        correct: 0
    },
    {
        question: "Quel accessoire de tête est souvent porté pour se protéger du soleil ?",
        answers: ["Chapeau", "Gants", "Collier"],
        correct: 0
    },
    {
        question: "Quel type de vêtement se porte souvent en hiver pour avoir chaud ?",
        answers: ["Pull", "Robe d’été", "Short"],
        correct: 0
    },
    {
        question: "Quel accessoire est utilisé pour embellir les cheveux ?",
        answers: ["Barrette", "Chapeau", "Sac"],
        correct: 0
    },
    {
        question: "Quel type de chaussure est souvent porté pour le sport ?",
        answers: ["Sneakers", "Talons hauts", "Bottes"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const label0 = document.getElementById('label0');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const opt0 = document.getElementById('opt0');
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const submitBtn = document.getElementById('submit-btn');
const quizContainer = document.getElementById('quiz-container');
const scoreDisplay = document.getElementById('score-display');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionText.textContent = currentQuestion.question;

    label0.textContent = currentQuestion.answers[0];
    label1.textContent = currentQuestion.answers[1];
    label2.textContent = currentQuestion.answers[2];

    opt0.checked = false;
    opt1.checked = false;
    opt2.checked = false;

    submitBtn.disabled = true;
    submitBtn.textContent = currentQuestionIndex === questions.length - 1 ? "Terminer" : "Suivant";
}

function checkSelection() {
    if (opt0.checked || opt1.checked || opt2.checked) {
        submitBtn.disabled = false;
    }
}

opt0.addEventListener('change', checkSelection);
opt1.addEventListener('change', checkSelection);
opt2.addEventListener('change', checkSelection);

submitBtn.addEventListener('click', () => {
    let selectedAnswer = -1;
    if (opt0.checked) selectedAnswer = 0;
    if (opt1.checked) selectedAnswer = 1;
    if (opt2.checked) selectedAnswer = 2;

    if (selectedAnswer === questions[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    quizContainer.style.display = 'none';
    scoreDisplay.style.display = 'block';
    scoreDisplay.textContent = "Votre score est : " + score + " / " + questions.length;

    if (score > 5) {
        scoreDisplay.style.color = 'green';
    } else {
        scoreDisplay.style.color = 'red';
    }
}

loadQuestion();
