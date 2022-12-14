// Author: Samuli Ruotsalainen
/* Referoitu apuna seuraavia koodeja:
    https://github.com/WebDevSimplified/JavaScript-Quiz-App
    https://www.section.io/engineering-education/how-to-build-a-quiz-app-with-vanilla-javascript-and-tailwind-css/
    Sekä erilaisia ratkaisumalleja/ohjeistuksia stackoverflowsta/www3schoolssista
    */
// Muuttujat jotka hakevat tarvitut elementit

let startButton = document.getElementById('start-button');
let questionContainer = document.querySelector('.question-container');
let nextButton = document.getElementById('next-button');
let quizContainer = document.getElementById('quiz-container');
let answerRows = document.querySelectorAll('div.answer-row');
let answerRow1 =  document.getElementById('answer-row1')
let answerRow2 =  document.getElementById('answer-row2')
let answerContainer = document.getElementById('answer-container');
let answerDiv = document.getElementsByClassName('answer-div');
let explanationDiv = document.getElementById('explanation-div');
let answerCounter= document.getElementById('counter');
let rightAnswerDiv = document.getElementById('number-of-right-answers')
let introDiv = document.getElementById('intro-div')
// TODO
// NO VITTU VAIKKA KAIKKI SAATANA
/* 
    5.12. [Luo asettelut kuntoon. Kosmetikka hoitoa, kaikki funktionaalinen toimii tarkoituksen mukaisesti.
    Luo sisällöt kysymyksille]
    7.12. [Luotu +7 kysymystä, yhteensä 12. Halutessaan voi tehdä lisää.
        Korjattu laskuri, peli toimii nyt täydellisesti. Ainoa backendin todo lisätä kysymyksiä
        Frontendi kaipaa vielä hiomista, mutta kaiken tälläpuolella *pitäisi* toimia. 
    ]
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
    },
    {
        kysymys: 'Minä vuonna Iso-Britannia tunnusti Suomen itsenäiseksi valtioksi?',
        vastaukset:[
            {text: '1939', correct:false},
            {text: '1929', correct:false},
            {text: '1919', correct:true},
            {text: '1949', correct:false}
        ],
        vinkit: 'Suomi itsenäistyi vuonna 1918, ja Iso-Britannia tunnisti Suomen itsenäiseksi seuraavana vuonna.'
    },
    {
        kysymys: 'Mitä tarkoittaa Euroopan historiassa sana D-Day?',
        vastaukset:[
            {text: 'Normandian maihinnousua', correct:true},
            {text: 'Mussolinin kuolinpäivää', correct:false},
            {text: 'Enigma-laitetta', correct:false},
            {text: 'EU:n vuosipäivää', correct:false}
        ],
        vinkit: 'D-Day:llä merkitään Normandian maihinnousua, joka tapahtui 6. kesäkuuta 1944.'
    },
    {
        kysymys: 'Millä maalla on eniten paikkoja europarlamentissa?',
        vastaukset:[
            {text: 'Italialla', correct:false},
            {text: 'Saksalla', correct:true},
            {text: 'Puolalla', correct:false},
            {text: 'Ranskalla', correct:false}
        ],
        vinkit: 'Saksalla on euroarlamentissä eniten paikkoja, sillä sen väkiluku on EU -maista suurin.'
    },
    {
        kysymys: 'Mitkä ovat Euroopan unionin lipun värit?',
        vastaukset:[
            {text: 'Sininen', correct:false},
            {text: 'Vihreä ja keltainen', correct:false},
            {text: 'Sininen ja keltainen', correct:true},
            {text: 'Punainen ja keltainen', correct:false}
        ],
        vinkit: 'Euroopan unionin lipun värit ovat Sininen ja keltainen.'
    },
    {
        kysymys: 'Mille maalle kuuluvat Shetlannin saaret?',
        vastaukset:[
            {text: 'Alankomaille', correct:false},
            {text: 'Ruotsaille', correct:false},
            {text: 'Ranskalle', correct:false},
            {text: 'Isolle-Britannialle', correct:true}
        ],
        vinkit: 'Shetlannin saaret sijaitsevat Iso-Britannian saarten pohjoispuolella, ja ovat kuuluneet Iso-Britannialle vuodesta 1472.'
    },
    {
    kysymys: 'Minkä meren rannikolla Monaco sijaitsee?',
    vastaukset:[
        {text: 'Välimeren', correct:true},
        {text: 'Jäämeren', correct:false},
        {text: 'Intian valtameren', correct:false},
        {text: 'Punaisen meren', correct:false}
    ],
    vinkit: 'Monaco on itsenäinen kääpiövaltio, joka sijaitsee välimeren rannalla, lähellä Ranskan ja Italian pohjoista rajaa.'
    },
    {
    kysymys: 'Minkä EU-maan pääkaupunki on Pariisi?',
    vastaukset:[
        {text: 'Suomen', correct:false},
        {text: 'Ruotsin', correct:false},
        {text: 'Ranskan', correct:true},
        {text: 'Espanjan', correct:false}
    ],
    vinkit: 'Pariisi on Ranskan pääkaupunki vuodesta 508 lähtien.'
    },
    {
    kysymys: 'Mikä seuraavista ei ole Belgian naapurimaa?',
    vastaukset:[
        {text: 'Tanska', correct:true},
        {text: 'Alankomaat', correct:false},
        {text: 'Luxemburg', correct:false},
        {text: 'Ranska', correct:false}
    ],
    vinkit: 'Tanskalla ja Belgialla ei ole yhteistä maa- tai merirajaa, jonka vuoksi Tanska ei ole Belgian naapurimaa.'
    }
];

/* Laskurit, jotka sisältävät kysymyksen numeron, ja estävät aikaisemmin esitettyjen kysymysten
Esittämisen*/ 
let shuffledQuestion;
let currentQuestionNumber;
let questionsAmount = 5;
let questionsAnswered = 0;
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
    quizContainer.classList.remove('transparent');
    introDiv.classList.add('hidden')
    answerRows.forEach(answerRows => answerRows.classList.remove('hidden')
    )
    currentQuestionNumber = 0;
    rightAnswers = 0;
    questionsAnswered = 0;
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
    if (questionsAnswered == 0) {
        answerCounter.innerText = '1/'+ questionsAmount;
        questionsAnswered++
    }
    if (questionsAnswered > questionsAmount) {
        questionsAnswered = 1
    };
    questionsAnswered++

    
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

    if (questionsAnswered < 6){
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




