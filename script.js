

// Questions are now loaded from translations

let currentQuestionIndex = 0;
let answers = [];
let totalScore = 0;

document.addEventListener('DOMContentLoaded', function() {
    const introSection = document.getElementById('intro');
    const quizSection = document.getElementById('quiz');
    const resultSection = document.getElementById('result');
    const tipsSection = document.getElementById('tips');
    const ad2 = document.getElementById('ad2');

    const startBtn = document.getElementById('start-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options');
    const percentageElement = document.getElementById('percentage');
    const analysisElement = document.getElementById('analysis');
    const circle = document.querySelector('.circle');

    if (startBtn) startBtn.addEventListener('click', startQuiz);
    if (prevBtn) prevBtn.addEventListener('click', showPreviousQuestion);
    if (nextBtn) nextBtn.addEventListener('click', showNextQuestion);

    let currentLanguage = localStorage.getItem('selectedLanguage') || 'ar'; // Default language

    function startQuiz() {
        introSection.classList.remove('active');
        quizSection.classList.add('active', 'fade-in');
        showQuestion();
    }

    function showQuestion() {
        const question = translations[currentLanguage].index.questions[currentQuestionIndex];
        questionText.textContent = question.question;
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(optionElement);
        });

        updateNavigation();

        // Show ad2 after question 4
        if (currentQuestionIndex === 4) {
            ad2.classList.remove('hidden');
            ad2.classList.add('fade-in');
        } else {
            ad2.classList.add('hidden');
        }
    }

    function selectOption(index) {
        const options = document.querySelectorAll('.option');
        options.forEach(option => option.classList.remove('selected'));
        options[index].classList.add('selected');
        answers[currentQuestionIndex] = index;
    }

    function updateNavigation() {
        prevBtn.disabled = currentQuestionIndex === 0;
        prevBtn.textContent = translations[currentLanguage].index.prevBtn;
        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.textContent = translations[currentLanguage].index.calculateBtn;
        } else {
            nextBtn.textContent = translations[currentLanguage].index.nextBtn;
        }
    }

    function showPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion();
        }
    }

    function showNextQuestion() {
        if (answers[currentQuestionIndex] !== undefined) {
            if (currentQuestionIndex < translations[currentLanguage].index.questions.length - 1) {
                currentQuestionIndex++;
                showQuestion();
            } else {
                calculateResult();
            }
        } else {
            alert(translations[currentLanguage].index.alertMessage);
        }
    }

    function calculateResult() {
        totalScore = answers.reduce((sum, answerIndex, questionIndex) => {
            return sum + translations[currentLanguage].index.questions[questionIndex].scores[answerIndex];
        }, 0);

        const maxScore = translations[currentLanguage].index.questions.length * 3;
        const percentage = Math.round((totalScore / maxScore) * 100);

        quizSection.classList.remove('active');
        resultSection.classList.add('active', 'fade-in');

        animateCircle(percentage);
        showAnalysis(percentage);
    }

    function animateCircle(percentage) {
        let currentPercentage = 0;
        const increment = percentage / 100;
        const timer = setInterval(() => {
            currentPercentage += increment;
            if (currentPercentage >= percentage) {
                currentPercentage = percentage;
                clearInterval(timer);
            }
            percentageElement.textContent = Math.round(currentPercentage) + '%';
            circle.style.background = `conic-gradient(#00ffff 0% ${currentPercentage}%, #333 ${currentPercentage}% 100%)`;
        }, 20);
    }

    function showAnalysis(percentage) {
        let analysisIndex = 0;
        let color = '';

        if (percentage <= 25) {
            analysisIndex = 0;
            color = '#00ff00';
        } else if (percentage <= 50) {
            analysisIndex = 1;
            color = '#ffff00';
        } else if (percentage <= 75) {
            analysisIndex = 2;
            color = '#ff8000';
        } else {
            analysisIndex = 3;
            color = '#ff0000';
        }

        const analysis = translations[currentLanguage].index.analyses[analysisIndex];
        analysisElement.innerHTML = `<p style="color: ${color};">${analysis}</p>`;
        analysisElement.classList.add('fade-in');
    }



    // Show tips after a delay
    setTimeout(() => {
        tipsSection.classList.add('active', 'fade-in');
    }, 3000);

    // Mobile popup functionality
    const mobilePopup = document.getElementById('mobile-popup');
    const closeBtn = document.getElementById('close-popup');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            mobilePopup.style.display = 'none';
        });
    }

    // Function to refresh quiz on language change
    window.refreshQuiz = function(newLang) {
        currentLanguage = newLang;
        if (quizSection.classList.contains('active')) {
            showQuestion(); // Refresh current question
            updateNavigation(); // Update buttons
        }
    };
});
