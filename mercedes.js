
  // =====================================================
  // 🏁 COMPARAR
  // =====================================================


document.addEventListener("DOMContentLoaded", () => {


    /*==============================================
            DADOS HISTÓRICOS
    ==============================================*/

    const driverData = {

    russell: {
      2019:0,
      2020:3,
      2021:16,
      2022: 275,
      2023: 175,
      2024: 210,
      2025: 240
    },
    antonelli: {
      2025: 180
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
            ".evolution-mode-mercedes"
        );


    const yLabels =
        document.querySelector(
            ".chart-y-labels-mercedes"
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
        russell e antonelli nos anos finais.
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


                if (number === 63) {

                    driverData.russell[2026] =
                        points;

                }


                if (number === 12) {

                    driverData.antonelli[2026] =
                        points;

                }

            });


            /*======================================
                    ATUALIZAR ESCALA
            ======================================*/

            const allPoints = [

                ...Object.values(
                    driverData.russell
                ),

                ...Object.values(
                    driverData.antonelli
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


        if (mode === "russell") {

            seasons =
                Object.keys(
                    driverData.russell
                );

        }


        else if (mode === "antonelli") {

            seasons =
                Object.keys(
                    driverData.antonelli
                );

        }


        else {

            seasons = [

                ...new Set([

                    ...Object.keys(
                        driverData.russell
                    ),

                    ...Object.keys(
                        driverData.antonelli
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
        driver === "russell"
            ? "antonelli"
            : "russell";


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
                driver === "russell"
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

            if (driver === "antonelli") {

                return baseX -
                    DRIVER_SEPARATION;

            }


            if (driver === "russell") {

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
            "evolution-svg-mercedes"
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
            "russellGradient";


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
            "#00d2be"
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
            "#c0c0c0"
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
            "antonelliGradient";


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
            "chart-grid-mercedes";


        seasons.forEach(() => {

            const line =
                document.createElement(
                    "div"
                );


            line.className =
                "chart-grid-line-mercedes";


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
                        "chart-point-mercedes"
                    );


                    if (
                        driver === "antonelli"
                    ) {

                        circle.classList.add(
                            "antonelli-mercedes"
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
                            russell fica acima.
                            antonelli também fica acima,
                            mas para o outro lado.
                        */

                        if (
                            driver === "russell"
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
                            russell:
                            sempre acima.

                            antonelli:
                            sempre abaixo.

                            Assim os dois números
                            não ficam grudados.
                        */

    if (
     driver === "russell"
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
                        "chart-value-mercedes"
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
                russell
        ==========================================*/

        if (
            mode === "both" ||
            mode === "russell"
        ) {

            createDriverLine(
                "russell",
                "russell-path-mercedes"
            );

        }


        /*==========================================
                antonelli
        ==========================================*/

        if (
            mode === "both" ||
            mode === "antonelli"
        ) {

            createDriverLine(
                "antonelli",
                "antonelli-path-mercedes"
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
                    "chart-year-mercedes"
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
                ".evolution-mode-mercedes.active"
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
  // 🏁 ESTASTITICAS
  // =====================================================

// ======================================================
// mercedes Stats Automáticas
// API: Jolpica
// ======================================================

// -------------------------------------
// HISTÓRICO DA mercedes
// (Atualize somente quando quiser)
// -------------------------------------

const historicomercedes = {

    corridas: 302,
    vitorias: 134,
    podios: 315,
    poles: 147,
    pontos: 8259

};

// -------------------------------------
// CONFIGURAÇÃO
// -------------------------------------

const equipe = "mercedes";
const temporada = "2026";

// -------------------------------------
// ELEMENTOS HTML
// -------------------------------------

const contadorCorridas =
document.getElementById("corridas-mercedes");

const contadorVitorias =
document.getElementById("vitorias-mercedes");

const contadorPodios =
document.getElementById("podios-mercedes");

const contadorPoles =
document.getElementById("poles-mercedes");

const contadorPontos =
document.getElementById("pontos-mercedes");

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
        historicomercedes.corridas +
        corridas2026,

        vitorias:
        historicomercedes.vitorias +
        vitorias2026,

        podios:
        historicomercedes.podios +
        podios2026,

        poles:
        historicomercedes.poles +
        poles2026,

        pontos:
        historicomercedes.pontos +
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

    const secao = document.querySelector(".numeros-mercedes");

    if(!secao) return;

    const observer = new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-mercedes")
                .forEach(contador=>{

                    if(contador.classList.contains("contado")) return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-mercedes"
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
    .querySelectorAll(".animar-mercedes")
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



  // =====================================================TIMELINE MERCEDES
  // ====================================================================== */
window.addEventListener("scroll", ()=>{

const itens = document.querySelectorAll(".conteudo-timeline-mercedes");
const linha = document.querySelector(".linha-centro-mercedes");
const secao = document.querySelector(".timeline-mercedes");

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

const pontos = document.querySelectorAll(".ponto-mercedes");
const progresso = document.querySelector(".linha-progresso-mercedes");
const luz = document.querySelector(".luz-mercedes");
const linha = document.querySelector(".linha-box-mercedes");

let i = 0;

function animar(){

if(i < pontos.length){

pontos[i].classList.add("ativo");

let larguraLinha = linha.clientWidth;

let left = pontos[i].getAttribute("style");
left = left.replace("left:", "").replace("%","").trim();

let posPx = (parseFloat(left) / 100) * larguraLinha;

progresso.style.width = posPx + "px";
luz.style.left = posPx + "px";

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



document.addEventListener("DOMContentLoaded", () => {
function animarConstrutoresMercedes(){

const linha = document.querySelector(".linha-progresso-const");
const pontos = document.querySelectorAll(".ponto-const");
const pista = document.querySelector(".pista-mercedes");

let delay = 0;
let posAnterior = "0%"; // início da linha

pontos.forEach((ponto, index)=>{

setTimeout(()=>{

let carro = document.createElement("div");
carro.classList.add("carro-animado-mercedes");

/* imagem do carro */
let img = ponto.getAttribute("data-carro");
carro.style.backgroundImage = `url(${img})`;

/* nasce da posição anterior */
carro.style.left = posAnterior;

pista.appendChild(carro);

/* anda até o ponto */
setTimeout(()=>{
carro.style.left = ponto.style.left;
linha.style.width = ponto.style.left;
},100);

/* ativa ano + chassi */
setTimeout(()=>{
ponto.classList.add("ativo");
},1200);

/* guarda posição pra próxima volta */
posAnterior = ponto.style.left;

},delay);

delay += 2200;

});

}


/* SCROLL */


});

 // =====================================================
  // 🏁 TÍMELINE CARROS
  // =====================================================
window.addEventListener("load", ()=>{

const pontos = document.querySelectorAll(".timeline-mercedes-car .ponto-car-mercedes");
const progresso = document.querySelector(".timeline-mercedes-car .linha-progresso-car-mercedes");
const luz = document.querySelector(".timeline-mercedes-car .luz-car-mercedes");
const linha = document.querySelector(".timeline-mercedes-car .linha-box-car-mercedes");

let i = 0;

function animar(){

if(i >= pontos.length){

  // 🔥 FINAL DA LINHA
  progresso.style.width = "100%";
  luz.style.left = (linha.clientWidth - 30) + "px";

  return;
}

const ponto = pontos[i];

const foto = ponto.querySelector(".foto-car-mercedes");
const info = ponto.querySelector(".info-car-mercedes");

let larguraLinha = linha.clientWidth;
let leftPercent = parseFloat(ponto.style.left);
let posPx = (leftPercent/100) * larguraLinha;

foto.classList.add("ativo");

setTimeout(()=>{

info.classList.add("ativo");

progresso.style.width = posPx + "px";
luz.style.left = (posPx - 30) + "px";

ponto.style.boxShadow = "0 0 15px #00a19c";

i++;

setTimeout(animar,1300);

},900);

}

setTimeout(animar,800);

});

const blocos = document.querySelectorAll(".bloco-equipe-mercedes");

blocos.forEach((bloco, i)=>{
  bloco.style.opacity = 0;
  bloco.style.transform = "translateY(20px)";

  setTimeout(()=>{
    bloco.style.opacity = 1;
    bloco.style.transform = "translateY(0)";
  }, i * 300);
});





/* =================================================
=============ERAS MERCEDES ================================================================================= */

const erasMercedes = [

{
titulo: "Capitulo I - Era Clássica(1954–1955)",

texto: "A era clássica da Mercedes em 1954–1955 marcou um dos retornos mais dominantes da história da Fórmula 1. Após anos afastada do automobilismo por causa do pós-guerra, a equipe voltou com tecnologia extremamente avançada para a época, especialmente com o icônico carro W196. Em 1954, a Mercedes já entrou vencendo, com Juan Manuel Fangio conquistando o campeonato mundial. O carro se destacava pelo design inovador (incluindo versões com carroceria fechada) e pela engenharia precisa, mostrando uma superioridade clara sobre os rivais. Em 1955, o domínio continuou com ainda mais força, novamente com Fangio no topo. Porém, esse período também ficou marcado por um dos momentos mais trágicos do automobilismo, o Desastre de Le Mans de 1955, que influenciou diretamente a decisão da Mercedes de se retirar das competições no fim daquele ano. Mesmo sendo curta, essa era consolidou a Mercedes como símbolo de excelência técnica e desempenho absoluto, deixando um legado que influenciaria gerações futuras no esporte.",
timeline: [

{ano:"1954", imagem:"titulosmer/fangio.jpeg", descricao:"Juan Manoel Fangio"},
{ano:"1954", imagem:"titulosmer/w196streamline.jpeg", descricao:"Versão futurista do Carro"},
{ano:"1955", imagem:"titulosmer/w196.jpg", descricao:"Carro do BiCampeonato do Fangio"},
{ano:"1955", imagem:"titulosmer/lemans.jpg", descricao:"Carro do acidente tragico que encerrou as atividades da mercedes"}
]
},

{
titulo: "Capitulo II - O Retorno (2010–2013)",
texto: "A fase de 2010 a 2013 marcou o retorno da Mercedes como equipe oficial na Fórmula 1 moderna, iniciando um projeto de reconstrução que mais tarde levaria ao domínio da categoria. A equipe surgiu a partir da compra da Brawn GP e trouxe de volta Michael Schumacher, ao lado de Nico Rosberg, formando uma dupla experiente e técnica. Nos primeiros anos, a Mercedes ainda enfrentava dificuldades para competir com as equipes do topo, como Red Bull Racing. Apesar disso, houve evolução constante: Rosberg conquistou a primeira vitória da nova era da equipe em 2012, mostrando que o projeto começava a dar resultados. Mais importante que os resultados imediatos foi a base construída nesse período. A Mercedes investiu fortemente em estrutura, engenharia e desenvolvimento do motor híbrido que seria introduzido em 2014. Essa preparação silenciosa foi essencial para transformar a equipe, que saiu de um desempenho mediano para se tornar a grande força dominante da Fórmula 1 nos anos seguintes.",
timeline: [
{ano:"2010", imagem:"titulosmer/mer10.jpeg", descricao:"Retorno à F1"},
{ano:"2012", imagem:"titulosmer/mer12.jpeg", descricao:"Primeira vitória moderna"},
{ano:"2013", imagem:"titulosmer/mer13.jpeg", descricao:"A chegado do Principe"}

]
},

{
titulo: "Capitulo III - Domínio Híbrido (2014–2021)",
texto: "A era de 2014 a 2021 foi o período mais dominante da história da Mercedes na Fórmula 1. Com a introdução da nova era híbrida em 2014, a equipe chegou extremamente preparada, graças ao trabalho iniciado anos antes, e rapidamente se tornou a referência técnica do grid. Logo no primeiro ano, a Mercedes estabeleceu uma vantagem enorme sobre os rivais, com a dupla Lewis Hamilton e Nico Rosberg protagonizando uma intensa disputa interna. Entre 2014 e 2016, os dois dominaram completamente a categoria, com títulos alternados até a aposentadoria de Rosberg após seu campeonato em 2016. A partir de 2017, Hamilton assumiu o papel de líder absoluto da equipe, acumulando títulos consecutivos e consolidando seu nome como um dos maiores da história. Ao lado dele, pilotos como Valtteri Bottas contribuíram para manter a consistência da equipe. Durante esse período, a Mercedes conquistou 8 títulos consecutivos de construtores (2014–2021), um recorde na Fórmula 1, destacando-se pela excelência em aerodinâmica, motor e estratégia. Mesmo com a crescente concorrência de equipes como Red Bull Racing, especialmente no final desse ciclo, a Mercedes manteve sua hegemonia até 2021. Essa era não apenas consolidou a equipe como uma das maiores da história, mas também redefiniu o padrão de desempenho e inovação na Fórmula 1 moderna.",
timeline: [
{ano:"2014", imagem:"titulosmer/mer14.jpeg", descricao:"Início do domínio"},
{ano:"2017", imagem:"titulosmer/mer17.jpeg", descricao:"Novo Regulamento,mesma dominancia"},
{ano:"2020", imagem:"titulosmer/mer20.jpg", descricao:"Carro mais dominante"}
]
},

{
titulo: "Capitulo IV - Nova Era (2022–Atual)",
texto: "A fase de 2022 em diante marca um período de transição e reconstrução para a Mercedes na Fórmula 1. Com a introdução do novo regulamento técnico em 2022 — focado em efeito solo — a equipe perdeu a vantagem dominante que tinha na era anterior e passou a enfrentar dificuldades inesperadas, especialmente com o conceito aerodinâmico ousado do carro. Mesmo assim, pilotos como Lewis Hamilton e George Russell mantiveram a competitividade da equipe, garantindo pódios e até vitórias pontuais, enquanto a Mercedes trabalhava intensamente para entender e corrigir seus problemas. Ao longo de 2023 e 2024, a equipe evoluiu gradualmente, abandonando conceitos que não funcionaram e se aproximando novamente do topo. Apesar de ainda enfrentar forte concorrência de equipes como Red Bull Racing, a Mercedes segue como uma das estruturas mais fortes da Fórmula 1. Esse período mostra uma equipe resiliente, capaz de se reinventar após anos de domínio, com foco em voltar à disputa direta por títulos nos próximos anos.",
timeline: [
{ano:"2022", imagem:"titulosmer/mer22.jpeg", descricao:"Novo regulamento,Novas dificuldades"},
{ano:"2023", imagem:"titulosmer/mer23.jpeg", descricao:"Dificuldades permanecem"},
{ano:"2024", imagem:"titulosmer/mer24.jpeg", descricao:"O Adeus de uma Lenda"},
{ano:"2025", imagem:"titulosmer/mer25.jpeg", descricao:"Novo Piloto,Novo desafio"}
]
}

];

function mostrarEra(index) {
    document.getElementById("tituloEra-mercedes").innerText = erasMercedes[index].titulo;
    document.getElementById("textoEra-mercedes").innerText = erasMercedes[index].texto;

    const timelineContainer = document.getElementById("mercedes-timeline");
    timelineContainer.innerHTML = "";

    erasMercedes[index].timeline.forEach(item => {
        timelineContainer.innerHTML += `
            <div class="mercedes-timeline-item">
                <div class="mercedes-timeline-year">${item.ano}</div>
                <img src="${item.imagem}" alt="">
                <p>${item.descricao}</p>
            </div>
        `;
    });
}

let index = 0;

const botoes = document.querySelectorAll(".botoes-eras-mercedes button");

botoes.forEach(btn => btn.classList.remove("ativo"));

if (botoes[index]) {
  botoes[index].classList.add("ativo");
}

mostrarEra(0);

  
  const toggleMercedes = document.getElementById("menuToggleMercedes");
const menuMercedes = document.getElementById("sideMenuMercedes");
const overlayMercedes = document.getElementById("overlayMercedes");
const closeMercedes = document.getElementById("closeMenuMercedes");

// 🔥 pega todos os links do menu
const linksMenu = document.querySelectorAll(".side-menu-mercedes a");

// ABRIR
toggleMercedes.addEventListener("click", () => {
  menuMercedes.classList.add("active");
  overlayMercedes.classList.add("active");
});

// FECHAR NO X
closeMercedes.addEventListener("click", () => {
  fecharMenu();
});

// FECHAR CLICANDO FORA
overlayMercedes.addEventListener("click", () => {
  fecharMenu();
});

// 🔥 FECHAR AO CLICAR EM QUALQUER LINK
linksMenu.forEach(link => {
  link.addEventListener("click", () => {
    fecharMenu();
  });
});

// 🔥 FUNÇÃO PADRÃO (evita repetir código)
function fecharMenu(){
  menuMercedes.classList.remove("active");
  overlayMercedes.classList.remove("active");
}
  
  

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
  // 🏁 HALL DA FAMA
  // =====================================================
  
  document.addEventListener("DOMContentLoaded", () => {

  const bg1 = document.querySelector(".bg1-mercedes");
  const bg2 = document.querySelector(".bg2-mercedes");
  const cards = document.querySelectorAll(".hall-card-mercedes");
  const grid = document.querySelector(".hall-grid-mercedes");

  if (!bg1 || !bg2 || cards.length === 0 || !grid) return;

  let current = bg1;
  let next = bg2;

  // 🔥 TROCA DE FUNDO SUAVE
  function changeBackground(img){

    if(!img) return;

    const preload = new Image();
    preload.src = img;

    next.style.backgroundImage = `url('${img}')`;

    requestAnimationFrame(() => {
      next.classList.add("active");
      current.classList.remove("active");

      const temp = current;
      current = next;
      next = temp;
    });

  }

  // 🔥 FUNDO INICIAL
  changeBackground(cards[0].dataset.bg);

  // 🔥 EVENTOS
  cards.forEach(card => {

    const img = card.dataset.bg;

    // 🔥 HOVER (PC)
    card.addEventListener("pointerenter", () => {
      changeBackground(img);
    });

    // 🔥 CLICK (mobile + destaque)
    card.addEventListener("click", () => {

      const isActive = card.classList.contains("active");

      cards.forEach(c => c.classList.remove("active"));

      if(isActive){
        grid.classList.remove("active");
      } else {
        grid.classList.add("active");
        card.classList.add("active");
      }

      changeBackground(img);

    });

  });

});




  // =====================================================
  // 🏁 ECOLUCAO
  // =====================================================

const carsDataMercedes = {

  "50s": {
    image:"hallmer/1950.png",
    name:"Mercedes W196",
    engine:"Inline-8 2.5L",
    power:"~290 HP",
    year:"1954",
    driver:"Fangio"
  },

   "2010s": {
    image:"hallmer/w01.png", // usa essa imagem ou troca pela tua
    name:"Mercedes W01",
    engine:"Mercedes-Benz FO108X V8",
    power:"~750 HP",
    year:"2010",
    driver:"Schumacher <br> Rosberg"
  },  

  "2014s": {
     image:"titulosmer/mercedesw05.png",
    name:"Mercedes W05",
    engine:"V6 Turbo Hybrid",
    power:"~850 HP",
    year:"2014",
    driver:"Hamilton <br> Rosberg"
  },

  "2017s": {
    image:"titulosmer/mercedesw08.png",
    name:"Mercedes W08",
    engine:"V6 Hybrid",
    power:"~900 HP",
    year:"2017",
    driver:"Hamilton <br> Bottas"
  },

  "2020s": {
    image:"hallmer/w16.png",
    name:"Mercedes W16",
    engine:"Mercedes-AMG F1 M15 E Performance",
    power:"~1050 HP",
    year:"2025",
    driver:"Russell <br> Antonelli"
  }

};

function changeDecadeMercedes(decade){
  

  const section = document.getElementById("mercedesEvolution");
  const img = document.getElementById("carImage-mercedes");

  // animação saída
  img.style.opacity = 0;
  img.style.transform = "scale(.85)";

  // remove fundos antigos
  section.classList.remove(
    "bg-50s",
    "bg-2010s",
    "bg-2014s",
    "bg-2017s",
    "bg-2020s"
  );

  // adiciona novo fundo
  section.classList.add(`bg-${decade}`);

  setTimeout(() => {

    const data = carsDataMercedes[decade];

    if(!data) return;

    img.src = data.image;

    document.getElementById("carName-mercedes").innerText = data.name;
    document.getElementById("carEngine-mercedes").innerText = data.engine;
    document.getElementById("carPower-mercedes").innerText = data.power;
    document.getElementById("carYear-mercedes").innerText = data.year;
    document.getElementById("carDriver-mercedes").innerHTML = data.driver;

    // animação entrada
    img.style.opacity = 1;
    img.style.transform = "scale(1)";

  }, 250);
}


// ======================================
// 🏎️ MERCEDES LIVE DATA (2026)
// ======================================

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


async function carregarTemporadamercedes() {

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

    const mercedes = construtores.find(
      e => e?.Constructor?.constructorId === "mercedes"
    );

    if (mercedes) {

      document.getElementById("posicaomercedes").innerText =
        mercedes.position || "—";

      document.getElementById("pontosmercedes").innerText =
        mercedes.points || "0";

      document.getElementById("totalTabelamercedes").innerText =
        mercedes.points || "0";
    }


    /* =====================
       RESULTADOS DA EQUIPE
    ===================== */

    const resultadosReq = await fetch(
      "https://api.jolpi.ca/ergast/f1/2026/constructors/mercedes/results.json"
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

      let Antonelli = "—";
      let Russell = "—";

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

        if (nome === "Antonelli") {

          Antonelli =
            formatarResultadoF1(
              r?.positionText
            );

        }

        else if (nome === "Russell") {

          Russell =
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
          <td>${Antonelli}</td>
          <td>${Russell}</td>
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
      "avgGridmercedes"
    ).innerText = avgGrid;


    /* =====================
       TABELA
    ===================== */

    document.getElementById(
      "tabelamercedes"
    ).innerHTML = html;


    /* =====================
       ESTATÍSTICAS
    ===================== */

    document.getElementById(
      "podiosmercedes"
    ).innerText = podios;

    document.getElementById(
      "vitoriasmercedes"
    ).innerText = vitorias;

    document.getElementById(
      "top5mercedes"
    ).innerText = top5;


    /* =====================
       GRÁFICO
    ===================== */

    const linha =
      document.getElementById(
        "linhaGraficomercedes"
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
      "Erro mercedes:",
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

    carregarTemporadamercedes();

    setInterval(
      carregarTemporadamercedes,
      60000
    );

  }
);

// =========================================
// PAINEL DE NOTÍCIAS mercedes
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiasmercedes");
const fecharNoticias = document.getElementById("fecharNoticiasmercedes");

const atualizarNoticias =
document.getElementById("atualizarNoticiasmercedes");


const painelNoticias = document.getElementById("painelNoticiasmercedes");
const overlayNoticias = document.getElementById("overlayNoticiasmercedes");

const listaNoticias = document.getElementById("listaNoticiasmercedes");




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
        <div class="loading-noticias-mercedes">

            <div class="spinner-mercedes"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{

        const resposta = await fetch(

`https://gnews.io/api/v4/search?q=mercedes Formula 1&lang=en&country=gb&max=10&apikey=${API_KEY}`

        );

        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-mercedes">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-mercedes">

                <img
                src="${noticia.image || 'icons/Mercedesa.png'}"
                alt="Notícia">

                <div class="card-conteudo-mercedes">

                    <div class="data-noticia-mercedes">

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

        <div class="loading-noticias-mercedes">

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
        mercedes TEAMMATE
==================================================*/



const mercedesSeason = 2026;


/* API */

const jolpicaAPI =
"https://api.jolpi.ca/ergast/f1";



/*==============================================
        PILOTOS mercedes
==============================================*/


const mercedesDrivers = {


    Russell:{

        number:63,
        name:"George Russell"

    },


    Antonelli:{

        number:12,
        name:"Kimi Antonelli"

    }


};




/*==============================================
        ESTATÍSTICAS
==============================================*/


let mercedesStats = {


    Russell:{


        wins:0,
        podiums:0,
        poles:0,
        fastest:0,
        points:0


    },


    Antonelli:{


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


let mercedesRaces = [];




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


async function getmercedesCalendar(){



    const url =

    `${jolpicaAPI}/${mercedesSeason}.json`;



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



    mercedesRaces = races;



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

    `${jolpicaAPI}/${mercedesSeason}/${round}/results.json`;



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
        mercedes TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 2
==================================================*/



/*==============================================
        IDENTIFICAR PILOTO
==============================================*/


function getmercedesDriver(driverId){


    if(driverId === "russell"){

        return "Russell";

    }


    if(driverId === "antonelli"){

        return "Antonelli";

    }


    return null;


}






/*==============================================
        RESET ESTATÍSTICAS
==============================================*/


function resetmercedesStats(){


    mercedesStats = {


        Russell:{


            wins:0,
            podiums:0,
            poles:0,
            fastest:0,
            points:0


        },


        Antonelli:{


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



    for(const race of mercedesRaces){



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

            getmercedesDriver(driverId);



            if(!name)
                continue;




            const stats =

            mercedesStats[name];




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



    for(const race of mercedesRaces){



        const round = race.round;



        const url =

        `${jolpicaAPI}/${mercedesSeason}/${round}/qualifying.json`;



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

            getmercedesDriver(driverId);



            if(name){

                mercedesStats[name].poles++;

            }



        }



    }



}







/*==============================================
        BUSCAR PONTOS OFICIAIS DO CAMPEONATO
==============================================*/


async function getOfficialChampionship(){



    const url =

    `${jolpicaAPI}/${mercedesSeason}/driverStandings.json`;



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

        getmercedesDriver(
            driver.Driver.driverId
        );



        if(!name)
            continue;



        mercedesStats[name].points =

        Number(driver.points);



    }



    console.log(

        "Pontos oficiais:",
        mercedesStats

    );


}







/*==============================================
        EXECUTAR CÁLCULO COMPLETO
==============================================*/


async function calculatemercedesBattle(){



    resetmercedesStats();



    await calculateRaceResults();



    await calculatePoles();



    await getOfficialChampionship();




    console.log(

        "Estatísticas finais:",
        mercedesStats

    );



    updatemercedesBattle();



}

/*==================================================
        mercedes TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 3
==================================================*/



/*==============================================
        ATUALIZAR VALORES
==============================================*/


function setmercedesValue(id,value){


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
        ATUALIZAR CARD mercedes
==============================================*/


function updatemercedesBattle(){



    const Russell =

    mercedesStats.Russell;



    const Antonelli =

    mercedesStats.Antonelli;





    // VITÓRIAS


    setmercedesValue(
        "mercedesWinsLeft",
        Russell.wins
    );


    setmercedesValue(
        "mercedesWinsRight",
        Antonelli.wins
    );


    updateBars(
        Russell.wins,
        Antonelli.wins,
        "mercedesBarWinsLeft",
        "mercedesBarWinsRight"
    );





    // PÓDIOS


    setmercedesValue(
        "mercedesPodiumsLeft",
        Russell.podiums
    );


    setmercedesValue(
        "mercedesPodiumsRight",
        Antonelli.podiums
    );


    updateBars(
        Russell.podiums,
        Antonelli.podiums,
        "mercedesBarPodiumsLeft",
        "mercedesBarPodiumsRight"
    );






    // POLES


    setmercedesValue(
        "mercedesPolesLeft",
        Russell.poles
    );


    setmercedesValue(
        "mercedesPolesRight",
        Antonelli.poles
    );


    updateBars(
        Russell.poles,
        Antonelli.poles,
        "mercedesBarPolesLeft",
        "mercedesBarPolesRight"
    );






    // FASTEST LAPS


    setmercedesValue(
        "mercedesFastLeft",
        Russell.fastest
    );


    setmercedesValue(
        "mercedesFastRight",
        Antonelli.fastest
    );


    updateBars(
        Russell.fastest,
        Antonelli.fastest,
        "mercedesBarFastLeft",
        "mercedesBarFastRight"
    );







    // PONTOS


    setmercedesValue(
        "mercedesPointsLeft",
        Russell.points
    );


    setmercedesValue(
        "mercedesPointsRight",
        Antonelli.points
    );


    updateBars(
        Russell.points,
        Antonelli.points,
        "mercedesBarPointsLeft",
        "mercedesBarPointsRight"
    );



}








/*==============================================
        TEMPORADA NO CARD
==============================================*/


function updateSeason(){


    const element =

    document.getElementById(
        "mercedesSeason"
    );



    if(element){


        element.textContent =

        "TEMPORADA " + mercedesSeason;


    }


}








/*==============================================
        SISTEMA COMPLETO
==============================================*/


async function loadmercedesBattle(){



    console.log(

        "Iniciando mercedes Battle..."

    );




    await getmercedesCalendar();




    await calculatemercedesBattle();




    updateSeason();




    updatemercedesBattle();





    console.log(

        "Sistema mercedes carregado"

    );



}








/*==============================================
        INICIAR
==============================================*/


loadmercedesBattle();








/*==============================================
        ATUALIZAÇÃO AUTOMÁTICA
==============================================*/


setInterval(()=>{


    console.log(

        "Atualizando mercedes Battle..."

    );



    loadmercedesBattle();



},1800000);