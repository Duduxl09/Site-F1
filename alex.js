document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglealex = document.getElementById("menuTogglealex");
const menualex = document.getElementById("sideMenualex");
const overlayalex = document.getElementById("overlayalex");
const closealex = document.getElementById("closeMenualex");

const linksMenualex = document.querySelectorAll(".side-menu-alex a");

function fecharMenualex() {
  if (menualex) menualex.classList.remove("active");
  if (overlayalex) overlayalex.classList.remove("active");
}

if (togglealex) {
  togglealex.addEventListener("click", () => {
    menualex?.classList.add("active");
    overlayalex?.classList.add("active");
  });
}

if (closealex) {
  closealex.addEventListener("click", fecharMenualex);
}

if (overlayalex) {
  overlayalex.addEventListener("click", fecharMenualex);
}

linksMenualex.forEach(link => {
  link.addEventListener("click", fecharMenualex);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksalex() {

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

const alexBanner = document.querySelector(".alex-banner-bg");

if(alexBanner){

  alexBanner.addEventListener("mousemove", (e)=>{

    const rect = alexBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    alexBanner.style.setProperty("--mouse-x", x + "px");
    alexBanner.style.setProperty("--mouse-y", y + "px");

  });

}

/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-alex-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-alex");

  const dotsContainer =
    document.querySelector(".dots-alex");

  const bg =
    document.querySelector(".bg-slider-alex");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-alex");

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
    document.querySelectorAll(".dot-alex");

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





/* =============================================
	TEMPORADAS 
============================================= */

const alexTemporadas = {
     
     "2019": [
  { gp:"Australia", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Bahrain", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"China", pos:"P10", pontos:"1", tipo:"alex-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Azerbaijan", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Spain", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"alex-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Canada", pos:"P19", pontos:"0", tipo:"alex-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"France", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Austria", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Great Britain", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Germany", pos:"P6", pontos:"8", tipo:"alex-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Hungary", pos:"P10", pontos:"1", tipo:"alex-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },

  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png", troca:true },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Singapore", pos:"P6", pontos:"8", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Russia", pos:"P5", pontos:"10", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Japan", pos:"P4", pontos:"12", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Mexico", pos:"P5", pontos:"10", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Brazil", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" }
],
     
     "2020": [
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"alex-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Styria", pos:"P4", pontos:"12", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"70th Anniversary", pos:"P5", pontos:"10", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Spain", pos:"P8", pontos:"4", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Belgium", pos:"P6", pontos:"8", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Italy", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Tuscany", pos:"P3", pontos:"15", tipo:"alex-podio", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Russia", pos:"P10", pontos:"1", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Eifel", pos:"P17", pontos:"0", tipo:"alex-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Portugal", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Emilia Romagna", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Turkey", pos:"P7", pontos:"6", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"alex-podio", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Sakhir", pos:"P6", pontos:"8", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Abu Dhabi", pos:"P4", pontos:"12", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" }
],
     
     "2022": [
  { gp:"Bahrain", pos:"P13", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Saudi Arabia", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Australia", pos:"P10", pontos:"1", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Emilia Romagna", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Miami", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P18", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P18", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P13", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Great Britain", pos:"P20", pontos:"0", tipo:"alex-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"France", pos:"P13", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P17", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Netherlands", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P17", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P20", pontos:"0", tipo:"alex-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P13", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico City", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"São Paulo", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P13", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
],
     
    "2023": [
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Saudi Arabia", pos:"P19", pontos:"0", tipo:"alex-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Australia", pos:"P19", pontos:"0", tipo:"alex-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Miami", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P16", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Netherlands", pos:"P8", pontos:"4", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P16", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Qatar", pos:"P13", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico City", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"São Paulo", pos:"P19", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Las Vegas", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
], 
     
     "2024": [
  { gp:"Bahrain", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Saudi Arabia", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Australia", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P20", pontos:"0", tipo:"alex-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Miami", pos:"P18", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Emilia Romagna", pos:"P20", pontos:"0", tipo:"alex-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P17", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P18", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Great Britain", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Netherlands", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P7", pontos:"6", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P20", pontos:"0", tipo:"alex-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P16", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico City", pos:"P19", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"São Paulo", pos:"P18", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Las Vegas", pos:"P19", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Qatar", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
],
     
     "2025": [
  { gp:"Australia", pos:"P5", pontos:"10", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P7", pontos:"6", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Saudi Arabia", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Miami", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Emilia Romagna", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P10", pontos:"1", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Great Britain", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Netherlands", pos:"P5", pontos:"10", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P13", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico City", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"São Paulo", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Las Vegas", pos:"P16", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Qatar", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P16", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
]
     
     
     
};
const alexCampeonato = {
    
    "2019": {
  posicao: "8º",
  pontos: 92
},
    
  "2020": {
  posicao: "7º",
  pontos: 105
},  
    
  "2022": {
  posicao: "19º",
  pontos: 4
},  
    
   "2023": {
  posicao: "13º",
  pontos: 27
},

     "2024": {
  posicao: "16º",
  pontos: 12
},

    "2025": {
  posicao: "11º",
  pontos: 43
} 
     
     
};




const alexContainer =
document.querySelector(".alex-corridas-container");

const alexSummary =
document.querySelector(".alex-season-summary");

const alexBtns =
document.querySelectorAll(".alex-ano-btn");

/* ==========================
TEMPORADA 2026 VIA API
========================== */

async function carregaralex2026(){

try{

const [gpReq, sprintReq] = await Promise.all([
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/albon/results.json"),
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/albon/sprint.json")
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

// Tipo da corrida
let tipo="alex-sem-pontos";

if(pos==="DNF" || pos==="DNS" ||pos==="DSQ"){
tipo="alex-dnf";
}
else if(Number(pos)===1){
tipo="alex-vitoria";
}
else if(Number(pos)<=3){
tipo="alex-podio";
}
else if(Number(race.points)>0){
tipo="alex-pontos";
}

// Sprint
const sprintRace =
sprints.find(s=>s.round===round);

if(sprintRace){

const sprintResult =
sprintRace.SprintResults?.[0];

if(sprintResult){

let tipoSprint="alex-sem-pontos";

if(Number(sprintResult.position)===1){
tipoSprint="alex-vitoria";
}
else if(Number(sprintResult.position)<=3){
tipoSprint="alex-podio";
}
else if(Number(sprintResult.points)>0){
tipoSprint="alex-pontos";
}

temporada.push({

gp:gp.raceName+" • Sprint",

pos:`P${sprintResult.position}`,

pontos:String(sprintResult.points),

tipo:tipoSprint,

equipe:"Williams",

logo:"icons/WilliamsF1.png",

sprint:true

});

pontosTotal += Number(sprintResult.points);

}

}

// Corrida
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

tipo:tipo,

equipe:"Williams",

logo:"icons/WilliamsF1.png",

sprint:false

});

pontosTotal += Number(race.points);

});

alexTemporadas["2026"]=temporada;

let posicaoCampeonato="-";

try{

const req=
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/driverStandings.json"
);

const data=
await req.json();

const alex=
data
.MRData
.StandingsTable
.StandingsLists?.[0]
?.DriverStandings
?.find(
d=>d.Driver.driverId==="albon"
);

if(alex){
posicaoCampeonato=`${alex.position}&ordm;`;
}

}catch{}

alexCampeonato["2026"]={

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
!alexContainer
)return;

alexContainer.innerHTML="";

const temporada =
alexTemporadas[ano] || [];

let equipeAnterior =
null;

temporada.forEach(
(corrida,index)=>{

const card =
document.createElement("div");

card.className=
`alex-corrida-card ${corrida.tipo}`;

const mudouEquipe =
equipeAnterior &&
equipeAnterior !== corrida.equipe;

if(mudouEquipe){

card.classList.add(
"alex-team-change"
);

}

card.innerHTML=`

<span class="alex-gp">
${corrida.gp} GP
</span>

<div class="alex-team">

<img
src="${corrida.logo}"
class="alex-team-logo">

</div>

<span class="alex-resultado">
${corrida.pos}
</span>

<span class="alex-pontos-texto">
${corrida.pontos} pts
</span>

`;

alexContainer.appendChild(
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
alexCampeonato[ano];

if(
alexSummary
){

alexSummary.innerHTML=`

<div
class="alex-summary-card show">

<h3
class="alex-summary-title">

Season ${ano}

</h3>

<div
class="alex-summary-stats">

<div
class="alex-summary-box">

<span
class="alex-summary-label">

Position

</span>

<span
class="alex-summary-value">

${resumo?.posicao || "—"}

</span>

</div>

<div
class="alex-summary-box">

<span
class="alex-summary-label">

Points

</span>

<span
class="alex-summary-value">

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

async function iniciaralex(){

await carregaralex2026();

alexBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

alexBtns.forEach(
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

iniciaralex();



/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-alex");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-alex");

const fraseEng = '"P1 alex, amazing race!"';
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

  card.classList.remove("ativo", "faalex", "saindo");

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
    card.classList.add("faalex");
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
    card.classList.remove("faalex");
  }, 3000));

  // some
  timeouts.push(setTimeout(() => {
    card.classList.add("saindo");
  }, 3500));
}

/* CLIQUE */
section.addEventListener("click", iniciar);

const spans = document.querySelectorAll(".wave-alex span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-alex");
const lightbox = document.querySelector(".lightbox-alex");
const imgLightbox = document.querySelector(".img-lightbox-alex");
const fechar = document.querySelector(".fechar-alex");

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
	TEAM MATES 
============================================= */



const albonData=[



{

first:"DANIIL",

last:"KVYAT",

img:"alex/kvyat.png",

years:"2019",

stats:{

quali:[10,2],

races:[8,4],

podiums:[0,1],

wins:[0,0],

pole:[0,0],

points:[76,37]

}

},


	
{

first:"MAX",

last:"VERSTAPPEN",

img:"alex/verstappen.png",

years:"2019 — 2020",

stats:{

quali:[1,25],

races:[9,17],

podiums:[2,15],

wins:[0,3],

pole:[0,1],

points:[181,311]

}

},

{

first:"NICHOLAS",

last:"LATIFI",

img:"alex/latifi.png",

years:"2022 — 2023",

stats:{

quali:[42,2],

races:[24,10],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[54,23]

}

},

{

first:"LOGAN",

last:"SARGEANT",

img:"alex/sargeant.png",

years:"2023 — 2024",

stats:{

quali:[34,7],

races:[22,10],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[39,1]

}

},

{

first:"FRANCO",

last:"COLAPINTO",

img:"alex/colapinto.png",

years:"2024",

stats:{

quali:[6,3],

races:[6,2],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[12,5]

}

},

{

first:"CARLOS",

last:"SAINZ",

img:"alex/sainz.png",

years:"2025",

stats:{

quali:[10,14],

races:[14,9],

podiums:[0,2],

wins:[0,0],

pole:[0,0],

points:[73,64]

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
"albonYears"
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
"albonQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"albonQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"albonRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"albonRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"albonPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"albonPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"albonWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"albonWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"albonPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"albonPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"albonPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"albonPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"albonBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"albonBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"albonBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"albonBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"albonBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"albonBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"albonBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"albonBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"albonBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"albonBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"albonBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"albonBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
albonData[
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
".albon-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.albon-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".albon-tab"
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
".albon-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

albonData
.length-1



render(
current
)

}



document
.querySelector(
".albon-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
albonData.length

)

current=0



render(
current
)

}



render(0) 




// =========================================
// PAINEL DE NOTÍCIAS alex
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiasalex");
const fecharNoticias = document.getElementById("fecharNoticiasalex");

const atualizarNoticias =
document.getElementById("atualizarNoticiasalex");


const painelNoticias = document.getElementById("painelNoticiasalex");
const overlayNoticias = document.getElementById("overlayNoticiasalex");

const listaNoticias = document.getElementById("listaNoticiasalex");




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
        <div class="loading-noticias-alex">

            <div class="spinner-alex"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{


const resposta = await fetch(
`https://gnews.io/api/v4/search?q="Alex Albon"&lang=en&max=10&apikey=${API_KEY}`
);

			


        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-alex">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-alex">

                <img
                src="${noticia.image || 'pilotos/alex.png'}"
                alt="Notícia">

                <div class="card-conteudo-alex">

                    <div class="data-noticia-alex">

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

        <div class="loading-noticias-alex">

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
const historicoalex = {

    corridas: 128,
    vitorias: 0,
    podios: 2,
    poles: 0,
    pontos: 313

};

// CONFIGURAÇÃO
const driverId = "albon";
const temporada = "2026";

// ELEMENTOS HTML
const contadorCorridas =
document.getElementById("corridas-alex");

const contadorVitorias =
document.getElementById("vitorias-alex");

const contadorPodios =
document.getElementById("podios-alex");

const contadorPoles =
document.getElementById("poles-alex");

const contadorPontos =
document.getElementById("pontos-alex");

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
        historicoalex.corridas +
        corridas2026,

        vitorias:
        historicoalex.vitorias +
        vitorias2026,

        podios:
        historicoalex.podios +
        podios2026,

        poles:
        historicoalex.poles +
        poles2026,

        pontos:
historicoalex.pontos +
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
    document.querySelector(".numeros-alex");

    if(!secao) return;

    const observer =
    new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-alex")
                .forEach(contador=>{

                    if(contador.classList.contains("contado"))
                    return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-alex"
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
    .querySelectorAll(".animar-alex")
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
   alexalex— ESTATÍSTICAS DA TEMPORADA 2026
   JOLPICA F1 API
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    const ANO = 2026;
    const PILOTO = "albon";

    const BASE = `https://api.jolpi.ca/ergast/f1/${ANO}`;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const positionEl =
        document.getElementById("alex-season-position");

    const pointsEl =
        document.getElementById("alex-season-points");

    const racesEl =
        document.getElementById("alex-season-races");

    const winsEl =
        document.getElementById("alex-season-wins");

    const podiumsEl =
        document.getElementById("alex-season-podiums");

    const polesEl =
        document.getElementById("alex-season-poles");

    const top5El =
        document.getElementById("alex-season-top5");

    const fastestLapsEl =
        document.getElementById("alex-season-fastest-laps");

    const dnfsEl =
        document.getElementById("alex-season-dnfs");

    const bestResultEl =
        document.getElementById("alex-season-best-result");

    const averageFinishEl =
        document.getElementById("alex-season-average-finish");

    const averageQualiEl =
        document.getElementById("alex-season-average-quali");

    const bestQualiEl =
        document.getElementById("alex-season-best-quali");


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
            "🏎️ alexalex— TEMPORADA 2026"
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
      ".reveal-albon"
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
      ".skill-card-albon"
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
              ".skill-progresso-albon"
            );


          const numero =
            card.querySelector(
              ".skill-numero-albon"
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
      ".pilotagem-grafico-section-albon"
    );


  const radarArea =
    document.querySelector(
      ".radar-area-albon"
    );


  const pontosRadar =
    document.querySelectorAll(
      ".radar-ponto-albon"
    );


  const numerosSkills =
    document.querySelectorAll(
      ".skill-numero-albon"
    );


  /* =======================================================
     CALCULA E ATUALIZA O RADAR
  ======================================================== */

  function atualizarRadaralbon() {


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


            atualizarRadaralbon();


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
      ".resumo-card-albon"
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
              "resumo-ativo-albon"
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



