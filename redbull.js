document.addEventListener("DOMContentLoaded", () => {

  // =====================================================
  // 🔧 UTIL
  // =====================================================
  const $ = (el) => document.querySelector(el);
  const $$ = (el) => document.querySelectorAll(el);


  // =====================================================
  // 🍔 MENU REDBULL
  // =====================================================
  const toggleRedbull = $("#menuToggleRedbull");
  const menuRedbull = $("#sideMenuRedbull");
  const overlayRedbull = $("#overlayRedbull");
  const closeRedbull = $("#closeMenuRedbull");
  const linksRedbull = $$(".side-menu-redbull a");

  function fecharMenuRedbull(){
    menuRedbull.classList.remove("active");
    overlayRedbull.classList.remove("active");
  }

  if (toggleRedbull && menuRedbull && overlayRedbull && closeRedbull) {

    toggleRedbull.addEventListener("click", () => {
      menuRedbull.classList.add("active");
      overlayRedbull.classList.add("active");
    });

    closeRedbull.addEventListener("click", fecharMenuRedbull);
    overlayRedbull.addEventListener("click", fecharMenuRedbull);

    linksRedbull.forEach(link => {
      link.addEventListener("click", () => {
        setTimeout(fecharMenuRedbull, 150);
      });
    });

  }


  // =====================================================
  // 🌄 NUMEROS
  // =====================================================

const historicoredbull = {

    corridas: 481,
    vitorias: 130,
    podios: 297,
    poles: 111,
    pontos: 8288

};

// -------------------------------------
// CONFIGURAÇÃO
// -------------------------------------

const equipe = "red_bull";
const temporada = "2026";

// -------------------------------------
// ELEMENTOS HTML
// -------------------------------------

const contadorCorridas =
document.getElementById("corridas-redbull");

const contadorVitorias =
document.getElementById("vitorias-redbull");

const contadorPodios =
document.getElementById("podios-redbull");

const contadorPoles =
document.getElementById("poles-redbull");

const contadorPontos =
document.getElementById("pontos-redbull");

// -------------------------------------
// BUSCAR RESULTADOS DA TEMPORADA
// -------------------------------------

async function buscarResultadosTemporada(){

    const resposta = await fetch(

`https://api.jolpi.ca/ergast/f1/${temporada}/constructors/${equipe}/results.json?limit=100`

    );

    const dados = await resposta.json();

    return dados.MRData.RaceTable.Races;

}

// -------------------------------------
// BUSCAR CLASSIFICAÇÕES
// (Necessário para contar poles)
// -------------------------------------

async function buscarQualificacoes(){

    const resposta = await fetch(

`https://api.jolpi.ca/ergast/f1/${temporada}/constructors/${equipe}/qualifying.json?limit=100`

    );

    const dados = await resposta.json();

    return dados.MRData.RaceTable.Races;

}


// ======================================================
// CALCULAR ESTATÍSTICAS DA TEMPORADA
// ======================================================

async function calcularEstatisticas(){

    const resultados =
    await buscarResultadosTemporada();

    const qualificacoes =
    await buscarQualificacoes();

    let corridas2026 = 0;
    let vitorias2026 = 0;
    let podios2026 = 0;
    let pontos2026 = 0;
    let poles2026 = 0;

    // ---------------------------------
    // RESULTADOS
    // ---------------------------------

    resultados.forEach(corrida=>{

        corridas2026++;

        const resultado =
        corrida.Results[0];

        const posicao =
        Number(resultado.position);

        const pontos =
        Number(resultado.points);

        pontos2026 += pontos;

        if(posicao === 1){

            vitorias2026++;

        }

        if(posicao <= 3){

            podios2026++;

        }

    });

    // ---------------------------------
    // POLES
    // ---------------------------------

    qualificacoes.forEach(corrida=>{

        const piloto =
        corrida.QualifyingResults[0];

        if(piloto.position === "1"){

            poles2026++;

        }

    });

    return{

        corridas:
        historicoredbull.corridas +
        corridas2026,

        vitorias:
        historicoredbull.vitorias +
        vitorias2026,

        podios:
        historicoredbull.podios +
        podios2026,

        poles:
        historicoredbull.poles +
        poles2026,

        pontos:
        historicoredbull.pontos +
        pontos2026

    };

}


// ======================================================
// ATUALIZAR CARDS
// ======================================================

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

        console.error(
            "Erro ao carregar estatísticas:",
            erro
        );

    }

}

// ======================================================
// ANIMAÇÃO DOS CONTADORES
// ======================================================

function animarContadores(){

    const secao = document.querySelector(".numeros-redbull");

    if(!secao) return;

    const observer = new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-redbull")
                .forEach(contador=>{

                    if(contador.classList.contains("contado")) return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-redbull"
                    );

                    let atual = 0;

                    const incremento =
                    Math.max(1, alvo / 180);


                    function atualizar(){

                        if(atual < alvo){

                            atual += incremento;

                            if(atual > alvo){
                                atual = alvo;
                            }

                            contador.textContent =
                            Math.floor(atual)
                            .toLocaleString("pt-BR");


                            if(barra){

                                barra.style.width =
                                ((atual / alvo) * 100) + "%";

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
// ======================================================
// ANIMAÇÃO DOS CARDS
// ======================================================

function animarCards(){

    document
    .querySelectorAll(".animar-redbull")
    .forEach((card,index)=>{

        setTimeout(()=>{

            card.classList.add("ativo");

        },index*180);

    });

}

// ======================================================
// INICIAR
// ======================================================

async function iniciar(){

    await atualizarCards();

    animarCards();

    animarContadores();

	

}

iniciar();


    

  // =====================================================
  // 🏆 ERAS
  // =====================================================
  const erasRedBull = [
 {
titulo: "Capítulo I – O Começo da Red Bull (2005)",

texto: "A Red Bull entrou na Fórmula 1 em 2005 após comprar a Jaguar. Nos primeiros anos, a equipe focou em construir sua base e crescer tecnicamente, preparando o terreno para o futuro sucesso.",
timeline: [

{ano:"2005", imagem:"titulosred/rb1.jpeg", descricao:"Primeiro carro da Red Bull"},
{ano:"2006", imagem:"titulosred/rb2.jpg", descricao:"Chegada de Adrian Newey"},
{ano:"2008", imagem:"titulosred/rb4.jpg", descricao:"Sinais de Evolução"}
]
},

{
titulo: "Capítulo II – O Domínio de Vettel (2009–2013)",
texto: "Com carros projetados por Adrian Newey e liderados por Sebastian Vettel, a Red Bull dominou a Fórmula 1, conquistando quatro títulos consecutivos de pilotos e construtores.",
timeline: [
  {ano:"2009", imagem:"titulosred/rb5.jpg", descricao:"Primeiro Podio"},
{ano:"2010", imagem:"titulosred/vettel10.jpg", descricao:"1° Titulo"},
{ano:"2011", imagem:"titulosred/vettel11.jpeg", descricao:"Dominio total"},
{ano:"2013", imagem:"titulosred/vettel13.jpeg", descricao:"Recorde de vitorias"}

]
},

{
titulo: "Capítulo III – Desafios e Reconstrução (2014–2020)",
texto: "Com a mudança para motores híbridos, a Red Bull perdeu competitividade e enfrentou dificuldades com a Renault, passando por anos de reconstrução.",
timeline: [
{ano:"2014", imagem:"titulosred/rbr14.jpeg", descricao:"Fim do domínio"},
{ano:"2016", imagem:"titulosred/max16.jpeg", descricao:"A chegada de um Prodigio"},
{ano:"2019", imagem:"titulosred/max19.jpeg", descricao:"Parceria com a Honda"},
{ano:"2020", imagem:"titulosred/rbr20.jpeg", descricao:"Evolução gradual"}
]
},

{
titulo: "Capítulo IV – O Novo Domínio (2021–2025)",
texto: "Com Max Verstappen e uma equipe técnica extremamente forte, a Red Bull voltou ao topo, iniciando uma nova era dominante na Fórmula 1.",
timeline: [
  {ano:"2021", imagem:"titulosred/max21.jpg", descricao:"Titulo histórico"},
{ano:"2022", imagem:"titulosred/max22.jpeg", descricao:"Domínio com o novo regulamento"},
{ano:"2023", imagem:"titulosred/rbr23.jpeg", descricao:"Temporada dominante 22 vitorias em 23 corridas "},
{ano:"2024", imagem:"titulosred/max24.jpeg", descricao:"Titula na Experiencia"},
{ano:"2025", imagem:"titulosred/max25.jpeg", descricao:"Quase a virada historica"}
]
}

];

function mostrarEra(index) {
  const era = erasRedBull[index];

  const titulo = document.getElementById("tituloEra-redbull");
  const texto = document.getElementById("textoEra-redbull");
  const box = document.getElementById("redbull-timeline");
  const botoes = document.querySelectorAll(".botoes-eras-redbull button");

  if (!era || !titulo || !texto || !box) return;

  titulo.innerText = era.titulo;
  texto.innerText = era.texto;

  box.innerHTML = "";

  era.timeline.forEach(item => {
    box.innerHTML += `
      <div class="redbull-timeline-item">
        <div class="redbull-timeline-year">${item.ano}</div>
        <img src="${item.imagem}">
        <p>${item.descricao}</p>
      </div>
    `;
  });

  botoes.forEach(b => b.classList.remove("ativo"));
  if (botoes[index]) botoes[index].classList.add("ativo");
}

window.mostrarEra = mostrarEra;

 (function scrollLinks(){

    document.querySelectorAll('a[href^="#"]').forEach(link => {

      link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      });

    });

  })();




// inicia corretamente
window.addEventListener("load", () => {
  mostrarEra(0);
});

  // =====================================================
  // 🔗 SCROLL SUAVE
  // =====================================================
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
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


  // =====================================================
  // 🏁 TIMELINE SIMPLES (scroll único)
  // =====================================================
window.addEventListener("scroll", ()=>{

const itens = document.querySelectorAll(".conteudo-timeline-redbull");
const linha = document.querySelector(".linha-centro-redbull");
const secao = document.querySelector(".timeline-redbull");

const rect = secao.getBoundingClientRect();

let alturaTela = window.innerHeight;

if(rect.top < alturaTela && rect.bottom > 0){

let progresso = (alturaTela - rect.top) / (rect.height + alturaTela);

linha.style.height = progresso * rect.height + "px";

}

itens.forEach(item=>{

const pos = item.getBoundingClientRect().top;

if(pos < alturaTela - 120){

item.classList.add("ativo");

}

});

});

window.addEventListener("load", function(){

const pontos = document.querySelectorAll(".ponto-redbull");
const progresso = document.querySelector(".linha-progresso-redbull");
const luz = document.querySelector(".luz-redbull");
const linha = document.querySelector(".linha-box-redbull");

let i = 0;

function animar(){

if(i < pontos.length){

pontos[i].classList.add("ativo");

let larguraLinha = linha.clientWidth;

let left = pontos[i].getAttribute("style");
left = left.replace("left:", "").replace("%","").trim();

let posPx = (parseFloat(left) / 100) * larguraLinha;

progresso.style.width = posPx + "px";
luz.style.left = (posPx - 30) + "px";

i++;

if(i == pontos.length){
setTimeout(()=>{
progresso.style.width = "100%";
luz.style.left = "100%";
},1300);
}

setTimeout(animar,1300);


}

}

animar();

});







 // =====================================================
  // 🔗 CARROS
  // =====================================================

    function timelineCarros() {
  window.addEventListener("load", () => {

    const secao = document.querySelector(".timeline-redbull-car");
    const pontos = document.querySelectorAll(".timeline-redbull-car .ponto-car-redbull");
    const progresso = document.querySelector(".timeline-redbull-car .linha-progresso-car-redbull");
    const luz = document.querySelector(".timeline-redbull-car .luz-car-redbull");
    const linha = document.querySelector(".timeline-redbull-car .linha-box-car-redbull");

    if (!secao || !pontos.length || !progresso || !luz || !linha) return;

    let i = 0;

    function animar() {
      if (i >= pontos.length) {

  progresso.style.width = "100%";

  luz.style.left = "calc(100% - 35px)";

  return;
}

      const ponto = pontos[i];

      const foto = ponto.querySelector(".foto-car-redbull, .foto-car-redbull");
      const info = ponto.querySelector(".info-car-redbull, .info-car-redbull");

      if (foto) foto.classList.add("ativo");

      const left = parseFloat(ponto.style.left || "0");
      const largura = linha.clientWidth;
      const posPx = (left / 100) * largura;

      setTimeout(() => {

        if (info) info.classList.add("ativo");

        progresso.style.width = posPx + "px";
        luz.style.left = (posPx - 30) + "px";

        ponto.style.boxShadow = "0 0 15px #ff7a00";

        i++;
        setTimeout(animar, 1200);

      }, 800);
    }

    animar();

  });
}

timelineCarros();
    
    
    // =====================================================
// 🏁 HALL DA FAMA RED BULL
// =====================================================

const bg1 = document.querySelector(".bg1-redbull");
const bg2 = document.querySelector(".bg2-redbull");

const cards = document.querySelectorAll(".hall-card-redbull");

if(bg1 && bg2 && cards.length > 0){

  let current = bg1;
  let next = bg2;

  function changeBackground(img){

    if(!img) return;

    next.style.backgroundImage = `url('${img}')`;

    next.classList.add("active");

    current.classList.remove("active");

    let temp = current;

    current = next;
    next = temp;
  }

  changeBackground(cards[0].dataset.bg);

  cards.forEach(card => {

    const img = card.dataset.bg;

    card.addEventListener("mouseenter", () => {
      changeBackground(img);
    });

    card.addEventListener("click", () => {

      cards.forEach(c => {
        c.classList.remove("active");
      });

      card.classList.add("active");

      changeBackground(img);

    });

  });

}
    const hall = document.querySelector(".hall-redbull");
const bg = document.querySelector(".bg-hall-redbull");

if(hall && bg){

bg.addEventListener("click", ()=>{

hall.classList.toggle("showcase");

});

}

const carsDataRedbull = {

  "2005s": {
    image:"hallred/rb1.png",
    name:"Red Bull RB1",
    engine:"Cosworth TJ2005 V10",
    power:"~900 HP",
    year:"2005",
    driver:"Coulthard <br> Klien"
  },

  "2010s": {
    image:"titulosred/rb6.png",
    name:"Red Bull RB6",
    engine:"Renault RS27 V8",
    power:"~750 HP",
    year:"2010",
    driver:"Vettel <br> Webber"
  },

  "2013s": {
    image:"titulosred/rb9.png",
    name:"Red Bull RB9",
    engine:"Renault RS27 V8",
    power:"~750 HP",
    year:"2013",
    driver:"Vettel <br> Webber"
  },

  "2021s": {
    image:"hallred/rb16b.png",
    name:"Red Bull RB16B",
    engine:"Honda RA621H",
    power:"~1000 HP",
    year:"2021",
    driver:"Verstappen <br> Pérez"
  },

  "2025s": {
    image:"hallred/rb21.png",
    name:"Red Bull RB21",
    engine:"Honda RBPT Hybrid",
    power:"~1050 HP",
    year:"2025",
    driver:"Verstappen <br> Tsunoda"
  }

};

function changeDecadeRedbull(decade){

  const section = document.getElementById("redbullEvolution");
  const img = document.getElementById("carImage-redbull");

  img.style.opacity = 0;
  img.style.transform = "scale(.85)";

  section.classList.remove(
    "bg-2005s",
    "bg-2010s",
    "bg-2013s",
    "bg-2021s",
    "bg-2025s"
  );

  section.classList.add(`bg-${decade}`);

  setTimeout(() => {

    const data = carsDataRedbull[decade];

    if(!data) return;

    img.src = data.image;

    document.getElementById("carName-redbull").innerText = data.name;
    document.getElementById("carEngine-redbull").innerText = data.engine;
    document.getElementById("carPower-redbull").innerText = data.power;
    document.getElementById("carYear-redbull").innerText = data.year;
    document.getElementById("carDriver-redbull").innerHTML = data.driver;

    img.style.opacity = 1;
    img.style.transform = "scale(1)";

  },250);

}

window.changeDecadeRedbull = changeDecadeRedbull;
    

  // =====================================================
  // 🚀 INIT
  // =====================================================

  window.addEventListener("load", () => {
    mostrarEra(0);
  });

});

function formatarResultadoF1(posicaoText) {

  if (!posicaoText) return "—";

  const mapa = {
    "R": "DNF",
    "W": "DNS",
    "PR": "DNF",
    "PW": "DNS",
    "D": "DSQ",
    "E": "DNF"
  };

  return mapa[posicaoText] || posicaoText;
}


async function carregarTemporadaRedbull() {

  try {

    /* =====================
       CONSTRUTORES
    ===================== */

    const standingsReq = await fetch(
      "https://api.jolpi.ca/ergast/f1/2026/constructorstandings.json"
    );

    const standings = await standingsReq.json();

    const construtores =
      standings?.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings || [];

    const redbull = construtores.find(
      e => e?.Constructor?.constructorId === "red_bull"
    );

    if (redbull) {

      document.getElementById("posicaoRedbull").innerText =
        redbull.position || "—";

      document.getElementById("pontosRedbull").innerText =
        redbull.points || "0";

      document.getElementById("totalTabelaRedbull").innerText =
        redbull.points || "0";
    }


    /* =====================
       RESULTADOS DA EQUIPE
    ===================== */

    const resultadosReq = await fetch(
      "https://api.jolpi.ca/ergast/f1/2026/constructors/red_bull/results.json"
    );

    const resultados = await resultadosReq.json();

    const corridas =
      resultados?.MRData?.RaceTable?.Races || [];

    corridas.sort(
      (a, b) =>
        Number(a.round || 0) -
        Number(b.round || 0)
    );


    /* =====================
       CABEÇALHO
    ===================== */

    const cabecalhoHadjar =
      document.querySelector(".resultados-redbull th:nth-child(4)");

    if (cabecalhoHadjar) {
      cabecalhoHadjar.innerText = "Hadjar / Lawson";
    }


    /* =====================
       DADOS
    ===================== */

    let html = "";

    let podios = 0;
    let top5 = 0;
    let vitorias = 0;

    let evolucao = [];
    let acumulado = 0;

    let gridTotal = 0;
    let gridCount = 0;


    /* =====================
       PROCESSAR CADA GP
    ===================== */

    corridas.forEach((corrida) => {

      let verstappen = "—";
      let hadjar = "—";

      let pontosEquipe = 0;

      const results = corrida?.Results || [];

      results.forEach((r) => {

        const nome = r?.Driver?.familyName || "";
        const pontos = Number(r?.points || 0);
        const pos = Number(r?.position || 0);
        const grid = Number(r?.grid || 0);


        /* =========================
           PONTOS E ESTATÍSTICAS
        ========================= */

        pontosEquipe += pontos;

        if (grid > 0) {
          gridTotal += grid;
          gridCount++;
        }

        if (pos === 1) vitorias++;

        if (pos >= 1 && pos <= 3) {
          podios++;
        }

        if (pos >= 1 && pos <= 5) {
          top5++;
        }


        /* =========================
           PILOTOS
        ========================= */

        if (nome === "Verstappen") {

          verstappen =
            formatarResultadoF1(
              r?.positionText
            );

        }

        else if (nome === "Hadjar") {

          hadjar =
            formatarResultadoF1(
              r?.positionText
            );

        }

        else if (nome === "Lawson") {

          hadjar =
            `🇳🇿 ${formatarResultadoF1(
              r?.positionText
            )}`;

        }

      });


      /* =========================
         ACUMULADO
      ========================= */

      acumulado += pontosEquipe;

      evolucao.push({
        round: corrida?.round || 0,
        value: acumulado
      });


      /* =========================
         TABELA
      ========================= */

      html += `
        <tr>
          <td>${corrida?.round || "—"}</td>
          <td>${corrida?.raceName || "—"}</td>
          <td>${verstappen}</td>
          <td>${hadjar}</td>
        </tr>
      `;

    });


    /* =====================
       AVG GRID
    ===================== */

    const avgGrid =
      gridCount > 0
        ? (gridTotal / gridCount).toFixed(1)
        : "—";

    document.getElementById(
      "avgGridRedbull"
    ).innerText = avgGrid;


    /* =====================
       TABELA
    ===================== */

    document.getElementById(
      "tabelaRedbull"
    ).innerHTML = html;


    /* =====================
       ESTATÍSTICAS
    ===================== */

    document.getElementById(
      "podiosRedbull"
    ).innerText = podios;

    document.getElementById(
      "vitoriasRedbull"
    ).innerText = vitorias;

    document.getElementById(
      "top5Redbull"
    ).innerText = top5;


    /* =====================
       GRÁFICO
    ===================== */

    const linha =
      document.getElementById(
        "linhaGraficoRedbull"
      );

    const svg =
      linha?.closest("svg");


    if (
      !linha ||
      !svg ||
      evolucao.length === 0
    ) {
      return;
    }


    const max =
      Math.max(
        ...evolucao.map(
          e => e.value || 0
        ),
        1
      );


    let points = "";
    let circles = "";

    const width = 900;
    const height = 300;


    evolucao.forEach((p, i) => {

      const x =
        (
          i /
          Math.max(
            evolucao.length - 1,
            1
          )
        ) * width;

      const y =
        height -
        (
          (p.value || 0) /
          max
        ) *
        (height - 40);


      points +=
        `${x},${y} `;


      circles += `
        <circle
          cx="${x}"
          cy="${y}"
          r="6"
          fill="#00e5ff">
        </circle>
      `;

    });


    linha.setAttribute(
      "points",
      points
    );


    svg
      .querySelectorAll("circle")
      .forEach(
        el => el.remove()
      );


    svg.insertAdjacentHTML(
      "beforeend",
      circles
    );


  } catch (err) {

    console.error(
      "Erro Red Bull:",
      err
    );

  }

}


/* =====================
   INICIAR
===================== */

window.addEventListener(
  "load",
  () => {

    carregarTemporadaRedbull();

    setInterval(
      carregarTemporadaRedbull,
      60000
    );

  }
);



// =========================================
// PAINEL DE NOTÍCIAS redbull
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiasredbull");
const fecharNoticias = document.getElementById("fecharNoticiasredbull");

const atualizarNoticias =
document.getElementById("atualizarNoticiasredbull");


const painelNoticias = document.getElementById("painelNoticiasredbull");
const overlayNoticias = document.getElementById("overlayNoticiasredbull");

const listaNoticias = document.getElementById("listaNoticiasredbull");




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
        <div class="loading-noticias-redbull">

            <div class="spinner-redbull"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{

        const resposta = await fetch(

`https://gnews.io/api/v4/search?q=Red Bull Racing F1&lang=en&country=gb&max=10&apikey=${API_KEY}`
        );

        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-redbull">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-redbull">

                <img
                src="${noticia.image || 'icons/redbull.png'}"
                alt="Notícia">

                <div class="card-conteudo-redbull">

                    <div class="data-noticia-redbull">

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

        <div class="loading-noticias-redbull">

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

/*==================================================
        redbull TEAMMATE
==================================================*/



const redbullSeason = 2026;


/* API */

const jolpicaAPI =
"https://api.jolpi.ca/ergast/f1";



/*==============================================
        PILOTOS redbull
==============================================*/


const redbullDrivers = {


    Verstappen:{

        number:3,
        name:"Max Verstappen"

    },


    Hadjar:{

        number:6,
        name:"Isack Hadjar"

    }


};




/*==============================================
        ESTATÍSTICAS
==============================================*/


let redbullStats = {


    Verstappen:{


        wins:0,
        podiums:0,
        poles:0,
        fastest:0,
        points:0


    },


    Hadjar:{


        wins:0,
        podiums:0,
        poles:0,
        fastest:0,
        points:0


    }


};




/*==============================================
        BANCO DE DADOS
==============================================*/


let redbullRaces = [];




/*==============================================
        CACHE API
==============================================*/


let jolpicaCache = {};




/*==============================================
        FETCH SEGURO
==============================================*/


async function jolpicaFetch(url){



    if(jolpicaCache[url]){

        return jolpicaCache[url];

    }



    try{


        const response =
        await fetch(url);



        if(!response.ok){


            console.log(
                "Erro Jolpica:",
                response.status,
                url
            );


            return null;


        }



        const data =
        await response.json();



        jolpicaCache[url] = data;



        // pequena pausa para não sobrecarregar




        return data;



    }catch(error){



        console.log(
            "Erro conexão API:",
            error
        );


        return null;


    }


}




function delay(ms){


    return new Promise(resolve =>

        setTimeout(resolve,ms)

    );


}





/*==============================================
        BUSCAR CALENDÁRIO
==============================================*/


async function getredbullCalendar(){



    const url =

    `${jolpicaAPI}/${redbullSeason}.json`;



    const data =

    await jolpicaFetch(url);



    if(!data){

        console.log(
            "Sem calendário"
        );

        return [];

    }



    const races =

    data.MRData.RaceTable.Races;



    redbullRaces = races;



    console.log(

        "Corridas encontradas:",

        races.length

    );



    return races;



}





/*==============================================
        BUSCAR RESULTADOS DE UMA CORRIDA
==============================================*/


async function getRaceResults(round){



    const url =

    `${jolpicaAPI}/${redbullSeason}/${round}/results.json`;



    const data =

    await jolpicaFetch(url);



    if(!data){

        return [];

    }



    const races =

    data.MRData.RaceTable.Races;



    if(!races.length){

        return [];

    }



    return races[0].Results;



}


/*==================================================
        redbull TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 2
==================================================*/



/*==============================================
        IDENTIFICAR PILOTO
==============================================*/


function getredbullDriver(driverId){


    if(driverId === "max_verstappen"){

        return "Verstappen";

    }


    if(driverId === "hadjar"){

        return "Hadjar";

    }


    return null;


}






/*==============================================
        RESET ESTATÍSTICAS
==============================================*/


function resetredbullStats(){


    redbullStats = {


        Verstappen:{


            wins:0,
            podiums:0,
            poles:0,
            fastest:0,
            points:0


        },


        Hadjar:{


            wins:0,
            podiums:0,
            poles:0,
            fastest:0,
            points:0


        }


    };


}







/*==============================================
        CALCULAR RESULTADOS DAS CORRIDAS
==============================================*/


async function calculateRaceResults(){



    for(const race of redbullRaces){



        const round = race.round;



        const results =

        await getRaceResults(round);



        if(!results.length)
            continue;



        console.log(

            "Corrida:",
            race.raceName,
            results

        );





        for(const result of results){



            const driverId =

            result.Driver.driverId;



            const name =

            getredbullDriver(driverId);



            if(!name)
                continue;




            const stats =

            redbullStats[name];




            const position =

            Number(result.position);





            /*========================
                POSIÇÃO
            ========================*/


            if(position === 1){

                stats.wins++;

            }



            if(position <= 3){

                stats.podiums++;

            }





            /*========================
                PONTOS
            ========================*/


            stats.points +=

            Number(result.points || 0);







/*========================
    FASTEST LAP
========================*/

if(result.FastestLap){

    if(result.FastestLap.rank === "1"){

        stats.fastest++;

    }

}
					


        }



    }



}







/*==============================================
        CALCULAR POLES
==============================================*/


async function calculatePoles(){



    for(const race of redbullRaces){



        const round = race.round;



        const url =

        `${jolpicaAPI}/${redbullSeason}/${round}/qualifying.json`;



        const data =

        await jolpicaFetch(url);



        if(!data)
            continue;



        const races =

        data.MRData.RaceTable.Races;



        if(!races.length)
            continue;



        const results =

        races[0].QualifyingResults;




        for(const result of results){



            if(
            result.position !== "1"
            )
            continue;



            const driverId =

            result.Driver.driverId;



            const name =

            getredbullDriver(driverId);



            if(name){

                redbullStats[name].poles++;

            }



        }



    }



}







/*==============================================
        BUSCAR PONTOS OFICIAIS DO CAMPEONATO
==============================================*/


async function getOfficialChampionship(){



    const url =

    `${jolpicaAPI}/${redbullSeason}/driverStandings.json`;



    const data =

    await jolpicaFetch(url);



    if(!data)
        return;



    const standings =

    data.MRData.StandingsTable.StandingsLists;



    if(!standings.length)
        return;




    const drivers =

    standings[0].DriverStandings;




    for(const driver of drivers){



        const name =

        getredbullDriver(
            driver.Driver.driverId
        );



        if(!name)
            continue;



        redbullStats[name].points =

        Number(driver.points);



    }



    console.log(

        "Pontos oficiais:",
        redbullStats

    );


}







/*==============================================
        EXECUTAR CÁLCULO COMPLETO
==============================================*/


async function calculateredbullBattle(){



    resetredbullStats();



    await calculateRaceResults();



    await calculatePoles();



    await getOfficialChampionship();




    console.log(

        "Estatísticas finais:",
        redbullStats

    );



    updateredbullBattle();



}

/*==================================================
        redbull TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 3
==================================================*/



/*==============================================
        ATUALIZAR VALORES
==============================================*/


function setredbullValue(id,value){


    const element =

    document.getElementById(id);



    if(element){

        element.textContent = value;

    }


}






/*==============================================
        ATUALIZAR BARRAS
==============================================*/

function updateBars(

    left,
    right,
    leftID,
    rightID

){

    const leftBar =
    document.getElementById(leftID);

    const rightBar =
    document.getElementById(rightID);


    if(!leftBar || !rightBar)
        return;


    const total = left + right;


    /*==============================
        OS DOIS SÃO ZERO
    ==============================*/

    if(total === 0){

        leftBar.style.setProperty(
            "--size",
            "0%"
        );

        rightBar.style.setProperty(
            "--size",
            "0%"
        );

        return;

    }


    /*==============================
        CALCULAR PROPORÇÃO
    ==============================*/

    const leftPercent =
        (left / total) * 100;


    const rightPercent =
        (right / total) * 100;


    /*==============================
        APLICAR NAS BARRAS
    ==============================*/

    leftBar.style.setProperty(
        "--size",
        leftPercent + "%"
    );


    rightBar.style.setProperty(
        "--size",
        rightPercent + "%"
    );

}



/*==============================================
        ATUALIZAR CARD redbull
==============================================*/


function updateredbullBattle(){



    const Verstappen =

    redbullStats.Verstappen;



    const Hadjar =

    redbullStats.Hadjar;





    // VITÓRIAS


    setredbullValue(
        "redbullWinsLeft",
        Verstappen.wins
    );


    setredbullValue(
        "redbullWinsRight",
        Hadjar.wins
    );


    updateBars(
        Verstappen.wins,
        Hadjar.wins,
        "redbullBarWinsLeft",
        "redbullBarWinsRight"
    );





    // PÓDIOS


    setredbullValue(
        "redbullPodiumsLeft",
        Verstappen.podiums
    );


    setredbullValue(
        "redbullPodiumsRight",
        Hadjar.podiums
    );


    updateBars(
        Verstappen.podiums,
        Hadjar.podiums,
        "redbullBarPodiumsLeft",
        "redbullBarPodiumsRight"
    );






    // POLES


    setredbullValue(
        "redbullPolesLeft",
        Verstappen.poles
    );


    setredbullValue(
        "redbullPolesRight",
        Hadjar.poles
    );


    updateBars(
        Verstappen.poles,
        Hadjar.poles,
        "redbullBarPolesLeft",
        "redbullBarPolesRight"
    );






    // FASTEST LAPS


    setredbullValue(
        "redbullFastLeft",
        Verstappen.fastest
    );


    setredbullValue(
        "redbullFastRight",
        Hadjar.fastest
    );


    updateBars(
        Verstappen.fastest,
        Hadjar.fastest,
        "redbullBarFastLeft",
        "redbullBarFastRight"
    );







    // PONTOS


    setredbullValue(
        "redbullPointsLeft",
        Verstappen.points
    );


    setredbullValue(
        "redbullPointsRight",
        Hadjar.points
    );


    updateBars(
        Verstappen.points,
        Hadjar.points,
        "redbullBarPointsLeft",
        "redbullBarPointsRight"
    );



}








/*==============================================
        TEMPORADA NO CARD
==============================================*/


function updateSeason(){


    const element =

    document.getElementById(
        "redbullSeason"
    );



    if(element){


        element.textContent =

        "TEMPORADA " + redbullSeason;


    }


}








/*==============================================
        SISTEMA COMPLETO
==============================================*/


async function loadredbullBattle(){



    console.log(

        "Iniciando redbull Battle..."

    );




    await getredbullCalendar();




    await calculateredbullBattle();




    updateSeason();




    updateredbullBattle();





    console.log(

        "Sistema redbull carregado"

    );



}








/*==============================================
        INICIAR
==============================================*/


loadredbullBattle();








/*==============================================
        ATUALIZAÇÃO AUTOMÁTICA
==============================================*/


setInterval(()=>{


    console.log(

        "Atualizando redbull Battle..."

    );



    loadredbullBattle();



},1800000);


  // =====================================================
  // 📊 CHART (COMPARAÇÃO)
  // =====================================================

document.addEventListener("DOMContentLoaded", () => {


    /*==============================================
            DADOS HISTÓRICOS
    ==============================================*/

    const driverData = {

      verstappen: {
        2015:49, 
        2016:204, 
        2017:168, 
        2018:249,
        2019:278, 
        2020:214, 
        2021:395,
        2022:454, 
        2023:575, 
        2024:437, 
        2025:421
      },
      hadjar: {
        2025:51
      }
  };



	
    /*==============================================
            ELEMENTOS
    ==============================================*/

    const chart =
        document.getElementById(
            "evolutionChart"
        );


    const buttons =
        document.querySelectorAll(
            ".evolution-mode-redbull"
        );


    const yLabels =
        document.querySelector(
            ".chart-y-labels-redbull"
        );


    if (!chart)
        return;


    /*==============================================
            CONFIGURAÇÃO
    ==============================================*/

    let MAX_POINTS = 500;


    /*
        Margens internas do gráfico.

        Isso impede que:
        - pontos saiam pela lateral
        - números sejam cortados
        - anos fiquem fora
    */

    const PADDING_LEFT = 38;
    const PADDING_RIGHT = 38;

    const PADDING_TOP = 18;
    const PADDING_BOTTOM = 30;


    /*
        Distância horizontal entre
        verstappen e hadjar nos anos finais.
    */

    const DRIVER_SEPARATION = 22;


    /*==============================================
            API - 2026
    ==============================================*/

    async function load2026Points() {

        try {

            const response =
                await fetch(
                    "https://api.openf1.org/v1/championship_drivers?session_key=latest"
                );


            if (!response.ok) {

                throw new Error(
                    "Erro HTTP " +
                    response.status
                );

            }


            const data =
                await response.json();


            data.forEach(driver => {

                const number =
                    Number(
                        driver.driver_number
                    );


                const points =
                    Number(
                        driver.points_current
                    ) || 0;


                if (number === 3) {

                    driverData.verstappen[2026] =
                        points;

                }


                if (number === 6) {

                    driverData.hadjar[2026] =
                        points;

                }

            });


            /*======================================
                    ATUALIZAR ESCALA
            ======================================*/

            const allPoints = [

                ...Object.values(
                    driverData.verstappen
                ),

                ...Object.values(
                    driverData.hadjar
                )

            ];


            const highest =
                Math.max(
                    ...allPoints
                );


            MAX_POINTS =
                Math.max(
                    500,
                    Math.ceil(
                        highest / 50
                    ) * 50
                );


            renderActiveChart();

        }


        catch (error) {

            console.error(
                "Erro ao carregar pontos de 2026:",
                error
            );

        }

    }


    /*==============================================
            TEMPORADAS
    ==============================================*/

    function getSeasons(mode) {

        let seasons = [];


        if (mode === "verstappen") {

            seasons =
                Object.keys(
                    driverData.verstappen
                );

        }


        else if (mode === "hadjar") {

            seasons =
                Object.keys(
                    driverData.hadjar
                );

        }


        else {

            seasons = [

                ...new Set([

                    ...Object.keys(
                        driverData.verstappen
                    ),

                    ...Object.keys(
                        driverData.hadjar
                    )

                ])

            ];

        }


        return seasons.sort(
            (a, b) =>
                Number(a) - Number(b)
        );

    }


    /*==============================================
            POSIÇÃO Y
    ==============================================*/

    function getY(
        value,
        height
    ) {

        const graphHeight =
            height -
            PADDING_TOP -
            PADDING_BOTTOM;


        return (
            PADDING_TOP +
            graphHeight -
            (
                value /
                MAX_POINTS
            ) *
            graphHeight
        );

    }



/*==============================================
        POSIÇÃO Y DO PILOTO
==============================================*/

function getDriverY(
    driver,
    year,
    value,
    height
) {

    let y =
        getY(
            value,
            height
        );


    /*
        Guarda a posição original.
        A separação será aplicada somente
        quando os dois pilotos estiverem
        muito próximos.
    */

    const otherDriver =
        driver === "verstappen"
            ? "hadjar"
            : "verstappen";


    const otherValue =
        driverData[otherDriver][year];


    if (
        otherValue !== undefined &&
        otherValue !== null
    ) {

        const otherY =
            getY(
                Number(otherValue),
                height
            );


        const distance =
            Math.abs(
                y - otherY
            );


        /*
            Distância mínima entre os pontos.
        */

        const MIN_DISTANCE = 45;


        /*
            Se estiverem muito próximos,
            separa os dois automaticamente.
        */

        if (
            distance < MIN_DISTANCE
        ) {

            if (
                driver === "verstappen"
            ) {

                y -=
                    (MIN_DISTANCE - distance) / 2;

            }

            else {

                y +=
                    (MIN_DISTANCE - distance) / 2;

            }

        }

    }


    return y;

}

	
    /*==============================================
            POSIÇÃO X BASE
    ==============================================*/

    function getBaseX(
        index,
        total,
        width
    ) {

        const usableWidth =
            width -
            PADDING_LEFT -
            PADDING_RIGHT;


        if (total <= 1) {

            return width / 2;

        }


        return (
            PADDING_LEFT +
            (
                index /
                (total - 1)
            ) *
            usableWidth
        );

    }


    /*==============================================
            POSIÇÃO X DO PILOTO
    ==============================================*/

    function getDriverX(
        driver,
        year,
        index,
        total,
        width
    ) {

        const baseX =
            getBaseX(
                index,
                total,
                width
            );


        /*
            Só separamos os pontos de 2025
            e 2026.

            A linha e o ponto usam
            EXATAMENTE a mesma posição.
        */

        if (
            year === 2025 ||
            year === 2026
        ) {

            if (driver === "hadjar") {

                return baseX -
                    DRIVER_SEPARATION;

            }


            if (driver === "verstappen") {

                return baseX +
                    DRIVER_SEPARATION;

            }

        }


        return baseX;

    }


    /*==============================================
            LIMITAR POSIÇÃO DENTRO DO GRÁFICO
    ==============================================*/

    function clamp(
        value,
        min,
        max
    ) {

        return Math.max(
            min,
            Math.min(
                max,
                value
            )
        );

    }


    /*==============================================
            RENDERIZAR GRÁFICO
    ==============================================*/

    function renderChart(
        mode = "both"
    ) {


        chart.innerHTML = "";


        const seasons =
            getSeasons(mode);


        if (!seasons.length)
            return;


        const width =
            chart.clientWidth ||
            700;


        const height =
            chart.clientHeight ||
            400;


        /*==========================================
                NÚMEROS DA ESCALA
        ==========================================*/

        if (yLabels) {

            yLabels.innerHTML = "";


            const steps = 10;


            const stepValue =
                MAX_POINTS /
                steps;


            for (
                let i = 0;
                i <= steps;
                i++
            ) {

                const span =
                    document.createElement(
                        "span"
                    );


                const value =
                    MAX_POINTS -
                    (
                        stepValue * i
                    );


                span.textContent =
                    Math.round(
                        value
                    );


                yLabels.appendChild(
                    span
                );

            }

        }


        /*==========================================
                SVG
        ==========================================*/

        const svg =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
            );


        svg.classList.add(
            "evolution-svg-redbull"
        );


        svg.setAttribute(
            "viewBox",
            `0 0 ${width} ${height}`
        );


        svg.setAttribute(
            "preserveAspectRatio",
            "none"
        );


        /*==========================================
                GRADIENTES
        ==========================================*/

        const defs =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "defs"
            );


        const nGradient =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "linearGradient"
            );


        nGradient.id =
            "verstappenGradient";


        nGradient.setAttribute(
            "x1",
            "0"
        );

        nGradient.setAttribute(
            "y1",
            "0"
        );

        nGradient.setAttribute(
            "x2",
            "0"
        );

        nGradient.setAttribute(
            "y2",
            "1"
        );


        const nStop1 =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "stop"
            );


        nStop1.setAttribute(
            "offset",
            "0%"
        );

        nStop1.setAttribute(
            "stop-color",
            "#1e41ff"
        );

        nStop1.setAttribute(
            "stop-opacity",
            ".7"
        );


        const nStop2 =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "stop"
            );


        nStop2.setAttribute(
            "offset",
            "100%"
        );

        nStop2.setAttribute(
            "stop-color",
            "#d6ba00"
        );

        nStop2.setAttribute(
            "stop-opacity",
            "0"
        );


        nGradient.appendChild(
            nStop1
        );

        nGradient.appendChild(
            nStop2
        );


        const pGradient =
            nGradient.cloneNode(
                true
            );


        pGradient.id =
            "hadjarGradient";


        defs.appendChild(
            nGradient
        );

        defs.appendChild(
            pGradient
        );


        svg.appendChild(
            defs
        );


        /*==========================================
                GRID VERTICAL
        ==========================================*/

        const grid =
            document.createElement(
                "div"
            );


        grid.className =
            "chart-grid-redbull";


        seasons.forEach(() => {

            const line =
                document.createElement(
                    "div"
                );


            line.className =
                "chart-grid-line-redbull";


            grid.appendChild(
                line
            );

        });


        chart.appendChild(
            grid
        );


        /*==========================================
                LINHA DOS PILOTOS
        ==========================================*/

        function createDriverLine(
            driver,
            className
        ) {


            const valid = [];


            seasons.forEach(
                (year, index) => {

                    const value =
                        driverData[
                            driver
                        ][year];


                    if (
                        value !== undefined &&
                        value !== null
                    ) {

                        valid.push({

                            year:
                                Number(year),

                            index:
                                index,

                            value:
                                Number(value)

                        });

                    }

                }
            );


            if (!valid.length)
                return;


            /*======================================
                    CONSTRUIR LINHA
            ======================================*/

            let pathData = "";


            valid.forEach(
                (item, index) => {


                    /*
                        IMPORTANTE:

                        A linha usa exatamente
                        a mesma posição X do ponto.
                    */

                    const x =
                        getDriverX(
                            driver,
                            item.year,
                            item.index,
                            seasons.length,
                            width
                        );


                  const y =
    getDriverY(
        driver,
        item.year,
        item.value,
        height
    );

									

                    if (index === 0) {

                        pathData +=
                            `M ${x} ${y}`;

                    }

                    else {

                        pathData +=
                            ` L ${x} ${y}`;

                    }

                }
            );


            /*======================================
                    PATH
            ======================================*/

            const path =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                );


            path.setAttribute(
                "d",
                pathData
            );


            path.classList.add(
                className
            );


            svg.appendChild(
                path
            );


            /*======================================
                    PONTOS
            ======================================*/

            valid.forEach(
                (item, index) => {


                    const x =
                        getDriverX(
                            driver,
                            item.year,
                            item.index,
                            seasons.length,
                            width
                        );




									const y =
    getDriverY(
        driver,
        item.year,
        item.value,
        height
    );
									
                    /*================================
                            PONTO
                    =================================*/

                    const circle =
                        document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "circle"
                        );


                    circle.setAttribute(
                        "cx",
                        x
                    );


                    circle.setAttribute(
                        "cy",
                        y
                    );


                    circle.setAttribute(
                        "r",
                        4.5
                    );


                    circle.classList.add(
                        "chart-point-redbull"
                    );


                    if (
                        driver === "hadjar"
                    ) {

                        circle.classList.add(
                            "hadjar-redbull"
                        );

                    }


                    circle.style.animationDelay =
                        `${index * .08}s`;


                    svg.appendChild(
                        circle
                    );


                    /*================================
                            NÚMERO
                    =================================*/

                    const valueText =
                        document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "text"
                        );


                    let textX = x;


                    let textY =
                        y - 12;


                    /*================================
                            2025
                    =================================*/

                    if (
                        item.year === 2025
                    ) {

                        /*
                            verstappen fica acima.
                            hadjar também fica acima,
                            mas para o outro lado.
                        */

                        if (
                            driver === "verstappen"
                        ) {

                            textX =
                                x - 8;

                            textY =
                                y - 12;

                        }


                        else {

                            textX =
                                x + 8;

                            textY =
                                y - 5;

                        }

                    }


                    /*================================
                            2026
                    =================================*/

     if (
         item.year === 2026
                    ) {

                        /*
                            verstappen:
                            sempre acima.

                            hadjar:
                            sempre abaixo.

                            Assim os dois números
                            não ficam grudados.
                        */

    if (
     driver === "verstappen"
       ) {

   textX =
        x - 8;

   textY =
     y - 12;
 }


 else {

  textX =
    x + 8;

    textY =
      y - 12;

   }

    }


                    /*================================
                            LIMITAR TEXTO
                            DENTRO DO SVG
                    =================================*/

                    textX =
                        clamp(
                            textX,
                            18,
                            width - 18
                        );


                    textY =
                        clamp(
                            textY,
                            14,
                            height - 8
                        );


                    valueText.setAttribute(
                        "x",
                        textX
                    );


                    valueText.setAttribute(
                        "y",
                        textY
                    );


                    valueText.classList.add(
                        "chart-value-redbull"
                    );


                    valueText.textContent =
                        item.value;


                    svg.appendChild(
                        valueText
                    );

                }
            );

        }


        /*==========================================
                verstappen
        ==========================================*/

        if (
            mode === "both" ||
            mode === "verstappen"
        ) {

            createDriverLine(
                "verstappen",
                "verstappen-path-redbull"
            );

        }


        /*==========================================
                hadjar
        ==========================================*/

        if (
            mode === "both" ||
            mode === "hadjar"
        ) {

            createDriverLine(
                "hadjar",
                "hadjar-path-redbull"
            );

        }


        /*==========================================
                ANOS
        ==========================================*/

        seasons.forEach(
            (year, index) => {


                const x =
                    getBaseX(
                        index,
                        seasons.length,
                        width
                    );


                const text =
                    document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "text"
                    );


                text.setAttribute(
                    "x",
                    x
                );


                text.setAttribute(
                    "y",
                    height - 5
                );


                text.classList.add(
                    "chart-year-redbull"
                );


                text.textContent =
                    year;


                svg.appendChild(
                    text
                );

            }
        );


        chart.appendChild(
            svg
        );

    }


    /*==============================================
            GRÁFICO ATIVO
    ==============================================*/

    function renderActiveChart() {

        const active =
            document.querySelector(
                ".evolution-mode-redbull.active"
            );


        renderChart(
            active
                ? active.dataset.mode
                : "both"
        );

    }


    /*==============================================
            BOTÕES
    ==============================================*/

    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    buttons.forEach(
                        btn =>
                            btn.classList.remove(
                                "active"
                            )
                    );


                    button.classList.add(
                        "active"
                    );


                    renderChart(
                        button.dataset.mode
                    );

                }
            );

        }
    );


    /*==============================================
            PRIMEIRO GRÁFICO
    ==============================================*/

    renderChart(
        "both"
    );


    /*==============================================
            CARREGAR 2026
    ==============================================*/

    load2026Points();


    /*==============================================
            ATUALIZAR 2026
            A CADA 1 MINUTO
    ==============================================*/

    setInterval(
        load2026Points,
        60000
    );


    /*==============================================
            RESPONSIVIDADE
    ==============================================*/

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        renderActiveChart();

                    },
                    150
                );

        }
    );

});