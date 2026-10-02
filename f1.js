document.addEventListener("DOMContentLoaded", function(){

  const pilotos = [
    "Norris","Piastri","Russel","Antonelli",
    "Verstappen","Hadjar","Leclerc","Hamilton",
    "Sainz","Albon","Lawson","Lindbland",
    "Alonso","Stroll","Ocon","Bearman",
    "Hulkenberg","Bortoleto","Gasly","Colapinto","Bottas","Peres"
  ];

  const lista = document.getElementById("listaPilotosQualy");

  function renderPilotos(){
    lista.innerHTML = "";

    pilotos.forEach((nome, i)=>{
      lista.innerHTML += `
        <div class="linha-pilotoo">
          <span class="qualy-pos">${i+1}</span>
          <span class="qualy-nome">${nome}</span>
        </div>
      `;
    });
  }

  renderPilotos();

  window.mostrarQualy = function(fase){

    const linhas = document.querySelectorAll(".linha-pilotoo");

    linhas.forEach(l => {
      l.classList.remove("out","top");
    });

    let texto = "";

    if(fase === 1){
      texto = "Q1:22 pilotos participam...";
    }

    if(fase === 2){
      texto = "Q2: Restam 16 pilotos...";
    }

    if(fase === 3){
      texto = "Q3: disputa pela pole.";
    }

    linhas.forEach((l, i)=>{

      if(fase === 1 && i >= 16) l.classList.add("out");
      if(fase === 2 && i >= 10) l.classList.add("out");
      if(fase === 3 && i >= 10) l.classList.add("out");

    });

    if(fase === 2 || fase === 3){
      linhas.forEach((l, i)=>{
        if(i < 10){
          l.classList.add("top");
        }
      });
    }

    document.getElementById("titulo-qualy").innerText = "Q" + fase;
    document.getElementById("explicacao-qualy").innerText = texto;

    document.body.classList.remove("q1-ativo","q2-ativo","q3-ativo");
    document.body.classList.add("q" + fase + "-ativo");

  }

});




(function () {

  const pontos = {
    corrida: [25,18,15,12,10,8,6,4,2,1],
    sprint: [8,7,6,5,4,3,2,1]
  };

  // =========================
  // SEGURANÇA DOM
  // =========================
  function getContainer(){
    return document.getElementById("telemetria-pontuacao");
  }

  // =========================
  // CLASSES
  // =========================
  function getClasse(index){
    if(index === 0) return "gold-pontuacao";
    if(index === 1) return "silver-pontuacao";
    if(index === 2) return "bronze-pontuacao";
    return "white-pontuacao";
  }

  // =========================
  // ANIMAÇÃO
  // =========================
  function animarBarraNumero(bar, numeroEl, valorFinal, valorMax){

    const duracao = 2500;
    const inicio = performance.now();

    function frame(now){

      let progresso = (now - inicio) / duracao;
      if(progresso > 1) progresso = 1;

      const valorAtual = valorFinal * progresso;

      numeroEl.textContent = Math.floor(valorAtual);
      bar.style.width = (valorAtual / valorMax * 100) + "%";

      if(progresso < 1){
        requestAnimationFrame(frame);
      }
    }

    requestAnimationFrame(frame);
  }

  // =========================
  // FUNÇÃO PRINCIPAL
  // =========================
  function trocarPontuacao(tipo, event){

    const container = getContainer();

    if(!container){
      console.warn("⚠️ telemetria-pontuacao não encontrada no DOM");
      return;
    }

    if(!pontos[tipo]){
      console.warn("⚠️ tipo inválido:", tipo);
      return;
    }

    container.innerHTML = "";

    pontos[tipo].forEach((p,i)=>{

      const classe = getClasse(i);

      container.innerHTML += `
        <div class="linha-pontuacao">
          <span>P${i+1}</span>

          <div class="barra-pontuacao">
            <div class="barra-fill-pontuacao ${classe}"></div>
          </div>

          <small class="numero-pontuacao">0</small>
        </div>
      `;
    });

    // =========================
    // BOTÃO ATIVO
    // =========================
    document.querySelectorAll(".btn-pontuacao")
      .forEach(b => b.classList.remove("ativo"));

    if(event && event.target){
      event.target.classList.add("ativo");
    }

    // =========================
    // ANIMAÇÃO
    // =========================
    setTimeout(()=>{

      const barras = document.querySelectorAll(".barra-fill-pontuacao");
      const numeros = document.querySelectorAll(".numero-pontuacao");

      const max = pontos[tipo][0];

      barras.forEach((bar,i)=>{

        const valorFinal = pontos[tipo][i];

        setTimeout(()=>{
          animarBarraNumero(bar, numeros[i], valorFinal, max);
        }, i * 100);

      });

    }, 80);
  }

  // =========================
  // EXPORT GLOBAL (HTML)
  // =========================
  window.trocarPontuacao = trocarPontuacao;

  // =========================
  // AUTO INIT SE DOM OK
  // =========================
  function init(){
    const container = getContainer();
    if(!container) return;

    trocarPontuacao("corrida");
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();






// =========================
// DADOS DOS PNEUS
// =========================
const pneus = [

{
  nome:"Soft",
  desc:"Ideal para voltas rápidas e classificação",
  cor:"#ff2e2e",
  desgaste:0.7,
  stats:[95,40,100],
  img:"pneus/macio.webp"
},

{
  nome:"Medium",
  desc:"Equilíbrio entre desempenho e durabilidade",
  cor:"#ffd800",
  desgaste:0.4,
  stats:[75,70,80],
  img:"pneus/medio.webp"
},

{
  nome:"Hard",
  desc:"Ideal para longos stints com menor desgaste",
  cor:"#ffffff",
  desgaste:0.2,
  stats:[60,95,65],
  img:"pneus/duro.webp"
},

{
  nome:"Inter",
  desc:"Usado em pista úmida ou chuva leve",
  cor:"#00ff88",
  desgaste:0.3,
  stats:[70,80,60],
  img:"pneus/inter.webp"
},

{
  nome:"Wet",
  desc:"Indicado para chuva intensa",
  cor:"#00aaff",
  desgaste:0.25,
  stats:[65,85,55],
  img:"pneus/wet.webp"
}

];

// =========================
// VARIÁVEIS
// =========================
let climaAtual = "seco";
let selecionandoCard = null;
let comparacao = [null, null];

// =========================
// SELECIONAR PNEU
// =========================
function selecionarPneu(index){

  // BLOQUEIO POR CLIMA
  if(climaAtual === "seco" && index > 2) return;
  if(climaAtual === "chuva" && index < 3) return;

  // ATUALIZA CARD PRINCIPAL
  atualizarPneuPrincipal(index);

  // SE ESTIVER ESCOLHENDO PRO COMPARADOR
  if(selecionandoCard !== null){

    comparacao[selecionandoCard] = index;
    atualizarComparacao();
    selecionandoCard = null;
  }

}

// =========================
// CARD PRINCIPAL
// =========================
function atualizarPneuPrincipal(index){

  const p = pneus[index];

  document.getElementById("imgPrincipal").src = p.img;
  document.getElementById("nomePrincipal").innerText = p.nome;
  document.getElementById("descPrincipal").innerText = p.desc;

  // anima imagem
  const img = document.getElementById("imgPrincipal");
  img.style.animation = "none";
  setTimeout(()=> img.style.animation = "girar 4s linear infinite", 50);

  // anima barras
  const grip = document.getElementById("statGrip");
const dur = document.getElementById("statDur");
const vel = document.getElementById("statVel");

grip.style.width = p.stats[0]+"%";
dur.style.width = p.stats[1]+"%";
vel.style.width = p.stats[2]+"%";

// 🔥 COR DO PNEU
grip.style.background = p.cor;
dur.style.background = p.cor;
vel.style.background = p.cor;

}

// =========================
// ABRIR SELEÇÃO DO CARD
// =========================
function abrirSelecao(cardIndex){
  selecionandoCard = cardIndex;
}

// =========================
// ATUALIZAR COMPARADOR
// =========================
function atualizarComparacao(){

  comparacao.forEach((pneuIndex, i)=>{

    const img = document.getElementById("imgComp"+i);
    const nome = document.getElementById("nomeComp"+i);
    const placeholder = document.querySelectorAll(".placeholder")[i];

    if(pneuIndex === null){
      img.style.display = "none";
      nome.innerText = "";
      placeholder.style.display = "block";
      return;
    }

    const p = pneus[pneuIndex];

    img.src = p.img;
    img.style.display = "block";
    nome.innerText = p.nome;
    placeholder.style.display = "none";
  });

  atualizarBarrasComparacao();
}

// =========================
// BARRAS DE COMPARAÇÃO
// =========================
function atualizarBarrasComparacao(){
  
  const p1 = pneus[comparacao[0]];
  const p2 = pneus[comparacao[1]];
  if(!p1 || !p2) return;

  // GRIP
  const g1 = document.getElementById("compGrip1");
  const g2 = document.getElementById("compGrip2");
  g1.style.width = p1.stats[0]+"%";
  g2.style.width = p2.stats[0]+"%";
  g1.style.background = p1.cor;
  g2.style.background = p2.cor;

  // DURABILIDADE
  const d1 = document.getElementById("compDur1");
  const d2 = document.getElementById("compDur2");
  d1.style.width = p1.stats[1]+"%";
  d2.style.width = p2.stats[1]+"%";
  d1.style.background = p1.cor;
  d2.style.background = p2.cor;

  // VELOCIDADE
  const v1 = document.getElementById("compVel1");
  const v2 = document.getElementById("compVel2");
  v1.style.width = p1.stats[2]+"%";
  v2.style.width = p2.stats[2]+"%";
  v1.style.background = p1.cor;
  v2.style.background = p2.cor;
}
// =========================
// REMOVER PNEU (DUPLO CLIQUE)
// =========================
document.querySelectorAll(".card-comp").forEach((card,i)=>{

  card.addEventListener("dblclick", ()=>{

    comparacao[i] = null;
    atualizarComparacao();

  });

});

// =========================
// CLIMA
// =========================
function mudarClima(tipo, event){

  climaAtual = tipo;

  document.querySelectorAll(".clima button").forEach(b=>b.classList.remove("ativo"));
  event.target.classList.add("ativo");

  // muda fundo
  document.body.style.background = tipo === "chuva" ? "#0b1a2a" : "#0a0a0a";

}

// =========================
// DESGASTE
// =========================
function simularDesgaste(){

  if(!document.getElementById("nomePrincipal").innerText) return;

  let valor = 100;

  const nome = document.getElementById("nomePrincipal").innerText;
  const pneu = pneus.find(p=>p.nome === nome);

  const barra = document.getElementById("desgaste");
  const texto = document.getElementById("textoDesgaste");

  texto.innerText = "Desgaste em andamento...";

  const intervalo = setInterval(()=>{

    valor -= pneu.desgaste * 2;

    if(valor <= 0){
      valor = 0;
      clearInterval(intervalo);
      texto.innerText = "Pneu desgastado 🔴";
    }

    barra.style.width = valor + "%";

  },100);
  
  document.addEventListener("DOMContentLoaded", function(){

  document.querySelectorAll(".card-comp").forEach((card,i)=>{

    card.addEventListener("dblclick", ()=>{

      comparacao[i] = null;
      atualizarComparacao();

    });

  });

});

}





/* ==========================
   SLIDER PIT STOP
========================== */

const pitTrack = document.querySelector(".slider-pit-track");

if (pitTrack) {

    const pitSlides = document.querySelectorAll(".slide-pit");
    const pitDotsContainer = document.querySelector(".dots-pit");

    let pitIndex = 0;

    // Criar bolinhas
    pitSlides.forEach((_, i) => {

        const dot = document.createElement("div");

        dot.classList.add("dot-pit");

        if (i === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {

            pitIndex = i;
            atualizarPit();

        });

        pitDotsContainer.appendChild(dot);

    });

    const pitDots = document.querySelectorAll(".dot-pit");

    // ==========================
    // TOCAR VÍDEO ATUAL
    // ==========================

    function tocarVideoAtual() {

        pitSlides.forEach(slide => {

            const video = slide.querySelector("video");

            if(video){

                video.pause();
                video.currentTime = 0;

            }

        });

        const videoAtual =
        pitSlides[pitIndex].querySelector("video");

        if(videoAtual){

            videoAtual.play().catch(()=>{});

        }

    }

    // ==========================
    // ATUALIZAR SLIDE
    // ==========================

    function atualizarPit() {

        pitTrack.style.transform =
        `translateX(-${pitIndex * 100}%)`;

        pitDots.forEach(dot =>
            dot.classList.remove("active")
        );

        pitDots[pitIndex].classList.add("active");

        tocarVideoAtual();

    }

    // ==========================
    // QUANDO O VÍDEO TERMINA
    // ==========================

    pitSlides.forEach((slide, i)=>{

        const video = slide.querySelector("video");

        if(!video) return;

        video.addEventListener("ended", ()=>{

            if(i !== pitIndex) return;

            pitIndex++;

            if(pitIndex >= pitSlides.length){

                pitIndex = 0;

            }

            atualizarPit();

        });

    });

    // ==========================
    // BOTÃO PRÓXIMO
    // ==========================

    const nextBtn =
    document.querySelector(".next-pit");

    if(nextBtn){

        nextBtn.onclick = ()=>{

            pitIndex++;

            if(pitIndex >= pitSlides.length){

                pitIndex = 0;

            }

            atualizarPit();

        };

    }

    // ==========================
    // BOTÃO ANTERIOR
    // ==========================

    const prevBtn =
    document.querySelector(".prev-pit");

    if(prevBtn){

        prevBtn.onclick = ()=>{

            pitIndex--;

            if(pitIndex < 0){

                pitIndex = pitSlides.length - 1;

            }

            atualizarPit();

        };

    }

    // ==========================
    // SWIPE
    // ==========================

    let startX = 0;
    let endX = 0;

    pitTrack.addEventListener("touchstart",(e)=>{

        startX = e.touches[0].clientX;

    });

    pitTrack.addEventListener("touchmove",(e)=>{

        endX = e.touches[0].clientX;

    });

    pitTrack.addEventListener("touchend",()=>{

        const diff = startX - endX;

        if(diff > 50){

            pitIndex++;

        }

        if(diff < -50){

            pitIndex--;

        }

        if(pitIndex >= pitSlides.length){

            pitIndex = 0;

        }

        if(pitIndex < 0){

            pitIndex = pitSlides.length - 1;

        }

        atualizarPit();

    });

    // ==========================
    // INICIAR
    // ==========================

    atualizarPit();

}



/*=============================================
     BANDEIRAS
==============================================*/

const cards = document.querySelectorAll(".card-focus");

cards.forEach(card => {
  card.addEventListener("click", () => {
    document.querySelector(".card-focus.ativo").classList.remove("ativo");
    card.classList.add("ativo");
  });
});

/* SWIPE MOBILE */
let startX = 0;

document.querySelector(".bandeiras-focus").addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.querySelector(".bandeiras-focus").addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) mudarCard(1); // direita
  if (endX - startX > 50) mudarCard(-1); // esquerda
});

function mudarCard(dir) {
  let atual = document.querySelector(".card-focus.ativo");
  let index = Array.from(cards).indexOf(atual);

  let novoIndex = index + dir;

  if (novoIndex < 0) novoIndex = cards.length - 1;
  if (novoIndex >= cards.length) novoIndex = 0;

  atual.classList.remove("ativo");
  cards[novoIndex].classList.add("ativo");
}


document.addEventListener("DOMContentLoaded", function () {

  const pista = document.querySelector(".pista-sc");
  const barra = document.querySelector(".barra-velocidade");
  const numero = document.querySelector(".vel-numero");

  const tituloInfo = document.querySelector(".titulo-info");
  const textoInfo = document.querySelector(".texto-info");

  let modo = 0; // 0 = normal | 1 = SC | 2 = VSC
  let velocidadeAtual = 0;

  // =========================
  // 🎯 VELOCIDADE
  // =========================
  function atualizarVelocidade(valor) {

    let intervalo = setInterval(() => {

      if (velocidadeAtual < valor) {
        velocidadeAtual += 5;
      } else if (velocidadeAtual > valor) {
        velocidadeAtual -= 5;
      }

      numero.textContent = velocidadeAtual + " km/h";

      if (velocidadeAtual === valor) {
        clearInterval(intervalo);
      }

    }, 10);

    const porcentagem = (valor / 320) * 100;
    barra.style.width = porcentagem + "%";

    // cor dinâmica
    if (valor > 250) {
      barra.style.background = "red";
      barra.style.boxShadow = "0 0 15px red";
    } else if (valor > 180) {
      barra.style.background = "yellow";
      barra.style.boxShadow = "0 0 15px yellow";
    } else {
      barra.style.background = "lime";
      barra.style.boxShadow = "0 0 15px lime";
    }
  }

  // =========================
  // 📊 TEXTO
  // =========================
  function atualizarInfo() {

    if (modo === 0) {
      tituloInfo.textContent = "CORRIDA NORMAL";
      textoInfo.textContent =
        "Os carros estão em ritmo total de corrida, disputando posições livremente.";
    }

    if (modo === 1) {
      tituloInfo.textContent = "SAFETY CAR";
      textoInfo.textContent =
        "O Safety Car foi acionado. Os carros reduzem a velocidade e seguem em fila, sem ultrapassagens.";
    }

    if (modo === 2) {
      tituloInfo.textContent = "VIRTUAL SAFETY CAR";
      textoInfo.textContent =
        "O VSC reduz o ritmo de todos os carros de forma controlada, mantendo distâncias.";
    }
  }

  // =========================
  // 🚗 MODOS
  // =========================
  function aplicarModo() {

    pista.classList.remove("sc-mode", "vsc-mode");

    if (modo === 0) {
      atualizarVelocidade(320);
    }

    if (modo === 1) {
      pista.classList.add("sc-mode");
      atualizarVelocidade(140);
    }

    if (modo === 2) {
      pista.classList.add("vsc-mode");
      atualizarVelocidade(180);
    }

    atualizarInfo();
  }

  // =========================
  // 🎮 CLICK
  // =========================
  pista.addEventListener("click", function () {

    modo++;
    if (modo > 2) modo = 0;

    aplicarModo();

  });

  // inicia normal
  aplicarModo();

  console.log("Sistema completo SC/VSC + HUD carregado ✅");

});

document.addEventListener("DOMContentLoaded", function(){

const cards = document.querySelectorAll(".pen-card");
const banner = document.querySelector(".fia-banner");
const texto = document.querySelector(".fia-texto");
const info = document.querySelector(".fia-info");

const cores = {
  "+5s": "orange",
  "+10s": "red",
  "DRIVE THROUGH": "purple",
  "STOP & GO": "crimson",
  "GRID PENALTY": "yellow",
  "DSQ": "white"
};

function getInfo(tipo) {
  if (tipo === "+5s") return "5 segundos adicionados ao tempo final.";
  if (tipo === "+10s") return "10 segundos adicionados ao tempo final.";
  if (tipo === "DRIVE THROUGH") return "Passagem obrigatória pelo pit lane.";
  if (tipo === "STOP & GO") return "Parada obrigatória antes de retornar.";
  if (tipo === "GRID PENALTY") return "Perda de posições no grid.";
  if (tipo === "DSQ") return "Desclassificação da corrida.";
  return "";
}

cards.forEach(card => {

  card.addEventListener("click", function () {

    const tipo = this.dataset.tipo;
    const piloto = this.dataset.piloto;
    const numero = this.dataset.numero;

    // 🔴 TEXTO ESTILO F1
    texto.textContent = `${tipo} — CAR ${numero} (${piloto})`;

    banner.style.borderLeft = `5px solid ${cores[tipo]}`;
    banner.classList.add("ativo");

    setTimeout(() => {
      banner.classList.remove("ativo");
    }, 3000);

    // 📄 INFO
    info.textContent = getInfo(tipo);
    info.style.borderLeft = `5px solid ${cores[tipo]}`;

    info.classList.remove("ativo");
    setTimeout(() => {
      info.classList.add("ativo");
    }, 50);

  });

});

});




	
const togglef1 = document.getElementById("menuTogglef1");
const menuf1 = document.getElementById("sideMenuf1");
const overlayf1 = document.getElementById("overlayf1");
const closef1 = document.getElementById("closeMenuf1");

const linksMenuf1 = document.querySelectorAll(".side-menu-f1 a");

function fecharMenuf1() {
  if (menuf1) menuf1.classList.remove("active");
  if (overlayf1) overlayf1.classList.remove("active");
}

if (togglef1) {
  togglef1.addEventListener("click", () => {
    menuf1?.classList.add("active");
    overlayf1?.classList.add("active");
  });
}

if (closef1) {
  closef1.addEventListener("click", fecharMenuf1);
}

if (overlayf1) {
  overlayf1.addEventListener("click", fecharMenuf1);
}

linksMenuf1.forEach(link => {
  link.addEventListener("click", fecharMenuf1);
});

(function scrollLinksf1() {

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