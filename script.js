// Slang dictionary
const slangDictionary = {
  'mid': {
    definition: 'Mediocre or average.',
    example: '"That movie was mid, not worth watching."',
    context: 'Used to describe something that\'s just okay, not good or bad'
  },
  'slay': {
    definition: 'To succeed or do something exceptionally well.',
    example: '"She slayed that presentation!"',
    context: 'Originally from drag culture, now used to praise excellence'
  },
  'bussin\'': {
    definition: 'Really good, often referring to food.',
    example: '"This pizza is bussin\', no cap!"',
    context: 'Used to express strong approval or satisfaction'
  },
  'cooking': {
    definition: 'Is doing so well / Is done for',
    example: '"He\'s cooking in the kitchen!" or "That plan is cooked."',
    context: 'Can mean either succeeding or failing depending on context'
  },
  'aura farm': {
    definition: 'Someone\'s vibe or presence; intentionally performing cool, stylish, or impressive actions',
    example: '"He\'s got that aura farm energy."',
    context: 'Refers to someone\'s overall presence and how they carry themselves'
  },
  'sigma': {
    definition: 'An independent, lone-wolf type of guy.',
    example: '"He\'s a sigma male, does his own thing."',
    context: 'Describes someone who is independent and doesn\'t follow the crowd'
  },
  'skibidi': {
    definition: 'Cool, strange, or related to the popular "Skibidi Toilet" series.',
    example: '"That\'s so skibidi!"',
    context: 'Can mean something is cool or weird in a funny way'
  },
  'sending me': {
    definition: 'Hilarious or overwhelming emotional reaction, like intense laughter',
    example: '"That meme is sending me!"',
    context: 'Used when something is so funny you can\'t stop laughing'
  },
  'cap': {
    definition: 'A lie / Not telling the truth',
    example: '"You said you would come, but you didn\'t. That\'s cap!"',
    context: 'Often used to call out someone who is being dishonest'
  },
  'no cap': {
    definition: 'No lie, for real / Telling the truth',
    example: '"I made that on my own, no cap!"',
    context: 'Used to emphasize that you\'re being serious and honest'
  },
  'rizz': {
    definition: 'Charisma, skill in flirting.',
    example: '"He\'s got mad rizz with the ladies."',
    context: 'Describes someone who is charming and smooth'
  },
  'mewing': {
    definition: 'A jawline-defining facial exercise, also used to mean looking good.',
    example: '"He\'s mewing, looking sharp today."',
    context: 'Originally a fitness trend, now means looking attractive'
  },
  'touch grass': {
    definition: 'Telling someone to go outside because they\'re too online.',
    example: '"Bro, you need to touch grass, you\'ve been on your phone all day."',
    context: 'A playful way to tell someone to get off the internet'
  },
  'glaze': {
    definition: 'Giving excessive, cringey praise.',
    example: '"Stop glazing him, he\'s not that great."',
    context: 'Used when someone is overly praising someone in an annoying way'
  },
  'delulu': {
    definition: 'Short for delusional; unrealistic or lost in fantasy.',
    example: '"That plan is delulu, it\'ll never work."',
    context: 'Describes someone or something that is unrealistic or delusional'
  },
  'bet': {
    definition: 'Agreement, "okay," or "sure".',
    example: '"Want to go to the movies?" "Bet!"',
    context: 'A short, casual way to say yes or show agreement'
  },
  'ghosting': {
    definition: 'Abruptly ending communication with someone.',
    example: '"He ghosted me after our first date."',
    context: 'Common in dating but can happen in any communication'
  },
  'goat': {
    definition: 'Greatest of All Time.',
    example: '"Lebron is the GOAT of basketball."',
    context: 'Used to describe someone or something as the best'
  },
  'drip': {
    definition: 'Cool style or fashionable outfit.',
    example: '"Check out my new drip!"',
    context: 'Describes fashion sense and style'
  },
  'ick': {
    definition: 'A feeling of sudden repulsion towards someone.',
    example: '"He gave me the ick when he did that."',
    context: 'Used when someone suddenly becomes unattractive or annoying'
  },
  'opp': {
    definition: 'Opponents or enemies',
    example: '"Stay away from my opps."',
    context: 'Short for opponent or rival'
  },
  'spill the tea': {
    definition: 'Share gossip or listen to gossip.',
    example: '"Spill the tea! What happened?"',
    context: 'An invitation to share interesting or juicy information'
  },
  'sus': {
    definition: 'Suspicious or suspect.',
    example: '"That person seems sus, let\'s go somewhere else."',
    context: 'Popularized by Among Us game, now widely used'
  },
  'big w/l': {
    definition: 'Win / Loss.',
    example: '"That\'s a big W for the team!" or "That\'s a big L for him."',
    context: 'Used to describe significant victories or defeats'
  }
};

// Quiz Sets - 3 complete sets of 5 questions each
const quizSets = [
  // SET 1
  [
    {
      type: 'Translate to Vibe Slang',
      question: '"That meal was delicious"',
      options: ['That meal was mid', 'That meal was cooked', 'That meal was bussing', 'That meal was skibidi'],
      correct: 2
    },
    {
      type: 'Finish the Sentence',
      question: '"She absolutely crushed the presentation, she really ___."',
      options: ['slayed', 'did well', 'was capping', 'is sick'],
      correct: 0
    },
    {
      type: 'Guess the Intent',
      question: '"It\'s giving..."',
      options: ['Wanting to give something', 'Reminds me of..', 'Wanting to end the conversation', 'Asking a question'],
      correct: 1
    },
    {
      type: 'Choose the least cringe option to reply',
      question: '"This project is actually difficult"',
      options: ['Skill issue', 'This challenges our intellect.', 'Indeed, the cognitive load is significant.', 'That is so skibidi'],
      correct: 0
    },
    {
      type: 'Pick the right context you would say this in',
      question: '"THAT\'S SENDING ME!!!"',
      options: ['When I\'m getting sent away', 'When I\'m laughing', 'When I\'m hurt', 'When I\'m complimenting someone'],
      correct: 1
    }
  ],
  // SET 2
  [
    {
      type: 'Translate to Vibe Slang',
      question: '"The situation is getting serious"',
      options: ['This is getting awkward', 'This is getting real', 'This is not that deep', 'This is cooking'],
      correct: 1
    },
    {
      type: 'Finish the Sentence',
      question: '"Everyone hyped up the event, but when we got there it was ___."',
      options: ['boring', 'lame', 'bussing', 'mid'],
      correct: 3
    },
    {
      type: 'Guess the Intent',
      question: '"Say less"',
      options: ['Disagreeing with you', 'Requesting to stop talking', 'Showing confusion', 'Agreeing and acknowledging'],
      correct: 3
    },
    {
      type: 'Choose the least cringe option to reply',
      question: '"I didn\'t study at all for the test."',
      options: ['Slay honestly', 'That\'s bussing', 'Yeah, you\'re cooked.', 'That\'s so skibidi toilet'],
      correct: 2
    },
    {
      type: 'Pick the right context you would say this in',
      question: '"I\'m cooked"',
      options: ['When I\'m hungry', 'When I\'m annoyed', 'When I\'m doomed (messed up)', 'When I\'m doing well'],
      correct: 2
    }
  ],
  // SET 3
  [
    {
      type: 'Translate to Vibe Slang',
      question: '"Relay stop overthinking it"',
      options: ['Its not that deep', 'Its not like that', 'It isn\'t like that', 'cooked'],
      correct: 0
    },
    {
      type: 'Finish the Sentence',
      question: '"I just started my assignment that\'s due tomorrow, I\'m ___."',
      options: ['stressed', 'cooked', 'frustrated', 'cringe'],
      correct: 1
    },
    {
      type: 'Guess the Intent',
      question: '"Its not that deep"',
      options: ['Its quite shallow', 'Its interesting', 'They think you\'re overthinking it', 'They think you\'re annoying'],
      correct: 2
    },
    {
      type: 'Choose the least cringe option to reply',
      question: '"This assignment is boring"',
      options: ['Yeah its bussing', 'That\'s giving slay', 'It is so alpha', 'Yeah its mid'],
      correct: 3
    },
    {
      type: 'Pick the right context you would say this in',
      question: '"He\'s cooking"',
      options: ['When he is doomed (messed up)', 'When he is cooking a meal', 'When he is doing so well', 'When he is upset'],
      correct: 2
    }
  ]
];

// Global state
let currentQuiz = null;
let currentQuizSet = 0;
let currentQuestion = 0;
let score = 0;
let answerSelected = false;
let answeredCorrectly = [];

// Page navigation
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  
  // Show selected page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }
  
  // Load next quiz set when entering quiz page
  if (pageId === 'quizPage') {
    if (currentQuiz === null) {
      // Reset for new quiz set
      currentQuestion = 0;
      score = 0;
      answerSelected = false;
      answeredCorrectly = [];
    }
  }
  
  // Reset quiz if going away from quiz page
  if (pageId !== 'quizPage') {
    currentQuiz = null;
    currentQuestion = 0;
    score = 0;
  }
  
  // Clear search results if leaving search page
  if (pageId !== 'searchPage') {
    document.getElementById('searchResults').innerHTML = '';
    document.getElementById('slangSearch').value = '';
  }
  
  // Clear slang detail if leaving learn page
  if (pageId !== 'learnPage') {
    const detail = document.getElementById('slangDetail');
    if (detail) {
      detail.classList.remove('active');
      detail.innerHTML = '';
    }
  }
}

// Initialize streak from localStorage
function initStreak() {
  const lastVisit = localStorage.getItem('lastVisit');
  const currentStreak = parseInt(localStorage.getItem('streak') || '0');
  const today = new Date().toDateString();
  
  if (lastVisit === today) {
    // Already visited today, keep streak
    document.getElementById('streakCount').textContent = currentStreak;
  } else if (lastVisit === new Date(Date.now() - 86400000).toDateString()) {
    // Visited yesterday, increment streak
    const newStreak = currentStreak + 1;
    localStorage.setItem('streak', newStreak);
    localStorage.setItem('lastVisit', today);
    document.getElementById('streakCount').textContent = newStreak;
  } else {
    // Streak broken, reset
    localStorage.setItem('streak', '1');
    localStorage.setItem('lastVisit', today);
    document.getElementById('streakCount').textContent = '1';
  }
}

// Search functionality
function searchSlang() {
  const searchTerm = document.getElementById('slangSearch').value.toLowerCase().trim();
  const resultsDiv = document.getElementById('searchResults');
  
  if (!searchTerm) {
    resultsDiv.innerHTML = '<p style="text-align: center; color: #666;">Please enter a slang term to search.</p>';
    return;
  }
  
  const slang = slangDictionary[searchTerm];
  
  if (slang) {
    resultsDiv.innerHTML = `
      <div class="result-card">
        <h3>${searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)}</h3>
        <div class="definition"><strong>Definition:</strong> ${slang.definition}</div>
        <div class="example"><strong>Example:</strong> ${slang.example}</div>
        ${slang.context ? `<div class="example" style="margin-top: 0.5rem;"><strong>Context:</strong> ${slang.context}</div>` : ''}
      </div>
    `;
  } else {
    resultsDiv.innerHTML = `
      <div class="result-card">
        <p style="color: #666;">Sorry, we couldn't find "${searchTerm}" in our dictionary. Try another term or check the Learn page for available terms!</p>
      </div>
    `;
  }
}

// Handle Enter key in search
function handleSearch(event) {
  if (event.key === 'Enter') {
    searchSlang();
  }
}

// Quiz functionality
function startQuiz() {
  currentQuiz = [...quizSets[currentQuizSet]];
  currentQuestion = 0;
  score = 0;
  answerSelected = false;
  answeredCorrectly = [];
  
  // Update quiz set display
  const setNumberEl = document.getElementById('quizSetNumber');
  if (setNumberEl) {
    setNumberEl.textContent = currentQuizSet + 1;
  }
  
  updateScoreTracker();
  updateProgressSidebar();
  loadQuestion();
}

function updateProgressSidebar() {
  const progressList = document.getElementById('quizProgressList');
  const sidebar = document.getElementById('quizSidebar');
  if (!progressList || !sidebar) return;
  
  if (!currentQuiz || currentQuiz.length === 0) {
    progressList.innerHTML = '';
    sidebar.classList.remove('active');
    return;
  }
  
  sidebar.classList.add('active');
  
  let html = '';
  for (let i = 0; i < currentQuiz.length; i++) {
    let status = '';
    let icon = '🔒'; // Lock icon
    let itemClass = 'locked';
    let clickable = '';
    
    if (i < currentQuestion) {
      // Completed questions
      status = 'completed';
      icon = answeredCorrectly[i] ? '✅' : '❌';
      itemClass = answeredCorrectly[i] ? 'completed' : 'incorrect';
      clickable = `onclick="goToQuestion(${i})" style="cursor: pointer;"`;
    } else if (i === currentQuestion) {
      // Current question
      status = 'current';
      icon = '🔓'; // Unlocked icon
      itemClass = 'current';
    } else {
      // Locked questions
      status = 'locked';
      icon = '🔒'; // Lock icon
      itemClass = 'locked';
    }
    
    html += `
      <div class="quiz-progress-item ${itemClass}" ${clickable}>
        <span class="quiz-progress-icon">${icon}</span>
        <span class="quiz-progress-text">Question ${i + 1}</span>
      </div>
    `;
  }
  
  progressList.innerHTML = html;
}

function goToQuestion(questionIndex) {
  if (questionIndex < currentQuestion) {
    currentQuestion = questionIndex;
    answerSelected = false;
    loadQuestion();
  }
}

function updateScoreTracker() {
  const scoreTracker = document.getElementById('quizScoreTracker');
  if (!scoreTracker) return;
  
  if (currentQuiz && currentQuiz.length > 0) {
    const totalQuestions = currentQuiz.length;
    const percentage = totalQuestions > 0 ? Math.round((currentQuestion / totalQuestions) * 100) : 0;
    scoreTracker.innerHTML = `
      <div class="score-text">Progress: ${currentQuestion}/${totalQuestions}</div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${percentage}%"></div>
      </div>
      <div style="font-size: 0.9rem; opacity: 0.9; margin-top: 0.5rem;">${percentage}%</div>
    `;
    scoreTracker.classList.add('active');
  } else {
    scoreTracker.classList.remove('active');
  }
}

function loadQuestion() {
  const container = document.getElementById('quizContainer');
  
  // Reset answer selected flag for new question
  answerSelected = false;
  
  if (currentQuestion >= currentQuiz.length) {
    // Quiz complete - determine message based on score
    const messages = {
      0: "The aura is gone...",
      1: "You're not cooked, but the stove is on",
      2: "You're not cooked, but the stove is on",
      3: "You're guessing, but with confidence",
      4: "You ate… but left a few crumbs.",
      5: "WHAT COMES AFTER 7?!?!?",
    };
    
    // Determine image based on score
    const images = {
      0: "qr0.jpg",
      1: "qr1.jpg",
      2: "qr1.jpg",
      3: "qr2.webp",
      4: "qr3.jpeg",
      5: "qr4.png",
    };
    
    const message = messages[score] || "Quiz Complete! 🎉";
    const resultImage = images[score] || "qr1.jpeg";
    
    // Determine if there are more quizzes available
    const hasNextQuiz = currentQuizSet < quizSets.length - 1;
    
    let nextQuizButton = '';
    if (hasNextQuiz) {
      nextQuizButton = `<button class="btn btn-secondary" onclick="nextQuiz()" style="margin-top: 1rem; margin-left: 0.5rem;">Next Quiz</button>`;
    }
    
    container.innerHTML = `
      <div class="quiz-result">
        <h2>${message}</h2>
        <div class="quiz-result-score">${score} / ${currentQuiz.length}</div>
        <img src="${resultImage}" alt="Result" class="quiz-result-image">
        <button class="btn btn-primary" onclick="startQuiz()" style="margin-top: 1rem;">Try Again</button>
        ${nextQuizButton}
        <button class="btn btn-tertiary" onclick="showPage('homePage')" style="margin-top: 1rem; margin-left: 0.5rem;">Back to Home</button>
      </div>
    `;
    // Keep score tracker visible at the end
    updateScoreTracker();
    return;
  }
  
  const question = currentQuiz[currentQuestion];
  const optionsHtml = question.options.map((option, index) => 
    `<div class="quiz-option" onclick="selectAnswer(${index})">${option}</div>`
  ).join('');
  
  container.innerHTML = `
    <div class="quiz-question">
      <h3>Question ${currentQuestion + 1} of ${currentQuiz.length}</h3>
      <p class="question-topic">Topic: ${question.type}</p>
      <p style="font-size: 1.2rem; margin-bottom: 1rem;">${question.question}</p>
      <div class="quiz-options">
        ${optionsHtml}
      </div>
    </div>
  `;
  
  // Update score tracker and progress sidebar
  updateScoreTracker();
  updateProgressSidebar();
}

function nextQuiz() {
  currentQuizSet++;
  if (currentQuizSet < quizSets.length) {
    startQuiz();
  }
}

function selectAnswer(selectedIndex) {
  // Prevent multiple selections
  if (answerSelected) {
    return;
  }
  
  answerSelected = true;
  const question = currentQuiz[currentQuestion];
  const options = document.querySelectorAll('.quiz-option');
  
  // Disable all options
  options.forEach(option => {
    option.style.pointerEvents = 'none';
    option.style.cursor = 'default';
  });
  
  // Mark correct/incorrect
  options[question.correct].classList.add('correct');
  if (selectedIndex !== question.correct) {
    options[selectedIndex].classList.add('incorrect');
    answeredCorrectly.push(false);
  } else {
    score++;
    answeredCorrectly.push(true);
  }
  
  // Update score tracker and progress sidebar immediately
  updateScoreTracker();
  updateProgressSidebar();
  
  // Move to next question after a delay
  setTimeout(() => {
    currentQuestion++;
    loadQuestion();
  }, 1800);
}

// Show slang detail
function showSlangDetail(term) {
  const slang = slangDictionary[term];
  const detailDiv = document.getElementById('slangDetail');
  
  if (slang) {
    detailDiv.innerHTML = `
      <h3>${term.charAt(0).toUpperCase() + term.slice(1)}</h3>
      <div class="definition"><strong>Definition:</strong> ${slang.definition}</div>
      <div class="example"><strong>Example:</strong> ${slang.example}</div>
      ${slang.context ? `<div class="example" style="margin-top: 1rem;"><strong>Context:</strong> ${slang.context}</div>` : ''}
    `;
    detailDiv.classList.add('active');
    detailDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Initialize profile data
function initProfile() {
  // Get joined date from localStorage or set current date
  let joinedDate = localStorage.getItem('joinedDate');
  if (!joinedDate) {
    joinedDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    localStorage.setItem('joinedDate', joinedDate);
  }
  
  // Update profile display
  const nameElement = document.getElementById('profileName');
  const userIDElement = document.getElementById('profileUserID');
  const joinedElement = document.getElementById('profileJoined');
  
  if (nameElement) nameElement.textContent = '';
  if (userIDElement) userIDElement.textContent = '';
  if (joinedElement) joinedElement.textContent = joinedDate;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  initStreak();
  initProfile();
  showPage('homePage');
});

