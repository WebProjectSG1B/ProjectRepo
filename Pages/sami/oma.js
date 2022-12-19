function yksi (){
    let input = document.getElementById("vyksi1").value;
    let vastaus = document.getElementById("demo1");
    let vas = "panther";
        if (input == vas){
        vastaus.innerHTML = "OIKEIN";
        vastaus.classList.add('if')
            }else{
            vastaus.innerHTML = "VÄÄRIN";
            vastaus.classList.add('else')
            }
}
function toinen(){
    let input2 = document.getElementById("vyksi2").value;
    let vastaus2 = document.getElementById("demo2");
    let vas2 = "elephant";
    if (input2 == vas2){
        vastaus2.innerHTML = "OIKEIN";
        vastaus2.classList.add('if')
        
        }else{
        vastaus2.innerHTML = "VÄÄRIN";
        vastaus2.classList.add('else')
       
    }
}
function kolmas (){
    let input3 = document.getElementById("vyksi3").value;
    let vastaus3 = document.getElementById("demo3");
    let vas3 = "giraffe";
    if (input3 == vas3){
        vastaus3.innerHTML = "OIKEIN";
        vastaus3.classList.add('if')
        
        }else{
        vastaus3.innerHTML = "VÄÄRIN";
        vastaus3.classList.add('else')
    }
}
function neljas (){
    let input4 = document.getElementById("vyksi4").value;
    let vastaus4 = document.getElementById("demo4");
    let vas4 = "bear";
    if (input4 == vas4){
        vastaus4.innerHTML = "OIKEIN";
        vastaus4.classList.add('if')
        
        }else{
        vastaus4.innerHTML = "VÄÄRIN";
        vastaus4.classList.add('else')
    }

}
function viides (){
    let input5 = document.getElementById("vyksi5").value;
    let vastaus5 = document.getElementById("demo5");
    let vas5 = "cat";
    if (input5 == vas5){
        vastaus5.innerHTML = "OIKEIN";
        vastaus5.classList.add('if')
        
        }else{
        vastaus5.innerHTML = "VÄÄRIN";
        vastaus5.classList.add('else')
    }

}
