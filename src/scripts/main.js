
"use strict";
import { gsap } from "gsap/all";
import scrollTrigger from 'gsap/ScrollTrigger';

let navButton=document.querySelector(".btn--menu"),menuElement=document.querySelector(".logo-menu");
function toggleNavigation(){document.body.hasAttribute("data-menu")?(document.body.removeAttribute("data-menu"),menuElement.setAttribute("src","assets/images/burger-menu.svg")):(document.body.setAttribute("data-menu",!0),menuElement.setAttribute("src","assets/images/croix.svg"))}navButton.addEventListener("click",toggleNavigation);
var darkmode=document.querySelector(".btn--darkmode"),imgElement=document.querySelector(".logo-darkmode");
function darkTheme(){document.body.classList.toggle("dark"),"nuit"==localStorage.getItem("mode")?(imgElement.setAttribute("src","assets/images/lune.svg"),localStorage.setItem("mode","jour")):"jour"==localStorage.getItem("mode")&&(imgElement.setAttribute("src","assets/images/soleil.svg"),localStorage.setItem("mode","nuit"))}darkmode.addEventListener("click",darkTheme),
void 0===localStorage.mode&&localStorage.setItem("mode","jour"),"nuit"==localStorage.getItem("mode")&&(document.body.classList.add("dark"),imgElement.setAttribute("src","assets/images/soleil.svg")),"jour"==localStorage.getItem("mode")&&imgElement.setAttribute("src","assets/images/lune.svg");
//# sourceMappingURL=main.min.js.map

// année


let annee = new Date().getFullYear();
document.querySelector(".annee").innerHTML = annee;


gsap.to("h1",{
    scale: 1.1,
    duration:5,

})

/* scale mes images index*/
/*
gsap.to(".avantage__interface--icone",{
    scale: 2.5,
    duration:5,
})

gsap.to(".avantage__rubrique--icone",{
    scale: 2.5,
    duration:5,
})


gsap.to(".avantage__messagerie--icone",{
    scale: 2.5,
    duration:5,
})
*/














