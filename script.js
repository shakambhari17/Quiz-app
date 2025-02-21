// Define the quiz questions and answers
const quizQuestions = [
    {
        question: "Who is the father of computer?",
        options: ["Maquee Jack", "Dennis Ritchie", "James Ronald", "Charles Babbage"],
        answer: 3, // index of correct option (0-based)
    },
    {
        question: "Which is the fullform of RAM?",
        options: ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
        answer: 0,
    },
    {
        question: "how many keys in keyboard?",
        options: ["110", "124", "104", "98"],
        answer: 2,
    },
    {
        question: "who is the father of Artificial Intelligence?",
        options: ["Charles Babbage", "James Wings", "Denish Ritchie", "John McCarthy"],
        answer: 3,
    },
    {
        question: "110 + 550?",
        options: ["650", "660", "680", "780"],
        answer: 1,
    },
];

let currentQuestionIndex = 0;
let score = 0;

// Function to load the current question
function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    
    // Display question text
    document.getElementById('question-text').textContent = question.question;
    
    // Clear previous options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Create options dynamically
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(index, optionElement);
        optionsContainer.appendChild(optionElement);
    });

    // Clear feedback and disable "Next" button
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-btn').disabled = true;
}

// Function to check the selected answer
function checkAnswer(selectedIndex, optionElement) {
    const question = quizQuestions[currentQuestionIndex];
    
    // Check if the selected answer is correct
    if (selectedIndex === question.answer) {
        score++;
        document.getElementById('feedback').textContent = 'Correct!';
        optionElement.style.backgroundColor = 'green'; // Correct answer is highlighted in green
    } else {
        document.getElementById('feedback').textContent = 'Incorrect. The correct answer is ' + question.options[question.answer];
        optionElement.style.backgroundColor = 'red'; // Wrong answer is highlighted in red
    }

    // Highlight the correct answer in green if it's not the selected one
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === question.answer && option !== optionElement) {
            option.style.backgroundColor = 'green'; // Correct answer
        }
    });

    // Update score
    document.getElementById('score').textContent = score;
    
    // Disable options after answering
    options.forEach(option => option.onclick = null);

    // Enable the "Next" button
    document.getElementById('next-btn').disabled = false;
}

// Function to load the next question
function loadNextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        // If quiz is finished, show final score
        document.getElementById('question-text').textContent = 'Quiz Over!';
        document.getElementById('options-container').innerHTML = '';
        document.getElementById('feedback').textContent = 'Your final score is ' + score;
        document.getElementById('next-btn').style.display = 'none';
    }
}

// Initialize the quiz
loadQuestion();
