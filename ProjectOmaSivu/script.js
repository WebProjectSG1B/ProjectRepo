let startButton = document.getElementById('start-button');
let questionContainer = document.querySelector('.question-container');
let nextButton = document.getElementById('next-button');
let answerRows = document.querySelectorAll('div.answer-row');
let answerRow1 =  document.getElementById('answer-row1')
let answerRow2 =  document.getElementById('answer-row2')
let answerContainer = document.getElementById('answer-container');
let answerDiv = document.getElementsByClassName('answer-div');
let explanationDiv = document.getElementById('explanation-div');

// TODO
// NO VITTU VAIKKA KAIKKI SAATANA
/* Löydä miten asettaa correct tai false vastaukselle niitä painettaessa
    resettaa nämä vastaamisen jälkeen
    aika paljon paskaa tbf
*/


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
    i = 0;
    kysymys.vastaukset.forEach(vastaukset => {
        if(i<2){
        const div = document.createElement('div');
        div.classList.add('col', 'answer-div');
        div.innerText = vastaukset.text
        answerRow1.appendChild(div)
        if(vastaukset.correct === true) {
            console.log('testi a');
            
        }
        i++
    } else {
        const div = document.createElement('div');
        div.classList.add('col', 'answer-div');
        div.innerText = vastaukset.text
        answerRow2.appendChild(div)
        if(vastaukset.correct === true) {
            console.log('testi b');
            div.dataset.correct = vastaukset.correct
        } 
    }})
    Array.from(answerDiv).forEach(answerDiv => answerDiv.addEventListener('click', pickAnswer))
};

function pickAnswer(e) {
    let pickedAnswer = e.target;
    let correct = pickedAnswer.dataset.correct;
    Array.from(answerContainer.children).forEach((div) => {setClass(div, div.dataset.correct)});

    
    explanationDiv.classList.remove('hidden');

    
}

function setClass (element, correct) {
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong")
    }
}

function clearClass (element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}


const questions = [
    {
        kysymys: 'Testikysymys',
        vastaukset: [
            {text: '1', correct: true},
            {text: '2', correct: false},
            {text: '2', correct: false},
            {text: '2', correct: false}
        ],
        vinkit: [
            {text : 'Tämä oli oikein, koska x', correct: true},
            {text : 'Tämä oli väärin, koska y', correct: false} 
        ]    },
    {
        kysymys: 'Testikysymys 2',
        vastaukset:[
            {text: '3', correct: true},
            {text: '4', correct: false},
            {text: '2', correct: false},
            {text: '2', correct: false}
        ],
        vinkit: [
            {text : 'Tämä oli oikein, koska x', correct: true},
            {text : 'Tämä oli väärin, koska y', correct: false} 
        ]
    },
    {
        kysymys: 'Testikysymys 3',
        vastaukset:[
            {text: '3', correct: true},
            {text: '4', correct: false},
            {text: '2', correct: false},
            {text: '2', correct: false}
        ],
        vinkit: [
            {text : 'Tämä oli oikein, koska x', correct: true},
            {text : 'Tämä oli väärin, koska y', correct: false} 
        ]    },
    {
        kysymys: 'Testikysymys 4',
        vastaukset:[
            {text: '3', correct: true},
            {text: '4', correct: false},
            {text: '2', correct: false},
            {text: '2', correct: false}
        ],
        vinkit: [
            {text : 'Tämä oli oikein, koska x', correct: true},
            {text : 'Tämä oli väärin, koska y', correct: false} 
        ]
    },
    {
        kysymys: 'Testikysymys 5',
        vastaukset:[
            {text: '3', correct: true},
            {text: '2', correct: false},
            {text: '2', correct: false},
            {text: '4', correct: false}
        ],
        vinkit: [
            {text : 'Tämä oli oikein, koska x', correct: true},
            {text : 'Tämä oli väärin, koska y', correct: false} 
        ]
    }
];