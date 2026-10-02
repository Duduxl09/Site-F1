document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglebottas = document.getElementById("menuTogglebottas");
const menubottas = document.getElementById("sideMenubottas");
const overlaybottas = document.getElementById("overlaybottas");
const closebottas = document.getElementById("closeMenubottas");

const linksMenubottas = document.querySelectorAll(".side-menu-bottas a");

function fecharMenubottas() {
  if (menubottas) menubottas.classList.remove("active");
  if (overlaybottas) overlaybottas.classList.remove("active");
}

if (togglebottas) {
  togglebottas.addEventListener("click", () => {
    menubottas?.classList.add("active");
    overlaybottas?.classList.add("active");
  });
}

if (closebottas) {
  closebottas.addEventListener("click", fecharMenubottas);
}

if (overlaybottas) {
  overlaybottas.addEventListener("click", fecharMenubottas);
}

linksMenubottas.forEach(link => {
  link.addEventListener("click", fecharMenubottas);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksbottas() {

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

const bottasBanner = document.querySelector(".bottas-banner-bg");

if(bottasBanner){

  bottasBanner.addEventListener("mousemove", (e)=>{

    const rect = bottasBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    bottasBanner.style.setProperty("--mouse-x", x + "px");
    bottasBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-bottas-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-bottas");

  const dotsContainer =
    document.querySelector(".dots-bottas");

  const bg =
    document.querySelector(".bg-slider-bottas");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-bottas");

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
    document.querySelectorAll(".dot-bottas");

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

const bottasTemporadas = {
     "2013": [
  { gp:"Australia", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Malaysia", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United Kingdom", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Germany", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Korea", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"India", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
], 
     
   "2014": [
  { gp:"Australia", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Malaysia", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"P7", pontos:"6", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P7", pontos:"6", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United Kingdom", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Germany", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Russia", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"P10", pontos:"1", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"30", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" }
],  
     
  "2015": [
  { gp:"Australia", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Malaysia", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United Kingdom", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P9", pontos:"2", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Russia", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
],
 "2016": [
  { gp:"Australia", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"P9", pontos:"2", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Russia", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Europe", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United Kingdom", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P9", pontos:"2", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Germany", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Malaysia", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
], 
 "2017": [
  { gp:"Australia", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"China", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Russia", pos:"P1", pontos:"25", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P1", pontos:"25", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Monaco", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Canada", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Azerbaijan", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Austria", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United Kingdom", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Singapore", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Malaysia", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Japan", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Mexico", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Brazil", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
],
 "2018": [
  { gp:"Australia", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"China", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Azerbaijan", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Canada", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"France", pos:"P7", pontos:"6", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United Kingdom", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Germany", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Singapore", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Russia", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Mexico", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
],
 "2019": [
  { gp:"Australia", pos:"P1", pontos:"26", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"China", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Azerbaijan", pos:"P1", pontos:"25", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Canada", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"France", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Austria", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United Kingdom", pos:"P2", pontos:"19", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Germany", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Russia", pos:"P1", pontos:"25", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Japan", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Mexico", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United States", pos:"P4", pontos:"13", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Brazil", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
],
 "2020": [
  { gp:"Austria", pos:"P1", pontos:"25", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Styria", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United Kingdom", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"70th Anniversary", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Tuscany", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Russia", pos:"P1", pontos:"26", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Eifel", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Portugal", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Emilia Romagna", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Turkey", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Bahrain", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Sakhir", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
],
 "2021": [
  { gp:"Bahrain", pos:"P3", pontos:"16", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Emilia Romagna", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Portugal", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Azerbaijan", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"France", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Styria", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Austria", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United Kingdom", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"P3", pontos:"7.5", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Netherlands", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Russia", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Turkey", pos:"P1", pontos:"25", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Mexico", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Brazil", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Qatar", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
],
 
 "2022": [
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Saudi Arabia", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Australia", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Emilia Romagna", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Miami", pos:"P7", pontos:"6", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Monaco", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Azerbaijan", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"United Kingdom", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Austria", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"France", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Hungary", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Belgium", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Netherlands", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Italy", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Singapore", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"United States", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Mexico", pos:"P10", pontos:"1", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Abu Dhabi", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" }
],
 
"2023": [
  { gp:"Bahrain", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Saudi Arabia", pos:"P18", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Australia", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Azerbaijan", pos:"P18", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Miami", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Monaco", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Spain", pos:"P19", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Canada", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Austria", pos:"P10", pontos:"1", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"United Kingdom", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Hungary", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Netherlands", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Italy", pos:"P10", pontos:"1", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Singapore", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Japan", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Qatar", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Mexico", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Brazil", pos:"P17", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Las Vegas", pos:"P17", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Abu Dhabi", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" }
],  
 "2024": [
  { gp:"Bahrain", pos:"P19", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Saudi Arabia", pos:"P17", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Japan", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"China", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Miami", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Emilia Romagna", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Monaco", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Canada", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Spain", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Austria", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"United Kingdom", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Hungary", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Belgium", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Netherlands", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Italy", pos:"P18", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Azerbaijan", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Singapore", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"United States", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Mexico", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Brazil", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Las Vegas", pos:"P17", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Qatar", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Abu Dhabi", pos:"P17", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" }
] 
     



};
const bottasCampeonato = {
     "2013": {
  posicao: "17º",
  pontos: 4
},
"2014": {
  posicao: "4º",
  pontos: 186
},
     
  "2015": {
  posicao: "5º",
  pontos: 136
},   
"2016": {
  posicao: "8º",
  pontos: 85
},
 "2017": {
  posicao: "3º",
  pontos: 305
},  
"2018": {
  posicao: "5º",
  pontos: 247
},  
 "2019": {
  posicao: "2º",
  pontos: 326
}, 
 "2020": {
  posicao: "2º",
  pontos: 223
}, 
 "2021": {
  posicao: "3º",
  pontos: 226
}, 
  "2022": {
  posicao: "10º",
  pontos: 49
},
 "2023": {
  posicao: "15º",
  pontos: 10
}, 
   
  "2024": {
  posicao: "22º",
  pontos: 0
}
   
     

};
     
     

const bottasContainer =
document.querySelector(".bottas-corridas-container");

const bottasSummary =
document.querySelector(".bottas-season-summary");

const bottasBtns =
document.querySelectorAll(".bottas-ano-btn");

/* ==========================
TEMPORADA 2026 VIA API
========================== */

async function carregarbottas2026(){

try{

const req =
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/drivers/bottas/results.json"
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
"bottas-sem-pontos";

if(
pos==="DNF"||
pos==="DSQ"
){
tipo="bottas-dnf";
}
else if(
Number(pos)===1
){
tipo="bottas-vitoria";
}
else if(
Number(pos)<=3
){
tipo="bottas-podio";
}
else if(
pontos>0
){
tipo="bottas-pontos";
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
"Cadillac",

logo:
"icons/cadillac.png"

});

});

bottasTemporadas["2026"] =
temporada;

let posicaoCampeonato = "-";

try{

const reqStandings =
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/driverStandings.json"
);

const dataStandings =
await reqStandings.json();

const bottas =
dataStandings
.MRData
.StandingsTable
.StandingsLists?.[0]
?.DriverStandings
?.find(
d=>
d.Driver.driverId==="bottas"
);

if(bottas){
posicaoCampeonato =
`${bottas.position}&ordm;`;
}

}catch(err){

console.log(
"Erro posição",
err
);

}

bottasCampeonato["2026"] = {

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
!bottasContainer
)return;

bottasContainer.innerHTML="";

const temporada =
bottasTemporadas[ano] || [];

let equipeAnterior =
null;

temporada.forEach(
(corrida,index)=>{

const card =
document.createElement("div");

card.className=
`bottas-corrida-card ${corrida.tipo}`;

const mudouEquipe =
equipeAnterior &&
equipeAnterior !== corrida.equipe;

if(mudouEquipe){

card.classList.add(
"bottas-team-change"
);

}

card.innerHTML=`

<span class="bottas-gp">
${corrida.gp} GP
</span>

<div class="bottas-team">

<img
src="${corrida.logo}"
class="bottas-team-logo">

</div>

<span class="bottas-resultado">
${corrida.pos}
</span>

<span class="bottas-pontos-texto">
${corrida.pontos} pts
</span>

`;

bottasContainer.appendChild(
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
bottasCampeonato[ano];

if(
bottasSummary
){

bottasSummary.innerHTML=`

<div
class="bottas-summary-card show">

<h3
class="bottas-summary-title">

Season ${ano}

</h3>

<div
class="bottas-summary-stats">

<div
class="bottas-summary-box">

<span
class="bottas-summary-label">

Position

</span>

<span
class="bottas-summary-value">

${resumo?.posicao || "—"}

</span>

</div>

<div
class="bottas-summary-box">

<span
class="bottas-summary-label">

Points

</span>

<span
class="bottas-summary-value">

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

async function iniciarbottas(){

await carregarbottas2026();

bottasBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

bottasBtns.forEach(
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

iniciarbottas();





     




/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-bottas");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-bottas");

const fraseEng = '"P1 bottas, amazing race!"';
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

const spans = document.querySelectorAll(".wave-bottas span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-bottas");
const lightbox = document.querySelector(".lightbox-bottas");
const imgLightbox = document.querySelector(".img-lightbox-bottas");
const fechar = document.querySelector(".fechar-bottas");

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


const valteriData=[

{

first:"PASTOR",

last:"MALDONADO",

img:"bottas/maldonado.png",

years:"2013",

stats:{

quali:[14,5],

races:[10,8],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[4,1]

}

},

{

first:"FELIPE",

last:"MASSA",

img:"bottas/massa.png",

years:"2014 — 2016",

stats:{

quali:[41,17],

races:[28,28],

podiums:[9,8],

wins:[0,0],

pole:[1,1],

points:[411,362]

}

},

{

first:"LEWIS",

last:"HAMILTON",

img:"bottas/hamilton.png",

years:"2017 — 2021",

stats:{

quali:[26,71],

races:[25,74],

podiums:[58,78],

wins:[10,50],

pole:[20,42],

points:[1038,1413]

}

},

{

first:"ZHOU",

last:"GUANYU",

img:"bottas/zhou.png",

years:"2022 — 2024",

stats:{

quali:[44,18],

races:[29,22],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[59,16]

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
"valteriYears"
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
"valteriQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"valteriQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"valteriRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"valteriRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"valteriPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"valteriPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"valteriWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"valteriWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"valteriPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"valteriPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"valteriPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"valteriPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"valteriBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"valteriBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"valteriBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"valteriBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"valteriBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"valteriBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"valteriBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"valteriBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"valteriBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"valteriBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"valteriBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"valteriBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
valteriData[
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
".valteri-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.valteri-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".valteri-tab"
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
".valteri-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

valteriData
.length-1



render(
current
)

}



document
.querySelector(
".valteri-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
valteriData.length

)

current=0



render(
current
)

}



render(0) 




// =========================================
// PAINEL DE NOTÍCIAS bottas
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiasbottas");
const fecharNoticias = document.getElementById("fecharNoticiasbottas");

const atualizarNoticias =
document.getElementById("atualizarNoticiasbottas");


const painelNoticias = document.getElementById("painelNoticiasbottas");
const overlayNoticias = document.getElementById("overlayNoticiasbottas");

const listaNoticias = document.getElementById("listaNoticiasbottas");




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
        <div class="loading-noticias-bottas">

            <div class="spinner-bottas"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{


const resposta = await fetch(
`https://gnews.io/api/v4/search?q="valtteri bottas"&lang=en&max=10&apikey=${API_KEY}`
);

			


        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-bottas">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-bottas">

                <img
                src="${noticia.image || 'pilotos/bottas.png'}"
                alt="Notícia">

                <div class="card-conteudo-bottas">

                    <div class="data-noticia-bottas">

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

        <div class="loading-noticias-bottas">

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
const historicobottas = {

    corridas: 247,
    vitorias: 10,
    podios: 67,
    poles: 20,
    pontos: 1797

};

// CONFIGURAÇÃO
const driverId = "bottas";
const temporada = "2026";

// ELEMENTOS HTML
const contadorCorridas =
document.getElementById("corridas-bottas");

const contadorVitorias =
document.getElementById("vitorias-bottas");

const contadorPodios =
document.getElementById("podios-bottas");

const contadorPoles =
document.getElementById("poles-bottas");

const contadorPontos =
document.getElementById("pontos-bottas");

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
        historicobottas.corridas +
        corridas2026,

        vitorias:
        historicobottas.vitorias +
        vitorias2026,

        podios:
        historicobottas.podios +
        podios2026,

        poles:
        historicobottas.poles +
        poles2026,

        pontos:
historicobottas.pontos +
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
    document.querySelector(".numeros-bottas");

    if(!secao) return;

    const observer =
    new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-bottas")
                .forEach(contador=>{

                    if(contador.classList.contains("contado"))
                    return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-bottas"
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
    .querySelectorAll(".animar-bottas")
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
   valtterivaltteri— ESTATÍSTICAS DA TEMPORADA 2026
   JOLPICA F1 API
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    const ANO = 2026;
    const PILOTO = "bottas";

    const BASE = `https://api.jolpi.ca/ergast/f1/${ANO}`;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const positionEl =
        document.getElementById("valtteri-season-position");

    const pointsEl =
        document.getElementById("valtteri-season-points");

    const racesEl =
        document.getElementById("valtteri-season-races");

    const winsEl =
        document.getElementById("valtteri-season-wins");

    const podiumsEl =
        document.getElementById("valtteri-season-podiums");

    const polesEl =
        document.getElementById("valtteri-season-poles");

    const top5El =
        document.getElementById("valtteri-season-top5");

    const fastestLapsEl =
        document.getElementById("valtteri-season-fastest-laps");

    const dnfsEl =
        document.getElementById("valtteri-season-dnfs");

    const bestResultEl =
        document.getElementById("valtteri-season-best-result");

    const averageFinishEl =
        document.getElementById("valtteri-season-average-finish");

    const averageQualiEl =
        document.getElementById("valtteri-season-average-quali");

    const bestQualiEl =
        document.getElementById("valtteri-season-best-quali");


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
            "🏎️ valtterivaltteri— TEMPORADA 2026"
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
      ".reveal-bottas"
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
      ".skill-card-bottas"
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
              ".skill-progresso-bottas"
            );


          const numero =
            card.querySelector(
              ".skill-numero-bottas"
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
      ".pilotagem-grafico-section-bottas"
    );


  const radarArea =
    document.querySelector(
      ".radar-area-bottas"
    );


  const pontosRadar =
    document.querySelectorAll(
      ".radar-ponto-bottas"
    );


  const numerosSkills =
    document.querySelectorAll(
      ".skill-numero-bottas"
    );


  /* =======================================================
     CALCULA E ATUALIZA O RADAR
  ======================================================== */

  function atualizarRadarbottas() {


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


            atualizarRadarbottas();


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
      ".resumo-card-bottas"
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
              "resumo-ativo-bottas"
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



