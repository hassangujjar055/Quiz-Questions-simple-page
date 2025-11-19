// QUIZ DATA
const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Machine Learning", "Home Tool Markup Language", "Hyperlinks Text Makeup Logic"],
        correct: 0
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Python", "JavaScript", "C++", "Java"],
        correct: 1
    },
    {
        question: "CSS stands for?",
        options: ["Cascading Style Sheets", "Creative Style Software", "Colorful Styling System", "Central Style Sheet"],
        correct: 0
    },
    {
        question: "Which tag is used to insert JavaScript?",
        options: ["<script>", "<js>", "<javascript>", "<code>"],
        correct: 0
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Google", "Microsoft", "Netscape", "Apple"],
        correct: 2
    }
];

// SELECT ELEMENTS
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const resultEl = document.getElementById("result");

let currentIndex = 0;
let score = 0;

// LOAD FIRST QUESTION
loadQuestion();

function loadQuestion() {
    let current = quizData[currentIndex];

    questionEl.textContent = current.question;
    optionsEl.innerHTML = "";

    current.options.forEach((option, index) => {
        let div = document.createElement("div");
        div.classList.add("option");

        div.innerHTML = `
            <label>
                <input type="radio" name="option" value="${index}">
                ${option}
            </label>
        `;

        optionsEl.appendChild(div);
    });

    // Hide submit button unless it’s last question
    if (currentIndex === quizData.length - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "inline-block";
    }
}

// NEXT BUTTON
nextBtn.addEventListener("click", () => {
    let selected = document.querySelector("input[name='option']:checked");

    if (!selected) {
        alert("Please select an option!");
        return;
    }

    if (parseInt(selected.value) === quizData[currentIndex].correct) {
        score++;
    }

    currentIndex++;
    loadQuestion();
});

// SUBMIT BUTTON
submitBtn.addEventListener("click", () => {
    let selected = document.querySelector("input[name='option']:checked");

    if (!selected) {
        alert("Please select an option!");
        return;
    }

    if (parseInt(selected.value) === quizData[currentIndex].correct) {
        score++;
    }

    // FINAL RESULT
    resultEl.classList.remove("hidden");
    resultEl.textContent = `Your Score: ${score} / ${quizData.length}`;

    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";
    submitBtn.style.display = "none";
});
