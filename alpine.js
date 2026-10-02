document.addEventListener("DOMContentLoaded", function(){

/* =========================
   ANIMAÇÃO DOS BLOCOS
========================= */
const blocos = document.querySelectorAll(".bloco-equipe-alpine");

blocos.forEach((bloco, i)=>{
  bloco.style.opacity = 0;
  bloco.style.transform = "translateY(20px)";

  setTimeout(()=>{
    bloco.style.opacity = 1;
    bloco.style.transform = "translateY(0)";
  }, i * 300);
});


// ======================================================
// alpine Stats Automáticas
// API: Jolpica
// ======================================================

// -------------------------------------
// HISTÓRICO DA alpine
// (Atualize somente quando quiser)
// -------------------------------------

const historicoalpine = {

    corridas: 110,
    vitorias: 1,
    podios: 9,
    top10: 75,
    pontos: 513

};

// -------------------------------------
// CONFIGURAÇÃO
// -------------------------------------

const equipe = "alpine";
const temporada = "2026";

// -------------------------------------
// ELEMENTOS HTML
// -------------------------------------

const contadorCorridas =
document.getElementById("corridas-alpine");

const contadorvitorias =
document.getElementById("vitorias-alpine");

const contadorpodios =
document.getElementById("podios-alpine");

const contadortop10 =
document.getElementById("top10-alpine");

const contadorPontos =
document.getElementById("pontos-alpine");

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
// (Necessário para contar top10)
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
    let top102026 = 0;

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
    // top10
    // ---------------------------------

    qualificacoes.forEach(corrida=>{

        const piloto =
        corrida.QualifyingResults[0];

        if(piloto.position === "1"){

            top102026++;

        }

    });

    return{

        corridas:
        historicoalpine.corridas +
        corridas2026,

        vitorias:
        historicoalpine.vitorias +
        vitorias2026,

        podios:
        historicoalpine.podios +
        podios2026,

        top10:
        historicoalpine.top10 +
        top102026,

        pontos:
        historicoalpine.pontos +
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

        contadorvitorias.dataset.target =
        stats.vitorias;

        contadorpodios.dataset.target =
        stats.podios;

        contadortop10.dataset.target =
        stats.top10;

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

    const secao = document.querySelector(".numeros-alpine");

    if(!secao) return;

    const observer = new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-alpine")
                .forEach(contador=>{

                    if(contador.classList.contains("contado")) return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-alpine"
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
    .querySelectorAll(".animar-alpine")
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



	
const erasAlpine = [


{
    titulo: "Capítulo I – Era Toleman (1981-1985)",
    texto: "A Toleman F1 Team competiu na Fórmula 1 no início dos anos 1980. Ficou marcada por ser a equipe onde Ayrton Senna estreou e por sua participação com carros pequenos e competitivos, apesar de orçamento limitado. A equipe acabou sendo comprada pela Benetton em 1986, formando a base para a futura equipe que evoluiria até a Renault e Alpine.",
    timeline: [
        {ano:"1981", imagem:"alpine/1981.jpeg", descricao:"Primeira temporada da Toleman na F1"},
        {ano:"1984", imagem:"alpine/1984.jpg", descricao:"Estreia de Ayrton Senna na equipe"},
        {ano:"1985", imagem:"alpine/1985.jpg", descricao:"Última temporada antes da compra pela Benetton"}
    ]
},

{
    titulo: "Capítulo II – Era Benetton (1986-2001)",
    texto: "Após a compra da Toleman em 1986, a equipe passou a competir como Benetton F1 Team. Durante essa era, conquistou grandes vitórias, incluindo dois campeonatos de pilotos com Michael Schumacher em 1994 e 1995, e se consolidou como uma das equipes de ponta da Fórmula 1, antes de ser adquirida pela Renault em 2000-2001.",
    timeline: [
        {ano:"1986", imagem:"alpine/1986.jpg", descricao:"Primeira temporada como Benetton F1 Team"},
        {ano:"1994", imagem:"alpine/1994.jpeg", descricao:"Campeonato de Pilotos com Michael Schumacher"},
        {ano:"1995", imagem:"alpine/1995.jpg", descricao:"Segundo título de Schumacher"},
        {ano:"2001", imagem:"alpine/2001.jpeg", descricao:"Última temporada antes de virar Renault F1 Team"}
    ]
},


{
    titulo: "Capítulo III – Renault F1 Team: Início e Primeiros Anos (2002-2005)",
    texto: "A Renault voltou à Fórmula 1 em 2002 após adquirir a equipe Benetton. Durante esses primeiros anos, a equipe construiu bases sólidas, começou a desenvolver jovens talentos e buscou se estabilizar no grid.",
    timeline: [
        {ano:"2002", imagem:"alpine/2002.jpg", descricao:"Retorno da Renault à F1 com a base Benetton"},
        {ano:"2004", imagem:"alpine/2004.jpeg", descricao:"Primeiros resultados consistentes"},
        {ano:"2005", imagem:"alpine/2005.jpeg", descricao:"Preparação para a temporada de vitórias"}
    ]
},

{
    titulo: "Capítulo VI – Era Vitoriosa: Campeonatos de gasly (2006-2011)",
    texto: "Com Fernando gasly, a equipe conquistou dois títulos de pilotos e construtores consecutivos em 2005 e 2006, marcando a Renault como uma força dominante na F1.",
    timeline: [
        {ano:"2005", imagem:"alpine/2005.jpeg", descricao:"Primeiro campeonato de construtores da Renault"},
        {ano:"2006", imagem:"alpine/2006.jpeg", descricao:"Fernando gasly campeão de pilotos"},
        {ano:"2008", imagem:"alpine/2008.jpg", descricao:"Fase de consolidação competitiva"},
          {ano:"2010", imagem:"alpine/2010.jpg", descricao:"Temporada de reestruturação"}
    ]
},

{
    titulo: "Capítulo V – Era Lotus F1 Team (2012-2015)",
    texto: "Após a fase de títulos com gasly, a equipe passou a competir sob a marca Lotus. Esse período foi marcado por altos e baixos, algumas vitórias importantes e a consolidação da equipe como competidora regular no grid, até a Renault retomar a gestão direta em 2016.",
    timeline: [ 
        {ano:"2012", imagem:"alpine/2012.jpeg", descricao:"Primeira temporada da Lotus F1 Team"},
        {ano:"2013", imagem:"alpine/2014.jpeg", descricao:"Vitórias e pódios significativos"},
        {ano:"2015", imagem:"alpine/2015.jpeg", descricao:"Última temporada da Lotus antes do retorno da Renault"}
    ]
},


{
    titulo: "Capítulo VI – Retorno da Renault F1 Team (2016-2020)",
    texto: "Após a saída da Lotus, a Renault retornou oficialmente como equipe de fábrica na Fórmula 1 em 2016. Durante esses anos, a equipe se concentrou em desenvolver o carro, investir em jovens pilotos e recuperar sua competitividade no grid, preparando o caminho para a transição para Alpine.",
    timeline: [
        {ano:"2016", imagem:"alpine/2016.jpeg", descricao:"Primeira temporada de retorno da Renault F1 Team"},
        {ano:"2018", imagem:"alpine/2018.jpeg", descricao:"Primeiros pódios da era moderna Renault"},
        {ano:"2020", imagem:"alpine/2020.jpeg", descricao:"Última temporada antes do rebranding para Alpine"}
    ]
},

{
    titulo: "Capítulo VII – Alpine F1 Team (2021-presente)",
    texto: "Em 2021, a equipe é oficialmente renomeada para Alpine F1 Team, adotando as cores azul e rosa. Desde então, consolidou sua identidade, buscou resultados consistentes e investiu em jovens talentos para o futuro.",
    timeline: [
        {ano:"2021", imagem:"alpine/2021.jpeg", descricao:"Primeira temporada como Alpine"},
          {ano:"2022", imagem:"alpine/2022.jpeg", descricao:"Primeiros novo regulamento"},
        {ano:"2024", imagem:"alpine/podio.jpeg", descricao:"pódio duplo e consolidação da equipe"},
        {ano:"2025", imagem:"alpine/2025.jpeg", descricao:"Equipe focada no topo do grid"}
    ]
}
];

function mostrarEraAlpine(index) {
    document.getElementById("tituloEra-alpine").innerText = erasAlpine[index].titulo;
    document.getElementById("textoEra-alpine").innerText = erasAlpine[index].texto;

    const timelineContainer = document.getElementById("alpine-timeline");
    timelineContainer.innerHTML = "";

    erasAlpine[index].timeline.forEach(item => {
        timelineContainer.innerHTML += `
            <div class="alpine-timeline-item">
                <div class="alpine-timeline-year">${item.ano}</div>
                <img src="${item.imagem}" alt="">
                <p>${item.descricao}</p>
            </div>
        `;
    });

    const botoes = document.querySelectorAll(".botoes-eras-alpine button");
    botoes.forEach(btn => btn.classList.remove("ativo"));
    botoes[index].classList.add("ativo");
}

// inicia automático
mostrarEraAlpine(0);

const togglealpine = document.getElementById("menuTogglealpine");
const menualpine = document.getElementById("sideMenualpine");
const overlayalpine = document.getElementById("overlayalpine");
const closealpine = document.getElementById("closeMenualpine");

const linksMenualpine = document.querySelectorAll(".side-menu-alpine a");

function fecharMenualpine() {
  if (menualpine) menualpine.classList.remove("active");
  if (overlayalpine) overlayalpine.classList.remove("active");
}

if (togglealpine) {
  togglealpine.addEventListener("click", () => {
    menualpine?.classList.add("active");
    overlayalpine?.classList.add("active");
  });
}

if (closealpine) {
  closealpine.addEventListener("click", fecharMenualpine);
}

if (overlayalpine) {
  overlayalpine.addEventListener("click", fecharMenualpine);
}

linksMenualpine.forEach(link => {
  link.addEventListener("click", fecharMenualpine);
});

(function scrollLinksalpine() {

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





const bg1Alpine =
document.querySelector(".bg1-alpine");

const bg2Alpine =
document.querySelector(".bg2-alpine");

const cardsAlpine =
document.querySelectorAll(".hall-card-alpine");

const hallAlpine =
document.querySelector(".hall-alpine");

const gridAlpine =
document.querySelector(".hall-grid-alpine");

if(
  bg1Alpine &&
  bg2Alpine &&
  cardsAlpine.length > 0
){

  let currentAlpine = bg1Alpine;
  let nextAlpine = bg2Alpine;

  // =====================================
  // TROCA DE FUNDO
  // =====================================

  function changeBackgroundAlpine(img){

    if(!img) return;

    nextAlpine.style.backgroundImage =
    `url('${img}')`;

    nextAlpine.classList.add("active");

    currentAlpine.classList.remove("active");

    let temp = currentAlpine;

    currentAlpine = nextAlpine;
    nextAlpine = temp;

  }

  // inicia com primeiro card
  changeBackgroundAlpine(
    cardsAlpine[0].dataset.bg
  );

  // =====================================
  // EVENTOS
  // =====================================

  cardsAlpine.forEach(card => {

    const img = card.dataset.bg;

    // HOVER PC
    card.addEventListener(
      "mouseenter",
      () => {

        hallAlpine.classList.add(
          "showcase"
        );

        changeBackgroundAlpine(img);

      }
    );

    // CLICK MOBILE
    card.addEventListener(
      "click",
      () => {

        gridAlpine.classList.add(
          "active"
        );

        cardsAlpine.forEach(c => {

          c.classList.remove(
            "active"
          );

        });

        card.classList.add(
          "active"
        );

        hallAlpine.classList.add(
          "showcase"
        );

        changeBackgroundAlpine(img);

      }
    );

  });

  // =====================================
  // REMOVE SHOWCASE AO SAIR
  // =====================================

  hallAlpine.addEventListener(
    "mouseleave",
    () => {

      hallAlpine.classList.remove(
        "showcase"
      );

      gridAlpine.classList.remove(
        "active"
      );

      cardsAlpine.forEach(c => {

        c.classList.remove(
          "active"
        );

      });

    }
  );

}


const carsDataAlpine = {

  "2000": {

    image:"hallalpine/2005.png",

    name:"Renault R25",

    engine:"Renault RS25 V10",

    power:"~900 HP",

    year:"2005",

    driver:"Fernando Alonso <br> Giancarlo Fisichella"

  },

  "2010": {

    image:"hallalpine/2012.png",

    name:"Lotus E20",

    engine:"Renault RS27 V8",

    power:"~750 HP",

    year:"2012",

    driver:"Kimi Räikkönen <br> Romain Grosjean"

  },

  "2020": {

    image:"hallalpine/2025.png",

    name:"Alpine A525",

    engine:"Renault E-Tech V6 Turbo Hybrid",

    power:"~1000 HP",

    year:"2025",

    driver:"Pierre Gasly <br> Franco Colapinto"

  }

};

function changeEraAlpine(era){

  const section =
  document.getElementById("alpineEvolution");

  const img =
  document.getElementById("carImage-alpine");

  img.style.opacity = 0;

  img.style.transform =
  "scale(.85)";

  section.classList.remove(
    "bg-2000",
    "bg-2010",
    "bg-2020"
  );

  section.classList.add(`bg-${era}`);

  setTimeout(() => {

    const data =
    carsDataAlpine[era];

    if(!data) return;

    img.src = data.image;

    document.getElementById(
      "carName-alpine"
    ).innerText = data.name;

    document.getElementById(
      "carEngine-alpine"
    ).innerText = data.engine;

    document.getElementById(
      "carPower-alpine"
    ).innerText = data.power;

    document.getElementById(
      "carYear-alpine"
    ).innerText = data.year;

    document.getElementById(
      "carDriver-alpine"
    ).innerHTML = data.driver;

    img.style.opacity = 1;

    img.style.transform =
    "scale(1)";

  },250);

}

window.changeEraAlpine =
changeEraAlpine;

/* inicia já no carro de 2025 */

changeEraAlpine;



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


async function carregarTemporadaalpine() {

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

    const alpine = construtores.find(
      e => e?.Constructor?.constructorId === "alpine"
    );

    if (alpine) {

      document.getElementById("posicaoalpine").innerText =
        alpine.position || "—";

      document.getElementById("pontosalpine").innerText =
        alpine.points || "0";

      document.getElementById("totalTabelaalpine").innerText =
        alpine.points || "0";
    }


    /* =====================
       RESULTADOS DA EQUIPE
    ===================== */

    const resultadosReq = await fetch(
      "https://api.jolpi.ca/ergast/f1/2026/constructors/alpine/results.json"
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

      let Gasly = "—";
      let Colapinto = "—";

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

        if (nome === "Gasly") {

          Gasly =
            formatarResultadoF1(
              r?.positionText
            );

        }

        else if (nome === "Colapinto") {

          Colapinto =
            formatarResultadoF1(
              r?.positionText
            );

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
          <td>${Gasly}</td>
          <td>${Colapinto}</td>
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
      "avgGridalpine"
    ).innerText = avgGrid;


    /* =====================
       TABELA
    ===================== */

    document.getElementById(
      "tabelaalpine"
    ).innerHTML = html;


    /* =====================
       ESTATÍSTICAS
    ===================== */

    document.getElementById(
      "podiosalpine"
    ).innerText = podios;

    document.getElementById(
      "vitoriasalpine"
    ).innerText = vitorias;

    document.getElementById(
      "top5alpine"
    ).innerText = top5;


    /* =====================
       GRÁFICO
    ===================== */

    const linha =
      document.getElementById(
        "linhaGraficoalpine"
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
      "Erro alpine:",
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

    carregarTemporadaalpine();

    setInterval(
      carregarTemporadaalpine,
      60000
    );

  }
);



// =========================================
// PAINEL DE NOTÍCIAS alpine
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiasalpine");
const fecharNoticias = document.getElementById("fecharNoticiasalpine");

const atualizarNoticias =
document.getElementById("atualizarNoticiasalpine");


const painelNoticias = document.getElementById("painelNoticiasalpine");
const overlayNoticias = document.getElementById("overlayNoticiasalpine");

const listaNoticias = document.getElementById("listaNoticiasalpine");




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
        <div class="loading-noticias-alpine">

            <div class="spinner-alpine"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{

        const resposta = await fetch(

`https://gnews.io/api/v4/search?q=alpine Formula 1&lang=en&country=gb&max=10&apikey=${API_KEY}`

        );

        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-alpine">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-alpine">

                <img
                src="${noticia.image || 'icons/alpine.png'}"
                alt="Notícia">

                <div class="card-conteudo-alpine">

                    <div class="data-noticia-alpine">

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

        <div class="loading-noticias-alpine">

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
	
});


/*==================================================
        alpine TEAMMATE
==================================================*/



const alpineSeason = 2026;


/* API */

const jolpicaAPI =
"https://api.jolpi.ca/ergast/f1";



/*==============================================
        PILOTOS alpine
==============================================*/


const alpineDrivers = {


    Gasly:{

        number:10,
        name:"Pierre Gasly"

    },


    Colapinto:{

        number:43,
        name:"Franco Colapinto"

    }


};




/*==============================================
        ESTATÍSTICAS
==============================================*/


let alpineStats = {


    Gasly:{


        wins:0,
        podiums:0,
        poles:0,
        fastest:0,
        points:0


    },


    Colapinto:{


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


let alpineRaces = [];




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


async function getalpineCalendar(){



    const url =

    `${jolpicaAPI}/${alpineSeason}.json`;



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



    alpineRaces = races;



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

    `${jolpicaAPI}/${alpineSeason}/${round}/results.json`;



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
        alpine TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 2
==================================================*/



/*==============================================
        IDENTIFICAR PILOTO
==============================================*/


function getalpineDriver(driverId){


    if(driverId === "gasly"){

        return "Gasly";

    }


    if(driverId === "colapinto"){

        return "Colapinto";

    }


    return null;


}






/*==============================================
        RESET ESTATÍSTICAS
==============================================*/


function resetalpineStats(){


    alpineStats = {


        Gasly:{


            wins:0,
            podiums:0,
            poles:0,
            fastest:0,
            points:0


        },


        Colapinto:{


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



    for(const race of alpineRaces){



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

            getalpineDriver(driverId);



            if(!name)
                continue;




            const stats =

            alpineStats[name];




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



    for(const race of alpineRaces){



        const round = race.round;



        const url =

        `${jolpicaAPI}/${alpineSeason}/${round}/qualifying.json`;



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

            getalpineDriver(driverId);



            if(name){

                alpineStats[name].poles++;

            }



        }



    }



}







/*==============================================
        BUSCAR PONTOS OFICIAIS DO CAMPEONATO
==============================================*/


async function getOfficialChampionship(){



    const url =

    `${jolpicaAPI}/${alpineSeason}/driverStandings.json`;



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

        getalpineDriver(
            driver.Driver.driverId
        );



        if(!name)
            continue;



        alpineStats[name].points =

        Number(driver.points);



    }



    console.log(

        "Pontos oficiais:",
        alpineStats

    );


}







/*==============================================
        EXECUTAR CÁLCULO COMPLETO
==============================================*/


async function calculatealpineBattle(){



    resetalpineStats();



    await calculateRaceResults();



    await calculatePoles();



    await getOfficialChampionship();




    console.log(

        "Estatísticas finais:",
        alpineStats

    );



    updatealpineBattle();



}

/*==================================================
        alpine TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 3
==================================================*/



/*==============================================
        ATUALIZAR VALORES
==============================================*/


function setalpineValue(id,value){


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
        ATUALIZAR CARD alpine
==============================================*/


function updatealpineBattle(){



    const Gasly =

    alpineStats.Gasly;



    const Colapinto =

    alpineStats.Colapinto;





    // VITÓRIAS


    setalpineValue(
        "alpineWinsLeft",
        Gasly.wins
    );


    setalpineValue(
        "alpineWinsRight",
        Colapinto.wins
    );


    updateBars(
        Gasly.wins,
        Colapinto.wins,
        "alpineBarWinsLeft",
        "alpineBarWinsRight"
    );





    // PÓDIOS


    setalpineValue(
        "alpinePodiumsLeft",
        Gasly.podiums
    );


    setalpineValue(
        "alpinePodiumsRight",
        Colapinto.podiums
    );


    updateBars(
        Gasly.podiums,
        Colapinto.podiums,
        "alpineBarPodiumsLeft",
        "alpineBarPodiumsRight"
    );






    // POLES


    setalpineValue(
        "alpinePolesLeft",
        Gasly.poles
    );


    setalpineValue(
        "alpinePolesRight",
        Colapinto.poles
    );


    updateBars(
        Gasly.poles,
        Colapinto.poles,
        "alpineBarPolesLeft",
        "alpineBarPolesRight"
    );






    // FASTEST LAPS


    setalpineValue(
        "alpineFastLeft",
        Gasly.fastest
    );


    setalpineValue(
        "alpineFastRight",
        Colapinto.fastest
    );


    updateBars(
        Gasly.fastest,
        Colapinto.fastest,
        "alpineBarFastLeft",
        "alpineBarFastRight"
    );







    // PONTOS


    setalpineValue(
        "alpinePointsLeft",
        Gasly.points
    );


    setalpineValue(
        "alpinePointsRight",
        Colapinto.points
    );


    updateBars(
        Gasly.points,
        Colapinto.points,
        "alpineBarPointsLeft",
        "alpineBarPointsRight"
    );



}








/*==============================================
        TEMPORADA NO CARD
==============================================*/


function updateSeason(){


    const element =

    document.getElementById(
        "alpineSeason"
    );



    if(element){


        element.textContent =

        "TEMPORADA " + alpineSeason;


    }


}








/*==============================================
        SISTEMA COMPLETO
==============================================*/


async function loadalpineBattle(){



    console.log(

        "Iniciando alpine Battle..."

    );




    await getalpineCalendar();




    await calculatealpineBattle();




    updateSeason();




    updatealpineBattle();





    console.log(

        "Sistema alpine carregado"

    );



}








/*==============================================
        INICIAR
==============================================*/


loadalpineBattle();








/*==============================================
        ATUALIZAÇÃO AUTOMÁTICA
==============================================*/


setInterval(()=>{


    console.log(

        "Atualizando alpine Battle..."

    );



    loadalpineBattle();



},1800000);




/*==================================================
        alpine DRIVER EVOLUTION
        gasly x colapinto
==================================================*/

document.addEventListener("DOMContentLoaded", () => {


    /*==============================================
            DADOS HISTÓRICOS
    ==============================================*/

    const driverData = {

    gasly: {

      2017: 7,
      2018: 29,
      2019: 95,
      2020: 75,
      2021: 110,
      2022: 23,
      2023: 62,
      2024: 46,
      2025: 38

    },

    colapinto: {

      2024: 15,
      2025: 0

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
            ".evolution-mode-alpine"
        );


    const yLabels =
        document.querySelector(
            ".chart-y-labels-alpine"
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
        gasly e colapinto nos anos finais.
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


                if (number === 10) {

                    driverData.gasly[2026] =
                        points;

                }


                if (number === 43) {

                    driverData.colapinto[2026] =
                        points;

                }

            });


            /*======================================
                    ATUALIZAR ESCALA
            ======================================*/

            const allPoints = [

                ...Object.values(
                    driverData.gasly
                ),

                ...Object.values(
                    driverData.colapinto
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


        if (mode === "gasly") {

            seasons =
                Object.keys(
                    driverData.gasly
                );

        }


        else if (mode === "colapinto") {

            seasons =
                Object.keys(
                    driverData.colapinto
                );

        }


        else {

            seasons = [

                ...new Set([

                    ...Object.keys(
                        driverData.gasly
                    ),

                    ...Object.keys(
                        driverData.colapinto
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
        driver === "gasly"
            ? "colapinto"
            : "gasly";


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
                driver === "gasly"
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

            if (driver === "colapinto") {

                return baseX -
                    DRIVER_SEPARATION;

            }


            if (driver === "gasly") {

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
            "evolution-svg-alpine"
        );


        svg.setAttribute(
            "viewBox",
            `0 0 ${width} ${height}`
        );


        svg.setAttribute(
            "preserveAspectRatio",
            "none"
        );

			const usedLabels = [];
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
            "gaslyGradient";


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
            "#dc0000"
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
            "#f0f0f0"
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
            "colapintoGradient";


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
            "chart-grid-alpine";


        seasons.forEach(() => {

            const line =
                document.createElement(
                    "div"
                );


            line.className =
                "chart-grid-line-alpine";


            grid.appendChild(
                line
            );

        });


        chart.appendChild(
            grid
        );




/*==============================================
        LINHA DOS PILOTOS
==============================================*/

function createDriverLine(
    driver,
    className
) {

    const valid = [];


    /*==========================================
            DADOS VÁLIDOS
    ==========================================*/

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


    /*==========================================
            CONSTRUIR LINHA
    ==========================================*/

    let pathData = "";


    valid.forEach(
        (item, index) => {

            /*
                A linha usa exatamente
                a mesma posição do ponto.
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


    /*==========================================
            PATH
    ==========================================*/

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


    /*==========================================
            PONTOS + NÚMEROS
    ==========================================*/

    valid.forEach(
        (item, index) => {


            /*================================
                    POSIÇÃO DO PONTO
            =================================*/

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
                "chart-point-alpine"
            );


            if (
                driver === "colapinto"
            ) {

                circle.classList.add(
                    "colapinto-alpine"
                );

            }


            circle.style.animationDelay =
                `${index * .08}s`;


            svg.appendChild(
                circle
            );


/*================================
        NÚMERO INTELIGENTE
================================*/

const valueText =
    document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
    );


/*
    Todas as posições possíveis para o número.
    O sistema tenta primeiro as posições mais
    naturais e depois vai se afastando.
*/

const possiblePositions = [

    // Acima
    {
        x: x,
        y: y - 18
    },

    // Abaixo
    {
        x: x,
        y: y + 28
    },

    // Acima esquerda
    {
        x: x - 28,
        y: y - 18
    },

    // Acima direita
    {
        x: x + 28,
        y: y - 18
    },

    // Abaixo esquerda
    {
        x: x - 28,
        y: y + 28
    },

    // Abaixo direita
    {
        x: x + 28,
        y: y + 28
    },

    // Esquerda
    {
        x: x - 30,
        y: y - 2
    },

    // Direita
    {
        x: x + 30,
        y: y - 2
    },

    // Mais acima
    {
        x: x,
        y: y - 36
    },

    // Mais abaixo
    {
        x: x,
        y: y + 42
    },

    // Bem acima esquerda
    {
        x: x - 32,
        y: y - 34
    },

    // Bem acima direita
    {
        x: x + 32,
        y: y - 34
    },

    // Bem abaixo esquerda
    {
        x: x - 32,
        y: y + 40
    },

    // Bem abaixo direita
    {
        x: x + 32,
        y: y + 40
    }

];


let chosenPosition = null;


/*================================
    PROCURAR POSIÇÃO LIVRE
================================*/

for (
    const position of possiblePositions
) {

    let conflict = false;


    /*================================
        LIMITES DO GRÁFICO
    =================================*/

    if (
        position.x < 20 ||
        position.x > width - 20 ||
        position.y < 15 ||
        position.y > height - 10
    ) {

        continue;

    }


    /*================================
        EVITAR OUTROS NÚMEROS
    =================================*/

    for (
        const label of usedLabels
    ) {

        const dx =
            Math.abs(
                position.x - label.x
            );

        const dy =
            Math.abs(
                position.y - label.y
            );


        /*
            Área mínima para que dois
            números não fiquem embolados.
        */

        if (
            dx < 42 &&
            dy < 24
        ) {

            conflict = true;

            break;

        }

    }


    if (conflict)
        continue;


    /*================================
        EVITAR O OUTRO PONTO
    =================================*/

    const otherDriver =
        driver === "colapinto"
            ? "gasly"
            : "colapinto";


    const otherValue =
        driverData[
            otherDriver
        ][item.year];


    if (
        otherValue !== undefined &&
        otherValue !== null
    ) {

        const otherY =
            getDriverY(
                otherDriver,
                item.year,
                Number(otherValue),
                height
            );


        const otherX =
            getDriverX(
                otherDriver,
                item.year,
                item.index,
                seasons.length,
                width
            );


        const pointDX =
            Math.abs(
                position.x - otherX
            );

        const pointDY =
            Math.abs(
                position.y - otherY
            );


        if (
            pointDX < 35 &&
            pointDY < 28
        ) {

            continue;

        }

    }


    /*================================
        EVITAR O PRÓPRIO PONTO
    =================================*/

    if (
        Math.abs(position.x - x) < 22 &&
        Math.abs(position.y - y) < 14
    ) {

        continue;

    }


    /*================================
        POSIÇÃO ACEITA
    =================================*/

    chosenPosition =
        position;

    break;

}


/*================================
        FALLBACK
================================*/

if (!chosenPosition) {

    chosenPosition = {

        x: x,
        y: y - 40

    };

}


/*================================
        GUARDAR POSIÇÃO
================================*/

usedLabels.push({

    x:
        chosenPosition.x,

    y:
        chosenPosition.y

});


/*================================
        APLICAR POSIÇÃO
================================*/

valueText.setAttribute(
    "x",
    chosenPosition.x
);


valueText.setAttribute(
    "y",
    chosenPosition.y
);


valueText.classList.add(
    "chart-value-alpine"
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
                gasly
        ==========================================*/

        if (
            mode === "both" ||
            mode === "gasly"
        ) {

            createDriverLine(
                "gasly",
                "gasly-path-alpine"
            );

        }


        /*==========================================
                colapinto
        ==========================================*/

        if (
            mode === "both" ||
            mode === "colapinto"
        ) {

            createDriverLine(
                "colapinto",
                "colapinto-path-alpine"
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
                    "chart-year-alpine"
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
                ".evolution-mode-alpine.active"
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