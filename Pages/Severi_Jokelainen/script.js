// Severi Jokelainen/Web-projekti 12/2022
/*
Alla oleva koodi ohjaa sivujen sekä tehtäväikkunoiden toiminnallisuutta.
Apuna käytetty mm. seuraavia sivuja:
    w3schools.com
    developer.mozilla.org/en-US/docs/Web
    stackoverflow.com
*/
// Muuttujien ja vakioiden lista.
let percent = document.getElementById("percent");
let decimal = document.getElementById("decimal");
let calc = document.getElementById("calc");
let modal1 = document.querySelector(".modalwrap1");
let modal2 = document.querySelector(".modalwrap2");
let modal3 = document.querySelector(".modalwrap3");
let answerButton = document.getElementById("answerButton");
let tryAgain = document.getElementById("tryAgain");
let answerButton2 = document.getElementById("answerButton2");
let tryAgain2 = document.getElementById("tryAgain2");
let answerButton3 = document.getElementById("answerButton3");
let tryAgain3 = document.getElementById("tryAgain3");
const RESULTS = document.getElementById("results");
const RESULTS2 = document.getElementById("results2");
const RESULTS3 = document.getElementById("results3");

//Näillä lausekkeilla näytetään tehtäväikkunat kun kuvia painetaan, ja suljetaan rastista.
document.getElementById("percent").addEventListener("click", ()=>modal1.style.display = "block");
decimal.addEventListener("click", ()=>modal2.style.display = "block");
calc.addEventListener("click", ()=>modal3.style.display = "block");
document.querySelector(".close").addEventListener("click", ()=>modal1.style.display = "none");
document.querySelector(".close2").addEventListener("click", ()=>modal2.style.display = "none");
document.querySelector(".close3").addEventListener("click", ()=>modal3.style.display = "none");

// Tehtäväikkunoiden nappien funktiot
// Näytetään ja piilotetaan tarkastus- sekä "Yritä uudelleen" -napit painettaessa.
answerButton.addEventListener("click", ()=>{        
    checkAnswers1();
    answerButton.style.display = "none";
    tryAgain.style.display = "block";
});
tryAgain.addEventListener("click", ()=>{
    clearAnswers();
    answerButton.style.display = "block";
    tryAgain.style.display = "none";
});

answerButton2.addEventListener("click", ()=>{
    checkAnswers2();
    answerButton2.style.display = "none";
    tryAgain2.style.display = "block";
});
tryAgain2.addEventListener("click", ()=>{
    clearAnswers2();
    answerButton2.style.display = "block";
    tryAgain2.style.display = "none";
});

answerButton3.addEventListener("click", ()=>{
    checkAnswers3();
    answerButton3.style.display = "none";
    tryAgain3.style.display = "block";
});
tryAgain3.addEventListener("click", ()=>{
    clearAnswers3();
    answerButton3.style.display = "block";
    tryAgain3.style.display = "none";
});
// Tehtäväpakettien tarkastus
// Alla olevat funktiot tarkistavat oikeat vastaukset ja näyttävät tuloksen käyttäjälle.
function checkAnswers1() {
    let answer1 = document.getElementById("correct1").checked;
    let answer2 = document.getElementById("correct2").checked;
    let answer3 = document.getElementById("correct3").checked;
    let answer4 = document.getElementById("correct4").checked;
    let answerArray = [];

        if (answer1 == true){
            answerArray.push(answer1);
        } if (answer2 == true) {
            answerArray.push(answer2);
        } if (answer3 == true) {
            answerArray.push(answer3);
        } if (answer4 == true) {
            answerArray.push(answer4);
        }

        RESULTS.innerText = " ";

        if (answerArray.length == 0) {
            RESULTS.innerText = "Ei yhtään oikeaa vastausta, yritä vielä uudelleen!";
            RESULTS.style.backgroundColor = "rgba(255, 0, 0, 0.397)";
        } else if (answerArray.length == 1) {
            RESULTS.innerText = "Yksi vastaus oikein, vielä vähän harjoittelua.";
            RESULTS.style.backgroundColor = "rgba(255, 0, 0, 0.397)";
        } else if (answerArray.length == 2) {
            RESULTS.innerText = "Kaksi oikein neljästä, 50%!";
            RESULTS.style.backgroundColor = "#edf0269c";
        } else if (answerArray.length == 3) {
            RESULTS.innerText = "Kolme oikeaa vastausta, hyvä!";
            RESULTS.style.backgroundColor = "rgba(0, 172, 0, 0.774)";
        } else if (answerArray.length == 4) {
            RESULTS.innerText = "Kaikki vastaukset oikein, mahtavaa!";
            RESULTS.style.backgroundColor = "rgba(0, 172, 0, 0.774)";
        }
}

function checkAnswers2() {
    let answer1 = document.getElementById("correct12").checked;
    let answer2 = document.getElementById("correct22").checked;
    let answer3 = document.getElementById("correct32").checked;
    let answer4 = document.getElementById("correct42").checked;
    let answerArray = [];

        if (answer1 == true){
            answerArray.push(answer1);
        } if (answer2 == true) {
            answerArray.push(answer2);
        } if (answer3 == true) {
            answerArray.push(answer3);
        } if (answer4 == true) {
            answerArray.push(answer4);
        }

        RESULTS2.innerText = " ";

        if (answerArray.length == 0) {
            RESULTS2.innerText = "Ei yhtään oikeaa vastausta, yritä vielä uudelleen!";
            RESULTS2.style.backgroundColor = "rgba(255, 0, 0, 0.397)";
        } else if (answerArray.length == 1) {
            RESULTS2.innerText = "Yksi vastaus oikein, vielä vähän harjoittelua.";
            RESULTS2.style.backgroundColor = "rgba(255, 0, 0, 0.397)";
        } else if (answerArray.length == 2) {
            RESULTS2.innerText = "Kaksi oikein neljästä, 50%!";
            RESULTS2.style.backgroundColor = "#edf0269c";
        } else if (answerArray.length == 3) {
            RESULTS2.innerText = "Kolme oikeaa vastausta, hyvä!";
            RESULTS2.style.backgroundColor = "rgba(0, 172, 0, 0.774)";
        } else if (answerArray.length == 4) {
            RESULTS2.innerText = "Kaikki vastaukset oikein, mahtavaa!";
            RESULTS2.style.backgroundColor = "rgba(0, 172, 0, 0.774)";
        }
}

function checkAnswers3() {
    let answer1 = document.getElementById("correct13").checked;
    let answer2 = document.getElementById("correct23").checked;
    let answer3 = document.getElementById("correct33").checked;
    let answer4 = document.getElementById("correct43").checked;
    let answerArray = [];

        if (answer1 == true){
            answerArray.push(answer1);
        } if (answer2 == true) {
            answerArray.push(answer2);
        } if (answer3 == true) {
            answerArray.push(answer3);
        } if (answer4 == true) {
            answerArray.push(answer4);
        }

        RESULTS3.innerText = " ";

        if (answerArray.length == 0) {
            RESULTS3.innerText = "Ei yhtään oikeaa vastausta, yritä vielä uudelleen!";
            RESULTS3.style.backgroundColor = "rgba(255, 0, 0, 0.397)";
        } else if (answerArray.length == 1) {
            RESULTS3.innerText = "Yksi vastaus oikein, vielä vähän harjoittelua.";
            RESULTS3.style.backgroundColor = "rgba(255, 0, 0, 0.397)";
        } else if (answerArray.length == 2) {
            RESULTS3.innerText = "Kaksi oikein neljästä, 50%!";
            RESULTS3.style.backgroundColor = "#edf0269c";
        } else if (answerArray.length == 3) {
            RESULTS3.innerText = "Kolme oikeaa vastausta, hyvä!";
            RESULTS3.style.backgroundColor = "rgba(0, 172, 0, 0.774)";
        } else if (answerArray.length == 4) {
            RESULTS3.innerText = "Kaikki vastaukset oikein, mahtavaa!";
            RESULTS3.style.backgroundColor = "rgba(0, 172, 0, 0.774)";
        }
}
// Alla olevat funktiot tyhjentävät valitut vastaukset, sekä tuloslaatikon kun "Yritä uudelleen" -nappia painetaan.
function clearAnswers (){
    let answer1 = document.getElementsByName("answer");
    let answer2 = document.getElementsByName("answer2");
    let answer3 = document.getElementsByName("answer3");
    let answer4 = document.getElementsByName("answer4");
    RESULTS.innerText = "Onnea matkaan!";
    RESULTS.style.backgroundColor = "#3ea3f0cb";
    answer1.forEach((element)=>element.checked = false);
    answer2.forEach((element)=>element.checked = false);
    answer3.forEach((element)=>element.checked = false);
    answer4.forEach((element)=>element.checked = false);
}
function clearAnswers2 (){
    let answer1 = document.getElementsByName("answer12");
    let answer2 = document.getElementsByName("answer22");
    let answer3 = document.getElementsByName("answer23");
    let answer4 = document.getElementsByName("answer24");
    RESULTS2.innerText = "Tsemppiä!";
    RESULTS2.style.backgroundColor = "#3ea3f0cb";
    answer1.forEach((element)=>element.checked = false);
    answer2.forEach((element)=>element.checked = false);
    answer3.forEach((element)=>element.checked = false);
    answer4.forEach((element)=>element.checked = false);
}
function clearAnswers3 (){
    let answer1 = document.getElementsByName("answer31");
    let answer2 = document.getElementsByName("answer32");
    let answer3 = document.getElementsByName("answer33");
    let answer4 = document.getElementsByName("answer34");
    RESULTS3.innerText = "Peukut pystyyn!";
    RESULTS3.style.backgroundColor = "#3ea3f0cb";
    answer1.forEach((element)=>element.checked = false);
    answer2.forEach((element)=>element.checked = false);
    answer3.forEach((element)=>element.checked = false);
    answer4.forEach((element)=>element.checked = false);
}


