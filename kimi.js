document.addEventListener("DOMContentLoaded", function(){


/* =============================================
	MENU 
============================================= */


	
const togglekimi= document.getElementById("menuTogglekimi");
const menukimi= document.getElementById("sideMenukimi");
const overlaykimi= document.getElementById("overlaykimi");
const closekimi= document.getElementById("closeMenukimi");

const linksMenukimi= document.querySelectorAll(".side-menu-kimi");

function fecharMenukimi() {
  if (menukimi) menukimi.classList.remove("active");
  if (overlaykimi) overlaykimi.classList.remove("active");
}

if (togglekimi) {
  togglekimi.addEventListener("click", () => {
    menukimi?.classList.add("active");
    overlaykimi?.classList.add("active");
  });
}

if (closekimi) {
  closekimi.addEventListener("click", fecharMenukimi);
}

if (overlaykimi) {
  overlaykimi.addEventListener("click", fecharMenukimi);
}

linksMenukimi.forEach(link => {
  link.addEventListener("click", fecharMenukimi);
});

(function scrollLinkskimi() {

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



const kimiBanner = document.querySelector(".kimi-banner-bg");

if(kimiBanner){

  kimiBanner.addEventListener("mousemove", (e)=>{

    const rect = kimiBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    kimiBanner.style.setProperty("--mouse-x", x + "px");
    kimiBanner.style.setProperty("--mouse-y", y + "px");

  });

}



/* =============================================
	SLIDER 
============================================= */


const track =
  document.querySelector(".slider-kimi-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-kimi");

  const dotsContainer =
    document.querySelector(".dots-kimi");

  const bg =
    document.querySelector(".bg-slider-kimi");

  let index = 0;

  /* =========================
     CRIAR DOTS
  ========================= */

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-kimi");

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
    document.querySelectorAll(".dot-kimi");

  /* =========================
     UPDATE SLIDE
  ========================= */

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

  /* =========================
     BOTÃO NEXT
  ========================= */

  const nextBtn =
    document.querySelector(".btn-kimi.next");

  if(nextBtn){

    nextBtn.onclick = ()=>{

      index++;

      if(index >= slides.length){
        index = 0;
      }

      updateSlide();

    };

  }

  /* =========================
     BOTÃO PREV
  ========================= */

  const prevBtn =
    document.querySelector(".btn-kimi.prev");

  if(prevBtn){

    prevBtn.onclick = ()=>{

      index--;

      if(index < 0){
        index = slides.length - 1;
      }

      updateSlide();

    };

  }

  /* =========================
     SWIPE MOBILE
  ========================= */

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

    if(diff > 50){
      index++;
    }

    if(diff < -50){
      index--;
    }

    if(index >= slides.length){
      index = 0;
    }

    if(index < 0){
      index = slides.length - 1;
    }

    updateSlide();

  });

  /* =========================
     INICIAR
  ========================= */

  updateSlide();

}

/* =============================================
	TEMPORADAS 
============================================= */

const kimiTemporadas = {


"2025": [

  { gp:"Australia", pos:"P4", pontos:"12", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"China", pos:"P6", pontos:"8", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Japan", pos:"P6", pontos:"8", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Bahrain", pos:"P11", pontos:"0", tipo:"kimi-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Saudi Arabia", pos:"P6", pontos:"8", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Miami", pos:"P6", pontos:"8", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Emilia Romagna", pos:"DNF", pontos:"0", tipo:"kimi-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Monaco", pos:"P18", pontos:"0", tipo:"kimi-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Spain", pos:"DNF", pontos:"0", tipo:"kimi-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Canada", pos:"P3", pontos:"15", tipo:"kimi-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"kimi-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Great Britain", pos:"P16", pontos:"0", tipo:"kimi-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Belgium", pos:"P16", pontos:"0", tipo:"kimi-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Hungary", pos:"P10", pontos:"1", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Netherlands", pos:"P16", pontos:"0", tipo:"kimi-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Italy", pos:"P9", pontos:"2", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Azerbaijan", pos:"P4", pontos:"12", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"United States", pos:"P13", pontos:"0", tipo:"kimi-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Mexico", pos:"P6", pontos:"8", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Brazil", pos:"P2", pontos:"18", tipo:"kimi-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Las Vegas", pos:"P3", pontos:"15", tipo:"kimi-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Qatar", pos:"P5", pontos:"10", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Abu Dhabi", pos:"P15", pontos:"0", tipo:"kimi-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

]

};



const kimiCampeonato = {
     
  "2025": {
    posicao: "8º",
    pontos: 62
  }

};




const kimiContainer =
document.querySelector(".kimi-corridas-container");

const kimiSummary =
document.querySelector(".kimi-season-summary");

const kimiBtns =
document.querySelectorAll(".kimi-ano-btn");

/* ==========================
TEMPORADA 2026 VIA API
========================== */

async function carregarkimi2026(){

try{

const [gpReq, sprintReq] = await Promise.all([
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/antonelli/results.json"),
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/antonelli/sprint.json")
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
let tipo="kimi-sem-pontos";

if(pos==="DNF" || pos==="DNS" ||pos==="DSQ"){
tipo="kimi-dnf";
}
else if(Number(pos)===1){
tipo="kimi-vitoria";
}
else if(Number(pos)<=3){
tipo="kimi-podio";
}
else if(Number(race.points)>0){
tipo="kimi-pontos";
}

// Sprint
const sprintRace =
sprints.find(s=>s.round===round);

if(sprintRace){

const sprintResult =
sprintRace.SprintResults?.[0];

if(sprintResult){

let tipoSprint="kimi-sem-pontos";

if(Number(sprintResult.position)===1){
tipoSprint="kimi-vitoria";
}
else if(Number(sprintResult.position)<=3){
tipoSprint="kimi-podio";
}
else if(Number(sprintResult.points)>0){
tipoSprint="kimi-pontos";
}

temporada.push({

gp:gp.raceName+" • Sprint",

pos:`P${sprintResult.position}`,

pontos:String(sprintResult.points),

tipo:tipoSprint,

equipe:"Mercedes",

logo:"icons/Mercedesa.png",

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

equipe:"Mercedes",

logo:"icons/Mercedesa.png",

sprint:false

});

pontosTotal += Number(race.points);

});

kimiTemporadas["2026"]=temporada;

let posicaoCampeonato="-";

try{

const req=
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/driverStandings.json"
);

const data=
await req.json();

const kimi=
data
.MRData
.StandingsTable
.StandingsLists?.[0]
?.DriverStandings
?.find(
d=>d.Driver.driverId==="antonelli"
);

if(kimi){
posicaoCampeonato=`${kimi.position}&ordm;`;
}

}catch{}

kimiCampeonato["2026"]={

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
!kimiContainer
)return;

kimiContainer.innerHTML="";

const temporada =
kimiTemporadas[ano] || [];

let equipeAnterior =
null;

temporada.forEach(
(corrida,index)=>{

const card =
document.createElement("div");

card.className=
`kimi-corrida-card ${corrida.tipo}`;

const mudouEquipe =
equipeAnterior &&
equipeAnterior !== corrida.equipe;

if(mudouEquipe){

card.classList.add(
"kimi-team-change"
);

}

card.innerHTML=`

<span class="kimi-gp">
${corrida.gp} GP
</span>

<div class="kimi-team">

<img
src="${corrida.logo}"
class="kimi-team-logo">

</div>

<span class="kimi-resultado">
${corrida.pos}
</span>

<span class="kimi-pontos-texto">
${corrida.pontos} pts
</span>

`;

kimiContainer.appendChild(
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
kimiCampeonato[ano];

if(
kimiSummary
){

kimiSummary.innerHTML=`

<div
class="kimi-summary-card show">

<h3
class="kimi-summary-title">

Season ${ano}

</h3>

<div
class="kimi-summary-stats">

<div
class="kimi-summary-box">

<span
class="kimi-summary-label">

Position

</span>

<span
class="kimi-summary-value">

${resumo?.posicao || "—"}

</span>

</div>

<div
class="kimi-summary-box">

<span
class="kimi-summary-label">

Points

</span>

<span
class="kimi-summary-value">

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

async function iniciarkimi(){

await carregarkimi2026();

kimiBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

kimiBtns.forEach(
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

iniciarkimi();




/* =============================================
	RADIO
============================================= */

const sectionkimi =
document.querySelector(".radio-f1-kimi");

const cardkimi =
document.getElementById("radioCardkimi");

const audiokimi =
document.getElementById("radio-audio-kimi");

const engTextkimi =
document.getElementById("eng-text-kimi");

const pilTextkimi =
document.getElementById("pil-text-kimi");

const contentkimi =
document.querySelector(".content-kimi");

const fraseEngkimi =
'"George, that was absolutely brilliant!"';

const frasePilkimi =
'"Amazing job guys, the car was unbelievable!"';

let ikimi = 0;
let jkimi = 0;

let timeoutskimi = [];

/* RESET */
function resetarRadiokimi(){

  if(audiokimi){

    audiokimi.pause();

    audiokimi.currentTime = 0;

  }

  if(engTextkimi){
    engTextkimi.innerHTML = "";
  }

  if(pilTextkimi){
    pilTextkimi.innerHTML = "";
  }

  ikimi = 0;
  jkimi = 0;

  if(cardkimi){

    cardkimi.classList.remove(
      "ativo",
      "falando",
      "saindo",
      "mostrar-texto"
    );

  }

  if(contentkimi){
    contentkimi.style.height = "0px";
  }

  timeoutskimi.forEach(t =>
    clearTimeout(t)
  );

  timeoutskimi = [];

}

/* ESCREVER ENGENHEIRO */
function escreverEngkimi(){

  if(!engTextkimi) return;

  if(ikimi < fraseEngkimi.length){

    engTextkimi.innerHTML +=
    fraseEngkimi[ikimi++];

    timeoutskimi.push(

      setTimeout(
        escreverEngkimi,
        20
      )

    );

  }

}

/* ESCREVER PILOTO */
function escreverPilkimi(){

  if(!pilTextkimi) return;

  if(jkimi < frasePilkimi.length){

    pilTextkimi.innerHTML +=
    frasePilkimi[jkimi++];

    timeoutskimi.push(

      setTimeout(
        escreverPilkimi,
        20
      )

    );

  }

}

/* INICIAR */
function iniciarRadiokimi(){

  resetarRadiokimi();

  if(audiokimi){

    audiokimi.currentTime = 0;

    audiokimi.play().catch(() => {});

  }

  if(cardkimi){
    cardkimi.classList.add("ativo");
  }

  if(contentkimi){

    contentkimi.style.height = "0px";

    contentkimi.offsetHeight;

  }

  /* WAVE */
  timeoutskimi.push(

    setTimeout(() => {

      if(cardkimi){
        cardkimi.classList.add("falando");
      }

    }, 300)

  );

  /* TEXTO ENGENHEIRO */
  timeoutskimi.push(

    setTimeout(() => {

      if(contentkimi){
        contentkimi.style.height = "120px";
      }

      if(cardkimi){
        cardkimi.classList.add("mostrar-texto");
      }

      escreverEngkimi();

    }, 800)

  );

  /* EXPANDE */
  timeoutskimi.push(

    setTimeout(() => {

      if(contentkimi){
        contentkimi.style.height = "220px";
      }

    }, 2000)

  );

  /* TEXTO PILOTO */
  timeoutskimi.push(

    setTimeout(() => {

      escreverPilkimi();

    }, 2100)

  );

  /* PARA ONDA */
  timeoutskimi.push(

    setTimeout(() => {

      if(cardkimi){
        cardkimi.classList.remove("falando");
      }

    }, 3000)

  );

  /* SOME */
  timeoutskimi.push(

    setTimeout(() => {

      if(cardkimi){
        cardkimi.classList.add("saindo");
      }

    }, 3500)

  );

}

/* CLIQUE */
if(sectionkimi){

  sectionkimi.addEventListener(
    "click",
    iniciarRadiokimi
  );

}

/* WAVES */
const spanskimi =
document.querySelectorAll(
  ".wave-kimi span"
);

spanskimi.forEach((span, index) => {

  span.style.setProperty("--i", index);

});



/* =============================================
	GALERIA 
============================================= */

const itenskimi =
document.querySelectorAll(".item-galeria-kimi");

const lightboxkimi =
document.querySelector(".lightbox-kimi");

const imgLightboxkimi =
document.querySelector(".img-lightbox-kimi");

const fecharkimi =
document.querySelector(".fechar-kimi");

/* ABRIR LIGHTBOX */
itenskimi.forEach(item => {

  item.addEventListener("click", ()=>{

    const img =
    item.querySelector("img");

    if(img && lightboxkimi && imgLightboxkimi){

      imgLightboxkimi.src = img.src;

      lightboxkimi.style.display =
      "flex";

      document.body.style.overflow =
      "hidden";

    }

  });

});

/* FECHAR */
function fecharLightboxkimi(){

  if(lightboxkimi){

    lightboxkimi.style.display =
    "none";

  }

  document.body.style.overflow =
  "auto";

}

if(fecharkimi){

  fecharkimi.addEventListener(
    "click",
    fecharLightboxkimi
  );

}

/* FECHAR CLICANDO FORA */
if(lightboxkimi){

  lightboxkimi.addEventListener(
    "click",
    (e)=>{

      if(e.target === lightboxkimi){

        fecharLightboxkimi();

      }

    }
  );

}

/* ESC FECHA */
document.addEventListener(
  "keydown",
  (e)=>{

    if(e.key === "Escape"){

      fecharLightboxkimi();

    }

  }
);



/* =============================================
	TEAMMATES 
============================================= */


const antonelliData = [


{

first:"GEORGE",

last:"RUSSELL",

img:"kimi/russell.webp",

years:"2025",

stats:{

quali:[2,22],

races:[2,22],

podiums:[3,9],

wins:[0,2],

pole:[3,9],

points:[150,318]

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
"antonelliYears"
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
"antonelliQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"antonelliQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"antonelliRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"antonelliRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"antonelliPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"antonelliPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"antonelliWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"antonelliWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"antonelliPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"antonelliPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"antonelliPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"antonelliPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"antonelliBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"antonelliBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"antonelliBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"antonelliBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"antonelliBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"antonelliBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"antonelliBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"antonelliBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"antonelliBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"antonelliBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"antonelliBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"antonelliBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
antonelliData[
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
".antonelli-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.antonelli-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".antonelli-tab"
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
".antonelli-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

antonelliData
.length-1



render(
current
)

}



document
.querySelector(
".antonelli-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
antonelliData.length

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

const abrirNoticias = document.getElementById("abrirNoticiaskimi");
const fecharNoticias = document.getElementById("fecharNoticiaskimi");

const atualizarNoticias =
document.getElementById("atualizarNoticiaskimi");


const painelNoticias = document.getElementById("painelNoticiaskimi");
const overlayNoticias = document.getElementById("overlayNoticiaskimi");

const listaNoticias = document.getElementById("listaNoticiaskimi");




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
        <div class="loading-noticias-kimi">

            <div class="spinner-kimi"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{


const resposta = await fetch(
`https://gnews.io/api/v4/search?q="Andrea Kimi Antonelli"&lang=en&max=10&apikey=${API_KEY}`
);

			


        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-kimi">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-kimi">

                <img
                src="${noticia.image || 'pilotos/kimi.png'}"
                alt="Notícia">

                <div class="card-conteudo-kimi">

                    <div class="data-noticia-kimi">

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

        <div class="loading-noticias-kimi">

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
const historicokimi = {

    corridas: 24,
    vitorias: 0,
    podios: 3,
    poles: 0,
    pontos: 62

};

// CONFIGURAÇÃO
const driverId = "antonelli";
const temporada = "2026";

// ELEMENTOS HTML
const contadorCorridas =
document.getElementById("corridas-kimi");

const contadorVitorias =
document.getElementById("vitorias-kimi");

const contadorPodios =
document.getElementById("podios-kimi");

const contadorPoles =
document.getElementById("poles-kimi");

const contadorPontos =
document.getElementById("pontos-kimi");

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
        historicokimi.corridas +
        corridas2026,

        vitorias:
        historicokimi.vitorias +
        vitorias2026,

        podios:
        historicokimi.podios +
        podios2026,

        poles:
        historicokimi.poles +
        poles2026,

        pontos:
historicokimi.pontos +
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
    document.querySelector(".numeros-kimi");

    if(!secao) return;

    const observer =
    new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-kimi")
                .forEach(contador=>{

                    if(contador.classList.contains("contado"))
                    return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-kimi"
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
    .querySelectorAll(".animar-kimi")
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
   kimi antonelli — ESTATÍSTICAS DA TEMPORADA 2026
   JOLPICA F1 API
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    const ANO = 2026;
    const PILOTO = "antonelli";

    const BASE = `https://api.jolpi.ca/ergast/f1/${ANO}`;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const positionEl =
        document.getElementById("kimi-season-position");

    const pointsEl =
        document.getElementById("kimi-season-points");

    const racesEl =
        document.getElementById("kimi-season-races");

    const winsEl =
        document.getElementById("kimi-season-wins");

    const podiumsEl =
        document.getElementById("kimi-season-podiums");

    const polesEl =
        document.getElementById("kimi-season-poles");

    const top5El =
        document.getElementById("kimi-season-top5");

    const fastestLapsEl =
        document.getElementById("kimi-season-fastest-laps");

    const dnfsEl =
        document.getElementById("kimi-season-dnfs");

    const bestResultEl =
        document.getElementById("kimi-season-best-result");

    const averageFinishEl =
        document.getElementById("kimi-season-average-finish");

    const averageQualiEl =
        document.getElementById("kimi-season-average-quali");

    const bestQualiEl =
        document.getElementById("kimi-season-best-quali");


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
            "🏎️ kimi antonelli — TEMPORADA 2026"
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






document.addEventListener("DOMContentLoaded", () => {


  /* =======================================================
     REVEAL DAS SEÇÕES
  ======================================================== */

  const elementosReveal =
    document.querySelectorAll(
      ".reveal-antonelli"
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
      ".skill-card-antonelli"
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
              ".skill-progresso-antonelli"
            );


          const numero =
            card.querySelector(
              ".skill-numero-antonelli"
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
      ".pilotagem-grafico-section-antonelli"
    );


  const radarArea =
    document.querySelector(
      ".radar-area-antonelli"
    );


  const pontosRadar =
    document.querySelectorAll(
      ".radar-ponto-antonelli"
    );


  const numerosSkills =
    document.querySelectorAll(
      ".skill-numero-antonelli"
    );


  /* =======================================================
     CALCULA E ATUALIZA O RADAR
  ======================================================== */

  function atualizarRadarantonelli() {


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


            atualizarRadarantonelli();


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
      ".resumo-card-antonelli"
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
              "resumo-ativo-antonelli"
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



