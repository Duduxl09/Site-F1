document.addEventListener("DOMContentLoaded", function(){

/* =========================
   ANIMAÇÃO DOS BLOCOS
========================= */
const blocos = document.querySelectorAll(".bloco-equipe-aston");

blocos.forEach((bloco, i)=>{
  bloco.style.opacity = 0;
  bloco.style.transform = "translateY(20px)";

  setTimeout(()=>{
    bloco.style.opacity = 1;
    bloco.style.transform = "translateY(0)";
  }, i * 300);
});



// ======================================================
// aston Stats Automáticas
// API: Jolpica
// ======================================================

// -------------------------------------
// HISTÓRICO DA aston
// (Atualize somente quando quiser)
// -------------------------------------

const historicoaston = {

    corridas: 120,
    q3: 87,
    podio: 9,
    top10: 67,
    pontos: 595

};

// -------------------------------------
// CONFIGURAÇÃO
// -------------------------------------

const equipe = "aston_martin";
const temporada = "2026";

// -------------------------------------
// ELEMENTOS HTML
// -------------------------------------

const contadorCorridas =
document.getElementById("corridas-aston");

const contadorq3 =
document.getElementById("q3-aston");

const contadorpodio =
document.getElementById("podio-aston");

const contadortop10 =
document.getElementById("top10-aston");

const contadorPontos =
document.getElementById("pontos-aston");

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

            q32026++;

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
        historicoaston.corridas +
        corridas2026,

        q3:
        historicoaston.q3 +
        q32026,

        podio:
        historicoaston.podio +
        podio2026,

        top10:
        historicoaston.top10 +
        top102026,

        pontos:
        historicoaston.pontos +
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

    const secao = document.querySelector(".numeros-aston");

    if(!secao) return;

    const observer = new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-aston")
                .forEach(contador=>{

                    if(contador.classList.contains("contado")) return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-aston"
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
    .querySelectorAll(".animar-aston")
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


	

const erasaston = [

{
titulo: "Capítulo I – Origem como Jordan (1991-2005)",
texto: "A história da atual Aston Martin começa com a equipe Jordan Grand Prix, fundada por Eddie Jordan em 1991. Conhecida pelo seu espírito ousado e carros icônicos, a equipe rapidamente se tornou uma presença forte no meio do grid. O auge veio em 1999, quando brigou pelo campeonato. Além disso, a Jordan revelou grandes talentos ao longo dos anos.",


timeline: [
{ano:"1991", imagem:"aston/1991.jpeg", descricao:"Estreia da Jordan na F1"},
{ano:"1998", imagem:"aston/1998.jpg", descricao:"Primeira vitória na Bélgica"},
{ano:"1999", imagem:"aston/1999.jpg", descricao:"Disputa pelo título"},
{ano:"2005", imagem:"aston/2005.jpeg", descricao:"Fim da era Jordan"}
]
},

{
titulo: "Capítulo II – Midland e Spyker (2006-2007)",
texto: "Após a venda da Jordan, a equipe passou por uma fase instável, sendo renomeada para Midland em 2006 e depois Spyker em 2007. Durante esse período, enfrentou dificuldades financeiras e baixo desempenho, permanecendo no fundo do grid sem resultados expressivos.",
timeline: [
{ano:"2006", imagem:"aston/2006.jpg", descricao:"Era Midland"},
{ano:"2007", imagem:"aston/2007.jpeg", descricao:"Transição para Spyker"}
]
},

{
titulo: "Capítulo III – Force India (2008-2018)",
texto: "Em 2008, a equipe foi comprada por Vijay Mallya e renomeada para Force India. Essa fase marcou uma recuperação impressionante, com a equipe se tornando uma das mais eficientes do grid. Conquistou pódios importantes e frequentemente brigava no meio do pelotão com ótimo custo-benefício.",
timeline: [
{ano:"2008", imagem:"aston/2008.jpg", descricao:"Nascimento da Force India"},
{ano:"2009", imagem:"aston/2009.jpg", descricao:"Primeiro pódio e pole"},
{ano:"2016", imagem:"aston/2016.jpeg", descricao:"Melhor fase competitiva"},
{ano:"2018", imagem:"aston/2018.jpg", descricao:"Fim da Force India"}
]
},

{
titulo: "Capítulo IV – Racing Point (2019-2020)",
texto: "Após problemas financeiros, a equipe foi adquirida por um consórcio liderado por Lawrence Stroll, tornando-se Racing Point. Em 2020, ganhou destaque com um carro competitivo apelidado de 'Mercedes rosa', conquistando uma vitória marcante e vários pódios.",
timeline: [
{ano:"2019", imagem:"aston/2019.jpg", descricao:"Reestruturação da equipe"},
{ano:"2020", imagem:"aston/2020.jpeg", descricao:"Vitória e destaque no grid"}
]
},

{
titulo: "Capítulo V – Aston Martin (2021-atual)",
texto: "A partir de 2021, a equipe passou a competir como Aston Martin, trazendo de volta uma marca histórica à Fórmula 1. Com grandes investimentos e ambições de título, a equipe evoluiu rapidamente, conquistando pódios e se consolidando como uma força emergente no grid.",
timeline: [
{ano:"2021", imagem:"aston/2021.jpeg", descricao:"Retorno da Aston Martin"},
{ano:"2023", imagem:"aston/2023.jpeg", descricao:"Vários pódios na temporada"},
{ano:"2025", imagem:"aston/2025.jpeg", descricao:"Continuidade do projeto"}
]
}

];

function mostrarEra(index) {
    document.getElementById("tituloEra-aston").innerText = erasaston[index].titulo;
    document.getElementById("textoEra-aston").innerText = erasaston[index].texto;
    
 

    const timelineContainer = document.getElementById("aston-timeline");
    timelineContainer.innerHTML = "";

    erasaston[index].timeline.forEach(item => {
        timelineContainer.innerHTML += `
            <div class="aston-timeline-item">
                <div class="aston-timeline-year">${item.ano}</div>
                <img src="${item.imagem}" alt="">
                <p>${item.descricao}</p>
            </div>
        `;
    });
}

const botoes = document.querySelectorAll(".botoes-eras-aston button");

botoes.forEach(btn => btn.classList.remove("ativo"));



mostrarEra(0);


const toggleAston = document.getElementById("menuToggleAston");
const menuAston = document.getElementById("sideMenuAston");
const overlayAston = document.getElementById("overlayAston");
const closeAston = document.getElementById("closeMenuAston");

const linksMenuAston = document.querySelectorAll(".side-menu-aston a");

function fecharMenuAston() {
  if (menuAston) menuAston.classList.remove("active");
  if (overlayAston) overlayAston.classList.remove("active");
}

if (toggleAston) {
  toggleAston.addEventListener("click", () => {
    menuAston?.classList.add("active");
    overlayAston?.classList.add("active");
  });
}

if (closeAston) {
  closeAston.addEventListener("click", fecharMenuAston);
}

if (overlayAston) {
  overlayAston.addEventListener("click", fecharMenuAston);
}

linksMenuAston.forEach(link => {
  link.addEventListener("click", fecharMenuAston);
});

(function scrollLinksAston() {

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
// 🟢 HALL DA FAMA ASTON MARTIN
// =====================================================

const bg1Aston =
document.querySelector(".bg1-aston");

const bg2Aston =
document.querySelector(".bg2-aston");

const cardsAston =
document.querySelectorAll(".hall-card-aston");

const hallAston =
document.querySelector(".hall-aston");

const gridAston =
document.querySelector(".hall-grid-aston");

if(
  bg1Aston &&
  bg2Aston &&
  cardsAston.length > 0
){

  let currentAston = bg1Aston;
  let nextAston = bg2Aston;

  // =====================================
  // TROCA DE FUNDO
  // =====================================

  function changeBackgroundAston(img){

    if(!img) return;

    nextAston.style.backgroundImage =
    `url('${img}')`;

    nextAston.classList.add("active");

    currentAston.classList.remove("active");

    let temp = currentAston;

    currentAston = nextAston;
    nextAston = temp;

  }

  // inicia com primeiro card
  changeBackgroundAston(
    cardsAston[0].dataset.bg
  );

  // =====================================
  // EVENTOS
  // =====================================

  cardsAston.forEach(card => {

    const img = card.dataset.bg;

    // HOVER PC
    card.addEventListener(
      "mouseenter",
      () => {

        hallAston.classList.add(
          "showcase"
        );

        changeBackgroundAston(img);

      }
    );

    // CLICK MOBILE
    card.addEventListener(
      "click",
      () => {

        gridAston.classList.add(
          "active"
        );

        cardsAston.forEach(c => {

          c.classList.remove(
            "active"
          );

        });

        card.classList.add(
          "active"
        );

        hallAston.classList.add(
          "showcase"
        );

        changeBackgroundAston(img);

      }
    );

  });

  // =====================================
  // REMOVE SHOWCASE AO SAIR
  // =====================================

  hallAston.addEventListener(
    "mouseleave",
    () => {

      hallAston.classList.remove(
        "showcase"
      );

      gridAston.classList.remove(
        "active"
      );

      cardsAston.forEach(c => {

        c.classList.remove(
          "active"
        );

      });

    }
  );

}




const carsDataAston = {

  "2000": {

    image:"hallaston/fi2008.png",

  name:"Force India VJM01",

  engine:"Ferrari 056 V8",

  power:"~780 HP",

  year:"2008",

  driver:"Fisichella <br> Sutil"

},

  "2010": {

   image:"hallaston/rp2018.png",

  name:"Racing Point Force India RP20",

  engine:"Mercedes V6 Turbo",

  power:"~950 HP",

  year:"2018",

  driver:"Pérez <br> Ocon"

},

  "2020": {

    image:"hallaston/amr25.png",

    name:"Aston Martin AMR25",

    engine:"Mercedes V6 Turbo Hybrid",

    power:"~1000 HP",

    year:"2025",

    driver:"Alonso <br> Stroll"

  }

};

function changeEraAston(era){

  const section =
  document.getElementById("astonEvolution");

  const img =
  document.getElementById("carImage-aston");

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
    carsDataAston[era];

    if(!data) return;

    img.src = data.image;

    document.getElementById(
      "carName-aston"
    ).innerText = data.name;

    document.getElementById(
      "carEngine-aston"
    ).innerText = data.engine;

    document.getElementById(
      "carPower-aston"
    ).innerText = data.power;

    document.getElementById(
      "carYear-aston"
    ).innerText = data.year;

    document.getElementById(
      "carDriver-aston"
    ).innerHTML = data.driver;

    img.style.opacity = 1;

    img.style.transform =
        "scale(1)";

  },250);

}

window.changeEraAston =
changeEraAston;


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


async function carregarTemporadaastonmartin() {

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

    const astonmartin = construtores.find(
      e => e?.Constructor?.constructorId === "aston_martin"
    );

    if (astonmartin) {

      document.getElementById("posicaoastonmartin").innerText =
        astonmartin.position || "—";

      document.getElementById("pontosastonmartin").innerText =
        astonmartin.points || "0";

      document.getElementById("totalTabelaastonmartin").innerText =
        astonmartin.points || "0";
    }


    /* =====================
       RESULTADOS DA EQUIPE
    ===================== */

    const resultadosReq = await fetch(
      "https://api.jolpi.ca/ergast/f1/2026/constructors/aston_martin/results.json"
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

      let Alonso = "—";
      let Stroll = "—";

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

        if (nome === "Alonso") {

          Alonso =
            formatarResultadoF1(
              r?.positionText
            );

        }

        else if (nome === "Stroll") {

          Stroll =
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
          <td>${Alonso}</td>
          <td>${Stroll}</td>
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
      "avgGridastonmartin"
    ).innerText = avgGrid;


    /* =====================
       TABELA
    ===================== */

    document.getElementById(
      "tabelaastonmartin"
    ).innerHTML = html;


    /* =====================
       ESTATÍSTICAS
    ===================== */

    document.getElementById(
      "podiosastonmartin"
    ).innerText = podios;

    document.getElementById(
      "vitoriasastonmartin"
    ).innerText = vitorias;

    document.getElementById(
      "top5astonmartin"
    ).innerText = top5;


    /* =====================
       GRÁFICO
    ===================== */

    const linha =
      document.getElementById(
        "linhaGraficoastonmartin"
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
      "Erro astonmartin:",
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

    carregarTemporadaastonmartin();

    setInterval(
      carregarTemporadaastonmartin,
      60000
    );

  }
);



// =========================================
// PAINEL DE NOTÍCIAS Aston
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiasAston");
const fecharNoticias = document.getElementById("fecharNoticiasAston");

const atualizarNoticias =
document.getElementById("atualizarNoticiasAston");


const painelNoticias = document.getElementById("painelNoticiasAston");
const overlayNoticias = document.getElementById("overlayNoticiasAston");

const listaNoticias = document.getElementById("listaNoticiasAston");




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
        <div class="loading-noticias-Aston">

            <div class="spinner-Aston"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{

        const resposta = await fetch(

`https://gnews.io/api/v4/search?q=aston martin Formula 1&lang=en&country=gb&max=10&apikey=${API_KEY}`

        );

        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-Aston">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-Aston">

                <img
                src="${noticia.image || 'icons/asston.png'}"
                alt="Notícia">

                <div class="card-conteudo-Aston">

                    <div class="data-noticia-Aston">

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

        <div class="loading-noticias-Aston">

            Erro ao carregar notícias.

        </div>

        `;

    }

}

atualizarNoticias.addEventListener("click",()=>{

    carregarNoticias();

});



/*///////////////////////////////////////////
BOTAO TOP
/////////////////////////////////////////*/

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
        aston TEAMMATE
==================================================*/



const astonSeason = 2026;


/* API */

const jolpicaAPI =
"https://api.jolpi.ca/ergast/f1";



/*==============================================
        PILOTOS aston
==============================================*/


const astonDrivers = {


    Alonso:{

        number:14,
        name:"Fernando Alonso"

    },


    Stroll:{

        number:18,
        name:"Lance Stroll"

    }


};




/*==============================================
        ESTATÍSTICAS
==============================================*/


let astonStats = {


    Alonso:{


        wins:0,
        podiums:0,
        poles:0,
        fastest:0,
        points:0


    },


    Stroll:{


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


let astonRaces = [];




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


async function getastonCalendar(){



    const url =

    `${jolpicaAPI}/${astonSeason}.json`;



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



    astonRaces = races;



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

    `${jolpicaAPI}/${astonSeason}/${round}/results.json`;



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
        aston TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 2
==================================================*/



/*==============================================
        IDENTIFICAR PILOTO
==============================================*/


function getastonDriver(driverId){


    if(driverId === "alonso"){

        return "Alonso";

    }


    if(driverId === "stroll"){

        return "Stroll";

    }


    return null;


}






/*==============================================
        RESET ESTATÍSTICAS
==============================================*/


function resetastonStats(){


    astonStats = {


        Alonso:{


            wins:0,
            podiums:0,
            poles:0,
            fastest:0,
            points:0


        },


        Stroll:{


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



    for(const race of astonRaces){



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

            getastonDriver(driverId);



            if(!name)
                continue;




            const stats =

            astonStats[name];




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



    for(const race of astonRaces){



        const round = race.round;



        const url =

        `${jolpicaAPI}/${astonSeason}/${round}/qualifying.json`;



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

            getastonDriver(driverId);



            if(name){

                astonStats[name].poles++;

            }



        }



    }



}







/*==============================================
        BUSCAR PONTOS OFICIAIS DO CAMPEONATO
==============================================*/


async function getOfficialChampionship(){



    const url =

    `${jolpicaAPI}/${astonSeason}/driverStandings.json`;



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

        getastonDriver(
            driver.Driver.driverId
        );



        if(!name)
            continue;



        astonStats[name].points =

        Number(driver.points);



    }



    console.log(

        "Pontos oficiais:",
        astonStats

    );


}







/*==============================================
        EXECUTAR CÁLCULO COMPLETO
==============================================*/


async function calculateastonBattle(){



    resetastonStats();



    await calculateRaceResults();



    await calculatePoles();



    await getOfficialChampionship();




    console.log(

        "Estatísticas finais:",
        astonStats

    );



    updateastonBattle();



}

/*==================================================
        aston TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 3
==================================================*/



/*==============================================
        ATUALIZAR VALORES
==============================================*/


function setastonValue(id,value){


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
        ATUALIZAR CARD aston
==============================================*/


function updateastonBattle(){



    const Alonso =

    astonStats.Alonso;



    const Stroll =

    astonStats.Stroll;





    // VITÓRIAS


    setastonValue(
        "astonWinsLeft",
        Alonso.wins
    );


    setastonValue(
        "astonWinsRight",
        Stroll.wins
    );


    updateBars(
        Alonso.wins,
        Stroll.wins,
        "astonBarWinsLeft",
        "astonBarWinsRight"
    );





    // PÓDIOS


    setastonValue(
        "astonPodiumsLeft",
        Alonso.podiums
    );


    setastonValue(
        "astonPodiumsRight",
        Stroll.podiums
    );


    updateBars(
        Alonso.podiums,
        Stroll.podiums,
        "astonBarPodiumsLeft",
        "astonBarPodiumsRight"
    );






    // POLES


    setastonValue(
        "astonPolesLeft",
        Alonso.poles
    );


    setastonValue(
        "astonPolesRight",
        Stroll.poles
    );


    updateBars(
        Alonso.poles,
        Stroll.poles,
        "astonBarPolesLeft",
        "astonBarPolesRight"
    );






    // FASTEST LAPS


    setastonValue(
        "astonFastLeft",
        Alonso.fastest
    );


    setastonValue(
        "astonFastRight",
        Stroll.fastest
    );


    updateBars(
        Alonso.fastest,
        Stroll.fastest,
        "astonBarFastLeft",
        "astonBarFastRight"
    );







    // PONTOS


    setastonValue(
        "astonPointsLeft",
        Alonso.points
    );


    setastonValue(
        "astonPointsRight",
        Stroll.points
    );


    updateBars(
        Alonso.points,
        Stroll.points,
        "astonBarPointsLeft",
        "astonBarPointsRight"
    );



}








/*==============================================
        TEMPORADA NO CARD
==============================================*/


function updateSeason(){


    const element =

    document.getElementById(
        "astonSeason"
    );



    if(element){


        element.textContent =

        "TEMPORADA " + astonSeason;


    }


}








/*==============================================
        SISTEMA COMPLETO
==============================================*/


async function loadastonBattle(){



    console.log(

        "Iniciando aston Battle..."

    );




    await getastonCalendar();




    await calculateastonBattle();




    updateSeason();




    updateastonBattle();





    console.log(

        "Sistema aston carregado"

    );



}








/*==============================================
        INICIAR
==============================================*/


loadastonBattle();








/*==============================================
        ATUALIZAÇÃO AUTOMÁTICA
==============================================*/


setInterval(()=>{


    console.log(

        "Atualizando aston Battle..."

    );



    loadastonBattle();



},1800000);



/*==================================================
        aston DRIVER EVOLUTION
        alonso x stroll
==================================================*/

document.addEventListener("DOMContentLoaded", () => {


    /*==============================================
            DADOS HISTÓRICOS
    ==============================================*/

    const driverData = {

    alonso: {

      2001: 0,
      2003: 55,
      2004: 59,
      2005:133,
      2006: 134,
      2007: 109,
      2008: 61,
      2009: 26,
      2010: 252,
      2011: 257,
      2012: 278,
      2013: 242,
      2014: 161,
      2015: 11,
      2016: 54,
      2017: 17,
      2018: 50,
      2021: 81,
      2022: 81,
      2023: 206,
      2024: 70,
      2025: 56

    },

    stroll: {

      2017: 40,
      2018: 6,
      2019: 21,
      2020: 75,
      2021: 34,
      2022: 18,
      2023: 74,
      2024: 24,
      2025: 33

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
            ".evolution-mode-aston"
        );


    const yLabels =
        document.querySelector(
            ".chart-y-labels-aston"
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
        alonso e stroll nos anos finais.
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


                if (number === 14) {

                    driverData.alonso[2026] =
                        points;

                }


                if (number === 18) {

                    driverData.stroll[2026] =
                        points;

                }

            });


            /*======================================
                    ATUALIZAR ESCALA
            ======================================*/

            const allPoints = [

                ...Object.values(
                    driverData.alonso
                ),

                ...Object.values(
                    driverData.stroll
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


        if (mode === "alonso") {

            seasons =
                Object.keys(
                    driverData.alonso
                );

        }


        else if (mode === "stroll") {

            seasons =
                Object.keys(
                    driverData.stroll
                );

        }


        else {

            seasons = [

                ...new Set([

                    ...Object.keys(
                        driverData.alonso
                    ),

                    ...Object.keys(
                        driverData.stroll
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
        driver === "alonso"
            ? "stroll"
            : "alonso";


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
                driver === "alonso"
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

            if (driver === "stroll") {

                return baseX -
                    DRIVER_SEPARATION;

            }


            if (driver === "alonso") {

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
            "evolution-svg-aston"
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
            "alonsoGradient";


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
            "strollGradient";


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
            "chart-grid-aston";


        seasons.forEach(() => {

            const line =
                document.createElement(
                    "div"
                );


            line.className =
                "chart-grid-line-aston";


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
                "chart-point-aston"
            );


            if (
                driver === "stroll"
            ) {

                circle.classList.add(
                    "stroll-aston"
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
        driver === "stroll"
            ? "alonso"
            : "stroll";


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
    "chart-value-aston"
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
                alonso
        ==========================================*/

        if (
            mode === "both" ||
            mode === "alonso"
        ) {

            createDriverLine(
                "alonso",
                "alonso-path-aston"
            );

        }


        /*==========================================
                stroll
        ==========================================*/

        if (
            mode === "both" ||
            mode === "stroll"
        ) {

            createDriverLine(
                "stroll",
                "stroll-path-aston"
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
                    "chart-year-aston"
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
                ".evolution-mode-aston.active"
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