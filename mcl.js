document.addEventListener("DOMContentLoaded", () => {

	/* ==================================================
        DEBUG — HOVER REDES McLAREN
================================================== */


const $ = (seletor) => document.querySelector(seletor);
const $$ = (seletor) => document.querySelectorAll(seletor);

// -------------------------------------
// HISTÓRICO DA mcLaren
// (Atualize somente quando quiser)
// -------------------------------------

const historicomcLaren = {

    corridas: 998,
    vitorias: 201,
    podios: 552,
    poles: 173,
    pontos: 7790

};

// -------------------------------------
// CONFIGURAÇÃO
// -------------------------------------

const equipe = "mclaren";
const temporada = "2026";

// -------------------------------------
// ELEMENTOS HTML
// -------------------------------------

const contadorCorridas =
document.getElementById("corridas-mcLaren");

const contadorVitorias =
document.getElementById("vitorias-mcLaren");

const contadorPodios =
document.getElementById("podios-mcLaren");

const contadorPoles =
document.getElementById("poles-mcLaren");

const contadorPontos =
document.getElementById("pontos-mcLaren");

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
        historicomcLaren.corridas +
        corridas2026,

        vitorias:
        historicomcLaren.vitorias +
        vitorias2026,

        podios:
        historicomcLaren.podios +
        podios2026,

        poles:
        historicomcLaren.poles +
        poles2026,

        pontos:
        historicomcLaren.pontos +
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

    const secao = document.querySelector(".numeros-mcLaren");

    if(!secao) return;

    const observer = new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-mcLaren")
                .forEach(contador=>{

                    if(contador.classList.contains("contado")) return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-mcLaren"
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
    .querySelectorAll(".animar-mcLaren")
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
  // 🧱 TIMELINE PILOTOS
  // =====================================================
  (function timeline(){

    const itens = $$(".conteudo-timeline-mclaren");
    const linha = $(".linha-centro-mclaren");
    const secao = $(".timeline-mclaren");

    if(!secao || !linha || !itens.length) return;

    window.addEventListener("scroll", () => {

      const rect = secao.getBoundingClientRect();
      const alturaTela = window.innerHeight;

      if(rect.top < alturaTela && rect.bottom > 0){

        let progresso = (alturaTela - rect.top) / (rect.height + alturaTela);
        linha.style.height = progresso * rect.height + "px";

      }

      itens.forEach(item => {

        const pos = item.getBoundingClientRect().top;

        if(pos < alturaTela - 120){
          item.classList.add("ativo");
        }

      });

    });

  })();


  (function linhaProgresso(){

    window.addEventListener("load", () => {

      const pontos = $$(".ponto");
      const progresso = $(".linha-progresso");
      const luz = $(".luz");
      const linha = $(".linha-box");

      if(!pontos.length || !progresso || !luz || !linha) return;

      let i = 0;

      function animar(){

        if(i < pontos.length){

          pontos[i].classList.add("ativo");

          let larguraLinha = linha.clientWidth;

          let left = pontos[i].getAttribute("style");
          left = left.replace("left:", "").replace("%", "").trim();

          let posPx = (parseFloat(left) / 100) * larguraLinha;

          progresso.style.width = posPx + "px";
          luz.style.left = (posPx - 30) + "px";

          i++;

          if(i == pontos.length){
            setTimeout(() => {
              progresso.style.width = "100%";
              luz.style.left = "100%";
            }, 1300);
          }

          setTimeout(animar, 1300);
        }

      }

      animar();

    });

  })();


  // =====================================================
  // 🏎️ TIMELINE CARROS
  // =====================================================
  (function timelineCar(){

    window.addEventListener("load", () => {

      const pontos = $$(".timeline-mclaren-car .ponto-car");
      const progresso = $(".timeline-mclaren-car .linha-progresso-car");
      const luz = $(".timeline-mclaren-car .luz-car");
      const linha = $(".timeline-mclaren-car .linha-box-car");

      if(!pontos.length || !progresso || !luz || !linha) return;

      let i = 0;

      function animar(){

        if(i >= pontos.length){

  // 🔥 FINAL DA LINHA
  progresso.style.width = "100%";
  luz.style.left = (linha.clientWidth - 30) + "px";

  return;
}

        const ponto = pontos[i];

        const foto = ponto.querySelector(".foto-car");
        const info = ponto.querySelector(".info-car");

        foto && foto.classList.add("ativo");

        let larguraLinha = linha.clientWidth;
        let leftPercent = parseFloat(ponto.style.left);
        let posPx = (leftPercent / 100) * larguraLinha;

        setTimeout(() => {

          info && info.classList.add("ativo");

          progresso.style.width = posPx + "px";
          luz.style.left = (posPx - 30) + "px";

          ponto.style.boxShadow = "0 0 15px #ff7a00";

          i++;

          setTimeout(animar, 1300);

        }, 900);

      }

      setTimeout(animar, 800);

    });

  })();


  // =====================================================
  // 🟠  LINHA GENEALOGICA
  // =====================================================
  (function blocosEquipe(){

    const blocos = $$(".bloco-equipe-mclaren");
    if(!blocos.length) return;

    blocos.forEach((bloco, i) => {

      bloco.style.opacity = 0;
      bloco.style.transform = "translateY(20px)";

      setTimeout(() => {
        bloco.style.opacity = 1;
        bloco.style.transform = "translateY(0)";
      }, i * 300);

    });

  })();


  // =====================================================
  //         ERAS
  //=====================================================
 (function(){

  const eras = [

    {
      titulo: "Capítulo I — Fundação (1966–1983)",
      texto: "A McLaren foi fundada em 1963 por Bruce McLaren e estreou na Fórmula 1 em 1966. Nos primeiros anos, a equipe cresceu rapidamente e se destacou pela inovação e competitividade. Em 1974, conquistou seus primeiros títulos mundiais com Emerson Fittipaldi, vencendo os campeonatos de pilotos e construtores. Em 1976, James Hunt deu à McLaren mais um título histórico em uma temporada marcada pela rivalidade com Niki Lauda. No início dos anos 1980, a chegada de Ron Dennis modernizou a equipe e trouxe avanços tecnológicos importantes, como o MP4/1, primeiro carro de Fórmula 1 com chassi de fibra de carbono. Até 1983, a McLaren já era uma das principais equipes da Fórmula 1.",
      timeline: [
        { ano:"1963", imagem:"mcleras/mclaren1963.png", descricao:"Logo 1963" },
        { ano:"1966", imagem:"mcleras/M2B.jpg", descricao:"M2B – Primeiro carro da McLaren na F1" },
        { ano:"1968", imagem:"mcleras/m7a.jpg", descricao:"M7A – Consolidação competitiva" },
        { ano:"1970", imagem:"mcleras/bruce.jpg", descricao:"Bruce McLaren" },
        { ano:"1973", imagem:"mcleras/m23.jpg", descricao:"M23 – Base para os primeiros sucessos" },
         { ano:"1974", imagem:"mcleras/fitchamp.jpeg", descricao:"Primeiro Titulo da Mclaren" },
          { ano:"1978", imagem:"mcleras/huntchamp.jpeg", descricao:"Titulo de James Hunt"}
      ]
    },

    {
      titulo: "Capítulo II — Era de Ouro (1984–1991)",
      texto: "McLaren dominou a Fórmula 1 entre 1984 e 1991, a McLaren viveu uma das maiores eras da Fórmula 1. Com pilotos como Niki Lauda, Alain Prost e Ayrton Senna, a equipe conquistou vários títulos mundiais de pilotos e construtores. A parceria com a Honda e o lendário MP4/4 marcaram a temporada de 1988, quando a McLaren dominou quase todas as corridas do campeonato. A rivalidade entre Senna e Prost também se tornou um dos momentos mais históricos do esporte. Até 1991, a McLaren se consolidou como a principal equipe da Fórmula 1. ",
      timeline: [
        { ano:"1984", imagem:"mcleras/mp4-4.jpg", descricao:"MP4/4 dominante" },
        { ano:"1988", imagem:"mcleras/senna.jpg", descricao:"Início do reinado de Senna" },
        { ano:"1989", imagem:"mcleras/prost.jpg", descricao:"Disputa histórica com Prost" },
        { ano:"1990", imagem:"mcleras/1990.jpg", descricao:"Senna campeão novamente" },
        { ano:"1991", imagem:"mcleras/1991.jpg", descricao:"Consistência no topo" }
      ]
    },

    {
      titulo: "Capítulo III — Motor Mercedes (1995–2014)",
      texto: "Entre 1995 e 2014, a McLaren passou por diferentes fases na Fórmula 1. Em 1998 e 1999, a equipe voltou ao topo com Mika Häkkinen e a parceria com a Mercedes, conquistando títulos mundiais e encerrando o domínio da Ferrari dos anos anteriores. Nos anos 2000, a McLaren continuou competitiva com pilotos como Kimi Räikkönen, Fernando Alonso e Lewis Hamilton. Em 2008, Hamilton conquistou o título mundial em uma das finais mais emocionantes da história da Fórmula 1. Após esse período, a equipe enfrentou temporadas mais difíceis, alternando bons resultados com problemas de desempenho e confiabilidade. Mesmo assim, a McLaren manteve sua importância histórica e continuou sendo uma das equipes mais tradicionais e respeitadas da categoria.",
      timeline: [
        { ano:"1998", imagem:"mcleras/1998.jpg", descricao:"Título de Häkkinen" },
        { ano:"2008", imagem:"mcleras/2008.jpg", descricao:"Título de Hamilton" },
        { ano:"2010", imagem:"mcleras/2010.jpg", descricao:"Competitividade alta" },
        { ano:"2012", imagem:"mcleras/2012.jpg", descricao:"Falta de constância" },
        { ano:"2013", imagem:"mcleras/2013.jpg", descricao:"Queda de performance" }
      ]
    },

    {
      titulo: "Capítulo IV — Honda (2015–2017)",
      texto: "Entre 2015 e 2017, a McLaren viveu um dos períodos mais difíceis de sua história ao retomar a parceria com a Honda. A expectativa era repetir o sucesso da era Ayrton Senna e Alain Prost, mas os motores japoneses sofreram com falta de potência e muitos problemas de confiabilidade. Mesmo contando com pilotos como Fernando Alonso e Jenson Button, a equipe teve dificuldades para disputar posições competitivas e acumulou abandonos e resultados abaixo do esperado. O período ficou marcado pelas críticas ao desempenho do motor Honda e pela frustração da McLaren em tentar voltar ao topo da Fórmula 1.",
      timeline: [
        { ano:"2015", imagem:"mcleras/2015.jpg", descricao:"GP2 engine meme" },
        { ano:"2016", imagem:"mcleras/2016.jpg", descricao:"Pouca competitividade" },
        { ano:"2017", imagem:"mcleras/2017.jpg", descricao:"Fim da parceria" }
      ]
    },

    {
      titulo: "Capítulo V — Renault (2018–2020)",
      texto: "Entre 2018 e 2020, a McLaren trocou os motores Honda pelos motores Renault em busca de melhores resultados. A mudança trouxe uma evolução importante no desempenho e ajudou a equipe a voltar gradualmente para a parte da frente do grid. Com pilotos como Carlos Sainz e Lando Norris, a McLaren passou por uma fase de reconstrução e voltou a conquistar pódios. Em 2020, a equipe terminou o campeonato de construtores na terceira posição, mostrando que estava novamente se tornando competitiva na Fórmula 1.",
      timeline: [
        { ano:"2018", imagem:"mcleras/2018.jpg", descricao:"Novo começo" },
        { ano:"2019", imagem:"mcleras/2019.jpg", descricao:"Pódios voltando" },
        { ano:"2020", imagem:"mcleras/2020.jpg", descricao:"Ressurgimento" }
      ]
    },

    {
      titulo: "Capítulo VI — Era atual (2021–atual)",
      texto: "Em 2021 a McLaren voltou a usar os motores mercedes e apresentou um grande passo para se consolidar como uma das principais equipes da Fórmula 1. Em 2021, a equipe conquistou sua primeira vitória em anos com Daniel Ricciardo no GP da Itália, marcando o início de uma nova fase competitiva. No meio da temporada de 2023, a McLaren protagonizou um dos maiores saltos de evolução da história recente da Fórmula 1. Após começar o ano longe das primeiras posições, a equipe trouxe atualizações que transformaram completamente o desempenho do carro, permitindo disputar pódios e vitórias regularmente. Com Lando Norris e Oscar Piastri, a McLaren voltou definitivamente ao topo da categoria. A equipe conquistou os títulos mundiais de construtores em 2024 e 2025, enquanto Norris venceu o campeonato de pilotos de 2025, encerrando um longo jejum e marcando o retorno da McLaren ao domínio da Fórmula 1.",
      timeline: [
        { ano:"2021", imagem:"mcleras/2021.jpg", descricao:"Crescimento" },
         { ano:"2021", imagem:"mcleras/ric.jpeg", descricao:"Vitoria de Daniel Ricciardo" },
        { ano:"2022", imagem:"mcleras/2022.jpg", descricao:"Adaptação ao regulamento" },
        { ano:"2023", imagem:"mcleras/2023.jpg", descricao:"Salto de performance" },
        { ano:"2024", imagem:"mcleras/2024.jpg", descricao:"Volta ao topo" },
        { ano:"2025", imagem:"mcleras/2025.jpg", descricao:"Bicampeã" },
        { ano:"2025", imagem:"mcleras/lando.jpeg", descricao:"Titulo de Lando Norris" },
         { ano:"2026", imagem:"mcleras/2026.jpg", descricao:"Em busca do tri" }
      ]
    }

  ];

  window.mostrarEra = function(index){

    const era = eras[index];
    if(!era) return;

    document.getElementById("tituloEra").innerText = era.titulo;
    document.getElementById("textoEra").innerText = era.texto;

    const container = document.getElementById("mclaren-timeline");
    container.innerHTML = "";

    era.timeline.forEach(item => {

      container.innerHTML += `
        <div class="mclaren-timeline-item">
          <div class="mclaren-timeline-year">${item.ano}</div>
          <img src="${item.imagem}">
          <p>${item.descricao}</p>
        </div>
      `;

    });

    // botões ativos
    const botoes = document.querySelectorAll(".botoes-eras button");

    botoes.forEach(b => b.classList.remove("ativo"));

    if(botoes[index]){
      botoes[index].classList.add("ativo");
    }

  };

  // inicial
  window.mostrarEra(0);

})();
  // =====================================================
  // 🎯 SCROLL LINKS
  // =====================================================
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


  // =====================================================
  // 🍔 MENU
  // =====================================================
const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("menuToggle");
const closeBtn = document.getElementById("closeMenu");

// 🔥 ABRIR MENU
openBtn.addEventListener("click", () => {
  menu.classList.add("active");
  overlay.classList.add("active");
});

// 🔥 FECHAR NO X
closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

// 🔥 FECHAR CLICANDO FORA
overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

document.querySelectorAll(".side-menu-mclaren a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });
});


  // =====================================================
  // 🏎️ CARD PILOTOS
  // =====================================================
  (function pilotos(){

    const cards = $$(".card-piloto-norris, .card-piloto-piastri");
    if(!cards.length) return;

    cards.forEach(card => {

      card.addEventListener("click", function(e) {

        if(this.classList.contains("active")) return;

        e.preventDefault();

        cards.forEach(c => c.classList.remove("active"));

        this.classList.add("active");

      });

    });

  })();

});



 


/*==================================================
        MCLAREN DRIVER EVOLUTION
        NORRIS x PIASTRI
==================================================*/

document.addEventListener("DOMContentLoaded", () => {


    /*==============================================
            DADOS HISTÓRICOS
    ==============================================*/

    const driverData = {

        norris: {

            2019: 49,
            2020: 97,
            2021: 160,
            2022: 122,
            2023: 205,
            2024: 374,
            2025: 423

        },


        piastri: {

            2023: 97,
            2024: 292,
            2025: 410

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
            ".evolution-mode-mclaren"
        );


    const yLabels =
        document.querySelector(
            ".chart-y-labels-mclaren"
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
        Norris e Piastri nos anos finais.
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


                if (number === 1) {

                    driverData.norris[2026] =
                        points;

                }


                if (number === 81) {

                    driverData.piastri[2026] =
                        points;

                }

            });


            /*======================================
                    ATUALIZAR ESCALA
            ======================================*/

            const allPoints = [

                ...Object.values(
                    driverData.norris
                ),

                ...Object.values(
                    driverData.piastri
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


        if (mode === "norris") {

            seasons =
                Object.keys(
                    driverData.norris
                );

        }


        else if (mode === "piastri") {

            seasons =
                Object.keys(
                    driverData.piastri
                );

        }


        else {

            seasons = [

                ...new Set([

                    ...Object.keys(
                        driverData.norris
                    ),

                    ...Object.keys(
                        driverData.piastri
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
        driver === "norris"
            ? "piastri"
            : "norris";


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
                driver === "norris"
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

            if (driver === "piastri") {

                return baseX -
                    DRIVER_SEPARATION;

            }


            if (driver === "norris") {

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
            "evolution-svg-mclaren"
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
            "norrisGradient";


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
            "#ff8000"
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
            "#ff8000"
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
            "piastriGradient";


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
            "chart-grid-mclaren";


        seasons.forEach(() => {

            const line =
                document.createElement(
                    "div"
                );


            line.className =
                "chart-grid-line-mclaren";


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
                        "chart-point-mclaren"
                    );


                    if (
                        driver === "piastri"
                    ) {

                        circle.classList.add(
                            "piastri-mclaren"
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
                            Norris fica acima.
                            Piastri também fica acima,
                            mas para o outro lado.
                        */

                        if (
                            driver === "norris"
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
                            Norris:
                            sempre acima.

                            Piastri:
                            sempre abaixo.

                            Assim os dois números
                            não ficam grudados.
                        */

                        if (
                            driver === "norris"
                        ) {

                            textX =
                                x - 8;

                            textY =
                                y - 16;

                        }


                        else {

                            textX =
                                x + 8;

                            textY =
                                y + 20;

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
                        "chart-value-mclaren"
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
                NORRIS
        ==========================================*/

        if (
            mode === "both" ||
            mode === "norris"
        ) {

            createDriverLine(
                "norris",
                "norris-path-mclaren"
            );

        }


        /*==========================================
                PIASTRI
        ==========================================*/

        if (
            mode === "both" ||
            mode === "piastri"
        ) {

            createDriverLine(
                "piastri",
                "piastri-path-mclaren"
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
                    "chart-year-mclaren"
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
                ".evolution-mode-mclaren.active"
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


  // =====================================================
  // HALL DA FAMA
  // =====================================================

document.addEventListener("DOMContentLoaded", () => {

  const bg1 = document.querySelector(".bg1-mclaren");
  const bg2 = document.querySelector(".bg2-mclaren");
  const cards = document.querySelectorAll(".hall-card-mclaren");

  if (!bg1 || !bg2 || cards.length === 0) return;

  let current = bg1;
  let next = bg2;

  // 🔥 FUNÇÃO DE TROCA SEGURA
  function changeBackground(img){

    if(!img) return;

    // preload evita piscar e “não trocar”
    const pre = new Image();
    pre.src = img;

    next.style.backgroundImage = `url('${img}')`;

    requestAnimationFrame(() => {

      next.classList.add("active");
      current.classList.remove("active");

      const temp = current;
      current = next;
      next = temp;

    });

  }

  // 🔥 SETA FUNDO INICIAL
  changeBackground(cards[0].dataset.bg);

  // 🔥 IMPORTANTE: usa POINTERENTER (mais confiável que mouseenter)
  cards.forEach(card => {

    const img = card.dataset.bg;

    card.addEventListener("pointerenter", () => {
      changeBackground(img);
    });

 card.addEventListener("click", () => {

  // 🔥 controla estado ativo
  const isActive = card.classList.contains("active");

  cards.forEach(c => c.classList.remove("active"));

  if(isActive){
    document.querySelector(".hall-grid-mclaren").classList.remove("active");
  } else {
    document.querySelector(".hall-grid-mclaren").classList.add("active");
    card.classList.add("active");
  }

  // 🔥 mantém troca de fundo
  changeBackground(img);

});

  });

});

const hallMclaren = document.querySelector(".hall-mclaren");
const bgMclaren = document.querySelector(".bg-hall-mclaren");

if(hallMclaren && bgMclaren){

bgMclaren.addEventListener("click", ()=>{

hallMclaren.classList.toggle("showcase");

});

}



  // =====================================================
  // 🏎️ CARROS EVOLUÇÃO
  // =====================================================



const carsData = {

  "60s": {

    image:"hallmcl/m1a.png",

    name:"McLaren M1A",

    engine:"Oldsmobile V8 4.5L",

    power:"~310 HP",

    year:"1964",

    driver:"Bruce McLaren"
  },

  "70s": {

    image:"titulosmcl/mm23.png",

    name:"McLaren M23",

    engine:"Ford Cosworth DFV V8",

    power:"~490 HP",

    year:"1974",

    driver:"Fittipaldi <br> Hulme"
  },

  "80s": {

    image:"titulosmcl/MP4-4.png",

    name:"McLaren MP4/4",

    engine:"Honda RA168E 1.5L V6 Turbo",

    power:"~700 HP",

    year:"1988",

    driver:"Senna <br> Prost"
  },

  "90s": {

    image:"titulosmcl/MP4-5b.png",

    name:"McLaren MP4/5B",

    engine:"Honda RA109E 3.5L V10",

    power:"~690 HP",

    year:"1990",

    driver:"Senna <br> Berger"
  },

  "2000s": {

    image:"hallmcl/mp4-15.png",

    name:"McLaren MP4-15",

    engine:"Mercedes F0110J V10",

    power:"~810 HP",

    year:"2000",

    driver:"Häkkinen <br> Coulthard"
  },

  "2010s": {

    image:"hallmcl/mp4-25.png",

    name:"McLaren MP4-25",

    engine:"Mercedes-Benz F0108X V8",

    power:"~780 HP",

    year:"2010",

    driver:"Hamilton <br> Button"
  },

  "2020s": {

    image:"titulosmcl/MCL39-2.png",

    name:"McLaren MCL39",

    engine:"Mercedes-AMG F1 M15 E Performance",

    power:"~1000 HP",

    year:"2025",

    driver:"Norris <br> Piastri"
  }

};

function changeDecade(decade){

   const section =
document.getElementById("mclarenEvolution");

  const img =
  document.getElementById("carImage");

  img.style.opacity = 0;

  img.style.transform = "scale(.8)";
  
  /* REMOVE CLASSES */
section.classList.remove(
  "bg-60s",
  "bg-70s",
  "bg-80s",
  "bg-90s",
  "bg-2000s",
  "bg-2010s",
  "bg-2020s"
);

/* ADICIONA NOVA */
section.classList.add(`bg-${decade}`);

  setTimeout(() => {

    img.src =
    carsData[decade].image;

    document.getElementById("carName")
    .innerText =
    carsData[decade].name;

    document.getElementById("carEngine")
    .innerText =
    carsData[decade].engine;

    document.getElementById("carPower")
    .innerText =
    carsData[decade].power;

    document.getElementById("carYear")
    .innerText =
    carsData[decade].year;

    document.getElementById("carDriver")
    .innerHTML =
    carsData[decade].driver;

    img.style.opacity = 1;

    img.style.transform = "scale(1)";

  },300);

}



  // =====================================================
  // 🏎️ TEMPORADA 2026
  // =====================================================
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


async function carregarTemporadamclaren() {

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

    const mclaren = construtores.find(
      e => e?.Constructor?.constructorId === "mclaren"
    );

    if (mclaren) {

      document.getElementById("posicaomclaren").innerText =
        mclaren.position || "—";

      document.getElementById("pontosmclaren").innerText =
        mclaren.points || "0";

      document.getElementById("totalTabelamclaren").innerText =
        mclaren.points || "0";
    }


    /* =====================
       RESULTADOS DA EQUIPE
    ===================== */

    const resultadosReq = await fetch(
      "https://api.jolpi.ca/ergast/f1/2026/constructors/mclaren/results.json"
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

      let Norris = "—";
      let Piastri = "—";

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

        if (nome === "Norris") {

          Norris =
            formatarResultadoF1(
              r?.positionText
            );

        }

        else if (nome === "Piastri") {

          Piastri =
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
          <td>${Norris}</td>
          <td>${Piastri}</td>
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
      "avgGridmclaren"
    ).innerText = avgGrid;


    /* =====================
       TABELA
    ===================== */

    document.getElementById(
      "tabelamclaren"
    ).innerHTML = html;


    /* =====================
       ESTATÍSTICAS
    ===================== */

    document.getElementById(
      "podiosmclaren"
    ).innerText = podios;

    document.getElementById(
      "vitoriasmclaren"
    ).innerText = vitorias;

    document.getElementById(
      "top5mclaren"
    ).innerText = top5;


    /* =====================
       GRÁFICO
    ===================== */

    const linha =
      document.getElementById(
        "linhaGraficomclaren"
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

    carregarTemporadamclaren();

    setInterval(
      carregarTemporadamclaren,
      60000
    );

  }
);



  // =====================================================
  // 🏎️ NOTICIAS
  // =====================================================


const abrirNoticias = document.getElementById("abrirNoticiasMclaren");
const fecharNoticias = document.getElementById("fecharNoticiasMclaren");

const atualizarNoticias =
document.getElementById("atualizarNoticiasMclaren");


const painelNoticias = document.getElementById("painelNoticiasMclaren");
const overlayNoticias = document.getElementById("overlayNoticiasMclaren");

const listaNoticias = document.getElementById("listaNoticiasMclaren");




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
        <div class="loading-noticias-mclaren">

            <div class="spinner-mclaren"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{

        const resposta = await fetch(

`https://gnews.io/api/v4/search?q=McLaren Formula 1&lang=en&country=gb&max=10&apikey=${API_KEY}`

        );

        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-mclaren">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-mclaren">

                <img
                src="${noticia.image || 'icons/mclaren.png'}"
                alt="Notícia">

                <div class="card-conteudo-mclaren">

                    <div class="data-noticia-mclaren">

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

        <div class="loading-noticias-mclaren">

            Erro ao carregar notícias.

        </div>

        `;

    }

}

atualizarNoticias.addEventListener("click",()=>{

    carregarNoticias();

});



  // =====================================================
  // BOTÃO TOP
  // =====================================================

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
        McLAREN TEAMMATE
==================================================*/



const mclarenSeason = 2026;


/* API */

const jolpicaAPI =
"https://api.jolpi.ca/ergast/f1";



/*==============================================
        PILOTOS MCLAREN
==============================================*/


const mclarenDrivers = {


    Norris:{

        number:1,
        name:"Lando Norris"

    },


    Piastri:{

        number:81,
        name:"Oscar Piastri"

    }


};




/*==============================================
        ESTATÍSTICAS
==============================================*/


let mclarenStats = {


    Norris:{


        wins:0,
        podiums:0,
        poles:0,
        fastest:0,
        points:0


    },


    Piastri:{


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


let mclarenRaces = [];




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


async function getMcLarenCalendar(){



    const url =

    `${jolpicaAPI}/${mclarenSeason}.json`;



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



    mclarenRaces = races;



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

    `${jolpicaAPI}/${mclarenSeason}/${round}/results.json`;



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
        McLAREN TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 2
==================================================*/



/*==============================================
        IDENTIFICAR PILOTO
==============================================*/


function getMcLarenDriver(driverId){


    if(driverId === "norris"){

        return "Norris";

    }


    if(driverId === "piastri"){

        return "Piastri";

    }


    return null;


}






/*==============================================
        RESET ESTATÍSTICAS
==============================================*/


function resetMcLarenStats(){


    mclarenStats = {


        Norris:{


            wins:0,
            podiums:0,
            poles:0,
            fastest:0,
            points:0


        },


        Piastri:{


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



    for(const race of mclarenRaces){



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

            getMcLarenDriver(driverId);



            if(!name)
                continue;




            const stats =

            mclarenStats[name];




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



    for(const race of mclarenRaces){



        const round = race.round;



        const url =

        `${jolpicaAPI}/${mclarenSeason}/${round}/qualifying.json`;



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

            getMcLarenDriver(driverId);



            if(name){

                mclarenStats[name].poles++;

            }



        }



    }



}







/*==============================================
        BUSCAR PONTOS OFICIAIS DO CAMPEONATO
==============================================*/


async function getOfficialChampionship(){



    const url =

    `${jolpicaAPI}/${mclarenSeason}/driverStandings.json`;



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

        getMcLarenDriver(
            driver.Driver.driverId
        );



        if(!name)
            continue;



        mclarenStats[name].points =

        Number(driver.points);



    }



    console.log(

        "Pontos oficiais:",
        mclarenStats

    );


}







/*==============================================
        EXECUTAR CÁLCULO COMPLETO
==============================================*/


async function calculateMcLarenBattle(){



    resetMcLarenStats();



    await calculateRaceResults();



    await calculatePoles();



    await getOfficialChampionship();




    console.log(

        "Estatísticas finais:",
        mclarenStats

    );



    updateMcLarenBattle();



}

/*==================================================
        McLAREN TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 3
==================================================*/



/*==============================================
        ATUALIZAR VALORES
==============================================*/


function setMcLarenValue(id,value){


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
        ATUALIZAR CARD MCLAREN
==============================================*/


function updateMcLarenBattle(){



    const norris =

    mclarenStats.Norris;



    const piastri =

    mclarenStats.Piastri;





    // VITÓRIAS


    setMcLarenValue(
        "mclarenWinsLeft",
        norris.wins
    );


    setMcLarenValue(
        "mclarenWinsRight",
        piastri.wins
    );


    updateBars(
        norris.wins,
        piastri.wins,
        "mclarenBarWinsLeft",
        "mclarenBarWinsRight"
    );





    // PÓDIOS


    setMcLarenValue(
        "mclarenPodiumsLeft",
        norris.podiums
    );


    setMcLarenValue(
        "mclarenPodiumsRight",
        piastri.podiums
    );


    updateBars(
        norris.podiums,
        piastri.podiums,
        "mclarenBarPodiumsLeft",
        "mclarenBarPodiumsRight"
    );






    // POLES


    setMcLarenValue(
        "mclarenPolesLeft",
        norris.poles
    );


    setMcLarenValue(
        "mclarenPolesRight",
        piastri.poles
    );


    updateBars(
        norris.poles,
        piastri.poles,
        "mclarenBarPolesLeft",
        "mclarenBarPolesRight"
    );






    // FASTEST LAPS


    setMcLarenValue(
        "mclarenFastLeft",
        norris.fastest
    );


    setMcLarenValue(
        "mclarenFastRight",
        piastri.fastest
    );


    updateBars(
        norris.fastest,
        piastri.fastest,
        "mclarenBarFastLeft",
        "mclarenBarFastRight"
    );







    // PONTOS


    setMcLarenValue(
        "mclarenPointsLeft",
        norris.points
    );


    setMcLarenValue(
        "mclarenPointsRight",
        piastri.points
    );


    updateBars(
        norris.points,
        piastri.points,
        "mclarenBarPointsLeft",
        "mclarenBarPointsRight"
    );



}








/*==============================================
        TEMPORADA NO CARD
==============================================*/


function updateSeason(){


    const element =

    document.getElementById(
        "mclarenSeason"
    );



    if(element){


        element.textContent =

        "TEMPORADA " + mclarenSeason;


    }


}








/*==============================================
        SISTEMA COMPLETO
==============================================*/


async function loadMcLarenBattle(){



    console.log(

        "Iniciando McLaren Battle..."

    );




    await getMcLarenCalendar();




    await calculateMcLarenBattle();




    updateSeason();




    updateMcLarenBattle();





    console.log(

        "Sistema McLaren carregado"

    );



}








/*==============================================
        INICIAR
==============================================*/


loadMcLarenBattle();








/*==============================================
        ATUALIZAÇÃO AUTOMÁTICA
==============================================*/


setInterval(()=>{


    console.log(

        "Atualizando McLaren Battle..."

    );



    loadMcLarenBattle();



},1800000);