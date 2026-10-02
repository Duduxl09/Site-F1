document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglestroll = document.getElementById("menuTogglestroll");
const menustroll = document.getElementById("sideMenustroll");
const overlaystroll = document.getElementById("overlaystroll");
const closestroll = document.getElementById("closeMenustroll");

const linksMenustroll = document.querySelectorAll(".side-menu-stroll a");

function fecharMenustroll() {
  if (menustroll) menustroll.classList.remove("active");
  if (overlaystroll) overlaystroll.classList.remove("active");
}

if (togglestroll) {
  togglestroll.addEventListener("click", () => {
    menustroll?.classList.add("active");
    overlaystroll?.classList.add("active");
  });
}

if (closestroll) {
  closestroll.addEventListener("click", fecharMenustroll);
}

if (overlaystroll) {
  overlaystroll.addEventListener("click", fecharMenustroll);
}

linksMenustroll.forEach(link => {
  link.addEventListener("click", fecharMenustroll);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksstroll() {

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

const strollBanner = document.querySelector(".stroll-banner-bg");

if(strollBanner){

  strollBanner.addEventListener("mousemove", (e)=>{

    const rect = strollBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    strollBanner.style.setProperty("--mouse-x", x + "px");
    strollBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-stroll-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-stroll");

  const dotsContainer =
    document.querySelector(".dots-stroll");

  const bg =
    document.querySelector(".bg-slider-stroll");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-stroll");

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
    document.querySelectorAll(".dot-stroll");

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

const strollTemporadas = {
     
"2017": [
  { gp:"Australia", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"P16", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Russia", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P16", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P3", pontos:"15", tipo:"stroll-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P18", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United Kingdom", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Malaysia", pos:"P8", pontos:"4", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P18", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
],


 "2018": [
  { gp:"Australia", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P8", pontos:"4", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P17", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"France", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United Kingdom", pos:"P17", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Germany", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P17", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P15", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Russia", pos:"P15", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"P18", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
],

"2019": [
  { gp:"Australia", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"China", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Azerbaijan", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Spain", pos:"P16", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Monaco", pos:"P16", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Canada", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"France", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Great Britain", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Germany", pos:"P4", pontos:"12", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Hungary", pos:"P17", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Italy", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Singapore", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Russia", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Japan", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Mexico", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"United States", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Brazil", pos:"P16", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Abu Dhabi", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" }
],

"2020": [
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Styria", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Hungary", pos:"P4", pontos:"12", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Great Britain", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"70th Anniversary", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Spain", pos:"P4", pontos:"12", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Belgium", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Italy", pos:"P3", pontos:"15", tipo:"stroll-podio", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Tuscany", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Russia", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Eifel", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Portugal", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Emilia Romagna", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Turkey", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Sakhir", pos:"P18", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Abu Dhabi", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" }
],

"2021": [
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Emilia Romagna", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Portugal", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Spain", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Azerbaijan", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"France", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Styria", pos:"P8", pontos:"4", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Hungary", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Netherlands", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Russia", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Turkey", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"United States", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Mexico", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Brazil", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Qatar", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Saudi Arabia", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Abu Dhabi", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" }
],


"2022": [
  { gp:"Bahrain", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Saudi Arabia", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Australia", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Emilia Romagna", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Miami", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Spain", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Monaco", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Azerbaijan", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Canada", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Great Britain", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Austria", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"France", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Hungary", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Netherlands", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Singapore", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Japan", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"United States", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Mexico", pos:"P15", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Brazil", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Abu Dhabi", pos:"P8", pontos:"4", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" }
],

"2023": [
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Saudi Arabia", pos:"P4", pontos:"12", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Azerbaijan", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Miami", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Canada", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Austria", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Great Britain", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Hungary", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Belgium", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Netherlands", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Italy", pos:"P16", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Singapore", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Japan", pos:"P18", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Qatar", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Mexico", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Las Vegas", pos:"P5", pontos:"10", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Abu Dhabi", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" }
],


"2024": [
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Saudi Arabia", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Australia", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Japan", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"China", pos:"P15", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Miami", pos:"P17", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Emilia Romagna", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Monaco", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Spain", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Great Britain", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Hungary", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Belgium", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Netherlands", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Italy", pos:"P19", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Azerbaijan", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Singapore", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"United States", pos:"P15", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Mexico", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Brazil", pos:"DNS", pontos:"0", tipo:"stroll-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Las Vegas", pos:"P15", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Qatar", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Abu Dhabi", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" }
],


"2025": [
  { gp:"Australia", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"China", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Japan", pos:"P20", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Bahrain", pos:"P17", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Saudi Arabia", pos:"P16", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Miami", pos:"P16", pontos:"4", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Emilia Romagna", pos:"P15", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Monaco", pos:"P15", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Canada", pos:"P17", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Austria", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Great Britain", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Belgium", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Netherlands", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Italy", pos:"P18", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Azerbaijan", pos:"P17", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Singapore", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"United States", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Mexico", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Brazil", pos:"P16", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Las Vegas", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Qatar", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Abu Dhabi", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" }
]

};
const strollCampeonato = {
     
"2017": {
  posicao: "12º",
  pontos: 40
},           
     
 "2018": {
  posicao: "18º",
  pontos: 6
},         
 
"2019": {
  posicao: "15º",
  pontos: 21
},  
 
"2020": {
  posicao: "11º",
  pontos: 75
}, 
     
 "2021": {
  posicao: "13º",
  pontos: 34
}, 
 
"2022": {
  posicao: "15º",
  pontos: 18
},       

"2023": {
  posicao: "10º",
  pontos: 74
}, 


"2024": {
  posicao: "13º",
  pontos: 24
},      

"2025": {
  posicao: "15º",
  pontos: 33
}
 
     
};
     
    

const strollContainer =
document.querySelector(".stroll-corridas-container");

const strollSummary =
document.querySelector(".stroll-season-summary");

const strollBtns =
document.querySelectorAll(".stroll-ano-btn");

/* ==========================
TEMPORADA 2026 VIA API
========================== */

async function carregarstroll2026(){

try{

const req =
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/drivers/stroll/results.json"
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
"stroll-sem-pontos";

if(
pos==="DNF"||
pos==="DSQ"
){
tipo="stroll-dnf";
}
else if(
Number(pos)===1
){
tipo="stroll-vitoria";
}
else if(
Number(pos)<=3
){
tipo="stroll-podio";
}
else if(
pontos>0
){
tipo="stroll-pontos";
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
"Aston Martin",

logo:
"icons/aston.png"

});

});

strollTemporadas["2026"] =
temporada;

let posicaoCampeonato = "-";

try{

const reqStandings =
await fetch(
"https://api.jolpi.ca/ergast/f1/2026/driverStandings.json"
);

const dataStandings =
await reqStandings.json();

const stroll =
dataStandings
.MRData
.StandingsTable
.StandingsLists?.[0]
?.DriverStandings
?.find(
d=>
d.Driver.driverId==="stroll"
);

if(stroll){
posicaoCampeonato =
`${stroll.position}&ordm;`;
}

}catch(err){

console.log(
"Erro posição",
err
);

}

strollCampeonato["2026"] = {

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
!strollContainer
)return;

strollContainer.innerHTML="";

const temporada =
strollTemporadas[ano] || [];

let equipeAnterior =
null;

temporada.forEach(
(corrida,index)=>{

const card =
document.createElement("div");

card.className=
`stroll-corrida-card ${corrida.tipo}`;

const mudouEquipe =
equipeAnterior &&
equipeAnterior !== corrida.equipe;

if(mudouEquipe){

card.classList.add(
"stroll-team-change"
);

}

card.innerHTML=`

<span class="stroll-gp">
${corrida.gp} GP
</span>

<div class="stroll-team">

<img
src="${corrida.logo}"
class="stroll-team-logo">

</div>

<span class="stroll-resultado">
${corrida.pos}
</span>

<span class="stroll-pontos-texto">
${corrida.pontos} pts
</span>

`;

strollContainer.appendChild(
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
strollCampeonato[ano];

if(
strollSummary
){

strollSummary.innerHTML=`

<div
class="stroll-summary-card show">

<h3
class="stroll-summary-title">

Season ${ano}

</h3>

<div
class="stroll-summary-stats">

<div
class="stroll-summary-box">

<span
class="stroll-summary-label">

Position

</span>

<span
class="stroll-summary-value">

${resumo?.posicao || "—"}

</span>

</div>

<div
class="stroll-summary-box">

<span
class="stroll-summary-label">

Points

</span>

<span
class="stroll-summary-value">

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

async function iniciarstroll(){

await carregarstroll2026();

strollBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

strollBtns.forEach(
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

iniciarstroll();
 
     

/*//////////*///////
//////PILOTAGEM///////////////
//////////////////


document.addEventListener("DOMContentLoaded", () => {


  /* =======================================================
     REVEAL DAS SEÇÕES
  ======================================================== */

  const elementosReveal =
    document.querySelectorAll(
      ".reveal-stroll"
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
      ".skill-card-stroll"
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
              ".skill-progresso-stroll"
            );


          const numero =
            card.querySelector(
              ".skill-numero-stroll"
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
      ".pilotagem-grafico-section-stroll"
    );


  const radarArea =
    document.querySelector(
      ".radar-area-stroll"
    );


  const pontosRadar =
    document.querySelectorAll(
      ".radar-ponto-stroll"
    );


  const numerosSkills =
    document.querySelectorAll(
      ".skill-numero-stroll"
    );


  /* =======================================================
     CALCULA E ATUALIZA O RADAR
  ======================================================== */

  function atualizarRadarstroll() {


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


            atualizarRadarstroll();


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
      ".resumo-card-stroll"
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
              "resumo-ativo-stroll"
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






/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-stroll");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-stroll");

const fraseEng = '"P1 stroll, amazing race!"';
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

const spans = document.querySelectorAll(".wave-stroll span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-stroll");
const lightbox = document.querySelector(".lightbox-stroll");
const imgLightbox = document.querySelector(".img-lightbox-stroll");
const fechar = document.querySelector(".fechar-stroll");

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


const lanceData=[

{

first:"FELIPE",

last:"MASSA",

img:"stroll/massa.png",

years:"2017",

stats:{

quali:[4,15],

races:[7,8],

podiums:[1,0],

wins:[0,0],

pole:[0,0],

points:[40,43]

}

},

{

first:"SERGEY",

last:"SIROTKIN",

img:"stroll/sirotkin.png",

years:"2018",

stats:{

quali:[6,15],

races:[10,8],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[6,1]

}

},

{

first:"SERGIO",

last:"PEREZ",

img:"stroll/perez.png",

years:"2019 — 2020",

stats:{

quali:[9,24],

races:[13,19],

podiums:[2,2],

wins:[0,1],

pole:[1,0],

points:[149,199]

}

},

{

first:"SEBASTIAN",

last:"VETTEL",

img:"stroll/vettel.png",

years:"2021 — 2022",

stats:{

quali:[14,30],

races:[18,20],

podiums:[0,1],

wins:[0,0],

pole:[0,0],

points:[92,129]

}

},

{

first:"FERNANDO",

last:"ALONSO",

img:"stroll/alonso.png",

years:"2023 — 2025",

stats:{

quali:[9,67],

races:[19,54],

podiums:[0,8],

wins:[0,0],

pole:[0,0],

points:[195,456]

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
"lanceYears"
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
"lanceQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"lanceQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"lanceRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"lanceRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"lancePodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"lancePodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"lanceWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"lanceWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"lancePoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"lancePoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"lancePointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"lancePointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"lanceBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"lanceBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"lanceBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"lanceBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"lanceBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"lanceBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"lanceBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"lanceBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"lanceBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"lanceBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"lanceBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"lanceBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
lanceData[
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
".lance-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.lance-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".lance-tab"
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
".lance-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

lanceData
.length-1



render(
current
)

}



document
.querySelector(
".lance-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
lanceData.length

)

current=0



render(
current
)

}



render(0) 




// =========================================
// PAINEL DE NOTÍCIAS stroll
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiasstroll");
const fecharNoticias = document.getElementById("fecharNoticiasstroll");

const atualizarNoticias =
document.getElementById("atualizarNoticiasstroll");


const painelNoticias = document.getElementById("painelNoticiasstroll");
const overlayNoticias = document.getElementById("overlayNoticiasstroll");

const listaNoticias = document.getElementById("listaNoticiasstroll");




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
        <div class="loading-noticias-stroll">

            <div class="spinner-stroll"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{


const resposta = await fetch(
`https://gnews.io/api/v4/search?q="lance stroll"&lang=en&max=10&apikey=${API_KEY}`
);

			


        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-stroll">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-stroll">

                <img
                src="${noticia.image || 'pilotos/alonso.png'}"
                alt="Notícia">

                <div class="card-conteudo-stroll">

                    <div class="data-noticia-stroll">

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

        <div class="loading-noticias-stroll">

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
const historicostroll = {

    corridas: 190,
    vitorias: 0,
    podios: 3,
    poles: 1,
    pontos: 312

};

// CONFIGURAÇÃO
const driverId = "stroll";
const temporada = "2026";

// ELEMENTOS HTML
const contadorCorridas =
document.getElementById("corridas-stroll");

const contadorVitorias =
document.getElementById("vitorias-stroll");

const contadorPodios =
document.getElementById("podios-stroll");

const contadorPoles =
document.getElementById("poles-stroll");

const contadorPontos =
document.getElementById("pontos-stroll");

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
        historicostroll.corridas +
        corridas2026,

        vitorias:
        historicostroll.vitorias +
        vitorias2026,

        podios:
        historicostroll.podios +
        podios2026,

        poles:
        historicostroll.poles +
        poles2026,

        pontos:
historicostroll.pontos +
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
    document.querySelector(".numeros-stroll");

    if(!secao) return;

    const observer =
    new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-stroll")
                .forEach(contador=>{

                    if(contador.classList.contains("contado"))
                    return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-stroll"
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
    .querySelectorAll(".animar-stroll")
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
   lancelance— ESTATÍSTICAS DA TEMPORADA 2026
   JOLPICA F1 API
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    const ANO = 2026;
    const PILOTO = "stroll";

    const BASE = `https://api.jolpi.ca/ergast/f1/${ANO}`;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const positionEl =
        document.getElementById("lance-season-position");

    const pointsEl =
        document.getElementById("lance-season-points");

    const racesEl =
        document.getElementById("lance-season-races");

    const winsEl =
        document.getElementById("lance-season-wins");

    const podiumsEl =
        document.getElementById("lance-season-podiums");

    const polesEl =
        document.getElementById("lance-season-poles");

    const top5El =
        document.getElementById("lance-season-top5");

    const fastestLapsEl =
        document.getElementById("lance-season-fastest-laps");

    const dnfsEl =
        document.getElementById("lance-season-dnfs");

    const bestResultEl =
        document.getElementById("lance-season-best-result");

    const averageFinishEl =
        document.getElementById("lance-season-average-finish");

    const averageQualiEl =
        document.getElementById("lance-season-average-quali");

    const bestQualiEl =
        document.getElementById("lance-season-best-quali");


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
            "🏎️ lancelance— TEMPORADA 2026"
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
