let percent = document.getElementById("percent");
let decimal = document.getElementById("decimal");
let calc = document.getElementById("calc");
let modal = document.querySelector(".modalwrap");
let closer = document.querySelector(".close");
let answerButton = document.getElementById("answerButton");
let tryAgain = document.getElementById("tryAgain");
percent.addEventListener("click", ()=>modal.style.display = "block");
decimal.addEventListener("click", ()=>modal.style.display = "block");
calc.addEventListener("click", ()=>modal.style.display = "block");
closer.addEventListener("click", ()=>modal.style.display = "none");
answerButton.addEventListener("click", function(){
        tryAgain.style.display = "block";
        answerButton.style.display = "none";
    });
tryAgain.addEventListener("click", function(){
        tryAgain.style.display = "none";
        answerButton.style.display = "block";
    });











let linkOffCanvas = document.querySelectorAll("h4");
linkOffCanvas.forEach((element)=>element.addEventListener("mouseenter", ()=>element.style.color = "#0f66a8"));
linkOffCanvas.forEach((element)=>element.addEventListener("mouseleave", ()=>element.style.color = "black"));