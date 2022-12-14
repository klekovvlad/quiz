const questions = [
    'Год основания компании ОКЕЙ',
    'Где расположен офис компании?',
    'Бренд компании'
];
const answers = [
    [
        {
            content: '2001',
            true: true
        },
        {
            content: '2007',
            true: false
        },
        {
            content: '1997',
            true: false
        }
    ],
    [
        {
            content: 'Нижний Новгород',
            true: false
        },
        {
            content: 'Москва',
            true: true
        },
        {
            content: 'Екатеренбург',
            true: false
        }
    ],
    [
        {
            content: 'Красная цена',
            true: false
        },
        {
            content: 'Каждый день',
            true: false
        },
        {
            content: 'То, что надо!',
            true: true
        }
    ]
];
const answerTrue = [
    'Год основания компании - 2001',
    'Офис компании находится в Москве',
    'Торговая марка - То, что надо!'
]

const questionsItem = document.querySelector('.quiz-question');
const quizAnswers = document.querySelector('.quiz-answers');
let answerItem = document.querySelectorAll('.quiz-answer');
const quizButton = document.querySelector('.quiz-button');
const quizMessage = document.querySelector('.quiz-message');
let x = 0;
goQuiz();
function goQuiz() {
    if (x <= 2) {
        let i = 0;
        quizAnswers.innerHTML = '';
        questionsItem.innerHTML = questions[x];
        while(i <= 2) {
            let answerItem = document.createElement('div');
            answerItem.classList.add('quiz-answer');
            if(x === 0) {
                answerItem.innerHTML = answers[0][i].content;
                answerItem.dataset.true = answers[0][i].true; 
            }
            if(x === 1) {
                answerItem.innerHTML = answers[1][i].content; 
                answerItem.dataset.true = answers[1][i].true; 
            }
            if(x === 2) {
                answerItem.innerHTML = answers[2][i].content; 
                answerItem.dataset.true = answers[2][i].true; 
            }
            quizAnswers.append(answerItem);
            i++;
        }
    }
    if (x > 2) {
        questionsItem.innerHTML = 'Поздравляем! Ваш промокод';
        quizAnswers.innerHTML = 'kkS9@000';
        quizButton.style.display = 'none';
    }
    x++;
}


function checkAnswer() {
    answerItem = document.querySelectorAll('.quiz-answer');
    answerItem.forEach(function(el) {
        el.addEventListener('click', () => {
            if(el.getAttribute('data-true') === 'true') {
                el.classList.add('quiz-success');
                quizMessage.innerHTML = 'Верно';
            }else{
                el.classList.add('quiz-error');
                quizMessage.innerHTML = answerTrue[x - 1];
            }
            for(let a = 0; a <= 2; a++) {
                answerItem[a].classList.add('quiz-hidden')
            }
            quizButton.classList.add('quiz-button-active');
        });
    });
    
}
checkAnswer();
quizButton.addEventListener('click', () => {
    quizMessage.innerHTML = '';
    goQuiz();
    checkAnswer();
    quizButton.classList.remove('quiz-button-active');
});