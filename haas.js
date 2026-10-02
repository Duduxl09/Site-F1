document.addEventListener("DOMContentLoaded", function(){

/* =========================
   ANIMAÇÃO DOS BLOCOS
========================= */
const blocos = document.querySelectorAll(".bloco-equipe-haas");

blocos.forEach((bloco, i)=>{
  bloco.style.opacity = 0;
  bloco.style.transform = "translateY(20px)";

  setTimeout(()=>{
    bloco.style.opacity = 1;
    bloco.style.transform = "translateY(0)";
  }, i * 300);
});


// ======================================================
// haas Stats Automáticas
// API: Jolpica
// ======================================================

// -------------------------------------
// HISTÓRICO DA haas
// (Atualize somente quando quiser)
// -------------------------------------

const historicohaas = {

    corridas: 180,
    q3: 57,
    poles: 1,
    top10: 49,
    pontos: 404

};

// -------------------------------------
// CONFIGURAÇÃO
// -------------------------------------

const equipe = "haas";
const temporada = "2026";

// -------------------------------------
// ELEMENTOS HTML
// -------------------------------------

const contadorCorridas =
document.getElementById("corridas-haas");

const contadorq3 =
document.getElementById("q3-haas");

const contadorpoles =
document.getElementById("poles-haas");

const contadortop10 =
document.getElementById("top10-haas");

const contadorPontos =
document.getElementById("pontos-haas");

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
    let q32026 = 0;
    let poles2026 = 0;
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

            q32026++;

        }

        if(posicao <= 3){

            poles2026++;

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
        historicohaas.corridas +
        corridas2026,

        q3:
        historicohaas.q3 +
        q32026,

        poles:
        historicohaas.poles +
        poles2026,

        top10:
        historicohaas.top10 +
        top102026,

        pontos:
        historicohaas.pontos +
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

        contadorq3.dataset.target =
        stats.q3;

        contadorpoles.dataset.target =
        stats.poles;

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

    const secao = document.querySelector(".numeros-haas");

    if(!secao) return;

    const observer = new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-haas")
                .forEach(contador=>{

                    if(contador.classList.contains("contado")) return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-haas"
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
    .querySelectorAll(".animar-haas")
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


	
/* =========================
   ERAS HAAS
========================= */

const erashaas = [

{
titulo: "Capítulo I – Estreia na Fórmula 1 (2016-2018)",
texto: "A Haas F1 Team entrou na Fórmula 1 em 2016 como a primeira equipe americana em décadas. Logo em sua estreia, surpreendeu ao pontuar já na primeira corrida. Com uma parceria técnica forte com a Ferrari, a equipe evoluiu rapidamente e atingiu seu auge em 2018, terminando em 5º no campeonato de construtores.",
timeline: [
{ano:"2016", imagem:"haas/2016.jpg", descricao:"Estreia com pontos na Austrália"},
{ano:"2017", imagem:"haas/2017.jpg", descricao:"Evolução consistente"},
{ano:"2018", imagem:"haas/2018.jpeg", descricao:"Melhor temporada da equipe"}
]
},

{
titulo: "Capítulo II – Queda de desempenho (2019-2020)",
texto: "Após o bom desempenho em 2018, a Haas enfrentou uma queda significativa. Problemas com pneus e desenvolvimento afetaram o carro, levando a equipe para o fundo do grid. Esse período marcou o início de uma fase difícil.",
timeline: [
{ano:"2019", imagem:"haas/2019.jpg", descricao:"Problemas com pneus"},
{ano:"2020", imagem:"haas/2020.jpg", descricao:"Queda no desempenho"}
]
},

{
titulo: "Capítulo III – Reconstrução (2021)",
texto: "Em 2021, a Haas decidiu focar totalmente no novo regulamento de 2022. A equipe praticamente não desenvolveu o carro daquele ano, utilizando a temporada como preparação para o futuro.",
timeline: [
{ano:"2021", imagem:"haas/2021.jpeg", descricao:"Foco total em 2022"}
]
},

{
titulo: "Capítulo IV – Nova Era e Surpresas (2022-2023)",
texto: "Com o novo regulamento, a Haas voltou mais competitiva em 2022. Conquistou uma pole position histórica com Kevin Magnussen no Brasil e voltou a marcar pontos. Em 2023, continuou brigando no meio do pelotão.",
timeline: [
{ano:"2022", imagem:"haas/2022.webp", descricao:"Pole histórica no Brasil"},
{ano:"2023", imagem:"haas/2023.jpeg", descricao:"Briga no meio do grid"}
]
},

{
titulo: "Capítulo V – Nova Gestão (2024-2026)",
texto: "Com mudanças internas e a chegada de Ayao Komatsu como chefe de equipe, a Haas iniciou uma nova fase focada em crescimento e estabilidade. A equipe busca evoluir e se tornar mais competitiva nos próximos anos.",
timeline: [
{ano:"2024", imagem:"haas/2024.jpg", descricao:"Nova fase da equipe"},
{ano:"2025", imagem:"haas/2025.jpeg", descricao:"Evolução gradual"}

]
}

];


function mostrarEra(index) {
    document.getElementById("tituloEra-haas").innerText = erashaas[index].titulo;
    document.getElementById("textoEra-haas").innerText = erashaas[index].texto;

    const timelineContainer = document.getElementById("haas-timeline");
    timelineContainer.innerHTML = "";

    erashaas[index].timeline.forEach(item => {
        timelineContainer.innerHTML += `
            <div class="haas-timeline-item">
                <div class="haas-timeline-year">${item.ano}</div>
                <img src="${item.imagem}" alt="">
                <p>${item.descricao}</p>
            </div>
        `;
    });

    // botão ativo
    const botoes = document.querySelectorAll(".botoes-eras-haas button");
    botoes.forEach(btn => btn.classList.remove("ativo"));
    botoes[index].classList.add("ativo");
}
// inicia automático
mostrarEra(0);



const toggleHaas = document.getElementById("menuToggleHaas");
const menuHaas = document.getElementById("sideMenuHaas");
const overlayHaas = document.getElementById("overlayHaas");
const closeHaas = document.getElementById("closeMenuHaas");

const linksMenuHaas = document.querySelectorAll(".side-menu-Haas a");

function fecharMenuHaas() {
  if (menuHaas) menuHaas.classList.remove("active");
  if (overlayHaas) overlayHaas.classList.remove("active");
}

if (toggleHaas) {
  toggleHaas.addEventListener("click", () => {
    menuHaas?.classList.add("active");
    overlayHaas?.classList.add("active");
  });
}

if (closeHaas) {
  closeHaas.addEventListener("click", fecharMenuHaas);
}

if (overlayHaas) {
  overlayHaas.addEventListener("click", fecharMenuHaas);
}

linksMenuHaas.forEach(link => {
  link.addEventListener("click", fecharMenuHaas);
});

(function scrollLinksHaas() {

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




// =====================================================
// ⚪ HALL DA FAMA HAAS
// =====================================================

const bg1Haas =
document.querySelector(".bg1-haas");

const bg2Haas =
document.querySelector(".bg2-haas");

const cardsHaas =
document.querySelectorAll(".hall-card-haas");

const hallHaas =
document.querySelector(".hall-haas");

const gridHaas =
document.querySelector(".hall-grid-haas");

if(
  bg1Haas &&
  bg2Haas &&
  cardsHaas.length > 0
){

  let currentHaas = bg1Haas;
  let nextHaas = bg2Haas;

  // =====================================
  // TROCA DE FUNDO
  // =====================================

  function changeBackgroundHaas(img){

    if(!img) return;

    nextHaas.style.backgroundImage =
    `url('${img}')`;

    nextHaas.classList.add("active");

    currentHaas.classList.remove("active");

    let temp = currentHaas;

    currentHaas = nextHaas;
    nextHaas = temp;

  }

  // inicia com primeiro card
  changeBackgroundHaas(
    cardsHaas[0].dataset.bg
  );

  // =====================================
  // EVENTOS
  // =====================================

  cardsHaas.forEach(card => {

    const img = card.dataset.bg;

    // HOVER PC
    card.addEventListener(
      "mouseenter",
      () => {

        hallHaas.classList.add(
          "showcase"
        );

        changeBackgroundHaas(img);

      }
    );

    // CLICK MOBILE
    card.addEventListener(
      "click",
      () => {

        gridHaas.classList.add(
          "active"
        );

        cardsHaas.forEach(c => {

          c.classList.remove(
            "active"
          );

        });

        card.classList.add(
          "active"
        );

        hallHaas.classList.add(
          "showcase"
        );

        changeBackgroundHaas(img);

      }
    );

  });

  // =====================================
  // REMOVE SHOWCASE AO SAIR
  // =====================================

  hallHaas.addEventListener(
    "mouseleave",
    () => {

      hallHaas.classList.remove(
        "showcase"
      );

      gridHaas.classList.remove(
        "active"
      );

      cardsHaas.forEach(c => {

        c.classList.remove(
          "active"
        );

      });

    }
  );

}



// =====================================================
// ⚪ EVOLUÇÃO HAAS
// =====================================================

const carsDataHaas = {

  "2010": {

    image:"hallhaas/vf16.png",

    name:"Haas VF-16",

    engine:"Ferrari 059/4 V6 Turbo",

    power:"~900 HP",

    year:"2016",

    driver:"Grosjean <br> Gutiérrez"

  },


  "2020": {

    image:"hallhaas/vf25.png",

    name:"Haas VF-25",

    engine:"Ferrari V6 Turbo Hybrid",

    power:"~1000 HP",

    year:"2025",

    driver:"Ocon <br> Bearman"

  }

};

function changeEraHaas(era){

  const section =
  document.getElementById("haasEvolution");

  const img =
  document.getElementById("carImage-haas");

  img.style.opacity = 0;

  img.style.transform =
  "scale(.85)";

  section.classList.remove(
    "bg-2010",
    "bg-2025"
  );

  section.classList.add(`bg-${era}`);

  setTimeout(() => {

    const data =
    carsDataHaas[era];

    if(!data) return;

    img.src = data.image;

    document.getElementById(
      "carName-haas"
    ).innerText = data.name;

    document.getElementById(
      "carEngine-haas"
    ).innerText = data.engine;

    document.getElementById(
      "carPower-haas"
    ).innerText = data.power;

    document.getElementById(
      "carYear-haas"
    ).innerText = data.year;

    document.getElementById(
      "carDriver-haas"
    ).innerHTML = data.driver;

    img.style.opacity = 1;

    img.style.transform =
    "scale(1)";

  },250);

}

window.changeEraHaas =
changeEraHaas;


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


async function carregarTemporadahaas() {

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

    const haas = construtores.find(
      e => e?.Constructor?.constructorId === "haas"
    );

    if (haas) {

      document.getElementById("posicaohaas").innerText =
        haas.position || "—";

      document.getElementById("pontoshaas").innerText =
        haas.points || "0";

      document.getElementById("totalTabelahaas").innerText =
        haas.points || "0";
    }


    /* =====================
       RESULTADOS DA EQUIPE
    ===================== */

    const resultadosReq = await fetch(
      "https://api.jolpi.ca/ergast/f1/2026/constructors/haas/results.json"
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

      let Ocon = "—";
      let Bearman = "—";

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

        if (nome === "Ocon") {

          Ocon =
            formatarResultadoF1(
              r?.positionText
            );

        }

        else if (nome === "Bearman") {

          Bearman =
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
          <td>${Ocon}</td>
          <td>${Bearman}</td>
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
      "avgGridhaas"
    ).innerText = avgGrid;


    /* =====================
       TABELA
    ===================== */

    document.getElementById(
      "tabelahaas"
    ).innerHTML = html;


    /* =====================
       ESTATÍSTICAS
    ===================== */

    document.getElementById(
      "podioshaas"
    ).innerText = podios;

    document.getElementById(
      "vitoriashaas"
    ).innerText = vitorias;

    document.getElementById(
      "top5haas"
    ).innerText = top5;


    /* =====================
       GRÁFICO
    ===================== */

    const linha =
      document.getElementById(
        "linhaGraficohaas"
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
      "Erro haas:",
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

    carregarTemporadahaas();

    setInterval(
      carregarTemporadahaas,
      60000
    );

  }
);




// =========================================
// PAINEL DE NOTÍCIAS Haas
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiasHaas");
const fecharNoticias = document.getElementById("fecharNoticiasHaas");

const atualizarNoticias =
document.getElementById("atualizarNoticiasHaas");


const painelNoticias = document.getElementById("painelNoticiasHaas");
const overlayNoticias = document.getElementById("overlayNoticiasHaas");

const listaNoticias = document.getElementById("listaNoticiasHaas");




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
        <div class="loading-noticias-Haas">

            <div class="spinner-Haas"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{

        const resposta = await fetch(

`https://gnews.io/api/v4/search?q=Haas Formula 1&lang=en&country=gb&max=10&apikey=${API_KEY}`

        );

        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-Haas">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-Haas">

                <img
                src="${noticia.image || 'icons/HaasF1.png'}"
                alt="Notícia">

                <div class="card-conteudo-Haas">

                    <div class="data-noticia-Haas">

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

        <div class="loading-noticias-Haas">

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
        haas TEAMMATE
==================================================*/



const haasSeason = 2026;


/* API */

const jolpicaAPI =
"https://api.jolpi.ca/ergast/f1";



/*==============================================
        PILOTOS haas
==============================================*/


const haasDrivers = {


    Ocon:{

        number:31,
        name:"Esteban Ocon"

    },


    Bearman:{

        number:87,
        name:"Oliver Bearman"

    }


};




/*==============================================
        ESTATÍSTICAS
==============================================*/


let haasStats = {


    Ocon:{


        wins:0,
        podiums:0,
        poles:0,
        fastest:0,
        points:0


    },


    Bearman:{


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


let haasRaces = [];




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


async function gethaasCalendar(){



    const url =

    `${jolpicaAPI}/${haasSeason}.json`;



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



    haasRaces = races;



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

    `${jolpicaAPI}/${haasSeason}/${round}/results.json`;



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
        haas TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 2
==================================================*/



/*==============================================
        IDENTIFICAR PILOTO
==============================================*/


function gethaasDriver(driverId){


    if(driverId === "ocon"){

        return "Ocon";

    }


    if(driverId === "bearman"){

        return "Bearman";

    }


    return null;


}






/*==============================================
        RESET ESTATÍSTICAS
==============================================*/


function resethaasStats(){


    haasStats = {


        Ocon:{


            wins:0,
            podiums:0,
            poles:0,
            fastest:0,
            points:0


        },


        Bearman:{


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



    for(const race of haasRaces){



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

            gethaasDriver(driverId);



            if(!name)
                continue;




            const stats =

            haasStats[name];




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



    for(const race of haasRaces){



        const round = race.round;



        const url =

        `${jolpicaAPI}/${haasSeason}/${round}/qualifying.json`;



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

            gethaasDriver(driverId);



            if(name){

                haasStats[name].poles++;

            }



        }



    }



}







/*==============================================
        BUSCAR PONTOS OFICIAIS DO CAMPEONATO
==============================================*/


async function getOfficialChampionship(){



    const url =

    `${jolpicaAPI}/${haasSeason}/driverStandings.json`;



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

        gethaasDriver(
            driver.Driver.driverId
        );



        if(!name)
            continue;



        haasStats[name].points =

        Number(driver.points);



    }



    console.log(

        "Pontos oficiais:",
        haasStats

    );


}







/*==============================================
        EXECUTAR CÁLCULO COMPLETO
==============================================*/


async function calculatehaasBattle(){



    resethaasStats();



    await calculateRaceResults();



    await calculatePoles();



    await getOfficialChampionship();




    console.log(

        "Estatísticas finais:",
        haasStats

    );



    updatehaasBattle();



}

/*==================================================
        haas TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 3
==================================================*/



/*==============================================
        ATUALIZAR VALORES
==============================================*/


function sethaasValue(id,value){


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
        ATUALIZAR CARD haas
==============================================*/


function updatehaasBattle(){



    const Ocon =

    haasStats.Ocon;



    const Bearman =

    haasStats.Bearman;





    // VITÓRIAS


    sethaasValue(
        "haasWinsLeft",
        Ocon.wins
    );


    sethaasValue(
        "haasWinsRight",
        Bearman.wins
    );


    updateBars(
        Ocon.wins,
        Bearman.wins,
        "haasBarWinsLeft",
        "haasBarWinsRight"
    );





    // PÓDIOS


    sethaasValue(
        "haasPodiumsLeft",
        Ocon.podiums
    );


    sethaasValue(
        "haasPodiumsRight",
        Bearman.podiums
    );


    updateBars(
        Ocon.podiums,
        Bearman.podiums,
        "haasBarPodiumsLeft",
        "haasBarPodiumsRight"
    );






    // POLES


    sethaasValue(
        "haasPolesLeft",
        Ocon.poles
    );


    sethaasValue(
        "haasPolesRight",
        Bearman.poles
    );


    updateBars(
        Ocon.poles,
        Bearman.poles,
        "haasBarPolesLeft",
        "haasBarPolesRight"
    );






    // FASTEST LAPS


    sethaasValue(
        "haasFastLeft",
        Ocon.fastest
    );


    sethaasValue(
        "haasFastRight",
        Bearman.fastest
    );


    updateBars(
        Ocon.fastest,
        Bearman.fastest,
        "haasBarFastLeft",
        "haasBarFastRight"
    );







    // PONTOS


    sethaasValue(
        "haasPointsLeft",
        Ocon.points
    );


    sethaasValue(
        "haasPointsRight",
        Bearman.points
    );


    updateBars(
        Ocon.points,
        Bearman.points,
        "haasBarPointsLeft",
        "haasBarPointsRight"
    );



}








/*==============================================
        TEMPORADA NO CARD
==============================================*/


function updateSeason(){


    const element =

    document.getElementById(
        "haasSeason"
    );



    if(element){


        element.textContent =

        "TEMPORADA " + haasSeason;


    }


}








/*==============================================
        SISTEMA COMPLETO
==============================================*/


async function loadhaasBattle(){



    console.log(

        "Iniciando haas Battle..."

    );




    await gethaasCalendar();




    await calculatehaasBattle();




    updateSeason();




    updatehaasBattle();





    console.log(

        "Sistema haas carregado"

    );



}








/*==============================================
        INICIAR
==============================================*/


loadhaasBattle();








/*==============================================
        ATUALIZAÇÃO AUTOMÁTICA
==============================================*/


setInterval(()=>{


    console.log(

        "Atualizando haas Battle..."

    );



    loadhaasBattle();



},1800000);




/*==================================================
        haas DRIVER EVOLUTION
        ocon x bearman
==================================================*/

document.addEventListener("DOMContentLoaded", () => {


    /*==============================================
            DADOS HISTÓRICOS
    ==============================================*/

    const driverData = {

    ocon: {

      2016: 0,
      2017: 87,
      2018: 49,
      2020: 62,
      2021: 74,
      2022: 92,
      2023: 58,
      2024: 23,
      2025: 14

    },

    bearman: {

      2024: 7,
      2025: 11

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
            ".evolution-mode-haas"
        );


    const yLabels =
        document.querySelector(
            ".chart-y-labels-haas"
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
        ocon e bearman nos anos finais.
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


                if (number === 31) {

                    driverData.ocon[2026] =
                        points;

                }


                if (number === 87) {

                    driverData.bearman[2026] =
                        points;

                }

            });


            /*======================================
                    ATUALIZAR ESCALA
            ======================================*/

            const allPoints = [

                ...Object.values(
                    driverData.ocon
                ),

                ...Object.values(
                    driverData.bearman
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


        if (mode === "ocon") {

            seasons =
                Object.keys(
                    driverData.ocon
                );

        }


        else if (mode === "bearman") {

            seasons =
                Object.keys(
                    driverData.bearman
                );

        }


        else {

            seasons = [

                ...new Set([

                    ...Object.keys(
                        driverData.ocon
                    ),

                    ...Object.keys(
                        driverData.bearman
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
        driver === "ocon"
            ? "bearman"
            : "ocon";


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
                driver === "ocon"
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

            if (driver === "bearman") {

                return baseX -
                    DRIVER_SEPARATION;

            }


            if (driver === "ocon") {

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
            "evolution-svg-haas"
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
            "oconGradient";


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
            "bearmanGradient";


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
            "chart-grid-haas";


        seasons.forEach(() => {

            const line =
                document.createElement(
                    "div"
                );


            line.className =
                "chart-grid-line-haas";


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
                "chart-point-haas"
            );


            if (
                driver === "bearman"
            ) {

                circle.classList.add(
                    "bearman-haas"
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
        driver === "bearman"
            ? "ocon"
            : "bearman";


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
    "chart-value-haas"
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
                ocon
        ==========================================*/

        if (
            mode === "both" ||
            mode === "ocon"
        ) {

            createDriverLine(
                "ocon",
                "ocon-path-haas"
            );

        }


        /*==========================================
                bearman
        ==========================================*/

        if (
            mode === "both" ||
            mode === "bearman"
        ) {

            createDriverLine(
                "bearman",
                "bearman-path-haas"
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
                    "chart-year-haas"
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
                ".evolution-mode-haas.active"
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