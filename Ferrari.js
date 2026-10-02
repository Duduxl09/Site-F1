document.addEventListener("DOMContentLoaded", function(){



// ======================================================
// ferrari Stats Automáticas
// API: Jolpica
// ======================================================

// -------------------------------------
// HISTÓRICO DA ferrari
// (Atualize somente quando quiser)
// -------------------------------------

const historicoferrari = {

    corridas: 1122,
    vitorias: 248,
    podios: 836,
    poles: 254,
    pontos: 10722

};

// -------------------------------------
// CONFIGURAÇÃO
// -------------------------------------

const equipe = "ferrari";
const temporada = "2026";

// -------------------------------------
// ELEMENTOS HTML
// -------------------------------------

const contadorCorridas =
document.getElementById("corridas-ferrari");

const contadorVitorias =
document.getElementById("vitorias-ferrari");

const contadorPodios =
document.getElementById("podios-ferrari");

const contadorPoles =
document.getElementById("poles-ferrari");

const contadorPontos =
document.getElementById("pontos-ferrari");

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
        historicoferrari.corridas +
        corridas2026,

        vitorias:
        historicoferrari.vitorias +
        vitorias2026,

        podios:
        historicoferrari.podios +
        podios2026,

        poles:
        historicoferrari.poles +
        poles2026,

        pontos:
        historicoferrari.pontos +
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

    const secao = document.querySelector(".numeros-ferrari");

    if(!secao) return;

    const observer = new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                document
                .querySelectorAll(".contador-ferrari")
                .forEach(contador=>{

                    if(contador.classList.contains("contado")) return;

                    contador.classList.add("contado");

                    const alvo =
                    Number(contador.dataset.target);

                    const barra =
                    contador.parentElement.querySelector(
                    ".barra-velocidade-ferrari"
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
    .querySelectorAll(".animar-ferrari")
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

const titulo = document.querySelector(".titulo-animar-ferrari");

const pos = titulo.getBoundingClientRect().top;

if(pos < window.innerHeight - 120){

titulo.classList.add("show");

}

});



/*//////////////////////////////////////////////
TIMELINE PILOTOS
//////////////////////////////////////////////*/

window.addEventListener("scroll", ()=>{

const itens = document.querySelectorAll(".conteudo-timeline-ferrari");
const linha = document.querySelector(".linha-centro-ferrari");
const secao = document.querySelector(".timeline-ferrari");

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

const pontos = document.querySelectorAll(".ponto-ferrari");
const progresso = document.querySelector(".linha-progresso-ferrari");
const luz = document.querySelector(".luz-ferrari");
const linha = document.querySelector(".linha-box-ferrari");

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

const pontos = document.querySelectorAll(".timeline-ferrari-car .ponto-car-ferrari");
const progresso = document.querySelector(".timeline-ferrari-car .linha-progresso-car-ferrari");
const luz = document.querySelector(".timeline-ferrari-car .luz-car-ferrari");
const linha = document.querySelector(".timeline-ferrari-car .linha-box-car-ferrari");

if(!pontos.length || !progresso || !luz || !linha) return;

let i = 0;

function animarTimeline(){

if(i >= pontos.length) return;

const ponto = pontos[i];

const foto = ponto.querySelector(".foto-car-ferrari, .foto-car-ferrari");
const info = ponto.querySelector(".info-car-ferrari, .info-car-ferrari");

if(foto) foto.classList.add("ativo");

let larguraLinha = linha.clientWidth;
let leftPercent = parseFloat(ponto.style.left);
let posPx = (leftPercent/100) * larguraLinha;

setTimeout(()=>{

if(info) info.classList.add("ativo");

progresso.style.width = posPx + "px";
luz.style.left = (posPx - 30) + "px";

ponto.style.boxShadow = "0 0 15px #dc0000";

i++;

setTimeout(animarTimeline,1300);

},900);

}

setTimeout(animarTimeline,800);

});

 // FECHAMENTO CERTO DO DOMContentLoaded


const erasFerrari = [

{
titulo: "Capítulo I – Primeiros passos (1950-1964) ",

texto: "A Scuderia Ferrari estreou na Fórmula 1 em 1950, sendo a única equipe que permanece até hoje desde a criação da categoria. Logo nos primeiros anos, a equipe italiana mostrou sua força e ambição dentro do automobilismo mundial Em 1951, a Ferrari conquistou sua primeira vitória na Fórmula 1, marcando o início de uma trajetória histórica. Pouco tempo depois, a equipe alcançou seu primeiro grande marco: o título mundial de pilotos em 1952 com Alberto Ascari, que repetiu o feito em 1953, consolidando a Ferrari como a principal força da época Durante essa fase inicial, a equipe construiu as bases de sua identidade na Fórmula 1, combinando desempenho, inovação e uma forte paixão pelas corridas. Ao longo dos anos seguintes, a Ferrari continuou competitiva, conquistando títulos importantes como o de construtores em 1961 e voltando ao topo em 1964, encerrando esse primeiro capítulo como uma das equipes mais vitoriosas do início da história da categoria.",
timeline: [

{ano:"1950", imagem:"titulosfer/1950.jpg", descricao:"Estreia na Formula 1"},
{ano:"1951", imagem:"titulosfer/1951.jpg", descricao:"1° Vitoria"},
{ano:"1952", imagem:"titulosfer/1952.jpeg", descricao:"1° Titulo"},
{ano:"1953", imagem:"titulosfer/1953.jpeg" ,
  descricao:"Bicampeonato"},
  {ano:"1961", imagem:"titulosfer/1961.jpg" ,
  descricao:"Titulo de construtores"}
]
},

{
titulo: "Capítulo II – Era de Ouro e Rivalidades (1965-1979)",
texto: "Após os sucessos iniciais, a Scuderia Ferrari entrou em um período de altos e baixos na Fórmula 1 durante o final dos anos 60. Mesmo assim, a equipe se reestruturou e voltou ao topo na década de 1970, iniciando uma das fases mais marcantes de sua história. O grande nome dessa era foi Niki Lauda, que liderou a Ferrari ao título mundial em 1975 e novamente em 1977. Seu talento, combinado com carros extremamente competitivos, recolocou a equipe italiana no centro da Fórmula 1. Essa fase também ficou marcada por uma das maiores rivalidades da história da categoria, entre Lauda e James Hunt. A disputa de 1976 entrou para a história não apenas pelo nível competitivo, mas também pelo drama vivido por Lauda, que retornou às pistas poucas semanas após um grave acidente, mostrando uma determinação que simboliza o espírito da Ferrari. No final da década, a equipe voltou a conquistar o título com Jody Scheckter em 1979, com o apoio de Gilles Villeneuve, encerrando o período com mais um momento histórico. Essa era consolidou a Ferrari como uma das maiores equipes da Fórmula 1, unindo desempenho, emoção e algumas das histórias mais icônicas do esporte.",
timeline: [
  {ano:"1975", imagem:"titulosfer/1975.jpeg", descricao:"Primeiro titulo do Lauda"},
{ano:"1976", imagem:"titulosfer/1976.webp", descricao:"Rivalidade historica Lauda x Hunt"},
{ano:"1977", imagem:"titulosfer/1977.jpg", descricao:"Bicampeonato do Lauda"},
{ano:"1979", imagem:"titulosfer/1979.jpg", descricao:"titulo do Scheckter"}

]
},

{
titulo: "Capítulo III – Crises e anos dificies (1980-1995)",
texto: "Após o sucesso da década de 1970, a Scuderia Ferrari entrou em um dos períodos mais instáveis de sua história na Fórmula 1. Durante os anos 80 e início dos anos 90, a equipe enfrentou dificuldades técnicas, mudanças internas e uma forte concorrência, o que impediu a continuidade do domínio visto anteriormente. Mesmo com carros competitivos em alguns momentos, a Ferrari frequentemente via vitórias escaparem por detalhes. Grandes nomes passaram pela equipe nesse período, como Alain Prost e Nigel Mansell, mas nem mesmo pilotos desse nível conseguiram levar a equipe de volta ao topo de forma consistente. A temporada de 1990 foi uma das mais marcantes dessa fase, quando Prost disputou o título até a última corrida, mostrando que a Ferrari ainda tinha potencial para lutar entre os melhores. No entanto, problemas de desempenho e organização continuaram a impedir conquistas maiores. Esse período ficou marcado como uma fase de reconstrução, onde a Ferrari buscava recuperar sua identidade vencedora. Apesar das dificuldades, esses anos foram fundamentais para preparar o caminho para uma das maiores reviravoltas da história da Fórmula 1.",
timeline: [
{ano:"1982", imagem:"titulosfer/1982.jpeg", descricao:"temporada boa mas sem titulo"},
{ano:"1985", imagem:"titulosfer/1985.jpg", descricao:"A ultima vitoria antes da queda"},
{ano:"1990", imagem:"titulosfer/1990.jpg", descricao:"Senna x Prost "},
{ano:"1995", imagem:"titulosfer/1995.jpeg", descricao:"Fim de uma era dificil"}
]
},

{
titulo: "Capítulo IV – Michael Schumacher (1996-2004)",
texto: "Após anos de dificuldades, a Scuderia Ferrari iniciou uma das maiores reconstruções da história da Fórmula 1 com a chegada de Michael Schumacher em 1996. Ao lado de uma equipe técnica extremamente forte, a Ferrari começou a se reorganizar e voltar ao topo. Os primeiros anos foram de evolução constante, com a equipe se tornando cada vez mais competitiva até finalmente conquistar o tão esperado título mundial em 2000, encerrando um jejum de 21 anos sem títulos de pilotos. A partir daí, a Ferrari dominou completamente a Fórmula 1. Schumacher conquistou cinco títulos consecutivos entre 2000 e 2004, enquanto a equipe acumulava vitórias, poles e recordes históricos. Ao seu lado, Rubens Barrichello teve papel fundamental, contribuindo para o domínio da equipe nos campeonatos de construtores. A temporada de 2004 se tornou um dos maiores exemplos de superioridade da história da categoria, com a Ferrari vencendo a grande maioria das corridas e estabelecendo um nível de desempenho raramente visto na Fórmula 1. Essa era não apenas devolveu a Ferrari ao topo, mas também consolidou o nome de Schumacher como um dos maiores pilotos de todos os tempos, marcando definitivamente a história do esporte.",
timeline: [
  {ano:"1996", imagem:"titulosfer/1996.jpeg", descricao:"Chegada do Schumacher"},
{ano:"1999", imagem:"titulosfer/1999.jpg", descricao:"De volta as glorias"},
{ano:"2000", imagem:"titulosfer/2000.jpeg", descricao:"Fim do Jejum"},
{ano:"2001-2003", imagem:"titulosfer/2001.jpeg", descricao:"Dominio absoluto"},
{ano:"2004", imagem:"titulosfer/2004.jpeg", descricao:"Historia feita"}
]
},

{
titulo: "Capitulo V - O Ultimo titulo e a nova queda (2005-2013)",
texto:"Após o domínio absoluto da era de Michael Schumacher, a Scuderia Ferrari entrou em uma nova fase na Fórmula 1. Com mudanças de regulamento e o crescimento de equipes rivais, manter o mesmo nível de desempenho se tornou um grande desafio. Mesmo assim, a Ferrari ainda mostrou sua força ao conquistar o título mundial de pilotos em 2007 com Kimi Räikkönen, em uma das disputas mais emocionantes da história da categoria. Nos anos seguintes, a equipe voltou a lutar pelo campeonato com Fernando Alonso, que esteve muito próximo do título em 2010 e 2012, levando a disputa até as últimas corridas. Apesar do alto nível competitivo, a Ferrari não conseguiu transformar essas campanhas em títulos. Durante esse período, a equipe enfrentou forte concorrência de outras grandes equipes e iniciou uma fase de instabilidade, alternando entre temporadas competitivas e outras abaixo das expectativas. Essa era marcou o último grande momento vencedor da Ferrari até hoje, mas também o início de uma nova fase de desafios na busca por retornar ao topo da Fórmula 1.",
timeline: [
  {ano:"2005", imagem:"titulosfer/2005.jpg", descricao:"Fim do dominio"},
{ano:"2007", imagem:"titulosfer/2007.jpeg", descricao:"Ultimo titulo de pilotos"},
{ano:"2008", imagem:"titulosfer/2008.jpg", descricao:"Ultimo titulo de construtores"},
{ano:"2010", imagem:"titulosfer/2010.jpeg", descricao:"Quase um titulo"},
{ano:"2012", imagem:"titulosfer/2012.jpg", descricao:"Nova disputa mesmo final"}
]
},

{
titulo: "Capitulo VI - Era Hibrida (2014-2021)",
texto:"Com a chegada da era híbrida em 2014, a Scuderia Ferrari enfrentou um dos maiores desafios de sua história na Fórmula 1. A equipe viu o domínio de seus rivais e precisou se adaptar rapidamente a um novo regulamento técnico. Após um início difícil, a Ferrari voltou a ser competitiva a partir de 2015, conquistando vitórias importantes e mostrando evolução constante. O grande destaque dessa fase foi Sebastian Vettel, que liderou a equipe em campanhas fortes, especialmente em 2017 e 2018, quando chegou a disputar o título mundial. Apesar do desempenho competitivo, erros estratégicos, falhas mecânicas e a consistência dos adversários impediram a conquista do campeonato. Ainda assim, a Ferrari se manteve como uma das principais forças do grid durante esses anos. Em 2019, a equipe iniciou uma nova fase com a ascensão de Charles Leclerc, que rapidamente se destacou com poles e vitórias, representando o futuro da equipe. No entanto, a partir de 2020, a Ferrari enfrentou uma queda significativa de desempenho, passando por uma de suas piores fases na era moderna. Em 2021, a equipe iniciou um processo de recuperação, voltando a mostrar sinais de evolução e preparando o terreno para um novo ciclo. Esse período ficou marcado como uma era de grandes oportunidades perdidas, mas também de transição e reconstrução rumo a um futuro mais competitivo.",
timeline: [
  {ano:"2014", imagem:"titulosfer/2014.jpg", descricao:"Inicio da era Hibrida"},
{ano:"2017", imagem:"titulosfer/2017.jpg", descricao:"Na briga pelo titulo"},
{ano:"2019", imagem:"titulosfer/2019.jpeg", descricao:"Chegada de Charles Lecrerc"},
{ano:"2020", imagem:"titulosfer/2020.jpg", descricao:"Queda de desempenho"}
]
},

{
titulo: "Capitulo VII - Efeito Solo (2022-2025)",
texto:"A partir de 2022, a Scuderia Ferrari iniciou um novo capítulo na Fórmula 1 com a chegada do novo regulamento técnico. A equipe começou forte, mostrando um carro competitivo e voltando a disputar vitórias com frequência. O principal destaque dessa fase foi Charles Leclerc, que assumiu o papel de líder dentro da equipe e chegou a disputar o campeonato em 2022. Ao seu lado, Carlos Sainz Jr. também contribuiu com desempenhos consistentes e vitórias importantes. Apesar do bom início, problemas estratégicos e falta de consistência impediram a Ferrari de manter a disputa pelo título ao longo das temporadas. Ainda assim, a equipe continuou evoluindo e se mantendo entre as principais forças do grid. Nos anos mais recentes, a Ferrari segue em processo de crescimento, buscando corrigir erros do passado e voltar definitivamente ao topo da Fórmula 1. Com uma base sólida, jovens talentos e um carro cada vez mais competitivo, a equipe mantém viva a expectativa de um novo ciclo vencedor.",
timeline: [
  {ano:"2022", imagem:"titulosfer/2022.jpeg", descricao:"Começo forte"},
{ano:"2023", imagem:"titulosfer/2023.jpeg", descricao:"Temporada inrregular"},
{ano:"2024", imagem:"titulosfer/2024.jpg", descricao:"Disputa pelo tituto de construtores"},
{ano:"2025", imagem:"titulosfer/2025.jpeg", descricao:"Lewis Hamilton é ferrari"}
]
}



];

function mostrarEra(index) {
    document.getElementById("tituloEra-ferrari").innerText = erasFerrari[index].titulo;
    document.getElementById("textoEra-ferrari").innerText = erasFerrari[index].texto;

    const timelineContainer = document.getElementById("ferrari-timeline");
    timelineContainer.innerHTML = "";

    erasFerrari[index].timeline.forEach(item => {
        timelineContainer.innerHTML += `
            <div class="ferrari-timeline-item">
                <div class="ferrari-timeline-year">${item.ano}</div>
                <img src="${item.imagem}" alt="">
                <p>${item.descricao}</p>
            </div>
        `;
    });
}


// Mostra a primeira era automaticamente ao carregar

mostrarEra(0);



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
 const toggleferrari = document.getElementById("menuToggleferrari");
const menuferrari = document.getElementById("sideMenuferrari");
const overlayferrari = document.getElementById("overlayferrari");
const closeferrari = document.getElementById("closeMenuferrari");

// 🔥 pega todos os links do menu
const linksMenuferrari = document.querySelectorAll(".side-menu-ferrari a");

// ABRIR
toggleferrari.addEventListener("click", () => {
  menuferrari.classList.add("active");
  overlayferrari.classList.add("active");
});

// FECHAR NO X
closeferrari.addEventListener("click", () => {
  fecharMenuferrari();
});

// FECHAR CLICANDO FORA
overlayferrari.addEventListener("click", () => {
  fecharMenuferrari();
});

// 🔥 FECHAR AO CLICAR EM QUALQUER LINK
linksMenuferrari.forEach(link => {
  link.addEventListener("click", () => {
    fecharMenuferrari();
  });
});

// 🔥 FUNÇÃO PADRÃO
function fecharMenuferrari(){
  menuferrari.classList.remove("active");
  overlayferrari.classList.remove("active");
}



	
// =====================================================
// 🏎️ HALL DA FAMA FERRARI
// =====================================================

const bg1Ferrari = document.querySelector(".bg1-ferrari");
const bg2Ferrari = document.querySelector(".bg2-ferrari");

const cardsFerrari = document.querySelectorAll(".hall-card-ferrari");

if(bg1Ferrari && bg2Ferrari && cardsFerrari.length > 0){

  let currentFerrari = bg1Ferrari;
  let nextFerrari = bg2Ferrari;

  function changeBackgroundFerrari(img){

    if(!img) return;

    nextFerrari.style.backgroundImage = `url('${img}')`;

    nextFerrari.classList.add("active");

    currentFerrari.classList.remove("active");

    let temp = currentFerrari;

    currentFerrari = nextFerrari;
    nextFerrari = temp;
  }

  changeBackgroundFerrari(cardsFerrari[0].dataset.bg);

  cardsFerrari.forEach(card => {

    const img = card.dataset.bg;

    card.addEventListener("mouseenter", () => {
      changeBackgroundFerrari(img);
    });

    card.addEventListener("click", () => {

      cardsFerrari.forEach(c => {
        c.classList.remove("active");
      });

      card.classList.add("active");

      changeBackgroundFerrari(img);

    });

  });

}

// =====================================================
// 🔥 MODO SHOWCASE FERRARI
// =====================================================

const hallFerrari = document.querySelector(".hall-ferrari");
const bgFerrari = document.querySelector(".bg-hall-ferrari");

if(hallFerrari && bgFerrari){

  bgFerrari.addEventListener("click", ()=>{

    hallFerrari.classList.toggle("showcase");

  });

}


const carsDataFerrari = {

  "1950s": {
    image:"hallfer/500f2.png",
    name:"Ferrari 500 F2",
    engine:"Ferrari Tipo 500 2.0L",
    power:"~185 HP",
    year:"1952",
    driver:"Ascari <br> Villoresi"
  },

  "1970s": {
    image:"titulosfer/312t.png",
    name:"Ferrari 312T",
    engine:"Ferrari Flat-12",
    power:"~510 HP",
    year:"1975",
    driver:"Lauda <br> Regazzoni"
  },

  "2000s": {
    image:"titulosfer/2000.png",
    name:"Ferrari F1-2000",
    engine:"Ferrari Tipo 049 V10",
    power:"~805 HP",
    year:"2000",
    driver:"Schumacher <br> Barrichello"
  },

  "2007s": {
    image:"titulosfer/f2007 (1).png",
    name:"Ferrari F2007",
    engine:"Ferrari Tipo 056 V8",
    power:"~760 HP",
    year:"2007",
    driver:"Räikkönen <br> Massa"
  },

  "2025s": {
    image:"hallfer/sf25.png",
    name:"Ferrari SF-25",
    engine:"Ferrari 066/15 Hybrid",
    power:"~1050 HP",
    year:"2025",
    driver:"Leclerc <br> Hamilton"
  }

};

function changeDecadeFerrari(decade){

  const section = document.getElementById("ferrariEvolution");
  const img = document.getElementById("carImage-ferrari");

  img.style.opacity = 0;
  img.style.transform = "scale(.85)";

  section.classList.remove(
    "bg-1950s",
    "bg-1970s",
    "bg-2000s",
    "bg-2007s",
    "bg-2025s"
  );

  section.classList.add(`bg-${decade}`);

  setTimeout(() => {

    const data = carsDataFerrari[decade];

    if(!data) return;

    img.src = data.image;

    document.getElementById("carName-ferrari").innerText = data.name;
    document.getElementById("carEngine-ferrari").innerText = data.engine;
    document.getElementById("carPower-ferrari").innerText = data.power;
    document.getElementById("carYear-ferrari").innerText = data.year;
    document.getElementById("carDriver-ferrari").innerHTML = data.driver;

    img.style.opacity = 1;
    img.style.transform = "scale(1)";

  },250);

}




window.changeDecadeFerrari = changeDecadeFerrari;


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


async function carregarTemporadaferrari() {

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

    const ferrari = construtores.find(
      e => e?.Constructor?.constructorId === "ferrari"
    );

    if (ferrari) {

      document.getElementById("posicaoferrari").innerText =
        ferrari.position || "—";

      document.getElementById("pontosferrari").innerText =
        ferrari.points || "0";

      document.getElementById("totalTabelaferrari").innerText =
        ferrari.points || "0";
    }


    /* =====================
       RESULTADOS DA EQUIPE
    ===================== */

    const resultadosReq = await fetch(
      "https://api.jolpi.ca/ergast/f1/2026/constructors/ferrari/results.json"
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

      let Leclerc = "—";
      let Hamilton = "—";

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

        if (nome === "Leclerc") {

          Leclerc =
            formatarResultadoF1(
              r?.positionText
            );

        }

        else if (nome === "Hamilton") {

          Hamilton =
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
          <td>${Leclerc}</td>
          <td>${Hamilton}</td>
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
      "avgGridferrari"
    ).innerText = avgGrid;


    /* =====================
       TABELA
    ===================== */

    document.getElementById(
      "tabelaferrari"
    ).innerHTML = html;


    /* =====================
       ESTATÍSTICAS
    ===================== */

    document.getElementById(
      "podiosferrari"
    ).innerText = podios;

    document.getElementById(
      "vitoriasferrari"
    ).innerText = vitorias;

    document.getElementById(
      "top5ferrari"
    ).innerText = top5;


    /* =====================
       GRÁFICO
    ===================== */

    const linha =
      document.getElementById(
        "linhaGraficoferrari"
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
      "Erro ferrari:",
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

    carregarTemporadaferrari();

    setInterval(
      carregarTemporadaferrari,
      60000
    );

  }
);



// =========================================
// PAINEL DE NOTÍCIAS ferrari
// =========================================

const abrirNoticias = document.getElementById("abrirNoticiasferrari");
const fecharNoticias = document.getElementById("fecharNoticiasferrari");

const atualizarNoticias =
document.getElementById("atualizarNoticiasferrari");


const painelNoticias = document.getElementById("painelNoticiasferrari");
const overlayNoticias = document.getElementById("overlayNoticiasferrari");

const listaNoticias = document.getElementById("listaNoticiasferrari");




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
        <div class="loading-noticias-ferrari">

            <div class="spinner-ferrari"></div>

            <p>Carregando notícias...</p>

        </div>
    `;

    try{

        const resposta = await fetch(

`https://gnews.io/api/v4/search?q=ferrari Formula 1&lang=en&country=gb&max=10&apikey=${API_KEY}`

        );

        const dados = await resposta.json();

        listaNoticias.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            listaNoticias.innerHTML = `
                <div class="loading-noticias-ferrari">

                    Nenhuma notícia encontrada.

                </div>
            `;

            return;

        }

        dados.articles.forEach(noticia=>{

            listaNoticias.innerHTML += `

            <div class="card-noticia-ferrari">

                <img
                src="${noticia.image || 'icons/ferrari.png'}"
                alt="Notícia">

                <div class="card-conteudo-ferrari">

                    <div class="data-noticia-ferrari">

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

        <div class="loading-noticias-ferrari">

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
        ferrari TEAMMATE
==================================================*/



const ferrariSeason = 2026;


/* API */

const jolpicaAPI =
"https://api.jolpi.ca/ergast/f1";



/*==============================================
        PILOTOS ferrari
==============================================*/


const ferrariDrivers = {


    Hamilton:{

        number:44,
        name:"Lewis Hamilton"

    },


    Leclerc:{

        number:16,
        name:"Charles Leclerc"

    }


};




/*==============================================
        ESTATÍSTICAS
==============================================*/


let ferrariStats = {


    Hamilton:{


        wins:0,
        podiums:0,
        poles:0,
        fastest:0,
        points:0


    },


    Leclerc:{


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


let ferrariRaces = [];




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


async function getferrariCalendar(){



    const url =

    `${jolpicaAPI}/${ferrariSeason}.json`;



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



    ferrariRaces = races;



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

    `${jolpicaAPI}/${ferrariSeason}/${round}/results.json`;



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
        ferrari TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 2
==================================================*/



/*==============================================
        IDENTIFICAR PILOTO
==============================================*/


function getferrariDriver(driverId){


    if(driverId === "hamilton"){

        return "Hamilton";

    }


    if(driverId === "leclerc"){

        return "Leclerc";

    }


    return null;


}






/*==============================================
        RESET ESTATÍSTICAS
==============================================*/


function resetferrariStats(){


    ferrariStats = {


        Hamilton:{


            wins:0,
            podiums:0,
            poles:0,
            fastest:0,
            points:0


        },


        Leclerc:{


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



    for(const race of ferrariRaces){



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

            getferrariDriver(driverId);



            if(!name)
                continue;




            const stats =

            ferrariStats[name];




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



    for(const race of ferrariRaces){



        const round = race.round;



        const url =

        `${jolpicaAPI}/${ferrariSeason}/${round}/qualifying.json`;



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

            getferrariDriver(driverId);



            if(name){

                ferrariStats[name].poles++;

            }



        }



    }



}







/*==============================================
        BUSCAR PONTOS OFICIAIS DO CAMPEONATO
==============================================*/


async function getOfficialChampionship(){



    const url =

    `${jolpicaAPI}/${ferrariSeason}/driverStandings.json`;



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

        getferrariDriver(
            driver.Driver.driverId
        );



        if(!name)
            continue;



        ferrariStats[name].points =

        Number(driver.points);



    }



    console.log(

        "Pontos oficiais:",
        ferrariStats

    );


}







/*==============================================
        EXECUTAR CÁLCULO COMPLETO
==============================================*/


async function calculateferrariBattle(){



    resetferrariStats();



    await calculateRaceResults();



    await calculatePoles();



    await getOfficialChampionship();




    console.log(

        "Estatísticas finais:",
        ferrariStats

    );



    updateferrariBattle();



}

/*==================================================
        ferrari TEAMMATE BATTLE 2026
        Jolpica F1 API - PARTE 3
==================================================*/



/*==============================================
        ATUALIZAR VALORES
==============================================*/


function setferrariValue(id,value){


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
        ATUALIZAR CARD ferrari
==============================================*/


function updateferrariBattle(){



    const Hamilton =

    ferrariStats.Hamilton;



    const Leclerc =

    ferrariStats.Leclerc;





    // VITÓRIAS


    setferrariValue(
        "ferrariWinsLeft",
        Hamilton.wins
    );


    setferrariValue(
        "ferrariWinsRight",
        Leclerc.wins
    );


    updateBars(
        Hamilton.wins,
        Leclerc.wins,
        "ferrariBarWinsLeft",
        "ferrariBarWinsRight"
    );





    // PÓDIOS


    setferrariValue(
        "ferrariPodiumsLeft",
        Hamilton.podiums
    );


    setferrariValue(
        "ferrariPodiumsRight",
        Leclerc.podiums
    );


    updateBars(
        Hamilton.podiums,
        Leclerc.podiums,
        "ferrariBarPodiumsLeft",
        "ferrariBarPodiumsRight"
    );






    // POLES


    setferrariValue(
        "ferrariPolesLeft",
        Hamilton.poles
    );


    setferrariValue(
        "ferrariPolesRight",
        Leclerc.poles
    );


    updateBars(
        Hamilton.poles,
        Leclerc.poles,
        "ferrariBarPolesLeft",
        "ferrariBarPolesRight"
    );






    // FASTEST LAPS


    setferrariValue(
        "ferrariFastLeft",
        Hamilton.fastest
    );


    setferrariValue(
        "ferrariFastRight",
        Leclerc.fastest
    );


    updateBars(
        Hamilton.fastest,
        Leclerc.fastest,
        "ferrariBarFastLeft",
        "ferrariBarFastRight"
    );







    // PONTOS


    setferrariValue(
        "ferrariPointsLeft",
        Hamilton.points
    );


    setferrariValue(
        "ferrariPointsRight",
        Leclerc.points
    );


    updateBars(
        Hamilton.points,
        Leclerc.points,
        "ferrariBarPointsLeft",
        "ferrariBarPointsRight"
    );



}








/*==============================================
        TEMPORADA NO CARD
==============================================*/


function updateSeason(){


    const element =

    document.getElementById(
        "ferrariSeason"
    );



    if(element){


        element.textContent =

        "TEMPORADA " + ferrariSeason;


    }


}








/*==============================================
        SISTEMA COMPLETO
==============================================*/


async function loadferrariBattle(){



    console.log(

        "Iniciando ferrari Battle..."

    );




    await getferrariCalendar();




    await calculateferrariBattle();




    updateSeason();




    updateferrariBattle();





    console.log(

        "Sistema ferrari carregado"

    );



}








/*==============================================
        INICIAR
==============================================*/


loadferrariBattle();








/*==============================================
        ATUALIZAÇÃO AUTOMÁTICA
==============================================*/


setInterval(()=>{


    console.log(

        "Atualizando ferrari Battle..."

    );



    loadferrariBattle();



},1800000);



/*==================================================
        ferrari DRIVER EVOLUTION
        hamilton x leclerc
==================================================*/

document.addEventListener("DOMContentLoaded", () => {


    /*==============================================
            DADOS HISTÓRICOS
    ==============================================*/

    const driverData = {

  hamilton: {
  2007: 109,
  2008: 98,
  2009: 49,
  2010: 240,
  2011: 227,
  2012: 190,
  2013: 189,
  2014: 384,
  2015: 381,
  2016: 380,
  2017: 363,
  2018: 408,
  2019: 413,
  2020: 347,
  2021: 385,
  2022: 233,
  2023: 217,
  2024: 207,
  2025: 260
},

leclerc: {
  2018: 39,
  2019: 264,
  2020: 98,
  2021: 159,
  2022: 308,
  2023: 206,
  2024: 356,
  2025: 280
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
            ".evolution-mode-ferrari"
        );


    const yLabels =
        document.querySelector(
            ".chart-y-labels-ferrari"
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
        hamilton e leclerc nos anos finais.
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


                if (number === 44) {

                    driverData.hamilton[2026] =
                        points;

                }


                if (number === 16) {

                    driverData.leclerc[2026] =
                        points;

                }

            });


            /*======================================
                    ATUALIZAR ESCALA
            ======================================*/

            const allPoints = [

                ...Object.values(
                    driverData.hamilton
                ),

                ...Object.values(
                    driverData.leclerc
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


        if (mode === "hamilton") {

            seasons =
                Object.keys(
                    driverData.hamilton
                );

        }


        else if (mode === "leclerc") {

            seasons =
                Object.keys(
                    driverData.leclerc
                );

        }


        else {

            seasons = [

                ...new Set([

                    ...Object.keys(
                        driverData.hamilton
                    ),

                    ...Object.keys(
                        driverData.leclerc
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
        driver === "hamilton"
            ? "leclerc"
            : "hamilton";


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
                driver === "hamilton"
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

            if (driver === "leclerc") {

                return baseX -
                    DRIVER_SEPARATION;

            }


            if (driver === "hamilton") {

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
            "evolution-svg-ferrari"
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
            "hamiltonGradient";


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
            "leclercGradient";


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
            "chart-grid-ferrari";


        seasons.forEach(() => {

            const line =
                document.createElement(
                    "div"
                );


            line.className =
                "chart-grid-line-ferrari";


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
                "chart-point-ferrari"
            );


            if (
                driver === "leclerc"
            ) {

                circle.classList.add(
                    "leclerc-ferrari"
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
        driver === "leclerc"
            ? "hamilton"
            : "leclerc";


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
    "chart-value-ferrari"
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
                hamilton
        ==========================================*/

        if (
            mode === "both" ||
            mode === "hamilton"
        ) {

            createDriverLine(
                "hamilton",
                "hamilton-path-ferrari"
            );

        }


        /*==========================================
                leclerc
        ==========================================*/

        if (
            mode === "both" ||
            mode === "leclerc"
        ) {

            createDriverLine(
                "leclerc",
                "leclerc-path-ferrari"
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
                    "chart-year-ferrari"
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
                ".evolution-mode-ferrari.active"
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