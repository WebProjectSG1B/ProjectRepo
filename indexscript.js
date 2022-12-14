let linkText = document.querySelectorAll("a");
let linkOffCanvas = document.querySelectorAll("h4");

linkText.forEach((element)=>element.addEventListener("mouseenter", ()=>element.style.color = "#F05A56"));
linkText.forEach((element)=>element.addEventListener("mouseleave", ()=>element.style.color = "white"));

linkOffCanvas.forEach((element)=>element.addEventListener("mouseenter", ()=>element.style.color = "#0f66a8"));
linkOffCanvas.forEach((element)=>element.addEventListener("mouseleave", ()=>element.style.color = "black"));