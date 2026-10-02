const erascadillac = [

{
titulo: "Capítulo I – Entrada na Fórmula 1 (2023–2026)",
texto: "A entrada da Cadillac na Fórmula 1 começou a ser planejada em 2023, quando a General Motors se uniu à Andretti Global com o objetivo de criar uma equipe americana na categoria. Apesar de receber aprovação inicial da FIA, o projeto enfrentou resistência da Fórmula 1 e das equipes existentes. Após reformulações e maior envolvimento direto da General Motors, a entrada foi oficialmente aprovada em 2025, confirmando a Cadillac como a 11ª equipe do grid a partir de 2026.",
timeline: [
{ano:"2023", imagem:"cadillac/andretti.jpg", descricao:"Anúncio da parceria com Andretti"},
{ano:"2025", imagem:"cadillac/confirmed.jpeg", descricao:"Entrada oficial confirmada na F1"},
{ano:"2025", imagem:"cadillac/drivers.jpeg", descricao:"Anuncio dos Pilotos"},
{ano:"2026", imagem:"cadillac/first.jpeg", descricao:"Estreia no grid da Fórmula 1"}
]
},

{
titulo: "Capítulo II – Estrutura e Desenvolvimento",
texto: "A Cadillac chega à Fórmula 1 com um projeto sólido liderado pela General Motors. A equipe investiu em infraestrutura, incluindo fábricas e centros de engenharia nos Estados Unidos e na Europa. Nos primeiros anos, utilizará unidades de potência fornecidas por outra fabricante, enquanto trabalha no desenvolvimento de seu próprio motor, com foco no futuro da categoria.",
timeline: [
{ano:"2024", imagem:"cadillac/infra.jpeg", descricao:"Investimento em infraestrutura"},
{ano:"2025", imagem:"cadillac/team.jpg", descricao:"Formação da equipe técnica"},
{ano:"2026", imagem:"cadillac/estreia.jpeg", descricao:"Desenvolvimento do primeiro carro"}
]
},

{
titulo: "Capítulo III – Futuro e Consolidação",
texto: "A Cadillac entra na Fórmula 1 com uma visão de longo prazo, buscando se estabelecer gradualmente como uma equipe competitiva. O projeto representa a expansão da presença americana na categoria e aposta em inovação, tecnologia e desenvolvimento contínuo para alcançar melhores resultados ao longo dos anos.",
timeline: [
{ano:"Futuro", imagem:"cadillac/enginer.jpeg", descricao:"Desenvolvimento de motor próprio"}
]
}

];

function mostrarEra(index) {
    document.getElementById("tituloEra-cadillac").innerText = erascadillac[index].titulo;
    document.getElementById("textoEra-cadillac").innerText = erascadillac[index].texto;

    const timelineContainer = document.getElementById("cadillac-timeline");
    timelineContainer.innerHTML = "";

    erascadillac[index].timeline.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cadillac-timeline-item");

        div.innerHTML = `
            <div class="cadillac-timeline-year">${item.ano}</div>
            <img src="${item.imagem}" alt="">
            <p>${item.descricao}</p>
        `;

        timelineContainer.appendChild(div);
    });

    const botoes = document.querySelectorAll(".botoes-eras-cadillac button");
    botoes.forEach(btn => btn.classList.remove("ativo"));

    if (botoes[index]) {
        botoes[index].classList.add("ativo");
    }
}

// inicia automático
mostrarEra(0);


const togglecadillac = document.getElementById("menuTogglecadillac");
const menucadillac = document.getElementById("sideMenucadillac");
const overlaycadillac = document.getElementById("overlaycadillac");
const closecadillac = document.getElementById("closeMenucadillac");

const linksMenucadillac = document.querySelectorAll(".side-menu-cadillac a");

function fecharMenucadillac() {
  if (menucadillac) menucadillac.classList.remove("active");
  if (overlaycadillac) overlaycadillac.classList.remove("active");
}

if (togglecadillac) {
  togglecadillac.addEventListener("click", () => {
    menucadillac?.classList.add("active");
    overlaycadillac?.classList.add("active");
  });
}

if (closecadillac) {
  closecadillac.addEventListener("click", fecharMenucadillac);
}

if (overlaycadillac) {
  overlaycadillac.addEventListener("click", fecharMenucadillac);
}

linksMenucadillac.forEach(link => {
  link.addEventListener("click", fecharMenucadillac);
});

(function scrollLinkscadillac() {

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


async function carregarTemporadacadillac() {

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

    const cadillac = construtores.find(
      e => e?.Constructor?.constructorId === "cadillac"
    );

    if (cadillac) {

      document.getElementById("posicaocadillac").innerText =
        cadillac.position || "—";

      document.getElementById("pontoscadillac").innerText =
        cadillac.points || "0";

      document.getElementById("totalTabelacadillac").innerText =
        cadillac.points || "0";
    }


    /* =====================
       RESULTADOS DA EQUIPE
    ===================== */

    const resultadosReq = await fetch(
      "https://api.jolpi.ca/ergast/f1/2026/constructors/cadillac/results.json"
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

      let Pérez = "—";
      let Bottas = "—";

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

/* =========================
   PILOTOS
========================= */

if (nome === "Pérez") {

  Pérez =
    formatarResultadoF1(
      r?.positionText
    );

}

else if (nome === "Bottas") {

  Bottas =
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
          <td>${Pérez}</td>
          <td>${Bottas}</td>
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
      "avgGridcadillac"
    ).innerText = avgGrid;


    /* =====================
       TABELA
    ===================== */

    document.getElementById(
      "tabelacadillac"
    ).innerHTML = html;


    /* =====================
       ESTATÍSTICAS
    ===================== */

    document.getElementById(
      "podioscadillac"
    ).innerText = podios;

    document.getElementById(
      "vitoriascadillac"
    ).innerText = vitorias;

    document.getElementById(
      "top5cadillac"
    ).innerText = top5;


    /* =====================
       GRÁFICO
    ===================== */

    const linha =
      document.getElementById(
        "linhaGraficocadillac"
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
      "Erro cadillac:",
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

    carregarTemporadacadillac();

    setInterval(
      carregarTemporadacadillac,
      60000
    );

  }
);


// =========================================
// PAINEL DE NOTÍCIAS cadillac
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiascadillac");
const fecharNoticias = document.getElementById("fecharNoticiascadillac");

const atualizarNoticias =
document.getElementById("atualizarNoticiascadillac");


const painelNoticias = document.getElementById("painelNoticiascadillac");
const overlayNoticias = document.getElementById("overlayNoticiascadillac");

const listaNoticias = document.getElementById("listaNoticiascadillac");




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
        <div class="loading-noticias-cadillac">

            <div class="spinner-cadillac"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{

        const resposta = await fetch(

`https://gnews.io/api/v4/search?q=mclaren F1&lang=en&country=gb&max=10&apikey=${API_KEY}`

				);

        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-cadillac">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-cadillac">

                <img
                src="${noticia.image || 'icons/cadillac.png'}"
                alt="Notícia">

                <div class="card-conteudo-cadillac">

                    <div class="data-noticia-cadillac">

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

        <div class="loading-noticias-cadillac">

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
// cadillac Stats Automáticas
// API: Jolpica
// ======================================================

// -------------------------------------
// HISTÓRICO DA cadillac
// (Atualize somente quando quiser)
// -------------------------------------

const historicocadillac = {

    corridas: 0,
    q3: 0,
    q2: 0,
    top10: 0,
    pontos: 0

};

// -------------------------------------
// CONFIGURAÇÃO
// -------------------------------------

const equipe = "cadillac";
const temporada = "2026";

// -------------------------------------
// ELEMENTOS HTML
// -------------------------------------

const contadorCorridas =
document.getElementById("corridas-cadillac");

const contadorq3 =
document.getElementById("q3-cadillac");

const contadorq2 =
document.getElementById("q2-cadillac");

const contadortop10 =
document.getElementById("top10-cadillac");

const contadorPontos =
document.getElementById("pontos-cadillac");

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
    let q22026 = 0;
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

            q22026++;

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
        historicocadillac.corridas +
        corridas2026,

        q3:
        historicocadillac.q3 +
        q32026,

        q2:
        historicocadillac.q2 +
        q22026,

        top10:
        historicocadillac.top10 +
        top102026,

        pontos:
        historicocadillac.pontos +
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

        contadorq2.dataset.target =
        stats.q2;

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

    const secao = document.querySelector(".numeros-cadillac");

    if(!secao) return;

    const observer = new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-cadillac")
                .forEach(contador=>{

                    if(contador.classList.contains("contado")) return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-cadillac"
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
    .querySelectorAll(".animar-cadillac")
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



/*==================================================
        cadillac TEAMMATE
==================================================*/



const cadillacSeason = 2026;


/* API */

const jolpicaAPI =
"https://api.jolpi.ca/ergast/f1";



/*==============================================
        PILOTOS cadillac
==============================================*/


const cadillacDrivers = {


    Perez:{

        number:11,
        name:"Sergio Perez"

    },


    Bottas:{

        number:77,
        name:"Valtteri Bottas"

    }


};




/*==============================================
        ESTATÍSTICAS
==============================================*/


let cadillacStats = {


    Perez:{


        wins:0,
        podiums:0,
        poles:0,
        fastest:0,
        points:0


    },


    Bottas:{


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


let cadillacRaces = [];




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


async function getcadillacCalendar(){



    const url =

    `${jolpicaAPI}/${cadillacSeason}.json`;



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



    cadillacRaces = races;



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

    `${jolpicaAPI}/${cadillacSeason}/${round}/results.json`;



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
        cadillac TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 2
==================================================*/



/*==============================================
        IDENTIFICAR PILOTO
==============================================*/


function getcadillacDriver(driverId){


    if(driverId === "perez"){

        return "Perez";

    }


    if(driverId === "bottas"){

        return "Bottas";

    }


    return null;


}






/*==============================================
        RESET ESTATÍSTICAS
==============================================*/


function resetcadillacStats(){


    cadillacStats = {


        Perez:{


            wins:0,
            podiums:0,
            poles:0,
            fastest:0,
            points:0


        },


        Bottas:{


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



    for(const race of cadillacRaces){



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

            getcadillacDriver(driverId);



            if(!name)
                continue;




            const stats =

            cadillacStats[name];




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



    for(const race of cadillacRaces){



        const round = race.round;



        const url =

        `${jolpicaAPI}/${cadillacSeason}/${round}/qualifying.json`;



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

            getcadillacDriver(driverId);



            if(name){

                cadillacStats[name].poles++;

            }



        }



    }



}







/*==============================================
        BUSCAR PONTOS OFICIAIS DO CAMPEONATO
==============================================*/


async function getOfficialChampionship(){



    const url =

    `${jolpicaAPI}/${cadillacSeason}/driverStandings.json`;



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

        getcadillacDriver(
            driver.Driver.driverId
        );



        if(!name)
            continue;



        cadillacStats[name].points =

        Number(driver.points);



    }



    console.log(

        "Pontos oficiais:",
        cadillacStats

    );


}







/*==============================================
        EXECUTAR CÁLCULO COMPLETO
==============================================*/


async function calculatecadillacBattle(){



    resetcadillacStats();



    await calculateRaceResults();



    await calculatePoles();



    await getOfficialChampionship();




    console.log(

        "Estatísticas finais:",
        cadillacStats

    );



    updatecadillacBattle();



}

/*==================================================
        cadillac TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 3
==================================================*/



/*==============================================
        ATUALIZAR VALORES
==============================================*/


function setcadillacValue(id,value){


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
        ATUALIZAR CARD cadillac
==============================================*/


function updatecadillacBattle(){



    const Perez =

    cadillacStats.Perez;



    const Bottas =

    cadillacStats.Bottas;





    // VITÓRIAS


    setcadillacValue(
        "cadillacWinsLeft",
        Perez.wins
    );


    setcadillacValue(
        "cadillacWinsRight",
        Bottas.wins
    );


    updateBars(
        Perez.wins,
        Bottas.wins,
        "cadillacBarWinsLeft",
        "cadillacBarWinsRight"
    );





    // PÓDIOS


    setcadillacValue(
        "cadillacPodiumsLeft",
        Perez.podiums
    );


    setcadillacValue(
        "cadillacPodiumsRight",
        Bottas.podiums
    );


    updateBars(
        Perez.podiums,
        Bottas.podiums,
        "cadillacBarPodiumsLeft",
        "cadillacBarPodiumsRight"
    );






    // POLES


    setcadillacValue(
        "cadillacPolesLeft",
        Perez.poles
    );


    setcadillacValue(
        "cadillacPolesRight",
        Bottas.poles
    );


    updateBars(
        Perez.poles,
        Bottas.poles,
        "cadillacBarPolesLeft",
        "cadillacBarPolesRight"
    );






    // FASTEST LAPS


    setcadillacValue(
        "cadillacFastLeft",
        Perez.fastest
    );


    setcadillacValue(
        "cadillacFastRight",
        Bottas.fastest
    );


    updateBars(
        Perez.fastest,
        Bottas.fastest,
        "cadillacBarFastLeft",
        "cadillacBarFastRight"
    );







    // PONTOS


    setcadillacValue(
        "cadillacPointsLeft",
        Perez.points
    );


    setcadillacValue(
        "cadillacPointsRight",
        Bottas.points
    );


    updateBars(
        Perez.points,
        Bottas.points,
        "cadillacBarPointsLeft",
        "cadillacBarPointsRight"
    );



}








/*==============================================
        TEMPORADA NO CARD
==============================================*/


function updateSeason(){


    const element =

    document.getElementById(
        "cadillacSeason"
    );



    if(element){


        element.textContent =

        "TEMPORADA " + cadillacSeason;


    }


}








/*==============================================
        SISTEMA COMPLETO
==============================================*/


async function loadcadillacBattle(){



    console.log(

        "Iniciando cadillac Battle..."

    );




    await getcadillacCalendar();




    await calculatecadillacBattle();




    updateSeason();




    updatecadillacBattle();





    console.log(

        "Sistema cadillac carregado"

    );



}








/*==============================================
        INICIAR
==============================================*/


loadcadillacBattle();








/*==============================================
        ATUALIZAÇÃO AUTOMÁTICA
==============================================*/


setInterval(()=>{


    console.log(

        "Atualizando cadillac Battle..."

    );



    loadcadillacBattle();



},1800000);





/*==================================================
        cadillac DRIVER EVOLUTION
        perez x bottas
==================================================*/

document.addEventListener("DOMContentLoaded", () => {


    /*==============================================
            DADOS HISTÓRICOS
    ==============================================*/

    const driverData = {

  perez: {

  2011: 14,
  2012: 66,
  2013: 49,
  2014: 59,
  2015: 78,
  2016: 101,
  2017: 100,
  2018: 62,
  2019: 52,
  2020: 125,
  2021: 190,
  2022: 305,
  2023: 285,
  2024: 152

},

bottas: {

  2013: 4,
  2014: 186,
  2015: 136,
  2016: 85,
  2017: 305,
  2018: 247,
  2019: 326,
  2020: 223,
  2021: 226,
  2022: 49,
  2023: 10,
  2024: 24

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
            ".evolution-mode-cadillac"
        );


    const yLabels =
        document.querySelector(
            ".chart-y-labels-cadillac"
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
        perez e bottas nos anos finais.
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


                if (number === 11) {

                    driverData.perez[2026] =
                        points;

                }


                if (number === 77) {

                    driverData.bottas[2026] =
                        points;

                }

            });


            /*======================================
                    ATUALIZAR ESCALA
            ======================================*/

            const allPoints = [

                ...Object.values(
                    driverData.perez
                ),

                ...Object.values(
                    driverData.bottas
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


        if (mode === "perez") {

            seasons =
                Object.keys(
                    driverData.perez
                );

        }


        else if (mode === "bottas") {

            seasons =
                Object.keys(
                    driverData.bottas
                );

        }


        else {

            seasons = [

                ...new Set([

                    ...Object.keys(
                        driverData.perez
                    ),

                    ...Object.keys(
                        driverData.bottas
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
        driver === "perez"
            ? "bottas"
            : "perez";


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
                driver === "perez"
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

            if (driver === "bottas") {

                return baseX -
                    DRIVER_SEPARATION;

            }


            if (driver === "perez") {

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
            "evolution-svg-cadillac"
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
            "perezGradient";


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
            "bottasGradient";


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
            "chart-grid-cadillac";


        seasons.forEach(() => {

            const line =
                document.createElement(
                    "div"
                );


            line.className =
                "chart-grid-line-cadillac";


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
                "chart-point-cadillac"
            );


            if (
                driver === "bottas"
            ) {

                circle.classList.add(
                    "bottas-cadillac"
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
        driver === "bottas"
            ? "perez"
            : "bottas";


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
    "chart-value-cadillac"
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
                perez
        ==========================================*/

        if (
            mode === "both" ||
            mode === "perez"
        ) {

            createDriverLine(
                "perez",
                "perez-path-cadillac"
            );

        }


        /*==========================================
                bottas
        ==========================================*/

        if (
            mode === "both" ||
            mode === "bottas"
        ) {

            createDriverLine(
                "bottas",
                "bottas-path-cadillac"
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
                    "chart-year-cadillac"
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
                ".evolution-mode-cadillac.active"
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