
"use strict";let navButton=document.querySelector(".btn--menu"),menuElement=document.querySelector(".logo-menu");function toggleNavigation(){document.body.hasAttribute("data-menu")?(document.body.removeAttribute("data-menu"),menuElement.setAttribute("src","assets/images/burger-menu.svg")):(document.body.setAttribute("data-menu",!0),menuElement.setAttribute("src","assets/images/croix.svg"))}navButton.addEventListener("click",toggleNavigation);var darkmode=document.querySelector(".btn--darkmode"),imgElement=document.querySelector(".logo-darkmode");function darkTheme(){document.body.classList.toggle("dark"),"nuit"==localStorage.getItem("mode")?(imgElement.setAttribute("src","assets/images/lune.svg"),localStorage.setItem("mode","jour")):"jour"==localStorage.getItem("mode")&&(imgElement.setAttribute("src","assets/images/soleil.svg"),localStorage.setItem("mode","nuit"))}darkmode.addEventListener("click",darkTheme),void 0===localStorage.mode&&localStorage.setItem("mode","jour"),"nuit"==localStorage.getItem("mode")&&(document.body.classList.add("dark"),imgElement.setAttribute("src","assets/images/soleil.svg")),"jour"==localStorage.getItem("mode")&&imgElement.setAttribute("src","assets/images/lune.svg");let annee=(new Date).getFullYear(),date=document.querySelector(".date");date.innerHTML="© Copyright 2020 - "+annee;
//# sourceMappingURL=main.min.js.map
