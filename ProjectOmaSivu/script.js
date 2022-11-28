let startButton = document.getElementById('start-button');
let questionContainer = document.querySelector('.question-container');
let nextButton = document.getElementById('next-button');
let answerRows = document.querySelectorAll('div.answer-row');
let answerRow1 =  document.getElementById('answer-row1')
let answerRow2 =  document.getElementById('answer-row2')
let answerContainer = document.getElementById('answer-container');


let shuffledQuestion;
let currentQuestionNumber;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionNumber++
    nextQuestion
});

function randomNumberGenerator(){
    return Math.random() - 0.5;
}

function startGame(){

    startButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
    questionContainer.classList.remove('hidden');
    answerRows.forEach(answerRows => answerRows.classList.toggle('hidden')
    )
    currentQuestionNumber = 0;
    shuffledQuestion=questions.sort(randomNumberGenerator)
    nextQuestion()
}

function nextQuestion(){    
    resetDivs()
    showQuestion(shuffledQuestion[currentQuestionNumber])
}

function resetDivs(){
    // nextButton.classList.add('hidden');
    answerRow1.replaceChildren();
    answerRow2.replaceChildren();
}

function showQuestion(kysymys) {
    questionContainer.innerText = kysymys.kysymys
    // answerRows.forEach(answerRows => answerRows.innerText = "")
    i = 0
    kysymys.vastaukset.forEach(vastaus => {
        
        if(i<2){
        const div = document.createElement('div');
        div.classList.add('col', 'answer-div');
        div.innerText = vastaus.text
        answerRow1.appendChild(div)
        i++
    } else {
        const div = document.createElement('div');
        div.classList.add('col', 'answer-div');
        div.innerText = vastaus.text
        answerRow2.appendChild(div)
    }
    })
    // answerRows.addEventListener('click', pickAnswer)
};

function pickAnswer() {
}


const questions = [
    {
        kysymys: 'Testikysymys',
        vastaukset: [
            {text: '1', correct: true},
            {text: '2', correct: false},
            {text: '2', correct: false},
            {text: '2', correct: false}
        ]
    },
    {
        kysymys: 'Testikysymys 2',
        vastaukset:[
            {text: '3', correct: true},
            {text: '4', correct: false},
            {text: '2', correct: false},
            {text: '2', correct: false}
        ]
    },
    {
        kysymys: 'Testikysymys 3',
        vastaukset:[
            {text: '3', correct: true},
            {text: '4', correct: false},
            {text: '2', correct: false},
            {text: '2', correct: false}
        ]
    },
    {
        kysymys: 'Testikysymys 4',
        vastaukset:[
            {text: '3', correct: true},
            {text: '4', correct: false},
            {text: '2', correct: false},
            {text: '2', correct: false}
        ]
    },
    {
        kysymys: 'Testikysymys 5',
        vastaukset:[
            {text: '3', correct: true},
            {text: '2', correct: false},
            {text: '2', correct: false},
            {text: '4', correct: false}
        ]
    }
];