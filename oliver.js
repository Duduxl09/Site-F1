document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const toggleoliver = document.getElementById("menuToggleoliver");
const menuoliver = document.getElementById("sideMenuoliver");
const overlayoliver = document.getElementById("overlayoliver");
const closeoliver = document.getElementById("closeMenuoliver");

const linksMenuoliver = document.querySelectorAll(".side-menu-oliver a");

function fecharMenuoliver() {
  if (menuoliver) menuoliver.classList.remove("active");
  if (overlayoliver) overlayoliver.classList.remove("active");
}

if (toggleoliver) {
  toggleoliver.addEventListener("click", () => {
    menuoliver?.classList.add("active");
    overlayoliver?.classList.add("active");
  });
}

if (closeoliver) {
  closeoliver.addEventListener("click", fecharMenuoliver);
}

if (overlayoliver) {
  overlayoliver.addEventListener("click", fecharMenuoliver);
}

linksMenuoliver.forEach(link => {
  link.addEventListener("click", fecharMenuoliver);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksoliver() {

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

const oliverBanner = document.querySelector(".oliver-banner-bg");

if(oliverBanner){

  oliverBanner.addEventListener("mousemove", (e)=>{

    const rect = oliverBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    oliverBanner.style.setProperty("--mouse-x", x + "px");
    oliverBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-oliver-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-oliver");

  const dotsContainer =
    document.querySelector(".dots-oliver");

  const bg =
    document.querySelector(".bg-slider-oliver");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-oliver");

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
    document.querySelectorAll(".dot-oliver");

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

  const secao = document.querySelector(".numeros-oliver");
  const bg = document.querySelector(".bg-numeros-oliver");

  if(!secao || !bg) return;

  const rect = secao.getBoundingClientRect();
  const alturaTela = window.innerHeight;

  if(rect.top < alturaTela && rect.bottom > 0){

    let progresso = rect.top / alturaTela;

    bg.style.transform =
      "translateY(" + progresso * 80 + "px) scale(1.05)";
  }

});


/* =========================
   CONTADORES
========================= */

const cards = document.querySelectorAll(".animar-oliver");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-oliver");

        const barra =
          card.querySelector(".barra-velocidade-oliver");

        if(!contador.classList.contains("contado")){

          contador.classList.add("contado");

          const target =
            +contador.getAttribute("data-target");

          let count = 0;

          const update = ()=>{

            const increment = target / 200;

            if(count < target){

              count += increment;

              contador.innerText =
                Math.floor(count);

              if(barra){
                barra.style.width =
                  (count/target*100)+"%";
              }

              setTimeout(update,40);

            }else{

              contador.innerText = target;

              if(barra){
                barra.style.width = "100%";
              }

            }

          };

          update();

        }

      }, index * 300);

    }

  });

}

window.addEventListener("scroll", animar);
animar();

/* =========================
   TITULO ANIMADO
========================= */

window.addEventListener("scroll", ()=>{

  const titulo =
    document.querySelector(".titulo-animar-oliver");

  if(!titulo) return;

  const pos =
    titulo.getBoundingClientRect().top;

  if(pos < window.innerHeight - 120){

    titulo.classList.add("show");

  }

});


/*//////////*///////
//////TEMPORADAS///////////////
//////////////////

const oliverTemporadas = {

"2024": [
  { gp:"Saudi Arabia", pos:"P7", pontos:"6", tipo:"oliver-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P10", pontos:"1", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Brazil", pos:"P12", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" }
],

"2025": [
  { gp:"Australia", pos:"P14", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"China", pos:"P8", pontos:"4", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Japan", pos:"P10", pontos:"1", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Saudi Arabia", pos:"P13", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Miami", pos:"DNF", pontos:"0", tipo:"oliver-dnf", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Emilia Romagna", pos:"P17", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Monaco", pos:"P12", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Spain", pos:"P17", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Canada", pos:"P11", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Austria", pos:"P11", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Great Britain", pos:"P11", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Belgium", pos:"P11", pontos:"2", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Hungary", pos:"DNF", pontos:"0", tipo:"oliver-dnf", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Netherlands", pos:"P6", pontos:"8", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Italy", pos:"P12", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Azerbaijan", pos:"P12", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"United States", pos:"P9", pontos:"2", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Mexico", pos:"P4", pontos:"12", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Brazil", pos:"P6", pontos:"8", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Las Vegas", pos:"P10", pontos:"1", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Qatar", pos:"DNF", pontos:"0", tipo:"oliver-dnf", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Abu Dhabi", pos:"P12", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" }
]


};
const oliverCampeonato = {
     
"2024": {
  posicao: "18º",
  pontos: 7
},

"2025": {
  posicao: "13º",
  pontos: 41
} 

};
     



const oliverContainer =
document.querySelector(".oliver-corridas-container");

const oliverSummary =
document.querySelector(".oliver-season-summary");

const oliverBtns =
document.querySelectorAll(".oliver-ano-btn");

/* ==========================
TEMPORADA 2026 VIA API
========================== */

async function carregaroliver2026(){

try{

const req =
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/drivers/bearman/results.json"
);

const data =
await req.json();

const corridas =
data?.MRData?.RaceTable?.Races || [];

let temporada=[];

let pontosTotal=0;

corridas.forEach(gp=>{

const r =
gp.Results?.[0];

if(!r)return;

let pos = r.positionText;

if(pos==="R") pos="DNF";
if(pos==="W") pos="DNS";
if(pos==="PR") pos="DNF";
if(pos==="PW") pos="DNS";

const pontos =
Number(r.points || 0);

pontosTotal+=pontos;

let tipo =
"oliver-sem-pontos";

if(
pos==="DNF"||
pos==="DSQ"
){
tipo="oliver-dnf";
}
else if(
Number(pos)===1
){
tipo="oliver-vitoria";
}
else if(
Number(pos)<=3
){
tipo="oliver-podio";
}
else if(
pontos>0
){
tipo="oliver-pontos";
}

temporada.push({

gp:
gp.raceName,

pos:
(
pos.startsWith("P")||
pos==="DNF"||
pos==="DNS"||
pos==="DSQ"
)
?
pos
:
`P${pos}`,

pontos:
String(pontos),

tipo,

equipe:
"Haas",

logo:
"icons/HaasF1.png"

});

});

oliverTemporadas["2026"] =
temporada;

let posicaoCampeonato = "-";

try{

const reqStandings =
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/driverStandings.json"
);

const dataStandings =
await reqStandings.json();

const oliver =
dataStandings
.MRData
.StandingsTable
.StandingsLists?.[0]
?.DriverStandings
?.find(
d=>
d.Driver.driverId==="bearman"
);

if(oliver){
posicaoCampeonato =
`${oliver.position}&ordm;`;
}

}catch(err){

console.log(
"Erro posição",
err
);

}

oliverCampeonato["2026"] = {

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
!oliverContainer
)return;

oliverContainer.innerHTML="";

const temporada =
oliverTemporadas[ano] || [];

let equipeAnterior =
null;

temporada.forEach(
(corrida,index)=>{

const card =
document.createElement("div");

card.className=
`oliver-corrida-card ${corrida.tipo}`;

const mudouEquipe =
equipeAnterior &&
equipeAnterior !== corrida.equipe;

if(mudouEquipe){

card.classList.add(
"oliver-team-change"
);

}

card.innerHTML=`

<span class="oliver-gp">
${corrida.gp} GP
</span>

<div class="oliver-team">

<img
src="${corrida.logo}"
class="oliver-team-logo">

</div>

<span class="oliver-resultado">
${corrida.pos}
</span>

<span class="oliver-pontos-texto">
${corrida.pontos} pts
</span>

`;

oliverContainer.appendChild(
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
oliverCampeonato[ano];

if(
oliverSummary
){

oliverSummary.innerHTML=`

<div
class="oliver-summary-card show">

<h3
class="oliver-summary-title">

Season ${ano}

</h3>

<div
class="oliver-summary-stats">

<div
class="oliver-summary-box">

<span
class="oliver-summary-label">

Position

</span>

<span
class="oliver-summary-value">

${resumo?.posicao || "—"}

</span>

</div>

<div
class="oliver-summary-box">

<span
class="oliver-summary-label">

Points

</span>

<span
class="oliver-summary-value">

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

async function iniciaroliver(){

await carregaroliver2026();

oliverBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

oliverBtns.forEach(
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

iniciaroliver();








/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-oliver");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-oliver");

const fraseEng = '"P1 oliver, amazing race!"';
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

const spans = document.querySelectorAll(".wave-oliver span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-oliver");
const lightbox = document.querySelector(".lightbox-oliver");
const imgLightbox = document.querySelector(".img-lightbox-oliver");
const fechar = document.querySelector(".fechar-oliver");

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



const bearmanData=[

{

first:"ESTEBAN",

last:"OCON",

img:"oliver/ocon.webp",

years:"2025",

stats:{

quali:[10,12],

races:[7,12],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[22,39]

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
"bearmanYears"
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
"bearmanQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"bearmanQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"bearmanRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"bearmanRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"bearmanPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"bearmanPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"bearmanWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"bearmanWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"bearmanPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"bearmanPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"bearmanPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"bearmanPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"bearmanBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"bearmanBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"bearmanBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"bearmanBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"bearmanBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"bearmanBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"bearmanBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"bearmanBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"bearmanBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"bearmanBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"bearmanBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"bearmanBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
bearmanData[
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
".bearman-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.bearman-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".bearman-tab"
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
".bearman-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

bearmanData
.length-1



render(
current
)

}



document
.querySelector(
".bearman-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
bearmanData.length

)

current=0



render(
current
)

}



render(0) 



// =========================================
// PAINEL DE NOTÍCIAS oliver
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiasoliver");
const fecharNoticias = document.getElementById("fecharNoticiasoliver");

const atualizarNoticias =
document.getElementById("atualizarNoticiasoliver");


const painelNoticias = document.getElementById("painelNoticiasoliver");
const overlayNoticias = document.getElementById("overlayNoticiasoliver");

const listaNoticias = document.getElementById("listaNoticiasoliver");




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
        <div class="loading-noticias-oliver">

            <div class="spinner-oliver"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{


const resposta = await fetch(
`https://gnews.io/api/v4/search?q="oliver bearman"&lang=en&max=10&apikey=${API_KEY}`
);

			


        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-oliver">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-oliver">

                <img
                src="${noticia.image || 'pilotos/alonso.png'}"
                alt="Notícia">

                <div class="card-conteudo-oliver">

                    <div class="data-noticia-oliver">

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

        <div class="loading-noticias-oliver">

            Erro ao carregar notícias.

        </div>

        `;

    }

}

atualizarNoticias.addEventListener("click",()=>{

    carregarNoticias();

});




/* =========================================================
   oliveroliver— ESTATÍSTICAS DA TEMPORADA 2026
   JOLPICA F1 API
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    const ANO = 2026;
    const PILOTO = "bearman";

    const BASE = `https://api.jolpi.ca/ergast/f1/${ANO}`;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const positionEl =
        document.getElementById("oliver-season-position");

    const pointsEl =
        document.getElementById("oliver-season-points");

    const racesEl =
        document.getElementById("oliver-season-races");

    const winsEl =
        document.getElementById("oliver-season-wins");

    const podiumsEl =
        document.getElementById("oliver-season-podiums");

    const polesEl =
        document.getElementById("oliver-season-poles");

    const top5El =
        document.getElementById("oliver-season-top5");

    const fastestLapsEl =
        document.getElementById("oliver-season-fastest-laps");

    const dnfsEl =
        document.getElementById("oliver-season-dnfs");

    const bestResultEl =
        document.getElementById("oliver-season-best-result");

    const averageFinishEl =
        document.getElementById("oliver-season-average-finish");

    const averageQualiEl =
        document.getElementById("oliver-season-average-quali");

    const bestQualiEl =
        document.getElementById("oliver-season-best-quali");


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
            "🏎️ oliveroliver— TEMPORADA 2026"
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
      ".reveal-bearman"
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
      ".skill-card-bearman"
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
              ".skill-progresso-bearman"
            );


          const numero =
            card.querySelector(
              ".skill-numero-bearman"
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
      ".pilotagem-grafico-section-bearman"
    );


  const radarArea =
    document.querySelector(
      ".radar-area-bearman"
    );


  const pontosRadar =
    document.querySelectorAll(
      ".radar-ponto-bearman"
    );


  const numerosSkills =
    document.querySelectorAll(
      ".skill-numero-bearman"
    );


  /* =======================================================
     CALCULA E ATUALIZA O RADAR
  ======================================================== */

  function atualizarRadarbearman() {


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


            atualizarRadarbearman();


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
      ".resumo-card-bearman"
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
              "resumo-ativo-bearman"
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



