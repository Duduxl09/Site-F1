document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const toggleperez = document.getElementById("menuToggleperez");
const menuperez = document.getElementById("sideMenuperez");
const overlayperez = document.getElementById("overlayperez");
const closeperez = document.getElementById("closeMenuperez");

const linksMenuperez = document.querySelectorAll(".side-menu-perez a");

function fecharMenuperez() {
  if (menuperez) menuperez.classList.remove("active");
  if (overlayperez) overlayperez.classList.remove("active");
}

if (toggleperez) {
  toggleperez.addEventListener("click", () => {
    menuperez?.classList.add("active");
    overlayperez?.classList.add("active");
  });
}

if (closeperez) {
  closeperez.addEventListener("click", fecharMenuperez);
}

if (overlayperez) {
  overlayperez.addEventListener("click", fecharMenuperez);
}

linksMenuperez.forEach(link => {
  link.addEventListener("click", fecharMenuperez);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksperez() {

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

const perezBanner = document.querySelector(".perez-banner-bg");

if(perezBanner){

  perezBanner.addEventListener("mousemove", (e)=>{

    const rect = perezBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    perezBanner.style.setProperty("--mouse-x", x + "px");
    perezBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-perez-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-perez");

  const dotsContainer =
    document.querySelector(".dots-perez");

  const bg =
    document.querySelector(".bg-slider-perez");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-perez");

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
    document.querySelectorAll(".dot-perez");

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

const perezTemporadas = {

"2011": [
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Malaysia", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"China", pos:"P17", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Turkey", pos:"P14", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Canada", pos:"DNS", pontos:"0", tipo:"perez-dnf", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Europe", pos:"DNS", pontos:"0", tipo:"perez-dnf", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"United Kingdom", pos:"P15", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Germany", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Belgium", pos:"P17", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Singapore", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Japan", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Korea", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"India", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Abu Dhabi", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Brazil", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" }
],
"2012": [
  { gp:"Australia", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Malaysia", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"China", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Bahrain", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Monaco", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Canada", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Europe", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"United Kingdom", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Germany", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Hungary", pos:"P14", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Singapore", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Korea", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"India", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Abu Dhabi", pos:"P15", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"United States", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" }
],
"2013": [
  { gp:"Australia", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P16", pontos:"0", tipo:"perez-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"United Kingdom", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P12", pontos:"0", tipo:"perez-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Korea", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P15", pontos:"0", tipo:"perez-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"India", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" }
],
 
 "2014": [
  { gp:"Australia", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"DNS", pontos:"0", tipo:"perez-dnf", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United Kingdom", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Germany", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"DNF", pontos:"1", tipo:"perez-dnf", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Russia", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P15", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"12", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" }
], 
  "2015": [
  { gp:"Australia", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P13", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United Kingdom", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P12", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Russia", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Mexico", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P13", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" }
], 
 "2016": [
  { gp:"Australia", pos:"P13", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P18", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Russia", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Europe", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United Kingdom", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Germany", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Mexico", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" }
],  
 "2017": [
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Russia", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P13", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United Kingdom", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P17", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Mexico", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" }
],  
 "2018": [
  { gp:"Australia", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P12", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Azerbaijan", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"ForceIndia", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P12", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P14", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"France", pos:"P13", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United Kingdom", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Germany", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P14", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" },
  { gp:"Singapore", pos:"P16", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" },
  { gp:"Russia", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" },
  { gp:"Mexico", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" },
  { gp:"Brazil", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" },
  { gp:"Abu Dhabi", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" }
],    
 "2019": [
  { gp:"Australia", pos:"P13", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"China", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Azerbaijan", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Spain", pos:"P15", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Monaco", pos:"P13", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Canada", pos:"P12", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"France", pos:"P12", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Austria", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"United Kingdom", pos:"P17", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Germany", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Hungary", pos:"P19", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Belgium", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Italy", pos:"P16", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Singapore", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Russia", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Japan", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Mexico", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"United States", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Brazil", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" }
],    
"2020": [
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Styria", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"United Kingdom", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"70th Anniversary", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Italy", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Tuscany", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Russia", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Eifel", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Portugal", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Emilia Romagna", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Turkey", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Sakhir", pos:"P1", pontos:"25", tipo:"perez-vitoria", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Abu Dhabi", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" }
],   
 "2021": [
  { gp:"Bahrain", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Emilia Romagna", pos:"P12", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Portugal", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Monaco", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Azerbaijan", pos:"P1", pontos:"25", tipo:"perez-vitoria", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"France", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Styria", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"United Kingdom", pos:"P16", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Hungary", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Belgium", pos:"P20", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Netherlands", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Russia", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Turkey", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"United States", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Mexico", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Qatar", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Saudi Arabia", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Abu Dhabi", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" }
],  
"2022": [
  { gp:"Bahrain", pos:"P18", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Saudi Arabia", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Emilia Romagna", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Miami", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Monaco", pos:"P1", pontos:"25", tipo:"perez-vitoria", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Azerbaijan", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"United Kingdom", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"France", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Belgium", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Netherlands", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Singapore", pos:"P1", pontos:"25", tipo:"perez-vitoria", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"United States", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Mexico", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Brazil", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" }
],   
 "2023": [
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Saudi Arabia", pos:"P1", pontos:"25", tipo:"perez-vitoria", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Australia", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Azerbaijan", pos:"P1", pontos:"25", tipo:"perez-vitoria", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Miami", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Monaco", pos:"P16", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Spain", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Canada", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Austria", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"United Kingdom", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Hungary", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Belgium", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Netherlands", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Qatar", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"United States", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Mexico", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Las Vegas", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Abu Dhabi", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" }
],  
     
 "2024": [
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Saudi Arabia", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Australia", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"China", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Miami", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Emilia Romagna", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Canada", pos:"P18", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Spain", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Austria", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"United Kingdom", pos:"P17", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Belgium", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Netherlands", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Azerbaijan", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Singapore", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Mexico", pos:"P17", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Brazil", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Las Vegas", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Qatar", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Abu Dhabi", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" }
]    
     
     

};
const perezCampeonato = {
 "2011": {
  posicao: "16º",
  pontos: 14
},
 "2012": {
  posicao: "10º",
  pontos: 66
},
 "2013": {
  posicao: "11º",
  pontos: 49
},
 "2014": {
  posicao: "10º",
  pontos: 59
},
"2015": {
  posicao: "9º",
  pontos: 78
}, 
  "2016": {
  posicao: "7º",
  pontos: 101
},
 "2017": {
  posicao: "7º",
  pontos: 100
}, 
 "2018": {
  posicao: "8º",
  pontos: 62
}, 
 "2019": {
  posicao: "10º",
  pontos: 52
}, 
"2020": {
  posicao: "4º",
  pontos: 125
},
"2021": {
  posicao: "4º",
  pontos: 190
},
"2022": {
  posicao: "3º",
  pontos: 305
},
"2023": {
  posicao: "2º",
  pontos: 285
},
 "2024": {
  posicao: "8º",
  pontos: 152
} 
  
};
     
     

const perezContainer =
document.querySelector(".perez-corridas-container");

const perezSummary =
document.querySelector(".perez-season-summary");

const perezBtns =
document.querySelectorAll(".perez-ano-btn");

/* ==========================
TEMPORADA 2026 VIA API
========================== */

async function carregarperez2026(){

try{

const req =
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/drivers/perez/results.json"
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
"perez-sem-pontos";

if(
pos==="DNF"||
pos==="DSQ"
){
tipo="perez-dnf";
}
else if(
Number(pos)===1
){
tipo="perez-vitoria";
}
else if(
Number(pos)<=3
){
tipo="perez-podio";
}
else if(
pontos>0
){
tipo="perez-pontos";
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
"icons/Cadillac.png"

});

});

perezTemporadas["2026"] =
temporada;

let posicaoCampeonato = "-";

try{

const reqStandings =
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/driverStandings.json"
);

const dataStandings =
await reqStandings.json();

const perez =
dataStandings
.MRData
.StandingsTable
.StandingsLists?.[0]
?.DriverStandings
?.find(
d=>
d.Driver.driverId==="perez"
);

if(perez){
posicaoCampeonato =
`${perez.position}&ordm;`;
}

}catch(err){

console.log(
"Erro posição",
err
);

}

perezCampeonato["2026"] = {

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
!perezContainer
)return;

perezContainer.innerHTML="";

const temporada =
perezTemporadas[ano] || [];

let equipeAnterior =
null;

temporada.forEach(
(corrida,index)=>{

const card =
document.createElement("div");

card.className=
`perez-corrida-card ${corrida.tipo}`;

const mudouEquipe =
equipeAnterior &&
equipeAnterior !== corrida.equipe;

if(mudouEquipe){

card.classList.add(
"perez-team-change"
);

}

card.innerHTML=`

<span class="perez-gp">
${corrida.gp} GP
</span>

<div class="perez-team">

<img
src="${corrida.logo}"
class="perez-team-logo">

</div>

<span class="perez-resultado">
${corrida.pos}
</span>

<span class="perez-pontos-texto">
${corrida.pontos} pts
</span>

`;

perezContainer.appendChild(
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
perezCampeonato[ano];

if(
perezSummary
){

perezSummary.innerHTML=`

<div
class="perez-summary-card show">

<h3
class="perez-summary-title">

Season ${ano}

</h3>

<div
class="perez-summary-stats">

<div
class="perez-summary-box">

<span
class="perez-summary-label">

Position

</span>

<span
class="perez-summary-value">

${resumo?.posicao || "—"}

</span>

</div>

<div
class="perez-summary-box">

<span
class="perez-summary-label">

Points

</span>

<span
class="perez-summary-value">

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

async function iniciarperez(){

await carregarperez2026();

perezBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

perezBtns.forEach(
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

iniciarperez();



/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-perez");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-perez");

const fraseEng = '"P1 perez, amazing race!"';
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

const spans = document.querySelectorAll(".wave-perez span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-perez");
const lightbox = document.querySelector(".lightbox-perez");
const imgLightbox = document.querySelector(".img-lightbox-perez");
const fechar = document.querySelector(".fechar-perez");

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


const checoData=[

{

first:"KAMUI",

last:"KOBAYASHI",

img:"perez/kobayashi.png",

years:"2011 — 2012",

stats:{

quali:[10,25],

races:[19,15],

podiums:[3,1],

wins:[0,0],

pole:[0,0],

points:[146,122]

}

},

{

first:"JENSON",

last:"BUTTON",

img:"perez/button.png",

years:"2013",

stats:{

quali:[6,13],

races:[8,11],

podiums:[0,1],

wins:[0,0],

pole:[0,0],

points:[49,73]

}

},

	
{

first:"NICO",

last:"HULKENBERG",

img:"perez/hulkenberg.png",

years:"2014 — 2016",

stats:{

quali:[23,35],

races:[25,29],

podiums:[4,0],

wins:[0,0],

pole:[0,0],

points:[309,286]

}

},

{

first:"ESTEBAN",

last:"OCON",

img:"perez/ocon.png",

years:"2017 — 2018",

stats:{

quali:[25,16],

races:[19,18],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[155,136]

}

},

{

first:"LANCE",

last:"STROLL",

img:"perez/stroll.png",

years:"2019 — 2020",

stats:{

quali:[24,9],

races:[19,13],

podiums:[2,2],

wins:[1,0],

pole:[0,1],

points:[199,149]

}

},

{

first:"MAX",

last:"VERSTAPPEN",

img:"perez/verstappen.png",

years:"2021 — 2024",

stats:{

quali:[24,79],

races:[29,71],

podiums:[39,62],

wins:[5,47],

pole:[3,32],

points:[932,1918]

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
"checoYears"
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
"checoQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"checoQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"checoRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"checoRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"checoPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"checoPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"checoWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"checoWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"checoPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"checoPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"checoPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"checoPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"checoBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"checoBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"checoBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"checoBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"checoBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"checoBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"checoBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"checoBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"checoBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"checoBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"checoBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"checoBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
checoData[
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
".checo-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.checo-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".checo-tab"
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
".checo-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

checoData
.length-1



render(
current
)

}



document
.querySelector(
".checo-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
checoData.length

)

current=0



render(
current
)

}



render(0) 



// =========================================
// PAINEL DE NOTÍCIAS perez
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiasperez");
const fecharNoticias = document.getElementById("fecharNoticiasperez");

const atualizarNoticias =
document.getElementById("atualizarNoticiasperez");


const painelNoticias = document.getElementById("painelNoticiasperez");
const overlayNoticias = document.getElementById("overlayNoticiasperez");

const listaNoticias = document.getElementById("listaNoticiasperez");




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
        <div class="loading-noticias-perez">

            <div class="spinner-perez"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{


const resposta = await fetch(
`https://gnews.io/api/v4/search?q="sergio perez"&lang=en&max=10&apikey=${API_KEY}`
);

			


        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-perez">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-perez">

                <img
                src="${noticia.image || 'pilotos/sergio.png'}"
                alt="Notícia">

                <div class="card-conteudo-perez">

                    <div class="data-noticia-perez">

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

        <div class="loading-noticias-perez">

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
const historicoperez = {

    corridas: 281,
    vitorias: 6,
    podios: 39,
    poles: 3,
    pontos: 1638

};

// CONFIGURAÇÃO
const driverId = "perez";
const temporada = "2026";

// ELEMENTOS HTML
const contadorCorridas =
document.getElementById("corridas-perez");

const contadorVitorias =
document.getElementById("vitorias-perez");

const contadorPodios =
document.getElementById("podios-perez");

const contadorPoles =
document.getElementById("poles-perez");

const contadorPontos =
document.getElementById("pontos-perez");

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
        historicoperez.corridas +
        corridas2026,

        vitorias:
        historicoperez.vitorias +
        vitorias2026,

        podios:
        historicoperez.podios +
        podios2026,

        poles:
        historicoperez.poles +
        poles2026,

        pontos:
historicoperez.pontos +
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
    document.querySelector(".numeros-perez");

    if(!secao) return;

    const observer =
    new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-perez")
                .forEach(contador=>{

                    if(contador.classList.contains("contado"))
                    return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-perez"
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
    .querySelectorAll(".animar-perez")
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
   sergiosergio— ESTATÍSTICAS DA TEMPORADA 2026
   JOLPICA F1 API
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    const ANO = 2026;
    const PILOTO = "perez";

    const BASE = `https://api.jolpi.ca/ergast/f1/${ANO}`;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const positionEl =
        document.getElementById("sergio-season-position");

    const pointsEl =
        document.getElementById("sergio-season-points");

    const racesEl =
        document.getElementById("sergio-season-races");

    const winsEl =
        document.getElementById("sergio-season-wins");

    const podiumsEl =
        document.getElementById("sergio-season-podiums");

    const polesEl =
        document.getElementById("sergio-season-poles");

    const top5El =
        document.getElementById("sergio-season-top5");

    const fastestLapsEl =
        document.getElementById("sergio-season-fastest-laps");

    const dnfsEl =
        document.getElementById("sergio-season-dnfs");

    const bestResultEl =
        document.getElementById("sergio-season-best-result");

    const averageFinishEl =
        document.getElementById("sergio-season-average-finish");

    const averageQualiEl =
        document.getElementById("sergio-season-average-quali");

    const bestQualiEl =
        document.getElementById("sergio-season-best-quali");


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
            "🏎️ sergiosergio— TEMPORADA 2026"
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
      ".reveal-perez"
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
      ".skill-card-perez"
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
              ".skill-progresso-perez"
            );


          const numero =
            card.querySelector(
              ".skill-numero-perez"
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
      ".pilotagem-grafico-section-perez"
    );


  const radarArea =
    document.querySelector(
      ".radar-area-perez"
    );


  const pontosRadar =
    document.querySelectorAll(
      ".radar-ponto-perez"
    );


  const numerosSkills =
    document.querySelectorAll(
      ".skill-numero-perez"
    );


  /* =======================================================
     CALCULA E ATUALIZA O RADAR
  ======================================================== */

  function atualizarRadarperez() {


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


            atualizarRadarperez();


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
      ".resumo-card-perez"
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
              "resumo-ativo-perez"
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



