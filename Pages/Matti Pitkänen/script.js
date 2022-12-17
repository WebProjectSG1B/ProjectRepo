// Kysymys array

 const questions = [
    {
        question: "Valitse oikea tavu täyttämään sana: HE-...-NEN",
        optionA: "VVO",
        optionB: "EVO",
        optionC: "PO",
        optionD: "VO",
        correctOption: "optionD"
    },

    {
        question: "Valitse oikea tavu täyttämään sana: TAV-...-TUS",
        optionA: "VA",
        optionB: "UTT",
        optionC: "UT",
        optionD: "TUT",
        correctOption: "optionC"
    },

    {
        question: "Mikä ei ole vuodenaika?",
        optionA: "Kesä",
        optionB: "Talvi",
        optionC: "Aamu",
        optionD: "Kevät",
        correctOption: "optionC"
    },
    
    {
        question: "Mikolla on viisi ystävää. Kolmella on pyörä ja kahdella mopo. Montako mopoa Mikon kavereilla on?",
        optionA: "Kolme (3)",
        optionB: "Viisi (5)",
        optionC: "Kaksi (2)",
        optionD: "Ei yhtään (0)",
        correctOption: "optionC"
    },
        
    {
        question: "Valitse oikea tavutus sanasta: LINJA-AUTO.",
        optionA: "LI-NJA-AUT-O",
        optionB: "L-IN-JA-AU-TO",
        optionC: "LIN-JA-AU-TO",
        optionD: "LI-NJA-A-UTO",
        correctOption: "optionC"
    },
        
    {
        question: "Mikä ei ole vuodenaika?",
        optionA: "Kesä",
        optionB: "Talvi",
        optionC: "Aamu",
        optionD: "Kevät",
        correctOption: "optionC"
    },
        
    {
        question: "Valitse oikein kirjoitettu lause.",
        optionA: "Aamulla aurinko nousee ja alkaa läMmittää.",
        optionB: "Aamulla Jarkko lähtee iloisena kouluun.",
        optionC: "väinöllä usein Kiukuttaa jos isä kieltää pelaamisen.",
        optionD: "Koulussa käynti EI ole turhaa.",
        correctOption: "optionB"
    },
        
    {
        question: "Montako tuntia on päivässä?",
        optionA: "24",
        optionB: "12",
        optionC: "8",
        optionD: "10",
        correctOption: "optionA"
    },
        
    {
        question: "Mikä ei kuulu joukkoon?",
        optionA: "Juosta",
        optionB: "Hiihtää",
        optionC: "Piirtää",
        optionD: "Kaunis",
        correctOption: "optionD"
    },
        
    {
        question: "Valitse oikein kirjoitettu sana.",
        optionA: "iSä",
        optionB: "Suomi",
        optionC: "hauka",
        optionD: "koirav",
        correctOption: "optionB"
    },
        
    {
        question: "Millä tavulla sana Aurinko alkaa?",
        optionA: "Au-",
        optionB: "Aur-",
        optionC: "A-",
        optionD: "Auri-",
        correctOption: "optionA"
    },
        
    {
        question: "Koiralla on neljä jalkaa, ihmisellä kaksi, kalalla ei yhtään ja kanalla kaksi. Millä ei ole jalkoja ollenkaan?",
        optionA: "Kalalla",
        optionB: "Ihmisellä",
        optionC: "Koiralla",
        optionD: "Kanalla",
        correctOption: "optionA"
    },
        
    {
        question: "Mikä on oikea lopetus tavu sanalle: Ihminen?",
        optionA: "-en",
        optionB: "-inen",
        optionC: "-nen",
        optionD: "-minen",
        correctOption: "optionC"
    },
        
    {
        question: "Montako tavua on sanassa Koulukirja?",
        optionA: "kaksi (2)",
        optionB: "kolme (3)",
        optionC: "viisi (5)",
        optionD: "neljä (4)",
        correctOption: "optionD"
    },
        
    {
        question: "Mikä on keskimmäinen tavu sanassa: Kirjasto?",
        optionA: "Kir",
        optionB: "ja",
        optionC: "sto",
        optionD: "asto",
        correctOption: "optionB"
    }

]

let shuffledQuestions = [] // tyhjä array mihin tuodaan kysymys pankista arvotut kysymykset

function handleQuestions() { 

    // Funktio mikä sekoittaa ja pushaa 10 kysymystä shuffledQuestions arrayhyn
    //kysyy 10 kysymystä kerrallaan.
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 // Nykyisen kysymyksen numero
let pelaajanPisteet = 0  // Pelaajan pisteet
let VääriäYrityksiä = 0 // Väärien vastauksin määrä
let indexNumber = 0 // Käytetään näyttäämän uusi kysymys


// functiolla näytetään seuraava kysymys arrysta domiin

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = pelaajanPisteet
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] // Hakee nykyisen kysymyksen
    const currentQuestionAnswer = currentQuestion.correctOption // Hakee oikean vastauksen kysymykselle
    const options = document.getElementsByName("option"); // Hakee kaikki elementit minkä nimi on option.
    let correctOption = null
    let button = document.getElementById("btn"); // Haetaan buttonin ID piilotusta varten.

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            // hakee oikean radio inputin ja vastauksen
            correctOption = option.labels[0].id
        }
    })

    // Varmistaa että radiobutton on checked tai vaihtoehto valittu
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //Onko radio button sama kuin oikea vastaus.
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            pelaajanPisteet++ // Lisätään pisteitä tulokseen
            indexNumber++ //Lisätään indexiin 1 jotta näytetään uusi kysymys
            // Viive ennenkuin näytetään seuraava kysymys.
            setTimeout(() => {
                questionNumber++
            }, 1500)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            VääriäYrityksiä++ // Lisää väärin vastattuihin 1. 
            indexNumber++
            button.classList.add("hide"); // Piilotetaan seuraava kysymys nappi
/*          let modalpopup = document.getElementById('option-modal');
            modalpopup.style.display = "flex"; // Tuodaan modal popup näkyviin kun väärä vastaus.
            document.getElementById("modalText").innerText = "Väärä vastaus." */

            document.getElementById("display-question").innerHTML = "Väärä vastaus"; // vaihdetaan modalin tekstiksi Väärä vastaus
            
        }
    })
}



// kutsu kun next buttonia kutsutaan
function handleNextQuestion() {

    checkForAnswer() // Tarkastaa onko pelaaja valinnut oikein vai väärin.
    unCheckRadioButtons()
    // Viive näyttämään seuraava kysymys.
    setTimeout(() => {
        if (indexNumber <= 9) {
// Näyttää uuden kysymyksen jos index numero on pienempi kuin 9.
            NextQuestion(indexNumber)
            let button = document.getElementById("btn");
            button.classList.remove("hide"); // palauttaa tarkista napin näkyville
            
        }
        else {
            handleEndGame()//Lopettaa pelin jos index numero on yli 9
        }
        resetOptionBackground()
    }, 1500);
}

// vaihtaa vaihtoehtojen backgroundin takaisin kun on näytetty oikein väärin värit
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// poistaa valinnat vaihtoehdoista seuraavaa kysymystä varten.
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// Pelin lopetus funktio
function handleEndGame() {
    SuljeScoreModal();
    let arvio = null;
    let arviokColor = null;

    // pisteiden tarkistuksen perusteella tuleva väri ja lausahdus.
    if (pelaajanPisteet <= 3) {
        arvio = "Hups aika vähän oikein lisää harjoitusta kyllä se siitä!.";
        arvioColor = "red";
    }
    else if (pelaajanPisteet >= 4 && pelaajanPisteet < 7) {
        arvio = "Keskiverto suoritus pystyt kyllä parempaan!.";
        arvioColor = "orange";
    }
    else if (pelaajanPisteet >= 7) {
        arvio = "Hienoa työtä jatka samaan malliin!!.";
        arvioColor = "green";
    }
    const pelajanArvosana = (pelaajanPisteet / 10) * 100

    // score boardin näyttämiseen tarvittavat.
    document.getElementById('arvios').innerHTML = arvio;
    document.getElementById('arvios').style.color = arvioColor;
    document.getElementById('grade-percentage').innerHTML = pelajanArvosana;
    document.getElementById('wrong-answers').innerHTML = VääriäYrityksiä;
    document.getElementById('right-answers').innerHTML = pelaajanPisteet;
    document.getElementById('score-modal').style.display = "flex";

}

// sulkee score modalin ja sekoittaa kysymykset uudestaan.
function SuljeScoreModal() {
    questionNumber = 1
    pelaajanPisteet = 0
    VääriäYrityksiä = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

// Funktio millä piilotetaan varoitus modal.
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}


// tehtävässä lainattu raakalla kädellä myönnettäköön sivustoa "https://dev.to/sulaimonolaniran/building-a-simple-quiz-with-html-css-and-javascript-4elp"