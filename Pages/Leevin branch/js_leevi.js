/*const japani = "japani.png"
const kiina = "kiina.png"
const venaja = "venaja.png"
const mummo = "mummo.png"
const puola = "puola.png"
const ukraina = "ukraina.png" EI*/

var lippu_kuva = {
    "japani"    : "japani.png",
    "kiina"     : "kiina.png",
    "venaja"    : "venaja.png",
    "mummo"     : "mummo.jpg",
    "puola"     : "puola.png",
    "ukraina"   : "ukraina.png", 
    }

//lopetus
    function paafunktio() {
    if (quiz.isEnded()) {
    naytaPisteet();
    } else {
    // show question
    var element = document.getElementById("kysymykset");
    element.innerHTML = quiz.getQuestionIndex().text;
    
    // valintojen vaihto
    var valinnat = quiz.getQuestionIndex().valinnat;
    for (var i = 0; i < valinnat.length; i++) {
    var element = document.getElementById("choice" + i);
    element.innerHTML = lippu_kuva[valinnat[i]]? '<img src="'+lippu_kuva[valinnat[i]]+'"/>':valinnat[i];
    guess("btn" + i, valinnat[i]);
    }
    
    naytaKysymyslaskuri();
    }
    };
    
    function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
    quiz.guess(guess);
    paafunktio();
    }
    };
    
    function naytaKysymyslaskuri() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("kysymyslaskuri");
    element.innerHTML = "Kysymys: " + currentQuestionNumber + "." + " / " + quiz.kysymykset.length + "";
    };
    
    function naytaPisteet() { /*DONE*/
    var lopetus = "<h4></h4>";
    lopetus += "<h4 id='score'> Pisteesi: " + quiz.score + "</h4>";
    var element = document.getElementById("quiz");
    element.innerHTML = lopetus;
    };
    
    function outputteksti() {
        if (lopetus > 4) {
           document.getElementById("outputviesti").innerHTML = "Hienoa Elmeri, vastasit kaikkiin oikein!";
        } else {
           document.getElementById("outputviesti").innerHTML = "Voi voi, yritäppäs uudelleen";
        }
    }
    
    
    // kysymykset
    var kysymykset = [
    new Question("Mikä on Kiinan lippu?", ["puola", "kiina", "ukraina", "venaja"], "kiina"),
    new Question("Mikä on Ukrainan lippu?", ["kiina", "japani", "puola", "ukraina"], "ukraina"),
    new Question("Mikä on Venäjän lippu?", ["venaja", "japani", "ukraina",  "kiina"], "venaja"),
    new Question("Mikä on Puolan lippu?", ["kiina", "puola", "japani", "ukraina"], "puola"),
    new Question("Valitse joukosta mummo", ["japani", "venaja", "mummo", "kiina"], "mummo")
    ];
    
    function Question(text, valinnat, answer) {
    this.text = text;
    this.valinnat = valinnat;
    this.answer = answer;
    }
    

    Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
    }
    
    
    function Quiz(kysymykset) {
    this.score = 0;
    this.kysymykset = kysymykset;
    this.questionIndex = 0;
    }
    
    Quiz.prototype.getQuestionIndex = function() {
    return this.kysymykset[this.questionIndex];
    }
    
    Quiz.prototype.guess = function(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
    this.score++;
    }
    
    this.questionIndex++;
    }
    
    Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.kysymykset.length;
    }
    
    //kysymyksiä lisää
    var quiz = new Quiz(kysymykset);
    
    paafunktio();