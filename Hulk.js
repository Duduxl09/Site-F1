document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglenico = document.getElementById("menuTogglenico");
const menunico = document.getElementById("sideMenunico");
const overlaynico = document.getElementById("overlaynico");
const closenico = document.getElementById("closeMenunico");

const linksMenunico = document.querySelectorAll(".side-menu-nico a");

function fecharMenunico() {
  if (menunico) menunico.classList.remove("active");
  if (overlaynico) overlaynico.classList.remove("active");
}

if (togglenico) {
  togglenico.addEventListener("click", () => {
    menunico?.classList.add("active");
    overlaynico?.classList.add("active");
  });
}

if (closenico) {
  closenico.addEventListener("click", fecharMenunico);
}

if (overlaynico) {
  overlaynico.addEventListener("click", fecharMenunico);
}

linksMenunico.forEach(link => {
  link.addEventListener("click", fecharMenunico);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksnico() {

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

const nicoBanner = document.querySelector(".nico-banner-bg");

if(nicoBanner){

  nicoBanner.addEventListener("mousemove", (e)=>{

    const rect = nicoBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    nicoBanner.style.setProperty("--mouse-x", x + "px");
    nicoBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-nico-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-nico");

  const dotsContainer =
    document.querySelector(".dots-nico");

  const bg =
    document.querySelector(".bg-slider-nico");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-nico");

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
    document.querySelectorAll(".dot-nico");

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

const nicoTemporadas = {
"2010": [
  { gp:"Bahrain", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Australia", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Malaysia", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Turkey", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Europe", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Great Britain", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Germany", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P18", pontos:"0", tipo:"nico-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Korea", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P16", pontos:"0", tipo:"nico-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
],

"2011": [
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Turkey", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Europe", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Great Britain", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Germany", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Korea", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"India", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" }
], 
 
"2012": [
  { gp:"Australia", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"P16", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Europe", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Germany", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Korea", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"India", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" }
],

"2013": [
  { gp:"Australia", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Malaysia", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"China", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Spain", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Monaco", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Great Britain", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Germany", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Hungary", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Belgium", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Korea", pos:"P4", pontos:"12", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Japan", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"India", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Abu Dhabi", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" }
], 
 
"2014": [
  { gp:"Australia", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Great Britain", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Germany", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Russia", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" }
],

"2015": [
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Great Britain", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Russia", pos:"P2", pontos:"18", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Mexico", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" }
],

"2016": [
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Russia", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Europe", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P4", pontos:"12", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Great Britain", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Germany", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Mexico", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" }
],

"2017": [
  { gp:"Australia", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"China", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Bahrain", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Russia", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"nico-dnf", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Azerbaijan", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Great Britain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Hungary", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Belgium", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Malaysia", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Mexico", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Brazil", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" }
],

"2018": [
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"China", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Azerbaijan", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"France", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Great Britain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Germany", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Belgium", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Italy", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Russia", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Japan", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Mexico", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Brazil", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Abu Dhabi", pos:"DNF", pontos:"0", tipo:"nico-dnf", equipe:"Renault", logo:"alpine/reno.png" }
],

"2019": [
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"nico-dnf", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"China", pos:"DNF", pontos:"0", tipo:"nico-dnf", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Azerbaijan", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Spain", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Monaco", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"France", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Great Britain", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Germany", pos:"DNF", pontos:"0", tipo:"nico-dnf", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Hungary", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Belgium", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Russia", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Japan", pos:"DSQ", pontos:"0", tipo:"nico-dnf", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Mexico", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"United States", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Brazil", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Abu Dhabi", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" }
],

"2020": [
  { gp:"70th Anniversary", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Eifel", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Racing Point", logo:"icons/rp.svg" }
],

"2022": [
  { gp:"Bahrain", pos:"P17", pontos:"0", tipo:"nico-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Saudi Arabia", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" }
],

"2023": [
  { gp:"Bahrain", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Saudi Arabia", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Azerbaijan", pos:"P17", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Miami", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Monaco", pos:"P17", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Spain", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Canada", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Great Britain", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Hungary", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Belgium", pos:"P18", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Netherlands", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Italy", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Japan", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Qatar", pos:"P16", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"United States", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Mexico", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Brazil", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Las Vegas", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Abu Dhabi", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" }
],

"2024": [
  { gp:"Bahrain", pos:"P16", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Saudi Arabia", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Australia", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Japan", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"China", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Miami", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Emilia Romagna", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Monaco", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Canada", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Spain", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Great Britain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Hungary", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Belgium", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Netherlands", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Italy", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Azerbaijan", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Mexico", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Brazil", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Las Vegas", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Qatar", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Abu Dhabi", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" }
],

"2025": [
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"China", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Japan", pos:"P16", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Bahrain", pos:"DSQ", pontos:"0", tipo:"nico-dnf", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Saudi Arabia", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Miami", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Emilia Romagna", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Monaco", pos:"P16", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Austria", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Great Britain", pos:"P3", pontos:"15", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Belgium", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Hungary", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Netherlands", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Italy", pos:"DNS", pontos:"0", tipo:"nico-dnf", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Azerbaijan", pos:"P16", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Singapore", pos:"P20", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Mexico", pos:"DNF", pontos:"0", tipo:"nico-dnf", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Brazil", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Las Vegas", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Qatar", pos:"DNF", pontos:"0", tipo:"nico-dnf", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Abu Dhabi", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" }
]


     
     
     
     
     
};
const nicoCampeonato = {
     
"2010": {
  posicao: "14º",
  pontos: 22
},
"2011": {
  posicao: "8º",
  pontos: 63
},

"2012": {
  posicao: "11º",
  pontos: 63
},     

"2013": {
  posicao: "10º",
  pontos: 51
},

"2014": {
  posicao: "9º",
  pontos: 96
},

"2015": {
  posicao: "10º",
  pontos: 58
},

"2016": {
  posicao: "9º",
  pontos: 72
},

"2017": {
  posicao: "10º",
  pontos: 43
},

"2018": {
  posicao: "7º",
  pontos: 69
},

"2019": {
  posicao: "14º",
  pontos: 37
},

"2020": {
  posicao: "17°",
  pontos: 10
},

"2022": {
  posicao: "21°",
  pontos: 0
},

"2023": {
  posicao: "16º",
  pontos: 35
},

"2025": {
  posicao: "11º",
  pontos: 51
}



     
     
     
};
     


const nicoContainer =
document.querySelector(".nico-corridas-container");

const nicoSummary =
document.querySelector(".nico-season-summary");

const nicoBtns =
document.querySelectorAll(".nico-ano-btn");

/* ==========================
TEMPORADA 2026 VIA API
========================== */

async function carregarnico2026(){

try{

const req =
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/drivers/hulkenberg/results.json"
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
"nico-sem-pontos";

if(
pos==="DNF"||
pos==="DSQ"
){
tipo="nico-dnf";
}
else if(
Number(pos)===1
){
tipo="nico-vitoria";
}
else if(
Number(pos)<=3
){
tipo="nico-podio";
}
else if(
pontos>0
){
tipo="nico-pontos";
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
"Audi",

logo:
"icons/audi.png"

});

});

nicoTemporadas["2026"] =
temporada;

let posicaoCampeonato = "-";

try{

const reqStandings =
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/driverStandings.json"
);

const dataStandings =
await reqStandings.json();

const nico =
dataStandings
.MRData
.StandingsTable
.StandingsLists?.[0]
?.DriverStandings
?.find(
d=>
d.Driver.driverId==="hulkenberg"
);

if(nico){
posicaoCampeonato =
`${nico.position}&ordm;`;
}

}catch(err){

console.log(
"Erro posição",
err
);

}

nicoCampeonato["2026"] = {

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
!nicoContainer
)return;

nicoContainer.innerHTML="";

const temporada =
nicoTemporadas[ano] || [];

let equipeAnterior =
null;

temporada.forEach(
(corrida,index)=>{

const card =
document.createElement("div");

card.className=
`nico-corrida-card ${corrida.tipo}`;

const mudouEquipe =
equipeAnterior &&
equipeAnterior !== corrida.equipe;

if(mudouEquipe){

card.classList.add(
"nico-team-change"
);

}

card.innerHTML=`

<span class="nico-gp">
${corrida.gp} GP
</span>

<div class="nico-team">

<img
src="${corrida.logo}"
class="nico-team-logo">

</div>

<span class="nico-resultado">
${corrida.pos}
</span>

<span class="nico-pontos-texto">
${corrida.pontos} pts
</span>

`;

nicoContainer.appendChild(
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
nicoCampeonato[ano];

if(
nicoSummary
){

nicoSummary.innerHTML=`

<div
class="nico-summary-card show">

<h3
class="nico-summary-title">

Season ${ano}

</h3>

<div
class="nico-summary-stats">

<div
class="nico-summary-box">

<span
class="nico-summary-label">

Position

</span>

<span
class="nico-summary-value">

${resumo?.posicao || "—"}

</span>

</div>

<div
class="nico-summary-box">

<span
class="nico-summary-label">

Points

</span>

<span
class="nico-summary-value">

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

async function iniciarnico(){

await carregarnico2026();

nicoBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

nicoBtns.forEach(
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

iniciarnico();








/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-nico");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-nico");

const fraseEng = '"P1 nico, amazing race!"';
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

const spans = document.querySelectorAll(".wave-nico span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-nico");
const lightbox = document.querySelector(".lightbox-nico");
const imgLightbox = document.querySelector(".img-lightbox-nico");
const fechar = document.querySelector(".fechar-nico");

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






const hulkenbergData=[

{

first:"RUBENS",

last:"BARRICHELLO",

img:"nico/barrichello.webp",

years:"2010",

stats:{

quali:[13,6],

races:[9,8],

podiums:[0,0],

wins:[0,0],

pole:[1,0],

points:[22,47]

}

},

{

first:"PAUL",

last:"DI RESTA",

img:"nico/diresta.webp",

years:"2012",

stats:{

quali:[10,10],

races:[9,9],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[63,46]

}

},

{

first:"ESTEBAN",

last:"GUTIERREZ",

img:"nico/gutierrez.png",

years:"2013",

stats:{

quali:[19,0],

races:[15,4],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[51,6]

}

},

{

first:"SERGIO",

last:"PEREZ",

img:"nico/perez.png",

years:"2014 — 2016",

stats:{

quali:[35,23],

races:[29,25],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[286,309]

}

},

{

first:"JOLYON",

last:"PALMER",

img:"nico/palmer.png",

years:"2017",

stats:{

quali:[16,3],

races:[12,5],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[43,8]

}

},

{

first:"CARLOS",

last:"SAINZ",

img:"nico/sainz.png",

years:"2018",

stats:{

quali:[12,9],

races:[10,7],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[69,53]

}

},

{

first:"DANIEL",

last:"RICCIARDO",

img:"nico/ricciardo.png",

years:"2019",

stats:{

quali:[7,14],

races:[10,8],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[37,54]

}

},

{

first:"KEVIN",

last:"MAGNUSSEN",

img:"nico/magnussem.png",

years:"2023 - 2024",

stats:{

quali:[36,10],

races:[28,17],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[50,19]

}

},


{

first:"GABRIEL",

last:"BORTOLETO",

img:"nico/bortoleto.png",

years:"2025",

stats:{

quali:[14,8],

races:[13,8],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[37,24]

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
"hulkenbergYears"
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
"hulkenbergQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"hulkenbergQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"hulkenbergRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"hulkenbergRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"hulkenbergPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"hulkenbergPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"hulkenbergWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"hulkenbergWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"hulkenbergPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"hulkenbergPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"hulkenbergPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"hulkenbergPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"hulkenbergBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"hulkenbergBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"hulkenbergBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"hulkenbergBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"hulkenbergBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"hulkenbergBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"hulkenbergBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"hulkenbergBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"hulkenbergBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"hulkenbergBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"hulkenbergBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"hulkenbergBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
hulkenbergData[
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
".hulkenberg-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.hulkenberg-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".hulkenberg-tab"
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
".hulkenberg-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

hulkenbergData
.length-1



render(
current
)

}



document
.querySelector(
".hulkenberg-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
hulkenbergData.length

)

current=0



render(
current
)

}



render(0) 





// =========================================
// PAINEL DE NOTÍCIAS hulk
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiashulk");
const fecharNoticias = document.getElementById("fecharNoticiashulk");

const atualizarNoticias =
document.getElementById("atualizarNoticiashulk");


const painelNoticias = document.getElementById("painelNoticiashulk");
const overlayNoticias = document.getElementById("overlayNoticiashulk");

const listaNoticias = document.getElementById("listaNoticiashulk");




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
        <div class="loading-noticias-hulk">

            <div class="spinner-hulk"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{


const resposta = await fetch(
`https://gnews.io/api/v4/search?q="nico hulkenberg"&lang=en&max=10&apikey=${API_KEY}`
);

			


        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-hulk">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-hulk">

                <img
                src="${noticia.image || 'pilotos/nico.png'}"
                alt="Notícia">

                <div class="card-conteudo-hulk">

                    <div class="data-noticia-hulk">

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

        <div class="loading-noticias-hulk">

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
const historiconico = {

    corridas: 254,
    vitorias: 0,
    podios: 1,
    poles: 1,
    pontos: 622

};

// CONFIGURAÇÃO
const driverId = "hulkenberg";
const temporada = "2026";

// ELEMENTOS HTML
const contadorCorridas =
document.getElementById("corridas-nico");

const contadorVitorias =
document.getElementById("vitorias-nico");

const contadorPodios =
document.getElementById("podios-nico");

const contadorPoles =
document.getElementById("poles-nico");

const contadorPontos =
document.getElementById("pontos-nico");

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
        historiconico.corridas +
        corridas2026,

        vitorias:
        historiconico.vitorias +
        vitorias2026,

        podios:
        historiconico.podios +
        podios2026,

        poles:
        historiconico.poles +
        poles2026,

        pontos:
historiconico.pontos +
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
    document.querySelector(".numeros-nico");

    if(!secao) return;

    const observer =
    new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-nico")
                .forEach(contador=>{

                    if(contador.classList.contains("contado"))
                    return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-nico"
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
    .querySelectorAll(".animar-nico")
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
   niconico— ESTATÍSTICAS DA TEMPORADA 2026
   JOLPICA F1 API
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    const ANO = 2026;
    const PILOTO = "hulkenberg";

    const BASE = `https://api.jolpi.ca/ergast/f1/${ANO}`;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const positionEl =
        document.getElementById("nico-season-position");

    const pointsEl =
        document.getElementById("nico-season-points");

    const racesEl =
        document.getElementById("nico-season-races");

    const winsEl =
        document.getElementById("nico-season-wins");

    const podiumsEl =
        document.getElementById("nico-season-podiums");

    const polesEl =
        document.getElementById("nico-season-poles");

    const top5El =
        document.getElementById("nico-season-top5");

    const fastestLapsEl =
        document.getElementById("nico-season-fastest-laps");

    const dnfsEl =
        document.getElementById("nico-season-dnfs");

    const bestResultEl =
        document.getElementById("nico-season-best-result");

    const averageFinishEl =
        document.getElementById("nico-season-average-finish");

    const averageQualiEl =
        document.getElementById("nico-season-average-quali");

    const bestQualiEl =
        document.getElementById("nico-season-best-quali");


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
            "🏎️ niconico— TEMPORADA 2026"
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
      ".reveal-hulkenberg"
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
      ".skill-card-hulkenberg"
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
              ".skill-progresso-hulkenberg"
            );


          const numero =
            card.querySelector(
              ".skill-numero-hulkenberg"
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
      ".pilotagem-grafico-section-hulkenberg"
    );


  const radarArea =
    document.querySelector(
      ".radar-area-hulkenberg"
    );


  const pontosRadar =
    document.querySelectorAll(
      ".radar-ponto-hulkenberg"
    );


  const numerosSkills =
    document.querySelectorAll(
      ".skill-numero-hulkenberg"
    );


  /* =======================================================
     CALCULA E ATUALIZA O RADAR
  ======================================================== */

  function atualizarRadarhulkenberg() {


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


            atualizarRadarhulkenberg();


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
      ".resumo-card-hulkenberg"
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
              "resumo-ativo-hulkenberg"
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



