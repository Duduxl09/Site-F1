document.addEventListener("DOMContentLoaded", function(){


/* =============================================
	MENU 
============================================= */


	
const togglerussell = document.getElementById("menuTogglerussell");
const menurussell = document.getElementById("sideMenurussell");
const overlayrussell = document.getElementById("overlayrussell");
const closerussell = document.getElementById("closeMenurussell");

const linksMenurussell = document.querySelectorAll(".side-menu-russell a");

function fecharMenurussell() {
  if (menurussell) menurussell.classList.remove("active");
  if (overlayrussell) overlayrussell.classList.remove("active");
}

if (togglerussell) {
  togglerussell.addEventListener("click", () => {
    menurussell?.classList.add("active");
    overlayrussell?.classList.add("active");
  });
}

if (closerussell) {
  closerussell.addEventListener("click", fecharMenurussell);
}

if (overlayrussell) {
  overlayrussell.addEventListener("click", fecharMenurussell);
}

linksMenurussell.forEach(link => {
  link.addEventListener("click", fecharMenurussell);
});

(function scrollLinksrussell() {

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

const russellBanner = document.querySelector(".russel-banner-bg");

if(russellBanner){

  russellBanner.addEventListener("mousemove", (e)=>{

    const rect = russellBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    russellBanner.style.setProperty("--mouse-x", x + "px");
    russellBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/* =============================================
	SLIDER 
============================================= */



const track =
  document.querySelector(".slider-russell-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-russell");

  const dotsContainer =
    document.querySelector(".dots-russell");

  const bg =
    document.querySelector(".bg-slider-russell");

  let index = 0;

  /* =========================
     CRIAR DOTS
  ========================= */

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-russell");

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
    document.querySelectorAll(".dot-russell");

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
    document.querySelector(".btn-russell.next");

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
    document.querySelector(".btn-russell.prev");

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

 const russellTemporadas = {

  "2019": [
    { gp:"Australia", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Bahrain", pos:"P15", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"China", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Azerbaijan", pos:"P15", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Spain", pos:"P17", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Monaco", pos:"P15", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Canada", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"France", pos:"P19", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Austria", pos:"P18", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Great Britain", pos:"P14", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Germany", pos:"P11", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Hungary", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Belgium", pos:"P15", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Italy", pos:"P14", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Singapore", pos:"DNF", pontos:"0", tipo:"russell-dnf",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Russia", pos:"DNF", pontos:"0", tipo:"russell-dnf",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Japan", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Mexico", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"United States", pos:"P17", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Brazil", pos:"P12", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Abu Dhabi", pos:"P17", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" }
  ],


 "2020": [
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"russell-dnf",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Styria", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P18", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Great Britain", pos:"P12", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"70th Anniversary", pos:"P18", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P17", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P19", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P14", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Tuscan", pos:"P11", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Russia", pos:"P18", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Eifel", pos:"P20", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Portugal", pos:"P14", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Emilia Romagna", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Turkey", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"P12", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Sakhir", pos:"P9", pontos:"3", tipo:"russell-pontos",  equipe:"Mercedes",  logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P15", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" }
],

 "2021": [
  { gp:"Bahrain", pos:"P14", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Emilia Romagna", pos:"P19", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Portugal", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P14", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P14", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P17", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"France", pos:"P12", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Styria", pos:"P19", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P11", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Great Britain", pos:"P12", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"russell-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P2", pontos:"9", tipo:"russell-podio",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Netherlands", pos:"P17", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P9", pontos:"2", tipo:"russell-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Russia", pos:"P10", pontos:"1", tipo:"russell-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Turkey", pos:"P15", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P14", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Mexico", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"São Paulo", pos:"P13", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Qatar", pos:"P17", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Saudi Arabia", pos:"P19", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P18", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" }
],

 "2022": [
  { gp:"Bahrain", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Australia", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Emilia Romagna", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Miami", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Azerbaijan", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Canada", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Great Britain", pos:"P18", pontos:"0", tipo:"russell-sem-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Austria", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"France", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Netherlands", pos:"P2", pontos:"18", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Singapore", pos:"P14", pontos:"0", tipo:"russell-sem-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Japan", pos:"P8", pontos:"4", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United States", pos:"P5", pontos:"11", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Mexico", pos:"P4", pontos:"13", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"São Paulo", pos:"P1", pontos:"26", tipo:"russell-vitoria" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P5", pontos:"10", tipo:"russell-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
],

 "2023": [
  { gp:"Bahrain", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"russell-dnf" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Azerbaijan", pos:"P8", pontos:"5", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Miami", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"russell-dnf" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Austria", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Great Britain", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P6", pontos:"8", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"P6", pontos:"8", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Netherlands", pos:"P17", pontos:"0", tipo:"russell-sem-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Singapore", pos:"DNF", pontos:"0", tipo:"russell-dnf" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Qatar", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Mexico", pos:"P6", pontos:"8", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"São Paulo", pos:"DNF", pontos:"0", tipo:"russell-dnf" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Las Vegas", pos:"P8", pontos:"4", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"russell-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
],

 "2024": [
  { gp:"Bahrain", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P6", pontos:"8", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"russell-dnf" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"China", pos:"P6", pontos:"8", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Miami", pos:"P8", pontos:"4", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Emilia Romagna", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Canada", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Austria", pos:"P1", pontos:"25", tipo:"russell-vitoria" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Great Britain", pos:"DNF", pontos:"0", tipo:"russell-dnf" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"DSQ", pontos:"0", tipo:"russell-dnf" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Netherlands", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Azerbaijan", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Singapore", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Mexico", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"São Paulo", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Las Vegas", pos:"P1", pontos:"25", tipo:"russell-vitoria" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Qatar", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P5", pontos:"10", tipo:"russell-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
],

 "2025": [
  { gp:"Australia", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"China", pos:"P3", pontos:"20", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Miami", pos:"P3", pontos:"20", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Emilia Romagna", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Monaco", pos:"P11", pontos:"0", tipo:"russell-sem-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"russell-vitoria" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Austria", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Great Britain", pos:"P10", pontos:"1", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Netherlands", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Azerbaijan", pos:"P2", pontos:"18", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Singapore", pos:"P1", pontos:"25", tipo:"russell-vitoria" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United States", pos:"P6", pontos:"15", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Mexico", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Brazil", pos:"P4", pontos:"18", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Las Vegas", pos:"P2", pontos:"18", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Qatar", pos:"P6", pontos:"15", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P5", pontos:"10", tipo:"russell-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
]

};

const russellCampeonato = {

  "2019": {
    posicao: "20º",
    pontos: 0
  },

  "2020": {
    posicao: "18º",
    pontos: 3
  },

  "2021": {
    posicao: "15º",
    pontos: 16
  },

  "2022": {
    posicao: "4º",
    pontos: 275
  },

  "2023": {
    posicao: "8º",
    pontos: 175
  },

  "2024": {
    posicao: "6º",
    pontos: 245
  },

  "2025": {
    posicao: "4º",
    pontos: 339
  }

};


const russellContainer =
document.querySelector(".russell-corridas-container");

const russellSummary =
document.querySelector(".russell-season-summary");

const russellBtns =
document.querySelectorAll(".russell-ano-btn");

/* ==========================
TEMPORADA 2026 VIA API
========================== */

async function carregarrussell2026(){

try{

const [gpReq, sprintReq] = await Promise.all([
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/russell/results.json"),
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/russell/sprint.json")
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
let tipo="russell-sem-pontos";

if(pos==="DNF" || pos==="DNS" ||pos==="DSQ"){
tipo="russell-dnf";
}
else if(Number(pos)===1){
tipo="russell-vitoria";
}
else if(Number(pos)<=3){
tipo="russell-podio";
}
else if(Number(race.points)>0){
tipo="russell-pontos";
}

// Sprint
const sprintRace =
sprints.find(s=>s.round===round);

if(sprintRace){

const sprintResult =
sprintRace.SprintResults?.[0];

if(sprintResult){

let tipoSprint="russell-sem-pontos";

if(Number(sprintResult.position)===1){
tipoSprint="russell-vitoria";
}
else if(Number(sprintResult.position)<=3){
tipoSprint="russell-podio";
}
else if(Number(sprintResult.points)>0){
tipoSprint="russell-pontos";
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

russellTemporadas["2026"]=temporada;

let posicaoCampeonato="-";

try{

const req=
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/driverStandings.json"
);

const data=
await req.json();

const russell=
data
.MRData
.StandingsTable
.StandingsLists?.[0]
?.DriverStandings
?.find(
d=>d.Driver.driverId==="russell"
);

if(russell){
posicaoCampeonato=`${russell.position}&ordm;`;
}

}catch{}

russellCampeonato["2026"]={

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
!russellContainer
)return;

russellContainer.innerHTML="";

const temporada =
russellTemporadas[ano] || [];

let equipeAnterior =
null;

temporada.forEach(
(corrida,index)=>{

const card =
document.createElement("div");

card.className=
`russell-corrida-card ${corrida.tipo}`;

const mudouEquipe =
equipeAnterior &&
equipeAnterior !== corrida.equipe;

if(mudouEquipe){

card.classList.add(
"russell-team-change"
);

}

card.innerHTML=`

<span class="russell-gp">
${corrida.gp} GP
</span>

<div class="russell-team">

<img
src="${corrida.logo}"
class="russell-team-logo">

</div>

<span class="russell-resultado">
${corrida.pos}
</span>

<span class="russell-pontos-texto">
${corrida.pontos} pts
</span>

`;

russellContainer.appendChild(
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
russellCampeonato[ano];

if(
russellSummary
){

russellSummary.innerHTML=`

<div
class="russell-summary-card show">

<h3
class="russell-summary-title">

Season ${ano}

</h3>

<div
class="russell-summary-stats">

<div
class="russell-summary-box">

<span
class="russell-summary-label">

Position

</span>

<span
class="russell-summary-value">

${resumo?.posicao || "—"}

</span>

</div>

<div
class="russell-summary-box">

<span
class="russell-summary-label">

Points

</span>

<span
class="russell-summary-value">

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

async function iniciarrussell(){

await carregarrussell2026();

russellBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

russellBtns.forEach(
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

iniciarrussell();



/* =============================================
	RADIO 
============================================= */



const sectionRussell =
document.querySelector(".radio-f1-russell");

const cardRussell =
document.getElementById("radioCardRussell");

const audioRussell =
document.getElementById("radio-audio-russell");

const engTextRussell =
document.getElementById("eng-text-russell");

const pilTextRussell =
document.getElementById("pil-text-russell");

const contentRussell =
document.querySelector(".content-russell");

const fraseEngRussell =
'"George, that was absolutely brilliant!"';

const frasePilRussell =
'"Amazing job guys, the car was unbelievable!"';

let iRussell = 0;
let jRussell = 0;

let timeoutsRussell = [];

/* RESET */
function resetarRadioRussell(){

  if(audioRussell){

    audioRussell.pause();

    audioRussell.currentTime = 0;

  }

  if(engTextRussell){
    engTextRussell.innerHTML = "";
  }

  if(pilTextRussell){
    pilTextRussell.innerHTML = "";
  }

  iRussell = 0;
  jRussell = 0;

  if(cardRussell){

    cardRussell.classList.remove(
      "ativo",
      "falando",
      "saindo",
      "mostrar-texto"
    );

  }

  if(contentRussell){
    contentRussell.style.height = "0px";
  }

  timeoutsRussell.forEach(t =>
    clearTimeout(t)
  );

  timeoutsRussell = [];

}

/* ESCREVER ENGENHEIRO */
function escreverEngRussell(){

  if(!engTextRussell) return;

  if(iRussell < fraseEngRussell.length){

    engTextRussell.innerHTML +=
    fraseEngRussell[iRussell++];

    timeoutsRussell.push(

      setTimeout(
        escreverEngRussell,
        20
      )

    );

  }

}

/* ESCREVER PILOTO */
function escreverPilRussell(){

  if(!pilTextRussell) return;

  if(jRussell < frasePilRussell.length){

    pilTextRussell.innerHTML +=
    frasePilRussell[jRussell++];

    timeoutsRussell.push(

      setTimeout(
        escreverPilRussell,
        20
      )

    );

  }

}

/* INICIAR */
function iniciarRadioRussell(){

  resetarRadioRussell();

  if(audioRussell){

    audioRussell.currentTime = 0;

    audioRussell.play().catch(() => {});

  }

  if(cardRussell){
    cardRussell.classList.add("ativo");
  }

  if(contentRussell){

    contentRussell.style.height = "0px";

    contentRussell.offsetHeight;

  }

  /* WAVE */
  timeoutsRussell.push(

    setTimeout(() => {

      if(cardRussell){
        cardRussell.classList.add("falando");
      }

    }, 300)

  );

  /* TEXTO ENGENHEIRO */
  timeoutsRussell.push(

    setTimeout(() => {

      if(contentRussell){
        contentRussell.style.height = "120px";
      }

      if(cardRussell){
        cardRussell.classList.add("mostrar-texto");
      }

      escreverEngRussell();

    }, 800)

  );

  /* EXPANDE */
  timeoutsRussell.push(

    setTimeout(() => {

      if(contentRussell){
        contentRussell.style.height = "220px";
      }

    }, 2000)

  );

  /* TEXTO PILOTO */
  timeoutsRussell.push(

    setTimeout(() => {

      escreverPilRussell();

    }, 2100)

  );

  /* PARA ONDA */
  timeoutsRussell.push(

    setTimeout(() => {

      if(cardRussell){
        cardRussell.classList.remove("falando");
      }

    }, 3000)

  );

  /* SOME */
  timeoutsRussell.push(

    setTimeout(() => {

      if(cardRussell){
        cardRussell.classList.add("saindo");
      }

    }, 3500)

  );

}

/* CLIQUE */
if(sectionRussell){

  sectionRussell.addEventListener(
    "click",
    iniciarRadioRussell
  );

}

/* WAVES */
const spansRussell =
document.querySelectorAll(
  ".wave-russell span"
);

spansRussell.forEach((span, index) => {

  span.style.setProperty("--i", index);

});



/* =============================================
	GALERIA 
============================================= */




const itensRussell =
document.querySelectorAll(".item-galeria-russell");

const lightboxRussell =
document.querySelector(".lightbox-russell");

const imgLightboxRussell =
document.querySelector(".img-lightbox-russell");

const fecharRussell =
document.querySelector(".fechar-russell");

/* ABRIR LIGHTBOX */
itensRussell.forEach(item => {

  item.addEventListener("click", ()=>{

    const img =
    item.querySelector("img");

    if(img && lightboxRussell && imgLightboxRussell){

      imgLightboxRussell.src = img.src;

      lightboxRussell.style.display =
      "flex";

      document.body.style.overflow =
      "hidden";

    }

  });

});

/* FECHAR */
function fecharLightboxRussell(){

  if(lightboxRussell){

    lightboxRussell.style.display =
    "none";

  }

  document.body.style.overflow =
  "auto";

}

if(fecharRussell){

  fecharRussell.addEventListener(
    "click",
    fecharLightboxRussell
  );

}

/* FECHAR CLICANDO FORA */
if(lightboxRussell){

  lightboxRussell.addEventListener(
    "click",
    (e)=>{

      if(e.target === lightboxRussell){

        fecharLightboxRussell();

      }

    }
  );

}

/* ESC FECHA */
document.addEventListener(
  "keydown",
  (e)=>{

    if(e.key === "Escape"){

      fecharLightboxRussell();

    }

  }
);


/* =============================================
	TEAMMATES 
============================================= */




const russellData = [

{

first:"ROBERT",

last:"KUBICA",

img:"russell/kubica.png",

years:"2019",

stats:{

quali:[21,0],

races:[11,10],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[0,1]

}

},

{

first:"NICHOLAS",

last:"LATIFI",

img:"russell/latifi.png",

years:"2020 — 2021",

stats:{

quali:[33,5],

races:[18,16],

podiums:[1,0],

wins:[0,0],

pole:[0,0],

points:[74,7]

}

},

{

first:"LEWIS",

last:"HAMILTON",

img:"russell/lewis.png",

years:"2022 — 2024",

stats:{

quali:[38,30],

races:[34,34],

podiums:[13,17],

wins:[3,2],

pole:[5,3],

points:[685,697]

}

},

{

first:"KIMI",

last:"ANTONELLI",

img:"russell/antonelli.png",

years:"2025",

stats:{

quali:[22,2],

races:[22,2],

podiums:[9,3],

wins:[2,0],

pole:[2,0],

points:[318,150]

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
"russellYears"
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
"russellQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"russellQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"russellRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"russellRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"russellPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"russellPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"russellWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"russellWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"russellPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"russellPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"russellPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"russellPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"russellBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"russellBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"russellBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"russellBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"russellBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"russellBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"russellBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"russellBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"russellBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"russellBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"russellBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"russellBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
russellData[
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
".russell-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.russell-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".russell-tab"
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
".russell-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

russellData
.length-1



render(
current
)

}



document
.querySelector(
".russell-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
russellData.length

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

const abrirNoticias = document.getElementById("abrirNoticiasrussell");
const fecharNoticias = document.getElementById("fecharNoticiasrussell");

const atualizarNoticias =
document.getElementById("atualizarNoticiasrussell");


const painelNoticias = document.getElementById("painelNoticiasrussell");
const overlayNoticias = document.getElementById("overlayNoticiasrussell");

const listaNoticias = document.getElementById("listaNoticiasrussell");




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
        <div class="loading-noticias-russell">

            <div class="spinner-russell"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{


const resposta = await fetch(
`https://gnews.io/api/v4/search?q=George Russell Team&lang=en&max=10&apikey=${API_KEY}`
);

			


        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-russell">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-russell">

                <img
                src="${noticia.image || 'pilotos/russel.png'}"
                alt="Notícia">

                <div class="card-conteudo-russell">

                    <div class="data-noticia-russell">

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

        <div class="loading-noticias-russell">

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
const historicorussell = {

    corridas: 152,
    vitorias: 5,
    podios: 24,
    poles: 7,
    pontos: 1033

};

// CONFIGURAÇÃO
const driverId = "russell";
const temporada = "2026";

// ELEMENTOS HTML
const contadorCorridas =
document.getElementById("corridas-russell");

const contadorVitorias =
document.getElementById("vitorias-russell");

const contadorPodios =
document.getElementById("podios-russell");

const contadorPoles =
document.getElementById("poles-russell");

const contadorPontos =
document.getElementById("pontos-russell");

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
        historicorussell.corridas +
        corridas2026,

        vitorias:
        historicorussell.vitorias +
        vitorias2026,

        podios:
        historicorussell.podios +
        podios2026,

        poles:
        historicorussell.poles +
        poles2026,

        pontos:
historicorussell.pontos +
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
    document.querySelector(".numeros-russell");

    if(!secao) return;

    const observer =
    new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-russell")
                .forEach(contador=>{

                    if(contador.classList.contains("contado"))
                    return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-russell"
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
    .querySelectorAll(".animar-russell")
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
   george Russell — ESTATÍSTICAS DA TEMPORADA 2026
   JOLPICA F1 API
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    const ANO = 2026;
    const PILOTO = "russell";

    const BASE = `https://api.jolpi.ca/ergast/f1/${ANO}`;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const positionEl =
        document.getElementById("george-season-position");

    const pointsEl =
        document.getElementById("george-season-points");

    const racesEl =
        document.getElementById("george-season-races");

    const winsEl =
        document.getElementById("george-season-wins");

    const podiumsEl =
        document.getElementById("george-season-podiums");

    const polesEl =
        document.getElementById("george-season-poles");

    const top5El =
        document.getElementById("george-season-top5");

    const fastestLapsEl =
        document.getElementById("george-season-fastest-laps");

    const dnfsEl =
        document.getElementById("george-season-dnfs");

    const bestResultEl =
        document.getElementById("george-season-best-result");

    const averageFinishEl =
        document.getElementById("george-season-average-finish");

    const averageQualiEl =
        document.getElementById("george-season-average-quali");

    const bestQualiEl =
        document.getElementById("george-season-best-quali");


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
            "🏎️ george Russell — TEMPORADA 2026"
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






/*==============================================
PILOTAGEM
==============================================*/



document.addEventListener("DOMContentLoaded", () => {


  /* =======================================================
     REVEAL DAS SEÇÕES
  ======================================================== */

  const elementosReveal =
    document.querySelectorAll(
      ".reveal-russell"
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
      ".skill-card-russell"
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
              ".skill-progresso-russell"
            );


          const numero =
            card.querySelector(
              ".skill-numero-russell"
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
      ".pilotagem-grafico-section-russell"
    );


  const radarArea =
    document.querySelector(
      ".radar-area-russell"
    );


  const pontosRadar =
    document.querySelectorAll(
      ".radar-ponto-russell"
    );


  const numerosSkills =
    document.querySelectorAll(
      ".skill-numero-russell"
    );


  /* =======================================================
     CALCULA E ATUALIZA O RADAR
  ======================================================== */

  function atualizarRadarrussell() {


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


            atualizarRadarrussell();


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
      ".resumo-card-russell"
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
              "resumo-ativo-russell"
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



