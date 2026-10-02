document.addEventListener("DOMContentLoaded", function(){


/* =========================
   REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

function revelar() {

  const windowHeight = window.innerHeight;

  reveals.forEach(el => {

    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 100) {

      el.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revelar);
revelar();

/* =============================================
   SLIDER
============================================= */
const track =
  document.querySelector(".slider-piastri-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-piastri");

  const dotsContainer =
    document.querySelector(".dots-piastri");

  const bg =
    document.querySelector(".bg-slider-piastri");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-piastri");

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
    document.querySelectorAll(".dot-piastri");

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

/* ============================================        TEMPORADAS =
============================================ */

const piastriTemporadas = {

  "2023": [
    { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"piastri-dnf" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Saudi Arabia", pos:"P15", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Australia", pos:"P8", pontos:"4", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Azerbaijan", pos:"P11", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Miami", pos:"P19", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Monaco", pos:"P10", pontos:"1", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Spain", pos:"P13", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Canada", pos:"P11", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Austria", pos:"P16", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Great Britain", pos:"P4", pontos:"12", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Hungary", pos:"P5", pontos:"10", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"piastri-dnf" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Netherlands", pos:"P9", pontos:"2", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Italy", pos:"P12", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Singapore", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Japan", pos:"P3", pontos:"15", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Qatar", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"United States", pos:"DNF", pontos:"0", tipo:"piastri-dnf" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Mexico", pos:"P7", pontos:"6", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Brazil", pos:"P14", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Las Vegas", pos:"P10", pontos:"1", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"piastri-pontos",equipe:"Mclaren", logo:"icons/mclaren.png" }
  ],

  "2024": [
    { gp:"Bahrain", pos:"P8", pontos:"4", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Saudi Arabia", pos:"P4", pontos:"12", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Australia", pos:"P4", pontos:"12", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Japan", pos:"P8", pontos:"4", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"China", pos:"P8", pontos:"4", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Miami", pos:"P13", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Emilia Romagna", pos:"P4", pontos:"12", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Monaco", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Canada", pos:"P5", pontos:"10", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Spain", pos:"P7", pontos:"6", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Austria", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Great Britain", pos:"P4", pontos:"12", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Hungary", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Belgium", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Netherlands", pos:"P4", pontos:"12", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Italy", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Azerbaijan", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Singapore", pos:"P3", pontos:"15", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"United States", pos:"P5", pontos:"10", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Mexico", pos:"P8", pontos:"4", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Brazil", pos:"P8", pontos:"4", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Las Vegas", pos:"P7", pontos:"6", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Qatar", pos:"P3", pontos:"15", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Abu Dhabi", pos:"P10", pontos:"1", tipo:"piastri-pontos",equipe:"Mclaren", logo:"icons/mclaren.png" }
  ],

  "2025": [
    { gp:"Australia", pos:"P9", pontos:"2", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"China", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Japan", pos:"P3", pontos:"15", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Bahrain", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Saudi Arabia", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Miami", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Emilia Romagna", pos:"P3", pontos:"15", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Monaco", pos:"P3", pontos:"15", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Spain", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Canada", pos:"P4", pontos:"12", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Austria", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Great Britain", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Belgium", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Hungary", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Netherlands", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Italy", pos:"P3", pontos:"15", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Azerbaijan", pos:"DNF", pontos:"0", tipo:"piastri-dnf" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Singapore", pos:"P4", pontos:"12", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"United States", pos:"P5", pontos:"10", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Mexico", pos:"P5", pontos:"10", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Brazil", pos:"P5", pontos:"10", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Las Vegas", pos:"DSQ", pontos:"0", tipo:"piastri-dnf" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Qatar", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"piastri-podio",equipe:"Mclaren", logo:"icons/mclaren.png" }
  ]

};



const piastriCampeonato = {

  "2023": {
    posicao: "9º",
    pontos: 97
  },

  "2024": {
    posicao: "4º",
    pontos: 292
  },

  "2025": {
    posicao: "3º",
    pontos: 410
  }

};




const piastriContainer =
document.querySelector(".piastri-corridas-container");

const piastriSummary =
document.querySelector(".piastri-season-summary");

const piastriBtns =
document.querySelectorAll(".piastri-ano-btn");

/* ==========================
TEMPORADA 2026 VIA API
========================== */

async function carregarpiastri2026(){

try{

const [gpReq, sprintReq] = await Promise.all([
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/piastri/results.json"),
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/piastri/sprint.json")
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
let tipo="piastri-sem-pontos";

if(pos==="DNF" || pos==="DNS" ||pos==="DSQ"){
tipo="piastri-dnf";
}
else if(Number(pos)===1){
tipo="piastri-vitoria";
}
else if(Number(pos)<=3){
tipo="piastri-podio";
}
else if(Number(race.points)>0){
tipo="piastri-pontos";
}

// Sprint
const sprintRace =
sprints.find(s=>s.round===round);

if(sprintRace){

const sprintResult =
sprintRace.SprintResults?.[0];

if(sprintResult){

let tipoSprint="piastri-sem-pontos";

if(Number(sprintResult.position)===1){
tipoSprint="piastri-vitoria";
}
else if(Number(sprintResult.position)<=3){
tipoSprint="piastri-podio";
}
else if(Number(sprintResult.points)>0){
tipoSprint="piastri-pontos";
}

temporada.push({

gp:gp.raceName+" • Sprint",

pos:`P${sprintResult.position}`,

pontos:String(sprintResult.points),

tipo:tipoSprint,

equipe:"Mclaren",

logo:"icons/mclaren.png",

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

equipe:"Mclaren",

logo:"icons/mclaren.png",

sprint:false

});

pontosTotal += Number(race.points);

});

piastriTemporadas["2026"]=temporada;

let posicaoCampeonato="-";

try{

const req=
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/driverStandings.json"
);

const data=
await req.json();

const piastri=
data
.MRData
.StandingsTable
.StandingsLists?.[0]
?.DriverStandings
?.find(
d=>d.Driver.driverId==="piastri"
);

if(piastri){
posicaoCampeonato=`${piastri.position}&ordm;`;
}

}catch{}

piastriCampeonato["2026"]={

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
!piastriContainer
)return;

piastriContainer.innerHTML="";

const temporada =
piastriTemporadas[ano] || [];

let equipeAnterior =
null;

temporada.forEach(
(corrida,index)=>{

const card =
document.createElement("div");

card.className=
`piastri-corrida-card ${corrida.tipo}`;

const mudouEquipe =
equipeAnterior &&
equipeAnterior !== corrida.equipe;

if(mudouEquipe){

card.classList.add(
"piastri-team-change"
);

}

card.innerHTML=`

<span class="piastri-gp">
${corrida.gp} GP
</span>

<div class="piastri-team">

<img
src="${corrida.logo}"
class="piastri-team-logo">

</div>

<span class="piastri-resultado">
${corrida.pos}
</span>

<span class="piastri-pontos-texto">
${corrida.pontos} pts
</span>

`;

piastriContainer.appendChild(
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
piastriCampeonato[ano];

if(
piastriSummary
){

piastriSummary.innerHTML=`

<div
class="piastri-summary-card show">

<h3
class="piastri-summary-title">

Season ${ano}

</h3>

<div
class="piastri-summary-stats">

<div
class="piastri-summary-box">

<span
class="piastri-summary-label">

Position

</span>

<span
class="piastri-summary-value">

${resumo?.posicao || "—"}

</span>

</div>

<div
class="piastri-summary-box">

<span
class="piastri-summary-label">

Points

</span>

<span
class="piastri-summary-value">

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

async function iniciarpiastri(){

await carregarpiastri2026();

piastriBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

piastriBtns.forEach(
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

iniciarpiastri();




/* =========================================
   RADIO
========================================= */

const section = document.querySelector(".radio-f1-piastri");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-piastri");

const fraseEng = '"P1 Oscar, amazing race!"';
const frasePil = '"Thank you guys, car was perfect!"';

let i = 0;
let j = 0;
let timeouts = [];

/* RESET */
function resetarRadio() {

  if(audio){
    audio.pause();
    audio.currentTime = 0;
  }

  if(engText) engText.innerHTML = "";
  if(pilText) pilText.innerHTML = "";

  i = 0;
  j = 0;

  if(card){
    card.classList.remove(
      "ativo",
      "falando",
      "saindo",
      "mostrar-texto"
    );
  }

  if(content){
    content.style.height = "0px";
  }

  timeouts.forEach(t => clearTimeout(t));
  timeouts = [];

}

/* ESCREVER ENGENHEIRO */
function escreverEng() {

  if (!engText) return;

  if (i < fraseEng.length) {

    engText.innerHTML += fraseEng[i++];

    timeouts.push(
      setTimeout(escreverEng, 20)
    );

  }

}

/* ESCREVER PILOTO */
function escreverPil() {

  if (!pilText) return;

  if (j < frasePil.length) {

    pilText.innerHTML += frasePil[j++];

    timeouts.push(
      setTimeout(escreverPil, 20)
    );

  }

}

/* INICIAR */
function iniciarRadio() {

  resetarRadio();

  if(audio){
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

  if(card){
    card.classList.add("ativo");
  }

  if(content){
    content.style.height = "0px";
    content.offsetHeight;
  }

  /* WAVE */
  timeouts.push(setTimeout(() => {

    if(card){
      card.classList.add("falando");
    }

  }, 300));

  /* TEXTO ENGENHEIRO */
  timeouts.push(setTimeout(() => {

    if(content){
      content.style.height = "120px";
    }

    if(card){
      card.classList.add("mostrar-texto");
    }

    escreverEng();

  }, 800));

  /* EXPANDE */
  timeouts.push(setTimeout(() => {

    if(content){
      content.style.height = "220px";
    }

  }, 2000));

  /* TEXTO PILOTO */
  timeouts.push(setTimeout(() => {

    escreverPil();

  }, 2100));

  /* PARA ONDA */
  timeouts.push(setTimeout(() => {

    if(card){
      card.classList.remove("falando");
    }

  }, 3000));

  /* SOME */
  timeouts.push(setTimeout(() => {

    if(card){
      card.classList.add("saindo");
    }

  }, 3500));

}

/* CLIQUE */
if(section){

  section.addEventListener(
    "click",
    iniciarRadio
  );

}

/* WAVES */
const spans = document.querySelectorAll(".wave-piastri span");

spans.forEach((span, index) => {

  span.style.setProperty("--i", index);

});

/* =========================================
   GALERIA
========================================= */

const itensGaleria =
document.querySelectorAll(".item-galeria-piastri");

const lightbox =
document.querySelector(".lightbox-piastri");

const imgLightbox =
document.querySelector(".img-lightbox-piastri");

const fecharLightbox =
document.querySelector(".fechar-piastri");

/* ABRIR LIGHTBOX */
itensGaleria.forEach(item => {

  item.addEventListener("click", () => {

    const img = item.querySelector("img");

    if(!img || !imgLightbox || !lightbox) return;

    imgLightbox.src = img.src;

    lightbox.style.display = "flex";

  });

});

/* FECHAR NO X */
if(fecharLightbox){

  fecharLightbox.onclick = () => {

    if(lightbox){
      lightbox.style.display = "none";
    }

  };

}

/* FECHAR FORA DA IMAGEM */
if(lightbox){

  lightbox.onclick = (e) => {

    if(e.target !== imgLightbox){

      lightbox.style.display = "none";

    }

  };

}



/* =============================================
	MENU 
============================================= */

	

const togglepiastri = document.getElementById("menuTogglepiastri");
const menupiastri = document.getElementById("sideMenupiastri");
const overlaypiastri = document.getElementById("overlaypiastri");
const closepiastri = document.getElementById("closeMenupiastri");

const linksMenupiastri = document.querySelectorAll(".side-menu-piastri a");

function fecharMenupiastri() {
  if (menupiastri) menupiastri.classList.remove("active");
  if (overlaypiastri) overlaypiastri.classList.remove("active");
}

if (togglepiastri) {
  togglepiastri.addEventListener("click", () => {
    menupiastri?.classList.add("active");
    overlaypiastri?.classList.add("active");
  });
}

if (closepiastri) {
  closepiastri.addEventListener("click", fecharMenupiastri);
}

if (overlaypiastri) {
  overlaypiastri.addEventListener("click", fecharMenupiastri);
}

linksMenupiastri.forEach(link => {
  link.addEventListener("click", fecharMenupiastri);
});

(function scrollLinkspiastri() {

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



/* =============================================
	BANNER 
============================================= */



document.addEventListener("DOMContentLoaded", () => {

  const piastriBanner = document.querySelector(".piastri-banner-bg");

  if (piastriBanner) {

    piastriBanner.addEventListener("mousemove", (e) => {

      const rect = piastriBanner.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      piastriBanner.style.setProperty("--mouse-x", x + "px");
      piastriBanner.style.setProperty("--mouse-y", y + "px");

    });

  }

});




/* =============================================
	TEAMMATES 
============================================= */



const piastriData=[

{

first:"LANDO",

last:"NORRIS",

img:"lando/head.png",

years:"2023 — 2025",

stats:{

quali:[34,42],

races:[57,68],

podiums:[18,31],

wins:[8,11],

pole:[7,10],

points:[799,994]

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
"piastriYears"
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
"piastriQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"piastriQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"piastriRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"piastriRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"piastriPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"piastriPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"piastriWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"piastriWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"piastriPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"piastriPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"piastriPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"piastriPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"piastriBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"piastriBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"piastriBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"piastriBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"piastriBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"piastriBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"piastriBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"piastriBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"piastriBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"piastriBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"piastriBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"piastriBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
piastriData[
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
".piastri-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.piastri-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".piastri-tab"
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
".piastri-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

piastriData
.length-1



render(
current
)

}



document
.querySelector(
".piastri-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
piastriData.length

)

current=0



render(
current
)

}



render(0)


// =========================================
//  NOTÍCIAS 
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiaspiastri");
const fecharNoticias = document.getElementById("fecharNoticiaspiastri");

const atualizarNoticias =
document.getElementById("atualizarNoticiaspiastri");


const painelNoticias = document.getElementById("painelNoticiaspiastri");
const overlayNoticias = document.getElementById("overlayNoticiaspiastri");

const listaNoticias = document.getElementById("listaNoticiaspiastri");




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
        <div class="loading-noticias-piastri">

            <div class="spinner-piastri"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{


const resposta = await fetch(
`https://gnews.io/api/v4/search?q=Oscar Piastri Team&lang=en&max=10&apikey=${API_KEY}`
);

			


        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-piastri">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-piastri">

                <img
                src="${noticia.image || 'pilotos/piastri.png'}"
                alt="Notícia">

                <div class="card-conteudo-piastri">

                    <div class="data-noticia-piastri">

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

        <div class="loading-noticias-piastri">

            Erro ao carregar notícias.

        </div>

        `;

    }

}

atualizarNoticias.addEventListener("click",()=>{

    carregarNoticias();

});






// ======================================================
// NUMEROS
// ======================================================

// HISTÓRICO (ATÉ 2025)
const historicopiastri = {

    corridas: 71,
    vitorias: 9,
    podios: 26,
    poles: 6,
    pontos: 799

};

// CONFIGURAÇÃO
const driverId = "piastri";
const temporada = "2026";

// ELEMENTOS HTML
const contadorCorridas =
document.getElementById("corridas-piastri");

const contadorVitorias =
document.getElementById("vitorias-piastri");

const contadorPodios =
document.getElementById("podios-piastri");

const contadorPoles =
document.getElementById("poles-piastri");

const contadorPontos =
document.getElementById("pontos-piastri");

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
        historicopiastri.corridas +
        corridas2026,

        vitorias:
        historicopiastri.vitorias +
        vitorias2026,

        podios:
        historicopiastri.podios +
        podios2026,

        poles:
        historicopiastri.poles +
        poles2026,

        pontos:
historicopiastri.pontos +
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
    document.querySelector(".numeros-piastri");

    if(!secao) return;

    const observer =
    new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-piastri")
                .forEach(contador=>{

                    if(contador.classList.contains("contado"))
                    return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-piastri"
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
    .querySelectorAll(".animar-piastri")
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
   oscar piastri — ESTATÍSTICAS DA TEMPORADA 2026
   JOLPICA F1 API
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    const ANO = 2026;
    const PILOTO = "piastri";

    const BASE = `https://api.jolpi.ca/ergast/f1/${ANO}`;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const positionEl =
        document.getElementById("oscar-season-position");

    const pointsEl =
        document.getElementById("oscar-season-points");

    const racesEl =
        document.getElementById("oscar-season-races");

    const winsEl =
        document.getElementById("oscar-season-wins");

    const podiumsEl =
        document.getElementById("oscar-season-podiums");

    const polesEl =
        document.getElementById("oscar-season-poles");

    const top5El =
        document.getElementById("oscar-season-top5");

    const fastestLapsEl =
        document.getElementById("oscar-season-fastest-laps");

    const dnfsEl =
        document.getElementById("oscar-season-dnfs");

    const bestResultEl =
        document.getElementById("oscar-season-best-result");

    const averageFinishEl =
        document.getElementById("oscar-season-average-finish");

    const averageQualiEl =
        document.getElementById("oscar-season-average-quali");

    const bestQualiEl =
        document.getElementById("oscar-season-best-quali");


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


        const piastriStanding =
            listaStandings.find(driver => {

                return (
                    driver.Driver?.driverId === PILOTO
                );

            });


        if (piastriStanding) {

            positionEl.textContent =
                `P${piastriStanding.position}`;


            animarNumero(
                pointsEl,
                piastriStanding.points
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
            "🏎️ oscar piastri — TEMPORADA 2026"
        );

        console.log(
            "========================================"
        );

        console.log(
            "Posição:",
            piastriStanding?.position
        );

        console.log(
            "Pontos:",
            piastriStanding?.points
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



/*////////////////////////////////////////
BOTAO TOP
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




/*============================================= 
   PILOTAGEM
============================================= */

document.addEventListener("DOMContentLoaded", () => {

  const elementosReveal =
    document.querySelectorAll(
      ".reveal-piastri"
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
      ".skill-card-piastri"
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
              ".skill-progresso-piastri"
            );


          const numero =
            card.querySelector(
              ".skill-numero-piastri"
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
      ".pilotagem-grafico-section-piastri"
    );


  const radarArea =
    document.querySelector(
      ".radar-area-piastri"
    );


  const pontosRadar =
    document.querySelectorAll(
      ".radar-ponto-piastri"
    );


  const numerosSkills =
    document.querySelectorAll(
      ".skill-numero-piastri"
    );


  /* =======================================================
     CALCULA E ATUALIZA O RADAR
  ======================================================== */

  function atualizarRadarPiastri() {


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


            atualizarRadarPiastri();


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
      ".resumo-card-piastri"
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
              "resumo-ativo-piastri"
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