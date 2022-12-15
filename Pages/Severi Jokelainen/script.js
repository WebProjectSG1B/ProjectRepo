let percent = document.getElementById("percent");
let decimal = document.getElementById("decimal");
let calc = document.getElementById("calc");
let modal1 = document.querySelector(".modalwrap1");
let closer = document.querySelector(".close");
let answerButton = document.getElementById("answerButton");
let tryAgain = document.getElementById("tryAgain");
const RESULTS = document.getElementById("results");

percent.addEventListener("click", ()=>modal1.style.display = "block");
// decimal.addEventListener("click", ()=>modal.style.display = "block");
// calc.addEventListener("click", ()=>modal.style.display = "block");
closer.addEventListener("click", ()=>modal1.style.display = "none");

answerButton.addEventListener("click", function(){
        tryAgain.style.display = "block";
        answerButton.style.display = "none";
    });
tryAgain.addEventListener("click", function(){
        tryAgain.style.display = "none";
        answerButton.style.display = "block";
    });
answerButton.addEventListener("click", checkAnswers1);
tryAgain.addEventListener("click", clearAnswers);
// Modal function
function checkAnswers1() {
    let answer1 = document.getElementById("correct1");
    let answer2 = document.getElementById("correct2");
    let answer3 = document.getElementById("correct3");
    let answer4 = document.getElementById("correct4");
    let answerArray = [answer1,answer2,answer3,answer4]

        RESULTS.innerText = " ";

        if (answer1.checked == true || answer2.checked == true || answer3.checked == true || answer4.checked == true) {
            RESULTS.innerText = "Yksi vastaus oikein neljästä";
        } if (answerArray.every(element => element.checked == true) == true) {
            console.log("Kaikki oikein, mahtavaa!");
        }
    
}
// This function clears all the answer option when clicking the "Yritä uudelleen" -button.
function clearAnswers (){
    let answer1 = document.getElementsByName("answer");
    let answer2 = document.getElementsByName("answer2");
    let answer3 = document.getElementsByName("answer3");
    let answer4 = document.getElementsByName("answer4");
    RESULTS.innerText = "Onnea matkaan!";
    answer1.forEach((element)=>element.checked = false);
    answer2.forEach((element)=>element.checked = false);
    answer3.forEach((element)=>element.checked = false);
    answer4.forEach((element)=>element.checked = false);
}


// function checkAnswersArray(){
//     let answer1 = document.getElementById("correct1");
//     let answer2 = document.getElementById("correct2");
//     let answer3 = document.getElementById("correct3");
//     let answer4 = document.getElementById("correct4");
//     let answerArray = [answer1,answer2,answer3,answer4]
//     console.log(answerArray.forEach());
//     return answerArray.every(element => element == true);
// }
