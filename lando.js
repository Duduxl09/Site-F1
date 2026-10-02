document.addEventListener("DOMContentLoaded", function(){

// ======================================================
// NUMEROS
// ======================================================


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

	
  const track = document.querySelector(".slider-lando-track");

if(track){
  const slides = document.querySelectorAll(".slide-lando");
  const dotsContainer = document.querySelector(".dots-lando");
  const bg = document.querySelector(".bg-slider-lando");

  let index = 0;

  /* ===== CRIAR DOTS ===== */
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot-lando");

    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      index = i;
      updateSlide();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot-lando");

  /* ===== FUNÇÃO PRINCIPAL ===== */
  function updateSlide() {

    /* MOVE SLIDE */
    track.style.transform = `translateX(-${index * 100}%)`;

    /* ATUALIZA DOTS */
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    /* BACKGROUND DINÂMICO */
    const img = slides[index].querySelector("img");

    if (img && bg) {
      bg.style.backgroundImage = `url(${img.src})`;
    }

  }

  /* ===== BOTÕES ===== */
  document.querySelector(".next").onclick = () => {
    index++;
    if (index >= slides.length) index = 0;
    updateSlide();
  };

  document.querySelector(".prev").onclick = () => {
    index--;
    if (index < 0) index = slides.length - 1;
    updateSlide();
  };

  /* ===== SWIPE MOBILE ===== */
  let startX = 0;
  let endX = 0;

  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  track.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  });

  track.addEventListener("touchend", () => {
    let diff = startX - endX;

    if (diff > 50) index++;
    if (diff < -50) index--;

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    updateSlide();
  });

  /* ===== INICIAR ===== */
  updateSlide();
}



/* =============================================
	GALERIA 
============================================= */


const itens = document.querySelectorAll(".item-galeria-lando");
const lightbox = document.querySelector(".lightbox-lando");
const imgLightbox = document.querySelector(".img-lightbox-lando");
const fechar = document.querySelector(".fechar-lando");

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
	RADIO 
============================================= */



const section = document.querySelector(".radio-f1-lando");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");




const content = document.querySelector(".content-lando");

const fraseEng = '"P1 Lando, amazing race!"';
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

const spans = document.querySelectorAll(".wave-lando span");

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
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


/* ////////////////////////////////////////////////////////////
      TEMPORADAS
//__///////////////////////////////////////////////////////*/

const landoTemporadas = {

  "2019": [
  { gp:"Australia", pos:"P12", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Azerbaijan", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P11", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"France", pos:"P9", pontos:"2", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P11", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P9", pontos:"2", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P10", pontos:"1", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Russia", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"11", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" }
],

"2020": [
  { gp:"Austria (2020)", pos:"P3", pontos:"16", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Styria (2020)", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Hungary (2020)", pos:"P13", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain (2020)", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"70th Anniversary (2020)", pos:"P9", pontos:"2", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Spain (2020)", pos:"P10", pontos:"1", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Belgium (2020)", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Italy (2020)", pos:"P4", pontos:"12", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Tuscany (2020)", pos:"P6", pontos:"8", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Russia (2020)", pos:"P15", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Eifel (2020)", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Portugal (2020)", pos:"P13", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Emilia Romagna (2020)", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Turkey (2020)", pos:"P8", pontos:"5", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain (2020)", pos:"P4", pontos:"12", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Sakhir (2020)", pos:"P10", pontos:"1", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi (2020)", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" }
],
"2021": [
  { gp:"Bahrain", pos:"P4", pontos:"12", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Emilia Romagna", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Portugal", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"France", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Styria", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P4", pontos:"12", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P15", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P14", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Netherlands", pos:"P10", pontos:"1", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Russia", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Turkey", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"P10", pontos:"1", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P10", pontos:"1", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Qatar", pos:"P9", pontos:"2", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Saudi Arabia", pos:"P10", pontos:"1", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" }
],
"2022": [
  { gp:"Bahrain", pos:"P15", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Saudi Arabia", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Australia", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Emilia Romagna", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Miami", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P6", pontos:"9", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Azerbaijan", pos:"P9", pontos:"2", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P15", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P6", pontos:"8", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"France", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P12", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Netherlands", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P4", pontos:"12", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P10", pontos:"1", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"P9", pontos:"2", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"9", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" }
],
"2023": [
  { gp:"Bahrain", pos:"P17", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Saudi Arabia", pos:"P17", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Australia", pos:"P6", pontos:"8", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Azerbaijan", pos:"P9", pontos:"2", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Miami", pos:"P17", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P9", pontos:"2", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P17", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P13", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"P4", pontos:"12", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P7", pontos:"9", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Netherlands", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Qatar", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Las Vegas", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" }
],"2024": [
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Saudi Arabia", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Australia", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Miami", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Emilia Romagna", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P4", pontos:"12", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P2", pontos:"19", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Netherlands", pos:"P1", pontos:"26", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P3", pontos:"16", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Azerbaijan", pos:"P4", pontos:"13", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P4", pontos:"12", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P6", pontos:"8", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Las Vegas", pos:"P6", pontos:"9", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Qatar", pos:"P10", pontos:"2", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" }
],
"2025": [
  { gp:"Australia", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P2", pontos:"19", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Saudi Arabia", pos:"P4", pontos:"12", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Miami", pos:"P2", pontos:"26", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Emilia Romagna", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P2", pontos:"24", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Netherlands", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Azerbaijan", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
{ gp:"Brazil", pos:"P1", pontos:"33", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" }, 
  { gp:"Las Vegas", pos:"DSQ", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Qatar", pos:"P4", pontos:"18", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" }
]
};
const landoCampeonato = {
  "2019": {
    posicao: "11&ordm;",
    pontos: 49
  },
    "2020": {
    posicao: "9&ordm;",
    pontos: 97
  },
  "2021": {
  posicao: "6&ordm;",
  pontos: 160
},
"2022": {
  posicao: "7&ordm;",
  pontos: 122
},
"2023": {
  posicao: "6&ordm;",
  pontos: 205
},
"2024": {
  posicao: "2&ordm;",
  pontos: 374
},
"2025": {
  posicao: "1&ordm;",
  pontos: 423
}

};


const landoContainer =
document.querySelector(".lando-corridas-container");

const landoSummary =
document.querySelector(".lando-season-summary");

const landoBtns =
document.querySelectorAll(".lando-ano-btn");

/* ==========================
TEMPORADA 2026 VIA API
========================== */

async function carregarLando2026(){

try{

const [gpReq, sprintReq] = await Promise.all([
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/norris/results.json"),
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/norris/sprint.json")
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
let tipo="lando-sem-pontos";

if(pos==="DNF" || pos==="DNS" ||pos==="DSQ"){
tipo="lando-dnf";
}
else if(Number(pos)===1){
tipo="lando-vitoria";
}
else if(Number(pos)<=3){
tipo="lando-podio";
}
else if(Number(race.points)>0){
tipo="lando-pontos";
}

// Sprint
const sprintRace =
sprints.find(s=>s.round===round);

if(sprintRace){

const sprintResult =
sprintRace.SprintResults?.[0];

if(sprintResult){

let tipoSprint="lando-sem-pontos";

if(Number(sprintResult.position)===1){
tipoSprint="lando-vitoria";
}
else if(Number(sprintResult.position)<=3){
tipoSprint="lando-podio";
}
else if(Number(sprintResult.points)>0){
tipoSprint="lando-pontos";
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

landoTemporadas["2026"]=temporada;

let posicaoCampeonato="-";

try{

const req=
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/driverStandings.json"
);

const data=
await req.json();

const lando=
data
.MRData
.StandingsTable
.StandingsLists?.[0]
?.DriverStandings
?.find(
d=>d.Driver.driverId==="norris"
);

if(lando){
posicaoCampeonato=`${lando.position}&ordm;`;
}

}catch{}

landoCampeonato["2026"]={

posicao:posicaoCampeonato,

pontos:pontosTotal

};

}catch(err){

console.log(err);

}

}

function carregarTemporada(ano){

if(
!landoContainer
)return;

landoContainer.innerHTML="";

const temporada =
landoTemporadas[ano] || [];

let equipeAnterior =
null;

temporada.forEach(
(corrida,index)=>{

const card =
document.createElement("div");

card.className=
`lando-corrida-card ${corrida.tipo}`;

const mudouEquipe =
equipeAnterior &&
equipeAnterior !== corrida.equipe;

if(mudouEquipe){

card.classList.add(
"lando-team-change"
);

}

card.innerHTML=`

<span class="lando-gp">
${corrida.sprint ? "🏁 Sprint • " : ""}${corrida.gp}
</span>

<div class="lando-team">

<img
src="${corrida.logo}"
class="lando-team-logo">

</div>

<span class="lando-resultado">
${corrida.pos}
</span>

<span class="lando-pontos-texto">
${corrida.pontos} pts
</span>

`;

landoContainer.appendChild(
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
landoCampeonato[ano];

if(
landoSummary
){

landoSummary.innerHTML=`

<div
class="lando-summary-card show">

<h3
class="lando-summary-title">

Season ${ano}

</h3>

<div
class="lando-summary-stats">

<div
class="lando-summary-box">

<span
class="lando-summary-label">

Position

</span>

<span
class="lando-summary-value">

${resumo?.posicao || "—"}

</span>

</div>

<div
class="lando-summary-box">

<span
class="lando-summary-label">

Points

</span>

<span
class="lando-summary-value">

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

async function iniciarLando(){

await carregarLando2026();

landoBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

landoBtns.forEach(
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

iniciarLando();





/* =============================================
	MENU 
============================================= */



const togglelando = document.getElementById("menuTogglelando");
const menulando = document.getElementById("sideMenulando");
const overlaylando = document.getElementById("overlaylando");
const closelando = document.getElementById("closeMenulando");

const linksMenulando = document.querySelectorAll(".side-menu-lando a");

function fecharMenulando() {
  if (menulando) menulando.classList.remove("active");
  if (overlaylando) overlaylando.classList.remove("active");
}

if (togglelando) {
  togglelando.addEventListener("click", () => {
    menulando?.classList.add("active");
    overlaylando?.classList.add("active");
  });
}

if (closelando) {
  closelando.addEventListener("click", fecharMenulando);
}

if (overlaylando) {
  overlaylando.addEventListener("click", fecharMenulando);
}

linksMenulando.forEach(link => {
  link.addEventListener("click", fecharMenulando);
});

(function scrollLinkslando() {

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




/* =============================================
	BANNER 
============================================= */
 

const norrislBanner = document.querySelector(".norris-banner-bg");

if(norrislBanner){

  norrislBanner.addEventListener("mousemove", (e)=>{

    const rect = norrislBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    norrislBanner.style.setProperty("--mouse-x", x + "px");
    norrislBanner.style.setProperty("--mouse-y", y + "px");

  });

}


 /* =============================================
	TEAMMATES 
============================================= */




const norrisData = [

{
first:"CARLOS",
last:"SAINZ",

img:"lando/sainz.png",

years:"2019 — 2020",

stats:{
quali:[20,18],
races:[17,21],
podiums:[1,2],
wins:[0,0],
pole:[0,0],
points:[146,201]
}
},

{
first:"DANIEL",
last:"RICCIARDO",

img:"lando/ricciardo.png",

years:"2021 — 2022",

stats:{
quali:[28,16],
races:[38,7],
podiums:[8,1],
wins:[0,1],
pole:[1,0],
points:[282,152]
}
},

{
first:"OSCAR",
last:"PIASTRI",

img:"lando/pia(1).png",

years:"2023 — 2025",

stats:{
quali:[42,34],
races:[68,57],
podiums:[31,18],
wins:[11,8],
pole:[10,7],
points:[994,799]
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
"norrisYears"
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
"norrisQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"norrisQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"norrisRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"norrisRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"norrisPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"norrisPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"norrisWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"norrisWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"norrisPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"norrisPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"norrisPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"norrisPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"norrisBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"norrisBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"norrisBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"norrisBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"norrisBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"norrisBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"norrisBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"norrisBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"norrisBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"norrisBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"norrisBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"norrisBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
norrisData[
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
".norris-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.norris-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".norris-tab"
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
".norris-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

norrisData
.length-1



render(
current
)

}



document
.querySelector(
".norris-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
norrisData.length

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

const abrirNoticias = document.getElementById("abrirNoticiaslando");
const fecharNoticias = document.getElementById("fecharNoticiaslando");

const atualizarNoticias =
document.getElementById("atualizarNoticiaslando");


const painelNoticias = document.getElementById("painelNoticiaslando");
const overlayNoticias = document.getElementById("overlayNoticiaslando");

const listaNoticias = document.getElementById("listaNoticiaslando");




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
        <div class="loading-noticias-lando">

            <div class="spinner-lando"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{


const resposta = await fetch(
`https://gnews.io/api/v4/search?q=Lando Norris Team&lang=en&max=10&apikey=${API_KEY}`
);

			


        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-lando">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-lando">

                <img
                src="${noticia.image || 'pilotos/lando.png'}"
                alt="Notícia">

                <div class="card-conteudo-lando">

                    <div class="data-noticia-lando">

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

        <div class="loading-noticias-lando">

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
const historicolando = {

    corridas: 152,
    vitorias: 11,
    podios: 44,
    poles: 16,
    pontos: 1481

};

// CONFIGURAÇÃO
const driverId = "norris";
const temporada = "2026";

// ELEMENTOS HTML
const contadorCorridas =
document.getElementById("corridas-lando");

const contadorVitorias =
document.getElementById("vitorias-lando");

const contadorPodios =
document.getElementById("podios-lando");

const contadorPoles =
document.getElementById("poles-lando");

const contadorPontos =
document.getElementById("pontos-lando");

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
        historicolando.corridas +
        corridas2026,

        vitorias:
        historicolando.vitorias +
        vitorias2026,

        podios:
        historicolando.podios +
        podios2026,

        poles:
        historicolando.poles +
        poles2026,

        pontos:
historicolando.pontos +
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
    document.querySelector(".numeros-lando");

    if(!secao) return;

    const observer =
    new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-lando")
                .forEach(contador=>{

                    if(contador.classList.contains("contado"))
                    return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-lando"
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
    .querySelectorAll(".animar-lando")
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
   LANDO NORRIS — ESTATÍSTICAS DA TEMPORADA 2026
   JOLPICA F1 API
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    const ANO = 2026;
    const PILOTO = "norris";

    const BASE = `https://api.jolpi.ca/ergast/f1/${ANO}`;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const positionEl =
        document.getElementById("lando-season-position");

    const pointsEl =
        document.getElementById("lando-season-points");

    const racesEl =
        document.getElementById("lando-season-races");

    const winsEl =
        document.getElementById("lando-season-wins");

    const podiumsEl =
        document.getElementById("lando-season-podiums");

    const polesEl =
        document.getElementById("lando-season-poles");

    const top5El =
        document.getElementById("lando-season-top5");

    const fastestLapsEl =
        document.getElementById("lando-season-fastest-laps");

    const dnfsEl =
        document.getElementById("lando-season-dnfs");

    const bestResultEl =
        document.getElementById("lando-season-best-result");

    const averageFinishEl =
        document.getElementById("lando-season-average-finish");

    const averageQualiEl =
        document.getElementById("lando-season-average-quali");

    const bestQualiEl =
        document.getElementById("lando-season-best-quali");


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


        const norrisStanding =
            listaStandings.find(driver => {

                return (
                    driver.Driver?.driverId === PILOTO
                );

            });


        if (norrisStanding) {

            positionEl.textContent =
                `P${norrisStanding.position}`;


            animarNumero(
                pointsEl,
                norrisStanding.points
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
            "🏎️ LANDO NORRIS — TEMPORADA 2026"
        );

        console.log(
            "========================================"
        );

        console.log(
            "Posição:",
            norrisStanding?.position
        );

        console.log(
            "Pontos:",
            norrisStanding?.points
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





/* =============================================
	TITULOS 
============================================= */
const norrisTitles = {

  2025: {

    piloto: "LANDO",
    sobrenome: "NORRIS",

    ano: "2025",

    subtitulo:
    "CAMPEÃO MUNDIAL DE FÓRMULA 1",

    descricao:
    "Depois de uma temporada marcada por altos e baixos, Lando Norris superou a pressão de Max Verstappen e a disputa interna com Oscar Piastri para conquistar seu primeiro título mundial na Fórmula 1.",

    imagem:
    "lando/title.png",

    quote:
    "Nunca foi fácil, mas eu nunca desisti. Trabalhei, mantive a cabeça no lugar e hoje realizo meu sonho: sou campeão do mundo.",

    stats: {

      vitorias: 7,
      podios: 18,
      pontos: 423,
      poles: 7,
      corridas: 24

    },

    timeline: [

      {
        tipo:"positive",

        titulo:"INÍCIO PROMISSOR",

        texto:
        "Norris vence na estreia e mostra velocidade, mas Piastri começa mais consistente.",

        resultado:
        "GP DA AUSTRÁLIA • P1"
      },

      {
        tipo:"warning",

        titulo:"REAÇÃO EM MÔNACO",

        texto:
        "Norris vence em Mônaco e reduz a diferença para o líder do campeonato.",

        resultado:
        "GP DE MÔNACO • P1"
      },

      {
        tipo:"danger",

        titulo:"CANADÁ: O ERRO",

        texto:
        "Batida faltando poucas voltas para o fim faz Norris perder pontos importantes.",

        resultado:
        "GP DO CANADÁ • DNF"
      },

      {
        tipo:"positive",

        titulo:"A VIRADA",

        texto:
        "Norris reage com vitórias seguidas e assume a liderança do campeonato.",

        resultado:
        "3 VITÓRIAS EM 4 CORRIDAS"
      },

      {
        tipo:"climax",

        titulo:"ABU DHABI: O TÍTULO",

        texto:
        "Precisando apenas chegar no top 3, Norris confirma o campeonato mundial.",

        resultado:
        "CAMPEÃO MUNDIAL 2025"
      }

    ]

  }

};

const norrisTitleContainer =
document.querySelector(".lando-title-content");

function carregarTitulonorris(ano){

  const data = norrisTitles[ano];
  if (!data) return;

  norrisTitleContainer.innerHTML = `
    <section class="lando-season-card">

      <div class="lando-title-buttons">
        ${Object.keys(norrisTitles).map(y => `
          <button class="lando-title-btn ${y == ano ? "active" : ""}"
          data-title="${y}">
            ${y}
          </button>
        `).join("")}
      </div>

      <div class="lando-hero">

        <div class="lando-hero-left">
          <img src="${data.imagem}" class="lando-hero-art">
        </div>

        <div class="lando-hero-right">

          <span class="lando-year">${data.ano}</span>

          <h1 class="lando-name">
            ${data.piloto}
            <span>${data.sobrenome}</span>
          </h1>

          <h2 class="lando-subtitle">${data.subtitulo}</h2>

          <div class="lando-description">${data.descricao}</div>

          <div class="lando-stats">
            <div class="lando-stat-box"><h3>${data.stats.vitorias}</h3><p>Vitórias</p></div>
            <div class="lando-stat-box"><h3>${data.stats.podios}</h3><p>Pódios</p></div>
            <div class="lando-stat-box"><h3>${data.stats.pontos}</h3><p>Pontos</p></div>
            <div class="lando-stat-box"><h3>${data.stats.poles}</h3><p>Poles</p></div>
            <div class="lando-stat-box"><h3>${data.stats.corridas}</h3><p>Corridas</p></div>
          </div>

        </div>

      </div>

      <div class="lando-timeline-section">

        <h2 class="lando-section-title">
          TEMPORADA ${data.ano}
        </h2>

        <div class="lando-timeline-grid">

          ${data.timeline.map(e => `
            <div class="lando-race-card ${e.tipo}">
              <h3>${e.titulo}</h3>
              <p>${e.texto}</p>
              <div class="lando-race-result">${e.resultado}</div>
            </div>
          `).join("")}

        </div>

      </div>

    </section>
  `;

  // botão click (sem duplicar listener)
  document.querySelectorAll(".lando-title-btn").forEach(btn => {
    btn.onclick = () => carregarTitulonorris(btn.dataset.title);
  });

}

if (norrisTitleContainer){
  carregarTitulonorris(2025);
}






document.addEventListener("DOMContentLoaded", () => {


  /* =======================================================
     REVEAL DAS SEÇÕES
  ======================================================== */

  const elementosReveal =
    document.querySelectorAll(
      ".reveal-norris"
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
      ".skill-card-norris"
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
              ".skill-progresso-norris"
            );


          const numero =
            card.querySelector(
              ".skill-numero-norris"
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
      ".pilotagem-grafico-section-norris"
    );


  const radarArea =
    document.querySelector(
      ".radar-area-norris"
    );


  const pontosRadar =
    document.querySelectorAll(
      ".radar-ponto-norris"
    );


  const numerosSkills =
    document.querySelectorAll(
      ".skill-numero-norris"
    );


  /* =======================================================
     CALCULA E ATUALIZA O RADAR
  ======================================================== */

  function atualizarRadarnorris() {


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


            atualizarRadarnorris();


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
      ".resumo-card-norris"
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
              "resumo-ativo-norris"
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



