// Muuttujat jotka hakevat tarvitut elementit
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
/* 
    Luo toimiva kysymys laskuri. Laskurin pitää ilmaista oikein saatujen vastausten määrä
    sekä kysymyksen numero, ja montako kysymystä on jäljellä.
    Ala työstämään asettelua ja kysymysten sisältöä.   
    Peli pääasiallisesti toimii tarkoituksen mukaisesti.
*/
/* Laskurit, jotka sisältävät kysymyksen, ja estävät aikaisemmin esitettyjen kysymysten
Esittämisen*/ 
let shuffledQuestion;
let currentQuestionNumber;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionNumber++
    nextQuestion()
});


/* Aloittaa pelin. Muuttaa CSS luokituksia näkyvyydelle, ja asettaa kysymyksen numeroksi
  0. Hakee satunnaisen kysymyksen questions arraysta*/
function startGame(){
    startButton.classList.add('hidden');
    answerRows.forEach(answerRows => answerRows.classList.remove('hidden')
    )
    currentQuestionNumber = 0;
    shuffledQuestion=questions.sort(() => Math.random() - 0.5);
    nextQuestion()
}
/* Resetoi vastaus divit resetDivs funktiolla ja luo uuden kysymyksen sekä vastaukset
    showQuestion funktiolla. */
function nextQuestion(){   
    resetDivs()
    showQuestion(shuffledQuestion[currentQuestionNumber])
}
/* Poistaa olemessaolevat vastausvaihtoehto divit */
function resetDivs(){
     nextButton.classList.add('hidden');
     explanationDiv.classList.add('hidden');
     questionContainer.classList.remove('hidden')
    answerRow1.replaceChildren();
    answerRow2.replaceChildren();
}
/* Hakee satunnaisen kysymyksen ja sen vastaukset questions arraystä. Jos arraystä haetun
    vastauksen correct boolean = true, asettaa sille luodulle diville datasetin
    correct. Tätä tarvitaan taustavärin muuttamiseksi vastauksen valinnan jälkeen*/
function showQuestion(kysymys) {
    questionContainer.innerText = kysymys.kysymys
    explanationDiv.innerText = kysymys.vinkit
    i = 0;
    kysymys.vastaukset.forEach(vastaukset => {
        if(i<2){
        const div = document.createElement('div');
        div.classList.add('col', 'answer-div');
        div.innerText = vastaukset.text
        answerRow1.appendChild(div)
        if(vastaukset.correct === true) {
            // console.log('testi a');
            div.dataset.correct = vastaukset.correct
        }
        i++
    } else {
        const div = document.createElement('div');
        div.classList.add('col', 'answer-div');
        div.innerText = vastaukset.text
        answerRow2.appendChild(div)
        if(vastaukset.correct === true) {
            // console.log('testi b');
            div.dataset.correct = vastaukset.correct
        } 
    }})

    Array.from(answerDiv).forEach(answerDiv => answerDiv.addEventListener('click', pickAnswer))

};


/* Vastausta painettaessa kutsuu setClass funktiota, jolla asettaa oikeat taustavärit vastaus diveille. Muokkaa
    näkyvyys luokkia sen mukaan, onko kysymyksiä enään jäljellä. Esittää selitys divin käyttäjälle. */
/** @param {event} event */
function pickAnswer(event) {
    let pickedAnswer = event.target;
    Array.from(answerRow1.children).forEach((div) => setClass(div, div.dataset.correct));
    Array.from(answerRow2.children).forEach((div) => setClass(div, div.dataset.correct));
    explanationDiv.classList.remove('hidden');

    if (shuffledQuestion.length > currentQuestionNumber + 1){
        nextButton.classList.remove('hidden');
    } else {
        startButton.innerText = "Pelaa uudelleen"
        startButton.classList.remove('hidden')
    }

    
}
/* Parametri tarkistaa, onko elementillä dataset arvo correct. Jos true, antaa 
    elementille luokan correct, muuten luokan wrong. Luokille on määritelty värit CSS
    koodissa */
function setClass (element, correct) {
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong")
    }
}
/* Tyhjentää yllä olevan elementin luomat luokat kun kysymys vaihtuu */
function clearClass (element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

/* Array joka sisältää kysymykset, vastaukset, sekä selitykset*/
const questions = [
    {
        kysymys: 'Testikysymys',
        vastaukset: [
            {text: '1', correct: true},
            {text: '2', correct: false},
            {text: '2', correct: false},
            {text: '2', correct: false}
        ],
        vinkit: 'Tämä oli oikein, koska x'
    },
    {
        kysymys: 'Testikysymys 2',
        vastaukset:[
            {text: '3', correct: false},
            {text: '4', correct: true},
            {text: '2', correct: false},
            {text: '2', correct: false}
        ],
        vinkit: 
           'Tämä oli oikein, koska b'
    },
    {
        kysymys: 'Testikysymys 3',
        vastaukset:[
            {text: '3', correct: true},
            {text: '4', correct: false},
            {text: '2', correct: true},
            {text: '2', correct: false}
        ],
        vinkit: 'Tämä oli oikein, koska a'
    },
    {
        kysymys: 'Testikysymys 4',
        vastaukset:[
            {text: '3', correct: false},
            {text: '4', correct: false},
            {text: '2', correct: false},
            {text: '2', correct: true}
        ],
        vinkit: 'Tämä oli oikein, koska z'

    },
    {
        kysymys: 'Testikysymys 5',
        vastaukset:[
            {text: '3', correct: false},
            {text: '2', correct: false},
            {text: '2', correct: true},
            {text: '4', correct: false}
        ],
        vinkit: 'Tämä oli oikein, koska y'

    }
];