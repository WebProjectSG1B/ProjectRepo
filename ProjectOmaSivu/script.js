// Author: Samuli Ruotsalainen
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
let answerCounter= document.getElementById('counter');
let rightAnswerDiv = document.getElementById('number-of-right-answers')
// TODO
// NO VITTU VAIKKA KAIKKI SAATANA
/* 
    5.12. [Luo asettelut kuntoon. Kosmetikka hoitoa, kaikki funktionaalinen toimii tarkoituksen mukaisesti.
    Luo sisällöt kysymyksille]
    Ala työstämään asettelua ja kysymysten sisältöä.   
    Peli pääasiallisesti toimii tarkoituksen mukaisesti.
*/


/* Array joka sisältää kysymykset, vastaukset, sekä selitykset
*/
const questions = [
    {
        kysymys: 'Mikä on hätäpalvelun numero kaikissa EU-maissa?',
        vastaukset: [
            {text: '112', correct: true},
            {text: '10022', correct: false},
            {text: '911', correct: false},
            {text: '1212', correct: false}
        ],
        vinkit: 'Hätäpalvelun numero kaikissa EU-maissa on ollut "112" vuodesta 2008 lähtien'
    },
    {
        kysymys: 'Mikä on Slovakian rahayksikkö?',
        vastaukset:[
            {text: 'Kruunu', correct: false},
            {text: 'Markka', correct: false},
            {text: 'Euro', correct: true},
            {text: 'Lati', correct: false}
        ],
        vinkit: 
           'Slovakia käyttää rahayksikkönään euroja.'
    },
    {
        kysymys: 'Missä kaupungissa on YK:n kansainvälisen rikostuomioistuimen päämaja?',
        vastaukset:[
            {text: 'Roomassa', correct: false},
            {text: 'Tukholmassa', correct: false},
            {text: 'Haagissa', correct: true},
            {text: 'Prahassa', correct: false}
        ],
        vinkit: 'YK:n kansainvälisen rikostuomioistuimen päämaja sijaitsee Haagissa, joka on kaupunki Hollannissa.'
    },
    {
        kysymys: 'Mikä on Euroopan suurin tulivuori?',
        vastaukset:[
            {text: 'Vulcano', correct: false},
            {text: 'Vesuvius', correct: false},
            {text: 'Santorini', correct: false},
            {text: 'Etna', correct: true}
        ],
        vinkit: 'Etna on Euroopan suurin tulivuori. Se sijaitsee Italiassa ja on 3357m korkea'

    },
    {
        kysymys: 'Mikä on belgian pääkaupunki?',
        vastaukset:[
            {text: 'Antwerpen', correct: false},
            {text: 'Bryssel', correct: true},
            {text: 'Toronto', correct: false},
            {text: 'Havanna', correct: false}
        ],
        vinkit: 'Brysselistä tuli belgian pääkaupunki vuonna 1831.'

    }
];

/* Laskurit, jotka sisältävät kysymyksen numeron, ja estävät aikaisemmin esitettyjen kysymysten
Esittämisen*/ 
let shuffledQuestion;
let currentQuestionNumber;
let questionsAmount = questions.length;
let questionsAnswered = 1;
let rightAnswers = 0;
let clicked = false;
//Event listenerit aloitus ja seuraava napille
 startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionNumber++
    nextQuestion()
});



/* Aloittaa pelin. Muuttaa CSS luokituksia näkyvyydelle, ja asettaa kysymyksen numeroksi
  0. Hakee satunnaisen kysymyksen questions arraysta*/
function startGame(){
    startButton.classList.add('hidden');
    answerCounter.classList.remove('hidden');
    answerRows.forEach(answerRows => answerRows.classList.remove('hidden')
    )
    currentQuestionNumber = 0;
    rightAnswers = 0;
    rightAnswerDiv.classList.add('hidden');
    shuffledQuestion=questions.sort(() => Math.random() - 0.5);
    nextQuestion();
}

/* Resetoi vastaus divit resetDivs funktiolla ja luo uuden kysymyksen sekä vastaukset
    showQuestion funktiolla. */
function nextQuestion(){   
    resetDivs()
    clicked = false;
    showQuestion(shuffledQuestion[currentQuestionNumber])
    answerCounter.innerText = questionsAnswered + "/" + questionsAmount;
    questionsAnswered++
    console.log(questionsAnswered);
    console.log(rightAnswers);
    if (questionsAnswered > 5) {
        questionsAnswered = 1
    };
};

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
            div.classList.add('col', 'answer-div', 'text-center');
            div.innerText = vastaukset.text
            answerRow1.appendChild(div)
            if(vastaukset.correct === true) {
                div.dataset.correct = vastaukset.correct
            }
            i++
        } else {
            const div = document.createElement('div');
            div.classList.add('col', 'answer-div', 'text-center');
            div.innerText = vastaukset.text
           answerRow2.appendChild(div)
           if(vastaukset.correct === true) {
               div.dataset.correct = vastaukset.correct
            } 
     }
    }
)
    Array.from(answerDiv).forEach(answerDiv => answerDiv.addEventListener('click', pickAnswer))
   
};


/* Vastausta painettaessa kutsuu setClass funktiota, jolla asettaa oikeat taustavärit vastaus diveille. Muokkaa
    näkyvyys luokkia sen mukaan, onko kysymyksiä enään jäljellä. Esittää selitys divin käyttäjälle. */
/** @param {event} event */
function pickAnswer(event) {

    Array.from(answerRow1.children).forEach((div) => setClass(div, div.dataset.correct));
    Array.from(answerRow2.children).forEach((div) => setClass(div, div.dataset.correct));
    explanationDiv.classList.remove('hidden');
   
    let pickedAnswer = event.target;
    let pickedAnswerClasslist = pickedAnswer.classList;
    let pickedAnswerArrayList = Array.from(pickedAnswerClasslist);
    
     if (pickedAnswerArrayList.includes('correct') == true && clicked == false) {
        rightAnswers++
        clicked = true
     };
    

    if (shuffledQuestion.length > currentQuestionNumber + 1){
        nextButton.classList.remove('hidden');
    } else {
        startButton.innerText = "Pelaa uudelleen";
        startButton.classList.remove('hidden');
      
        rightAnswerDiv.classList.remove('hidden');
        rightAnswerDiv.innerText = ('Sait ' + rightAnswers + ' kysymystä oikein!')
    };
};
   

/* Parametri tarkistaa, onko elementillä dataset arvo correct. Jos true, antaa 
    elementille luokan correct, muuten luokan wrong. Luokille on määritelty värit CSS
    koodissa */
function setClass (element, correct) {
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong")
    }
};




