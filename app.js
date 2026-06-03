/* =============================================
   কুইজ অ্যাপ - মূল জাভাস্ক্রিপ্ট লজিক
   ============================================= */

// ===== Data Structure =====
const GIFT_CODES = {
    'CADET': 30,
    'SCC': 20
};

const QUIZ_DATA = {
    sports: {
        football: [
            {
                id: 1,
                set: 1,
                questions: [
                    {
                        question: '১. ফুটবল খেলার উৎপত্তি কোন দেশে ?',
                        type: 'mcq',
                        options: [
                            'ক. যুক্তরাষ্ট্র',
                            'খ. ব্রাজিল',
                            'গ. উরুগুয়ে',
                            'ঘ. ইংল্যান্ড'
                        ],
                        correctAnswer: 3
                    },
                    {
                        question: '२. ফিফা বিশ্বকাপ ২০२२ এ কয়টি দল অংশগ্রহণ করেছিল ?',
                        type: 'mcq',
                        options: [
                            'ক. ४६ টি',
                            'খ. २४ টি',
                            'গ. ३२ টি',
                            'ঘ. २८ টি'
                        ],
                        correctAnswer: 2
                    },
                    {
                        question: '३. লা লিগা কোন দেশের শীর্ষ ফুটবল লিগ ?',
                        type: 'mcq',
                        options: [
                            'ক. যুক্তরাষ্ট্র',
                            'খ. জার্মানি',
                            'গ. স্পেন',
                            'ঘ. ইংল্যান্ড'
                        ],
                        correctAnswer: 2
                    },
                    {
                        question: '४. १ম ফিফা বিশ্বকাপ কবে অনুষ্ঠিত হয় ?',
                        type: 'mcq',
                        options: [
                            'ক. १९३० সালে',
                            'খ. १९१६ সালে',
                            'গ. १९५२ সালে',
                            'ঘ. একটিও নয়'
                        ],
                        correctAnswer: 0
                    },
                    {
                        question: '५. কোপা আমেরিকায় সর্বাধিক বার চ্যাম্পিয়ন হয়েছে কোন দল ?',
                        type: 'mcq',
                        options: [
                            'ক. আর্জেন্টিনা',
                            'খ. ব্রাজিল',
                            'গ. উরুগুয়ে',
                            'ঘ. ফ্রান্স'
                        ],
                        correctAnswer: 0
                    }
                ]
            },
            {
                id: 2,
                set: 2,
                questions: [
                    {
                        question: '१. ফুটবলে হলুদ কার্ড কি নির্দেশ করে ?',
                        type: 'mcq',
                        options: [
                            'ক. মাঠ থেকে বহিষ্কার',
                            'খ. সতর্কবার্তা',
                            'গ. জরিমানা',
                            'ঘ. বিপদ সংকেত'
                        ],
                        correctAnswer: 1
                    },
                    {
                        question: '२. ফুটবলের সর্বোচ্চ নিয়ন্ত্রক সংস্থা কোনটি ?',
                        type: 'mcq',
                        options: [
                            'ক. BAFA',
                            'খ. BFF',
                            'গ. FIFA',
                            'ঘ. ICB'
                        ],
                        correctAnswer: 2
                    },
                    {
                        question: '३. ফিফা বিশ্বকাপ २०१८ এ চ্যাম্পিয়ন হয়েছে কোন দল ?',
                        type: 'mcq',
                        options: [
                            'ক. ফ্রান্স',
                            'খ. আর্জেন্টিনা',
                            'গ. জার্মানি',
                            'ঘ. উরুগুয়ে'
                        ],
                        correctAnswer: 0
                    },
                    {
                        question: '४. ফিফা বিশ্বকাপ २०२२ এ ३য় স্থান লাভ করেছে কোন দল ?',
                        type: 'mcq',
                        options: [
                            'ক. সৌদি আরব',
                            'খ. আর্জেন্টিনা',
                            'গ. ফ্রান্স',
                            'ঘ. ক্রোয়েশিয়া'
                        ],
                        correctAnswer: 3
                    },
                    {
                        question: '५. ফিফা বিশ্বকাপ २०२६ এ কয়টি দল অংশগ্রহণ করবে ?',
                        type: 'mcq',
                        options: [
                            'ক. ४८ টি',
                            'খ. ४६ টি',
                            'গ. ३५ টি',
                            'ঘ. ३२ টি'
                        ],
                        correctAnswer: 0
                    }
                ]
            },
            {
                id: 3,
                set: 3,
                questions: [
                    {
                        question: '१. ব্রাজিল কয়বার কোপা আমেরিকা জিতেছে ?',
                        type: 'text',
                        correctAnswer: '९ বার'
                    },
                    {
                        question: '२. বুন্দেসলিগা কোন দেশের ফুটবল লিগ ?',
                        type: 'text',
                        correctAnswer: 'জার্মানি'
                    },
                    {
                        question: '३. কোপা আমেরিকায় সর্বাধিক বার চ্যাম্পিয়ন হয়েছে কোন দল ?',
                        type: 'text',
                        correctAnswer: 'আর্জেন্টিনা'
                    },
                    {
                        question: '४. ফুটবল মাঠের মাঝের বৃত্তকে কি বলে ?',
                        type: 'text',
                        correctAnswer: 'সেন্টার সার্কেল'
                    },
                    {
                        question: '५. BFF এর পূর্ণরূপ কোনটি?',
                        type: 'text',
                        correctAnswer: 'Bangladesh Football Federation'
                    }
                ]
            },
            {
                id: 4,
                set: 4,
                questions: [
                    {
                        question: '१. ফিফা বিশ্বকাপ २०२२ এর সেরা খেলোয়াড় কে?',
                        type: 'text',
                        correctAnswer: 'লিওনেল মেসি'
                    },
                    {
                        question: '२. ফিফা বিশ্বকাপ २०२६ কোথায় অনুষ্ঠিত হবে?',
                        type: 'text',
                        correctAnswer: 'যুক্তরাষ্ট্র, কানাডা, মেক্সিকো'
                    },
                    {
                        question: '३. १ম ফিফা বিশ্বকাপ কোথায় অনুষ্ঠিত হয়?',
                        type: 'text',
                        correctAnswer: 'উরুগুয়ে'
                    },
                    {
                        question: '४. ফিফা বিশ্বকাপ কত বছর পর পর অনুষ্ঠিত হয়?',
                        type: 'text',
                        correctAnswer: '४ বছর পর পর'
                    },
                    {
                        question: '५. ফিফা বিশ্বকাপে সর্বাধিকবার শিরোপা জিতেছে কোন দেশ?',
                        type: 'text',
                        correctAnswer: 'ব্রাজিল'
                    }
                ]
            },
            {
                id: 5,
                set: 5,
                questions: [
                    {
                        question: '१. ফিফা বিশ্বকাপে আর্জেন্টিনা কতবার চ্যাম্পিয়ন হয়েছে?',
                        type: 'text',
                        correctAnswer: '४ বার'
                    },
                    {
                        question: '२. ব্রাজিল সর্বশেষ বিশ্বকাপ জিতেছে কত সালে?',
                        type: 'text',
                        correctAnswer: '२००२ সালে'
                    },
                    {
                        question: '३. বিশ্বকাপে গোল্ডেন বুট পুরস্কারটি কাকে দেওয়া হয়?',
                        type: 'text',
                        correctAnswer: 'সর্বাধিক গোলদাতা'
                    },
                    {
                        question: '४. ফিফা বিশ্বকাপে ফ্রান্স কতবার চ্যাম্পিয়ন হয়েছে?',
                        type: 'text',
                        correctAnswer: '२ বার'
                    },
                    {
                        question: '५. ফুটবল ম্যাচে মাঠে কতজন রেফারি থাকে?',
                        type: 'text',
                        correctAnswer: '३ জন'
                    }
                ]
            }
        ]
    }
};

// ===== Global State =====
let currentUser = null;
let currentQuiz = null;
let currentQuestionIndex = 0;
let selectedAnswer = null;
let timeLeft = 13;
let timerInterval = null;
let quizStarted = false;
let isPlayAgainMode = false;
let quizResults = {
    correct: 0,
    wrong: 0,
    skipped: 0,
    timeout: 0,
    coinEarned: 0
};

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    loadUserData();
    if (currentUser) {
        showApp();
        loadHomePage();
    } else {
        showAuthPage();
    }
}

// ===== Authentication Functions =====
function handleLogin(event) {
    event.preventDefault();
    const name = document.getElementById('loginName').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!name || !password) {
        showAlert('দয়া করে সকল ফিল্ড পূরণ করুন!');
        return;
    }

    if (password.length !== 4 || isNaN(password)) {
        showAlert('পাসওয়ার্ড ঠিক ৪টি অঙ্ক হতে হবে!');
        return;
    }

    const users = JSON.parse(localStorage.getItem('quizUsers')) || {};
    if (!users[name]) {
        showAlert('এই ব্যবহারকারী বিদ্যমান নেই!');
        return;
    }

    if (users[name].password !== password) {
        showAlert('পাসওয়ার্ড সঠিক নয়!');
        return;
    }

    currentUser = users[name];
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    document.getElementById('loginForm').reset();
    showApp();
    loadHomePage();
}

function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value.trim();
    const password = document.getElementById('registerPassword').value;
    const passwordConfirm = document.getElementById('registerPasswordConfirm').value;

    // Validation
    if (name.length < 4 || name.length > 20) {
        document.getElementById('nameError').textContent = 'নাম ৪-২০ অক্ষরের মধ্যে হতে হবে!';
        return;
    }
    document.getElementById('nameError').textContent = '';

    if (password.length !== 4 || isNaN(password)) {
        document.getElementById('passwordError').textContent = 'পাসওয়ার্ড ঠিক ৪টি অঙ্ক হতে হবে!';
        return;
    }
    document.getElementById('passwordError').textContent = '';

    if (password !== passwordConfirm) {
        document.getElementById('confirmError').textContent = 'পাসওয়ার্ড মেলে না!';
        return;
    }
    document.getElementById('confirmError').textContent = '';

    const users = JSON.parse(localStorage.getItem('quizUsers')) || {};
    if (users[name]) {
        showAlert('এই নামের ব্যবহারকারী ইতিমধ্যে বিদ্যমান!');
        return;
    }

    const newUser = {
        name,
        password,
        coins: 10,
        createdAt: new Date().toISOString(),
        totalQuizPlayed: 0,
        usedGiftCodes: [],
        quizProgress: {
            sports: {
                football: {
                    completed: [false, false, false, false, false]
                }
            }
        }
    };

    users[name] = newUser;
    localStorage.setItem('quizUsers', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    document.getElementById('registerForm').reset();
    showAlert('অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!');
    setTimeout(() => {
        showApp();
        loadHomePage();
    }, 500);
}

function switchPage(pageId) {
    document.querySelectorAll('.auth-page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// ===== User Data Management =====
function loadUserData() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
        currentUser = JSON.parse(userData);
    }
}

function saveUserData() {
    if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        const users = JSON.parse(localStorage.getItem('quizUsers')) || {};
        users[currentUser.name] = currentUser;
        localStorage.setItem('quizUsers', JSON.stringify(users));
        updateCoinDisplay();
    }
}

function updateCoinDisplay() {
    document.getElementById('coinBalance').textContent = currentUser.coins;
}

// ===== Page Navigation =====
function showAuthPage() {
    document.getElementById('authContainer').style.display = 'flex';
    document.getElementById('appContainer').style.display = 'none';
}

function showApp() {
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('appContainer').style.display = 'flex';
    updateCoinDisplay();
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    if (pageId === 'myAccount') {
        loadAccountPage();
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    document.body.classList.toggle('sidebar-open');
}

// ===== Home Page =====
function loadHomePage() {
    showPage('homePage');
    updateOverallProgress();
    loadFootballUnits();
}

function updateOverallProgress() {
    const totalSets = 5;
    let completedSets = 0;
    
    currentUser.quizProgress.sports.football.completed.forEach(status => {
        if (status) completedSets++;
    });

    const percentage = Math.round((completedSets / totalSets) * 100);
    document.getElementById('overallProgressFill').style.width = percentage + '%';
    document.getElementById('overallPercentage').textContent = percentage + '%';

    // Football category progress
    document.getElementById('footballProgressFill').style.width = percentage + '%';
    document.getElementById('footballPercentage').textContent = percentage + '%';
}

function loadFootballUnits() {
    const container = document.getElementById('footballUnits');
    container.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const unitData = QUIZ_DATA.sports.football[i];
        const isCompleted = currentUser.quizProgress.sports.football.completed[i];
        const completionPercent = isCompleted ? 100 : 0;

        const unitCard = document.createElement('div');
        unitCard.className = 'unit-card' + (isCompleted ? ' completed' : '');
        unitCard.innerHTML = `
            <h4>ফুটবল সেট ০${i + 1}</h4>
            <div class="unit-info">
                <span class="entry-fee">প্রবেশ ফি: 5 🪙</span>
                <span class="unit-status">${completionPercent}%</span>
            </div>
            <div class="unit-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${completionPercent}%"></div>
                </div>
            </div>
            <button class="unit-button" onclick="startQuizSet(${i}, ${isCompleted})" ${currentUser.coins < 5 && !isCompleted ? 'disabled' : ''}>
                ${isCompleted ? 'আবার খেলুন' : 'খেলুন'}
            </button>
        `;
        container.appendChild(unitCard);
    }
}

// ===== Quiz Functions =====
function startQuizSet(setIndex, isPlayAgain = false) {
    const entryFee = 5;

    if (!isPlayAgain && currentUser.coins < entryFee) {
        showAlert('কয়েন অপর্যাপ্ত! আপনার কাছে ' + currentUser.coins + ' 🪙 আছে।');
        return;
    }

    // Show quiz rules modal
    isPlayAgainMode = isPlayAgain;
    currentQuiz = {
        setIndex: setIndex,
        questions: QUIZ_DATA.sports.football[setIndex].questions,
        entryFee: isPlayAgain ? 0 : entryFee
    };

    document.getElementById('rulesQuestions').textContent = currentQuiz.questions.length;
    document.getElementById('rulesEntryFee').textContent = (isPlayAgain ? 0 : entryFee) + ' 🪙';

    openModal('quizRulesModal');
}

function startQuiz() {
    closeModal('quizRulesModal');
    
    // Deduct entry fee if not play again
    if (!isPlayAgainMode) {
        currentUser.coins -= currentQuiz.entryFee;
        saveUserData();
    }

    currentUser.totalQuizPlayed++;
    currentQuestionIndex = 0;
    selectedAnswer = null;
    quizStarted = true;
    
    // Reset results
    quizResults = {
        correct: 0,
        wrong: 0,
        skipped: 0,
        timeout: 0,
        coinEarned: 0
    };

    showPage('quizPage');
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    
    // Update question counter
    document.getElementById('questionCounter').textContent = 
        (currentQuestionIndex + 1) + '/' + currentQuiz.questions.length;

    // Update question text
    document.getElementById('questionText').textContent = question.question;

    // Clear selected answer
    selectedAnswer = null;
    document.getElementById('submitBtn').disabled = true;

    // Load options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    if (question.type === 'mcq') {
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option;
            button.onclick = () => selectOption(index);
            optionsContainer.appendChild(button);
        });
    } else if (question.type === 'text') {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'modal-input';
        input.placeholder = 'উত্তর লিখুন...';
        input.style.marginBottom = '10px';
        input.onchange = (e) => {
            selectedAnswer = e.target.value.trim().toLowerCase();
            document.getElementById('submitBtn').disabled = false;
        };
        optionsContainer.appendChild(input);
    }

    resetTimer();
}

function selectOption(index) {
    selectedAnswer = index;
    document.querySelectorAll('.option-button').forEach((btn, idx) => {
        btn.classList.toggle('selected', idx === index);
    });
    document.getElementById('submitBtn').disabled = false;
}

function startTimer() {
    timeLeft = 13;
    updateTimerDisplay();

    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeoutQuestion();
        }
    }, 1000);
}

function resetTimer() {
    if (timerInterval) clearInterval(timerInterval);
    startTimer();
}

function updateTimerDisplay() {
    const percentage = (timeLeft / 13) * 100;
    document.getElementById('timerFill').style.width = percentage + '%';
    document.getElementById('timerText').textContent = '⏳ ' + timeLeft + 's';

    if (timeLeft <= 3) {
        document.getElementById('timerFill').style.background = 
            'linear-gradient(90deg, var(--danger-color) 0%, #dc2626 100%)';
    }
}

function submitAnswer() {
    if (selectedAnswer === null && selectedAnswer !== 0) {
        showAlert('দয়া করে একটি উত্তর নির্বাচন করুন!');
        return;
    }

    clearInterval(timerInterval);
    const question = currentQuiz.questions[currentQuestionIndex];
    let isCorrect = false;

    if (question.type === 'mcq') {
        isCorrect = selectedAnswer === question.correctAnswer;
    } else if (question.type === 'text') {
        const correctAnswer = question.correctAnswer.toLowerCase();
        isCorrect = selectedAnswer === correctAnswer;
    }

    if (isCorrect) {
        quizResults.correct++;
        quizResults.coinEarned += 4;
        showOptionResult('correct');
    } else {
        quizResults.wrong++;
        quizResults.coinEarned -= 1;
        showOptionResult('wrong');
    }

    moveToNextQuestion();
}

function skipQuestion() {
    clearInterval(timerInterval);
    quizResults.skipped++;
    moveToNextQuestion();
}

function timeoutQuestion() {
    quizResults.timeout++;
    moveToNextQuestion();
}

function showOptionResult(result) {
    const question = currentQuiz.questions[currentQuestionIndex];
    const optionsContainer = document.getElementById('optionsContainer');

    if (question.type === 'mcq') {
        document.querySelectorAll('.option-button').forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === question.correctAnswer) {
                btn.classList.add('correct');
            } else if (idx === selectedAnswer && result === 'wrong') {
                btn.classList.add('wrong');
            }
        });
    }

    document.getElementById('submitBtn').disabled = true;
}

function moveToNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuiz.questions.length) {
        setTimeout(() => {
            loadQuestion();
            startTimer();
        }, 1500);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    quizStarted = false;

    // Apply coin changes only in normal mode
    if (!isPlayAgainMode) {
        currentUser.coins += quizResults.coinEarned;
        if (currentUser.coins < 0) currentUser.coins = 0;
        
        // Mark quiz as completed
        currentUser.quizProgress.sports.football.completed[currentQuiz.setIndex] = true;
    }

    saveUserData();
    showResultPage();
}

function exitQuiz() {
    if (quizStarted) {
        if (confirm('কুইজ ছেড়ে দিতে চান? আপনার অগ্রগতি সংরক্ষিত হবে না।')) {
            clearInterval(timerInterval);
            quizStarted = false;
            loadHomePage();
        }
    } else {
        loadHomePage();
    }
}

// ===== Result Page =====
function showResultPage() {
    showPage('resultPage');

    const totalQuestions = currentQuiz.questions.length;
    const percentage = Math.round((quizResults.correct / totalQuestions) * 100);

    document.getElementById('scorePercentage').textContent = percentage + '%';
    document.getElementById('correctCount').textContent = quizResults.correct;
    document.getElementById('wrongCount').textContent = quizResults.wrong;
    document.getElementById('skippedCount').textContent = quizResults.skipped;
    document.getElementById('timeoutCount').textContent = quizResults.timeout;
    document.getElementById('earnedCoins').textContent = quizResults.coinEarned + ' 🪙';

    // Show play again button
    document.getElementById('playAgainBtn').style.display = 'inline-block';
}

function returnToHome() {
    loadHomePage();
}

function playAgain() {
    startQuizSet(currentQuiz.setIndex, true);
}

// ===== Account Page =====
function loadAccountPage() {
    const createdDate = new Date(currentUser.createdAt);
    const dateStr = createdDate.toLocaleDateString('bn-BD');

    document.getElementById('accountName').textContent = currentUser.name;
    document.getElementById('creationDate').textContent = dateStr;
    document.getElementById('totalQuizPlayed').textContent = currentUser.totalQuizPlayed;
}

function showChangeNameModal() {
    document.getElementById('newNameInput').value = '';
    openModal('changeNameModal');
}

function showChangePasswordModal() {
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    document.getElementById('passwordChangeError').textContent = '';
    openModal('changePasswordModal');
}

function saveName() {
    const newName = document.getElementById('newNameInput').value.trim();

    if (newName.length < 4 || newName.length > 20) {
        showAlert('নাম ৪-२० অক্ষরের মধ্যে হতে হবে!');
        return;
    }

    const users = JSON.parse(localStorage.getItem('quizUsers')) || {};
    if (users[newName] && newName !== currentUser.name) {
        showAlert('এই নামের ব্যবহারকারী ইতিমধ্যে বিদ্যমান!');
        return;
    }

    // Update user data
    users[newName] = currentUser;
    delete users[currentUser.name];
    localStorage.setItem('quizUsers', JSON.stringify(users));

    currentUser.name = newName;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    closeModal('changeNameModal');
    loadAccountPage();
    showAlert('নাম পরিবর্তন সফল!');
}

function savePassword() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorEl = document.getElementById('passwordChangeError');
    errorEl.textContent = '';

    if (currentPassword !== currentUser.password) {
        errorEl.textContent = 'বর্তমান পাসওয়ার্ড সঠিক নয়!';
        return;
    }

    if (newPassword.length !== 4 || isNaN(newPassword)) {
        errorEl.textContent = 'নতুন পাসওয়ার্ড ঠিক ४ অঙ্ক হতে হবে!';
        return;
    }

    if (newPassword !== confirmPassword) {
        errorEl.textContent = 'পাসওয়ার্ড মেলে না!';
        return;
    }

    currentUser.password = newPassword;
    saveUserData();
    closeModal('changePasswordModal');
    showAlert('পাসওয়ার্ড পরিবর্তন সফল!');
}

// ===== Gift Box =====
function validateGiftCode() {
    const code = document.getElementById('giftCode').value.toUpperCase().trim();
    const resultDiv = document.getElementById('giftResult');

    if (!code) {
        showAlert('দয়া করে কোড লিখুন!');
        return;
    }

    if (currentUser.usedGiftCodes.includes(code)) {
        showAlert('আপনি ইতিমধ্যে এই কোড ব্যবহার করেছেন!');
        document.getElementById('giftCode').value = '';
        resultDiv.style.display = 'none';
        return;
    }

    if (!GIFT_CODES[code]) {
        showAlert('অবৈধ কোড! দয়া করে সঠিক কোড লিখুন।');
        document.getElementById('giftCode').value = '';
        resultDiv.style.display = 'none';
        return;
    }

    const reward = GIFT_CODES[code];
    document.getElementById('giftRewardText').textContent = reward + ' 🪙';
    resultDiv.style.display = 'flex';
    resultDiv.dataset.code = code;
    resultDiv.dataset.reward = reward;
}

function collectGift() {
    const resultDiv = document.getElementById('giftResult');
    const code = resultDiv.dataset.code;
    const reward = parseInt(resultDiv.dataset.reward);

    currentUser.coins += reward;
    currentUser.usedGiftCodes.push(code);
    saveUserData();

    showAlert(reward + ' 🪙 যোগ করা হয়েছে!');
    document.getElementById('giftCode').value = '';
    resultDiv.style.display = 'none';
}

// ===== Modal Functions =====
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
}

function showAlert(message) {
    document.getElementById('alertMessage').textContent = message;
    openModal('alertModal');
}

// ===== Logout =====
function logout() {
    if (confirm('লগ আউট করতে চান?')) {
        currentUser = null;
        localStorage.removeItem('currentUser');
        document.body.classList.remove('sidebar-open');
        document.getElementById('sidebar').classList.remove('active');
        showAuthPage();
        switchPage('loginPage');
    }
}

// ===== Utility Functions =====
document.addEventListener('click', (e) => {
    const modal = e.target;
    if (modal.classList && modal.classList.contains('modal') && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});
