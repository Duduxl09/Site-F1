document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglelawson = document.getElementById("menuTogglelawson");
const menulawson = document.getElementById("sideMenulawson");
const overlaylawson = document.getElementById("overlaylawson");
const closelawson = document.getElementById("closeMenulawson");

const linksMenulawson = document.querySelectorAll(".side-menu-lawson a");

function fecharMenulawson() {
  if (menulawson) menulawson.classList.remove("active");
  if (overlaylawson) overlaylawson.classList.remove("active");
}

if (togglelawson) {
  togglelawson.addEventListener("click", () => {
    menulawson?.classList.add("active");
    overlaylawson?.classList.add("active");
  });
}

if (closelawson) {
  closelawson.addEventListener("click", fecharMenulawson);
}

if (overlaylawson) {
  overlaylawson.addEventListener("click", fecharMenulawson);
}

linksMenulawson.forEach(link => {
  link.addEventListener("click", fecharMenulawson);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinkslawson() {

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

const lawsonBanner = document.querySelector(".lawson-banner-bg");

if(lawsonBanner){

  lawsonBanner.addEventListener("mousemove", (e)=>{

    const rect = lawsonBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    lawsonBanner.style.setProperty("--mouse-x", x + "px");
    lawsonBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-lawson-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-lawson");

  const dotsContainer =
    document.querySelector(".dots-lawson");

  const bg =
    document.querySelector(".bg-slider-lawson");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-lawson");

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
    document.querySelectorAll(".dot-lawson");

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
//////TEMPORADAS///////////////
//////////////////

const lawsonTemporadas = {
     
    "2023": [
  { gp:"Italy", pos:"P11", pontos:"0", tipo:"lawson-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"lawson-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Japan", pos:"P11", pontos:"0", tipo:"lawson-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Qatar", pos:"P17", pontos:"0", tipo:"lawson-dnf", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Netherlands", pos:"P13", pontos:"0", tipo:"lawson-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" }
], 
     
  "2024": [
  { gp:"United States", pos:"P9", pontos:"2", tipo:"lawson-pontos", equipe:"RB", logo:"icons/racingbulls.svg" },
  { gp:"Mexico", pos:"P16", pontos:"0", tipo:"lawson-sem-pontos", equipe:"RB", logo:"icons/racingbulls.svg" },
  { gp:"Brazil", pos:"P9", pontos:"2", tipo:"lawson-pontos", equipe:"RB", logo:"icons/racingbulls.svg" },
  { gp:"Las Vegas", pos:"P16", pontos:"0", tipo:"lawson-sem-pontos", equipe:"RB", logo:"icons/racingbulls.svg" },
  { gp:"Qatar", pos:"P14", pontos:"0", tipo:"lawson-sem-pontos", equipe:"RB", logo:"icons/racingbulls.svg" },
  { gp:"Abu Dhabi", pos:"DNF", pontos:"0", tipo:"lawson-dnf", equipe:"RB", logo:"icons/racingbulls.svg" }
],   
     
    "2025": [
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"lawson-dnf", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"China", pos:"P12", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },

  { gp:"Japan", pos:"P17", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Bahrain", pos:"P16", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Saudi Arabia", pos:"P12", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Miami", pos:"DNF", pontos:"0", tipo:"lawson-dnf", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },

  { gp:"Emilia Romagna", pos:"P14", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"lawson-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Spain", pos:"P11", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"lawson-dnf", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },

  { gp:"Austria", pos:"P6", pontos:"8", tipo:"lawson-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Great Britain", pos:"DNF", pontos:"0", tipo:"lawson-dnf", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Belgium", pos:"P8", pontos:"4", tipo:"lawson-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"lawson-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },

  { gp:"Netherlands", pos:"P12", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Italy", pos:"P14", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"lawson-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Singapore", pos:"P15", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },

  { gp:"United States", pos:"P11", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Mexico", pos:"DNF", pontos:"0", tipo:"lawson-dnf", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Brazil", pos:"P7", pontos:"6", tipo:"lawson-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Las Vegas", pos:"P14", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },

  { gp:"Qatar", pos:"P9", pontos:"2", tipo:"lawson-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Abu Dhabi", pos:"P18", pontos:"0", tipo:"lawson-dnf", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" }
]
     
     
};
const lawsonCampeonato = {
     
     "2023": {
  posicao: "20º",
  pontos: 2
},
     
 "2024": {
  posicao: "21º",
  pontos: 4
}, 
    
    "2025": {
  posicao: "14º",
  pontos: 38
} 
     
};
     
     


const lawsonContainer =
document.querySelector(".lawson-corridas-container");

const lawsonSummary =
document.querySelector(".lawson-season-summary");

const lawsonBtns =
document.querySelectorAll(".lawson-ano-btn");

/* ==========================
TEMPORADA 2026 VIA API
========================== */

async function carregarlawson2026(){

try{

const req =
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/drivers/lawson/results.json"
);

const data =
await req.json();

const corridas =
data?.MRData?.RaceTable?.Races || [];

let temporada=[];

let pontosTotal=0;

/* ==========================
PROCESSAR CADA GP
========================== */

corridas.forEach(gp=>{

const r =
gp.Results?.[0];

if(!r)return;


/* ==========================
POSIÇÃO
========================== */

let pos = r.positionText;

if(pos==="R") pos="DNF";
if(pos==="W") pos="DNS";
if(pos==="PR") pos="DNF";
if(pos==="PW") pos="DNS";


/* ==========================
PONTOS
========================== */

const pontos =
Number(r.points || 0);

pontosTotal += pontos;


/* ==========================
TIPO DO RESULTADO
========================== */

let tipo =
"lawson-sem-pontos";

if(
pos==="DNF" ||
pos==="DSQ"
){

tipo="lawson-dnf";

}
else if(
Number(pos)===1
){

tipo="lawson-vitoria";

}
else if(
Number(pos)<=3
){

tipo="lawson-podio";

}
else if(
pontos>0
){

tipo="lawson-pontos";

}


/* ==========================
EQUIPE DAQUELA CORRIDA
========================== */

const constructorId =
r.Constructor?.constructorId ||
"Desconhecida";


const equipes = {

"red_bull":
{
nome: "Red Bull",
logo: "icons/redbull.png"
},

"Rb":
{
nome: "Racing Bulls",
logo: "icons/racingbulls.svg"
}
	

};

	
const equipeInfo =
equipes[constructorId] || {

nome: r.constructor?.nome ||
	"Desconhecida",
logo: "icons/racingbulls.svg"

};


/* ==========================
ADICIONAR CORRIDA
========================== */

temporada.push({

gp:
gp.raceName,

pos:
(
pos.startsWith("P") ||
pos==="DNF" ||
pos==="DNS" ||
pos==="DSQ"
)
?
pos
:
`P${pos}`,

pontos:
String(pontos),

tipo,

/*
AQUI ESTÁ A MUDANÇA PRINCIPAL:
A equipe vem da API para
CADA corrida.
*/

equipe:
equipeInfo.nome,

logo:
equipeInfo.logo

});

});


/* ==========================
SALVAR TEMPORADA
========================== */

lawsonTemporadas["2026"] =
temporada;


/* ==========================
POSIÇÃO NO CAMPEONATO
========================== */

let posicaoCampeonato = "-";

try{

const reqStandings =
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/driverStandings.json"
);

const dataStandings =
await reqStandings.json();

const lawson =
dataStandings
.MRData
.StandingsTable
.StandingsLists?.[0]
?.DriverStandings
?.find(
d =>
d.Driver.driverId === "lawson"
);

if(lawson){

posicaoCampeonato =
`${lawson.position}º`;

}

}
catch(err){

console.log(
"Erro posição",
err
);

}


/* ==========================
SALVAR CAMPEONATO
========================== */

lawsonCampeonato["2026"] = {

posicao:
posicaoCampeonato,

pontos:
pontosTotal

};


}
catch(err){

console.log(
"Erro API 2026",
err
);

}

}

/* ==========================
CARREGAR TEMPORADA
========================== */

function carregarTemporada(ano){

if(
!lawsonContainer
)return;

lawsonContainer.innerHTML="";

const temporada =
lawsonTemporadas[ano] || [];

let equipeAnterior =
null;

temporada.forEach(
(corrida,index)=>{

const card =
document.createElement("div");

card.className=
`lawson-corrida-card ${corrida.tipo}`;

const mudouEquipe =
equipeAnterior &&
equipeAnterior !== corrida.equipe;

if(mudouEquipe){

card.classList.add(
"lawson-team-change"
);

}

card.innerHTML=`

<span class="lawson-gp">
${corrida.gp} GP
</span>

<div class="lawson-team">

<img
src="${corrida.logo}"
class="lawson-team-logo">

</div>

<span class="lawson-resultado">
${corrida.pos}
</span>

<span class="lawson-pontos-texto">
${corrida.pontos} pts
</span>

`;

lawsonContainer.appendChild(
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
lawsonCampeonato[ano];

if(
lawsonSummary
){

lawsonSummary.innerHTML=`

<div
class="lawson-summary-card show">

<h3
class="lawson-summary-title">

Season ${ano}

</h3>

<div
class="lawson-summary-stats">

<div
class="lawson-summary-box">

<span
class="lawson-summary-label">

Position

</span>

<span
class="lawson-summary-value">

${resumo?.posicao || "—"}

</span>

</div>

<div
class="lawson-summary-box">

<span
class="lawson-summary-label">

Points

</span>

<span
class="lawson-summary-value">

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

async function iniciarlawson(){

await carregarlawson2026();

lawsonBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

lawsonBtns.forEach(
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

iniciarlawson();
 




/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-lawson");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-lawson");

const fraseEng = '"P1 lawson, amazing race!"';
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

const spans = document.querySelectorAll(".wave-lawson span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-lawson");
const lightbox = document.querySelector(".lightbox-lawson");
const imgLightbox = document.querySelector(".img-lightbox-lawson");
const fechar = document.querySelector(".fechar-lawson");

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


const liamData=[

{

first:"YUKI",

last:"TSUNODA",

img:"lawson/tsunoda.png",

years:"2023 — 2024",

stats:{

quali:[1,6],

races:[2,5],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[4,17]

}

},

{

first:"MAX",

last:"VERSTAPPEN",

img:"lawson/verstappen.png",

years:"2025",

stats:{

quali:[0,2],

races:[0,2],

podiums:[0,1],

wins:[0,0],

pole:[0,0],

points:[0,36]

}

},

{

first:"ISACK",

last:"HADJAR",

img:"lawson/hadjar.png",

years:"2025",

stats:{

quali:[6,16],

races:[6,12],

podiums:[0,1],

wins:[0,0],

pole:[0,0],

points:[30,39]

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
"liamYears"
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
"liamQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"liamQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"liamRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"liamRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"liamPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"liamPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"liamWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"liamWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"liamPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"liamPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"liamPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"liamPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"liamBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"liamBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"liamBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"liamBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"liamBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"liamBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"liamBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"liamBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"liamBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"liamBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"liamBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"liamBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
liamData[
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
".liam-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.liam-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".liam-tab"
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
".liam-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

liamData
.length-1



render(
current
)

}



document
.querySelector(
".liam-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
liamData.length

)

current=0



render(
current
)

}



render(0) 



// =========================================
// PAINEL DE NOTÍCIAS lawson
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiaslawson");
const fecharNoticias = document.getElementById("fecharNoticiaslawson");

const atualizarNoticias =
document.getElementById("atualizarNoticiaslawson");


const painelNoticias = document.getElementById("painelNoticiaslawson");
const overlayNoticias = document.getElementById("overlayNoticiaslawson");

const listaNoticias = document.getElementById("listaNoticiaslawson");




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
        <div class="loading-noticias-lawson">

            <div class="spinner-lawson"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{


const resposta = await fetch(
`https://gnews.io/api/v4/search?q="Liam Lawson"&lang=en&max=10&apikey=${API_KEY}`
);

			


        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-lawson">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-lawson">

                <img
                src="${noticia.image || 'pilotos/lawson.png'}"
                alt="Notícia">

                <div class="card-conteudo-lawson">

                    <div class="data-noticia-lawson">

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

        <div class="loading-noticias-lawson">

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
const historicolawson = {

    corridas: 35,
    vitorias: 0,
    podios: 0,
    poles: 0,
    pontos: 44

};

// CONFIGURAÇÃO
const driverId = "lawson";
const temporada = "2026";

// ELEMENTOS HTML
const contadorCorridas =
document.getElementById("corridas-lawson");

const contadorVitorias =
document.getElementById("vitorias-lawson");

const contadorPodios =
document.getElementById("podios-lawson");

const contadorPoles =
document.getElementById("poles-lawson");

const contadorPontos =
document.getElementById("pontos-lawson");

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
        historicolawson.corridas +
        corridas2026,

        vitorias:
        historicolawson.vitorias +
        vitorias2026,

        podios:
        historicolawson.podios +
        podios2026,

        poles:
        historicolawson.poles +
        poles2026,

        pontos:
historicolawson.pontos +
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
    document.querySelector(".numeros-lawson");

    if(!secao) return;

    const observer =
    new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-lawson")
                .forEach(contador=>{

                    if(contador.classList.contains("contado"))
                    return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-lawson"
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
    .querySelectorAll(".animar-lawson")
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
   liamliam— ESTATÍSTICAS DA TEMPORADA 2026
   JOLPICA F1 API
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    const ANO = 2026;
    const PILOTO = "lawson";

    const BASE = `https://api.jolpi.ca/ergast/f1/${ANO}`;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const positionEl =
        document.getElementById("liam-season-position");

    const pointsEl =
        document.getElementById("liam-season-points");

    const racesEl =
        document.getElementById("liam-season-races");

    const winsEl =
        document.getElementById("liam-season-wins");

    const podiumsEl =
        document.getElementById("liam-season-podiums");

    const polesEl =
        document.getElementById("liam-season-poles");

    const top5El =
        document.getElementById("liam-season-top5");

    const fastestLapsEl =
        document.getElementById("liam-season-fastest-laps");

    const dnfsEl =
        document.getElementById("liam-season-dnfs");

    const bestResultEl =
        document.getElementById("liam-season-best-result");

    const averageFinishEl =
        document.getElementById("liam-season-average-finish");

    const averageQualiEl =
        document.getElementById("liam-season-average-quali");

    const bestQualiEl =
        document.getElementById("liam-season-best-quali");


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
            "🏎️ liamliam— TEMPORADA 2026"
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
      ".reveal-lawson"
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
      ".skill-card-lawson"
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
              ".skill-progresso-lawson"
            );


          const numero =
            card.querySelector(
              ".skill-numero-lawson"
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
      ".pilotagem-grafico-section-lawson"
    );


  const radarArea =
    document.querySelector(
      ".radar-area-lawson"
    );


  const pontosRadar =
    document.querySelectorAll(
      ".radar-ponto-lawson"
    );


  const numerosSkills =
    document.querySelectorAll(
      ".skill-numero-lawson"
    );


  /* =======================================================
     CALCULA E ATUALIZA O RADAR
  ======================================================== */

  function atualizarRadarlawson() {


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


            atualizarRadarlawson();


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
      ".resumo-card-lawson"
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
              "resumo-ativo-lawson"
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



