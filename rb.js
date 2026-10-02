document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // ANIMAÇÃO DOS BLOCOS
  // =========================
  const blocos = document.querySelectorAll(".bloco-equipe-rb");

  blocos.forEach((bloco, i) => {
    bloco.style.opacity = 0;
    bloco.style.transform = "translateY(20px)";

    setTimeout(() => {
      bloco.style.opacity = 1;
      bloco.style.transform = "translateY(0)";
    }, i * 300);
  });
  
  
  
// ======================================================
// rb Stats Automáticas
// API: Jolpica
// ======================================================

// -------------------------------------
// HISTÓRICO DA rb
// (Atualize somente quando quiser)
// -------------------------------------

const historicorb = {

    corridas: 382,
    vitorias: 2,
    podio: 6,
    top10: 226,
    pontos: 947

};

// -------------------------------------
// CONFIGURAÇÃO
// -------------------------------------

const equipe = "rb";
const temporada = "2026";

// -------------------------------------
// ELEMENTOS HTML
// -------------------------------------

const contadorCorridas =
document.getElementById("corridas-rb");

const contadorVitorias =
document.getElementById("vitorias-rb");

const contadorpodio =
document.getElementById("podio-rb");

const contadortop10 =
document.getElementById("top10-rb");

const contadorPontos =
document.getElementById("pontos-rb");

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
    let podio2026 = 0;
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

            podio2026++;

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
        historicorb.corridas +
        corridas2026,

        vitorias:
        historicorb.vitorias +
        vitorias2026,

        podio:
        historicorb.podio +
        podio2026,

        top10:
        historicorb.top10 +
        top102026,

        pontos:
        historicorb.pontos +
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

        contadorpodio.dataset.target =
        stats.podio;

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

    const secao = document.querySelector(".numeros-rb");

    if(!secao) return;

    const observer = new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-rb")
                .forEach(contador=>{

                    if(contador.classList.contains("contado")) return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-rb"
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
    .querySelectorAll(".animar-rb")
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


	
  
const erasrb = [
  {
titulo: "Capítulo I – Origem Minardi (1985-2005)",
texto: "A história da atual Racing Bulls começa com a equipe Minardi, fundada em 1985. Conhecida por operar com poucos recursos, a equipe italiana se destacou por revelar jovens talentos e manter presença constante na Fórmula 1. Apesar de nunca ter conquistado vitórias ou títulos, a Minardi ganhou respeito no paddock por sua paixão pelo automobilismo e por servir como porta de entrada para diversos pilotos que mais tarde fariam sucesso na categoria.",
timeline: [
{ano:"1985", imagem:"RB/1985.jpeg", descricao:"Fundação da Minardi"},
{ano:"1990", imagem:"RB/1990.jpeg", descricao:"Consolidação no grid"},
{ano:"2005", imagem:"RB/2005.jpeg", descricao:"Fim da era Minardi"}
]
},

{
titulo: "Capítulo II – Toro Rosso e a surpresa (2006-2019)",
texto: "Em 2006, a equipe foi adquirida pela Red Bull e renomeada para Toro Rosso, assumindo o papel de equipe júnior. Durante esse período, o objetivo principal era desenvolver jovens pilotos para a equipe principal. O grande momento dessa era aconteceu em 2008, quando Sebastian Vettel conquistou uma vitória histórica em Monza, surpreendendo todo o grid. Ao longo dos anos seguintes, a equipe continuou formando talentos e mantendo presença competitiva no meio do pelotão.",
timeline: [
{ano:"2006", imagem:"RB/2006.jpg", descricao:"Criação da Toro Rosso"},
{ano:"2008", imagem:"RB/2008.jpg", descricao:"Vitória histórica"},
{ano:"2015", imagem:"RB/2015.webp", descricao:"Nova geração de pilotos"},
{ano:"2019", imagem:"RB/2019.webp", descricao:"Último ano Toro Rosso"}
]
},

{
titulo: "Capítulo III – AlphaTauri (2020-2023)",
texto: "A partir de 2020, a equipe passou a se chamar AlphaTauri, entrando em uma nova fase com identidade própria. Logo no primeiro ano, conquistou uma vitória marcante com Pierre Gasly em Monza, reafirmando sua capacidade de surpreender. Durante essa era, a equipe se manteve competitiva no meio do grid, alternando bons resultados com períodos de instabilidade, mas sempre desempenhando um papel importante no desenvolvimento de pilotos.",
timeline: [
{ano:"2020", imagem:"RB/2020.jpeg", descricao:"Nova identidade"},
{ano:"2020", imagem:"RB/gasly20.jpeg", descricao:"Vitória com Gasly"},
{ano:"2021", imagem:"RB/2021.jpg", descricao:"Boa fase competitiva"},
{ano:"2023", imagem:"RB/2023.jpg", descricao:"Transição de fase"}
]
},

{
titulo: "Capítulo IV – Racing Bulls (2024-atual )",

texto: "Em 2024, a equipe foi novamente renomeada, passando a se chamar Racing Bulls. Essa nova fase representa uma reformulação completa, com foco em maior competitividade e integração com a equipe principal. Com uma base sólida e jovens talentos, a equipe busca evoluir e se tornar mais consistente dentro do grid da Fórmula 1, mirando um futuro mais competitivo.",
timeline: [
{ano:"2024", imagem:"RB/2024.jpg", descricao:"Nova era Racing Bulls"},
{ano:"2025", imagem:"RB/2025.jpeg", descricao:"Evolução do projeto"}
]
}
];

function mostrarEra(index) {

  const titulo = document.getElementById("tituloEra-rb");
  const texto = document.getElementById("textoEra-rb");
  const timeline = document.getElementById("rb-timeline");
  const botoes = document.querySelectorAll(".botoes-eras-rb button");

  if (!titulo || !texto || !timeline) return;

  const era = erasrb[index];

  if (!era) return;

  titulo.textContent = era.titulo;
  texto.textContent = era.texto;

  timeline.innerHTML = "";

  era.timeline.forEach(item => {
    timeline.innerHTML += `
      <div class="rb-timeline-item">
        <div class="rb-timeline-year">${item.ano}</div>
        <img src="${item.imagem}">
        <p>${item.descricao}</p>
      </div>
    `;
  });

  botoes.forEach(btn => btn.classList.remove("ativo"));
  if (botoes[index]) botoes[index].classList.add("ativo");
}

// 🔥 IMPORTANTE: deixar global
window.mostrarEra = mostrarEra;

// inicia automaticamente
mostrarEra(0);
  




  
  
  const toggleRB = document.getElementById("menuToggleRB");
  const menuRB = document.getElementById("sideMenuRB");
  const overlayRB = document.getElementById("overlayRB");
  const closeRB = document.getElementById("closeMenuRB");

  const linksMenuRB = document.querySelectorAll(".side-menu-rb a");

  function fecharMenuRB() {
    if (menuRB) menuRB.classList.remove("active");
    if (overlayRB) overlayRB.classList.remove("active");
  }

  if (toggleRB) {
    toggleRB.addEventListener("click", () => {
      menuRB?.classList.add("active");
      overlayRB?.classList.add("active");
    });
  }

  if (closeRB) {
    closeRB.addEventListener("click", fecharMenuRB);
  }

  if (overlayRB) {
    overlayRB.addEventListener("click", fecharMenuRB);
  }

  linksMenuRB.forEach(link => {
    link.addEventListener("click", fecharMenuRB);
  });
  
  
  
  
  (function scrollLinks() {

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

  })()
  
  
});




// =====================================================
// 🏎️ HALL DA FAMA RACING BULLS
// =====================================================

const bg1RB =
document.querySelector(".bg1-rb");

const bg2RB =
document.querySelector(".bg2-rb");

const cardsRB =
document.querySelectorAll(".hall-card-rb");

const hallRB =
document.querySelector(".hall-rb");

const gridRB =
document.querySelector(".hall-grid-rb");

if(
  bg1RB &&
  bg2RB &&
  cardsRB.length > 0
){

  let currentRB = bg1RB;
  let nextRB = bg2RB;

  // =====================================
  // TROCA DE FUNDO
  // =====================================

  function changeBackgroundRB(img){

    if(!img) return;

    nextRB.style.backgroundImage =
    `url('${img}')`;

    nextRB.classList.add("active");

    currentRB.classList.remove("active");

    let temp = currentRB;

    currentRB = nextRB;
    nextRB = temp;

  }

  // inicia com primeiro card
  changeBackgroundRB(
    cardsRB[0].dataset.bg
  );

  // =====================================
  // EVENTOS
  // =====================================

  cardsRB.forEach(card => {

    const img = card.dataset.bg;

    // HOVER PC
    card.addEventListener(
      "mouseenter",
      () => {

        hallRB.classList.add(
          "showcase"
        );

        changeBackgroundRB(img);

      }
    );

    // CLICK MOBILE
    card.addEventListener(
      "click",
      () => {

        gridRB.classList.add(
          "active"
        );

        cardsRB.forEach(c => {
          c.classList.remove(
            "active"
          );
        });

        card.classList.add(
          "active"
        );

        hallRB.classList.add(
          "showcase"
        );

        changeBackgroundRB(img);

      }
    );

  });

  // =====================================
  // REMOVE SHOWCASE AO SAIR
  // =====================================

  hallRB.addEventListener(
    "mouseleave",
    () => {

      hallRB.classList.remove(
        "showcase"
      );

      gridRB.classList.remove(
        "active"
      );

      cardsRB.forEach(c => {
        c.classList.remove(
          "active"
        );
      });

    }
  );

}





const carsDataRB = {

  "2000": {
    image:"hallrb/2006.png",
    name:"Toro Rosso STR1",
    engine:"Cosworth TJ2005 V10",
    power:"~900 HP",
    year:"2006",
    driver:"Liuzzi <br> Speed"
  },


  "2010": {
    image:"hallrb/2010.png",
    name:"Toro Rosso STR11",
    engine:"Ferrari 059/3 V6 Turbo",
    power:"~850 HP",
    year:"2016",
    driver:"Sainz <br> Verstappen"
  },


  "2020": {
    image:"hallrb/2025.png",
    name:"Racing Bulls VCARB 02",
    engine:"Honda RBPT",
    power:"~1000 HP",
    year:"2025",
    driver:"Lawson <br> Hadjar"
  }

};

function changeEraRB(era){

  const section =
  document.getElementById("rbEvolution");

  const img =
  document.getElementById("carImage-rb");

  img.style.opacity = 0;
  img.style.transform = "scale(.85)";

  section.classList.remove(
    "bg-2000",
    "bg-2010",
    "bg-2020"
  );

  section.classList.add(`bg-${era}`);

  setTimeout(() => {

    const data = carsDataRB[era];

    if(!data) return;

    img.src = data.image;

    document.getElementById("carName-rb").innerText =
    data.name;

    document.getElementById("carEngine-rb").innerText =
    data.engine;

    document.getElementById("carPower-rb").innerText =
    data.power;

    document.getElementById("carYear-rb").innerText =
    data.year;

    document.getElementById("carDriver-rb").innerHTML =
    data.driver;

    img.style.opacity = 1;
    img.style.transform = "scale(1)";

  },250);

}

window.changeEraRB = changeEraRB;


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

async function carregarTemporadaRacingbulls() {

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

    const rb = construtores.find(
      e => e?.Constructor?.constructorId === "rb"
    );

    if (rb) {

      document.getElementById("posicaoRacingbulls").innerText =
        rb.position || "—";

      document.getElementById("pontosRacingbulls").innerText =
        rb.points || "0";

      document.getElementById("totalTabelaRacingbulls").innerText =
        rb.points || "0";
    }


    /* =====================
       RESULTADOS DA EQUIPE
    ===================== */

    const resultadosReq = await fetch(
      "https://api.jolpi.ca/ergast/f1/2026/constructors/rb/results.json"
    );

    const resultados = await resultadosReq.json();

    const corridas =
      resultados?.MRData?.RaceTable?.Races || [];

    corridas.sort(
      (a, b) =>
        Number(a.round || 0) -
        Number(b.round || 0)
    );



const cabecalhoLawson =
  document.querySelector(".resultados-racingbulls th:nth-child(3)");

if (cabecalhoLawson) {
  cabecalhoLawson.innerText = "Lawson / Tsunoda";
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

  let lawson = "—";
  let lindblad = "—";

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
    if (pos >= 1 && pos <= 3) podios++;
    if (pos >= 1 && pos <= 5) top5++;


    /* =========================
       PILOTOS
    ========================= */

if (nome === "Lawson") {

  lawson = formatarResultadoF1(r?.positionText);

}

else if (nome === "Lindblad") {

  lindblad = formatarResultadoF1(r?.positionText);

}

else if (nome === "Tsunoda") {

  lawson = `🇯🇵 ${formatarResultadoF1(r?.positionText)}`;

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
      <td>${lawson}</td>
      <td>${lindblad}</td>
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
      "avgGridRacingbulls"
    ).innerText = avgGrid;


    /* =====================
       TABELA
    ===================== */

    document.getElementById(
      "tabelaRacingbulls"
    ).innerHTML = html;


    /* =====================
       ESTATÍSTICAS
    ===================== */

    document.getElementById(
      "podiosRacingbulls"
    ).innerText = podios;

    document.getElementById(
      "vitoriasRacingbulls"
    ).innerText = vitorias;

    document.getElementById(
      "top5Racingbulls"
    ).innerText = top5;


    /* =====================
       GRÁFICO
    ===================== */

    const linha =
      document.getElementById(
        "linhaGraficoRacingbulls"
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
      "Erro Racing Bulls:",
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

    carregarTemporadaRacingbulls();

    setInterval(
      carregarTemporadaRacingbulls,
      60000
    );

  }
);



// =========================================
// PAINEL DE NOTÍCIAS RB
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiasRB");
const fecharNoticias = document.getElementById("fecharNoticiasRB");

const atualizarNoticias =
document.getElementById("atualizarNoticiasRB");


const painelNoticias = document.getElementById("painelNoticiasRB");
const overlayNoticias = document.getElementById("overlayNoticiasRB");

const listaNoticias = document.getElementById("listaNoticiasRB");




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
        <div class="loading-noticias-RB">

            <div class="spinner-RB"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{

        const resposta = await fetch(

`https://gnews.io/api/v4/search?q=racing bulls Formula 1&lang=en&country=gb&max=10&apikey=${API_KEY}`

        );

        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-RB">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-RB">

                <img
                src="${noticia.image || 'icons/racingbulls.svg'}"
                alt="Notícia">

                <div class="card-conteudo-RB">

                    <div class="data-noticia-RB">

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

        <div class="loading-noticias-RB">

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
        rb TEAMMATE
==================================================*/



const rbSeason = 2026;


/* API */

const jolpicaAPI =
"https://api.jolpi.ca/ergast/f1";



/*==============================================
        PILOTOS rb
==============================================*/


const rbDrivers = {


    Lawson:{

        number:30,
        name:"Liam Lawson"

    },


    Lindblad:{

        number:41,
        name:"Arvid Lindblad"

    }


};




/*==============================================
        ESTATÍSTICAS
==============================================*/


let rbStats = {


    Lawson:{


        wins:0,
        podiums:0,
        poles:0,
        fastest:0,
        points:0


    },


    Lindblad:{


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


let rbRaces = [];




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


async function getrbCalendar(){



    const url =

    `${jolpicaAPI}/${rbSeason}.json`;



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



    rbRaces = races;



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

    `${jolpicaAPI}/${rbSeason}/${round}/results.json`;



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
        rb TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 2
==================================================*/



/*==============================================
        IDENTIFICAR PILOTO
==============================================*/


function getrbDriver(driverId){


    if(driverId === "lawson"){

        return "Lawson";

    }


    if(driverId === "arvid_lindblad"){

        return "Lindblad";

    }


    return null;


}






/*==============================================
        RESET ESTATÍSTICAS
==============================================*/


function resetrbStats(){


    rbStats = {


        Lawson:{


            wins:0,
            podiums:0,
            poles:0,
            fastest:0,
            points:0


        },


        Lindblad:{


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



    for(const race of rbRaces){



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

            getrbDriver(driverId);



            if(!name)
                continue;




            const stats =

            rbStats[name];




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



    for(const race of rbRaces){



        const round = race.round;



        const url =

        `${jolpicaAPI}/${rbSeason}/${round}/qualifying.json`;



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

            getrbDriver(driverId);



            if(name){

                rbStats[name].poles++;

            }



        }



    }



}







/*==============================================
        BUSCAR PONTOS OFICIAIS DO CAMPEONATO
==============================================*/


async function getOfficialChampionship(){



    const url =

    `${jolpicaAPI}/${rbSeason}/driverStandings.json`;



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

        getrbDriver(
            driver.Driver.driverId
        );



        if(!name)
            continue;



        rbStats[name].points =

        Number(driver.points);



    }



    console.log(

        "Pontos oficiais:",
        rbStats

    );


}







/*==============================================
        EXECUTAR CÁLCULO COMPLETO
==============================================*/


async function calculaterbBattle(){



    resetrbStats();



    await calculateRaceResults();



    await calculatePoles();



    await getOfficialChampionship();




    console.log(

        "Estatísticas finais:",
        rbStats

    );



    updaterbBattle();



}

/*==================================================
        rb TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 3
==================================================*/



/*==============================================
        ATUALIZAR VALORES
==============================================*/


function setrbValue(id,value){


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
        ATUALIZAR CARD rb
==============================================*/


function updaterbBattle(){



    const Lawson =

    rbStats.Lawson;



    const Lindblad =

    rbStats.Lindblad;





    // VITÓRIAS


    setrbValue(
        "rbWinsLeft",
        Lawson.wins
    );


    setrbValue(
        "rbWinsRight",
        Lindblad.wins
    );


    updateBars(
        Lawson.wins,
        Lindblad.wins,
        "rbBarWinsLeft",
        "rbBarWinsRight"
    );





    // PÓDIOS


    setrbValue(
        "rbPodiumsLeft",
        Lawson.podiums
    );


    setrbValue(
        "rbPodiumsRight",
        Lindblad.podiums
    );


    updateBars(
        Lawson.podiums,
        Lindblad.podiums,
        "rbBarPodiumsLeft",
        "rbBarPodiumsRight"
    );






    // POLES


    setrbValue(
        "rbPolesLeft",
        Lawson.poles
    );


    setrbValue(
        "rbPolesRight",
        Lindblad.poles
    );


    updateBars(
        Lawson.poles,
        Lindblad.poles,
        "rbBarPolesLeft",
        "rbBarPolesRight"
    );






    // FASTEST LAPS


    setrbValue(
        "rbFastLeft",
        Lawson.fastest
    );


    setrbValue(
        "rbFastRight",
        Lindblad.fastest
    );


    updateBars(
        Lawson.fastest,
        Lindblad.fastest,
        "rbBarFastLeft",
        "rbBarFastRight"
    );







    // PONTOS


    setrbValue(
        "rbPointsLeft",
        Lawson.points
    );


    setrbValue(
        "rbPointsRight",
        Lindblad.points
    );


    updateBars(
        Lawson.points,
        Lindblad.points,
        "rbBarPointsLeft",
        "rbBarPointsRight"
    );



}








/*==============================================
        TEMPORADA NO CARD
==============================================*/


function updateSeason(){


    const element =

    document.getElementById(
        "rbSeason"
    );



    if(element){


        element.textContent =

        "TEMPORADA " + rbSeason;


    }


}








/*==============================================
        SISTEMA COMPLETO
==============================================*/


async function loadrbBattle(){



    console.log(

        "Iniciando rb Battle..."

    );




    await getrbCalendar();




    await calculaterbBattle();




    updateSeason();




    updaterbBattle();





    console.log(

        "Sistema rb carregado"

    );



}








/*==============================================
        INICIAR
==============================================*/


loadrbBattle();








/*==============================================
        ATUALIZAÇÃO AUTOMÁTICA
==============================================*/


setInterval(()=>{


    console.log(

        "Atualizando rb Battle..."

    );



    loadrbBattle();



},1800000);



/*==================================================
        rb DRIVER EVOLUTION
        lawson x lindblad
==================================================*/

document.addEventListener("DOMContentLoaded", () => {


    /*==============================================
            DADOS HISTÓRICOS
    ==============================================*/

    const driverData = {

    lawson: {

      2023: 2,
      2024: 4,
      2025: 12

    },

    lindblad: {


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
            ".evolution-mode-rb"
        );


    const yLabels =
        document.querySelector(
            ".chart-y-labels-rb"
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
        lawson e lindblad nos anos finais.
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


                if (number === 30) {

                    driverData.lawson[2026] =
                        points;

                }


                if (number === 41) {

                    driverData.lindblad[2026] =
                        points;

                }

            });


            /*======================================
                    ATUALIZAR ESCALA
            ======================================*/

            const allPoints = [

                ...Object.values(
                    driverData.lawson
                ),

                ...Object.values(
                    driverData.lindblad
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


        if (mode === "lawson") {

            seasons =
                Object.keys(
                    driverData.lawson
                );

        }


        else if (mode === "lindblad") {

            seasons =
                Object.keys(
                    driverData.lindblad
                );

        }


        else {

            seasons = [

                ...new Set([

                    ...Object.keys(
                        driverData.lawson
                    ),

                    ...Object.keys(
                        driverData.lindblad
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
        driver === "lawson"
            ? "lindblad"
            : "lawson";


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
                driver === "lawson"
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

            if (driver === "lindblad") {

                return baseX -
                    DRIVER_SEPARATION;

            }


            if (driver === "lawson") {

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
            "evolution-svg-rb"
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
            "lawsonGradient";


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
            "lindbladGradient";


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
            "chart-grid-rb";


        seasons.forEach(() => {

            const line =
                document.createElement(
                    "div"
                );


            line.className =
                "chart-grid-line-rb";


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
                "chart-point-rb"
            );


            if (
                driver === "lindblad"
            ) {

                circle.classList.add(
                    "lindblad-rb"
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
        driver === "lindblad"
            ? "lawson"
            : "lindblad";


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
    "chart-value-rb"
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
                lawson
        ==========================================*/

        if (
            mode === "both" ||
            mode === "lawson"
        ) {

            createDriverLine(
                "lawson",
                "lawson-path-rb"
            );

        }


        /*==========================================
                lindblad
        ==========================================*/

        if (
            mode === "both" ||
            mode === "lindblad"
        ) {

            createDriverLine(
                "lindblad",
                "lindblad-path-rb"
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
                    "chart-year-rb"
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
                ".evolution-mode-rb.active"
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