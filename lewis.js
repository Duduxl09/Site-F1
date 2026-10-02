document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglelewis = document.getElementById("menuTogglelewis");
const menulewis = document.getElementById("sideMenulewis");
const overlaylewis = document.getElementById("overlaylewis");
const closelewis = document.getElementById("closeMenulewis");

const linksMenulewis = document.querySelectorAll(".side-menu-lewis a");

function fecharMenulewis() {
  if (menulewis) menulewis.classList.remove("active");
  if (overlaylewis) overlaylewis.classList.remove("active");
}

if (togglelewis) {
  togglelewis.addEventListener("click", () => {
    menulewis?.classList.add("active");
    overlaylewis?.classList.add("active");
  });
}

if (closelewis) {
  closelewis.addEventListener("click", fecharMenulewis);
}

if (overlaylewis) {
  overlaylewis.addEventListener("click", fecharMenulewis);
}

linksMenulewis.forEach(link => {
  link.addEventListener("click", fecharMenulewis);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinkslewis() {

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

const lewisBanner = document.querySelector(".lewis-banner-bg");

if(lewisBanner){

  lewisBanner.addEventListener("mousemove", (e)=>{

    const rect = lewisBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    lewisBanner.style.setProperty("--mouse-x", x + "px");
    lewisBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-lewis-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-lewis");

  const dotsContainer =
    document.querySelector(".dots-lewis");

  const bg =
    document.querySelector(".bg-slider-lewis");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-lewis");

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
    document.querySelectorAll(".dot-lewis");

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

const lewisTemporadas = {
    "2007": [
  { gp:"Australia", pos:"P3", pontos:"6", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"P2", pontos:"8", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P2", pontos:"8", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P2", pontos:"8", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P2", pontos:"8", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"France", pos:"P3", pontos:"6", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P3", pontos:"6", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Europe", pos:"P9", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Turkey", pos:"P5", pontos:"4", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P2", pontos:"8", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P4", pontos:"5", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P7", pontos:"2", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2008": [
  { gp:"Australia", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"P5", pontos:"4", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P13", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P3", pontos:"6", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Turkey", pos:"P2", pontos:"8", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"France", pos:"P10", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P5", pontos:"4", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Europe", pos:"P2", pontos:"8", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P3", pontos:"6", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P7", pontos:"2", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P3", pontos:"6", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P12", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P5", pontos:"4", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2009": [
  { gp:"Australia", pos:"DSQ", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"P7", pontos:"1", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P6", pontos:"3", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P4", pontos:"5", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P9", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P12", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Turkey", pos:"P13", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P16", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"P18", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Europe", pos:"P2", pontos:"8", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P12", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P3", pontos:"6", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P3", pontos:"6", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2010": [
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Australia", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Turkey", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Europe", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Korea", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2011": [
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"hamilton-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"P7", pontos:"6", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P1", pontos:"25", tipo:"hamilton-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Turkey", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"hamilton-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Europe", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"P1", pontos:"25", tipo:"hamilton-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Korea", pos:"P2", pontos:"18", tipo:"hamilton-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"India", pos:"P7", pontos:"6", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"25", tipo:"hamilton-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2012": [
  { gp:"Australia", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Europe", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Korea", pos:"P10", pontos:"1", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"India", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2013": [
  { gp:"Australia", pos:"P5", pontos:"10", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Malaysia", pos:"P3", pontos:"15", tipo:"hamilton-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"China", pos:"P3", pontos:"15", tipo:"hamilton-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Bahrain", pos:"P5", pontos:"10", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P12", pontos:"0", tipo:"hamilton-sem-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P3", pontos:"15", tipo:"hamilton-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Germany", pos:"P5", pontos:"10", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P1", pontos:"25", tipo:"hamilton-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"hamilton-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P9", pontos:"2", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Korea", pos:"P5", pontos:"10", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"India", pos:"P6", pontos:"8", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"DNF", pontos:"0", tipo:"hamilton-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P9", pontos:"2", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],

"2014": [
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Malaysia", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Bahrain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"China", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Germany", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Russia", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P2", pontos:"36", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"50", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],

"2015": [
  { gp:"Australia", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Malaysia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"China", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Bahrain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Russia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],

"2016": [
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"China", pos:"P7", pontos:"6", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Russia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Europe", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Germany", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Malaysia", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],

"2017": [
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"China", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Russia", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P7", pontos:"6", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Malaysia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P9", pontos:"2", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],

"2018": [
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"China", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Azerbaijan", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"France", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Germany", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Russia", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],

"2019": [
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Bahrain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"China", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Azerbaijan", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"France", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Germany", pos:"P9", pontos:"2", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P3", pontos:"16", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Russia", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P3", pontos:"16", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P7", pontos:"6", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],


 "2020": [
  { gp:"Austria", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Styria", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"70th Anniversary", pos:"P2", pontos:"19", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P7", pontos:"7", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Tuscany", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Russia", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Eifel", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Portugal", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Emilia Romagna", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Turkey", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Bahrain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],    
     
 "2021": [
  { gp:"Bahrain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Emilia Romagna", pos:"P2", pontos:"19", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Portugal", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P7", pontos:"7", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Azerbaijan", pos:"P15", pontos:"0", tipo:"lewis-sem-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"France", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Styria", pos:"P2", pontos:"19", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P3", pontos:"7", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Netherlands", pos:"P2", pontos:"19", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P17", pontos:"0", tipo:"lewis-sem-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Russia", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Turkey", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P2", pontos:"19", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Qatar", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" }
], 
  
 "2022": [
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P10", pontos:"1", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Australia", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Emilia Romagna", pos:"P13", pontos:"0", tipo:"lewis-sem-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Miami", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Azerbaijan", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"France", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Netherlands", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" }
], 
  
 "2023": [
  { gp:"Bahrain", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Azerbaijan", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Miami", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Netherlands", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Qatar", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"DSQ", pontos:"0", tipo:"lewis-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Las Vegas", pos:"P7", pontos:"6", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P9", pontos:"2", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" }
], 
  
  "2024": [
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P9", pontos:"2", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"China", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Miami", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Emilia Romagna", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Netherlands", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Las Vegas", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Qatar", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],
  
"2025": [
  { gp:"Australia", pos:"P10", pontos:"1", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"China", pos:"DSQ", pontos:"0", tipo:"lewis-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Bahrain", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P7", pontos:"6", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Miami", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P7", pontos:"6", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P12", pontos:"0", tipo:"lewis-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Las Vegas", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Qatar", pos:"P12", pontos:"0", tipo:"lewis-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" }
]

};
const lewisCampeonato = {
     
    "2007": {
  posicao: "2º",
  pontos: 109
}, 
     
  "2008": {
  posicao: "1º",
  pontos: 98
},

"2009": {
  posicao: "5º",
  pontos: 49
},

"2010": {
  posicao: "4º",
  pontos: 240
},

"2011": {
  posicao: "5º",
  pontos: 227
},

"2012": {
  posicao: "4º",
  pontos: 190
},

"2013": {
  posicao: "4º",
  pontos: 189
},

"2014": {
  posicao: "1º",
  pontos: 384
},

"2015": {
  posicao: "1º",
  pontos: 381
},
"2016": {
  posicao: "2º",
  pontos: 380
},

"2017": {
  posicao: "1º",
  pontos: 363
},

"2018": {
  posicao: "1º",
  pontos: 408
},

"2019": {
  posicao: "1º",
  pontos: 413
},

"2020": {
  posicao: "1º",
  pontos: 347
},

"2021": {
  posicao: "2º",
  pontos: 387.5
},

"2022": {
  posicao: "6º",
  pontos: 240
},

"2023": {
  posicao: "3º",
  pontos: 234
},

"2024": {
  posicao: "7º",
  pontos: 223
},
     
   "2025": {
  posicao: "6º",
  pontos: 249
}  
     
     
};







const lewisContainer =
document.querySelector(".lewis-corridas-container");

const lewisSummary =
document.querySelector(".lewis-season-summary");

const lewisBtns =
document.querySelectorAll(".lewis-ano-btn");

/* ==========================
TEMPORADA 2026 VIA API
========================== */

async function carregarlewis2026(){

try{

const [gpReq, sprintReq] = await Promise.all([
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/hamilton/results.json"),
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/hamilton/sprint.json")
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

let tipo="lewis-sem-pontos";

if(pos==="DNF"||pos==="DSQ"){
tipo="lewis-dnf";
}
else if(Number(pos)===1){
tipo="lewis-vitoria";
}
else if(Number(pos)<=3){
tipo="lewis-podio";
}
else if(Number(race.points)>0){
tipo="lewis-pontos";
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

lewisTemporadas["2026"]=temporada;

let posicaoCampeonato="-";

try{

const req=
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/driverStandings.json"
);

const data=
await req.json();

const lewis=
data
.MRData
.StandingsTable
.StandingsLists?.[0]
?.DriverStandings
?.find(
d=>d.Driver.driverId==="hamilton"
);

if(lewis){

posicaoCampeonato=
`${lewis.position}&ordm;`;

}

}catch{}

lewisCampeonato["2026"]={

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
!lewisContainer
)return;

lewisContainer.innerHTML="";

const temporada =
lewisTemporadas[ano] || [];

let equipeAnterior =
null;

temporada.forEach(
(corrida,index)=>{

const card =
document.createElement("div");

card.className=
`lewis-corrida-card ${corrida.tipo}`;

const mudouEquipe =
equipeAnterior &&
equipeAnterior !== corrida.equipe;

if(mudouEquipe){

card.classList.add(
"lewis-team-change"
);

}

card.innerHTML=`

<span class="lewis-gp">
${corrida.gp} GP
</span>

<div class="lewis-team">

<img
src="${corrida.logo}"
class="lewis-team-logo">

</div>

<span class="lewis-resultado">
${corrida.pos}
</span>

<span class="lewis-pontos-texto">
${corrida.pontos} pts
</span>

`;

lewisContainer.appendChild(
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
lewisCampeonato[ano];

if(
lewisSummary
){

lewisSummary.innerHTML=`

<div
class="lewis-summary-card show">

<h3
class="lewis-summary-title">

Season ${ano}

</h3>

<div
class="lewis-summary-stats">

<div
class="lewis-summary-box">

<span
class="lewis-summary-label">

Position

</span>

<span
class="lewis-summary-value">

${resumo?.posicao || "—"}

</span>

</div>

<div
class="lewis-summary-box">

<span
class="lewis-summary-label">

Points

</span>

<span
class="lewis-summary-value">

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

async function iniciarlewis(){

await carregarlewis2026();

lewisBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

lewisBtns.forEach(
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




iniciarlewis();



/*//////////////////////////////////////////
        TITULOS
/*//////////////////////////////////////////

const hamiltonTitles = {

  2008: {
    piloto: "Lewis",
    sobrenome: "Hamilton",
    ano: "2008",
    subtitulo: "CAMPEÃO MUNDIAL DE FÓRMULA 1",
    descricao: "Em sua segunda temporada na F1, Hamilton conquista o título mundial pela McLaren em uma das finais mais dramáticas da história em Interlagos.",
    imagem: "lewis/ham2008.png",
    quote: "This is for everyone back at the team.",
    stats: {
      vitorias: 5,
      podios: 10,
      pontos: 98,
      poles: 7,
      corridas: 18
    },
    timeline: [
      { tipo: "positive", titulo: "INÍCIO FORTE", texto: "Hamilton começa a temporada brigando pela liderança do campeonato.", resultado: "AUSTRÁLIA • P3" },
      { tipo: "positive", titulo: "CONSISTÊNCIA", texto: "Regularidade mantém Hamilton na disputa direta pelo título.", resultado: "MEIO DA TEMPORADA" },
      { tipo: "warning", titulo: "ERROS SOB PRESSÃO", texto: "Algumas corridas complicadas deixam a disputa mais apertada.", resultado: "EUROPA • P5" },
      { tipo: "positive", titulo: "REAÇÃO FINAL", texto: "Hamilton recupera pontos importantes na reta final.", resultado: "CHINA • P1" },
      { tipo: "climax", titulo: "TÍTULO EM INTERLAGOS", texto: "Na última curva da última volta, Hamilton conquista o título mundial.", resultado: "CAMPEÃO MUNDIAL 2008" }
    ]
  },

  2014: {
    piloto: "Lewis",
    sobrenome: "Hamilton",
    ano: "2014",
    subtitulo: "BICAMPEÃO MUNDIAL DE FÓRMULA 1",
    descricao: "Com o início da era híbrida, Hamilton domina a temporada com a Mercedes e conquista seu segundo título.",
    imagem: "lewis/ham2014.png",
    quote: "We did it together.",
    stats: {
      vitorias: 11,
      podios: 16,
      pontos: 384,
      poles: 7,
      corridas: 19
    },
    timeline: [
      { tipo: "positive", titulo: "DOMÍNIO INICIAL", texto: "Hamilton vence várias corridas no começo da temporada.", resultado: "BAHRAIN • P1" },
      { tipo: "positive", titulo: "BRIGA COM ROSBERG", texto: "Disputa interna intensa pelo campeonato.", resultado: "MEIO DA TEMPORADA" },
      { tipo: "warning", titulo: "QUEBRA DE MOTOR", texto: "Abandono importante complica a disputa.", resultado: "MALÁSIA • DNF" },
      { tipo: "positive", titulo: "RECUPERAÇÃO", texto: "Sequência de vitórias recoloca Hamilton na liderança.", resultado: "USA • P1" },
      { tipo: "climax", titulo: "TÍTULO EM ABU DHABI", texto: "Vitória decisiva garante o segundo título mundial.", resultado: "CAMPEÃO MUNDIAL 2014" }
    ]
  },

  2015: {
    piloto: "Lewis",
    sobrenome: "Hamilton",
    ano: "2015",
    subtitulo: "TRICAMPEÃO MUNDIAL DE FÓRMULA 1",
    descricao: "Domínio absoluto da Mercedes com Hamilton consolidando sua posição como o melhor da era híbrida.",
    imagem: "lewis/ham2015.png",
    quote: "I'm just getting started.",
    stats: {
      vitorias: 10,
      podios: 17,
      pontos: 381,
      poles: 11,
      corridas: 19
    },
    timeline: [
      { tipo: "positive", titulo: "FORÇA INICIAL", texto: "Hamilton vence cedo e assume liderança do campeonato.", resultado: "AUSTRÁLIA • P1" },
      { tipo: "positive", titulo: "DOMÍNIO", texto: "Mercedes domina praticamente todas as corridas.", resultado: "MEIO DA TEMPORADA" },
      { tipo: "warning", titulo: "ERROS ISOLADOS", texto: "Pequenos erros não tiram a liderança.", resultado: "HUNGRIA • P6" },
      { tipo: "positive", titulo: "CONTROLE TOTAL", texto: "Hamilton administra vantagem confortável.", resultado: "USA • P2" },
      { tipo: "climax", titulo: "TRICAMPEÃO", texto: "Confirma o terceiro título com folga.", resultado: "CAMPEÃO MUNDIAL 2015" }
    ]
  },

  2017: {
    piloto: "Lewis",
    sobrenome: "Hamilton",
    ano: "2017",
    subtitulo: "TETRACAMPEÃO MUNDIAL DE FÓRMULA 1",
    descricao: "Disputa intensa com Ferrari e Vettel, mas Hamilton leva a melhor no final.",
    imagem: "lewis/ham2017.png",
    quote: "Never give up.",
    stats: {
      vitorias: 9,
      podios: 13,
      pontos: 363,
      poles: 11,
      corridas: 20
    },
    timeline: [
      { tipo: "positive", titulo: "COMEÇO FORTE", texto: "Vitórias iniciais colocam Hamilton na liderança.", resultado: "CHINA • P1" },
      { tipo: "warning", titulo: "PRESSÃO FERRARI", texto: "Vettel pressiona durante toda a temporada.", resultado: "EUROPA • BATALHA" },
      { tipo: "danger", titulo: "COLISÕES", texto: "Acidentes aumentam a tensão no campeonato.", resultado: "AZERBAIJÃO • P5" },
      { tipo: "positive", titulo: "REAÇÃO", texto: "Hamilton retoma controle do campeonato.", resultado: "USA • P1" },
      { tipo: "climax", titulo: "TÍTULO", texto: "Consistência garante o tetracampeonato.", resultado: "CAMPEÃO MUNDIAL 2017" }
    ]
  },

  2018: {
    piloto: "Lewis",
    sobrenome: "Hamilton",
    ano: "2018",
    subtitulo: "PENTACAMPEÃO MUNDIAL DE FÓRMULA 1",
    descricao: "Batalha intensa com Ferrari e Vettel até o fim da temporada.",
    imagem: "lewis/ham2018.png",
    quote: "Still we rise.",
    stats: {
      vitorias: 11,
      podios: 17,
      pontos: 408,
      poles: 11,
      corridas: 21
    },
    timeline: [
      { tipo: "positive", titulo: "DOMÍNIO", texto: "Hamilton começa forte com vitórias seguidas.", resultado: "ESPANHA • P1" },
      { tipo: "warning", titulo: "FERRARI FORTE", texto: "Ferrari mantém campeonato apertado.", resultado: "MEIO DA TEMPORADA" },
      { tipo: "danger", titulo: "ERROS VETTEL", texto: "Pressão gera erros decisivos do rival.", resultado: "JAPÃO • P6" },
      { tipo: "positive", titulo: "DECISÃO", texto: "Hamilton assume liderança definitiva.", resultado: "USA • P1" },
      { tipo: "climax", titulo: "TÍTULO", texto: "Confirma o quinto título mundial.", resultado: "CAMPEÃO MUNDIAL 2018" }
    ]
  },

  2019: {
    piloto: "Lewis",
    sobrenome: "Hamilton",
    ano: "2019",
    subtitulo: "HEXACAMPEÃO MUNDIAL DE FÓRMULA 1",
    descricao: "Temporada dominante da Mercedes com Hamilton quase imbatível.",
    imagem: "lewis/ham2019.png",
    quote: "Hard work pays off.",
    stats: {
      vitorias: 11,
      podios: 17,
      pontos: 413,
      poles: 5,
      corridas: 21
    },
    timeline: [
      { tipo: "positive", titulo: "DOMÍNIO", texto: "Vitórias consecutivas no início da temporada.", resultado: "BAHRAIN • P1" },
      { tipo: "positive", titulo: "CONSISTÊNCIA", texto: "Quase sempre no pódio.", resultado: "MEIO DA TEMPORADA" },
      { tipo: "warning", titulo: "LEVE QUEDA", texto: "Algumas corridas abaixo do esperado.", resultado: "ALEMANHA • P9" },
      { tipo: "positive", titulo: "RETOMADA", texto: "Volta ao topo com vitórias importantes.", resultado: "USA • P2" },
      { tipo: "climax", titulo: "HEXACAMPEÃO", texto: "Mais um título dominante.", resultado: "CAMPEÃO MUNDIAL 2019" }
    ]
  },

  2020: {
    piloto: "Lewis",
    sobrenome: "Hamilton",
    ano: "2020",
    subtitulo: "HEPTACAMPEÃO MUNDIAL DE FÓRMULA 1",
    descricao: "Hamilton iguala Michael Schumacher com 7 títulos mundiais.",
    imagem: "lewis/ham2020.png",
    quote: "I’m just getting started.",
    stats: {
      vitorias: 11,
      podios: 14,
      pontos: 347,
      poles: 10,
      corridas: 17
    },
    timeline: [
      { tipo: "positive", titulo: "DOMÍNIO", texto: "Começa temporada vencendo com facilidade.", resultado: "STYRIA • P1" },
      { tipo: "positive", titulo: "CONSISTÊNCIA", texto: "Controle total do campeonato.", resultado: "MEIO DA TEMPORADA" },
      { tipo: "warning", titulo: "COVID SEASON", texto: "Calendário reduzido e imprevisível.", resultado: "2020" },
      { tipo: "positive", titulo: "RECORDES", texto: "Quebra recordes históricos.", resultado: "PORTUGAL • P1" },
      { tipo: "climax", titulo: "HEPTACAMPEÃO", texto: "Iguala Schumacher com 7 títulos mundiais.", resultado: "CAMPEÃO MUNDIAL 2020" }
    ]
  }

};

const hamiltonTitleContainer =
document.querySelector(".lewis-title-content");

function carregarTituloHamilton(ano){

  const data = hamiltonTitles[ano];
  if (!data) return;

  hamiltonTitleContainer.innerHTML = `
    <section class="lewis-season-card">

      <div class="lewis-title-buttons">
        ${Object.keys(hamiltonTitles).map(y => `
          <button class="lewis-title-btn ${y == ano ? "active" : ""}"
          data-title="${y}">
            ${y}
          </button>
        `).join("")}
      </div>

      <div class="lewis-hero">

        <div class="lewis-hero-left">
          <img src="${data.imagem}" class="lewis-hero-art">
        </div>

        <div class="lewis-hero-right">

          <span class="lewis-year">${data.ano}</span>

          <h1 class="lewis-name">
            ${data.piloto}
            <span>${data.sobrenome}</span>
          </h1>

          <h2 class="lewis-subtitle">${data.subtitulo}</h2>

          <div class="lewis-description">${data.descricao}</div>

          <div class="lewis-stats">
            <div class="lewis-stat-box"><h3>${data.stats.vitorias}</h3><p>Vitórias</p></div>
            <div class="lewis-stat-box"><h3>${data.stats.podios}</h3><p>Pódios</p></div>
            <div class="lewis-stat-box"><h3>${data.stats.pontos}</h3><p>Pontos</p></div>
            <div class="lewis-stat-box"><h3>${data.stats.poles}</h3><p>Poles</p></div>
            <div class="lewis-stat-box"><h3>${data.stats.corridas}</h3><p>Corridas</p></div>
          </div>

        </div>

      </div>

      <div class="lewis-timeline-section">

        <h2 class="lewis-section-title">
          TEMPORADA ${data.ano}
        </h2>

        <div class="lewis-timeline-grid">

          ${data.timeline.map(e => `
            <div class="lewis-race-card ${e.tipo}">
              <h3>${e.titulo}</h3>
              <p>${e.texto}</p>
              <div class="lewis-race-result">${e.resultado}</div>
            </div>
          `).join("")}

        </div>

      </div>

    </section>
  `;

  // botão click (sem duplicar listener)
  document.querySelectorAll(".lewis-title-btn").forEach(btn => {
    btn.onclick = () => carregarTituloHamilton(btn.dataset.title);
  });

}

if (hamiltonTitleContainer){
  carregarTituloHamilton(2008);
}


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-lewis");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-lewis");

const fraseEng = '"P1 lewis, amazing race!"';
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

const spans = document.querySelectorAll(".wave-lewis span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-lewis");
const lightbox = document.querySelector(".lightbox-lewis");
const imgLightbox = document.querySelector(".img-lightbox-lewis");
const fechar = document.querySelector(".fechar-lewis");

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



/*///////////////////
 TEAM MATES
/////////////////////*/



const hamiltonData=[

{

first:"FERNANDO",

last:"ALONSO",

img:"lewis/alonso.png",

years:"2007",

stats:{

quali:[10,7],

races:[7,10],

podiums:[12,12],

wins:[4,4],

pole:[6,2],

points:[109,109]

}

},



{

first:"HEIKKI",

last:"KOVALAINEN",

img:"lewis/kovaleinen.png",

years:"2008 — 2009",

stats:{

quali:[26,9],

races:[23,11],

podiums:[18,7],

wins:[10,1],

pole:[8,1],

points:[147,105]

}

},



{

first:"JENSON",

last:"BUTTON",

img:"lewis/button.png",

years:"2010 — 2012",

stats:{

quali:[42,15],

races:[32,26],

podiums:[30,25],

wins:[10,8],

pole:[18,1],

points:[672,657]

}

},



{

first:"NICO",

last:"ROSBERG",

img:"lewis/rosberg.png",

years:"2013 — 2016",

stats:{

quali:[42,34],

races:[44,33],

podiums:[55,50],

wins:[32,22],

pole:[35,29],

points:[1334,1195]

}

},



{

first:"VALTTERI",

last:"BOTTAS",

img:"lewis/bottas.png",

years:"2017 — 2021",

stats:{

quali:[71,26],

races:[74,25],

podiums:[78,58],

wins:[50,10],

pole:[42,20],

points:[1413,1038]

}

},



{

first:"GEORGE",

last:"RUSSELL",

img:"lewis/russell.png",

years:"2022 — 2024",

stats:{

quali:[30,38],

races:[34,34],

podiums:[17,13],

wins:[2,3],

pole:[3,5],

points:[697,685]

}

},



{

first:"CHARLES",

last:"LECLERC",

img:"lewis/leclerc.png",

years:"2025",

stats:{

quali:[5,19],

races:[4,20],

podiums:[0,7],

wins:[0,0],

pole:[0,1],

points:[156,242]

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
"hamiltonYears"
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
"hamiltonQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"hamiltonQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"hamiltonRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"hamiltonRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"hamiltonPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"hamiltonPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"hamiltonWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"hamiltonWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"hamiltonPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"hamiltonPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"hamiltonPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"hamiltonPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"hamiltonBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"hamiltonBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"hamiltonBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"hamiltonBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"hamiltonBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"hamiltonBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"hamiltonBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"hamiltonBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"hamiltonBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"hamiltonBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"hamiltonBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"hamiltonBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
hamiltonData[
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
".hamilton-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.hamilton-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".hamilton-tab"
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
".hamilton-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

hamiltonData
.length-1



render(
current
)

}



document
.querySelector(
".hamilton-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
hamiltonData.length

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

const abrirNoticias = document.getElementById("abrirNoticiaslewis");
const fecharNoticias = document.getElementById("fecharNoticiaslewis");

const atualizarNoticias =
document.getElementById("atualizarNoticiaslewis");


const painelNoticias = document.getElementById("painelNoticiaslewis");
const overlayNoticias = document.getElementById("overlayNoticiaslewis");

const listaNoticias = document.getElementById("listaNoticiaslewis");




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
        <div class="loading-noticias-lewis">

            <div class="spinner-lewis"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{


const resposta = await fetch(
`https://gnews.io/api/v4/search?q="Lewis Hamilton"&lang=en&max=10&apikey=${API_KEY}`
);

			


        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-lewis">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-lewis">

                <img
                src="${noticia.image || 'pilotos/lewis.png'}"
                alt="Notícia">

                <div class="card-conteudo-lewis">

                    <div class="data-noticia-lewis">

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

        <div class="loading-noticias-lewis">

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
const historicolewis = {

    corridas: 384,
    vitorias: 105,
    podios: 203,
    poles: 104,
    pontos: 5069

};

// CONFIGURAÇÃO
const driverId = "hamilton";
const temporada = "2026";

// ELEMENTOS HTML
const contadorCorridas =
document.getElementById("corridas-lewis");

const contadorVitorias =
document.getElementById("vitorias-lewis");

const contadorPodios =
document.getElementById("podios-lewis");

const contadorPoles =
document.getElementById("poles-lewis");

const contadorPontos =
document.getElementById("pontos-lewis");

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
        historicolewis.corridas +
        corridas2026,

        vitorias:
        historicolewis.vitorias +
        vitorias2026,

        podios:
        historicolewis.podios +
        podios2026,

        poles:
        historicolewis.poles +
        poles2026,

        pontos:
historicolewis.pontos +
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
    document.querySelector(".numeros-lewis");

    if(!secao) return;

    const observer =
    new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-lewis")
                .forEach(contador=>{

                    if(contador.classList.contains("contado"))
                    return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-lewis"
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
    .querySelectorAll(".animar-lewis")
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
   lewislewis— ESTATÍSTICAS DA TEMPORADA 2026
   JOLPICA F1 API
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    const ANO = 2026;
    const PILOTO = "hamilton";

    const BASE = `https://api.jolpi.ca/ergast/f1/${ANO}`;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const positionEl =
        document.getElementById("lewis-season-position");

    const pointsEl =
        document.getElementById("lewis-season-points");

    const racesEl =
        document.getElementById("lewis-season-races");

    const winsEl =
        document.getElementById("lewis-season-wins");

    const podiumsEl =
        document.getElementById("lewis-season-podiums");

    const polesEl =
        document.getElementById("lewis-season-poles");

    const top5El =
        document.getElementById("lewis-season-top5");

    const fastestLapsEl =
        document.getElementById("lewis-season-fastest-laps");

    const dnfsEl =
        document.getElementById("lewis-season-dnfs");

    const bestResultEl =
        document.getElementById("lewis-season-best-result");

    const averageFinishEl =
        document.getElementById("lewis-season-average-finish");

    const averageQualiEl =
        document.getElementById("lewis-season-average-quali");

    const bestQualiEl =
        document.getElementById("lewis-season-best-quali");


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
            "🏎️ lewislewis— TEMPORADA 2026"
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
      ".reveal-lewis"
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
      ".skill-card-lewis"
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
              ".skill-progresso-lewis"
            );


          const numero =
            card.querySelector(
              ".skill-numero-lewis"
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
      ".pilotagem-grafico-section-lewis"
    );


  const radarArea =
    document.querySelector(
      ".radar-area-lewis"
    );


  const pontosRadar =
    document.querySelectorAll(
      ".radar-ponto-lewis"
    );


  const numerosSkills =
    document.querySelectorAll(
      ".skill-numero-lewis"
    );


  /* =======================================================
     CALCULA E ATUALIZA O RADAR
  ======================================================== */

  function atualizarRadarlewis() {


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


            atualizarRadarlewis();


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
      ".resumo-card-lewis"
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
              "resumo-ativo-lewis"
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



