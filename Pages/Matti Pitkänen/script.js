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
        question: "Valitse oikea tavu täyttämään sana: TA-...-TUS",
        optionA: "VA",
        optionB: "UTT",
        optionC: "VU",
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
        optionA: "Aurinko Nousee Aamulla.",
        optionB: "Aamulla Jarkko lähtee kouluun.",
        optionC: "väinö on Iloinen",
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

let shuffledQuestions = [] // tyhjä array näyttämään arvotut kysymykset.

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



let questionNumber = 1 // nykyisen kysymyksen numero
let playerScore = 0  // pelaajan pisteiden variable
let wrongAttempt = 0 // väärien vastausten variable
let indexNumber = 0 // käytään näyttämään seuraava kysymys

// functiolla näytetään seuraava kysymys arrysta domiin

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
    document.getElementById("pisteet").style.display = "none";

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] // hakee nykyisen kysymyksen
    const currentQuestionAnswer = currentQuestion.correctOption //hakee nykyisen kysymyksen vastauksen
    const options = document.getElementsByName("option"); // hakee kaikki elementit millä id: option
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            // hakee oikean radio inputin ja vastauksen
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    // Varmistaa että radiobutton on checked tai vaihtoehto valittu
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //lisätään pisteisiin 1
            indexNumber++ //lisätään indexiin 1
            //Viive ennen kuin näytetään uusi kysymys
            setTimeout(() => {
                questionNumber++
            }, 1500)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //lisätään 1 väärin vastauksiin jos vastaus väärä.
            indexNumber++

            let button = document.getElementById("btn");
            button.classList.add("hide"); // Piilotetaan seuraava kysymys nappi
            document.getElementById("display-question").innerHTML = "Väärä vastaus"; // vaihdetaan modalin tekstiksi Väärä vastaus
            
            // viive
            setTimeout(() => {
                questionNumber++
            }, 1500)
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
//// Näyttää uuden kysymyksen jos index numero on pienempi kuin 9.
            NextQuestion(indexNumber)

            let button = document.getElementById("btn");
            button.classList.remove("hide"); // palauttaa tarkista napin näkyville
        }
        else {
            handleEndGame()// lopettaa pelin jos index > 9 eli 10 kysymystä on kysytty
        }
        resetOptionBackground()
    }, 1500);
}

// resetoi backgroundin värit
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// poistaa valinnat kaikista radio buttoneista kun uusi kysymys näytetään.
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// Lopetuksen händläys functio
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // Arvosana taulut
    if (playerScore <= 3) {
        remark = "Hups lisää harjoitusta kaivataan."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Keskiverto suoritus, pystyt kyllä parempaan."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Hienoa työtä jatka samaan malliin."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    // score boardin tarvittavat elementit.
    document.getElementById("remarks").innerHTML = remark;
    document.getElementById("remarks").style.color = remarkColor;
    document.getElementById("grade-percentage").innerHTML = playerGrade;
    document.getElementById("wrong-answers").innerHTML = wrongAttempt;
    document.getElementById("right-answers").innerHTML = playerScore;
    document.getElementById("score-modal").style.display = "flex";

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
//  "https://dev.to/sulaimonolaniran/building-a-simple-quiz-with-html-css-and-javascript-4elp"