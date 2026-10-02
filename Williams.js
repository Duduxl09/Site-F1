// =====================================================
// 🏁 WILLIAMS PAGE JS
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

// ======================================================
// williams Stats Automáticas
// API: Jolpica
// ======================================================

// -------------------------------------
// HISTÓRICO DA williams
// (Atualize somente quando quiser)
// -------------------------------------

const historicowilliams = {

    corridas: 875,
    vitorias: 114,
    podios: 315,
    poles: 128,
    pontos: 3776

};

// -------------------------------------
// CONFIGURAÇÃO
// -------------------------------------

const equipe = "williams";
const temporada = "2026";

// -------------------------------------
// ELEMENTOS HTML
// -------------------------------------

const contadorCorridas =
document.getElementById("corridas-williams");

const contadorVitorias =
document.getElementById("vitorias-williams");

const contadorPodios =
document.getElementById("podios-williams");

const contadorPoles =
document.getElementById("poles-williams");

const contadorPontos =
document.getElementById("pontos-williams");

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
        historicowilliams.corridas +
        corridas2026,

        vitorias:
        historicowilliams.vitorias +
        vitorias2026,

        podios:
        historicowilliams.podios +
        podios2026,

        poles:
        historicowilliams.poles +
        poles2026,

        pontos:
        historicowilliams.pontos +
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

    const secao = document.querySelector(".numeros-williams");

    if(!secao) return;

    const observer = new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-williams")
                .forEach(contador=>{

                    if(contador.classList.contains("contado")) return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-williams"
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
    .querySelectorAll(".animar-williams")
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




	
window.addEventListener("scroll", ()=>{

const itens = document.querySelectorAll(".conteudo-timeline-williams");
const linha = document.querySelector(".linha-centro-williams");
const secao = document.querySelector(".timeline-williams");

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

const pontos = document.querySelectorAll(".ponto-williams");
const progresso = document.querySelector(".linha-progresso-williams");
const luz = document.querySelector(".luz-williams");
const linha = document.querySelector(".linha-box-williams");

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





/* =========================
   TIMELINE CARROS
========================= */
window.addEventListener("load", ()=>{

const pontos = document.querySelectorAll(".timeline-williams-car .ponto-car-williams");
const progresso = document.querySelector(".timeline-williams-car .linha-progresso-car-williams");
const luz = document.querySelector(".timeline-williams-car .luz-car-williams");
const linha = document.querySelector(".timeline-williams-car .linha-box-car-williams");

if(!pontos.length || !progresso || !luz || !linha) return;

let i = 0;

function animarTimeline(){

if(i >= pontos.length) return;

const ponto = pontos[i];

const foto = ponto.querySelector(".foto-car-williams, .foto-car-williams");
const info = ponto.querySelector(".info-car-williams, .info-car-williams");

if(foto) foto.classList.add("ativo");

let larguraLinha = linha.clientWidth;
let leftPercent = parseFloat(ponto.style.left);
let posPx = (leftPercent/100) * larguraLinha;

setTimeout(()=>{

if(info) info.classList.add("ativo");

progresso.style.width = posPx + "px";
luz.style.left = (posPx - 30) + "px";

ponto.style.boxShadow = "0 0 15px #ff7a00";

i++;

setTimeout(animarTimeline,1300);

},900);

}

setTimeout(animarTimeline,800);

});





// ===========================================

// =====================================================
// 📖 ERAS WILLIAMS
// =====================================================

const erasWilliams = [

{
titulo: "Capítulo I – Fundação e primeiros sucessos (1977-1982)",

texto: "A Williams entrou na Fórmula 1 em 1977 e rapidamente se tornou uma das equipes mais competitivas do grid. Fundada por Frank Williams e Patrick Head, a equipe cresceu rapidamente e conquistou seu primeiro título mundial de construtores em 1980. No mesmo ano, Alan Jones garantiu o título de pilotos, marcando o início de uma era vitoriosa. Em 1981, a Williams confirmou sua força com mais um título de construtores, consolidando-se como uma das principais equipes da Fórmula 1 no início da década de 80.Após esse início dominante em 1980 e a consolidação em 1981, a Williams Racing passou por um período de manutenção de competitividade, mas sem repetir o mesmo nível absoluto de domínio no topo. Em 1982, a equipe ainda se manteve entre as forças do grid, com Alan Jones se afastando da Fórmula 1 no fim de 1981 e Carlos Reutemann assumindo o papel de principal piloto. No entanto, a temporada foi mais irregular, marcada por forte concorrência de outras equipes e por um cenário técnico mais instável na categoria. Mesmo assim, a Williams continuou mostrando consistência e capacidade de disputar vitórias em alguns momentos, mantendo-se como uma equipe de ponta. Esse período entre 1980 e 1982 ajudou a consolidar a base estrutural e técnica da Williams, preparando o terreno para o crescimento ainda maior que viria na segunda metade da década, quando a equipe voltaria a lutar regularmente por títulos mundiais com diferentes gerações de carros e motores.",

timeline: [
{ano:"1977", imagem:"tituloswil/1977.jpg", descricao:"Estreia na Fórmula 1"},
{ano:"1980", imagem:"tituloswil/fw07b.jpg", descricao:"1° título mundial"},
{ano:"1981", imagem:"tituloswil/fw07c.jpg", descricao:"Bicampeã de construtores"},
{ano:"1982", imagem:"tituloswil/keke82.jpg", descricao:"Título com Keke Rosberg"}
]
},

{
titulo: "Capítulo II – Era turbo e domínio (1983-1987)",

texto: "Durante a era dos motores turbo, a Williams continuou sendo uma das equipes mais fortes da Fórmula 1. Com motores Honda extremamente potentes, a equipe conquistou títulos de construtores em 1986 e 1987. Em 1987, Nelson Piquet garantiu o título de pilotos, consolidando o domínio da equipe nesse período. Essa fase marcou a Williams como referência técnica e competitiva no auge da era turbo. Entre 1983 e 1985, a Williams Racing passou por uma fase de transição importante. A equipe ainda utilizava motores aspirados no início da era turbo, enquanto rivais como McLaren, Ferrari e Renault já exploravam melhor a nova tecnologia. Mesmo assim, a Williams manteve boa competitividade com o chassi eficiente projetado por Patrick Head e continuou somando pódios e vitórias ocasionais. A virada veio com a chegada da parceria com a Honda em 1985, que mudou completamente o nível da equipe. O desenvolvimento do conjunto chassis-motor colocou a Williams entre as forças dominantes do grid novamente. A partir daí, a equipe voltou a brigar diretamente por títulos, culminando na forte campanha de 1986 e no domínio ainda mais consistente de 1987. Esse período também consolidou a Williams como uma das equipes mais avançadas tecnicamente da Fórmula 1, com foco em aerodinâmica, confiabilidade e integração perfeita entre motor e chassis — elementos que seriam fundamentais para o sucesso contínuo nos anos seguintes.",

timeline: [
{ano:"1986", imagem:"tituloswil/fw11.jpg", descricao:"Título com motor Honda"},
{ano:"1987", imagem:"tituloswil/piquet87.jpg", descricao:"Piquet campeão"},
{ano:"1987", imagem:"tituloswil/fw11b.jpg", descricao:"Domínio consolidado"}
]
},

{
titulo: "Capítulo III – Auge absoluto (1992-1997)",

texto: "A partir de 1990, a Williams Racing entrou em uma das fases mais dominantes da história da Fórmula 1. A equipe já vinha de um trabalho técnico muito forte no final dos anos 80 e rapidamente se consolidou como referência absoluta em inovação, especialmente em aerodinâmica e suspensão ativa. O grande salto de desempenho veio com o FW14 e principalmente o FW14B, que trouxe tecnologias avançadas como suspensão ativa, controle de tração e sistemas eletrônicos que colocaram a Williams muito à frente das rivais. Em 1992, Nigel Mansell dominou a temporada e conquistou o título de pilotos com autoridade, enquanto a equipe levou o campeonato de construtores. Em 1993, mesmo com mudanças de pilotos e a saída de Mansell, a Williams manteve o nível altíssimo de desempenho. Alain Prost venceu o campeonato de pilotos com o FW15C, garantindo mais um título para a equipe e reforçando o domínio técnico da era. Mesmo com a saída de figuras importantes, a Williams conseguiu se adaptar aos novos regulamentos e continuou no topo. Em 1994, após uma temporada marcada por desafios e reconstrução, a equipe ainda assim permaneceu competitiva, enquanto em 1996 Damon Hill conquistou o título mundial de pilotos com o FW18, confirmando a força do projeto técnico da equipe. Em 1997, a Williams encerrou essa era dourada com Jacques Villeneuve campeão mundial e mais um título de construtores, consolidando esse período como o auge absoluto da equipe na Fórmula 1, tanto em desempenho quanto em consistência competitiva.",

timeline: [
{ano:"1992", imagem:"tituloswil/fw14b.jpg", descricao:"Domínio absoluto"},
{ano:"1993", imagem:"tituloswil/fw15c.jpeg", descricao:"Tecnologia avançada"},
{ano:"1994", imagem:"tituloswil/fw16.jpeg", descricao:"Título de construtores"},
{ano:"1996", imagem:"hallwil/hill.jpeg", descricao:"Hill campeão"},
{ano:"1997", imagem:"tituloswil/fw19.webp", descricao:"Último título"}
]
},

{
titulo: "Capítulo IV – Declínio e dificuldades (1998-2013)",

texto: "Entre 1998 e 2013, a Williams Racing entrou em uma fase de transição e queda gradual após o auge dos anos 90, quando dominava a Fórmula 1. Com as mudanças de regulamento, evolução aerodinâmica das rivais e a saída de parceiros técnicos importantes, a equipe passou a enfrentar um grid muito mais competitivo e equilibrado. No início desse período, a Williams ainda conseguiu manter algum nível de competitividade, especialmente em 1998 e 1999, quando seguiu brigando por vitórias ocasionais. Porém, a virada dos anos 2000 trouxe novos desafios. A parceria com a BMW em 2000 elevou o desempenho do time em alguns momentos, mas não foi suficiente para repetir o domínio do passado, já que a Ferrari e posteriormente a McLaren e Renault passaram a liderar a era. Durante os anos seguintes, a Williams viveu altos e baixos, alternando temporadas medianas com alguns pódios esporádicos, mas sem voltar à disputa real por títulos. Mesmo com pilotos talentosos como Juan Pablo Montoya, Ralf Schumacher e Mark Webber, a equipe não conseguiu acompanhar o ritmo de desenvolvimento das principais rivais. A partir de 2005, com o fim da parceria com a BMW, a situação ficou ainda mais difícil. A Williams passou a competir com recursos mais limitados e motores menos competitivos, entrando em uma fase de reconstrução. Ainda assim, manteve sua presença histórica na Fórmula 1, apostando em desenvolvimento próprio e novos talentos. Em 2012, a equipe viveu um raro momento de brilho com a vitória de Pastor Maldonado em Barcelona, marcando uma das últimas grandes conquistas desse período. Já em 2013, a Williams enfrentou mais uma temporada difícil, encerrando essa era ainda em busca de recuperação e estabilidade competitiva na era moderna da Fórmula 1.",

timeline: [
{ano:"1998", imagem:"tituloswil/1998.jpeg", descricao:"Fim do domínio"},
{ano:"2003", imagem:"tituloswil/2003.jpeg", descricao:"Última grande temporada"},
{ano:"2012", imagem:"tituloswil/2012.jpeg", descricao:"Última vitória até hoje"}
]
},

{
titulo: "Capítulo V – Nova era e reconstrução (2014-2025)",

texto: "Com a introdução dos motores híbridos em 2014, a Williams teve um breve retorno à competitividade. Utilizando unidades de potência Mercedes, a equipe conseguiu bons resultados e voltou a lutar regularmente por pódios. Em 2014 e 2015, a Williams viveu seu melhor momento da era moderna recente, com carros rápidos em classificações e forte desempenho em circuitos de baixa e média degradação. No entanto, a partir de 2016, a equipe começou a perder terreno para rivais que evoluíam mais rapidamente em aerodinâmica e desenvolvimento. Mesmo com pilotos experientes e jovens talentos, a Williams passou a enfrentar dificuldades para pontuar com consistência, entrando em uma fase de reconstrução estrutural e financeira. Entre 2018 e 2020, a equipe viveu um dos períodos mais difíceis de sua história, frequentemente ocupando o fim do grid. Apesar disso, a Williams manteve sua tradição de resiliência, passando por mudanças internas importantes de gestão e investimento para tentar recuperar competitividade. A partir de 2021, com a nova administração, a equipe iniciou uma reestruturação mais sólida, focando em eficiência, desenvolvimento gradual e preparação para o novo regulamento técnico da Fórmula 1. Mesmo ainda fora da disputa por pódios frequentes, a Williams começou a mostrar sinais de recuperação. Em 2023 e 2024, a equipe voltou a marcar presença mais consistente na zona de pontos, com destaque para Alexander Albon e novos projetos de desenvolvimento do carro. Já em 2025, a Williams segue em processo de evolução, ainda distante do topo, mas com uma base mais estável e uma estratégia de longo prazo para voltar a competir entre as equipes de frente no futuro da Fórmula 1.",

timeline: [
{ano:"2014", imagem:"tituloswil/2014.jpg", descricao:"Retorno ao pódio"},
{ano:"2015", imagem:"tituloswil/2015.jpeg", descricao:"Boa fase"},
{ano:"2019", imagem:"tituloswil/2019.jpg", descricao:"Pior fase"},
{ano:"2025", imagem:"tituloswil/2025.jpg", descricao:"Nova fase"}
]
}

];


// =====================================================
// 🔥 MOSTRAR ERA
// =====================================================
function mostrarEra(index) {

    document.getElementById("tituloEra-williams").innerText =
    erasWilliams[index].titulo;

    document.getElementById("textoEra-williams").innerText =
    erasWilliams[index].texto;

    const timelineContainer =
    document.getElementById("williams-timeline");

    timelineContainer.innerHTML = "";

    erasWilliams[index].timeline.forEach(item => {

        timelineContainer.innerHTML += `
            <div class="williams-timeline-item">

                <div class="williams-timeline-year">
                    ${item.ano}
                </div>

                <img src="${item.imagem}" alt="">

                <p>${item.descricao}</p>

            </div>
        `;

    });

}


// 🔥 deixa global pro onclick funcionar
globalThis.mostrarEra = mostrarEra;


// Mostra a primeira era automaticamente
mostrarEra(0);


// =====================================================
// 🍔 MENU WILLIAMS
// =====================================================

const toggleWilliams =
document.getElementById("menuToggleWilliams");

const menuWilliams =
document.getElementById("sideMenuWilliams");

const overlayWilliams =
document.getElementById("overlayWilliams");

const closeWilliams =
document.getElementById("closeMenuWilliams");

const linksMenuWilliams =
document.querySelectorAll(".side-menu-williams a");


// ABRIR MENU
if(toggleWilliams){

  toggleWilliams.addEventListener("click", ()=>{

    menuWilliams.classList.add("active");
    overlayWilliams.classList.add("active");

  });

}


// FECHAR MENU
function fecharMenuWilliams(){

  menuWilliams.classList.remove("active");
  overlayWilliams.classList.remove("active");

}


// BOTÃO X
if(closeWilliams){

  closeWilliams.addEventListener("click", ()=>{

    fecharMenuWilliams();

  });

}


// OVERLAY
if(overlayWilliams){

  overlayWilliams.addEventListener("click", ()=>{

    fecharMenuWilliams();

  });

}


// LINKS
linksMenuWilliams.forEach(link=>{

  link.addEventListener("click", ()=>{

    fecharMenuWilliams();

  });

});


});

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
// 🏎️ HALL DA FAMA WILLIAMS
// =====================================================

const bg1Williams = document.querySelector(".bg1-williams");
const bg2Williams = document.querySelector(".bg2-williams");

const cardsWilliams = document.querySelectorAll(".hall-card-williams");

if(bg1Williams && bg2Williams && cardsWilliams.length > 0){

  let currentWilliams = bg1Williams;
  let nextWilliams = bg2Williams;

  function changeBackgroundWilliams(img){

    if(!img) return;

    nextWilliams.style.backgroundImage = `url('${img}')`;

    nextWilliams.classList.add("active");

    currentWilliams.classList.remove("active");

    let temp = currentWilliams;

    currentWilliams = nextWilliams;
    nextWilliams = temp;
  }

  // inicia com o primeiro card
  changeBackgroundWilliams(cardsWilliams[0].dataset.bg);

  cardsWilliams.forEach(card => {

    const img = card.dataset.bg;

    card.addEventListener("mouseenter", () => {
      changeBackgroundWilliams(img);
    });

    card.addEventListener("click", () => {

      cardsWilliams.forEach(c => {
        c.classList.remove("active");
      });

      card.classList.add("active");

      changeBackgroundWilliams(img);

    });

  });

}

const carsDataWilliams = {

  "1980s": {
    image:"hallwil/fw06b.png",
    name:"Williams FW07B",
    engine:"Ford Cosworth DFV",
    power:"~480 HP",
    year:"1980",
    driver:"Jones <br> Reutemann"
  },

   "1990s": {
    image: "tituloswil/fw19.png",
    name: "Williams FW19",
    engine: "Renault RS9 V10",
    power: "~750 HP",
    year: "1997",
    driver: "Villeneuve <br> Frentzen"
  },

  "2000s": {
    image: "hallwil/fw22.png",
    name: "Williams FW22",
    engine: "BMW P80 V10",
    power: "~800 HP",
    year: "2000",
    driver: "Ralf Schumacher <br> Jenson Button"
  },

  "2010s": {
    image: "hallwil/fw34.png",
    name: "Williams FW34",
    engine: "Renault RS27 V8",
    power: "~750 HP",
    year: "2012",
    driver: "Maldonado <br> Bruno Senna"
  },

  "2020s": {
    image: "hallwil/fw47.png",
    name: "Williams FW47",
    engine: "Mercedes-AMG F1 M14 E Performance",
    power: "~1000 HP",
    year: "2025",
    driver: "Albon <br> Sainz"
  }

};

function changeDecadeWilliams(decade){

  const section = document.getElementById("williamsEvolution");
  const img = document.getElementById("carImage-williams");

  img.style.opacity = 0;
  img.style.transform = "scale(.85)";

  section.classList.remove(
    "bg-1980s",
    "bg-1990s",
    "bg-2000s",
    "bg-2010s",
    "bg-2020s"
  );

  section.classList.add(`bg-${decade}`);

  setTimeout(() => {

    const data = carsDataWilliams[decade];
    if(!data) return;

    img.src = data.image;

    document.getElementById("carName-williams").innerText = data.name;
    document.getElementById("carEngine-williams").innerText = data.engine;
    document.getElementById("carPower-williams").innerText = data.power;
    document.getElementById("carYear-williams").innerText = data.year;
    document.getElementById("carDriver-williams").innerHTML = data.driver;

    img.style.opacity = 1;
    img.style.transform = "scale(1)";

  },250);

}

window.changeDecadeWilliams = changeDecadeWilliams;


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


async function carregarTemporadawilliams() {

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

    const williams = construtores.find(
      e => e?.Constructor?.constructorId === "williams"
    );

    if (williams) {

      document.getElementById("posicaowilliams").innerText =
        williams.position || "—";

      document.getElementById("pontoswilliams").innerText =
        williams.points || "0";

      document.getElementById("totalTabelawilliams").innerText =
        williams.points || "0";
    }


    /* =====================
       RESULTADOS DA EQUIPE
    ===================== */

    const resultadosReq = await fetch(
      "https://api.jolpi.ca/ergast/f1/2026/constructors/williams/results.json"
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

      let Albon = "—";
      let Sainz = "—";

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

        if (nome === "Albon") {

          Albon =
            formatarResultadoF1(
              r?.positionText
            );

        }

        else if (nome === "Sainz") {

          Sainz =
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
          <td>${Albon}</td>
          <td>${Sainz}</td>
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
      "avgGridwilliams"
    ).innerText = avgGrid;


    /* =====================
       TABELA
    ===================== */

    document.getElementById(
      "tabelawilliams"
    ).innerHTML = html;


    /* =====================
       ESTATÍSTICAS
    ===================== */

    document.getElementById(
      "podioswilliams"
    ).innerText = podios;

    document.getElementById(
      "vitoriaswilliams"
    ).innerText = vitorias;

    document.getElementById(
      "top5williams"
    ).innerText = top5;


    /* =====================
       GRÁFICO
    ===================== */

    const linha =
      document.getElementById(
        "linhaGraficowilliams"
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
      "Erro williams:",
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

    carregarTemporadawilliams();

    setInterval(
      carregarTemporadawilliams,
      60000
    );

  }
);



// =========================================
// PAINEL DE NOTÍCIAS Williams
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiasWilliams");
const fecharNoticias = document.getElementById("fecharNoticiasWilliams");

const atualizarNoticias =
document.getElementById("atualizarNoticiasWilliams");


const painelNoticias = document.getElementById("painelNoticiasWilliams");
const overlayNoticias = document.getElementById("overlayNoticiasWilliams");

const listaNoticias = document.getElementById("listaNoticiasWilliams");




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
        <div class="loading-noticias-Williams">

            <div class="spinner-Williams"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{

        const resposta = await fetch(

`https://gnews.io/api/v4/search?q=Williams Formula 1&lang=en&country=gb&max=10&apikey=${API_KEY}`

        );

        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-Williams">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-Williams">

                <img
                src="${noticia.image || 'icons/WilliamsF1.png'}"
                alt="Notícia">

                <div class="card-conteudo-Williams">

                    <div class="data-noticia-Williams">

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

        <div class="loading-noticias-Williams">

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
        williams TEAMMATE
==================================================*/



const williamsSeason = 2026;


/* API */

const jolpicaAPI =
"https://api.jolpi.ca/ergast/f1";



/*==============================================
        PILOTOS williams
==============================================*/


const williamsDrivers = {


    Sainz:{

        number:55,
        name:"Carlos Sainz"

    },


    Albon:{

        number:23,
        name:"Alex Albon"

    }


};




/*==============================================
        ESTATÍSTICAS
==============================================*/


let williamsStats = {


    Sainz:{


        wins:0,
        podiums:0,
        poles:0,
        fastest:0,
        points:0


    },


    Albon:{


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


let williamsRaces = [];




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


async function getwilliamsCalendar(){



    const url =

    `${jolpicaAPI}/${williamsSeason}.json`;



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



    williamsRaces = races;



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

    `${jolpicaAPI}/${williamsSeason}/${round}/results.json`;



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
        williams TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 2
==================================================*/



/*==============================================
        IDENTIFICAR PILOTO
==============================================*/


function getwilliamsDriver(driverId){


    if(driverId === "sainz"){

        return "Sainz";

    }


    if(driverId === "albon"){

        return "Albon";

    }


    return null;


}






/*==============================================
        RESET ESTATÍSTICAS
==============================================*/


function resetwilliamsStats(){


    williamsStats = {


        Sainz:{


            wins:0,
            podiums:0,
            poles:0,
            fastest:0,
            points:0


        },


        Albon:{


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



    for(const race of williamsRaces){



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

            getwilliamsDriver(driverId);



            if(!name)
                continue;




            const stats =

            williamsStats[name];




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



    for(const race of williamsRaces){



        const round = race.round;



        const url =

        `${jolpicaAPI}/${williamsSeason}/${round}/qualifying.json`;



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

            getwilliamsDriver(driverId);



            if(name){

                williamsStats[name].poles++;

            }



        }



    }



}







/*==============================================
        BUSCAR PONTOS OFICIAIS DO CAMPEONATO
==============================================*/


async function getOfficialChampionship(){



    const url =

    `${jolpicaAPI}/${williamsSeason}/driverStandings.json`;



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

        getwilliamsDriver(
            driver.Driver.driverId
        );



        if(!name)
            continue;



        williamsStats[name].points =

        Number(driver.points);



    }



    console.log(

        "Pontos oficiais:",
        williamsStats

    );


}







/*==============================================
        EXECUTAR CÁLCULO COMPLETO
==============================================*/


async function calculatewilliamsBattle(){



    resetwilliamsStats();



    await calculateRaceResults();



    await calculatePoles();



    await getOfficialChampionship();




    console.log(

        "Estatísticas finais:",
        williamsStats

    );



    updatewilliamsBattle();



}

/*==================================================
        williams TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 3
==================================================*/



/*==============================================
        ATUALIZAR VALORES
==============================================*/


function setwilliamsValue(id,value){


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
        ATUALIZAR CARD williams
==============================================*/


function updatewilliamsBattle(){



    const Sainz =

    williamsStats.Sainz;



    const Albon =

    williamsStats.Albon;





    // VITÓRIAS


    setwilliamsValue(
        "williamsWinsLeft",
        Sainz.wins
    );


    setwilliamsValue(
        "williamsWinsRight",
        Albon.wins
    );


    updateBars(
        Sainz.wins,
        Albon.wins,
        "williamsBarWinsLeft",
        "williamsBarWinsRight"
    );





    // PÓDIOS


    setwilliamsValue(
        "williamsPodiumsLeft",
        Sainz.podiums
    );


    setwilliamsValue(
        "williamsPodiumsRight",
        Albon.podiums
    );


    updateBars(
        Sainz.podiums,
        Albon.podiums,
        "williamsBarPodiumsLeft",
        "williamsBarPodiumsRight"
    );






    // POLES


    setwilliamsValue(
        "williamsPolesLeft",
        Sainz.poles
    );


    setwilliamsValue(
        "williamsPolesRight",
        Albon.poles
    );


    updateBars(
        Sainz.poles,
        Albon.poles,
        "williamsBarPolesLeft",
        "williamsBarPolesRight"
    );






    // FASTEST LAPS


    setwilliamsValue(
        "williamsFastLeft",
        Sainz.fastest
    );


    setwilliamsValue(
        "williamsFastRight",
        Albon.fastest
    );


    updateBars(
        Sainz.fastest,
        Albon.fastest,
        "williamsBarFastLeft",
        "williamsBarFastRight"
    );







    // PONTOS


    setwilliamsValue(
        "williamsPointsLeft",
        Sainz.points
    );


    setwilliamsValue(
        "williamsPointsRight",
        Albon.points
    );


    updateBars(
        Sainz.points,
        Albon.points,
        "williamsBarPointsLeft",
        "williamsBarPointsRight"
    );



}








/*==============================================
        TEMPORADA NO CARD
==============================================*/


function updateSeason(){


    const element =

    document.getElementById(
        "williamsSeason"
    );



    if(element){


        element.textContent =

        "TEMPORADA " + williamsSeason;


    }


}








/*==============================================
        SISTEMA COMPLETO
==============================================*/


async function loadwilliamsBattle(){



    console.log(

        "Iniciando williams Battle..."

    );




    await getwilliamsCalendar();




    await calculatewilliamsBattle();




    updateSeason();




    updatewilliamsBattle();





    console.log(

        "Sistema williams carregado"

    );



}








/*==============================================
        INICIAR
==============================================*/


loadwilliamsBattle();








/*==============================================
        ATUALIZAÇÃO AUTOMÁTICA
==============================================*/


setInterval(()=>{


    console.log(

        "Atualizando williams Battle..."

    );



    loadwilliamsBattle();



},1800000);



/*==================================================
        williams DRIVER EVOLUTION
        sainz x albon
==================================================*/

document.addEventListener("DOMContentLoaded", () => {


    /*==============================================
            DADOS HISTÓRICOS
    ==============================================*/

    const driverData = {

    sainz: {

      2015: 18,
      2016: 46,
      2017: 54,
      2018: 53,
      2019: 96,
      2020: 105,
      2021: 164,
      2022: 246,
      2023: 200,
      2024: 290,
      2025: 64

    },

    albon: {

      2019: 92,
      2020: 105,
      2022: 4,
      2023: 27,
      2024: 68,
      2025: 73

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
            ".evolution-mode-williams"
        );


    const yLabels =
        document.querySelector(
            ".chart-y-labels-williams"
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
        sainz e albon nos anos finais.
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


                if (number === 55) {

                    driverData.sainz[2026] =
                        points;

                }


                if (number === 23) {

                    driverData.albon[2026] =
                        points;

                }

            });


            /*======================================
                    ATUALIZAR ESCALA
            ======================================*/

            const allPoints = [

                ...Object.values(
                    driverData.sainz
                ),

                ...Object.values(
                    driverData.albon
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


        if (mode === "sainz") {

            seasons =
                Object.keys(
                    driverData.sainz
                );

        }


        else if (mode === "albon") {

            seasons =
                Object.keys(
                    driverData.albon
                );

        }


        else {

            seasons = [

                ...new Set([

                    ...Object.keys(
                        driverData.sainz
                    ),

                    ...Object.keys(
                        driverData.albon
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
        driver === "sainz"
            ? "albon"
            : "sainz";


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
                driver === "sainz"
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

            if (driver === "albon") {

                return baseX -
                    DRIVER_SEPARATION;

            }


            if (driver === "sainz") {

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
            "evolution-svg-williams"
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
            "sainzGradient";


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
            "albonGradient";


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
            "chart-grid-williams";


        seasons.forEach(() => {

            const line =
                document.createElement(
                    "div"
                );


            line.className =
                "chart-grid-line-williams";


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
                "chart-point-williams"
            );


            if (
                driver === "albon"
            ) {

                circle.classList.add(
                    "albon-williams"
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
        driver === "albon"
            ? "sainz"
            : "albon";


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
    "chart-value-williams"
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
                sainz
        ==========================================*/

        if (
            mode === "both" ||
            mode === "sainz"
        ) {

            createDriverLine(
                "sainz",
                "sainz-path-williams"
            );

        }


        /*==========================================
                albon
        ==========================================*/

        if (
            mode === "both" ||
            mode === "albon"
        ) {

            createDriverLine(
                "albon",
                "albon-path-williams"
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
                    "chart-year-williams"
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
                ".evolution-mode-williams.active"
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