document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglecharles = document.getElementById("menuTogglecharles");
const menucharles = document.getElementById("sideMenucharles");
const overlaycharles = document.getElementById("overlaycharles");
const closecharles = document.getElementById("closeMenucharles");

const linksMenucharles = document.querySelectorAll(".side-menu-charles a");

function fecharMenucharles() {
  if (menucharles) menucharles.classList.remove("active");
  if (overlaycharles) overlaycharles.classList.remove("active");
}

if (togglecharles) {
  togglecharles.addEventListener("click", () => {
    menucharles?.classList.add("active");
    overlaycharles?.classList.add("active");
  });
}

if (closecharles) {
  closecharles.addEventListener("click", fecharMenucharles);
}

if (overlaycharles) {
  overlaycharles.addEventListener("click", fecharMenucharles);
}

linksMenucharles.forEach(link => {
  link.addEventListener("click", fecharMenucharles);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinkscharles() {

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });

})();


});

/*//////////*///////
//////BANNER///////////////
//////////////////

const charlesBanner = document.querySelector(".charles-banner-bg");

if(charlesBanner){

  charlesBanner.addEventListener("mousemove", (e)=>{

    const rect = charlesBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    charlesBanner.style.setProperty("--mouse-x", x + "px");
    charlesBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-charles-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-charles");

  const dotsContainer =
    document.querySelector(".dots-charles");

  const bg =
    document.querySelector(".bg-slider-charles");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-charles");

    if(i === 0){
      dot.classList.add("active");
    }

    dot.addEventListener("click", ()=>{

      index = i;

      updateSlide();

    });

    dotsContainer.appendChild(dot);

  });

  const dots =
    document.querySelectorAll(".dot-charles");

  function updateSlide(){

    track.style.transform =
      `translateX(-${index * 100}%)`;

    dots.forEach(dot =>
      dot.classList.remove("active")
    );

    dots[index].classList.add("active");

    const img =
      slides[index].querySelector("img");

    if(img && bg){

      bg.style.backgroundImage =
        `url(${img.src})`;

    }

  }

  const nextBtn =
    document.querySelector(".next");

  const prevBtn =
    document.querySelector(".prev");

  if(nextBtn){

    nextBtn.onclick = ()=>{

      index++;

      if(index >= slides.length){
        index = 0;
      }

      updateSlide();

    };

  }

  if(prevBtn){

    prevBtn.onclick = ()=>{

      index--;

      if(index < 0){
        index = slides.length - 1;
      }

      updateSlide();

    };

  }

  let startX = 0;
  let endX = 0;

  track.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

  });

  track.addEventListener("touchmove",(e)=>{

    endX = e.touches[0].clientX;

  });

  track.addEventListener("touchend",()=>{

    let diff = startX - endX;

    if(diff > 50) index++;

    if(diff < -50) index--;

    if(index >= slides.length){
      index = 0;
    }

    if(index < 0){
      index = slides.length - 1;
    }

    updateSlide();

  });

  updateSlide();

}

/*//////////*///////
//////NUMEROS///////////////
//////////////////

window.addEventListener("scroll", function(){

  const secao = document.querySelector(".numeros-charles");
  const bg = document.querySelector(".bg-numeros-charles");

  if(!secao || !bg) return;

  const rect = secao.getBoundingClientRect();
  const alturaTela = window.innerHeight;

  if(rect.top < alturaTela && rect.bottom > 0){

    let progresso = rect.top / alturaTela;

    bg.style.transform =
      "translateY(" + progresso * 80 + "px) scale(1.05)";
  }

});







/*//////////*///////
//////TEMPORADAS///////////////
//////////////////

const charlesTemporadas = {
    "2018": [
  { gp:"Australia", pos:"P13", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Bahrain", pos:"P12", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"China", pos:"P19", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Azerbaijan", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Spain", pos:"P10", pontos:"1", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Monaco", pos:"P18", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Canada", pos:"P10", pontos:"1", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"France", pos:"P10", pontos:"1", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Austria", pos:"P9", pontos:"2", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Great Britain", pos:"P19", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Germany", pos:"P15", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Hungary", pos:"P20", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Belgium", pos:"P18", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Italy", pos:"P11", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Russia", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Japan", pos:"P18", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"United States", pos:"P15", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Mexico", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Brazil", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" }
],

     "2019": [
  { gp:"Australia", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Bahrain", pos:"P3", pontos:"16", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"China", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P5", pontos:"11", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"France", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Germany", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P1", pontos:"25", tipo:"charles-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"charles-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Russia", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P4", pontos:"13", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P4", pontos:"13", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" }
],
   
 "2020": [
  { gp:"Austria", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Styria", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P11", pontos:"0", tipo:"charles-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"70th Anniversary", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P14", pontos:"0", tipo:"charles-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Tuscany", pos:"P8", pontos:"4", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Russia", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Eifel", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Portugal", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Turkey", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Sakhir", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P13", pontos:"0", tipo:"charles-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" }
],  
   
 "2021": [
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Portugal", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"DNS", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"France", pos:"P16", pontos:"0", tipo:"charles-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Styria", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P8", pontos:"4", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P8", pontos:"2", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Russia", pos:"P15", pontos:"0", tipo:"charles-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Turkey", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Qatar", pos:"P8", pontos:"4", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P10", pontos:"1", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" }
],  
   
   "2022": [
  { gp:"Bahrain", pos:"P1", pontos:"26", tipo:"charles-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P2", pontos:"19", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Australia", pos:"P1", pontos:"26", tipo:"charles-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"P6", pontos:"15", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Miami", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P1", pontos:"32", tipo:"charles-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"France", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" }
],
   
"2023": [
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Miami", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P11", pontos:"0", tipo:"charles-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P9", pontos:"2", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Qatar", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Las Vegas", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" }
],   
   
   "2024": [
  { gp:"Bahrain", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P3", pontos:"16", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"China", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Miami", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P1", pontos:"25", tipo:"charles-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P11", pontos:"0", tipo:"charles-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P14", pontos:"0", tipo:"charles-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"charles-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Las Vegas", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Qatar", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" }
],
   
   "2025": [
  { gp:"Australia", pos:"P8", pontos:"4", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"China", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Miami", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P1", pontos:"25", tipo:"charles-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" }
]
   
     
     
     
};
const charlesCampeonato = {
   "2018": {
  posicao: "13º",
  pontos: 39
},  
     
 "2019": {
  posicao: "4º",
  pontos: 264
},  

"2020": {
  posicao: "8º",
  pontos: 98
},
   
   "2021": {
  posicao: "7º",
  pontos: 159
},
   
   "2022": {
  posicao: "2º",
  pontos: 308
},
     
     "2023": {
  posicao: "5º",
  pontos: 206
},
     
     "2024": {
  posicao: "3º",
  pontos: 356
},
     
 "2025": {
  posicao: "3º",
  pontos: 114
}
     
};







const charlesContainer =
document.querySelector(".charles-corridas-container");

const charlesSummary =
document.querySelector(".charles-season-summary");

const charlesBtns =
document.querySelectorAll(".charles-ano-btn");

/* ==========================
TEMPORADA 2026 VIA API
========================== */

async function carregarcharles2026(){

try{

const [gpReq, sprintReq] = await Promise.all([
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/leclerc/results.json"),
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/leclerc/sprint.json")
]);

const gpData = await gpReq.json();
const sprintData = await sprintReq.json();

const corridas =
gpData?.MRData?.RaceTable?.Races || [];

const sprints =
sprintData?.MRData?.RaceTable?.Races || [];

let temporada = [];
let pontosTotal = 0;

corridas.forEach(gp=>{

const race = gp.Results?.[0];

if(!race) return;

const round = gp.round;

let pos = race.positionText;

if(pos==="R") pos="DNF";
if(pos==="W") pos="DNS";
if(pos==="PR") pos="DNF";
if(pos==="PW") pos="DNS";

let tipo="charles-sem-pontos";

if(pos==="DNF"||pos==="DSQ"){
tipo="charles-dnf";
}
else if(Number(pos)===1){
tipo="charles-vitoria";
}
else if(Number(pos)<=3){
tipo="charles-podio";
}
else if(Number(race.points)>0){
tipo="charles-pontos";
}

const sprintRace =
sprints.find(s=>s.round===round);

if(sprintRace){

const sprintResult =
sprintRace.SprintResults?.[0];

if(sprintResult){

temporada.push({

gp:gp.raceName+" • Sprint",

pos:`P${sprintResult.position}`,

pontos:String(sprintResult.points),

tipo,

equipe:"Ferrari",

logo:"icons/ferrari.png",

sprint:true

});

pontosTotal += Number(sprintResult.points);

}

}

temporada.push({

gp:gp.raceName,

pos:
(
pos.startsWith("P")||
pos==="DNF"||
pos==="DNS"||
pos==="DSQ"
)
?pos
:`P${pos}`,

pontos:String(race.points),

tipo,

equipe:"Ferrari",

logo:"icons/ferrari.png",

sprint:false

});

pontosTotal += Number(race.points);

});

charlesTemporadas["2026"]=temporada;

let posicaoCampeonato="-";

try{

const req=
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/driverStandings.json"
);

const data=
await req.json();

const charles=
data
.MRData
.StandingsTable
.StandingsLists?.[0]
?.DriverStandings
?.find(
d=>d.Driver.driverId==="leclerc"
);

if(charles){

posicaoCampeonato=
`${charles.position}&ordm;`;

}

}catch{}

charlesCampeonato["2026"]={

posicao:posicaoCampeonato,

pontos:pontosTotal

};

}catch(err){

console.log(err);

}

}

/* ==========================
CARREGAR TEMPORADA
========================== */

function carregarTemporada(ano){

if(
!charlesContainer
)return;

charlesContainer.innerHTML="";

const temporada =
charlesTemporadas[ano] || [];

let equipeAnterior =
null;

temporada.forEach(
(corrida,index)=>{

const card =
document.createElement("div");

card.className=
`charles-corrida-card ${corrida.tipo}`;

const mudouEquipe =
equipeAnterior &&
equipeAnterior !== corrida.equipe;

if(mudouEquipe){

card.classList.add(
"charles-team-change"
);

}

card.innerHTML=`

<span class="charles-gp">
${corrida.gp} GP
</span>

<div class="charles-team">

<img
src="${corrida.logo}"
class="charles-team-logo">

</div>

<span class="charles-resultado">
${corrida.pos}
</span>

<span class="charles-pontos-texto">
${corrida.pontos} pts
</span>

`;

charlesContainer.appendChild(
card
);

setTimeout(()=>{

card.classList.add(
"show"
);

},index*70);

equipeAnterior =
corrida.equipe;

});

const resumo =
charlesCampeonato[ano];

if(
charlesSummary
){

charlesSummary.innerHTML=`

<div
class="charles-summary-card show">

<h3
class="charles-summary-title">

Season ${ano}

</h3>

<div
class="charles-summary-stats">

<div
class="charles-summary-box">

<span
class="charles-summary-label">

Position

</span>

<span
class="charles-summary-value">

${resumo?.posicao || "—"}

</span>

</div>

<div
class="charles-summary-box">

<span
class="charles-summary-label">

Points

</span>

<span
class="charles-summary-value">

${resumo?.pontos || "0"}

</span>

</div>

</div>

</div>

`;

}

}

/* ==========================
INICIAR
========================== */

async function iniciarcharles(){

await carregarcharles2026();

charlesBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

charlesBtns.forEach(
b=>
b.classList.remove(
"active"
)
);

btn.classList.add(
"active"
);

carregarTemporada(
btn.dataset.year
);

}

);

});

carregarTemporada(
"2026"
);

}




iniciarcharles();



/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-charles");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-charles");

const fraseEng = '"P1 charles, amazing race!"';
const frasePil = '"Thank you guys, car was perfect!"';

let i = 0;
let j = 0;
let timeouts = [];

/* RESET */
function resetar() {
  audio.pause();
  audio.currentTime = 0;

  engText.innerHTML = "";
  pilText.innerHTML = "";

  i = 0;
  j = 0;

  card.classList.remove("ativo", "falando", "saindo");

  /* 👇 fecha conteúdo */
  content.style.height = "0px";

  timeouts.forEach(t => clearTimeout(t));
  timeouts = [];
}

/* ESCREVER ENGENHEIRO */
function escreverEng() {
  if (i < fraseEng.length) {
    engText.innerHTML += fraseEng[i++];
    timeouts.push(setTimeout(escreverEng, 20));
  }
}

/* ESCREVER PILOTO */
function escreverPil() {
  if (j < frasePil.length) {
    pilText.innerHTML += frasePil[j++];
    timeouts.push(setTimeout(escreverPil, 20));
  }
}

/* INICIAR */
function iniciar() {
  resetar();

card.classList.remove("mostrar-texto");

  audio.currentTime = 0;
  audio.play().catch(()=>{});

  card.classList.add("ativo");

  content.style.height = "0px";
  content.offsetHeight;

  // wave liga
  timeouts.push(setTimeout(() => {
    card.classList.add("falando");
  }, 300));

  // 👇 cresce + sobe (engenheiro)
  timeouts.push(setTimeout(() => {
    content.style.height = "120px";
    card.classList.add("mostrar-texto");
    escreverEng();
  }, 800));

  // 👇 expande mais (piloto)
  timeouts.push(setTimeout(() => {
    content.style.height = "220px";
  }, 2000));

  // piloto
  timeouts.push(setTimeout(() => {
    escreverPil();
  }, 2100));

  // desliga rádio
  timeouts.push(setTimeout(() => {
    card.classList.remove("falando");
  }, 3000));

  // some
  timeouts.push(setTimeout(() => {
    card.classList.add("saindo");
  }, 3500));
}

/* CLIQUE */
section.addEventListener("click", iniciar);

const spans = document.querySelectorAll(".wave-charles span");

spans.forEach((span, index) => {
  span.style.setProperty("--i", index);
});


const topBtn = document.querySelector('a[href="#top"]');

if(topBtn){
  topBtn.addEventListener("click", function(e){
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
  
  
      /*/////////////////////////////////////
  GALERIA
  ////////////////////////////////////*/
  
  
  
  const itens = document.querySelectorAll(".item-galeria-charles");
const lightbox = document.querySelector(".lightbox-charles");
const imgLightbox = document.querySelector(".img-lightbox-charles");
const fechar = document.querySelector(".fechar-charles");

/* ABRIR */
itens.forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img").src;
    imgLightbox.src = img;
    lightbox.style.display = "flex";
  });
});

/* FECHAR */
fechar.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
  if (e.target !== imgLightbox) {
    lightbox.style.display = "none";
  }
};



/* =============================================
	TEAMMATES 
============================================= */


const leclercData=[

{

first:"MARCUS",

last:"ERICSSON",

img:"charles/ericsson.png",

years:"2018",

stats:{

quali:[17,4],

races:[10,9],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[39,9]

}

},



{

first:"SEBASTIAN",

last:"VETTEL",

img:"charles/vettel.png",

years:"2019 — 2020",

stats:{

quali:[29,12],

races:[20,14],

podiums:[14,12],

wins:[2,1],

pole:[10,2],

points:[362,258]

}

},



{

first:"CARLOS",

last:"SAINZ",

img:"charles/sainz.png",

years:"2021 — 2024",

stats:{

quali:[58,30],

races:[43,41],

podiums:[43,25],

wins:[8,4],

pole:[20,5],

points:[932,847]

}

},



{

first:"LEWIS",

last:"HAMILTON",

img:"charles/lewis.png",

years:"2025",

stats:{

quali:[19,5],

races:[20,4],

podiums:[7,0],

wins:[0,0],

pole:[1,0],

points:[242,156]

}

}

]

	



let current=0



const mateImg=
document.getElementById(
"mateImg"
)

const mateFirst=
document.getElementById(
"mateFirst"
)

const mateLast=
document.getElementById(
"mateLast"
)

const years=
document.getElementById(
"leclercYears"
)



function setBar(
id,
value,
max
){

document
.getElementById(id)
.style.width=

(value/max*100)

+"%"

}



function animateNumber(
el,
target
){

let value=0

const speed=
target/30



const timer=
setInterval(()=>{

value+=speed



if(
value>=target
){

value=
target

clearInterval(
timer
)

}



el.textContent=

Math.floor(
value
)

},20)

}





function updateStats(
data
){

const maxQuali=
Math.max(
...data.stats.quali
)

const maxRace=
Math.max(
...data.stats.races
)

const maxPod=
Math.max(
...data.stats.podiums
)

const maxWin=
Math.max(
...data.stats.wins
)

const maxPole=
Math.max(
...data.stats.pole
)

const maxPoints=
Math.max(
...data.stats.points
)



animateNumber(

document.getElementById(
"leclercQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"leclercQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"leclercRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"leclercRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"leclercPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"leclercPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"leclercWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"leclercWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"leclercPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"leclercPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"leclercPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"leclercPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"leclercBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"leclercBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"leclercBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"leclercBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"leclercBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"leclercBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"leclercBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"leclercBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"leclercBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"leclercBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"leclercBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"leclercBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
leclercData[
index
]



mateImg.style.opacity=0



setTimeout(()=>{

mateImg.src=
d.img

mateImg.style.opacity=1

},250)



mateFirst.textContent=
d.first

mateLast.textContent=
d.last

years.textContent=
d.years



updateStats(
d
)



document
.querySelectorAll(
".leclerc-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.leclerc-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".leclerc-tab"
)

.forEach(

btn=>{

btn.onclick=()=>{

current=

Number(

btn.dataset.id

)



render(
current
)

}

}

)



document
.querySelector(
".leclerc-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

leclercData
.length-1



render(
current
)

}



document
.querySelector(
".leclerc-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
leclercData.length

)

current=0



render(
current
)

}



render(0) 




// =========================================
// NOTÍCIAS
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiascharles");
const fecharNoticias = document.getElementById("fecharNoticiascharles");

const atualizarNoticias =
document.getElementById("atualizarNoticiascharles");


const painelNoticias = document.getElementById("painelNoticiascharles");
const overlayNoticias = document.getElementById("overlayNoticiascharles");

const listaNoticias = document.getElementById("listaNoticiascharles");




// SUA CHAVE DA GNEWS
const API_KEY = "889862d8ea73d69762ab87e9c68adab7";

abrirNoticias.addEventListener("click", () => {

    painelNoticias.classList.add("active");
    overlayNoticias.classList.add("active");

    carregarNoticias();

});

fecharNoticias.addEventListener("click", fecharPainelNoticias);

overlayNoticias.addEventListener("click", fecharPainelNoticias);

function fecharPainelNoticias(){

    painelNoticias.classList.remove("active");
    overlayNoticias.classList.remove("active");

}

// =========================================
// BUSCAR NOTÍCIAS
// =========================================

async function carregarNoticias(){

    listaNoticias.innerHTML = `
        <div class="loading-noticias-charles">

            <div class="spinner-charles"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{


const resposta = await fetch(
`https://gnews.io/api/v4/search?q="Charles Leclerc"&lang=en&max=10&apikey=${API_KEY}`
);

			


        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-charles">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-charles">

                <img
                src="${noticia.image || 'pilotos/charles.png'}"
                alt="Notícia">

                <div class="card-conteudo-charles">

                    <div class="data-noticia-charles">

                    ${new Date(
                    noticia.publishedAt
                    ).toLocaleDateString("pt-BR")}

                    </div>

                    <h3>

                    ${noticia.title}

                    </h3>

                    <p>

                    ${noticia.description || ""}

                    </p>

                    <a
                    href="${noticia.url}"
                    target="_blank">

                    Ler notícia →

                    </a>

                </div>

            </div>

            `;

        });

    }

    catch(erro){

        console.error(erro);

        listaNoticias.innerHTML = `

        <div class="loading-noticias-charles">

            Erro ao carregar notícias.

        </div>

        `;

    }

}

atualizarNoticias.addEventListener("click",()=>{

    carregarNoticias();

});

/*////////////////////////////////////////
BOTAO TOP////
////////////////////////////////////////*/
const btnTopo = document.getElementById("btnTopo");

// Mostrar quando descer a página
window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        btnTopo.classList.add("show");
    } else {
        btnTopo.classList.remove("show");
    }

});

// Voltar ao topo
btnTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});




// ======================================================
// NUMEROS
// ======================================================

// HISTÓRICO (ATÉ 2025)
const historicocharles = {

    corridas: 176,
    vitorias: 9,
    podios: 52,
    poles: 27,
    pontos: 1731

};

// CONFIGURAÇÃO
const driverId = "leclerc";
const temporada = "2026";

// ELEMENTOS HTML
const contadorCorridas =
document.getElementById("corridas-charles");

const contadorVitorias =
document.getElementById("vitorias-charles");

const contadorPodios =
document.getElementById("podios-charles");

const contadorPoles =
document.getElementById("poles-charles");

const contadorPontos =
document.getElementById("pontos-charles");

// ======================================
// RESULTADOS
// ======================================

async function buscarResultadosTemporada(){

    const resposta = await fetch(
`https://api.jolpi.ca/ergast/f1/${temporada}/drivers/${driverId}/results.json?limit=100`
    );

    const dados = await resposta.json();

    return dados.MRData.RaceTable.Races;

}

// ======================================
// QUALIFICAÇÃO
// ======================================

async function buscarQualificacoes(){

    const resposta = await fetch(
`https://api.jolpi.ca/ergast/f1/${temporada}/drivers/${driverId}/qualifying.json?limit=100`
    );

    const dados = await resposta.json();

    return dados.MRData.RaceTable.Races;

}

// ======================================
// CALCULAR ESTATÍSTICAS
// ======================================

async function calcularEstatisticas(){

    const resultados =
    await buscarResultadosTemporada();

	  const sprints = 
		await buscarSprints();

    const qualificacoes =
    await buscarQualificacoes();

    let corridas2026 = 0;
    let vitorias2026 = 0;
    let podios2026 = 0;
    let pontos2026 = 0;
    let poles2026 = 0;

	

resultados.forEach(corrida => {

    // Conta a corrida
    corridas2026++;

    const resultado = corrida.Results?.[0];

    if (!resultado) return;

    const posicao = Number(resultado.position);

    pontos2026 += Number(resultado.points || 0);

    console.log(
        corrida.raceName,
        "Posição:", posicao,
        "Pontos:", resultado.points
    );

    if (posicao === 1) {
        vitorias2026++;
        console.log("✅ Vitória contada");
    }

    if (posicao <= 3) {
        podios2026++;
        console.log("✅ Pódio contado");
    }

});


	let pontosSprint2026 = 0;

sprints.forEach(corrida => {

    const resultado = corrida.SprintResults?.[0];

    if (!resultado) return;

    pontosSprint2026 += Number(resultado.points || 0);

});

	
	
console.log("TOTAL PÓDIOS:", podios2026);




	

qualificacoes.forEach(corrida => {

    const resultado = corrida.QualifyingResults?.[0];

    if (!resultado) return;

    console.log(
        corrida.raceName,
        "Largou em:", resultado.position
    );

    if (resultado.position === "1") {
        poles2026++;
        console.log("✅ Pole contada");
    }

});

console.log({
    corridas2026,
    vitorias2026,
    podios2026,
    poles2026,
    pontos2026
});
	
    return{

        corridas:
        historicocharles.corridas +
        corridas2026,

        vitorias:
        historicocharles.vitorias +
        vitorias2026,

        podios:
        historicocharles.podios +
        podios2026,

        poles:
        historicocharles.poles +
        poles2026,

        pontos:
historicocharles.pontos +
pontos2026 +
pontosSprint2026
			
    };

}


// ======================================
// SPRINTS
// ======================================

async function buscarSprints() {

    const resposta = await fetch(
`https://api.jolpi.ca/ergast/f1/${temporada}/drivers/${driverId}/sprint.json?limit=100`
    );

    const dados = await resposta.json();

    return dados.MRData.RaceTable.Races;

}




// ======================================
// ATUALIZAR HTML
// ======================================

async function atualizarCards(){

    try{

        const stats =
        await calcularEstatisticas();

        contadorCorridas.dataset.target =
        stats.corridas;

        contadorVitorias.dataset.target =
        stats.vitorias;

        contadorPodios.dataset.target =
        stats.podios;

        contadorPoles.dataset.target =
        stats.poles;

        contadorPontos.dataset.target =
        stats.pontos;



			
    }

			
    catch(erro){

        console.error(erro);

    }

}

// ======================================
// CONTADORES
// ======================================

function animarContadores(){

    const secao =
    document.querySelector(".numeros-charles");

    if(!secao) return;

    const observer =
    new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-charles")
                .forEach(contador=>{

                    if(contador.classList.contains("contado"))
                    return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-charles"
                    );

                    let atual = 0;

                    const incremento =
                    Math.max(1, alvo / 180);

                    function atualizar(){

                        if(atual < alvo){

                            atual += incremento;

                            if(atual > alvo)
                            atual = alvo;

                            contador.textContent =
                            Math.floor(atual)
                            .toLocaleString("pt-BR");

                            if(barra){

                                barra.style.width =
                                ((atual/alvo)*100)+"%";

                            }

                            requestAnimationFrame(atualizar);

                        }

                        else{

                            contador.textContent =
                            alvo.toLocaleString("pt-BR");

                            if(barra){

                                barra.style.width = "100%";

                            }

                        }

                    }

                    atualizar();

                });

                observer.disconnect();

            }

        });

    },{

        threshold:0.4

    });

    observer.observe(secao);

}

// ======================================
// CARDS
// ======================================

function animarCards(){

    document
    .querySelectorAll(".animar-charles")
    .forEach((card,index)=>{

        setTimeout(()=>{

            card.classList.add("ativo");

        },index*180);

    });

}

// ======================================
// INICIAR
// ======================================

async function iniciar(){

    await atualizarCards();

    animarCards();

    animarContadores();

}

iniciar();



/* =========================================================
   charlescharles— ESTATÍSTICAS DA TEMPORADA 2026
   JOLPICA F1 API
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    const ANO = 2026;
    const PILOTO = "leclerc";

    const BASE = `https://api.jolpi.ca/ergast/f1/${ANO}`;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const positionEl =
        document.getElementById("charles-season-position");

    const pointsEl =
        document.getElementById("charles-season-points");

    const racesEl =
        document.getElementById("charles-season-races");

    const winsEl =
        document.getElementById("charles-season-wins");

    const podiumsEl =
        document.getElementById("charles-season-podiums");

    const polesEl =
        document.getElementById("charles-season-poles");

    const top5El =
        document.getElementById("charles-season-top5");

    const fastestLapsEl =
        document.getElementById("charles-season-fastest-laps");

    const dnfsEl =
        document.getElementById("charles-season-dnfs");

    const bestResultEl =
        document.getElementById("charles-season-best-result");

    const averageFinishEl =
        document.getElementById("charles-season-average-finish");

    const averageQualiEl =
        document.getElementById("charles-season-average-quali");

    const bestQualiEl =
        document.getElementById("charles-season-best-quali");


    /* =====================================================
       FETCH
    ===================================================== */

    async function buscar(url) {

        const response = await fetch(url);

        if (!response.ok) {

            throw new Error(
                `Erro HTTP ${response.status}: ${url}`
            );

        }

        return await response.json();
    }


    /* =====================================================
       ANIMAÇÃO DOS NÚMEROS
    ===================================================== */

    function animarNumero(elemento, valor) {

        if (!elemento) return;

        const numero = Number(valor);

        if (isNaN(numero)) {

            elemento.textContent = valor;

            return;
        }


        let inicio = null;


        function animacao(timestamp) {

            if (!inicio) {
                inicio = timestamp;
            }


            const progresso =
                Math.min(
                    (timestamp - inicio) / 900,
                    1
                );


            elemento.textContent =
                Math.floor(
                    numero * progresso
                );


            if (progresso < 1) {

                requestAnimationFrame(animacao);

            } else {

                elemento.textContent = numero;

            }

        }


        requestAnimationFrame(animacao);

    }


    /* =====================================================
       PRINCIPAL
    ===================================================== */

    try {


        /* =================================================
           1 — CLASSIFICAÇÃO DO CAMPEONATO
        ================================================= */

        const standingsData =
            await buscar(
                `${BASE}/driverstandings.json`
            );


        const listaStandings =
            standingsData
                ?.MRData
                ?.StandingsTable
                ?.StandingsLists
                ?.at(0)
                ?.DriverStandings || [];


        const antonelliStanding =
            listaStandings.find(driver => {

                return (
                    driver.Driver?.driverId === PILOTO
                );

            });


        if (antonelliStanding) {

            positionEl.textContent =
                `P${antonelliStanding.position}`;


            animarNumero(
                pointsEl,
                antonelliStanding.points
            );

        } else {

            positionEl.textContent = "—";

            pointsEl.textContent = "—";

        }


        /* =================================================
           2 — RESULTADOS DE 2026
        ================================================= */

        const resultsData =
            await buscar(
                `${BASE}/drivers/${PILOTO}/results.json?limit=100`
            );


        const races =
            resultsData
                ?.MRData
                ?.RaceTable
                ?.Races || [];


        console.log(
            "🏁 Corridas encontradas:",
            races.length
        );


        /* =================================================
           3 — VARIÁVEIS
        ================================================= */

        let corridas = 0;

        let vitorias = 0;

        let podios = 0;

        let top5 = 0;

        /*
            ABANDONOS:

            DNF
            DSQ
            DNS

            Tudo será contado junto.
        */

        let abandonos = 0;

        let voltasRapidas = 0;


        let melhorResultado = Infinity;


        let somaChegada = 0;

        let chegadasValidas = 0;


        /* =================================================
           4 — ANALISAR CADA CORRIDA
        ================================================= */

        races.forEach(race => {


            const resultado =
                race?.Results?.[0];


            if (!resultado) {

                return;

            }


            corridas++;


            /* =================================================
               POSIÇÃO
            ================================================= */

            const posicao =
                parseInt(
                    resultado.position
                );


            /* =================================================
               STATUS
            ================================================= */

            const status =
                (resultado.status || "")
                    .toLowerCase()
                    .trim();


            console.log(
                `${race.raceName || "GP"} → posição:`,
                resultado.position,
                "| status:",
                resultado.status
            );


            /* =================================================
               IDENTIFICAR DNS
            ================================================= */

            const dns =
                status === "not classified" ||
                status === "dns" ||
                status.includes("did not start");


            /* =================================================
               IDENTIFICAR DSQ
            ================================================= */

            const dsq =
                status === "disqualified" ||
                status === "excluded" ||
                status === "dsq";


            /* =================================================
               IDENTIFICAR DNF
            ================================================= */

            const dnf =
                !dns &&
                !dsq &&
                (
                    status === "retired" ||
                    status === "dnf" ||
                    status.includes("accident") ||
                    status.includes("collision") ||
                    status.includes("engine") ||
                    status.includes("gearbox") ||
                    status.includes("transmission") ||
                    status.includes("hydraulics") ||
                    status.includes("electrical") ||
                    status.includes("mechanical") ||
                    status.includes("brakes") ||
                    status.includes("overheating") ||
                    status.includes("puncture") ||
                    status.includes("damage") ||
                    status.includes("spun off") ||
                    status.includes("wheel") ||
                    status.includes("suspension") ||
                    status.includes("fuel") ||
                    status.includes("oil") ||
                    status.includes("water")
                );


            /* =================================================
               ABANDONO
               
               DNF + DSQ + DNS
            ================================================= */

            if (dnf || dsq || dns) {

                abandonos++;

            }


            /* =================================================
               CORRIDA CONCLUÍDA
            ================================================= */

            const terminou =
                !dnf &&
                !dsq &&
                !dns;


            if (terminou && !isNaN(posicao)) {


                /* =============================================
                   VITÓRIA
                ============================================= */

                if (posicao === 1) {

                    vitorias++;

                }


                /* =============================================
                   PÓDIO
                ============================================= */

                if (posicao <= 3) {

                    podios++;

                }


                /* =============================================
                   TOP 5
                ============================================= */

                if (posicao <= 5) {

                    top5++;

                }


                /* =============================================
                   MELHOR RESULTADO
                ============================================= */

                if (posicao < melhorResultado) {

                    melhorResultado =
                        posicao;

                }


                /* =============================================
                   MÉDIA DE CHEGADA
                ============================================= */

                somaChegada +=
                    posicao;

                chegadasValidas++;

            }


            /* =================================================
               VOLTA MAIS RÁPIDA
            ================================================= */

            if (resultado.FastestLap) {


                const rank =
                    parseInt(
                        resultado.FastestLap.rank
                    );


                if (rank === 1) {

                    voltasRapidas++;

                }

            }

        });


        /* =================================================
           5 — CLASSIFICAÇÃO
        ================================================= */

        const qualifyingData =
            await buscar(
                `${BASE}/drivers/${PILOTO}/qualifying.json?limit=100`
            );


        const qualifyingRaces =
            qualifyingData
                ?.MRData
                ?.RaceTable
                ?.Races || [];


        let poles = 0;


        let somaQuali = 0;

        let qualisValidas = 0;


        let melhorQuali = Infinity;


        /* =================================================
           6 — ANALISAR CLASSIFICAÇÕES
        ================================================= */

        qualifyingRaces.forEach(race => {


            const quali =
                race?.QualifyingResults?.[0];


            if (!quali) {

                return;

            }


            const posicao =
                parseInt(
                    quali.position
                );


            if (isNaN(posicao)) {

                return;

            }


            qualisValidas++;


            somaQuali +=
                posicao;


            /* =============================================
               POLE
            ============================================= */

            if (posicao === 1) {

                poles++;

            }


            /* =============================================
               MELHOR GRID
            ============================================= */

            if (posicao < melhorQuali) {

                melhorQuali =
                    posicao;

            }

        });


        /* =================================================
           7 — PREENCHER ESTATÍSTICAS
        ================================================= */

        animarNumero(
            racesEl,
            corridas
        );


        animarNumero(
            winsEl,
            vitorias
        );


        animarNumero(
            podiumsEl,
            podios
        );


        animarNumero(
            polesEl,
            poles
        );


        animarNumero(
            top5El,
            top5
        );


        animarNumero(
            fastestLapsEl,
            voltasRapidas
        );


        /*
            DNF + DSQ + DNS
        */

        animarNumero(
            dnfsEl,
            abandonos
        );


        /* =================================================
           8 — MELHOR RESULTADO
        ================================================= */

        if (
            melhorResultado !== Infinity
        ) {

            bestResultEl.textContent =
                `P${melhorResultado}`;

        } else {

            bestResultEl.textContent =
                "—";

        }


        /* =================================================
           9 — MÉDIA DE CHEGADA
        ================================================= */

        if (chegadasValidas > 0) {


            const media =
                somaChegada /
                chegadasValidas;


            averageFinishEl.textContent =
                media.toFixed(1);

        } else {

            averageFinishEl.textContent =
                "—";

        }


        /* =================================================
           10 — MÉDIA DE CLASSIFICAÇÃO
        ================================================= */

        if (qualisValidas > 0) {


            const mediaQuali =
                somaQuali /
                qualisValidas;


            averageQualiEl.textContent =
                mediaQuali.toFixed(1);

        } else {

            averageQualiEl.textContent =
                "—";

        }


        /* =================================================
           11 — MELHOR GRID
        ================================================= */

        if (
            melhorQuali !== Infinity
        ) {

            bestQualiEl.textContent =
                `P${melhorQuali}`;

        } else {

            bestQualiEl.textContent =
                "—";

        }


        /* =================================================
           DEBUG
        ================================================= */

        console.log(
            "========================================"
        );

        console.log(
            "🏎️ charlescharles— TEMPORADA 2026"
        );

        console.log(
            "========================================"
        );

        console.log(
            "Posição:",
            antonelliStanding?.position
        );

        console.log(
            "Pontos:",
            antonelliStanding?.points
        );

        console.log(
            "Corridas:",
            corridas
        );

        console.log(
            "Vitórias:",
            vitorias
        );

        console.log(
            "Pódios:",
            podios
        );

        console.log(
            "Poles:",
            poles
        );

        console.log(
            "Top 5:",
            top5
        );

        console.log(
            "Voltas rápidas:",
            voltasRapidas
        );

        console.log(
            "DNF + DSQ + DNS:",
            abandonos
        );

        console.log(
            "Melhor resultado:",
            melhorResultado
        );

        console.log(
            "Média de chegada:",
            averageFinishEl.textContent
        );

        console.log(
            "Média de classificação:",
            averageQualiEl.textContent
        );

        console.log(
            "Melhor classificação:",
            melhorQuali
        );

        console.log(
            "========================================"
        );


    } catch (erro) {


        /* =================================================
           ERRO
        ================================================= */

        console.error(
            "❌ Erro ao carregar estatísticas de 2026:",
            erro
        );


        /* =================================================
           LIMPAR CARDS
        ================================================= */

        const elementos = [

            positionEl,

            pointsEl,

            racesEl,

            winsEl,

            podiumsEl,

            polesEl,

            top5El,

            fastestLapsEl,

            dnfsEl,

            bestResultEl,

            averageFinishEl,

            averageQualiEl,

            bestQualiEl

        ];


        elementos.forEach(elemento => {

            if (elemento) {

                elemento.textContent =
                    "—";

            }

        });

    }

});




/*//////////*///////
//////PILOTAGEM///////////////
//////////////////


document.addEventListener("DOMContentLoaded", () => {


  /* =======================================================
     REVEAL DAS SEÇÕES
  ======================================================== */

  const elementosReveal =
    document.querySelectorAll(
      ".reveal-charles"
    );


  const observerReveal =
    new IntersectionObserver(

      (entries, observer) => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;


          entry.target.classList.add(
            "active"
          );


          observer.unobserve(
            entry.target
          );

        });

      },

      {
        threshold: 0.15
      }

    );


  elementosReveal.forEach(elemento => {

    observerReveal.observe(
      elemento
    );

  });



  /* =======================================================
     ANIMAÇÃO DAS SKILLS
  ======================================================== */

  const skillCards =
    document.querySelectorAll(
      ".skill-card-charles"
    );


  /* =======================================================
     ANIMAR NÚMERO
  ======================================================== */

  function animarNumero(
    elemento,
    valorFinal
  ) {

    const duracao = 1200;

    const inicio =
      performance.now();


    function atualizarNumero(
      tempoAtual
    ) {

      const progresso =
        Math.min(

          (tempoAtual - inicio)
          / duracao,

          1

        );


      /* EASING */

      const easing =
        1 -
        Math.pow(

          1 - progresso,

          3

        );


      const valorAtual =
        Math.floor(

          valorFinal *
          easing

        );


      elemento.textContent =
        valorAtual;


      if (
        progresso < 1
      ) {

        requestAnimationFrame(
          atualizarNumero
        );

      } else {

        elemento.textContent =
          valorFinal;

      }

    }


    requestAnimationFrame(
      atualizarNumero
    );

  }



  /* =======================================================
     OBSERVER DAS SKILLS
  ======================================================== */

  const observerSkills =
    new IntersectionObserver(

      (entries, observer) => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;


          const card =
            entry.target;


          /* NÃO ANIMA DUAS VEZES */

          if (
            card.classList.contains(
              "animado"
            )
          ) return;


          card.classList.add(
            "animado"
          );


          /* ELEMENTOS */

          const progresso =
            card.querySelector(
              ".skill-progresso-charles"
            );


          const numero =
            card.querySelector(
              ".skill-numero-charles"
            );


          /* =================================================
             PEGA A POSIÇÃO DO CARD
          ================================================= */

          const index =
            Array.from(skillCards)
            .indexOf(card);


          const atraso =
            index * 120;



          /* =================================================
             ANIMAR BARRA
          ================================================= */

          setTimeout(() => {

            if (!progresso) return;


            const largura =
              progresso.dataset.width;


            progresso.style.width =
              largura;

          }, atraso);



          /* =================================================
             ANIMAR NÚMERO
          ================================================= */

          setTimeout(() => {

            if (!numero) return;


            const valor =
              Number(
                numero.dataset.value
              );


            animarNumero(
              numero,
              valor
            );

          }, atraso);


          /* PARA DE OBSERVAR */

          observer.unobserve(
            card
          );

        });

      },

      {
        threshold: 0.25
      }

    );


  skillCards.forEach(card => {

    observerSkills.observe(
      card
    );

  });



  /* =======================================================
     RADAR AUTOMÁTICO
  ======================================================== */

  const radarSection =
    document.querySelector(
      ".pilotagem-grafico-section-charles"
    );


  const radarArea =
    document.querySelector(
      ".radar-area-charles"
    );


  const pontosRadar =
    document.querySelectorAll(
      ".radar-ponto-charles"
    );


  const numerosSkills =
    document.querySelectorAll(
      ".skill-numero-charles"
    );


  /* =======================================================
     CALCULA E ATUALIZA O RADAR
  ======================================================== */

  function atualizarRadarcharles() {


    /* =====================================================
       VERIFICA SE EXISTEM OS ELEMENTOS
    ====================================================== */

    if (
      !radarArea ||
      numerosSkills.length !== 6
    ) return;


    /* =====================================================
       PEGA OS VALORES DIRETAMENTE DO HTML
    ====================================================== */

    const valores =
      Array.from(
        numerosSkills
      )

      .map(numero =>

        Number(
          numero.dataset.value
        ) || 0

      );


    /* =====================================================
       CONFIGURAÇÕES DO SVG
    ====================================================== */

    const centroX = 250;

    const centroY = 250;

    const raioMaximo = 200;

    const total =
      valores.length;



    /* =====================================================
       CALCULA OS PONTOS DO RADAR
    ====================================================== */

    function calcularPontos(
      valoresAtuais
    ) {

      return valoresAtuais.map(

        (valor, index) => {


          /* COMEÇA NO TOPO */

          const angulo =

            (
              Math.PI * 2 *
              index / total
            )

            -

            (
              Math.PI / 2
            );



          /* GARANTE ENTRE 0 E 100 */

          const valorSeguro =

            Math.max(

              0,

              Math.min(
                100,
                valor
              )

            );



          /* PORCENTAGEM */

          const porcentagem =

            valorSeguro /
            100;



          /* DISTÂNCIA */

          const raio =

            raioMaximo *
            porcentagem;



          /* POSIÇÃO */

          const x =

            centroX +

            Math.cos(
              angulo
            )

            *

            raio;



          const y =

            centroY +

            Math.sin(
              angulo
            )

            *

            raio;



          return {

            x,
            y

          };

        }

      );

    }



    /* =====================================================
       DESENHA O RADAR
    ====================================================== */

    function desenharRadar(
      valoresAtuais
    ) {

      const pontos =
        calcularPontos(
          valoresAtuais
        );


      /* ÁREA */

      radarArea.setAttribute(

        "points",

        pontos

        .map(
          ponto =>

            `${ponto.x},${ponto.y}`

        )

        .join(" ")

      );


      /* ===================================================
         CÍRCULOS DOS PONTOS
      ==================================================== */

      pontos.forEach(

        (ponto, index) => {


          const circulo =
            pontosRadar[index];


          if (!circulo) return;


          circulo.setAttribute(

            "cx",

            ponto.x

          );


          circulo.setAttribute(

            "cy",

            ponto.y

          );

        }

      );

    }



    /* =====================================================
       COMEÇA NO CENTRO
    ====================================================== */

    desenharRadar(

      valores.map(
        () => 0
      )

    );



    /* =====================================================
       ANIMAÇÃO
    ====================================================== */

    const duracao = 1400;

    const inicio =
      performance.now();



    function animarRadar(
      tempoAtual
    ) {


      const progresso =

        Math.min(

          (
            tempoAtual -
            inicio
          )

          /

          duracao,

          1

        );



      /* EASING */

      const easing =

        1 -

        Math.pow(

          1 -
          progresso,

          3

        );



      /* VALORES ANIMADOS */

      const valoresAnimados =

        valores.map(

          valor =>

            valor *
            easing

        );



      /* DESENHA */

      desenharRadar(
        valoresAnimados
      );



      /* CONTINUA A ANIMAÇÃO */

      if (
        progresso < 1
      ) {

        requestAnimationFrame(
          animarRadar
        );

      }

      else {

        desenharRadar(
          valores
        );

      }

    }



    requestAnimationFrame(
      animarRadar
    );

  }



  /* =======================================================
     OBSERVER DO RADAR
     Só anima quando a seção aparece
  ======================================================== */

  if (radarSection) {


    let radarAnimado =
      false;


    const observerRadar =
      new IntersectionObserver(

        entries => {

          entries.forEach(entry => {

            if (
              !entry.isIntersecting ||
              radarAnimado
            ) return;


            radarAnimado =
              true;


            atualizarRadarcharles();


            observerRadar.unobserve(
              entry.target
            );

          });

        },

        {
          threshold: 0.2
        }

      );


    observerRadar.observe(
      radarSection
    );

  }



  /* =======================================================
     ANIMAÇÃO DOS CARDS DE RESUMO
  ======================================================== */

  const resumoCards =
    document.querySelectorAll(
      ".resumo-card-charles"
    );


  const observerResumo =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;


          const card =
            entry.target;


          const index =
            Array.from(
              resumoCards
            )

            .indexOf(
              card
            );


          setTimeout(() => {

            card.classList.add(
              "resumo-ativo-charles"
            );

          },

            index * 180

          );


          observerResumo.unobserve(
            card
          );

        });

      },

      {
        threshold: 0.2
      }

    );


  resumoCards.forEach(card => {

    observerResumo.observe(
      card
    );

  });


});



