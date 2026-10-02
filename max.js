document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglemax = document.getElementById("menuTogglemax");
const menumax = document.getElementById("sideMenumax");
const overlaymax = document.getElementById("overlaymax");
const closemax = document.getElementById("closeMenumax");

const linksMenumax = document.querySelectorAll(".side-menu-max a");

function fecharMenumax() {
  if (menumax) menumax.classList.remove("active");
  if (overlaymax) overlaymax.classList.remove("active");
}

if (togglemax) {
  togglemax.addEventListener("click", () => {
    menumax?.classList.add("active");
    overlaymax?.classList.add("active");
  });
}

if (closemax) {
  closemax.addEventListener("click", fecharMenumax);
}

if (overlaymax) {
  overlaymax.addEventListener("click", fecharMenumax);
}

linksMenumax.forEach(link => {
  link.addEventListener("click", fecharMenumax);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksmax() {

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

const maxBanner = document.querySelector(".max-banner-bg");

if(maxBanner){

  maxBanner.addEventListener("mousemove", (e)=>{

    const rect = maxBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    maxBanner.style.setProperty("--mouse-x", x + "px");
    maxBanner.style.setProperty("--mouse-y", y + "px");

  });

}

/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-max-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-max");

  const dotsContainer =
    document.querySelector(".dots-max");

  const bg =
    document.querySelector(".bg-slider-max");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-max");

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
    document.querySelectorAll(".dot-max");

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

  const secao = document.querySelector(".numeros-max");
  const bg = document.querySelector(".bg-numeros-max");

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

const cards = document.querySelectorAll(".animar-max");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-max");

        const barra =
          card.querySelector(".barra-velocidade-max");

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
    document.querySelector(".titulo-animar-max");

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

const maxTemporadas = {
     
"2015": [
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"max-dnf", equipe:"Toro Rosso", logo:"RB/toro.png"},
  { gp:"Malaysia", pos:"P7", pontos:"6", tipo:"max-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"China", pos:"DNF", pontos:"0", tipo:"max-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"max-dnf", equipe:"Toro Rosso", logo:"RB/toro.png"},
  { gp:"Spain", pos:"P11", pontos:"0", tipo:"max-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"max-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Canada", pos:"P15", pontos:"0", tipo:"max-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Austria", pos:"P8", pontos:"4", tipo:"max-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Great Britain", pos:"DNF", pontos:"0", tipo:"max-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Hungary", pos:"P4", pontos:"12", tipo:"max-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Belgium", pos:"P8", pontos:"4", tipo:"max-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Italy", pos:"P12", pontos:"0", tipo:"max-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"max-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Japan", pos:"P9", pontos:"2", tipo:"max-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Russia", pos:"P10", pontos:"1", tipo:"max-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"United States", pos:"P4", pontos:"12", tipo:"max-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Mexico", pos:"P9", pontos:"2", tipo:"max-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Brazil", pos:"P9", pontos:"2", tipo:"max-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Abu Dhabi", pos:"P16", pontos:"0", tipo:"max-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" }
],

"2016": [
  { gp:"Australia", pos:"P10", pontos:"1", tipo:"max-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"max-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"China", pos:"P8", pontos:"4", tipo:"max-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Russia", pos:"P19", pontos:"0", tipo:"max-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },

  /* ÚLTIMA CORRIDA PELA TORO ROSSO */
  { gp:"Spain", pos:"P1", pontos:"25", tipo:"max-vitoria", equipe:"Red Bull", logo:"icons/redbull.png" },

  { gp:"Monaco", pos:"P10", pontos:"1", tipo:"max-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Canada", pos:"P4", pontos:"12", tipo:"max-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Europe", pos:"P2", pontos:"18", tipo:"max-podio", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Austria", pos:"P2", pontos:"18", tipo:"max-podio", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Great Britain", pos:"P2", pontos:"18", tipo:"max-podio", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"max-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Germany", pos:"P4", pontos:"12", tipo:"max-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Belgium", pos:"P11", pontos:"0", tipo:"max-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"max-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Singapore", pos:"P6", pontos:"8", tipo:"max-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Malaysia", pos:"P2", pontos:"18", tipo:"max-podio", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"max-podio", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"United States", pos:"P4", pontos:"12", tipo:"max-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Mexico", pos:"P3", pontos:"15", tipo:"max-podio", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Brazil", pos:"P3", pontos:"15", tipo:"max-podio", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Abu Dhabi", pos:"P4", pontos:"12", tipo:"max-pontos", equipe:"Red Bull", logo:"icons/redbull.png" }
],

"2017": [
  { gp:"Australia", pos:"P5", pontos:"10", tipo:"max-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"China", pos:"P3", pontos:"15", tipo:"max-podio", equipe:"Red Bull", logo:"icons/redbull.png" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"max-pontos", equipe:"Red Bull", logo:"icons/redbull.png" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Russia", pos:"DNF", pontos:"0", tipo:"max-dnf", equipe:"Red Bull", logo:"icons/redbull.png" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Spain", pos:"DNF", pontos:"0", tipo:"max-dnf" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"max-dnf" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"max-dnf" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Great Britain", pos:"P4", pontos:"12", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Italy", pos:"P10", pontos:"1", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Singapore", pos:"DNF", pontos:"0", tipo:"max-dnf" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Malaysia", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"United States", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Mexico", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"max-pontos",equipe:"Red Bull", logo:"icons/redbull.png" }
],

"2018": [
  { gp:"Australia", pos:"P6", pontos:"8", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"China", pos:"P5", pontos:"10", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Azerbaijan", pos:"DNF", pontos:"0", tipo:"max-dnf" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Spain", pos:"P3", pontos:"15", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Monaco", pos:"P9", pontos:"2", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Canada", pos:"P3", pontos:"15", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"France", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Austria", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Great Britain", pos:"P15", pontos:"0", tipo:"max-sem-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Germany", pos:"P4", pontos:"12", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Singapore", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Russia", pos:"P5", pontos:"10", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Japan", pos:"P3", pontos:"15", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"United States", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Mexico", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Brazil", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"max-podio",equipe:"Red Bull" , logo:"icons/redbull.png" }
],

"2019": [
  { gp:"Australia", pos:"P3", pontos:"15", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Bahrain", pos:"P4", pontos:"12", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"China", pos:"P4", pontos:"12", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Azerbaijan", pos:"P4", pontos:"12", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Spain", pos:"P3", pontos:"15", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Monaco", pos:"P4", pontos:"12", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Canada", pos:"P5", pontos:"10", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"France", pos:"P4", pontos:"12", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Austria", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Great Britain", pos:"P5", pontos:"10", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Germany", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Hungary", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"max-dnf" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Singapore", pos:"P3", pontos:"15", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Russia", pos:"P4", pontos:"12", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Mexico", pos:"P6", pontos:"8", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"United States", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Brazil", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"25", tipo:"max-vitoria" , logo:"icons/redbull.png",equipe:"Red Bull" }
],

"2020": [
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"max-dnf" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Styria", pos:"P3", pontos:"15", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Hungary", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Great Britain", pos:"P2", pontos:"19", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"70th Anniversary", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Italy", pos:"DNF", pontos:"0", tipo:"max-dnf" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Tuscany", pos:"DNF", pontos:"0", tipo:"max-dnf" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Russia", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Eifel", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Portugal", pos:"P3", pontos:"15", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Emilia Romagna", pos:"P2", pontos:"19", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Turkey", pos:"P6", pontos:"8", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Sakhir", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"25", tipo:"max-vitoria" , logo:"icons/redbull.png",equipe:"Red Bull" }
],

"2021": [
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Emilia Romagna", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Portugal", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Spain", pos:"P2", pontos:"19", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Monaco", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Azerbaijan", pos:"DNF", pontos:"0", tipo:"max-dnf" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"France", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Styria", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Austria", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Great Britain", pos:"DNF", pontos:"0", tipo:"max-dnf" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Hungary", pos:"P9", pontos:"2", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Belgium", pos:"P1", pontos:"12.5", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Netherlands", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Italy", pos:"DNF", pontos:"0", tipo:"max-dnf" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Russia", pos:"P2", pontos:"19", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Turkey", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"United States", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Mexico", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Brazil", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Qatar", pos:"P2", pontos:"19", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Saudi Arabia", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"26", tipo:"max-vitoria" , logo:"icons/redbull.png",equipe:"Red Bull" }
],

"2022": [
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"max-dnf" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Saudi Arabia", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"max-dnf" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Emilia Romagna", pos:"P1", pontos:"34", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Miami", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Spain", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Azerbaijan", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Great Britain", pos:"P7", pontos:"6", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Austria", pos:"P2", pontos:"19", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"France", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Hungary", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Belgium", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Netherlands", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Italy", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Singapore", pos:"P7", pontos:"6", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Japan", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"United States", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Mexico", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Brazil", pos:"P6", pontos:"8", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"25", tipo:"max-vitoria" , logo:"icons/redbull.png",equipe:"Red Bull" }
],

"2023": [
  { gp:"Bahrain", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Saudi Arabia", pos:"P2", pontos:"19", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Australia", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Azerbaijan", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Miami", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Monaco", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Spain", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Austria", pos:"P1", pontos:"34", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Great Britain", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Hungary", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Belgium", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Netherlands", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Japan", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Qatar", pos:"P1", pontos:"34", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"United States", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Mexico", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Brazil", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Las Vegas", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"26", tipo:"max-vitoria",equipe:"Red Bull" , logo:"icons/redbull.png" }
],

"2024": [
  { gp:"Bahrain", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Saudi Arabia", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"max-dnf" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Japan", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"China", pos:"P1", pontos:"33", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Miami", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Emilia Romagna", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Spain", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Austria", pos:"P5", pontos:"10", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Great Britain", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Netherlands", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Singapore", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"United States", pos:"P3", pontos:"15", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Mexico", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Brazil", pos:"P1", pontos:"26", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Las Vegas", pos:"P5", pontos:"10", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Qatar", pos:"P1", pontos:"33", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"max-pontos",equipe:"Red Bull", logo:"icons/redbull.png" }
],

"2025": [
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"China", pos:"P4", pontos:"18", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Japan", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Saudi Arabia", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Miami", pos:"P4", pontos:"12", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Emilia Romagna", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Monaco", pos:"P4", pontos:"12", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Canada", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"max-dnf" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Great Britain", pos:"P5", pontos:"10", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Hungary", pos:"P9", pontos:"2", tipo:"max-pontos" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Netherlands", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Azerbaijan", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Singapore", pos:"P2", pontos:"18", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"United States", pos:"P1", pontos:"33", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Mexico", pos:"P3", pontos:"15", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Brazil", pos:"P3", pontos:"20", tipo:"max-podio" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Las Vegas", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Qatar", pos:"P1", pontos:"31", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"25", tipo:"max-vitoria" , equipe:"Red Bull", logo:"icons/redbull.png"}
]

};
const maxCampeonato = {

  "2015": {
    posicao: "12º",
    pontos: 49
  },
  
"2016": {
  posicao: "5º",
  pontos: 204
},

"2017": {
  posicao: "6º",
  pontos: 168
},

"2018": {
  posicao: "4º",
  pontos: 249
},

"2019": {
  posicao: "3º",
  pontos: 278
},

"2020": {
  posicao: "3º",
  pontos: 214
},

"2021": {
  posicao: "1º",
  pontos: 395.5
},

"2022": {
  posicao: "1º",
  pontos: 454
},

"2023": {
  posicao: "1º",
  pontos: 575
},

"2024": {
  posicao: "1º",
  pontos: 437
},
"2025": {
  posicao: "2º",
  pontos: 420
}


};




const maxContainer =
document.querySelector(".max-corridas-container");

const maxSummary =
document.querySelector(".max-season-summary");

const maxBtns =
document.querySelectorAll(".max-ano-btn");

/* ==========================
TEMPORADA 2026 VIA API
========================== */
async function carregarmax2026(){

try{

const [gpReq, sprintReq] = await Promise.all([
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/max_verstappen/results.json"),
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/max_verstappen/sprint.json")
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
let tipo="max-sem-pontos";

if(pos==="DNF" || pos==="DNS" ||pos==="DSQ"){
tipo="max-dnf";
}
else if(Number(pos)===1){
tipo="max-vitoria";
}
else if(Number(pos)<=3){
tipo="max-podio";
}
else if(Number(race.points)>0){
tipo="max-pontos";
}

// Sprint
const sprintRace =
sprints.find(s=>s.round===round);

if(sprintRace){

const sprintResult =
sprintRace.SprintResults?.[0];

if(sprintResult){

let tipoSprint="max-sem-pontos";

if(Number(sprintResult.position)===1){
tipoSprint="max-vitoria";
}
else if(Number(sprintResult.position)<=3){
tipoSprint="max-podio";
}
else if(Number(sprintResult.points)>0){
tipoSprint="max-pontos";
}

temporada.push({

gp:gp.raceName+" • Sprint",

pos:`P${sprintResult.position}`,

pontos:String(sprintResult.points),

tipo:tipoSprint,

equipe:"Red Bull",

logo:"icons/redbull.png",

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

equipe:"Red Bull",

logo:"icons/redbull.png",

sprint:false

});

pontosTotal += Number(race.points);

});

maxTemporadas["2026"]=temporada;

let posicaoCampeonato="-";

try{

const req=
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/driverStandings.json"
);

const data=
await req.json();

const max=
data
.MRData
.StandingsTable
.StandingsLists?.[0]
?.DriverStandings
?.find(
d=>d.Driver.driverId==="max_verstappen"
);

if(max){
posicaoCampeonato=`${max.position}&ordm;`;
}

}catch{}

maxCampeonato["2026"]={

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
!maxContainer
)return;

maxContainer.innerHTML="";

const temporada =
maxTemporadas[ano] || [];

let equipeAnterior =
null;

temporada.forEach(
(corrida,index)=>{

const card =
document.createElement("div");

card.className=
`max-corrida-card ${corrida.tipo}`;

const mudouEquipe =
equipeAnterior &&
equipeAnterior !== corrida.equipe;

if(mudouEquipe){

card.classList.add(
"max-team-change"
);

}

card.innerHTML=`

<span class="max-gp">
${corrida.gp} GP
</span>

<div class="max-team">

<img
src="${corrida.logo}"
class="max-team-logo">

</div>

<span class="max-resultado">
${corrida.pos}
</span>

<span class="max-pontos-texto">
${corrida.pontos} pts
</span>

`;

maxContainer.appendChild(
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
maxCampeonato[ano];

if(
maxSummary
){

maxSummary.innerHTML=`

<div
class="max-summary-card show">

<h3
class="max-summary-title">

Season ${ano}

</h3>

<div
class="max-summary-stats">

<div
class="max-summary-box">

<span
class="max-summary-label">

Position

</span>

<span
class="max-summary-value">

${resumo?.posicao || "—"}

</span>

</div>

<div
class="max-summary-box">

<span
class="max-summary-label">

Points

</span>

<span
class="max-summary-value">

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

async function iniciarmax(){

await carregarmax2026();

maxBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

maxBtns.forEach(
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

iniciarmax();






/*//////////*///////
//////TITULOS///////////////
//////////////////

const verstappenTitles = {

  2021: {

    piloto: "MAX",
    sobrenome: "VERSTAPPEN",

    ano: "2021",

    subtitulo:
    "CAMPEÃO MUNDIAL DE FÓRMULA 1",

    descricao:
    "Depois de uma das temporadas mais intensas da história da Fórmula 1, Max Verstappen derrotou Lewis Hamilton na última volta da última corrida para conquistar seu primeiro título mundial.",

    imagem:
    "max/max2021.png",

    quote:
    "É inacreditável. Lutamos até o final e finalmente conseguimos.",

    stats: {

      vitorias: 10,
      podios: 18,
      pontos: 395.5,
      poles: 10,
      corridas: 22

    },

    timeline: [

      {
        tipo:"positive",

        titulo:"INÍCIO FORTE",

        texto:
        "Verstappen vence em Imola e mostra que a Red Bull finalmente pode enfrentar a Mercedes.",

        resultado:
        "EMILIA ROMAGNA • P1"
      },

      {
        tipo:"danger",

        titulo:"SILVERSTONE",

        texto:
        "Batida com Hamilton a mais de 250 km/h gera enorme polêmica no campeonato.",

        resultado:
        "GP DA GRÃ-BRETANHA • DNF"
      },

      {
        tipo:"warning",

        titulo:"HUNGRIA CAÓTICA",

        texto:
        "Max é atingido na largada e perde pontos importantes na luta pelo título.",

        resultado:
        "GP DA HUNGRIA • P9"
      },

      {
        tipo:"positive",

        titulo:"DOMÍNIO EM AUSTIN",

        texto:
        "Vitória estratégica nos EUA recoloca Verstappen na liderança.",

        resultado:
        "GP DOS EUA • P1"
      },

      {
        tipo:"climax",

        titulo:"ABU DHABI: O TÍTULO",

        texto:
        "Na última volta da temporada, Verstappen ultrapassa Hamilton e conquista seu primeiro campeonato mundial.",

        resultado:
        "CAMPEÃO MUNDIAL 2021"
      }

    ]

  },
  
  2022: {

  piloto: "MAX",
  sobrenome: "VERSTAPPEN",

  ano: "2022",

  subtitulo:
  "BICAMPEÃO MUNDIAL DE FÓRMULA 1",

  descricao:
  "Depois de um início complicado com abandonos nas primeiras corridas, Verstappen reagiu com uma sequência dominante de vitórias e conquistou seu segundo título mundial de maneira antecipada no Japão.",

  imagem:
  "max/max22.png",

  quote:
  "Nós viramos a temporada completamente. O carro ficou incrível e tudo entrou no lugar.",

  stats: {

    vitorias: 15,
    podios: 17,
    pontos: 454,
    poles: 7,
    corridas: 22

  },

  timeline: [

    {
      tipo:"danger",

      titulo:"INÍCIO COMPLICADO",

      texto:
      "Dois abandonos nas três primeiras corridas deixam Verstappen atrás na disputa.",

      resultado:
      "AUSTRÁLIA • DNF"
    },

    {
      tipo:"positive",

      titulo:"REAÇÃO IMEDIATA",

      texto:
      "Vitória dominante em Imola inicia a recuperação da Red Bull no campeonato.",

      resultado:
      "EMILIA ROMAGNA • P1"
    },

    {
      tipo:"positive",

      titulo:"SEQUÊNCIA AVASSALADORA",

      texto:
      "Max começa uma sequência absurda de vitórias e abre vantagem enorme na liderança.",

      resultado:
      "FRANÇA • P1"
    },

    {
      tipo:"warning",

      titulo:"RECUPERAÇÃO NA HUNGRIA",

      texto:
      "Mesmo largando apenas em décimo, Verstappen vence uma das corridas mais impressionantes da temporada.",

      resultado:
      "HUNGRIA • P1"
    },

    {
      tipo:"climax",

      titulo:"TÍTULO NO JAPÃO",

      texto:
      "Com mais uma vitória dominante em Suzuka, Verstappen garante matematicamente o bicampeonato mundial.",

      resultado:
      "CAMPEÃO MUNDIAL 2022"
    }

  ]

},
  
  2023: {

  piloto: "MAX",
  sobrenome: "VERSTAPPEN",

  ano: "2023",

  subtitulo:
  "TRICAMPEÃO MUNDIAL DE FÓRMULA 1",

  descricao:
  "A temporada de 2023 entrou para a história como uma das maiores dominações que a Fórmula 1 já viu. Verstappen venceu praticamente tudo, quebrou recordes e conquistou o tricampeonato mundial com enorme vantagem.",

  imagem:
  "max/max23.png",

  quote:
  "Nunca imaginei viver uma temporada assim. O carro e a equipe foram inacreditáveis.",

  stats: {

    vitorias: 19,
    podios: 21,
    pontos: 575,
    poles: 12,
    corridas: 22

  },

  timeline: [

    {
      tipo:"positive",

      titulo:"COMEÇO AVASSALADOR",

      texto:
      "Verstappen abre a temporada vencendo no Bahrein e mostrando imediatamente o domínio da Red Bull.",

      resultado:
      "BAHRAIN • P1"
    },

    {
      tipo:"positive",

      titulo:"SEQUÊNCIA HISTÓRICA",

      texto:
      "Max inicia uma sequência absurda de vitórias consecutivas e começa a quebrar recordes da Fórmula 1.",

      resultado:
      "HUNGRIA • P1"
    },

    {
      tipo:"warning",

      titulo:"SINGAPURA ESCAPA",

      texto:
      "A única corrida realmente fora do alcance da Red Bull em 2023 termina sem vitória para Verstappen.",

      resultado:
      "SINGAPURA • P5"
    },

    {
      tipo:"positive",

      titulo:"RECORDE EM MONZA",

      texto:
      "Vitória na Itália coloca Verstappen como o piloto com mais vitórias consecutivas na história da Fórmula 1.",

      resultado:
      "ITALY • P1"
    },

    {
      tipo:"climax",

      titulo:"TRICAMPEÃO NO QATAR",

      texto:
      "Com uma temporada dominante e histórica, Verstappen garante matematicamente seu terceiro título mundial no Catar.",

      resultado:
      "CAMPEÃO MUNDIAL 2023"
    }

  ]

},
  
  2024: {

  piloto: "MAX",
  sobrenome: "VERSTAPPEN",

  ano: "2024",

  subtitulo:
  "TETRACAMPEÃO MUNDIAL DE FÓRMULA 1",

  descricao:
  "Mesmo enfrentando uma temporada muito mais equilibrada e com forte crescimento das rivais, Verstappen conseguiu manter a consistência ao longo do ano e conquistou seu quarto título mundial consecutivo.",

  imagem:
  "max/max24.png",

  quote:
  "Essa foi provavelmente a temporada mais difícil mentalmente. Tivemos que lutar até o fim.",

  stats: {

    vitorias: 9,
    podios: 14,
    pontos: 437,
    poles: 8,
    corridas: 24

  },

  timeline: [

    {
      tipo:"positive",

      titulo:"INÍCIO DOMINANTE",

      texto:
      "Verstappen começa 2024 vencendo as primeiras corridas e mantém o controle do campeonato.",

      resultado:
      "BAHRAIN • P1"
    },

    {
      tipo:"warning",

      titulo:"RIVAIS SE APROXIMAM",

      texto:
      "McLaren, Ferrari e Mercedes evoluem durante a temporada e a vantagem da Red Bull diminui bastante.",

      resultado:
      "MEIO DA TEMPORADA"
    },

    {
      tipo:"danger",

      titulo:"PRESSÃO CONSTANTE",

      texto:
      "Erros estratégicos, corridas difíceis e disputas intensas deixam o campeonato mais apertado.",

      resultado:
      "EUROPA • BATALHA PELO TÍTULO"
    },

    {
      tipo:"positive",

      titulo:"VITÓRIA DECISIVA NO BRASIL",

      texto:
      "Em uma das performances mais marcantes da temporada, Verstappen vence em Interlagos e dá um passo enorme rumo ao título.",

      resultado:
      "SÃO PAULO • P1"
    },

    {
      tipo:"climax",

      titulo:"QUARTO TÍTULO MUNDIAL",

      texto:
      "Com regularidade e controle nas etapas finais, Verstappen confirma o tetracampeonato consecutivo.",

      resultado:
      "CAMPEÃO MUNDIAL 2024"
    }

  ]

}
  

};

const maxTitleContainer =
document.querySelector(".max-title-content");

function carregarTituloMax(ano){

  const data = verstappenTitles[ano];

  if (!data) return;

  maxTitleContainer.innerHTML = `
  
    <section class="max-season-card">

     <div class="max-title-buttons">

    <button class="max-title-btn ${ano == 2021 ? "active" : ""}"
    data-title="2021">
      2021
    </button>

    <button class="max-title-btn ${ano == 2022 ? "active" : ""}"
    data-title="2022">
      2022
    </button>

    <button class="max-title-btn ${ano == 2023 ? "active" : ""}"
    data-title="2023">
      2023
    </button>

    <button class="max-title-btn ${ano == 2024 ? "active" : ""}"
    data-title="2024">
      2024
    </button>

  </div>

    <div class="max-hero">

      <div class="max-hero-left">

        <img src="${data.imagem}"
        class="max-hero-art">

      </div>

      <div class="max-hero-right">

        <div class="max-title-area">

          <span class="max-year">
            ${data.ano}
          </span>

          <h1 class="max-name">

            ${data.piloto}

            <span>
              ${data.sobrenome}
            </span>

          </h1>

          <h2 class="max-subtitle">
            ${data.subtitulo}
          </h2>

        </div>

        <div class="max-description">
          ${data.descricao}
        </div>

        <div class="max-stats">

          <div class="max-stat-box">
            <h3>${data.stats.vitorias}</h3>
            <p>Vitórias</p>
          </div>

          <div class="max-stat-box">
            <h3>${data.stats.podios}</h3>
            <p>Pódios</p>
          </div>

          <div class="max-stat-box">
            <h3>${data.stats.pontos}</h3>
            <p>Pontos</p>
          </div>

          <div class="max-stat-box">
            <h3>${data.stats.poles}</h3>
            <p>Poles</p>
          </div>

          <div class="max-stat-box">
            <h3>${data.stats.corridas}</h3>
            <p>Corridas</p>
          </div>

        </div>

        <div class="max-quote">

          <p>
            "${data.quote}"
          </p>

          <span>
            — Max Verstappen
          </span>

        </div>

      </div>

    </div>

    <div class="max-timeline-section">

      <h2 class="max-section-title">
        A JORNADA DA TEMPORADA ${data.ano}
      </h2>

      <div class="max-timeline-grid">

        ${data.timeline.map(evento => `

          <div class="max-race-card ${evento.tipo}">

            <h3>${evento.titulo}</h3>

            <p>${evento.texto}</p>

            <div class="max-race-result">
              ${evento.resultado}
            </div>

          </div>

        `).join("")}

      </div>

    </div>

  </section>
  `;
  
  const titleBtns =
document.querySelectorAll(".max-title-btn");

titleBtns.forEach(btn => {

  btn.addEventListener("click", ()=>{

    carregarTituloMax(
      btn.dataset.title
    );

  });

});
  
}


const maxtitleContainer =
document.querySelector(".max-title-content");
if (maxtitleContainer){

carregarTituloMax(2021);

}

/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-max");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-max");

const fraseEng = '"P1 max, amazing race!"';
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

const spans = document.querySelectorAll(".wave-max span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-max");
const lightbox = document.querySelector(".lightbox-max");
const imgLightbox = document.querySelector(".img-lightbox-max");
const fechar = document.querySelector(".fechar-max");

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



const verstappenData=[

{

first:"CARLOS",

last:"SAINZ",

img:"max/sainz.png",

years:"2015",

stats:{

quali:[10,9],

races:[8,10],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[49,18]

}

},

{

first:"DANIEL",

last:"RICCIARDO",

img:"max/ricciardo.png",

years:"2016 — 2018",

stats:{

quali:[25,33],

races:[30,28],

podiums:[22,29],

wins:[7,4],

pole:[2,1],

points:[608,590]

}

},

{

first:"PIERRE",

last:"GASLY",

img:"max/gasly.png",

years:"2019",

stats:{

quali:[11,1],

races:[11,1],

podiums:[5,0],

wins:[2,0],

pole:[1,0],

points:[181,63]

}

},

{

first:"ALEX",

last:"ALBON",

img:"max/albon.png",

years:"2019 — 2020",

stats:{

quali:[25,1],

races:[17,9],

podiums:[15,2],

wins:[3,0],

pole:[1,0],

points:[311,181]

}

},

{

first:"SERGIO",

last:"PEREZ",

img:"max/perez.png",

years:"2021 — 2024",

stats:{

quali:[79,24],

races:[71,29],

podiums:[62,39],

wins:[47,5],

pole:[32,3],

points:[1918,932]

}

},

{

first:"LIAM",

last:"LAWSON",

img:"max/lawson.png",

years:"2025",

stats:{

quali:[2,0],

races:[2,0],

podiums:[1,0],

wins:[0,0],

pole:[0,0],

points:[36,0]

}

},

	{

first:"YUKI",

last:"TSUNODA",

img:"max/tsunoda.png",

years:"2025",

stats:{

quali:[22,0],

races:[21,1],

podiums:[14,0],

wins:[8,0],

pole:[8,0],

points:[421,33]

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
"verstappenYears"
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
"verstappenQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"verstappenQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"verstappenRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"verstappenRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"verstappenPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"verstappenPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"verstappenWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"verstappenWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"verstappenPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"verstappenPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"verstappenPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"verstappenPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"verstappenBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"verstappenBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"verstappenBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"verstappenBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"verstappenBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"verstappenBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"verstappenBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"verstappenBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"verstappenBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"verstappenBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"verstappenBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"verstappenBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
verstappenData[
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
".verstappen-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.verstappen-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".verstappen-tab"
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
".verstappen-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

verstappenData
.length-1



render(
current
)

}



document
.querySelector(
".verstappen-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
verstappenData.length

)

current=0



render(
current
)

}



render(0) 


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



// =========================================
//  NOTÍCIAS
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiasmax");
const fecharNoticias = document.getElementById("fecharNoticiasmax");

const atualizarNoticias =
document.getElementById("atualizarNoticiasmax");


const painelNoticias = document.getElementById("painelNoticiasmax");
const overlayNoticias = document.getElementById("overlayNoticiasmax");

const listaNoticias = document.getElementById("listaNoticiasmax");




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
        <div class="loading-noticias-max">

            <div class="spinner-max"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{


const resposta = await fetch(
`https://gnews.io/api/v4/search?q=Max Verstappen Team&lang=en&max=10&apikey=${API_KEY}`
);

			


        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-max">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-max">

                <img
                src="${noticia.image || 'pilotos/max.png'}"
                alt="Notícia">

                <div class="card-conteudo-max">

                    <div class="data-noticia-max">

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

        <div class="loading-noticias-max">

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
const historicomax = {

    corridas: 233,
    vitorias: 71,
    podios: 127,
    poles: 48,
    pontos: 3444

};

// CONFIGURAÇÃO
const driverId = "max_verstappen";
const temporada = "2026";

// ELEMENTOS HTML
const contadorCorridas =
document.getElementById("corridas-max");

const contadorVitorias =
document.getElementById("vitorias-max");

const contadorPodios =
document.getElementById("podios-max");

const contadorPoles =
document.getElementById("poles-max");

const contadorPontos =
document.getElementById("pontos-max");

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
        historicomax.corridas +
        corridas2026,

        vitorias:
        historicomax.vitorias +
        vitorias2026,

        podios:
        historicomax.podios +
        podios2026,

        poles:
        historicomax.poles +
        poles2026,

        pontos:
historicomax.pontos +
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
    document.querySelector(".numeros-max");

    if(!secao) return;

    const observer =
    new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-max")
                .forEach(contador=>{

                    if(contador.classList.contains("contado"))
                    return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-max"
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
    .querySelectorAll(".animar-max")
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
   verstappen verstappen — ESTATÍSTICAS DA TEMPORADA 2026
   JOLPICA F1 API
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    const ANO = 2026;
    const PILOTO = "max_verstappen";

    const BASE = `https://api.jolpi.ca/ergast/f1/${ANO}`;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const positionEl =
        document.getElementById("verstappen-season-position");

    const pointsEl =
        document.getElementById("verstappen-season-points");

    const racesEl =
        document.getElementById("verstappen-season-races");

    const winsEl =
        document.getElementById("verstappen-season-wins");

    const podiumsEl =
        document.getElementById("verstappen-season-podiums");

    const polesEl =
        document.getElementById("verstappen-season-poles");

    const top5El =
        document.getElementById("verstappen-season-top5");

    const fastestLapsEl =
        document.getElementById("verstappen-season-fastest-laps");

    const dnfsEl =
        document.getElementById("verstappen-season-dnfs");

    const bestResultEl =
        document.getElementById("verstappen-season-best-result");

    const averageFinishEl =
        document.getElementById("verstappen-season-average-finish");

    const averageQualiEl =
        document.getElementById("verstappen-season-average-quali");

    const bestQualiEl =
        document.getElementById("verstappen-season-best-quali");


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
            "🏎️ verstappen verstappen — TEMPORADA 2026"
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
      ".reveal-verstappen"
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
      ".skill-card-verstappen"
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
              ".skill-progresso-verstappen"
            );


          const numero =
            card.querySelector(
              ".skill-numero-verstappen"
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
      ".pilotagem-grafico-section-verstappen"
    );


  const radarArea =
    document.querySelector(
      ".radar-area-verstappen"
    );


  const pontosRadar =
    document.querySelectorAll(
      ".radar-ponto-verstappen"
    );


  const numerosSkills =
    document.querySelectorAll(
      ".skill-numero-verstappen"
    );


  /* =======================================================
     CALCULA E ATUALIZA O RADAR
  ======================================================== */

  function atualizarRadarverstappen() {


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


            atualizarRadarverstappen();


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
      ".resumo-card-verstappen"
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
              "resumo-ativo-verstappen"
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



