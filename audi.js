document.addEventListener("DOMContentLoaded", function(){

/* =========================
   ANIMAÇÃO DOS BLOCOS
========================= */
const blocos = document.querySelectorAll(".bloco-equipe-audi");

blocos.forEach((bloco, i)=>{
  bloco.style.opacity = 0;
  bloco.style.transform = "translateY(20px)";

  setTimeout(()=>{
    bloco.style.opacity = 1;
    bloco.style.transform = "translateY(0)";
  }, i * 300);
});


// ======================================================
// audi Stats Automáticas
// API: Jolpica
// ======================================================

// -------------------------------------
// HISTÓRICO DA audi
// (Atualize somente quando quiser)
// -------------------------------------

const historicoaudi = {

    corridas: 44,
    q3: 6,
    podios: 1,
    top10: 18,
    pontos: 74

};

// -------------------------------------
// CONFIGURAÇÃO
// -------------------------------------

const equipe = "audi";
const temporada = "2026";

// -------------------------------------
// ELEMENTOS HTML
// -------------------------------------

const contadorCorridas =
document.getElementById("corridas-audi");

const contadorq3 =
document.getElementById("q3-audi");

const contadorpodios =
document.getElementById("podios-audi");

const contadortop10 =
document.getElementById("top10-audi");

const contadorPontos =
document.getElementById("pontos-audi");

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

            q32026++;

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
        historicoaudi.corridas +
        corridas2026,

        q3:
        historicoaudi.q3 +
        q32026,

        podios:
        historicoaudi.podios +
        podios2026,

        top10:
        historicoaudi.top10 +
        top102026,

        pontos:
        historicoaudi.pontos +
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

    const secao = document.querySelector(".numeros-audi");

    if(!secao) return;

    const observer = new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-audi")
                .forEach(contador=>{

                    if(contador.classList.contains("contado")) return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-audi"
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
    .querySelectorAll(".animar-audi")
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



const erasaudi = [

{
titulo: "Capítulo I – Sauber (1993-2005)",
texto: "A história da futura equipe Audi começa com a Sauber, que entrou na Fórmula 1 em 1993. Ao longo dos anos, a equipe se destacou pela consistência e por revelar talentos, mantendo presença sólida no meio do grid.",
timeline: [
{ano:"1993", imagem:"audi/1993.jpeg", descricao:"Estreia da Sauber na F1"},
{ano:"2001", imagem:"audi/2001.jpg", descricao:"Melhor fase inicial"},
{ano:"2005", imagem:"audi/2005.jpeg", descricao:"Fim da primeira fase"}
]
},

{
titulo: "Capítulo II – BMW Sauber (2006-2009)",
texto: "Com a entrada da BMW, a equipe viveu seu auge. Conquistou vitórias e chegou a disputar posições de destaque no campeonato, incluindo uma vitória em 2008.",
timeline: [
{ano:"2006", imagem:"audi/2006.jpeg", descricao:"Parceria com BMW"},
{ano:"2008", imagem:"audi/2008.jpg", descricao:"Vitória no Canadá"},
{ano:"2009", imagem:"audi/2009.jpeg", descricao:"Fim da BMW Sauber"}
]
},

{
titulo: "Capítulo III – Retorno Sauber (2010-2022)",
texto: "Após a saída da BMW, a equipe voltou a ser Sauber. Passou por altos e baixos, mantendo-se no grid com recursos limitados e focando no desenvolvimento de pilotos.",
timeline: [
{ano:"2012", imagem:"audi/2012.jpg", descricao:"Pódios inesperados"},
{ano:"2017", imagem:"audi/2017.jpeg", descricao:"Crise financeira"},
{ano:"2022", imagem:"audi/2022.jpeg", descricao:"Última fase como Sauber"}
]
},

{
titulo: "Capítulo IV – Transição Audi (2023-2025)",
texto: "A equipe iniciou sua transformação para se tornar a Audi F1. Usando o Nome Kick temporariamente,Grandes investimentos foram feitos e a estrutura começou a ser preparada para a nova era.",
timeline: [
{ano:"2023", imagem:"audi/2023.jpeg", descricao:"Início da transição"},
{ano:"2024", imagem:"audi/2024.jpeg", descricao:"Desenvolvimento do projeto"},
{ano:"2025", imagem:"audi/2025.jpg", descricao:"Preparação final"},
{ano:"2026", imagem:"audi/2026.jpeg", descricao:"Oficialmente Audi"}
]
}
];

function mostrarEraAudi(index) {
    document.getElementById("tituloEra-audi").innerText = erasaudi[index].titulo;
    document.getElementById("textoEra-audi").innerText = erasaudi[index].texto;

    const timelineContainer = document.getElementById("audi-timeline");
    timelineContainer.innerHTML = "";

    erasaudi[index].timeline.forEach(item => {
        timelineContainer.innerHTML += `
            <div class="audi-timeline-item">
                <div class="audi-timeline-year">${item.ano}</div>
                <img src="${item.imagem}" alt="">
                <p>${item.descricao}</p>
            </div>
        `;
    });

    const botoes = document.querySelectorAll(".botoes-eras-audi button");
    botoes.forEach(btn => btn.classList.remove("ativo"));
    botoes[index].classList.add("ativo");
}

// inicia automático
mostrarEraAudi(0);


const toggleaudi = document.getElementById("menuToggleaudi");
const menuaudi = document.getElementById("sideMenuaudi");
const overlayaudi = document.getElementById("overlayaudi");
const closeaudi = document.getElementById("closeMenuaudi");

const linksMenuaudi = document.querySelectorAll(".side-menu-audi a");

function fecharMenuaudi() {
  if (menuaudi) menuaudi.classList.remove("active");
  if (overlayaudi) overlayaudi.classList.remove("active");
}

if (toggleaudi) {
  toggleaudi.addEventListener("click", () => {
    menuaudi?.classList.add("active");
    overlayaudi?.classList.add("active");
  });
}

if (closeaudi) {
  closeaudi.addEventListener("click", fecharMenuaudi);
}

if (overlayaudi) {
  overlayaudi.addEventListener("click", fecharMenuaudi);
}

linksMenuaudi.forEach(link => {
  link.addEventListener("click", fecharMenuaudi);
});

(function scrollLinksaudi() {

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




document.addEventListener("DOMContentLoaded", () => {

  const bg1Audi =
  document.querySelector(".bg1-audi");

  const bg2Audi =
  document.querySelector(".bg2-audi");

  const cardsAudi =
  document.querySelectorAll(".hall-card-audi");

  const hallAudi =
  document.querySelector(".hall-audi");

  const gridAudi =
  document.querySelector(".hall-grid-audi");

  if(
    bg1Audi &&
    bg2Audi &&
    cardsAudi.length > 0
  ){

    let currentAudi = bg1Audi;
    let nextAudi = bg2Audi;

    /* =====================================
       TROCA DE FUNDO
    ===================================== */

    function changeBackgroundAudi(img){

      if(!img) return;

      nextAudi.style.backgroundImage =
      `url('${img}')`;

      nextAudi.classList.add("active");

      currentAudi.classList.remove("active");

      let temp = currentAudi;

      currentAudi = nextAudi;
      nextAudi = temp;

    }

    /* inicia com primeiro card */

    changeBackgroundAudi(
      cardsAudi[0].dataset.bg
    );

    /* =====================================
       EVENTOS
    ===================================== */

    cardsAudi.forEach(card => {

      const img = card.dataset.bg;

      /* HOVER PC */

      card.addEventListener(
        "mouseenter",
        () => {

          hallAudi.classList.add(
            "showcase"
          );

          changeBackgroundAudi(img);

        }
      );

      /* CLICK MOBILE */

      card.addEventListener(
        "click",
        () => {

          gridAudi.classList.add(
            "active"
          );

          cardsAudi.forEach(c => {

            c.classList.remove(
              "active"
            );

          });

          card.classList.add(
            "active"
          );

          hallAudi.classList.add(
            "showcase"
          );

          changeBackgroundAudi(img);

        }
      );

    });

    /* =====================================
       REMOVE SHOWCASE AO SAIR
    ===================================== */

    hallAudi.addEventListener(
      "mouseleave",
      () => {

        hallAudi.classList.remove(
          "showcase"
        );

        gridAudi.classList.remove(
          "active"
        );

        cardsAudi.forEach(c => {

          c.classList.remove(
            "active"
          );

        });

      }
    );

  }

});


const carsDataAudi = {

"2000": {

  image:"hallaudi/sauber.png",

  name:"BMW Sauber F1.08",

  engine:"BMW P86/8 V8",

  power:"~780 HP",

  year:"2008",

  driver:"Kubica <br> Heidfeld"

},

  "2010": {

    image:"hallaudi/alfa.png",

    name:"Alfa Romeo C38",

    engine:"Ferrari V6 Turbo Hybrid",

    power:"~950 HP",

    year:"2019",

    driver:"Räikkönen <br> Giovinazzi"

  },

  "2020": {

    image:"hallaudi/kick.webp",

    name:"Kick Sauber C45",

    engine:"Ferrari V6 Turbo Hybrid",

    power:"~1000 HP",

    year:"2025",

    driver:"Hülkenberg <br> Bortoleto"

  }

};

function changeEraAudi(era){

  const section =
  document.getElementById("audiEvolution");

  const img =
  document.getElementById("carImage-audi");

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
    carsDataAudi[era];

    if(!data) return;

    img.src = data.image;

    document.getElementById(
      "carName-audi"
    ).innerText = data.name;

    document.getElementById(
      "carEngine-audi"
    ).innerText = data.engine;

    document.getElementById(
      "carPower-audi"
    ).innerText = data.power;

    document.getElementById(
      "carYear-audi"
    ).innerText = data.year;

    document.getElementById(
      "carDriver-audi"
    ).innerHTML = data.driver;

    img.style.opacity = 1;

    img.style.transform =
    "scale(1)";

  },250);

}

window.changeEraAudi =
changeEraAudi;



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


async function carregarTemporadaaudi() {

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

    const audi = construtores.find(
      e => e?.Constructor?.constructorId === "audi"
    );

    if (audi) {

      document.getElementById("posicaoaudi").innerText =
        audi.position || "—";

      document.getElementById("pontosaudi").innerText =
        audi.points || "0";

      document.getElementById("totalTabelaaudi").innerText =
        audi.points || "0";
    }


    /* =====================
       RESULTADOS DA EQUIPE
    ===================== */

    const resultadosReq = await fetch(
      "https://api.jolpi.ca/ergast/f1/2026/constructors/audi/results.json"
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

      let Hülkenberg = "—";
      let Bortoleto = "—";

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

        if (nome === "Hülkenberg") {

          Hülkenberg =
            formatarResultadoF1(
              r?.positionText
            );

        }

        else if (nome === "Bortoleto") {

          Bortoleto =
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
          <td>${Hülkenberg}</td>
          <td>${Bortoleto}</td>
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
      "avgGridaudi"
    ).innerText = avgGrid;


    /* =====================
       TABELA
    ===================== */

    document.getElementById(
      "tabelaaudi"
    ).innerHTML = html;


    /* =====================
       ESTATÍSTICAS
    ===================== */

    document.getElementById(
      "podiosaudi"
    ).innerText = podios;

    document.getElementById(
      "vitoriasaudi"
    ).innerText = vitorias;

    document.getElementById(
      "top5audi"
    ).innerText = top5;


    /* =====================
       GRÁFICO
    ===================== */

    const linha =
      document.getElementById(
        "linhaGraficoaudi"
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
      "Erro audi:",
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

    carregarTemporadaaudi();

    setInterval(
      carregarTemporadaaudi,
      60000
    );

  }
);


// =========================================
// PAINEL DE NOTÍCIAS audi
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiasaudi");
const fecharNoticias = document.getElementById("fecharNoticiasaudi");

const atualizarNoticias =
document.getElementById("atualizarNoticiasaudi");


const painelNoticias = document.getElementById("painelNoticiasaudi");
const overlayNoticias = document.getElementById("overlayNoticiasaudi");

const listaNoticias = document.getElementById("listaNoticiasaudi");




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
        <div class="loading-noticias-audi">

            <div class="spinner-audi"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{

        const resposta = await fetch(

`https://gnews.io/api/v4/search?q=audi Formula 1&lang=en&country=gb&max=10&apikey=${API_KEY}`

        );

        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-audi">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-audi">

                <img
                src="${noticia.image || 'icons/audi.png'}"
                alt="Notícia">

                <div class="card-conteudo-audi">

                    <div class="data-noticia-audi">

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

        <div class="loading-noticias-audi">

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
        audi TEAMMATE
==================================================*/



const audiSeason = 2026;


/* API */

const jolpicaAPI =
"https://api.jolpi.ca/ergast/f1";



/*==============================================
        PILOTOS audi
==============================================*/


const audiDrivers = {


    Hulkenberg:{

        number:27,
        name:"Nico Hulkenberg"

    },


    Bortoleto:{

        number:5,
        name:"Gabriel Bortoleto"

    }


};




/*==============================================
        ESTATÍSTICAS
==============================================*/


let audiStats = {


    Hulkenberg:{


        wins:0,
        podiums:0,
        poles:0,
        fastest:0,
        points:0


    },


    Bortoleto:{


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


let audiRaces = [];




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


async function getaudiCalendar(){



    const url =

    `${jolpicaAPI}/${audiSeason}.json`;



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



    audiRaces = races;



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

    `${jolpicaAPI}/${audiSeason}/${round}/results.json`;



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
        audi TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 2
==================================================*/



/*==============================================
        IDENTIFICAR PILOTO
==============================================*/


function getaudiDriver(driverId){


    if(driverId === "hulkenberg"){

        return "Hulkenberg";

    }


    if(driverId === "bortoleto"){

        return "Bortoleto";

    }


    return null;


}






/*==============================================
        RESET ESTATÍSTICAS
==============================================*/


function resetaudiStats(){


    audiStats = {


        Hulkenberg:{


            wins:0,
            podiums:0,
            poles:0,
            fastest:0,
            points:0


        },


        Bortoleto:{


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



    for(const race of audiRaces){



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

            getaudiDriver(driverId);



            if(!name)
                continue;




            const stats =

            audiStats[name];




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



    for(const race of audiRaces){



        const round = race.round;



        const url =

        `${jolpicaAPI}/${audiSeason}/${round}/qualifying.json`;



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

            getaudiDriver(driverId);



            if(name){

                audiStats[name].poles++;

            }



        }



    }



}







/*==============================================
        BUSCAR PONTOS OFICIAIS DO CAMPEONATO
==============================================*/


async function getOfficialChampionship(){



    const url =

    `${jolpicaAPI}/${audiSeason}/driverStandings.json`;



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

        getaudiDriver(
            driver.Driver.driverId
        );



        if(!name)
            continue;



        audiStats[name].points =

        Number(driver.points);



    }



    console.log(

        "Pontos oficiais:",
        audiStats

    );


}







/*==============================================
        EXECUTAR CÁLCULO COMPLETO
==============================================*/


async function calculateaudiBattle(){



    resetaudiStats();



    await calculateRaceResults();



    await calculatePoles();



    await getOfficialChampionship();




    console.log(

        "Estatísticas finais:",
        audiStats

    );



    updateaudiBattle();



}

/*==================================================
        audi TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 3
==================================================*/



/*==============================================
        ATUALIZAR VALORES
==============================================*/


function setaudiValue(id,value){


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
        ATUALIZAR CARD audi
==============================================*/


function updateaudiBattle(){



    const Hulkenberg =

    audiStats.Hulkenberg;



    const Bortoleto =

    audiStats.Bortoleto;





    // VITÓRIAS


    setaudiValue(
        "audiWinsLeft",
        Hulkenberg.wins
    );


    setaudiValue(
        "audiWinsRight",
        Bortoleto.wins
    );


    updateBars(
        Hulkenberg.wins,
        Bortoleto.wins,
        "audiBarWinsLeft",
        "audiBarWinsRight"
    );





    // PÓDIOS


    setaudiValue(
        "audiPodiumsLeft",
        Hulkenberg.podiums
    );


    setaudiValue(
        "audiPodiumsRight",
        Bortoleto.podiums
    );


    updateBars(
        Hulkenberg.podiums,
        Bortoleto.podiums,
        "audiBarPodiumsLeft",
        "audiBarPodiumsRight"
    );






    // POLES


    setaudiValue(
        "audiPolesLeft",
        Hulkenberg.poles
    );


    setaudiValue(
        "audiPolesRight",
        Bortoleto.poles
    );


    updateBars(
        Hulkenberg.poles,
        Bortoleto.poles,
        "audiBarPolesLeft",
        "audiBarPolesRight"
    );






    // FASTEST LAPS


    setaudiValue(
        "audiFastLeft",
        Hulkenberg.fastest
    );


    setaudiValue(
        "audiFastRight",
        Bortoleto.fastest
    );


    updateBars(
        Hulkenberg.fastest,
        Bortoleto.fastest,
        "audiBarFastLeft",
        "audiBarFastRight"
    );







    // PONTOS


    setaudiValue(
        "audiPointsLeft",
        Hulkenberg.points
    );


    setaudiValue(
        "audiPointsRight",
        Bortoleto.points
    );


    updateBars(
        Hulkenberg.points,
        Bortoleto.points,
        "audiBarPointsLeft",
        "audiBarPointsRight"
    );



}








/*==============================================
        TEMPORADA NO CARD
==============================================*/


function updateSeason(){


    const element =

    document.getElementById(
        "audiSeason"
    );



    if(element){


        element.textContent =

        "TEMPORADA " + audiSeason;


    }


}








/*==============================================
        SISTEMA COMPLETO
==============================================*/


async function loadaudiBattle(){



    console.log(

        "Iniciando audi Battle..."

    );




    await getaudiCalendar();




    await calculateaudiBattle();




    updateSeason();




    updateaudiBattle();





    console.log(

        "Sistema audi carregado"

    );



}








/*==============================================
        INICIAR
==============================================*/


loadaudiBattle();








/*==============================================
        ATUALIZAÇÃO AUTOMÁTICA
==============================================*/


setInterval(()=>{


    console.log(

        "Atualizando audi Battle..."

    );



    loadaudiBattle();



},1800000);




/*==================================================
        audi DRIVER EVOLUTION
        hulkenberg x bortoleto
==================================================*/

document.addEventListener("DOMContentLoaded", () => {


    /*==============================================
            DADOS HISTÓRICOS
    ==============================================*/

    const driverData = {

      hulkenberg: {

      2010: 22,
      2012: 63,
      2013: 51,
      2014: 96,
      2015: 58,
      2016: 72,
      2017: 43,
      2018: 69,
      2019: 37,
      2023: 9,
      2024: 41,
      2025: 58

    },

    bortoleto: {

      2025: 12

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
            ".evolution-mode-audi"
        );


    const yLabels =
        document.querySelector(
            ".chart-y-labels-audi"
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
        hulkenberg e bortoleto nos anos finais.
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


                if (number === 27) {

                    driverData.hulkenberg[2026] =
                        points;

                }


                if (number === 5) {

                    driverData.bortoleto[2026] =
                        points;

                }

            });


            /*======================================
                    ATUALIZAR ESCALA
            ======================================*/

            const allPoints = [

                ...Object.values(
                    driverData.hulkenberg
                ),

                ...Object.values(
                    driverData.bortoleto
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


        if (mode === "hulkenberg") {

            seasons =
                Object.keys(
                    driverData.hulkenberg
                );

        }


        else if (mode === "bortoleto") {

            seasons =
                Object.keys(
                    driverData.bortoleto
                );

        }


        else {

            seasons = [

                ...new Set([

                    ...Object.keys(
                        driverData.hulkenberg
                    ),

                    ...Object.keys(
                        driverData.bortoleto
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
        driver === "hulkenberg"
            ? "bortoleto"
            : "hulkenberg";


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
                driver === "hulkenberg"
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

            if (driver === "bortoleto") {

                return baseX -
                    DRIVER_SEPARATION;

            }


            if (driver === "hulkenberg") {

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
            "evolution-svg-audi"
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
            "hulkenbergGradient";


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
            "bortoletoGradient";


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
            "chart-grid-audi";


        seasons.forEach(() => {

            const line =
                document.createElement(
                    "div"
                );


            line.className =
                "chart-grid-line-audi";


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
                "chart-point-audi"
            );


            if (
                driver === "bortoleto"
            ) {

                circle.classList.add(
                    "bortoleto-audi"
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
        driver === "bortoleto"
            ? "hulkenberg"
            : "bortoleto";


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
    "chart-value-audi"
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
                hulkenberg
        ==========================================*/

        if (
            mode === "both" ||
            mode === "hulkenberg"
        ) {

            createDriverLine(
                "hulkenberg",
                "hulkenberg-path-audi"
            );

        }


        /*==========================================
                bortoleto
        ==========================================*/

        if (
            mode === "both" ||
            mode === "bortoleto"
        ) {

            createDriverLine(
                "bortoleto",
                "bortoleto-path-audi"
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
                    "chart-year-audi"
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
                ".evolution-mode-audi.active"
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