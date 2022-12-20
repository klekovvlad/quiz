const questions = [
    'Год основания компании ОКЕЙ',
    'Где расположен офис компании?',
    'Бренд компании',
    'Сколько магазинов компании ОКЕЙ в России?',
    'Вам понравился квиз?'
];
const answers = [
    [
        {
            content: '2002',
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
    ],
    [
        {
            content: '32',
            true: false
        },
        {
            content: '79',
            true: true
        },
        {
            content: '54',
            true: false
        }
    ],
    [
        {
            content: 'Да',
            true: true
        },
        {
            content: 'Нет',
            true: false
        },
        {
            content: 'Могло быть и лучше',
            true: false
        }
    ]
];
const answerTrue = [
    'Год основания компании - 2002',
    'Офис компании находится в Москве',
    'Торговая марка - То, что надо!',
    'Всего в России 79 гипермаркетов ОКЕЙ',
    'Вот тут обидно было'
]

const questionsItem = document.querySelector('.quiz-question');
const quizAnswers = document.querySelector('.quiz-answers');
let answerItem = document.querySelectorAll('.quiz-answer');
const quizButton = document.querySelector('.quiz-button');
const quizMessage = document.querySelector('.quiz-message');
let x = 0;
let trueAnswer = 0;
goQuiz();
function goQuiz() {
    if (x < questions.length) {
        let i = 0;
        quizAnswers.innerHTML = '';
        questionsItem.innerHTML = questions[x];
        while(i <= 2) {
            let answerItem = document.createElement('div');
            answerItem.classList.add('quiz-answer');
            answerItem.innerHTML = answers[x][i].content;
            answerItem.dataset.true = answers[x][i].true; 
            quizAnswers.append(answerItem);
            i++;
        }
    }
    if (x >= questions.length) {
        questionsItem.innerHTML = '';
        quizAnswers.innerHTML = '';
        quizButton.style.display = 'none';
        const thankMessage = document.createElement('div');
        const calcAnswers = document.createElement('div');
        const thankMessageHeader = document.createElement('h5');
        const thankMessageMain = document.createElement('span');
        const questionAll = document.createElement('span');
        const questionTrue = document.createElement('span');
        questionAll.classList.add('number');
        questionTrue.classList.add('number');
        calcAnswers.classList.add('calc-answers');
        questionAll.innerHTML = questions.length;
        questionTrue.innerHTML = trueAnswer;
        thankMessageHeader.innerHTML = 'Спасибо!';
        calcAnswers.append(questionTrue, 'из', questionAll);
        thankMessageMain.innerHTML = 'Вы прошли тест! <br> Верных ответов';
        thankMessageMain.append(calcAnswers);
        thankMessage.prepend(thankMessageHeader,thankMessageMain);
        quizAnswers.innerHTML = thankMessage.innerHTML;
    }
    x++;
}
function checkAnswer() {
    answerItem = document.querySelectorAll('.quiz-answer');
    answerItem.forEach(function(el) {
        el.addEventListener('click', () => {
            quizMessage.classList.add('quiz-message-show');
            if(el.getAttribute('data-true') === 'true') {
                el.classList.add('quiz-success');
                quizMessage.innerHTML = 'Верно';
                trueAnswer++
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
};
checkAnswer();
quizButton.addEventListener('click', () => {
    quizMessage.classList.remove('quiz-message-show');
    quizMessage.innerHTML = '';
    goQuiz();
    checkAnswer();
    quizButton.classList.remove('quiz-button-active');
});