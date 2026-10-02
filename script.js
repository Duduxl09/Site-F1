// =====================================
// TRANSIÇÃO ENTRE EQUIPES
// =====================================

const equipes = {

    // =================================
    // MCLAREN
    // =================================

    mclaren: {
        cor: "#ff8000",

        logo: "icons/mcl (1).png",

        carro: "api/mclaren.avif",

        nome: "MCLAREN",

        numero1: "1",
        piloto1: "LANDO NORRIS",

        numero2: "81",
        piloto2: "OSCAR PIASTRI",

        pagina: "mclaren.html"
    },


    // =================================
    // MERCEDES
    // =================================

    mercedes: {
        cor: "#00d2be",

        logo: "icons/Mercedesa.png",

        carro: "api/mercedes.avif",

        nome: "MERCEDES",

        numero1: "63",
        piloto1: "GEORGE RUSSELL",

        numero2: "12",
        piloto2: "KIMI ANTONELLI",

        pagina: "mercedes.html"
    },


    // =================================
    // RED BULL
    // =================================

    redbull: {
        cor: "#1e41ff",

        logo: "icons/redbull.png",

        carro: "api/red_bull.avif",

        nome: "RED BULL",

        numero1: "3",
        piloto1: "MAX VERSTAPPEN",

        numero2: "6",
        piloto2: "ISACK HADJAR",

        pagina: "redbull.html"
    },


    // =================================
    // FERRARI
    // =================================

    ferrari: {
        cor: "#dc0000",

        logo: "icons/ferrari.png",

        carro: "api/ferrari.avif",

        nome: "FERRARI",

        numero1: "44",
        piloto1: "LEWIS HAMILTON",

        numero2: "16",
        piloto2: "CHARLES LECLERC",

        pagina: "ferrari.html"
    },


    // =================================
    // WILLIAMS
    // =================================

    williams: {
        cor: "#005aff",

        logo: "icons/WilliamsF1.png",

        carro: "api/williams.avif",

        nome: "WILLIAMS",

        numero1: "23",
        piloto1: "ALEX ALBON",

        numero2: "55",
        piloto2: "CARLOS SAINZ",

        pagina: "willians.html"
    },


    // =================================
    // RACING BULLS
    // =================================

    racingbulls: {
        cor: "#a8a8a8",

        logo: "icons/racingbulls.svg",

        carro: "api/rb.avif",

        nome: "RACING BULLS",

        numero1: "30",
        piloto1: "LIAM LAWSON",

        numero2: "41",
        piloto2: "ARVID LINDBLAD",

        pagina: "RB.html"
    },


    // =================================
    // ASTON MARTIN
    // =================================

    astonmartin: {
        cor: "#006f62",

        logo: "icons/aston.png",

        carro: "api/aston_martin.avif",

        nome: "ASTON MARTIN",

        numero1: "14",
        piloto1: "FERNANDO ALONSO",

        numero2: "18",
        piloto2: "LANCE STROLL",

        pagina: "aston.html"
    },


    // =================================
    // HAAS
    // =================================

    haas: {
        cor: "#b6babd",

        logo: "icons/HaasF1.png",

        carro: "api/haas.avif",

        nome: "HAAS",

        numero1: "31",
        piloto1: "ESTEBAN OCON",

        numero2: "87",
        piloto2: "OLIVER BEARMAN",

        pagina: "haas.html"
    },


    // =================================
    // AUDI
    // =================================

    audi: {
        cor: "#333333",

        logo: "icons/audi.png",

        carro: "api/audi.webp",

        nome: "AUDI",

        numero1: "27",
        piloto1: "NICO HÜLKENBERG",

        numero2: "5",
        piloto2: "GABRIEL BORTOLETO",

        pagina: "audi.html"
    },


    // =================================
    // ALPINE
    // =================================

    alpine: {
        cor: "#0090ff",

        logo: "icons/Alpinef1.png",

        carro: "api/alpine.avif",

        nome: "ALPINE",

        numero1: "10",
        piloto1: "PIERRE GASLY",

        numero2: "43",
        piloto2: "FRANCO COLAPINTO",

        pagina: "alpine.html"
    },


    // =================================
    // CADILLAC
    // =================================

    cadillac: {
        cor: "#222222",

        logo: "icons/cadillac.png",

        carro: "api/cadillac.avif",

        nome: "CADILLAC",

        numero1: "11",
        piloto1: "SERGIO PÉREZ",

        numero2: "77",
        piloto2: "VALTTERI BOTTAS",

        pagina: "cadillac.html"
    }

};


// =====================================
// ABRIR PÁGINA DA EQUIPE
// =====================================

function abrirEquipe(nomeEquipe) {

    const equipe = equipes[nomeEquipe];

    if (!equipe) return;


    // =================================
    // ELEMENTOS DA TRANSIÇÃO
    // =================================

    const tela =
        document.getElementById("teamTransition");

    const logo =
        document.getElementById("teamLogo");

    const teamName =
        document.getElementById("teamName");

    const driverNumber1 =
        document.getElementById("driverNumber1");

    const driverName1 =
        document.getElementById("driverName1");

    const driverNumber2 =
        document.getElementById("driverNumber2");

    const driverName2 =
        document.getElementById("driverName2");

    const car =
        document.getElementById("teamCar");


    // =================================
    // VERIFICA SE A TRANSIÇÃO EXISTE
    // =================================

    if (
        !tela ||
        !logo ||
        !teamName ||
        !driverNumber1 ||
        !driverName1 ||
        !driverNumber2 ||
        !driverName2 ||
        !car
    ) {

        // Se a transição não existir,
        // abre a página normalmente

        window.location.href = equipe.pagina;

        return;
    }


    // =================================
    // PREENCHE OS DADOS
    // =================================

    tela.style.background = equipe.cor;

    tela.dataset.teamName = equipe.nome;

    logo.src = equipe.logo;

    teamName.textContent = equipe.nome;

    driverNumber1.textContent =
        equipe.numero1;

    driverName1.textContent =
        equipe.piloto1;

    driverNumber2.textContent =
        equipe.numero2;

    driverName2.textContent =
        equipe.piloto2;

    car.src = equipe.carro;


    // =================================
    // ATIVA A TRANSIÇÃO
    // =================================

    tela.classList.add("ativo");


    // =================================
    // TROCA DE PÁGINA
    // =================================

    setTimeout(() => {

        window.location.href =
            equipe.pagina;

    }, 3200);

}





/* =========================================================
   TRANSIÇÃO DAS PÁGINAS DOS PILOTOS
========================================================= */


/* =========================================================
   DADOS DOS PILOTOS
========================================================= */

const pilotos = {

    /* =====================
       McLAREN
    ===================== */

    lando: {
        nome: "LANDO",
        sobrenome: "NORRIS",
        nomeCompleto: "LANDO NORRIS",
        equipe: "McLAREN",
        numero: "1",
        cor: "#ff8000",
        imagem: "lando/head.png",
        pagina: "lando.html"
    },

    piastri: {
        nome: "OSCAR",
        sobrenome: "PIASTRI",
        nomeCompleto: "OSCAR PIASTRI",
        equipe: "McLAREN",
        numero: "81",
        cor: "#ff8000",
        imagem: "piastri/pia(1).png",
        pagina: "Piastri.html"
    },


    /* =====================
       MERCEDES
    ===================== */

    russell: {
        nome: "GEORGE",
        sobrenome: "RUSSELL",
        nomeCompleto: "GEORGE RUSSELL",
        equipe: "MERCEDES",
        numero: "63",
        cor: "#00d2be",
        imagem: "russell/head.png",
        pagina: "russell.html"
    },

    kimi: {
        nome: "KIMI",
        sobrenome: "ANTONELLI",
        nomeCompleto: "KIMI ANTONELLI",
        equipe: "MERCEDES",
        numero: "12",
        cor: "#00d2be",
        imagem: "kimi/head.png",
        pagina: "kimi.html"
    },


    /* =====================
       RED BULL
    ===================== */

    max: {
        nome: "MAX",
        sobrenome: "VERSTAPPEN",
        nomeCompleto: "MAX VERSTAPPEN",
        equipe: "RED BULL",
        numero: "3",
        cor: "#1e41ff",
        imagem: "max/head.png",
        pagina: "max.html"
    },

    hadjar: {
        nome: "ISACK",
        sobrenome: "HADJAR",
        nomeCompleto: "ISACK HADJAR",
        equipe: "RED BULL",
        numero: "6",
        cor: "#1e41ff",
        imagem: "hadjar/head.png",
        pagina: "hadjar.html"
    },


    /* =====================
       FERRARI
    ===================== */

    lewis: {
        nome: "LEWIS",
        sobrenome: "HAMILTON",
        nomeCompleto: "LEWIS HAMILTON",
        equipe: "FERRARI",
        numero: "44",
        cor: "#dc0000",
        imagem: "lewis/head.png",
        pagina: "lewis.html"
    },

    charles: {
        nome: "CHARLES",
        sobrenome: "LECLERC",
        nomeCompleto: "CHARLES LECLERC",
        equipe: "FERRARI",
        numero: "16",
        cor: "#dc0000",
        imagem: "charles/head.png",
        pagina: "charles.html"
    },


    /* =====================
       WILLIAMS
    ===================== */

    alex: {
        nome: "ALEX",
        sobrenome: "ALBON",
        nomeCompleto: "ALEX ALBON",
        equipe: "WILLIAMS",
        numero: "23",
        cor: "#005aff",
        imagem: "alex/head.png",
        pagina: "alex.html"
    },

    carlos: {
        nome: "CARLOS",
        sobrenome: "SAINZ",
        nomeCompleto: "CARLOS SAINZ",
        equipe: "WILLIAMS",
        numero: "55",
        cor: "#005aff",
        imagem: "carlos/head.png",
        pagina: "carlos.html"
    },


    /* =====================
       RACING BULLS
    ===================== */

    liam: {
        nome: "LIAM",
        sobrenome: "LAWSON",
        nomeCompleto: "LIAM LAWSON",
        equipe: "RACING BULLS",
        numero: "30",
        cor: "#a8a8a8",
        imagem: "lawson/head.webp",
        pagina: "liam.html"
    },

    arvid: {
        nome: "ARVID",
        sobrenome: "LINDBLAD",
        nomeCompleto: "ARVID LINDBLAD",
        equipe: "RACING BULLS",
        numero: "41",
        cor: "#a8a8a8",
        imagem: "arvid/head.webp",
        pagina: "arvid.html"
    },


    /* =====================
       ASTON MARTIN
    ===================== */

    alonso: {
        nome: "FERNANDO",
        sobrenome: "ALONSO",
        nomeCompleto: "FERNANDO ALONSO",
        equipe: "ASTON MARTIN",
        numero: "14",
        cor: "#006f62",
        imagem: "fernando/head.webp",
        pagina: "alonso.html"
    },

    lance: {
        nome: "LANCE",
        sobrenome: "STROLL",
        nomeCompleto: "LANCE STROLL",
        equipe: "ASTON MARTIN",
        numero: "18",
        cor: "#006f62",
        imagem: "stroll/head.webp",
        pagina: "lance.html"
    },


    /* =====================
       HAAS
    ===================== */

    ocon: {
        nome: "ESTEBAN",
        sobrenome: "OCON",
        nomeCompleto: "ESTEBAN OCON",
        equipe: "HAAS",
        numero: "31",
        cor: "#b6babd",
        imagem: "ocon/head.webp",
        pagina: "ocon.html"
    },

    oliver: {
        nome: "OLIVER",
        sobrenome: "BEARMAN",
        nomeCompleto: "OLIVER BEARMAN",
        equipe: "HAAS",
        numero: "87",
        cor: "#b6babd",
        imagem: "oliver/head.webp",
        pagina: "oliver.html"
    },


    /* =====================
       AUDI
    ===================== */

    nico: {
        nome: "NICO",
        sobrenome: "HÜLKENBERG",
        nomeCompleto: "NICO HÜLKENBERG",
        equipe: "AUDI",
        numero: "27",
        cor: "#333333",
        imagem: "nico/head.webp",
        pagina: "hulkenberg.html"
    },

    gabi: {
        nome: "GABRIEL",
        sobrenome: "BORTOLETO",
        nomeCompleto: "GABRIEL BORTOLETO",
        equipe: "AUDI",
        numero: "5",
        cor: "#333333",
        imagem: "gabi/head.webp",
        pagina: "bortoleto.html"
    },


    /* =====================
       ALPINE
    ===================== */

    gasly: {
        nome: "PIERRE",
        sobrenome: "GASLY",
        nomeCompleto: "PIERRE GASLY",
        equipe: "ALPINE",
        numero: "10",
        cor: "#0090ff",
        imagem: "gasly/head.webp",
        pagina: "gasly.html"
    },

    franco: {
        nome: "FRANCO",
        sobrenome: "COLAPINTO",
        nomeCompleto: "FRANCO COLAPINTO",
        equipe: "ALPINE",
        numero: "43",
        cor: "#0090ff",
        imagem: "franco/head.webp",
        pagina: "franco.html"
    },


    /* =====================
       CADILLAC
    ===================== */

    perez: {
        nome: "SERGIO",
        sobrenome: "PEREZ",
        nomeCompleto: "SERGIO PEREZ",
        equipe: "CADILLAC",
        numero: "11",
        cor: "#222222",
        imagem: "perez/head.webp",
        pagina: "perez.html"
    },

    bottas: {
        nome: "VALTTERI",
        sobrenome: "BOTTAS",
        nomeCompleto: "VALTTERI BOTTAS",
        equipe: "CADILLAC",
        numero: "77",
        cor: "#222222",
        imagem: "bottas/head.webp",
        pagina: "bottas.html"
    }

};


/* =========================================================
   ABRIR PÁGINA DO PILOTO
========================================================= */

function abrirPiloto(nomePiloto){

    const piloto = pilotos[nomePiloto];

    if(!piloto) return;


    /* ELEMENTOS */

    const tela =
        document.getElementById("driverTransition");

    const numero =
        document.getElementById("driverNumber");

    const primeiroNome =
        document.getElementById("driverFirstName");

    const sobrenome =
        document.getElementById("driverLastName");

    const imagem =
        document.getElementById("driverImage");

    const equipe =
        document.getElementById("driverTeam");

    const nomeCompleto =
        document.getElementById("driverFullName");

    const numeroPequeno =
        document.getElementById("driverSmallNumber");


    if(!tela) return;


    /* RESETA A ANIMAÇÃO */

    tela.classList.remove("ativo");


    /* FUNDO */

    tela.style.background =
        piloto.cor;


    /* NÚMERO GIGANTE */

    numero.textContent =
        piloto.numero;


    /* NOME */

    primeiroNome.textContent =
        piloto.nome;

    sobrenome.textContent =
        piloto.sobrenome;


    /* IMAGEM */

    imagem.src =
        piloto.imagem;

    imagem.alt =
        piloto.nomeCompleto;


    /* INFORMAÇÕES */

    equipe.textContent =
        piloto.equipe;

    nomeCompleto.textContent =
        piloto.nomeCompleto;

    numeroPequeno.textContent =
        `Nº ${piloto.numero}`;


    /* FORÇA RESET DAS ANIMAÇÕES */

    void tela.offsetWidth;


    /* INICIA TRANSIÇÃO */

    tela.classList.add("ativo");


    /* ABRE A PÁGINA */

    setTimeout(() => {

        window.location.href =
            piloto.pagina;

    }, 3200);

}

/* =========================================================
   CARREGAMENTO DA EQUIPE
========================================================= */

let teamLoadingInterval = null;


function iniciarTeamLoading() {

    const progress =
        document.getElementById("teamLoadingProgress");

    const percent =
        document.getElementById("teamLoadingPercent");

    if (!progress || !percent) {
        return;
    }


    /* Cancela carregamento anterior */

    if (teamLoadingInterval) {

        clearInterval(teamLoadingInterval);

    }


    /* Começa do zero */

    let valor = 0;

    progress.style.width = "0%";
    percent.innerText = "0%";


    /* Mostra a transição */

    const transition =
        document.getElementById("teamTransition");

    if (transition) {

        transition.classList.add("ativo");

    }


    /* =====================================================
       ANIMAÇÃO
    ===================================================== */

    teamLoadingInterval = setInterval(() => {

        /*
         * Acelera no começo
         * e desacelera perto do final.
         */

        if (valor < 60) {

            valor += 2;

        } else if (valor < 85) {

            valor += 1;

        } else if (valor < 95) {

            valor += 0.3;

        }


        if (valor > 95) {

            valor = 95;

        }


        progress.style.width =
            valor + "%";

        percent.innerText =
            Math.floor(valor) + "%";


    }, 40);

}


/* =========================================================
   FINALIZAR CARREGAMENTO
========================================================= */

function finalizarTeamLoading() {

    const progress =
        document.getElementById("teamLoadingProgress");

    const percent =
        document.getElementById("teamLoadingPercent");


    if (!progress || !percent) {
        return;
    }


    if (teamLoadingInterval) {

        clearInterval(teamLoadingInterval);

        teamLoadingInterval = null;

    }


    /* Vai para 100% */

    progress.style.width = "100%";

    percent.innerText = "100%";


    /* Pequeno tempo mostrando 100% */

    setTimeout(() => {

        const transition =
            document.getElementById("teamTransition");

        if (transition) {

            transition.classList.remove("ativo");

        }

    }, 250);

}