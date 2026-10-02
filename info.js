



/* =========================================
   NOTÍCIAS
========================================= */
const API_NEWS =
"https://newsdata.io/api/1/news?apikey=pub_b6d96640a1e149b9a2569e8e1934d009&q=%22Formula%201%22&language=en&category=sports";

const noticiasContainer =
document.getElementById("noticiasContainer");


async function carregarNoticias(){

    try{

        const resposta =
        await fetch(API_NEWS);

        const data =
        await resposta.json();

        noticiasContainer.innerHTML = "";

        if(!data.results){
            noticiasContainer.innerHTML =
            "<p>Nenhuma notícia encontrada.</p>";
            return;
        }

        data.results.slice(0,10).forEach(noticia=>{

            const card =
            document.createElement("div");

            card.className =
            "noticia-card";

            const imagem =
            noticia.image_url ||
            "logos/F1-logo.png";

            const descricao =
            noticia.description ||
            "Clique para ler a matéria completa.";

            const fonte =
            noticia.source_name ||
            "F1";

            const dataNoticia =
            noticia.pubDate
            ? new Date(noticia.pubDate).toLocaleDateString("pt-BR")
            : "";

            card.innerHTML = `

                <img
                    class="noticia-imagem"
                    src="${imagem}"
                    alt="Notícia">

                <div class="noticia-conteudo">

                    <span class="noticia-fonte">
                        ${fonte}
                    </span>

                    <h3 class="noticia-titulo">
                        ${noticia.title}
                    </h3>

                    <p class="noticia-descricao">
                        ${descricao}
                    </p>

                    <div class="noticia-footer">

                        <span class="noticia-data">
                            ${dataNoticia}
                        </span>

                        <a
                            class="noticia-link"
                            href="${noticia.link}"
                            target="_blank">

                            Ler matéria

                        </a>

                    </div>

                </div>

            `;

            noticiasContainer.appendChild(card);

        });

    }

    catch(erro){

        console.error(erro);

        noticiasContainer.innerHTML =
        "<p>Erro ao carregar notícias.</p>";

    }

}

carregarNoticias();



/* =========================================
   FIM DE SEMANA
========================================= */
// DADOS DOS FORMATOS DE CORRIDA
const scheduleData = {
  normal: [
    {
      day: "Quinta-Feira",
      tag: "Bastidores",
      desc: "Dia de Mídia: Entrevistas com os pilotos, caminhada pelo circuito (Track Walk) e coletivas da FIA.",
      img: "semana/red.jpg"
    },
    {
      day: "Sexta-Feira",
      tag: "Treinos Livres",
      desc: "Treino Livre 1 (FP1) e Treino Livre 2 (FP2). Ajustes de setup e simulação de corrida.",
      img: "semana/mcl.jpeg"
    },
    {
      day: "Sábado",
      tag: "Qualificação",
      desc: "Treino Livre 3 (FP3) pela manhã. À tarde acontece a Classificação (Q1, Q2, Q3) para definir o grid de domingo.",
      img: "semana/fer.jpeg"
    },
    {
      day: "Domingo",
      tag: "Dia de Corrida",
      desc: "O evento principal! Parade dos pilotos, hino nacional, largada e a Grande Corrida com cerimônia de pódio.",
      img: "semana/mer.jpg"
    }
  ],
  sprint: [
    {
      day: "Quinta-Feira",
      tag: "Bastidores",
      desc: "Dia de Mídia: Atividades com a imprensa, inspeções técnicas nos carros e reuniões de equipe.",
      img: "semana/audi.jpeg"		
		},
    {
      day: "Sexta-Feira",
      tag: "Ação Imediata",
      desc: "Treino Livre Único (FP1) seguido da Qualificação Sprint (Sprint Shootout) para a corrida curta.",
      img: "semana/osc.webp"
		},
    {
      day: "Sábado",
      tag: "Sprint & Classificação",
      desc: "Corrida Sprint de 100km valendo pontos. Mais tarde, ocorre a Classificação Oficial para a corrida de domingo.",
	   img: "semana/char.jpg"
    },
    {
      day: "Domingo",
      tag: "O Grande Prêmio",
      desc: "A corrida principal do final de semana (distância tradicional de 305km) com estratégias de box e pódio.",
			 img: "semana/ru.jpg"
    }
  ]
};

let currentFormat = 'normal';
const carousel = document.getElementById('carousel');
const dotsContainer = document.getElementById('dots');

// RENDERIZAR CARDS DOS DIAS DA SEMANA
function renderCards(format) {
  carousel.innerHTML = '';
  dotsContainer.innerHTML = '';
  
  const items = scheduleData[format];

  items.forEach((item, index) => {
    // Criar Card
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.day}" class="card-img">
      <div class="card-overlay"></div>
      <div class="card-content">
        <span class="card-badge">${item.tag}</span>
        <h2 class="card-day">${item.day}</h2>
        <p class="card-description">${item.desc}</p>
      </div>
    `;
    carousel.appendChild(card);

    // Criar Dot (Indicador)
    const dot = document.createElement('div');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.onclick = () => scrollToCard(index);
    dotsContainer.appendChild(dot);
  });
}

// ALTERNAR ENTRE FORMATO NORMAL E SPRINT
function switchFormat(format) {
  currentFormat = format;
  
  // Atualizar botões
  document.getElementById('btn-normal').classList.toggle('active', format === 'normal');
  document.getElementById('btn-sprint').classList.toggle('active', format === 'sprint');
  
  // Atualizar subtítulo
  document.getElementById('subtitle').innerText = format === 'normal' 
    ? 'Como funciona um final de semana tradicional de Fórmula 1'
    : 'Como funciona um final de semana dinâmico com Corrida Sprint';

  renderCards(format);
  carousel.scrollLeft = 0;
}

// CONTROLES DE ROLAGEM
function scrollCarousel(direction) {
  const cardWidth = 320 + 20; // Largura do card + gap
  carousel.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

function scrollToCard(index) {
  const cardWidth = 320 + 20;
  carousel.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
}

// SINCRO DA ROLAGEM COM OS DOTS
carousel.addEventListener('scroll', () => {
  const cardWidth = 320 + 20;
  const activeIndex = Math.round(carousel.scrollLeft / cardWidth);
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === activeIndex);
  });
});

// INICIALIZAR
renderCards('normal');





/*=============================================
        RESULTADOS         
==============================================*/

const gpSelect = document.getElementById("gpSelect");
const sessionSelect = document.getElementById("sessionSelect");


const gpFlag = document.getElementById("gpFlag");
const gpName = document.getElementById("gpName");
const circuitName = document.getElementById("circuitName");
const gpDate = document.getElementById("gpDate");


const sessionStatus = document.getElementById("sessionStatus");


const bestLap = document.getElementById("bestLap");
const fastestDriver = document.getElementById("fastestDriver");
const fastestTeam = document.getElementById("fastestTeam");


const resultsBody = document.getElementById("resultsBody");
const sessionTitle = document.getElementById("sessionTitle");



/* =========================================
        CONFIGURAÇÃO
========================================= */

const season = 2026;

const API =
"https://api.jolpi.ca/ergast/f1";


let races = [];

let currentRace = null;

let sessoesOpenF1 = [];



/* =========================================
        BANDEIRAS
========================================= */

function classeEquipe(equipe){


const times = {


"McLaren":
"mclaren",


"Ferrari":
"ferrari",


"Red Bull":
"redbull",


"Mercedes":
"mercedes",


"Aston Martin":
"aston",


"Alpine":
"alpine",


"Williams":
"williams",


"Haas F1 Team":
"haas"


};


return times[equipe] || "";

}

const teamIconsOpenF1 = {

    "McLaren": "icons/mclaren.png",
    "Ferrari": "icons/ferrari.png",
    "Red Bull Racing":"icons/redbull.png",
    "Mercedes": "icons/Mercedesa.png",
    "Aston Martin": "icons/aston.png",
    "Alpine": "icons/Alpinef1.png",
    "Williams": "icons/WilliamsF1.png",
    "Haas F1 Team": "icons/HaasF1.png",
	  "Audi":"icons/audi.png",
	  "Racing Bulls": "icons/racingbulls.svg",
	  "Cadillac": "icons/cadillac.png"

};

const teamIcons = {

    "McLaren": "icons/mclaren.png",
    "Red Bull": "icons/redbull.png",
    "Ferrari": "icons/ferrari.png",
    "Mercedes": "icons/Mercedesa.png",
    "Aston Martin": "icons/aston.png",
    "Alpine F1 Team": "icons/Alpinef1.png",
    "Williams": "icons/WilliamsF1.png",
    "Haas F1 Team": "icons/HaasF1.png",
    "RB F1 Team": "icons/racingbulls.svg",
    "Audi": "icons/audi.png",
    "Cadillac F1 Team": "icons/cadillac.png"

};

const circuitosOpenF1 = {

    "Bahrain International Circuit": "Sakhir",

    "Albert Park Grand Prix Circuit": "Melbourne",

    "Shanghai International Circuit": "Shanghai",

    "Suzuka Circuit": "Suzuka",

    "Jeddah Corniche Circuit": "Jeddah",

    "Miami International Autodrome": "Miami",

    "Circuit Gilles Villeneuve": "Montreal",

    "Circuit de Monaco": "Monte Carlo",

    "Circuit de Barcelona-Catalunya": "Catalunya",

    "Red Bull Ring": "Spielberg",

    "Silverstone Circuit": "Silverstone",

    "Circuit de Spa-Francorchamps": "Spa-Francorchamps",

    "Hungaroring": "Hungaroring",

    "Circuit Zandvoort": "Zandvoort",

    "Autodromo Nazionale di Monza": "Monza",

    "Madring": "Madring",

    "Baku City Circuit": "Baku",

	  "Sepang International Circuit": "Sepang",

    "Marina Bay Street Circuit": "Singapore",

    "Circuit of the Americas": "Austin",

    "Autódromo Hermanos Rodríguez": "Mexico City",

    "Autódromo José Carlos Pace": "Interlagos",

    "Las Vegas Strip Street Circuit": "Las Vegas",

    "Lusail International Circuit": "Lusail",

    "Yas Marina Circuit": "Yas Marina Circuit"

};

const flags = {

    "Australia":"🇦🇺",
    "China":"🇨🇳",
    "Japan":"🇯🇵",
    "United States":"🇺🇸",
    "Canada":"🇨🇦",
    "Monaco":"🇲🇨",
    "Spain":"🇪🇸",
    "Austria":"🇦🇹",
    "United Kingdom":"🇬🇧",
    "Belgium":"🇧🇪",
	  "Hungary":"🇭🇺",
    "Netherlands":"🇳🇱",
    "Italy":"🇮🇹",
    "Spain":"🇪🇸",
    "Azerbaijan":"🇦🇿",
	  "Singapore":"🇸🇬",
	  "United States":"🇺🇸",
    "Mexico":"🇲🇽",
    "Brazil":"🇧🇷",
    "United States":"🇺🇸",
		"Qatar":"🇶🇦",
		"Abu Dhabi":"🇦🇪",
	  "Malaysia":"🇧🇭"
			
};



/* =========================================
        CARREGAR CALENDÁRIO
========================================= */

async function loadCalendar(){


try{


const response =
await fetch(
`${API}/${season}/races.json`
);



const data =
await response.json();



races =
data.MRData.RaceTable.Races;



gpSelect.innerHTML="";



races.forEach((race,index)=>{


const option =
document.createElement("option");


option.value=index;


option.textContent =
race.raceName;


gpSelect.appendChild(option);


});



openLastGP();



}


catch(error){


console.error(
"Erro calendário:",
error
);


}


}

/* =========================================
        ABRIR ÚLTIMO GP
========================================= */

function openLastGP(){


const hoje =
new Date();



let ultimo = 0;



races.forEach(
(race,index)=>{


const data =
new Date(race.date);



if(data <= hoje){

ultimo=index;

}


});



gpSelect.value = ultimo;

loadGPInfo(ultimo);

selecionarUltimaSessao();



}


function selecionarUltimaSessao(){

    const agora = new Date();

    if(new Date(currentRace.date) <= agora){

        sessionSelect.value = "Race";

    }

    else if(
        currentRace.Qualifying &&
        new Date(`${currentRace.Qualifying.date}T${currentRace.Qualifying.time}`) <= agora
    ){

        sessionSelect.value = "Qualifying";

    }

    else if(
        currentRace.Sprint &&
        new Date(`${currentRace.Sprint.date}T${currentRace.Sprint.time}`) <= agora
    ){

        sessionSelect.value = "Sprint";

    }

    else if(
        currentRace.ThirdPractice &&
        new Date(`${currentRace.ThirdPractice.date}T${currentRace.ThirdPractice.time}`) <= agora
    ){

        sessionSelect.value = "Practice 3";

    }

    else if(
        currentRace.SecondPractice &&
        new Date(`${currentRace.SecondPractice.date}T${currentRace.SecondPractice.time}`) <= agora
    ){

        sessionSelect.value = "Practice 2";

    }

    else{

        sessionSelect.value = "Practice 1";

    }

    loadSession();

}



/* =========================================
        INFORMAÇÕES DO GP
========================================= */

function loadGPInfo(index){


const race =
races[index];


if(!race)
return;



currentRace =
race;



const pais =
race.Circuit.Location.country;



gpFlag.textContent =
flags[pais] || "🏁";



gpName.textContent =
race.raceName;



circuitName.textContent =
race.Circuit.circuitName;



gpDate.textContent =

new Date(race.date)
.toLocaleDateString(
"pt-BR"
);



sessionStatus.textContent =
"Aguardando sessão";



clearInfo();


}

/* =========================================
        LIMPAR INFORMAÇÕES
========================================= */

function clearInfo(){


bestLap.textContent =
"—";


fastestDriver.textContent =
"—";


fastestTeam.textContent =
"—";


resultsBody.innerHTML = `

<tr>

<td colspan="5">

Nenhum resultado carregado

</td>

</tr>

`;


}

/* =========================================
        EVENTO GP
========================================= */

gpSelect.addEventListener(
"change",
()=>{


const index =
Number(
gpSelect.value
);


loadGPInfo(index);



loadSession();



});

/* =========================================
        EVENTO SESSÃO
========================================= */

sessionSelect.addEventListener(
"change",
()=>{

console.log("Sessão escolhida:", sessionSelect.value);

loadSession();

});

/* =========================================
        CARREGAR SESSÃO
========================================= */

async function loadSession(){


if(!currentRace)
return;



const session =
sessionSelect.value;



const round =
currentRace.round;



sessionStatus.textContent =
"Carregando...";



clearInfo();



try{


let url = "";



switch(session){



case "Race":


url =
`${API}/${season}/${round}/results.json`;

break;



case "Qualifying":


url =
`${API}/${season}/${round}/qualifying.json`;

break;



case "Sprint":


url =
`${API}/${season}/${round}/sprint.json`;

break;



/*
A Ergast não possui
resultados de treino.

Vai ser tratado depois
com outra API.
*/


case "Practice 1":

    carregarTreino("Practice 1");
    return;



case "Practice 2":

    carregarTreino("Practice 2");
    return;



case "Practice 3":

    carregarTreino("Practice 3");
    return;

}



const response =
await fetch(url);



const data =
await response.json();



const race =
data.MRData.RaceTable.Races[0];



if(!race){


showNoData(
"Sessão ainda não realizada"
);


return;


}



sessionStatus.textContent =
"Finalizado ✅";



sessionTitle.textContent =
sessionName(session);



processResults(
race,
session
);



}


catch(error){


console.error(
"Erro sessão:",
error
);



showNoData(
"Erro ao carregar resultado"
);



}



}

/* =========================================
        NOME DA SESSÃO
========================================= */

function sessionName(value){


const nomes = {


"Race":
"Resultado da Corrida",


"Qualifying":
"Classificação",


"Sprint":
"Sprint"



};



return nomes[value] || value;



}


/* =========================================
        PROCESSAR RESULTADOS
========================================= */

function processResults(race, session){


let results = [];



if(session === "Race"){


results =
race.Results;


}




else if(session === "Qualifying"){


results =
race.QualifyingResults;


}




else if(session === "Sprint"){


results =
race.SprintResults;


}




renderTable(results);



calculateFastest(results);



}

/* =========================================
        MONTAR TABELA
========================================= */

function renderTable(results){

    resultsBody.innerHTML = "";


    if(!results || results.length === 0){

        showNoData(
            "Nenhum resultado encontrado"
        );

        return;

    }



    results.forEach(driver=>{


        const tr = document.createElement("tr");



        const nome =

        `${driver.Driver.givenName}
        ${driver.Driver.familyName}`;



        const equipe =

        driver.Constructor?.name || "—";



        // Ícone da equipe

        const icon = teamIcons[equipe]
        ?
        `
        <img 
        class="team-icon"
        src="${teamIcons[equipe]}"
        alt="${equipe}">
        `
        :
        "";



        let tempo = "—";



        if(driver.Time?.time){

            tempo = driver.Time.time;

        }

        else if(driver.Q3){

            tempo = driver.Q3;

        }

        else if(driver.Q2){

            tempo = driver.Q2;

        }

        else if(driver.Q1){

            tempo = driver.Q1;

        }

        else if(driver.status){

            tempo = driver.status;

        }



        const voltas =

        driver.laps ||
        driver.FastestLap?.lap ||
        "—";





        tr.innerHTML = `


        <td>

            <span class="position">

                ${driver.position}

            </span>

        </td>



        <td class="driver-name">

            ${nome}

        </td>




        <td class="team-name">


            <span class="team-logo">

                ${icon}

            </span>


            ${equipe}


        </td>




        <td>

            ${tempo}

        </td>



        <td>

            ${voltas}

        </td>


        `;



        resultsBody.appendChild(tr);



    });


}

/* =========================================
        FINALIZAÇÃO DO SISTEMA
========================================= */


/* =========================================
        INICIALIZAÇÃO
========================================= */

async function startResults(){


await loadCalendar();



}

/* =========================================
        INICIAR
========================================= */

startResults();






/* =========================================
        ESTATÍSTICAS
========================================= */

function calculateFastest(results){


if(!results)
return;



/* Melhor volta */


const fastest =

results.find(
(driver)=>
driver.FastestLap?.rank === "1"
);



if(fastest){


bestLap.textContent =

fastest.FastestLap.Time.time;



fastestDriver.textContent =

`${fastest.Driver.givenName}
${fastest.Driver.familyName}`;



fastestTeam.textContent =

fastest.Constructor.name;



}

else{


bestLap.textContent =
"—";


fastestDriver.textContent =
"—";


fastestTeam.textContent =
"—";


}



}







/* =========================================
        SEM RESULTADO
========================================= */

function showNoData(message){



sessionStatus.textContent =
"Indisponível";



resultsBody.innerHTML = `

<tr>

<td colspan="5">

${message}

</td>

</tr>

`;



}

/* =========================================
        TREINOS LIVRES OPENF1
========================================= */


/* =========================================
        TREINOS LIVRES OPENF1
========================================= */
async function carregarTreino(nomeTreino){

try{

sessionStatus.textContent =
"Carregando treino...";


if(sessoesOpenF1.length === 0){

const resposta =
await fetch(
`https://api.openf1.org/v1/sessions?year=${season}`
);

sessoesOpenF1 =
await resposta.json();

}

const sessoes = sessoesOpenF1;


console.log("Todas sessões OpenF1:", sessoes);



/* CIRCUITO DO GP ATUAL */

const nomeCircuito =
circuitosOpenF1[currentRace.Circuit.circuitName];


const treino =
sessoes.find(s=>{


return (

s.session_name === nomeTreino &&

s.meeting_key === encontrarMeetingKey(sessoes)

);


});


console.log(
"Treino encontrado:",
treino
);



if(!treino){

showNoData(
"Treino não encontrado"
);

return;

}



const sessionKey =
treino.session_key;



/* BUSCAR PILOTOS */

const driversResponse =
await fetch(

`https://api.openf1.org/v1/drivers?session_key=${sessionKey}`

);


const drivers =
await driversResponse.json();




/* BUSCAR VOLTAS */

const lapsResponse =
await fetch(

`https://api.openf1.org/v1/laps?session_key=${sessionKey}`

);


const laps =
await lapsResponse.json();



if(!laps.length){

showNoData(
"Sem voltas registradas"
);

return;

}



let pilotos = {};



laps.forEach(lap=>{


if(
!lap.lap_duration ||
!lap.driver_number
)
return;



if(
!pilotos[lap.driver_number] ||

lap.lap_duration <
pilotos[lap.driver_number].tempo

){


pilotos[lap.driver_number] = {


numero:
lap.driver_number,


tempo:
lap.lap_duration


};


}


});



let resultadoFinal =
Object.values(pilotos);



resultadoFinal =
resultadoFinal.map(p=>{


const info =
drivers.find(
(d)=>
d.driver_number === p.numero
);



return {


position:0,


driver_name:
info?.full_name ||
"Piloto "+p.numero,


team_name:
info?.team_name ||
info?.team_name_short ||
"—",


lap_time:
converterTempo(p.tempo),


number_of_laps:
"—"


};


});



resultadoFinal.sort(
(a,b)=>{

return converterSegundos(a.lap_time) -
converterSegundos(b.lap_time);

}
);

	function converterSegundos(tempo){

if(!tempo || tempo==="—")
return 999999;


const partes =
tempo.split(":");


return (

Number(partes[0]) * 60 +

Number(partes[1])

);


}


resultadoFinal.forEach(
(p,index)=>
p.position=index+1
);



sessionStatus.textContent =
"Finalizado ✅";


sessionTitle.textContent =
nomeTreino;



renderTreino(resultadoFinal);



}

catch(error){

console.error(
"Erro treino:",
error
);


showNoData(
"Erro ao carregar treino"
);


}

}



function converterTempo(segundos){


if(!segundos)
return "—";


let minutos =
Math.floor(segundos / 60);


let segundosRestantes =
(segundos % 60)
.toFixed(3);



return (

minutos +
":" +
segundosRestantes.padStart(6,"0")

);


}


function encontrarMeetingKey(sessoes){


const circuitoAtual =
currentRace.Circuit.circuitName;


const nomeOpenF1 =
circuitosOpenF1[circuitoAtual];


console.log(
"Ergast:",
circuitoAtual
);


console.log(
"OpenF1 procurado:",
nomeOpenF1
);



const encontrado =
sessoes.find(s=>{


return (
s.circuit_short_name === nomeOpenF1
);


});



console.log(
"Meeting encontrado:",
encontrado
);



return encontrado?.meeting_key;


}



function renderTreino(resultados){

    resultsBody.innerHTML = "";


    resultados.forEach(piloto=>{


        const tr = document.createElement("tr");



        const icon =
        teamIconsOpenF1[piloto.team_name]
        ?
        `
        <img 
        class="team-icon"
        src="${teamIconsOpenF1[piloto.team_name]}"
        alt="${piloto.team_name}">
        `
        :
        "";



        tr.innerHTML = `


        <td>

            ${piloto.position}

        </td>



        <td class="driver-name">

            ${piloto.driver_name}

        </td>




        <td class="team-name">


            <span class="team-logo">

                ${icon}

            </span>


            ${piloto.team_name}


        </td>




        <td>

            ${piloto.lap_time}

        </td>



        <td>

            ${piloto.number_of_laps}

        </td>


        `;



        resultsBody.appendChild(tr);


    });


}




/* =========================================
        INICIALIZAÇÃO
========================================= */

async function startResults(){


await loadCalendar();



}




/* =========================================
        INICIAR
========================================= */

startResults();




/*=============================================
      ESTASTISTICA
==============================================*/
// =====================================
// ESTATÍSTICAS TEMPORADA 2026
// =====================================


const pilotosFotos = {

    norris: "api/norris.png",
    piastri: "api/piastri.png",
    russell: "api/russell.png",
    antonelli: "api/antonelli.png",
    max_verstappen: "api/max_verstappen.png",
    hadjar: "api/hadjar.png",
  	leclerc: "api/leclerc.png",
    hamilton: "api/hamilton.png",
    sainz: "api/sainz.png",
    albon: "api/albon.png",
	  lawson: "api/lawson.png",
	  arvid_lindblad:"api/arvid_lindblad.png",
    alonso: "api/alonso.png",
	  stroll:"api/stroll.png",
	  ocon:"api/ocon.png",
	  bearman:"api/bearman.png",
	  bortoleto:"api/bortoleto.png",
	  hulkenberg:"api/hulkenberg.png",
    gasly: "api/gasly.png",
	  colapinto:"api/colapinto.png",
	  bottas:"api/bottas.png",
	  perez:"api/perez.png"
	  

};


async function carregarEstatisticasTemporada(){

try{


const resposta = await fetch(
"https://api.jolpi.ca/ergast/f1/2026/results/1.json"
);


const calendario = await fetch(
"https://api.jolpi.ca/ergast/f1/2026/races.json"
);


const dadosCalendario = await calendario.json();


const corridas =
dadosCalendario?.MRData?.RaceTable?.Races || [];


// CONTADORES

let vitorias = {};
let podios = {};
let poles = {};
let voltasRapidas = {};
let posicoesGanhas = {};
let maiorPontuacaoCorrida = {};



// percorre cada corrida

for(const corrida of corridas){


const round = corrida.round;


const resultado = await fetch(

`https://api.jolpi.ca/ergast/f1/2026/${round}/results.json`

);


const dados = await resultado.json();


const resultados = 
dados?.MRData?.RaceTable?.Races?.[0]?.Results || [];



resultados.forEach(piloto=>{


const id =
piloto.Driver.driverId;


const pos =
Number(piloto.position);



/* VITÓRIAS */

if(pos === 1){

vitorias[id] =
(vitorias[id] || 0) + 1;

}


/* PÓDIOS */

if(pos <= 3){

podios[id] =
(podios[id] || 0) + 1;

}


/* VOLTA RÁPIDA */

if(piloto.FastestLap){

if(
piloto.FastestLap.rank === "1"
){

voltasRapidas[id] =
(voltasRapidas[id] || 0) + 1;

}

}


// POSIÇÕES GANHAS

	// POSIÇÕES GANHAS

const grid =
Number(piloto.grid || 0);

const chegada =
Number(piloto.position || 0);


if(grid > 0 && chegada > 0){

    const ganho = grid - chegada;

    if(ganho > 0){

        posicoesGanhas[id] =
        (posicoesGanhas[id] || 0) + ganho;

    }

}

// MAIOR PONTUAÇÃO EM UMA CORRIDA

const pontosCorrida = Number(piloto.points || 0);

if(
    !maiorPontuacaoCorrida[id] ||
    pontosCorrida > maiorPontuacaoCorrida[id]
){

    maiorPontuacaoCorrida[id] = pontosCorrida;

}
	
});

}



// BUSCA POLES

for(const corrida of corridas){


const quali = await fetch(

`https://api.jolpi.ca/ergast/f1/2026/${corrida.round}/qualifying.json`

);


const dadosQualy = await quali.json();


const pilotosQualy =
dadosQualy?.MRData?.RaceTable?.Races?.[0]?.QualifyingResults || [];



if(pilotosQualy[0]){


const pole =
pilotosQualy[0].Driver.driverId;


poles[pole] =
(poles[pole] || 0)+1;


}


}



// pega líder de cada categoria

function maior(obj){

    let piloto = null;
    let valor = 0;

    for(const id in obj){

        if(obj[id] > valor){

            valor = obj[id];
            piloto = id;

        }

    }

    return [
        piloto,
        valor
    ];

}


// atualiza cards

function atualizarCard(tipo, dados){

    if(!dados || !dados[0]) return;

    const piloto = dados[0];
    const valor = dados[1];

    const nomeEl = document.getElementById("nome" + tipo);
    const valorEl = document.getElementById("valor" + tipo);
    const imgEl = document.getElementById("img" + tipo);

    if(nomeEl){
        nomeEl.innerText =
        piloto
        .replace("_"," ")
        .replace(/\b\w/g, l => l.toUpperCase());
    }

    if(valorEl){

        if(tipo === "Vitorias"){
            valorEl.innerText = valor + " vitórias";
        }

        if(tipo === "Podios"){
            valorEl.innerText = valor + " pódios";
        }

        if(tipo === "Poles"){
            valorEl.innerText = valor + " poles";
        }

        if(tipo === "Voltas"){
            valorEl.innerText = valor + " voltas rápidas";
        }

        if(tipo === "MaiorPontuacao"){
            valorEl.innerText = valor + " pontos";
        }

        if(tipo === "PosicoesGanhas"){
            valorEl.innerText = valor + " posições";
        }

    }

    if(imgEl){
        imgEl.src =
        pilotosFotos[piloto] ||
        "pilotos/default.webp";
    }

}
// aplicar


console.log("Vitórias:", vitorias);
console.log("Pódios:", podios);
console.log("Poles:", poles);
console.log("Voltas:", voltasRapidas);

	
atualizarCard(
"Vitorias",
maior(vitorias)
);


atualizarCard(
"Podios",
maior(podios)
);


atualizarCard(
"Poles",
maior(poles)
);


atualizarCard(
"Voltas",
maior(voltasRapidas)
);

atualizarCard(
"MaiorPontuacao",
maior(maiorPontuacaoCorrida)
);


atualizarCard(
"PosicoesGanhas",
maior(posicoesGanhas)
);

console.log(
"📊 Estatísticas carregadas"
);



}

catch(erro){

console.error(
"Erro estatísticas:",
erro
);

}


}



// iniciar

document.addEventListener(
"DOMContentLoaded",
()=>{

carregarEstatisticasTemporada();

setInterval(
carregarEstatisticasTemporada,
60000
);

});






/* =========================================
   CLASSIFICAÇÃO
========================================= */
const API_PILOTOS = "https://api.jolpi.ca/ergast/f1/2026/driverstandings.json";
const API_CONSTRUTORES = "https://api.jolpi.ca/ergast/f1/2026/constructorstandings.json";

// ELEMENTOS
const btnPilotos = document.getElementById("btnPilotos");
const btnConstrutores = document.getElementById("btnConstrutores");
const listaPilotoss = document.getElementById("listaPilotoss");
const listaConstrutores = document.getElementById("listaConstrutores");
const painelPilotos = document.getElementById("painelPilotos");
const painelConstrutores = document.getElementById("painelConstrutores");

// CORES
const cores = {
  mercedes: "#00D2BE",
  ferrari: "#DC0000",
  mclaren: "#FF8000",
  red_bull: "#1E5BC6",
  aston_martin: "#006F62",
  alpine: "#0090FF",
  haas: "#B6BABD",
  williams: "#005AFF",
  rb: "#6C8DFF",
  audi: "#B00000",
  cadillac: "#111111"
};

// ICONS (pasta icons)
const logos = {
  mercedes: "Mercedesa.png",
  ferrari: "ferrari.png",
  mclaren: "mcl (1).png",
  red_bull: "redbull.png",
  aston_martin: "aston.png",
  alpine: "AlpineF1.png",
  haas: "HaasF1.png",
  williams: "WilliamsF1.png",
  rb: "racingbulls.svg",
  audi: "audi.png",
  cadillac: "cadillac.png"
};

// PILOTOS (AGORA = nomes reais dos arquivos)
const pilotos = {
  max_verstappen: "max_verstappen",
  norris: "norris",
  piastri: "piastri",
  russell: "russell",
  antonelli: "antonelli",
  leclerc: "leclerc",
  hamilton: "hamilton",
  alonso: "alonso",
  stroll: "stroll",
  gasly: "gasly",
  colapinto: "colapinto",
  ocon: "ocon",
  bearman: "bearman",
  lawson: "lawson",
  arvid_lindblad: "arvid_lindblad",
  hadjar: "hadjar",
  hulkenberg: "hulkenberg",
  bortoleto: "bortoleto",
  albon: "albon",
  sainz: "sainz",
  perez: "perez",
  bottas: "bottas",
	tsunoda:"tsunoda"
};

// CARROS (pasta api/cars)
const carros = {
  mercedes: "mercedes.avif",
  ferrari: "ferrari.avif",
  mclaren: "mclaren.avif",
  red_bull: "red_bull.avif",
  aston_martin: "aston_martin.avif",
  alpine: "alpine.avif",
  haas: "haas.avif",
  williams: "williams.avif",
  rb: "rb.avif",
  audi: "audi.webp",
  cadillac: "cadillac.avif"
};

btnPilotos.onclick = () => {
  painelPilotos.classList.remove("escondido");
  painelConstrutores.classList.add("escondido");
  carregarPilotos();
};

btnConstrutores.onclick = () => {
  painelConstrutores.classList.remove("escondido");
  painelPilotos.classList.add("escondido");
  carregarConstrutores();
};


async function carregarPilotos() {
  try {
    const res = await fetch(API_PILOTOS);
    const data = await res.json();

    const listaAPI =
      data?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings;

    if (!listaAPI) {
      console.error("❌ API de pilotos não retornou dados");
      return;
    }

    console.log("✔ Pilotos carregados:", listaAPI);

    listaPilotoss.innerHTML = "";

    listaAPI.forEach(p => {
      const team = p.Constructors?.[0]?.constructorId;

      const driverId = p.Driver?.driverId;

      // 🔥 segurança total contra undefined
      const nomeArquivoPiloto =
        pilotos[driverId] || driverId || "default";

      const corEquipe = cores[team] || "#222";
      const logoEquipe = logos[team] || "";

      const div = document.createElement("div");
      div.className = "linha-piloto";

      if (p.position === "1") div.classList.add("lider");

      div.style.background = corEquipe;

      div.innerHTML = `
        <span class="posicao">${p.position}º</span>

        <img class="logo-equipe"
             src="icons/${logoEquipe}"
             alt="${team}">

        <img class="foto-piloto"
             src="api/${nomeArquivoPiloto}.png"
             alt="${p.Driver.givenName}">

        <span class="numero">${p.Driver.permanentNumber || "--"}</span>

        <span class="nome">
          ${p.Driver.givenName} ${p.Driver.familyName}
        </span>

        <span class="pontos">${p.points}</span>
      `;

      listaPilotoss.appendChild(div);
    });

  } catch (error) {
    console.error("❌ Erro ao carregar pilotos:", error);
    listaPilotoss.innerHTML =
      `<p style="color:white; padding:20px;">Erro ao carregar pilotos</p>`;
  }
}


async function carregarConstrutores() {
  const res = await fetch(API_CONSTRUTORES);
  const data = await res.json();

  const lista = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

  listaConstrutores.innerHTML = "";

  lista.forEach(c => {
    const team = c.Constructor.constructorId;
    const cor = cores[team] || "#222";

    const logo = logos[team] || "default.png";
    const carro = carros[team] || "default.avif";

    const div = document.createElement("div");
    div.className = "linha-construtor";
    div.style.background = cor;

    if (c.position === "1") div.classList.add("lider");

    div.innerHTML = `
      <span class="posicao">${c.position}º</span>

      <img class="logo-equipe" src="icons/${logo}" alt="${team}">

      <img class="foto-carro" src="api/${carro}" alt="${c.Constructor.name}">

      <span class="nome">${c.Constructor.name}</span>

      <span class="pontos">${c.points}</span>
    `;

    listaConstrutores.appendChild(div);
  });
}


// abre pilotos automaticamente ao carregar a página
window.onload = () => {
  painelPilotos.classList.remove("escondido");
  painelConstrutores.classList.add("escondido");
  carregarPilotos();
};




/* =========================================
   CALENDÁRIO
========================================= */


const dadosCorridas = {
  australia: [
    {
      nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 25,
      tempo:"LEADER",//LEADER
      voltaRapida:true//ou false
    },
    
    {
        nome: "Verstappen",
      numero: 1,
      cor: "#1E41FF",
      logo: "icons/redbull.png",
      pilotoImg: "pilotos/max.png",
      pontos:18,
         tempo:"+0.895",//LEADER
      voltaRapida:false//ou false
    },
    
        {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:15,
           tempo:"+8.481",//LEADER
      voltaRapida:false//ou false
    },
    
        {
      nome: "Antonelli",
      numero: 12,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/kimi.png",
      pontos:12,
        tempo:"+10.135",//LEADER
      voltaRapida:false//ou false
    },
    
        {
      nome: "Albon",
      numero: 23,
      cor: "#005AFF",
      logo: "icons/WilliamsF1.png",
      pilotoImg: "pilotos/alex.png",
      pontos:10,
        tempo:"+12.773",//LEADER
      voltaRapida:false//ou false
    },
    
        {
      nome: "Stroll",
      numero: 18,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/stroll.png",
      pontos:8,
        tempo:"+17.413",//LEADER
      voltaRapida:false//ou false
    },
    
        {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:6,
        tempo:"+18.423",//LEADER
      voltaRapida:false//ou false
    },

        {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:4,
       tempo:"+19.826",//LEADER
      voltaRapida:false//ou false
    },
    
    {
      nome: "Piastri",
      numero: 81,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/piastri.png",
      pontos:2,
       tempo:"+20.448",//LEADER
      voltaRapida:false//ou false
    },
    
    {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:1,
       tempo:"+22.473",//LEADER
      voltaRapida:false//ou false
    }
  ],
  china: [
   {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:25,
      tempo:"LEADER",//LEADER
      voltaRapida:false//true ou false
   },
   
   {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 18,
       tempo:"+9.748",//LEADER
      voltaRapida:true//ou false
    },
   
         {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:15,
       tempo:"+11.097",//LEADER
      voltaRapida:false//ou false
    },
    
    {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:12,
    tempo:"+16.656",//LEADER
      voltaRapida:false//ou false
    },
   
      {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:10,
    tempo:"+49.969",//LEADER
      voltaRapida:false//ou false
      },
   
      {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:8,
    tempo:"+53.748",//LEADER
      voltaRapida:false//ou false
      },
      
         {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:6,
    tempo:"+56.321",//LEADER
      voltaRapida:false//ou false
         },
   
      {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:4,
    tempo:"+1.01.303",//LEADER
      voltaRapida:false//ou false
      },
         {
   nome: "Stroll",
   numero:18,
   cor: "#006F62",
   logo:"icons/Astonm.png",
   pilotoImg:"pilotos/stroll.png",
   pontos:2,
    tempo:"+1.10.204",//LEADER
      voltaRapida:false//ou false
         },
   
      {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:1,
    tempo:"+1.16.387",//LEADER
      voltaRapida:false//ou false
      }
    ],
    japao: [
      
         {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:25,
    tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
      
        {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 18,
       tempo:"+1.423",//LEADER
      voltaRapida:false//ou false
    },
    
        {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:15,
      tempo:"+2.129",//LEADER
      voltaRapida:false//ou false
   },
      
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:12,
       tempo:"+16.097",//LEADER
      voltaRapida:false//ou false
    },
    
           {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:10,
       tempo:"+17.362",//LEADER
      voltaRapida:false//ou false
    },
      
          {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:8,
    tempo:"+18.671",//LEADER
      voltaRapida:true//ou false
      },
      
         {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:6,
       tempo:"+29.182",//LEADER
      voltaRapida:false//ou false
    },
      
         {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:4,
       tempo:"+37.134",//LEADER
      voltaRapida:false//ou false
    },
             {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:2,
    tempo:"+40.367",//LEADER
      voltaRapida:false//ou false
         },
      
          {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:1,
    tempo:"+54.529",//LEADER
      voltaRapida:false//ou false
      }
      ],
      
      bahrein: [
       
            {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:25,
      tempo:"LEADER",//LEADER
      voltaRapida:true//ou false
   },
       
               {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:18,
       tempo:"+15.499",//LEADER
      voltaRapida:false//ou false
    },
       
            {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 15,
       tempo:"+16.273",//LEADER
      voltaRapida:false//ou false
    },
       
        
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:12,
       tempo:"+19.679",//LEADER
      voltaRapida:false//ou false
    },
       
           {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:10,
       tempo:"+27.993",//LEADER
      voltaRapida:false//ou false
    },
       
         {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:8,
    tempo:"+34.395",//LEADER
      voltaRapida:false//ou false
    },
       
         {
   nome: "Gasly",
   numero:10,
   cor: "#FF69b4",
   logo:"icons/AlpineF1.png",
   pilotoImg:"pilotos/gasly.png",
   pontos:6,
    tempo:"+36.002",//LEADER
      voltaRapida:false//ou false
    },
       
          {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:4,
    tempo:"+44.244",//LEADER
      voltaRapida:false//ou false
      },
       
               {
   nome: "Tsunoda",
   numero:22,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/yuki.png",
   pontos:2,
    tempo:"+45.061",//LEADER
      voltaRapida:false//ou false
    },
             {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:1,
    tempo:"+47.594",//LEADER
      voltaRapida:false//ou false
      }
       ],
       
       arabia: [
          {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:25,
      tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
   },
                 {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:18,
    tempo:"+2.843",//LEADER
      voltaRapida:false//ou false
    },
         
          
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:15,
       tempo:"+8.104",//LEADER
      voltaRapida:false//ou false
    },
         
         
              {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 12,
       tempo:"+9.196",//LEADER
      voltaRapida:true//ou false
    },
         
                 {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:10,
       tempo:"+27.236",//LEADER
      voltaRapida:false//ou false
    },
             {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:8,
    tempo:"+34.688",//LEADER
      voltaRapida:false//ou false
      },
      
          {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:6,
       tempo:"+39.073",//LEADER
      voltaRapida:false//ou false
    },
         
             {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:4,
    tempo:"+1.04.630",//LEADER
      voltaRapida:false//ou false
      },
         
                {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:2,
    tempo:"+1.06.515",//LEADER
      voltaRapida:false//ou false
         },
         
               {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:1,
       tempo:"+1.07.091",//LEADER
      voltaRapida:false//ou false
    }
   ],
      
  miami:[
   
        {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:25,
      tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
   },
   
        {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 18,
       tempo:"+4.630",//LEADER
      voltaRapida:true//ou false
    },
   
           {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:15,
       tempo:"+37.644",//LEADER
      voltaRapida:false//ou false
    },
   
           {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:12,
    tempo:"+39.956",//LEADER
      voltaRapida:false//ou false
    },
   
          {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:10,
    tempo:"+48.067",//LEADER
      voltaRapida:false//ou false
         },
       {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:8,
    tempo:"+55.502",//LEADER
      voltaRapida:false//ou false
      },
   
    
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:6,
       tempo:"+57.036",//LEADER
      voltaRapida:false//ou false
    },
   
       {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:4,
       tempo:"+1.00.186",//LEADER
      voltaRapida:false//ou false
    },
   
   
       {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:2,
    tempo:"+1.00.577",//LEADER
      voltaRapida:false//ou false
      },
   
             {
   nome: "Tsunoda",
   numero:22,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/yuki.png",
   pontos:1,
    tempo:"+1.14.434",//LEADER
      voltaRapida:false//ou false
    }
    ],
      
      canada:[
               {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:25,
       tempo:"LEADER",//LEADER
      voltaRapida:true//ou false
    },
       
               {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:18,
    tempo:"+0.228",//LEADER
      voltaRapida:false//ou false
    },
            {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:15,
    tempo:"+1.014",//LEADER
      voltaRapida:false//ou false
      },
        
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:12,
      tempo:"+2.109",//LEADER
      voltaRapida:false//ou false
   },
        
         
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:10,
       tempo:"+3.442",//LEADER
      voltaRapida:false//ou false
    },
        
           {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:8,
       tempo:"+10.713",//LEADER
      voltaRapida:false//ou false
    },
             {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:6,
       tempo:"+10.972",//LEADER
      voltaRapida:false//ou false
    },
        
             {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:4,
       tempo:"+15.364",//LEADER
      voltaRapida:false//ou false
    },
        
           {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:2,
    tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
      },
            {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:1,
    tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
      }
        ],
      
      monaco:[
       
            {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 25,
       tempo:"LEADER",//LEADER
      voltaRapida:true//ou false
    },
       
        
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:18,
       tempo:"+3.131",//LEADER
      voltaRapida:false//ou false
    },
       
            {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:15,
      tempo:"+3.658",//LEADER
      voltaRapida:false//ou false
   },
       
               {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:12,
    tempo:"+20.572",//LEADER
      voltaRapida:false//ou false
    },
       
          {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:10,
       tempo:"+51.387",//LEADER
      voltaRapida:false//ou false
    },
       
             {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:8,
       tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
    },
       
          {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:6,
    tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
      },
             {
      nome: "Lawson",
      numero: 30,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/lawson.png",
      pontos:4,
       tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
    },
              {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:2,
    tempo:"+2 lap",//LEADER
      voltaRapida:false//ou false
         },
           {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:1,
    tempo:"+2 lap",//LEADER
      voltaRapida:false//ou false
      }
        ],
      
      espanha:[
        
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:25,
      tempo:"LEADER",//LEADER
      voltaRapida:true//ou false
   },
        
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 18,
       tempo:"+2.471",//LEADER
      voltaRapida:false//ou false
    },
         
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:15,
       tempo:"+10.455",//LEADER
      voltaRapida:false//ou false
    },
    
            {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:12,
       tempo:"+11.359",//LEADER
      voltaRapida:false//ou false
    },
         {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:10,
       tempo:"+13.648",//LEADER
      voltaRapida:false//ou false
    },
    
       {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:8,
       tempo:"+15.508",//LEADER
      voltaRapida:false//ou false
    },
          {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:6,
       tempo:"+16.022",//LEADER
      voltaRapida:false//ou false
    },
    
             {
   nome: "Gasly",
   numero:10,
   cor: "#FF69b4",
   logo:"icons/AlpineF1.png",
   pilotoImg:"pilotos/gasly.png",
   pontos:4,
    tempo:"+17.882",//LEADER
      voltaRapida:false//ou false
    },
       
          {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:2,
       tempo:"+21.564",//LEADER
      voltaRapida:false//ou false
    },
    
        {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:1,
    tempo:"+21.826",//LEADER
      voltaRapida:false//ou false
    },
        ],
      
      austria:[
        
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 25,
       tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
        
            {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:18,
      tempo:"+2.695",//LEADER
      voltaRapida:true//ou false
   },
       
        
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:15,
       tempo:"+19.820",//LEADER
      voltaRapida:false//ou false
    },
       
          {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:12,
       tempo:"+29.020",//LEADER
      voltaRapida:false//ou false
    },
       
               {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:10,
       tempo:"+1.02.396",//LEADER
      voltaRapida:false//ou false
    },
       
                  {
      nome: "Lawson",
      numero: 30,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/lawson.png",
      pontos:8,
       tempo:"+1.07.754",//LEADER
      voltaRapida:false//ou false
    },
       
             {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:6,
       tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
    },
       
            {
      nome: "Bortoleto",
      numero: 5,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/gabi.png",
      pontos:4,
       tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
    },
            {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:2,
       tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
    },
          {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:1,
    tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
      }
        ],
      
      silverstone:[
        
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 25,
       tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
       
            {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:18,
      tempo:"+6.812",//LEADER
      voltaRapida:true//ou false
   },
       
            {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:15,
       tempo:"+34.742",//LEADER
      voltaRapida:false//ou false
    },
       
          {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:12,
       tempo:"+39.812",//LEADER
      voltaRapida:false//ou false
    },
       
               {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:10,
    tempo:"+56.781",//LEADER
      voltaRapida:false//ou false
    },
       
                {
   nome: "Gasly",
   numero:10,
   cor: "#FF69b4",
   logo:"icons/AlpineF1.png",
   pilotoImg:"pilotos/gasly.png",
   pontos:8,
    tempo:"+59.857",//LEADER
      voltaRapida:false//ou false
    },
            {
      nome: "Stroll",
      numero: 18,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/stroll.png",
      pontos:6,
       tempo:"+1.00.603",//LEADER
      voltaRapida:false//ou false
    },
       
              {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:4,
    tempo:"+1.04.135",//LEADER
      voltaRapida:false//ou false
         },
       
             {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:2,
       tempo:"+1.05.858",//LEADER
      voltaRapida:false//ou false
    },
               {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:1,
       tempo:"+1.10.674",//LEADER
      voltaRapida:false//ou false
    }
        ],
      
      spa:[
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:25,
      tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
   },
           {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 18,
       tempo:"+3.415",//LEADER
      voltaRapida:false//ou false
    },
      
       
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:15,
       tempo:"+20.185",//LEADER
      voltaRapida:false//ou false
    },
              {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:12,
    tempo:"+21.731",//LEADER
      voltaRapida:false//ou false
    },
              {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:10,
       tempo:"+34.863",//LEADER
      voltaRapida:false//ou false
    },
             {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:8,
    tempo:"+39.926",//LEADER
      voltaRapida:false//ou false
         },
      
         {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:6,
       tempo:"+40.679",//LEADER
      voltaRapida:false//ou false
    },
                 {
      nome: "Lawson",
      numero: 30,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/lawson.png",
      pontos:4,
       tempo:"+52.033",//LEADER
      voltaRapida:false//ou false
    },
               {
      nome: "Bortoleto",
      numero: 5,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/gabi.png",
      pontos:2,
       tempo:"+56.434",//LEADER
      voltaRapida:false//ou false
    },
               {
   nome: "Gasly",
   numero:10,
   cor: "#FF69b4",
   logo:"icons/AlpineF1.png",
   pilotoImg:"pilotos/gasly.png",
   pontos:1,
    tempo:"+1.12.714",//LEADER
      voltaRapida:false//ou false
    }
        ],
      
      hungria:[
        
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 25,
       tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:18,
      tempo:"0.698",//LEADER
      voltaRapida:false//ou false
   },
                {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:15,
       tempo:"+21.916",//LEADER
      voltaRapida:true//ou false
    },
         
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:12,
       tempo:"+42.560",//LEADER
      voltaRapida:false//ou false
    },
              {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:10,
       tempo:"+59.040",//LEADER
      voltaRapida:false//ou false
    },
                 {
      nome: "Bortoleto",
      numero: 5,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/gabi.png",
      pontos:8,
       tempo:"+1.06.169",//LEADER
      voltaRapida:false//ou false
    },
    
               {
      nome: "Lawson",
      numero: 30,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/lawson.png",
      pontos:6,
       tempo:"+1.09.451",//LEADER
      voltaRapida:false//ou false
    },
    
                   {
      nome: "Lawson",
      numero: 30,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/lawson.png",
      pontos:4,
       tempo:"+",//LEADER
      voltaRapida:false//ou false
    },
                {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:2,
    tempo:"+1.12.645",//LEADER
      voltaRapida:false//ou false
    },
            {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:1,
    tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
      }
        ],
      
      holanda:[
        
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:25,
      tempo:"LEADER",//LEADER
      voltaRapida:true//ou false
   },
                {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:18,
    tempo:"+1.271",//LEADER
      voltaRapida:false//ou false
    },
              {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:15,
       tempo:"+3.233",//LEADER
      voltaRapida:false//ou false
    },
    
    
            {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:12,
       tempo:"+5.654",//LEADER
      voltaRapida:false//ou false
    },
    
               {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:10,
    tempo:"+6.327",//LEADER
      voltaRapida:false//ou false
         },
              {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:8,
    tempo:"+9.044",//LEADER
      voltaRapida:false//ou false
      },
             {
      nome: "Stroll",
      numero: 18,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/stroll.png",
      pontos:6,
       tempo:"+9.497",//LEADER
      voltaRapida:false//ou false
    },
              {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:4,
       tempo:"+11.709",//LEADER
      voltaRapida:false//ou false
    },
                  {
   nome: "Tsunoda",
   numero:22,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/yuki.png",
   pontos:2,
    tempo:"+13.597",//LEADER
      voltaRapida:false//ou false
    },
           {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:1,
    tempo:"+14.063",//LEADER
      voltaRapida:false//ou false
      }
        ],
      
      monza:[
        
                {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:25,
    tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 18,
       tempo:"19.207+",//LEADER
      voltaRapida:true//ou false
    },
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:15,
      tempo:"+21.351",//LEADER
      voltaRapida:false//ou false
   },
         
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:12,
       tempo:"+25.624",//LEADER
      voltaRapida:false//ou false
    },
    
            {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:10,
       tempo:"+32.881",//LEADER
      voltaRapida:false//ou false
    },
    
           {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:8,
       tempo:"+37.449",//LEADER
      voltaRapida:false//ou false
    },
               {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:6,
    tempo:"+50.537",//LEADER
      voltaRapida:false//ou false
         },
                 {
      nome: "Bortoleto",
      numero: 5,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/gabi.png",
      pontos:4,
       tempo:"+58.484",//LEADER
      voltaRapida:false//ou false
    },
            {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:2,
    tempo:"+59.762",//LEADER
      voltaRapida:false//ou false
      },
              {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:1,
       tempo:"+1.03.891",//LEADER
      voltaRapida:false//ou false
    }
        ],
      
      madrid:[],
      
      baku:[
                {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:25,
    tempo:"LEADER",//LEADER
      voltaRapida:true//ou false
    },
                {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:18,
       tempo:"+14.609",//LEADER
      voltaRapida:false//ou false
    },
            {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:15,
    tempo:"+19.199",//LEADER
      voltaRapida:false//ou false
      },
            {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:12,
    tempo:"+21.760",//LEADER
      voltaRapida:false//ou false
      },
                   {
      nome: "Lawson",
      numero: 30,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/lawson.png",
      pontos:10,
       tempo:"+33.290",//LEADER
      voltaRapida:false//ou false
    },
                  {
   nome: "Tsunoda",
   numero:22,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/yuki.png",
   pontos:8,
    tempo:"+33.808",//LEADER
      voltaRapida:false//ou false
    },
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 6,
       tempo:"+34.227",//LEADER
      voltaRapida:false//ou false
    },
           {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:4,
       tempo:"+36.310",//LEADER
      voltaRapida:false//ou false
    },
         
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:2,
     tempo:"+36.774",//LEADER
      voltaRapida:false//ou false
    },
              {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:1,
       tempo:"+38.982",//LEADER
      voltaRapida:false//ou false
    }
        ],
      singapura:[
        
                {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:25,
       tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
                {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:18,
    tempo:"+5.430",//LEADER
      voltaRapida:false//ou false
    },
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 15,
       tempo:"+6.066",//LEADER
      voltaRapida:false//ou false
    },
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:12,
      tempo:"+8.146",//LEADER
      voltaRapida:false//ou false
   },
            {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:10,
    tempo:"+33.681",//LEADER
      voltaRapida:false//ou false
      },
         
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:8,
       tempo:"+45.996",//LEADER
      voltaRapida:false//ou false
    },
              {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:6,
       tempo:"+1.20.667",//LEADER
      voltaRapida:false//ou false
    },
           {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:4,
       tempo:"+1.20.251",//LEADER
      voltaRapida:true//ou false
    },
              {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:2,
    tempo:"+1.33.527",//LEADER
      voltaRapida:false//ou false
      },
            {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:1,
    tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
      }
        ],
      
      texas:[
                {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:25,
    tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 18,
       tempo:"+7.959",//LEADER
      voltaRapida:false//ou false
    },
         
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:15,
       tempo:"+15.373",//LEADER
      voltaRapida:false//ou false
    },
           {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:12,
       tempo:"+28.536",//LEADER
      voltaRapida:false//ou false
    },
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:10,
      tempo:"+29.678",//LEADER
      voltaRapida:false//ou false
   },
                {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:8,
       tempo:"+33.456",//LEADER
      voltaRapida:false//ou false
    },
                  {
   nome: "Tsunoda",
   numero:22,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/yuki.png",
   pontos:6,
    tempo:"+52.714",//LEADER
      voltaRapida:false//ou false
    },
             {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:4,
       tempo:"+57.249",//LEADER
      voltaRapida:false//ou false
    },
              {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:2,
    tempo:"+1.04.722",//LEADER
      voltaRapida:false//ou false
      },
            {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:1,
       tempo:"+1.10.001",//LEADER
      voltaRapida:false//ou false
    }
        ],
      
      mexico:[
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 25,
       tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
         
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:18,
       tempo:"+30.324",//LEADER
      voltaRapida:false//ou false
    },
                {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:15,
    tempo:"+31.049",//LEADER
      voltaRapida:false//ou false
    },
              {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:12,
    tempo:"+40.955",//LEADER
      voltaRapida:false//ou false
      },
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:10,
      tempo:"+42.065",//LEADER
      voltaRapida:false//ou false
   },
            {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:8,
    tempo:"+47.837",//LEADER
      voltaRapida:false//ou false
      },
                {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:6,
       tempo:"+50.287",//LEADER
      voltaRapida:true//ou false
    },
           {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:4,
       tempo:"+56.446",//LEADER
      voltaRapida:false//ou false
    },
           {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:2,
    tempo:"+1.15.464",//LEADER
      voltaRapida:false//ou false
      },
                 {
      nome: "Bortoleto",
      numero: 5,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/gabi.png",
      pontos:1,
       tempo:"+1.16.863",//LEADER
      voltaRapida:false//ou false
    }
        ],
        
      brasil:[
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 25,
       tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
            {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:18,
    tempo:"+10.388",//LEADER
      voltaRapida:false//ou false
      },
                {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:15,
    tempo:"+10.750",//LEADER
      voltaRapida:false//ou false
    },
                {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:12,
       tempo:"+15.267",//LEADER
      voltaRapida:false//ou false
    },
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:10,
      tempo:"+15.749",//LEADER
      voltaRapida:false//ou false
   },
              {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:8,
    tempo:"+29.630",//LEADER
      voltaRapida:false//ou false
      },
                   {
      nome: "Lawson",
      numero: 30,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/lawson.png",
      pontos:6,
       tempo:"+52.642",//LEADER
      voltaRapida:false//ou false
    },
              {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:4,
       tempo:"+52.873",//LEADER
      voltaRapida:false//ou false
    },
             {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:2,
       tempo:"+53.324",//LEADER
      voltaRapida:false//ou false
    },
                 {
   nome: "Gasly",
   numero:10,
   cor: "#FF69b4",
   logo:"icons/AlpineF1.png",
   pilotoImg:"pilotos/gasly.png",
   pontos:1,
    tempo:"+53.914",//LEADER
      voltaRapida:false//ou false
    }
    ],
       vegas:[
                 {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:25,
    tempo:"LEADER",//LEADER
      voltaRapida:true//ou false
    },
                 {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:18,
       tempo:"+23.546",//LEADER
      voltaRapida:false//ou false
    },
             {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:15,
    tempo:"+30.488",//LEADER
      voltaRapida:false//ou false
      },
          
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:12,
       tempo:"+30.678",//LEADER
      voltaRapida:false//ou false
    },
             {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:10,
    tempo:"+34.924",//LEADER
      voltaRapida:false//ou false
      },
               {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:8,
       tempo:"+45.257",//LEADER
      voltaRapida:false//ou false
    },
              {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:6,
       tempo:"+51.134",//LEADER
      voltaRapida:false//ou false
    },
            {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:4,
       tempo:"+59.369",//LEADER
      voltaRapida:false//ou false
    },
            {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:2,
    tempo:"+1.00.635",//LEADER
      voltaRapida:false//ou false
      },
               {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:1,
    tempo:"+1.10.549",//LEADER
      voltaRapida:false//ou false
      }
      ],
         qatar:[
                   {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:25,
    tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
                {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:18,
      tempo:"+7.995",//LEADER
      voltaRapida:true//ou false
   },
               {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:15,
    tempo:"+22.665",//LEADER
      voltaRapida:false//ou false
      },
                {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 12,
       tempo:"+23.315",//LEADER
      voltaRapida:false//ou false
    },
               {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:10,
    tempo:"+28.317",//LEADER
      voltaRapida:false//ou false
      },
                   {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:8,
       tempo:"+48.599",//LEADER
      voltaRapida:false//ou false
    },
                 {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:6,
       tempo:"+54.045",//LEADER
      voltaRapida:false//ou false
    },
            
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:4,
       tempo:"+56.785",//LEADER
      voltaRapida:false//ou false
    },
                      {
      nome: "Lawson",
      numero: 30,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/lawson.png",
      pontos:2,
       tempo:"+1.00.073",//LEADER
      voltaRapida:false//ou false
    },
                     {
   nome: "Tsunoda",
   numero:22,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/yuki.png",
   pontos:1,
    tempo:"+1.01.770",//LEADER
      voltaRapida:false//ou false
    }
    ],
           abudhabi:[
                     {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:25,
    tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
                {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:18,
      tempo:"12.594",//LEADER
      voltaRapida:false//ou false
   },
                {
       nome: "Norris 🏆",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 15,
       tempo:"+16.572",//LEADER
      voltaRapida:false//ou false
    },
            
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:12,
       tempo:"+23.279",//LEADER
      voltaRapida:true//ou false
    },
                   {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:10,
       tempo:"+48.563",//LEADER
      voltaRapida:false//ou false
    },
                 {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:8,
       tempo:"+1.07.562",//LEADER
      voltaRapida:false//ou false
    },
              {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:6,
    tempo:"+1.09.876",//LEADER
      voltaRapida:false//ou false
      },
              {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:4,
       tempo:"+1.12.670",//LEADER
      voltaRapida:false//ou false
    },
                {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:2,
       tempo:"+1.19.014",//LEADER
      voltaRapida:false//ou false
    },
                {
      nome: "Stroll",
      numero: 18,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/stroll.png",
      pontos:1,
       tempo:"+1.19.523",//LEADER
      voltaRapida:false//ou false
    }
             ],

};


function corTextoIdeal(bg) {
  // remove #
  bg = (bg || "#111111").replace("#", "");

  // suporte pra hexadecimal curto (#fff)
  if (bg.length === 3) {
    bg = bg.split("").map(c => c + c).join("");
  }

  const r = parseInt(bg.substr(0, 2), 16);
  const g = parseInt(bg.substr(2, 2), 16);
  const b = parseInt(bg.substr(4, 2), 16);

  // cálculo de brilho
  const brilho = (r * 299 + g * 587 + b * 114) / 1000;

  // claro = texto escuro
  // escuro = texto branco
  return brilho > 155 ? "#111" : "#fff";
}

function abrirDashboard(pista) {
  const lista = document.getElementById("listaPilotos");
  lista.innerHTML = "";

  const corrida = dadosCorridas[pista];

  // evita erro
  if (!corrida) return;

  corrida.forEach((p, index) => {

    const linha = document.createElement("div");
    linha.classList.add("linha-ppiloto");

    // cor do card
    const corFundo = p.cor || "#111111";
    linha.style.background = corFundo;

    // cor automática do texto
    const corTexto = corTextoIdeal(corFundo);

    linha.innerHTML = `
      <div class="posicao-box">
        ${index + 1}
      </div>

      <div class="equipe-logo">
        <img 
          src="${p.logo}" 
          alt="${p.equipe || "Equipe"}"
          onerror="this.src='https://via.placeholder.com/40'"
        >
      </div>

      <div class="piloto-img-box">
        <img 
          src="${p.pilotoImg}" 
          alt="${p.nome}"
          onerror="this.src='https://via.placeholder.com/50'"
        >
      </div>

      <div class="info-piloto">
        <div class="nome-numero">

          <span 
            class="nome"
            style="color:${corTexto}"
          >
            ${p.nome}
          </span>

          <span 
            class="numero"
            style="color:${corTexto}; opacity:.7"
          >
            #${p.numero}
          </span>

        </div>
      </div>

      <div 
        class="tempo"
        style="color:${corTexto}"
      >
        ${p.tempo || "-"}
      </div>

      ${p.voltaRapida ? `
      <div class="volta-rapida">
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
      </div>
      ` : ""}

      <div class="pontos-box">
        ${p.pontos ?? 0}
      </div>
    `;

    lista.appendChild(linha);
  });

  document.getElementById("tituloGP").textContent =
    `RESULTADO - ${pista.toUpperCase()} 2025`;

  document.getElementById("dashboard").style.display = "flex";
}

function fecharDashboard() {
  document.getElementById("dashboard").style.display = "none";
}







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
                WEEKEND.JS
        Sistema do Próximo GP F1 2026
        Versão isolada (prefixo weekend)
==================================================*/


/*==============================================
            BANDEIRAS
==============================================*/

const weekendFlags = {

    "Australia":"🇦🇺",
    "China":"🇨🇳",
    "Japan":"🇯🇵",
    "United States":"🇺🇸",
    "Canada":"🇨🇦",
    "Monaco":"🇲🇨",
    "Spain":"🇪🇸",
    "Austria":"🇦🇹",
    "United Kingdom":"🇬🇧",
    "Belgium":"🇧🇪",
    "Hungary":"🇭🇺",
    "Netherlands":"🇳🇱",
    "Italy":"🇮🇹",
    "Azerbaijan":"🇦🇿",
    "Singapore":"🇸🇬",
    "Mexico":"🇲🇽",
    "Brazil":"🇧🇷",
    "Qatar":"🇶🇦",
    "United Arab Emirates":"🇦🇪",
    "Saudi Arabia":"🇸🇦",
    "Bahrain":"🇧🇭"

};



/*==============================================
            DADOS DAS PISTAS
==============================================*/

const weekendTrackInfo = {

    silverstone:{
        name:"British Grand Prix",
        km:5.89,
        turns:18,
        laps:52
    },

    monza:{
        name:"Italian Grand Prix",
        km:5.79,
        turns:11,
        laps:53
    },

    spa:{
        name:"Belgian Grand Prix",
        km:7.00,
        turns:19,
        laps:44
    },

    monaco:{
        name:"Monaco Grand Prix",
        km:3.33,
        turns:19,
        laps:78
    },

    red_bull_ring:{
        name:"Austrian Grand Prix",
        km:4.32,
        turns:10,
        laps:71
    },

    zandvoort:{
        name:"Dutch Grand Prix",
        km:4.25,
        turns:14,
        laps:72
    },

    catalunya:{
        name:"Spanish Grand Prix",
        km:4.65,
        turns:14,
        laps:66
    },

    madring:{
        name:"Madrid Grand Prix",
        km:5.40,
        turns:22,
        laps:57
    },

    hungaroring:{
        name:"Hungarian Grand Prix",
        km:4.38,
        turns:14,
        laps:70
    },

    interlagos:{
        name:"Brazilian Grand Prix",
        km:4.30,
        turns:15,
        laps:71
    },

    miami:{
        name:"Miami Grand Prix",
        km:5.41,
        turns:19,
        laps:57
    },

    americas:{
        name:"United States Grand Prix",
        km:5.51,
        turns:20,
        laps:56
    },

    rodriguez:{
        name:"Mexico City Grand Prix",
        km:4.30,
        turns:17,
        laps:71
    },

    villeneuve:{
        name:"Canadian Grand Prix",
        km:4.36,
        turns:14,
        laps:70
    },

    suzuka:{
        name:"Japanese Grand Prix",
        km:5.81,
        turns:18,
        laps:53
    },

    albert_park:{
        name:"Australian Grand Prix",
        km:5.28,
        turns:14,
        laps:58
    },

    marina_bay:{
        name:"Singapore Grand Prix",
        km:4.94,
        turns:19,
        laps:62
    },

    shanghai:{
        name:"Chinese Grand Prix",
        km:5.45,
        turns:16,
        laps:56
    },

    lusail:{
        name:"Qatar Grand Prix",
        km:5.38,
        turns:16,
        laps:57
    },

    yas_marina:{
        name:"Abu Dhabi Grand Prix",
        km:5.28,
        turns:16,
        laps:58
    },

    bahrain:{
        name:"Bahrain Grand Prix",
        km:5.41,
        turns:15,
        laps:57
    },

    jeddah:{
        name:"Saudi Arabian Grand Prix",
        km:6.17,
        turns:27,
        laps:50
    },

    vegas:{
        name:"Las Vegas Grand Prix",
        km:6.12,
        turns:17,
        laps:50
    },

    baku:{
        name:"Azerbaijan Grand Prix",
        km:6.00,
        turns:20,
        laps:51
    },

	  sepang:{
        name:"Bahrain Grand Prix in Malaysia",
        km:5.54,
        turns:15,
        laps:56
					 }

};



/*==============================================
            CONFIGURAÇÃO
==============================================*/

const weekendSeason = 2026;

const weekendAPI =
"https://api.jolpi.ca/ergast/f1";


let weekendRaces = [];

let weekendSessions = [];

let weekendCurrentGP = null;

let weekendTimerInterval = null;



/*==============================================
            ELEMENTOS HTML
==============================================*/

const weekendGpName =
document.getElementById(
    "weekendGpName"
);


const weekendCountryFlag =
document.getElementById(
    "weekendCountryFlag"
);


const weekendTrackImage =
document.getElementById(
    "weekendTrackImage"
);


const weekendTurns =
document.getElementById(
    "weekendTurns"
);


const weekendLaps =
document.getElementById(
    "weekendLaps"
);


const weekendKm =
document.getElementById(
    "weekendKm"
);


const weekendTimer =
document.getElementById(
    "weekendTimer"
);


const weekendNextSession =
document.getElementById(
    "weekendNextSession"
);


const weekendTimeline =
document.getElementById(
    "weekendTimeline"
);


/*==============================================
            CARREGAR CALENDÁRIO
==============================================*/

async function weekendLoadCalendar(){

    try{

        const response =
        await fetch(

            `${weekendAPI}/${weekendSeason}/races.json`

        );


        const data =
        await response.json();


        weekendRaces =
        data?.MRData?.RaceTable?.Races || [];


        if(!weekendRaces.length){

            console.warn(
                "Calendário vazio."
            );

            return;

        }


        weekendFindNextGP();


    }

    catch(error){

        console.error(
            "Erro ao carregar calendário:",
            error
        );

    }

}



/*==============================================
        ENCONTRAR PRÓXIMO GP
==============================================*/

function weekendFindNextGP(){

    const now =
    Date.now();


    weekendCurrentGP =
    weekendRaces.find(race=>{


        const raceDate =
        new Date(

            `${race.date}T${race.time || "12:00:00Z"}`

        );


        return raceDate.getTime() > now;


    });



    if(!weekendCurrentGP){


        weekendGpName.textContent =
        "Temporada Finalizada";


        weekendNextSession.textContent =
        "—";


        weekendTimer.textContent =
        "00d 00h 00m 00s";


        return;

    }



    weekendRenderGPInfo();


    weekendCreateSessions();


}



/*==============================================
        INFORMAÇÕES DO GP
==============================================*/

function weekendRenderGPInfo(){


    const circuit =
    weekendCurrentGP.Circuit.circuitId;



    const info =
    weekendTrackInfo[circuit];



    weekendGpName.textContent =

    info?.name ||

    weekendCurrentGP.raceName;



    weekendCountryFlag.textContent =

    weekendFlags[

        weekendCurrentGP.Circuit.Location.country

    ] || "🏁";



    if(weekendTrackImage){

        weekendTrackImage.src =

        `tracks/${circuit}.webp`;

    }



    weekendTurns.textContent =

    info?.turns || "-";



    weekendLaps.textContent =

    info?.laps || "-";



    weekendKm.textContent =

    info?.km ?

    `${info.km} km`

    :

    "-";


}



/*==============================================
        CRIAR SESSÕES DO WEEKEND
==============================================*/

function weekendCreateSessions(){


    weekendSessions = [];



    if(!weekendCurrentGP.Sprint){



        weekendSessions.push(


            {

                name:"Treino Livre 1",

                start:

                weekendGetDate(

                    weekendCurrentGP.FirstPractice

                ),

                duration:

                60 * 60 * 1000

            },



            {

                name:"Treino Livre 2",

                start:

                weekendGetDate(

                    weekendCurrentGP.SecondPractice

                ),

                duration:

                60 * 60 * 1000

            },



            {

                name:"Treino Livre 3",

                start:

                weekendGetDate(

                    weekendCurrentGP.ThirdPractice

                ),

                duration:

                60 * 60 * 1000

            },



            {

                name:"Classificação",

                start:

                weekendGetDate(

                    weekendCurrentGP.Qualifying

                ),

                duration:

                60 * 60 * 1000

            },



            {

                name:"Corrida",

                start:

                new Date(

                    `${weekendCurrentGP.date}T${weekendCurrentGP.time}`

                ).getTime(),


                duration:

                2 * 60 * 60 * 1000

            }


        );


    }



    else{


        weekendSessions.push(


            {

                name:"Treino Livre 1",

                start:

                weekendGetDate(

                    weekendCurrentGP.FirstPractice

                ),

                duration:

                60 * 60 * 1000

            },



            {

                name:"Sprint Qualifying",

                start:

                weekendGetDate(

                    weekendCurrentGP.SprintQualifying

                ),

                duration:

                60 * 60 * 1000

            },



            {

                name:"Sprint",

                start:

                weekendGetDate(

                    weekendCurrentGP.Sprint

                ),

                duration:

                60 * 60 * 1000

            },



            {

                name:"Classificação",

                start:

                weekendGetDate(

                    weekendCurrentGP.Qualifying

                ),

                duration:

                60 * 60 * 1000

            },



            {

                name:"Corrida",

                start:

                new Date(

                    `${weekendCurrentGP.date}T${weekendCurrentGP.time}`

                ).getTime(),


                duration:

                2 * 60 * 60 * 1000

            }


        );


    }



    weekendRenderTimeline();


    weekendStartTimer();


}



/*==============================================
        CONVERTER DATA
==============================================*/

function weekendGetDate(obj){


    if(!obj)

        return 0;



    return new Date(

        `${obj.date}T${obj.time}`

    ).getTime();


}


/*==============================================
            RENDER TIMELINE
==============================================*/

function weekendRenderTimeline(){

    if(!weekendTimeline)
        return;


    weekendTimeline.innerHTML = "";


    weekendSessions.forEach(session=>{


        const card =
        document.createElement("div");


        card.className =
        "session-itemm";


        card.dataset.session =
        session.name;



        card.innerHTML = `

            <div class="session-name">

                ${session.name}

            </div>


            <div class="session-statuss">

            </div>

        `;



        weekendTimeline.appendChild(card);



    });



    weekendUpdateSessionCards();


}




/*==============================================
        ATUALIZAR STATUS DOS CARDS
==============================================*/

function weekendUpdateSessionCards(){


    const now =
    Date.now();



    document
    .querySelectorAll(
        "#weekendTimeline .session-itemm"
    )
    .forEach(card=>{


        const session =

        weekendSessions.find(

            s =>

            s.name === card.dataset.session

        );



        if(!session)
            return;



        const start =
        session.start;



        const end =
        start + session.duration;



        const status =
        card.querySelector(
            ".session-statuss"
        );



        card.classList.remove(

            "live",

            "next",

            "done"

        );



        status.innerHTML = "";




        /*============================
                AO VIVO
        ============================*/


        if(now >= start && now <= end){


            card.classList.add(
                "live"
            );



            status.innerHTML = `

                <span class="live-badge">

                    🔴 LIVE

                </span>

            `;


        }




        /*============================
                FINALIZADO
        ============================*/


        else if(now > end){


            card.classList.add(
                "done"
            );



            status.innerHTML = `

                <span class="done-badge">

                    ✅ Finalizado

                </span>

            `;


        }




        /*============================
                PRÓXIMO
        ============================*/


        else{


            const next =
            weekendGetNextSession();



            if(

                next &&

                next.name === session.name

            ){


                card.classList.add(
                    "next"
                );



                status.innerHTML = `

                    <span class="next-badge">

                        🟡 Próximo

                    </span>

                `;


            }


        }



    });



}



/*==============================================
            PRÓXIMA SESSÃO
==============================================*/

function weekendGetNextSession(){


    const now =
    Date.now();



    return weekendSessions.find(


        session =>

        session.start > now


    ) || null;


}




/*==============================================
            TIMER
==============================================*/

function weekendStartTimer(){



    if(weekendTimerInterval){


        clearInterval(
            weekendTimerInterval
        );


    }



    weekendUpdateTimer();



    weekendTimerInterval =

    setInterval(


        weekendUpdateTimer,


        1000


    );


}



/*==============================================
            ATUALIZAR TIMER
==============================================*/

function weekendUpdateTimer(){


    weekendUpdateSessionCards();



    const next =

    weekendGetNextSession();



    if(!next){


        weekendNextSession.textContent =
        "Fim do Weekend";


        weekendTimer.textContent =
        "00d 00h 00m 00s";


        clearInterval(
            weekendTimerInterval
        );


        return;


    }




    weekendNextSession.textContent =

    next.name;




    const diff =

    next.start - Date.now();




    if(diff <= 0){


        weekendTimer.textContent =

        "00d 00h 00m 00s";


        return;


    }




    const days =

    Math.floor(

        diff / 86400000

    );



    const hours =

    Math.floor(

        (diff % 86400000) /

        3600000

    );



    const minutes =

    Math.floor(

        (diff % 3600000) /

        60000

    );



    const seconds =

    Math.floor(

        (diff % 60000) /

        1000

    );




    weekendTimer.textContent =


    `${String(days).padStart(2,"0")}d ` +

    `${String(hours).padStart(2,"0")}h ` +

    `${String(minutes).padStart(2,"0")}m ` +

    `${String(seconds).padStart(2,"0")}s`;



}




/*==============================================
        TROCA AUTOMÁTICA DE GP
==============================================*/

function weekendCheckNextRace(){



    if(!weekendSessions.length)

        return;




    const now =
    Date.now();




    const lastSession =

    weekendSessions[

        weekendSessions.length - 1

    ];




    if(!lastSession)

        return;




    if(

        now >

        lastSession.start +

        lastSession.duration

    ){



        clearInterval(
            weekendTimerInterval
        );



        weekendLoadCalendar();


    }



}




/*==============================================
        VERIFICAR A CADA MINUTO
==============================================*/

setInterval(()=>{


    weekendCheckNextRace();


},60000);




/*==============================================
        VOLTAR PARA ABA
==============================================*/

document.addEventListener(

    "visibilitychange",

    ()=>{


        if(!document.hidden){


            weekendLoadCalendar();


        }


    }

);




/*==============================================
        REDIMENSIONAMENTO
==============================================*/

window.addEventListener(

    "resize",

    ()=>{


        weekendUpdateSessionCards();


    }

);




/*==============================================
        INICIALIZAÇÃO
==============================================*/

async function weekendStart(){


    await weekendLoadCalendar();


}




/*==============================================
            INICIAR SISTEMA
==============================================*/


weekendStart();