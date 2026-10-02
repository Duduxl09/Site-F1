document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglecarlos = document.getElementById("menuTogglecarlos");
const menucarlos = document.getElementById("sideMenucarlos");
const overlaycarlos = document.getElementById("overlaycarlos");
const closecarlos = document.getElementById("closeMenucarlos");

const linksMenucarlos = document.querySelectorAll(".side-menu-carlos a");

function fecharMenucarlos() {
  if (menucarlos) menucarlos.classList.remove("active");
  if (overlaycarlos) overlaycarlos.classList.remove("active");
}

if (togglecarlos) {
  togglecarlos.addEventListener("click", () => {
    menucarlos?.classList.add("active");
    overlaycarlos?.classList.add("active");
  });
}

if (closecarlos) {
  closecarlos.addEventListener("click", fecharMenucarlos);
}

if (overlaycarlos) {
  overlaycarlos.addEventListener("click", fecharMenucarlos);
}

linksMenucarlos.forEach(link => {
  link.addEventListener("click", fecharMenucarlos);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinkssainz() {

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

const sainzBanner = document.querySelector(".sainz-banner-bg");

if(sainzBanner){

  sainzBanner.addEventListener("mousemove", (e)=>{

    const rect = sainzBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    sainzBanner.style.setProperty("--mouse-x", x + "px");
    sainzBanner.style.setProperty("--mouse-y", y + "px");

  });

}

/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-sainz-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-sainz");

  const dotsContainer =
    document.querySelector(".dots-sainz");

  const bg =
    document.querySelector(".bg-slider-sainz");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-sainz");

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
    document.querySelectorAll(".dot-sainz");

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

const carlosTemporadas = {
     
   "2015": [
  { gp:"Australia", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Malaysia", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"China", pos:"P13", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Monaco", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Canada", pos:"P12", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Great Britain", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Hungary", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Italy", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Japan", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Russia", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Mexico", pos:"P13", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Brazil", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Abu Dhabi", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" }
],  
     
   "2016": [
  { gp:"Australia", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Bahrain", pos:"P18", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"China", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Russia", pos:"P12", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Canada", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Europe", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Austria", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Germany", pos:"P14", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Italy", pos:"P15", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Singapore", pos:"P14", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Malaysia", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Japan", pos:"P17", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Mexico", pos:"P16", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Brazil", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Abu Dhabi", pos:"P18", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" }
],  
     
  "2017": [
  { gp:"Australia", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"China", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Bahrain", pos:"P16", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Russia", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Spain", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Azerbaijan", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Great Britain", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Italy", pos:"P14", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Singapore", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Malaysia", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Japan", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },

  { gp:"United States", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Mexico", pos:"P16", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Brazil", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Abu Dhabi", pos:"P19", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" }
],

"2018": [
  { gp:"Australia", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Bahrain", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"China", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Spain", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Monaco", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"France", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Austria", pos:"P12", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Great Britain", pos:"P17", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Germany", pos:"P12", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Hungary", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Belgium", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Russia", pos:"P17", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Japan", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Mexico", pos:"P19", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Brazil", pos:"P12", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" }
],

"2019": [
  { gp:"Australia", pos:"P20", pontos:"0", tipo:"sainz-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P19", pontos:"0", tipo:"sainz-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P14", pontos:"0", tipo:"sainz-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Azerbaijan", pos:"P7", pontos:"6", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P8", pontos:"4", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P11", pontos:"0", tipo:"sainz-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"France", pos:"P6", pontos:"8", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"P8", pontos:"4", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P6", pontos:"8", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"P5", pontos:"10", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P19", pontos:"0", tipo:"sainz-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P20", pontos:"0", tipo:"sainz-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P12", pontos:"0", tipo:"sainz-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Russia", pos:"P6", pontos:"8", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"P13", pontos:"0", tipo:"sainz-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P3", pontos:"15", tipo:"sainz-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P10", pontos:"1", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2020": [
  { gp:"Austria", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Styria", pos:"P9", pontos:"3", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P13", pontos:"0", tipo:"carlos-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"70th Anniversary", pos:"P13", pontos:"0", tipo:"carlos-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"carlos-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Tuscany", pos:"P18", pontos:"0", tipo:"carlos-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Russia", pos:"P19", pontos:"0", tipo:"carlos-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Eifel", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Portugal", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Emilia Romagna", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Turkey", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Sakhir", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2021": [
  { gp:"Bahrain", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Portugal", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P2", pontos:"18", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"France", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Styria", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P10", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Russia", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Turkey", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Qatar", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" }
],
  
 "2022": [
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Miami", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P2", pontos:"18", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P2", pontos:"19", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"carlos-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"France", pos:"P5", pontos:"11", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" }
],    
   
   "2023": [
  { gp:"Bahrain", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Australia", pos:"P12", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Miami", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P1", pontos:"25", tipo:"carlos-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Qatar", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Las Vegas", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" }
],
   
   
 "2024": [
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Australia", pos:"P1", pontos:"25", tipo:"carlos-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"China", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Miami", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P16", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P18", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P2", pontos:"18", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P1", pontos:"25", tipo:"carlos-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P16", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Las Vegas", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Qatar", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" }
],

"2025": [
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P14", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Saudi Arabia", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Miami", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Emilia-Romagna", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P14", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"DNS", pontos:"0", tipo:"carlos-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Great Britain", pos:"P12", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P18", pontos:"3", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P14", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Netherlands", pos:"P13", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"P13", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Las Vegas", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Qatar", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P13", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
]
   
     
};
const carlosCampeonato = {
     
  "2015": {
  posicao: "18º",
  pontos: 18
},   
   "2016": {
  posicao: "12º",
  pontos: 46
},  
     
"2017": {
  posicao: "9º",
  pontos: 54
},

"2018": {
  posicao: "10º",
  pontos: 53
},

"2019": {
  posicao: "6º",
  pontos: 96
},

"2020": {
  posicao: "6º",
  pontos: 105
},

"2021": {
  posicao: "5º",
  pontos: 164.5
},

"2022": {
  posicao: "5º",
  pontos: 246
},

   "2023": {
     posicao: "7°",
     pontos: 2020
},

"2024": {
  posicao: "5º",
  pontos: 290
},
   
 "2025": {
  posicao: "9º",
  pontos: 64
}    
     
};




const carlosContainer =
document.querySelector(".carlos-corridas-container");

const carlosSummary =
document.querySelector(".carlos-season-summary");

const carlosBtns =
document.querySelectorAll(".carlos-ano-btn");

/* ==========================
TEMPORADA 2026 VIA API
========================== */

async function carregarcarlos2026(){

try{

const [gpReq, sprintReq] = await Promise.all([
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/sainz/results.json"),
fetch("https://api.jolpi.ca/ergast/f1/2026/drivers/sainz/sprint.json")
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
let tipo="carlos-sem-pontos";

if(pos==="DNF" || pos==="DNS" ||pos==="DSQ"){
tipo="carlos-dnf";
}
else if(Number(pos)===1){
tipo="carlos-vitoria";
}
else if(Number(pos)<=3){
tipo="carlos-podio";
}
else if(Number(race.points)>0){
tipo="carlos-pontos";
}

// Sprint
const sprintRace =
sprints.find(s=>s.round===round);

if(sprintRace){

const sprintResult =
sprintRace.SprintResults?.[0];

if(sprintResult){

let tipoSprint="carlos-sem-pontos";

if(Number(sprintResult.position)===1){
tipoSprint="carlos-vitoria";
}
else if(Number(sprintResult.position)<=3){
tipoSprint="carlos-podio";
}
else if(Number(sprintResult.points)>0){
tipoSprint="carlos-pontos";
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

carlosTemporadas["2026"]=temporada;

let posicaoCampeonato="-";

try{

const req=
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/driverStandings.json"
);

const data=
await req.json();

const carlos=
data
.MRData
.StandingsTable
.StandingsLists?.[0]
?.DriverStandings
?.find(
d=>d.Driver.driverId==="sainz"
);

if(carlos){
posicaoCampeonato=`${carlos.position}&ordm;`;
}

}catch{}

carlosCampeonato["2026"]={

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
!carlosContainer
)return;

carlosContainer.innerHTML="";

const temporada =
carlosTemporadas[ano] || [];

let equipeAnterior =
null;

temporada.forEach(
(corrida,index)=>{

const card =
document.createElement("div");

card.className=
`carlos-corrida-card ${corrida.tipo}`;

const mudouEquipe =
equipeAnterior &&
equipeAnterior !== corrida.equipe;

if(mudouEquipe){

card.classList.add(
"carlos-team-change"
);

}

card.innerHTML=`

<span class="carlos-gp">
${corrida.gp} GP
</span>

<div class="carlos-team">

<img
src="${corrida.logo}"
class="carlos-team-logo">

</div>

<span class="carlos-resultado">
${corrida.pos}
</span>

<span class="carlos-pontos-texto">
${corrida.pontos} pts
</span>

`;

carlosContainer.appendChild(
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
carlosCampeonato[ano];

if(
carlosSummary
){

carlosSummary.innerHTML=`

<div
class="carlos-summary-card show">

<h3
class="carlos-summary-title">

Season ${ano}

</h3>

<div
class="carlos-summary-stats">

<div
class="carlos-summary-box">

<span
class="carlos-summary-label">

Position

</span>

<span
class="carlos-summary-value">

${resumo?.posicao || "—"}

</span>

</div>

<div
class="carlos-summary-box">

<span
class="carlos-summary-label">

Points

</span>

<span
class="carlos-summary-value">

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

async function iniciarcarlos(){

await carregarcarlos2026();

carlosBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

carlosBtns.forEach(
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

iniciarcarlos();


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-sainz");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-sainz");

const fraseEng = '"P1 sainz, amazing race!"';
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

const spans = document.querySelectorAll(".wave-sainz span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-sainz");
const lightbox = document.querySelector(".lightbox-sainz");
const imgLightbox = document.querySelector(".img-lightbox-sainz");
const fechar = document.querySelector(".fechar-sainz");

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



const sainzData=[

{

first:"MAX",

last:"VERSTAPPEN",

img:"carlos/max.png",

years:"2015 — 2016",

stats:{

quali:[11,12],

races:[9,12],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[64,62]

}

},

{

first:"NICO",

last:"HULKENBERG",

img:"carlos/hulkenberg.png",

years:"2017 — 2018",

stats:{

quali:[11,13],

races:[10,13],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[69,69]

}

},

{

first:"LANDO",

last:"NORRIS",

img:"carlos/norris.png",

years:"2019 — 2020",

stats:{

quali:[18,20],

races:[21,17],

podiums:[2,1],

wins:[0,0],

pole:[0,0],

points:[201,146]

}

},

{

first:"CHARLES",

last:"LECLERC",

img:"carlos/leclerc.png",

years:"2021 — 2024",

stats:{

quali:[30,58],

races:[41,43],

podiums:[25,43],

wins:[4,8],

pole:[5,20],

points:[847,932]

}

},

{

first:"ALEX",

last:"ALBON",

img:"carlos/albon.png",

years:"2025",

stats:{

quali:[11,13],

races:[8,12],

podiums:[2,0],

wins:[0,0],

pole:[0,0],

points:[109,91]

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
"sainzYears"
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
"sainzQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"sainzQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"sainzRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"sainzRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"sainzPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"sainzPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"sainzWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"sainzWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"sainzPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"sainzPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"sainzPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"sainzPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"sainzBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"sainzBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"sainzBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"sainzBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"sainzBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"sainzBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"sainzBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"sainzBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"sainzBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"sainzBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"sainzBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"sainzBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
sainzData[
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
".sainz-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.sainz-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".sainz-tab"
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
".sainz-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

sainzData
.length-1



render(
current
)

}



document
.querySelector(
".sainz-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
sainzData.length

)

current=0



render(
current
)

}



render(0) 



// =========================================
// PAINEL DE NOTÍCIAS carlos
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiascarlos");
const fecharNoticias = document.getElementById("fecharNoticiascarlos");

const atualizarNoticias =
document.getElementById("atualizarNoticiascarlos");


const painelNoticias = document.getElementById("painelNoticiascarlos");
const overlayNoticias = document.getElementById("overlayNoticiascarlos");

const listaNoticias = document.getElementById("listaNoticiascarlos");




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
        <div class="loading-noticias-carlos">

            <div class="spinner-carlos"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{


const resposta = await fetch(
`https://gnews.io/api/v4/search?q="Carlos Sainz"&lang=en&max=10&apikey=${API_KEY}`
);

			


        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-carlos">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-carlos">

                <img
                src="${noticia.image || 'pilotos/carlos.png'}"
                alt="Notícia">

                <div class="card-conteudo-carlos">

                    <div class="data-noticia-carlos">

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

        <div class="loading-noticias-carlos">

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
const historicocarlos = {

    corridas: 236,
    vitorias: 4,
    podios: 29,
    poles: 6,
    pontos: 1340

};

// CONFIGURAÇÃO
const driverId = "sainz";
const temporada = "2026";

// ELEMENTOS HTML
const contadorCorridas =
document.getElementById("corridas-carlos");

const contadorVitorias =
document.getElementById("vitorias-carlos");

const contadorPodios =
document.getElementById("podios-carlos");

const contadorPoles =
document.getElementById("poles-carlos");

const contadorPontos =
document.getElementById("pontos-carlos");

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
        historicocarlos.corridas +
        corridas2026,

        vitorias:
        historicocarlos.vitorias +
        vitorias2026,

        podios:
        historicocarlos.podios +
        podios2026,

        poles:
        historicocarlos.poles +
        poles2026,

        pontos:
historicocarlos.pontos +
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
    document.querySelector(".numeros-carlos");

    if(!secao) return;

    const observer =
    new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-carlos")
                .forEach(contador=>{

                    if(contador.classList.contains("contado"))
                    return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-carlos"
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
    .querySelectorAll(".animar-carlos")
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
   carloscarlos— ESTATÍSTICAS DA TEMPORADA 2026
   JOLPICA F1 API
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    const ANO = 2026;
    const PILOTO = "sainz";

    const BASE = `https://api.jolpi.ca/ergast/f1/${ANO}`;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const positionEl =
        document.getElementById("carlos-season-position");

    const pointsEl =
        document.getElementById("carlos-season-points");

    const racesEl =
        document.getElementById("carlos-season-races");

    const winsEl =
        document.getElementById("carlos-season-wins");

    const podiumsEl =
        document.getElementById("carlos-season-podiums");

    const polesEl =
        document.getElementById("carlos-season-poles");

    const top5El =
        document.getElementById("carlos-season-top5");

    const fastestLapsEl =
        document.getElementById("carlos-season-fastest-laps");

    const dnfsEl =
        document.getElementById("carlos-season-dnfs");

    const bestResultEl =
        document.getElementById("carlos-season-best-result");

    const averageFinishEl =
        document.getElementById("carlos-season-average-finish");

    const averageQualiEl =
        document.getElementById("carlos-season-average-quali");

    const bestQualiEl =
        document.getElementById("carlos-season-best-quali");


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
            "🏎️ carloscarlos— TEMPORADA 2026"
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
      ".reveal-sainz"
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
      ".skill-card-sainz"
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
              ".skill-progresso-sainz"
            );


          const numero =
            card.querySelector(
              ".skill-numero-sainz"
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
      ".pilotagem-grafico-section-sainz"
    );


  const radarArea =
    document.querySelector(
      ".radar-area-sainz"
    );


  const pontosRadar =
    document.querySelectorAll(
      ".radar-ponto-sainz"
    );


  const numerosSkills =
    document.querySelectorAll(
      ".skill-numero-sainz"
    );


  /* =======================================================
     CALCULA E ATUALIZA O RADAR
  ======================================================== */

  function atualizarRadarsainz() {


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


            atualizarRadarsainz();


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
      ".resumo-card-sainz"
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
              "resumo-ativo-sainz"
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



