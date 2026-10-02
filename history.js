/* ==================================================
	 CAMPEONATO MUNDIAL DE CONSTRUTORES - F1
================================================== */

(function() {

	const titulosF1 = [

		/* =========================
			 1950
		========================= */

		{
			ano: 1958,
			equipe: "Vanwall",
			logo: "icons/vanwall.png",
			piloto1: "Stirling Moss 🇬🇧",
			piloto2: "Tony Brooks 🇬🇧",
			corridas: 11,
			vitorias: 6,
			podios: 9,
			pontos: 48
		},

		{
			ano: 1959,
			equipe: "Cooper",
			logo: "icons/cooper.png",
			piloto1: "Jack Brabham 🇦🇺",
			piloto2: "Bruce McLaren 🇳🇿",
			corridas: 9,
			vitorias: 5,
			podios: 13,
			pontos: 40
		},

		{
			ano: 1960,
			equipe: "Cooper",
			logo: "icons/cooper.png",
			piloto1: "Jack Brabham 🇦🇺",
			piloto2: "Bruce McLaren 🇳🇿",
			corridas: 10,
			vitorias: 6,
			podios: 14,
			pontos: 48
		},

		{
			ano: 1961,
			equipe: "Ferrari",
			logo: "icons/ferrari.png",
			piloto1: "Phil Hill 🇺🇸",
			piloto2: "Wolfgang von Trips 🇩🇪",
			corridas: 8,
			vitorias: 5,
			podios: 13,
			pontos: 40
		},

		{
			ano: 1962,
			equipe: "BRM",
			logo: "icons/brm.png",
			piloto1: "Graham Hill 🇬🇧",
			piloto2: "Richie Ginther 🇺🇸",
			corridas: 9,
			vitorias: 4,
			podios: 10,
			pontos: 42
		},

		{
			ano: 1963,
			equipe: "Lotus",
			logo: "icons/lotus.png",
			piloto1: "Jim Clark 🇬🇧",
			piloto2: "Trevor Taylor 🇬🇧",
			corridas: 10,
			vitorias: 7,
			podios: 15,
			pontos: 54
		},

		{
			ano: 1964,
			equipe: "Ferrari",
			logo: "icons/ferrari.png",
			piloto1: "John Surtees 🇬🇧",
			piloto2: "Lorenzo Bandini 🇮🇹",
			corridas: 10,
			vitorias: 3,
			podios: 12,
			pontos: 45
		},

		{
			ano: 1965,
			equipe: "Lotus",
			logo: "icons/lotus.png",
			piloto1: "Jim Clark 🇬🇧",
			piloto2: "Mike Spence 🇬🇧",
			corridas: 10,
			vitorias: 6,
			podios: 15,
			pontos: 54
		},

		{
			ano: 1966,
			equipe: "Brabham",
			logo: "icons/brabham.png",
			piloto1: "Jack Brabham 🇦🇺",
			piloto2: "Denny Hulme 🇳🇿",
			corridas: 9,
			vitorias: 4,
			podios: 12,
			pontos: 42
		},

		{
			ano: 1967,
			equipe: "Brabham",
			logo: "icons/brabham.png",
			piloto1: "Denny Hulme 🇳🇿",
			piloto2: "Jack Brabham 🇦🇺",
			corridas: 11,
			vitorias: 2,
			podios: 13,
			pontos: 63
		},

		{
			ano: 1968,
			equipe: "Lotus",
			logo: "icons/lotus.png",
			piloto1: "Graham Hill 🇬🇧",
			piloto2: "Jacky Ickx 🇧🇪",
			corridas: 12,
			vitorias: 5,
			podios: 13,
			pontos: 62
		},

		{
			ano: 1969,
			equipe: "Matra",
			logo: "icons/matra.png",
			piloto1: "Jackie Stewart 🇬🇧",
			piloto2: "Jean-Pierre Beltoise 🇫🇷",
			corridas: 11,
			vitorias: 6,
			podios: 11,
			pontos: 66
		},


		/* =========================
			 1970
		========================= */

		{
			ano: 1970,
			equipe: "Lotus",
			logo: "icons/lotus.png",
			piloto1: "Jochen Rindt 🇦🇹",
			piloto2: "Emerson Fittipaldi 🇧🇷",
			corridas: 13,
			vitorias: 7,
			podios: 12,
			pontos: 59
		},

		{
			ano: 1971,
			equipe: "Tyrrell",
			logo: "icons/tyrrell.png",
			piloto1: "Jackie Stewart 🇬🇧",
			piloto2: "François Cevert 🇫🇷",
			corridas: 11,
			vitorias: 3,
			podios: 10,
			pontos: 73
		},

		{
			ano: 1972,
			equipe: "Lotus",
			logo: "icons/lotus.png",
			piloto1: "Emerson Fittipaldi 🇧🇷",
			piloto2: "David Walker 🇦🇺",
			corridas: 12,
			vitorias: 5,
			podios: 10,
			pontos: 61
		},

		{
			ano: 1973,
			equipe: "Lotus",
			logo: "icons/lotus.png",
			piloto1: "Emerson Fittipaldi 🇧🇷",
			piloto2: "Ronnie Peterson 🇸🇪",
			corridas: 15,
			vitorias: 7,
			podios: 15,
			pontos: 92
		},

		{
			ano: 1974,
			equipe: "McLaren",
			logo: "icons/mclaren.png",
			piloto1: "Emerson Fittipaldi 🇧🇷",
			piloto2: "Denny Hulme 🇳🇿",
			corridas: 15,
			vitorias: 4,
			podios: 12,
			pontos: 73
		},

		{
			ano: 1975,
			equipe: "Ferrari",
			logo: "icons/ferrari.png",
			piloto1: "Niki Lauda 🇦🇹",
			piloto2: "Clay Regazzoni 🇨🇭",
			corridas: 14,
			vitorias: 6,
			podios: 15,
			pontos: 72
		},

		{
			ano: 1976,
			equipe: "Ferrari",
			logo: "icons/ferrari.png",
			piloto1: "Niki Lauda 🇦🇹",
			piloto2: "Clay Regazzoni 🇨🇭",
			corridas: 16,
			vitorias: 6,
			podios: 15,
			pontos: 83
		},

		{
			ano: 1977,
			equipe: "Ferrari",
			logo: "icons/ferrari.png",
			piloto1: "Niki Lauda 🇦🇹",
			piloto2: "Carlos Reutemann 🇦🇷",
			corridas: 17,
			vitorias: 4,
			podios: 13,
			pontos: 95
		},

		{
			ano: 1978,
			equipe: "Lotus",
			logo: "icons/lotus.png",
			piloto1: "Mario Andretti 🇺🇸",
			piloto2: "Ronnie Peterson 🇸🇪",
			corridas: 16,
			vitorias: 6,
			podios: 14,
			pontos: 86
		},

		{
			ano: 1979,
			equipe: "Ferrari",
			logo: "icons/ferrari.png",
			piloto1: "Jody Scheckter 🇿🇦",
			piloto2: "Gilles Villeneuve 🇨🇦",
			corridas: 15,
			vitorias: 6,
			podios: 15,
			pontos: 113
		},


		/* =========================
			 1980
		========================= */

		{
			ano: 1980,
			equipe: "Williams",
			logo: "icons/WilliamsF1.png",
			piloto1: "Alan Jones 🇦🇺",
			piloto2: "Carlos Reutemann 🇦🇷",
			corridas: 14,
			vitorias: 6,
			podios: 14,
			pontos: 120
		},

		{
			ano: 1981,
			equipe: "Williams",
			logo: "icons/WilliamsF1.png",
			piloto1: "Alan Jones 🇦🇺",
			piloto2: "Carlos Reutemann 🇦🇷",
			corridas: 15,
			vitorias: 4,
			podios: 12,
			pontos: 95
		},

		{
			ano: 1982,
			equipe: "Ferrari",
			logo: "icons/ferrari.png",
			piloto1: "Didier Pironi 🇫🇷",
			piloto2: "Patrick Tambay 🇫🇷",
			corridas: 16,
			vitorias: 3,
			podios: 12,
			pontos: 74
		},

		{
			ano: 1983,
			equipe: "Ferrari",
			logo: "icons/ferrari.png",
			piloto1: "René Arnoux 🇫🇷",
			piloto2: "Patrick Tambay 🇫🇷",
			corridas: 15,
			vitorias: 4,
			podios: 12,
			pontos: 89
		},

		{
			ano: 1984,
			equipe: "McLaren",
			logo: "icons/mclaren.png",
			piloto1: "Niki Lauda 🇦🇹",
			piloto2: "Alain Prost 🇫🇷",
			corridas: 16,
			vitorias: 12,
			podios: 25,
			pontos: 143
		},

		{
			ano: 1985,
			equipe: "McLaren",
			logo: "icons/mclaren.png",
			piloto1: "Alain Prost 🇫🇷",
			piloto2: "Niki Lauda 🇦🇹",
			corridas: 16,
			vitorias: 6,
			podios: 19,
			pontos: 90
		},

		{
			ano: 1986,
			equipe: "Williams",
			logo: "icons/WilliamsF1.png",
			piloto1: "Nigel Mansell 🇬🇧",
			piloto2: "Nelson Piquet 🇧🇷",
			corridas: 16,
			vitorias: 9,
			podios: 19,
			pontos: 141
		},

		{
			ano: 1987,
			equipe: "Williams",
			logo: "icons/WilliamsF1.png",
			piloto1: "Nigel Mansell 🇬🇧",
			piloto2: "Nelson Piquet 🇧🇷",
			corridas: 16,
			vitorias: 9,
			podios: 20,
			pontos: 137
		},

		{
			ano: 1988,
			equipe: "McLaren",
			logo: "icons/mclaren.png",
			piloto1: "Ayrton Senna 🇧🇷",
			piloto2: "Alain Prost 🇫🇷",
			corridas: 16,
			vitorias: 15,
			podios: 25,
			pontos: 199
		},

		{
			ano: 1989,
			equipe: "McLaren",
			logo: "icons/mclaren.png",
			piloto1: "Ayrton Senna 🇧🇷",
			piloto2: "Alain Prost 🇫🇷",
			corridas: 16,
			vitorias: 10,
			podios: 24,
			pontos: 141
		},


		/* =========================
			 1990
		========================= */

		{
			ano: 1990,
			equipe: "McLaren",
			logo: "icons/mclaren.png",
			piloto1: "Ayrton Senna 🇧🇷",
			piloto2: "Gerhard Berger 🇦🇹",
			corridas: 16,
			vitorias: 6,
			podios: 18,
			pontos: 199
		},

		{
			ano: 1991,
			equipe: "McLaren",
			logo: "icons/mclaren.png",
			piloto1: "Ayrton Senna 🇧🇷",
			piloto2: "Gerhard Berger 🇦🇹",
			corridas: 16,
			vitorias: 8,
			podios: 18,
			pontos: 148
		},

		{
			ano: 1992,
			equipe: "Williams",
			logo: "icons/WilliamsF1.png",
			piloto1: "Nigel Mansell 🇬🇧",
			piloto2: "Riccardo Patrese 🇮🇹",
			corridas: 16,
			vitorias: 10,
			podios: 21,
			pontos: 164
		},

		{
			ano: 1993,
			equipe: "Williams",
			logo: "icons/WilliamsF1.png",
			piloto1: "Alain Prost 🇫🇷",
			piloto2: "Damon Hill 🇬🇧",
			corridas: 16,
			vitorias: 10,
			podios: 22,
			pontos: 168
		},

		{
			ano: 1994,
			equipe: "Williams",
			logo: "icons/WilliamsF1.png",
			piloto1: "Damon Hill 🇬🇧",
			piloto2: "David Coulthard 🇬🇧",
			corridas: 16,
			vitorias: 7,
			podios: 20,
			pontos: 118
		},

		{
			ano: 1995,
			equipe: "Benetton",
			logo: "icons/benetton.png",
			piloto1: "Michael Schumacher 🇩🇪",
			piloto2: "Johnny Herbert 🇬🇧",
			corridas: 17,
			vitorias: 11,
			podios: 20,
			pontos: 137
		},

		{
			ano: 1996,
			equipe: "Williams",
			logo: "icons/WilliamsF1.png",
			piloto1: "Damon Hill 🇬🇧",
			piloto2: "Jacques Villeneuve 🇨🇦",
			corridas: 16,
			vitorias: 12,
			podios: 21,
			pontos: 175
		},

		{
			ano: 1997,
			equipe: "Williams",
			logo: "icons/WilliamsF1.png",
			piloto1: "Jacques Villeneuve 🇨🇦",
			piloto2: "Heinz-Harald Frentzen 🇩🇪",
			corridas: 17,
			vitorias: 8,
			podios: 21,
			pontos: 123
		},

		{
			ano: 1998,
			equipe: "McLaren",
			logo: "icons/mclaren.png",
			piloto1: "Mika Häkkinen 🇫🇮",
			piloto2: "David Coulthard 🇬🇧",
			corridas: 16,
			vitorias: 9,
			podios: 20,
			pontos: 156
		},

		{
			ano: 1999,
			equipe: "Ferrari",
			logo: "icons/ferrari.png",
			piloto1: "Michael Schumacher 🇩🇪",
			piloto2: "Eddie Irvine 🇬🇧",
			corridas: 16,
			vitorias: 6,
			podios: 17,
			pontos: 128
		},


		/* =========================
			 2000
		========================= */

		{
			ano: 2000,
			equipe: "Ferrari",
			logo: "icons/ferrari.png",
			piloto1: "Michael Schumacher 🇩🇪",
			piloto2: "Rubens Barrichello 🇧🇷",
			corridas: 17,
			vitorias: 10,
			podios: 21,
			pontos: 170
		},

		{
			ano: 2001,
			equipe: "Ferrari",
			logo: "icons/ferrari.png",
			piloto1: "Michael Schumacher 🇩🇪",
			piloto2: "Rubens Barrichello 🇧🇷",
			corridas: 17,
			vitorias: 9,
			podios: 20,
			pontos: 179
		},

		{
			ano: 2002,
			equipe: "Ferrari",
			logo: "icons/ferrari.png",
			piloto1: "Michael Schumacher 🇩🇪",
			piloto2: "Rubens Barrichello 🇧🇷",
			corridas: 17,
			vitorias: 15,
			podios: 29,
			pontos: 221
		},

		{
			ano: 2003,
			equipe: "Ferrari",
			logo: "icons/ferrari.png",
			piloto1: "Michael Schumacher 🇩🇪",
			piloto2: "Rubens Barrichello 🇧🇷",
			corridas: 16,
			vitorias: 8,
			podios: 26,
			pontos: 158
		},

		{
			ano: 2004,
			equipe: "Ferrari",
			logo: "icons/ferrari.png",
			piloto1: "Michael Schumacher 🇩🇪",
			piloto2: "Rubens Barrichello 🇧🇷",
			corridas: 18,
			vitorias: 15,
			podios: 29,
			pontos: 262
		},

		{
			ano: 2005,
			equipe: "Renault",
			logo: "icons/renault.png",
			piloto1: "Fernando Alonso 🇪🇸",
			piloto2: "Giancarlo Fisichella 🇮🇹",
			corridas: 19,
			vitorias: 8,
			podios: 18,
			pontos: 191
		},

		{
			ano: 2006,
			equipe: "Renault",
			logo: "icons/renault.png",
			piloto1: "Fernando Alonso 🇪🇸",
			piloto2: "Giancarlo Fisichella 🇮🇹",
			corridas: 18,
			vitorias: 8,
			podios: 19,
			pontos: 206
		},

		{
			ano: 2007,
			equipe: "Ferrari",
			logo: "icons/ferrari.png",
			piloto1: "Kimi Räikkönen 🇫🇮",
			piloto2: "Felipe Massa 🇧🇷",
			corridas: 17,
			vitorias: 9,
			podios: 22,
			pontos: 204
		},

		{
			ano: 2008,
			equipe: "Ferrari",
			logo: "icons/ferrari.png",
			piloto1: "Felipe Massa 🇧🇷",
			piloto2: "Kimi Räikkönen 🇫🇮",
			corridas: 18,
			vitorias: 8,
			podios: 19,
			pontos: 172
		},

		{
			ano: 2009,
			equipe: "Brawn",
			logo: "icons/brawn.png",
			piloto1: "Jenson Button 🇬🇧",
			piloto2: "Rubens Barrichello 🇧🇷",
			corridas: 17,
			vitorias: 8,
			podios: 17,
			pontos: 172
		},


		/* =========================
			 2010
		========================= */

		{
			ano: 2010,
			equipe: "Red Bull",
			logo: "icons/redbull.png",
			piloto1: "Sebastian Vettel 🇩🇪",
			piloto2: "Mark Webber 🇦🇺",
			corridas: 19,
			vitorias: 9,
			podios: 20,
			pontos: 498
		},

		{
			ano: 2011,
			equipe: "Red Bull ",
			logo: "icons/redbull.png",
			piloto1: "Sebastian Vettel 🇩🇪",
			piloto2: "Mark Webber 🇦🇺",
			corridas: 19,
			vitorias: 12,
			podios: 27,
			pontos: 650
		},

		{
			ano: 2012,
			equipe: "Red Bull ",
			logo: "icons/redbull.png",
			piloto1: "Sebastian Vettel 🇩🇪",
			piloto2: "Mark Webber 🇦🇺",
			corridas: 20,
			vitorias: 7,
			podios: 18,
			pontos: 460
		},

		{
			ano: 2013,
			equipe: "Red Bull ",
			logo: "icons/redbull.png",
			piloto1: "Sebastian Vettel 🇩🇪",
			piloto2: "Mark Webber 🇦🇺",
			corridas: 19,
			vitorias: 13,
			podios: 24,
			pontos: 596
		},

		{
			ano: 2014,
			equipe: "Mercedes",
			logo: "icons/Mercedesa.png",
			piloto1: "Lewis Hamilton 🇬🇧",
			piloto2: "Nico Rosberg 🇩🇪",
			corridas: 19,
			vitorias: 16,
			podios: 31,
			pontos: 701
		},

		{
			ano: 2015,
			equipe: "Mercedes",
			logo: "icons/Mercedesa.png",
			piloto1: "Lewis Hamilton 🇬🇧",
			piloto2: "Nico Rosberg 🇩🇪",
			corridas: 19,
			vitorias: 16,
			podios: 32,
			pontos: 703
		},

		{
			ano: 2016,
			equipe: "Mercedes",
			logo: "icons/Mercedesa.png",
			piloto1: "Nico Rosberg 🇩🇪",
			piloto2: "Lewis Hamilton 🇬🇧",
			corridas: 21,
			vitorias: 19,
			podios: 33,
			pontos: 765
		},

		{
			ano: 2017,
			equipe: "Mercedes",
			logo: "icons/Mercedesa.png",
			piloto1: "Lewis Hamilton 🇬🇧",
			piloto2: "Valtteri Bottas 🇫🇮",
			corridas: 20,
			vitorias: 12,
			podios: 30,
			pontos: 668
		},

		{
			ano: 2018,
			equipe: "Mercedes",
			logo: "icons/Mercedesa.png",
			piloto1: "Lewis Hamilton 🇬🇧",
			piloto2: "Valtteri Bottas 🇫🇮",
			corridas: 21,
			vitorias: 11,
			podios: 29,
			pontos: 655
		},

		{
			ano: 2019,
			equipe: "Mercedes",
			logo: "icons/Mercedesa.png",
			piloto1: "Lewis Hamilton 🇬🇧",
			piloto2: "Valtteri Bottas 🇫🇮",
			corridas: 21,
			vitorias: 15,
			podios: 32,
			pontos: 739
		},


		/* =========================
			 2020
		========================= */

		{
			ano: 2020,
			equipe: "Mercedes",
			logo: "icons/Mercedesa.png",
			piloto1: "Lewis Hamilton 🇬🇧",
			piloto2: "Valtteri Bottas 🇫🇮",
			corridas: 17,
			vitorias: 13,
			podios: 25,
			pontos: 254
		},

		{
			ano: 2021,
			equipe: "Mercedes",
			logo: "icons/Mercedesa.png",
			piloto1: "Lewis Hamilton 🇬🇧",
			piloto2: "Valtteri Bottas 🇫🇮",
			corridas: 22,
			vitorias: 9,
			podios: 28,
			pontos: 613
		},

		{
			ano: 2022,
			equipe: "Red Bull",
			logo: "icons/redbull.png",
			piloto1: "Max Verstappen 🇳🇱",
			piloto2: "Sergio Pérez 🇲🇽",
			corridas: 22,
			vitorias: 17,
			podios: 28,
			pontos: 759
		},

		{
			ano: 2023,
			equipe: "Red Bull",
			logo: "icons/redbull.png",
			piloto1: "Max Verstappen 🇳🇱",
			piloto2: "Sergio Pérez 🇲🇽",
			corridas: 22,
			vitorias: 21,
			podios: 30,
			pontos: 860
		},

		{
			ano: 2024,
			equipe: "McLaren",
			logo: "icons/mclaren.png",
			piloto1: "Lando Norris 🇬🇧",
			piloto2: "Oscar Piastri 🇦🇺",
			corridas: 24,
			vitorias: 6,
			podios: 21,
			pontos: 666
		},

		{
			ano: 2025,
			equipe: "McLaren",
			logo: "icons/mclaren.png",
			piloto1: "Lando Norris 🇬🇧",
			piloto2: "Oscar Piastri 🇦🇺",
			corridas: 24,
			vitorias: 7,
			podios: 18,
			pontos: 833
		}

	];


	/* ==================================================
		 ELEMENTOS
	================================================== */

	const grade =
		document.getElementById("f1TitulosGrade");

	const card =
		document.getElementById("f1TituloCard");

	const cardLogo =
		document.getElementById("f1TituloCardLogo");

	const cardAno =
		document.getElementById("f1TituloCardAno");

	const cardEquipe =
		document.getElementById("f1TituloCardEquipe");

	const cardPiloto1 =
		document.getElementById("f1TituloCardPiloto1");

	const cardPiloto2 =
		document.getElementById("f1TituloCardPiloto2");

	const cardCorridas =
		document.getElementById("f1TituloCardCorridas");

	const cardVitorias =
		document.getElementById("f1TituloCardVitorias");

	const cardPodios =
		document.getElementById("f1TituloCardPodios");

	const cardPontos =
		document.getElementById("f1TituloCardPontos");

	const quantidade =
		document.getElementById("f1TitulosQuantidade");


	/* ==================================================
		 VERIFICAÇÃO
	================================================== */

	if (!grade) {
		console.error(
			"Elemento #f1TitulosGrade não encontrado."
		);

		return;
	}


	/* ==================================================
		 QUANTIDADE
	================================================== */

	if (quantidade) {

		quantidade.textContent =
			titulosF1.length;

	}


	/* ==================================================
		 CRIAR OS TÍTULOS
	================================================== */

	titulosF1.forEach((titulo, index) => {

		const item =
			document.createElement("div");

		item.className =
			"f1-titulo-item";

		item.dataset.index =
			index;


		item.innerHTML = `

      <img
        class="f1-titulo-logo"
        src="${titulo.logo}"
        alt="${titulo.equipe}"
      >

      <span class="f1-titulo-ano">
        ${titulo.ano}
      </span>

      <span class="f1-titulo-equipe">
        ${titulo.equipe}
      </span>

    `;


		/* ================================================
			 HOVER
		================================================ */

		item.addEventListener("mouseenter", () => {

			mostrarCard(titulo);

		});


		item.addEventListener("mouseleave", () => {

			esconderCard();

		});


		/* ================================================
			 MOBILE / TOQUE
		================================================ */

		item.addEventListener("click", (event) => {

			event.preventDefault();

			mostrarCard(titulo);

		});


		grade.appendChild(item);

	});


	/* ==================================================
		 MOSTRAR CARD
	================================================== */

	function mostrarCard(titulo) {

		if (!card) return;


		if (cardLogo) {

			cardLogo.src =
				titulo.logo;

			cardLogo.alt =
				titulo.equipe;

		}


		if (cardAno) {

			cardAno.textContent =
				titulo.ano;

		}


		if (cardEquipe) {

			cardEquipe.textContent =
				titulo.equipe;

		}


		if (cardPiloto1) {

			cardPiloto1.textContent =
				titulo.piloto1;

		}


		if (cardPiloto2) {

			cardPiloto2.textContent =
				titulo.piloto2;

		}


		if (cardCorridas) {

			cardCorridas.textContent =
				titulo.corridas;

		}


		if (cardVitorias) {

			cardVitorias.textContent =
				titulo.vitorias;

		}


		if (cardPodios) {

			cardPodios.textContent =
				titulo.podios;

		}


		if (cardPontos) {

			cardPontos.textContent =
				titulo.pontos;

		}


		card.classList.add("mostrar");

	}


	/* ==================================================
		 ESCONDER CARD
	================================================== */

	function esconderCard() {

		/*
			No computador o card desaparece
			quando o mouse sai do título.

			No celular o usuário pode tocar
			novamente para trocar o título.
		*/

		if (window.innerWidth > 600) {

			if (card) {

				card.classList.remove("mostrar");

			}

		}

	}


	/* ==================================================
		 FECHAR CARD AO CLICAR FORA
	================================================== */

	document.addEventListener("click", (event) => {

		if (
			card &&
			!card.contains(event.target) &&
			!event.target.closest(".f1-titulo-item")
		) {

			card.classList.remove("mostrar");

		}

	});


	/* ==================================================
		 ESC
	================================================== */

	document.addEventListener("keydown", (event) => {

		if (event.key === "Escape" && card) {

			card.classList.remove("mostrar");

		}

	});


})();



/* =========================================================
   CAMPEÕES MUNDIAIS DE PILOTOS
========================================================= */
const campeoesPilotos = [

  {
    ano: 1950,
    piloto: "Giuseppe Farina",
    bandeira: "🇮🇹",
    equipe: "Alfa Romeo",
    logo: "icons/alfa.png",
    estatisticas: {
      corridas: 7,
      vitorias: 3,
      podios: 3,
      poles: 2,
      pontos: 30
    }
  },

  {
    ano: 1951,
    piloto: "Juan Manuel Fangio",
    bandeira: "🇦🇷",
    equipe: "Alfa Romeo",
    logo: "icons/alfa.png",
    estatisticas: {
      corridas: 8,
      vitorias: 3,
      podios: 5,
      poles: 4,
      pontos: 31
    }
  },

  {
    ano: 1952,
    piloto: "Alberto Ascari",
    bandeira: "🇮🇹",
    equipe: "Ferrari",
    logo: "icons/ferrari.png",
    estatisticas: {
      corridas: 8,
      vitorias: 6,
      podios: 6,
      poles: 5,
      pontos: 53
    }
  },

  {
    ano: 1953,
    piloto: "Alberto Ascari",
    bandeira: "🇮🇹",
    equipe: "Ferrari",
    logo: "icons/ferrari.png",
    estatisticas: {
      corridas: 9,
      vitorias: 5,
      podios: 6,
      poles: 4,
      pontos: 46
    }
  },

  {
    ano: 1954,
    piloto: "Juan Manuel Fangio",
    bandeira: "🇦🇷",
    equipe: "Mercedes",
    logo: "icons/Mercedesa.png",
    estatisticas: {
      corridas: 9,
      vitorias: 6,
      podios: 7,
      poles: 5,
      pontos: 42
    }
  },

  {
    ano: 1955,
    piloto: "Juan Manuel Fangio",
    bandeira: "🇦🇷",
    equipe: "Mercedes",
    logo: "icons/Mercedesa.png",
    estatisticas: {
      corridas: 7,
      vitorias: 4,
      podios: 5,
      poles: 2,
      pontos: 40
    }
  },

  {
    ano: 1956,
    piloto: "Juan Manuel Fangio",
    bandeira: "🇦🇷",
    equipe: "Ferrari",
    logo: "icons/ferrari.png",
    estatisticas: {
      corridas: 8,
      vitorias: 3,
      podios: 6,
      poles: 2,
      pontos: 30
    }
  },

  {
    ano: 1957,
    piloto: "Juan Manuel Fangio",
    bandeira: "🇦🇷",
    equipe: "Maserati",
    logo: "icons/Maserati.svg",
    estatisticas: {
      corridas: 8,
      vitorias: 4,
      podios: 6,
      poles: 4,
      pontos: 40
    }
  },

  {
    ano: 1958,
    piloto: "Mike Hawthorn",
    bandeira: "🇬🇧",
    equipe: "Ferrari",
    logo: "icons/ferrari.png",
    estatisticas: {
      corridas: 11,
      vitorias: 1,
      podios: 7,
      poles: 4,
      pontos: 42
    }
  },

  {
    ano: 1959,
    piloto: "Jack Brabham",
    bandeira: "🇦🇺",
    equipe: "Cooper",
    logo: "icons/cooper.png",
    estatisticas: {
      corridas: 9,
      vitorias: 2,
      podios: 5,
      poles: 1,
      pontos: 31
    }
  },

  {
    ano: 1960,
    piloto: "Jack Brabham",
    bandeira: "🇦🇺",
    equipe: "Cooper",
    logo: "icons/cooper.png",
    estatisticas: {
      corridas: 10,
      vitorias: 5,
      podios: 5,
      poles: 3,
      pontos: 43
    }
  },

  {
    ano: 1961,
    piloto: "Phil Hill",
    bandeira: "🇺🇸",
    equipe: "Ferrari",
    logo: "icons/ferrari.png",
    estatisticas: {
      corridas: 8,
      vitorias: 2,
      podios: 6,
      poles: 5,
      pontos: 34
    }
  },

  {
    ano: 1962,
    piloto: "Graham Hill",
    bandeira: "🇬🇧",
    equipe: "BRM",
    logo: "icons/brm.png",
    estatisticas: {
      corridas: 9,
      vitorias: 6,
      podios: 4,
      poles: 1,
      pontos: 42
    }
  },

  {
    ano: 1963,
    piloto: "Jim Clark",
    bandeira: "🇬🇧",
    equipe: "Lotus",
    logo: "icons/lotus.png",
    estatisticas: {
      corridas: 10,
      vitorias: 7,
      podios: 9,
      poles: 7,
      pontos: 54
    }
  },

  {
    ano: 1964,
    piloto: "John Surtees",
    bandeira: "🇬🇧",
    equipe: "Ferrari",
    logo: "icons/ferrari.png",
    estatisticas: {
      corridas: 10,
      vitorias: 2,
      podios: 6,
      poles: 2,
      pontos: 40
    }
  },

  {
    ano: 1965,
    piloto: "Jim Clark",
    bandeira: "🇬🇧",
    equipe: "Lotus",
    logo: "icons/lotus.png",
    estatisticas: {
      corridas: 10,
      vitorias: 6,
      podios: 6,
      poles: 6,
      pontos: 54
    }
  },

  {
    ano: 1966,
    piloto: "Jack Brabham",
    bandeira: "🇦🇺",
    equipe: "Brabham",
    logo: "icons/brabham.png",
    estatisticas: {
      corridas: 9,
      vitorias: 4,
      podios: 5,
      poles: 3,
      pontos: 42
    }
  },

  {
    ano: 1967,
    piloto: "Denny Hulme",
    bandeira: "🇦🇺",
    equipe: "Brabham",
    logo: "icons/brabham.png",
    estatisticas: {
      corridas: 11,
      vitorias: 2,
      podios: 8,
      poles: 0,
      pontos: 51
    }
  },

  {
    ano: 1968,
    piloto: "Graham Hill",
    bandeira: "🇬🇧",
    equipe: "Lotus",
    logo: "icons/lotus.png",
    estatisticas: {
      corridas: 12,
      vitorias: 3,
      podios: 6,
      poles: 2,
      pontos: 48
    }
  },

  {
    ano: 1969,
    piloto: "Jackie Stewart",
    bandeira: "🇬🇧",
    equipe: "Matra",
    logo: "icons/matra.png",
    estatisticas: {
      corridas: 11,
      vitorias: 6,
      podios: 7,
      poles: 2,
      pontos: 63
    }
  },

  {
    ano: 1970,
    piloto: "Jochen Rindt",
    bandeira: "🇦🇹",
    equipe: "Lotus",
    logo: "icons/lotus.png",
    estatisticas: {
      corridas: 13,
      vitorias: 5,
      podios: 5,
      poles: 3,
      pontos: 45
    }
  },

  {
    ano: 1971,
    piloto: "Jackie Stewart",
    bandeira: "🇬🇧",
    equipe: "Tyrrell",
    logo: "icons/tyrrell.png",
    estatisticas: {
      corridas: 11,
      vitorias: 6,
      podios: 7,
      poles: 6,
      pontos: 62
    }
  },

  {
    ano: 1972,
    piloto: "Emerson Fittipaldi",
    bandeira: "🇧🇷",
    equipe: "Lotus",
    logo: "icons/lotus.png",
    estatisticas: {
      corridas: 12,
      vitorias: 5,
      podios: 8,
      poles: 3,
      pontos: 61
    }
  },

  {
    ano: 1973,
    piloto: "Jackie Stewart",
    bandeira: "🇬🇧",
    equipe: "Tyrrell",
    logo: "icons/tyrrell.png",
    estatisticas: {
      corridas: 15,
      vitorias: 5,
      podios: 8,
      poles: 3,
      pontos: 71
    }
  },

  {
    ano: 1974,
    piloto: "Emerson Fittipaldi",
    bandeira: "🇧🇷",
    equipe: "McLaren",
    logo: "icons/mclaren.png",
    estatisticas: {
      corridas: 15,
      vitorias: 3,
      podios: 7,
      poles: 2,
      pontos: 55
    }
  },

  {
    ano: 1975,
    piloto: "Niki Lauda",
    bandeira: "🇦🇹",
    equipe: "Ferrari",
    logo: "icons/ferrari.png",
    estatisticas: {
      corridas: 14,
      vitorias: 5,
      podios: 8,
      poles: 9,
      pontos: 64.5
    }
  },

  {
    ano: 1976,
    piloto: "James Hunt",
    bandeira: "🇬🇧",
    equipe: "McLaren",
    logo: "icons/mclaren.png",
    estatisticas: {
      corridas: 16,
      vitorias: 6,
      podios: 8,
      poles: 8,
      pontos: 69
    }
  },

  {
    ano: 1977,
    piloto: "Niki Lauda",
    bandeira: "🇦🇹",
    equipe: "Ferrari",
    logo: "icons/ferrari.png",
    estatisticas: {
      corridas: 17,
      vitorias: 3,
      podios: 10,
      poles: 2,
      pontos: 72
    }
  },

  {
    ano: 1978,
    piloto: "Mario Andretti",
    bandeira: "🇺🇸",
    equipe: "Lotus",
    logo: "icons/lotus.png",
    estatisticas: {
      corridas: 16,
      vitorias: 6,
      podios: 7,
      poles: 8,
      pontos: 64
    }
  },

  {
    ano: 1979,
    piloto: "Jody Scheckter",
    bandeira: "🇿🇦",
    equipe: "Ferrari",
    logo: "icons/ferrari.png",
    estatisticas: {
      corridas: 15,
      vitorias: 3,
      podios: 6,
      poles: 1,
      pontos: 51
    }
  },

  {
    ano: 1980,
    piloto: "Alan Jones",
    bandeira: "🇦🇺",
    equipe: "Williams",
    logo: "icons/WilliamsF1.png",
    estatisticas: {
      corridas: 14,
      vitorias: 5,
      podios: 10,
      poles: 3,
      pontos: 67
    }
  },

  {
    ano: 1981,
    piloto: "Nelson Piquet",
    bandeira: "🇧🇷",
    equipe: "Brabham",
    logo: "icons/brabham.png",
    estatisticas: {
      corridas: 15,
      vitorias: 3,
      podios: 7,
      poles: 4,
      pontos: 50
    }
  },

  {
    ano: 1982,
    piloto: "Keke Rosberg",
    bandeira: "🇫🇮",
    equipe: "Williams",
    logo: "icons/WilliamsF1.png",
    estatisticas: {
      corridas: 16,
      vitorias: 1,
      podios: 6,
      poles: 1,
      pontos: 44
    }
  },

  {
    ano: 1983,
    piloto: "Nelson Piquet",
    bandeira: "🇧🇷",
    equipe: "Brabham",
    logo: "icons/brabham.png",
    estatisticas: {
      corridas: 15,
      vitorias: 3,
      podios: 8,
      poles: 1,
      pontos: 59
    }
  },

  {
    ano: 1984,
    piloto: "Niki Lauda",
    bandeira: "🇦🇹",
    equipe: "McLaren",
    logo: "icons/mclaren.png",
    estatisticas: {
      corridas: 16,
      vitorias: 5,
      podios: 9,
      poles: 0,
      pontos: 72
    }
  },

  {
    ano: 1985,
    piloto: "Alain Prost",
    bandeira: "🇫🇷",
    equipe: "McLaren",
    logo: "icons/mclaren.png",
    estatisticas: {
      corridas: 16,
      vitorias: 5,
      podios: 11,
      poles: 2,
      pontos: 73
    }
  },

  {
    ano: 1986,
    piloto: "Alain Prost",
    bandeira: "🇫🇷",
    equipe: "McLaren",
    logo: "icons/mclaren.png",
    estatisticas: {
      corridas: 16,
      vitorias: 4,
      podios: 11,
      poles: 1,
      pontos: 72
    }
  },

  {
    ano: 1987,
    piloto: "Nelson Piquet",
    bandeira: "🇧🇷",
    equipe: "Williams",
    logo: "icons/WilliamsF1.png",
    estatisticas: {
      corridas: 16,
      vitorias: 3,
      podios: 11,
      poles: 4,
      pontos: 73
    }
  },

  {
    ano: 1988,
    piloto: "Ayrton Senna",
    bandeira: "🇧🇷",
    equipe: "McLaren",
    logo: "icons/mclaren.png",
    estatisticas: {
      corridas: 16,
      vitorias: 8,
      podios: 11,
      poles: 13,
      pontos: 90
    }
  },

  {
    ano: 1989,
    piloto: "Alain Prost",
    bandeira: "🇫🇷",
    equipe: "McLaren",
    logo: "icons/mclaren.png",
    estatisticas: {
      corridas: 16,
      vitorias: 4,
      podios: 11,
      poles: 2,
      pontos: 76
    }
  },

  {
    ano: 1990,
    piloto: "Ayrton Senna",
    bandeira: "🇧🇷",
    equipe: "McLaren",
    logo: "icons/mclaren.png",
    estatisticas: {
      corridas: 16,
      vitorias: 6,
      podios: 11,
      poles: 10,
      pontos: 78
    }
  },

  {
    ano: 1991,
    piloto: "Ayrton Senna",
    bandeira: "🇧🇷",
    equipe: "McLaren",
    logo: "icons/mclaren.png",
    estatisticas: {
      corridas: 16,
      vitorias: 7,
      podios: 12,
      poles: 8,
      pontos: 96
    }
  },

  {
    ano: 1992,
    piloto: "Nigel Mansell",
    bandeira: "🇬🇧",
    equipe: "Williams",
    logo: "icons/WilliamsF1.png",
    estatisticas: {
      corridas: 16,
      vitorias: 9,
      podios: 12,
      poles: 14,
      pontos: 108
    }
  },

  {
    ano: 1993,
    piloto: "Alain Prost",
    bandeira: "🇫🇷",
    equipe: "Williams",
    logo: "icons/WilliamsF1.png",
    estatisticas: {
      corridas: 16,
      vitorias: 7,
      podios: 12,
      poles: 13,
      pontos: 99
    }
  },

  {
    ano: 1994,
    piloto: "Michael Schumacher",
    bandeira: "🇩🇪",
    equipe: "Benetton",
    logo: "icons/benetton.png",
    estatisticas: {
      corridas: 16,
      vitorias: 8,
      podios: 10,
      poles: 6,
      pontos: 92
    }
  },

  {
    ano: 1995,
    piloto: "Michael Schumacher",
    bandeira: "🇩🇪",
    equipe: "Benetton",
    logo: "icons/benetton.png",
    estatisticas: {
      corridas: 17,
      vitorias: 9,
      podios: 11,
      poles: 4,
      pontos: 102
    }
  },

  {
    ano: 1996,
    piloto: "Damon Hill",
    bandeira: "🇬🇧",
    equipe: "Williams",
    logo: "icons/WilliamsF1.png",
    estatisticas: {
      corridas: 16,
      vitorias: 8,
      podios: 10,
      poles: 9,
      pontos: 97
    }
  },

  {
    ano: 1997,
    piloto: "Jacques Villeneuve",
    bandeira: "🇨🇦",
    equipe: "Williams",
    logo: "icons/WilliamsF1.png",
    estatisticas: {
      corridas: 17,
      vitorias: 7,
      podios: 8,
      poles: 10,
      pontos: 81
    }
  },

  {
    ano: 1998,
    piloto: "Mika Häkkinen",
    bandeira: "🇫🇮",
    equipe: "McLaren",
    logo: "icons/mclaren.png",
    estatisticas: {
      corridas: 16,
      vitorias: 8,
      podios: 11,
      poles: 9,
      pontos: 100
    }
  },

  {
    ano: 1999,
    piloto: "Mika Häkkinen",
    bandeira: "🇫🇮",
    equipe: "McLaren",
    logo: "icons/mclaren.png",
    estatisticas: {
      corridas: 16,
      vitorias: 5,
      podios: 10,
      poles: 11,
      pontos: 76
    }
  },

  {
    ano: 2000,
    piloto: "Michael Schumacher",
    bandeira: "🇩🇪",
    equipe: "Ferrari",
    logo: "icons/ferrari.png",
    estatisticas: {
      corridas: 17,
      vitorias: 9,
      podios: 12,
      poles: 9,
      pontos: 108
    }
  },

  {
    ano: 2001,
    piloto: "Michael Schumacher",
    bandeira: "🇩🇪",
    equipe: "Ferrari",
    logo: "icons/ferrari.png",
    estatisticas: {
      corridas: 17,
      vitorias: 9,
      podios: 14,
      poles: 11,
      pontos: 123
    }
  },

  {
    ano: 2002,
    piloto: "Michael Schumacher",
    bandeira: "🇩🇪",
    equipe: "Ferrari",
    logo: "icons/ferrari.png",
    estatisticas: {
      corridas: 17,
      vitorias: 11,
      podios: 17,
      poles: 7,
      pontos: 144
    }
  },

  {
    ano: 2003,
    piloto: "Michael Schumacher",
    bandeira: "🇩🇪",
    equipe: "Ferrari",
    logo: "icons/ferrari.png",
    estatisticas: {
      corridas: 16,
      vitorias: 6,
      podios: 8,
      poles: 5,
      pontos: 93
    }
  },

  {
    ano: 2004,
    piloto: "Michael Schumacher",
    bandeira: "🇩🇪",
    equipe: "Ferrari",
    logo: "icons/ferrari.png",
    estatisticas: {
      corridas: 18,
      vitorias: 13,
      podios: 15,
      poles: 8,
      pontos: 148
    }
  },

  {
    ano: 2005,
    piloto: "Fernando Alonso",
    bandeira: "🇪🇸",
    equipe: "Renault",
    logo: "icons/renault.png",
    estatisticas: {
      corridas: 19,
      vitorias: 7,
      podios: 15,
      poles: 6,
      pontos: 133
    }
  },

  {
    ano: 2006,
    piloto: "Fernando Alonso",
    bandeira: "🇪🇸",
    equipe: "Renault",
    logo: "icons/renault.png",
    estatisticas: {
      corridas: 18,
      vitorias: 7,
      podios: 14,
      poles: 6,
      pontos: 134
    }
  },

  {
    ano: 2007,
    piloto: "Kimi Räikkönen",
    bandeira: "🇫🇮",
    equipe: "Ferrari",
    logo: "icons/ferrari.png",
    estatisticas: {
      corridas: 17,
      vitorias: 6,
      podios: 12,
      poles: 3,
      pontos: 110
    }
  },

  {
    ano: 2008,
    piloto: "Lewis Hamilton",
    bandeira: "🇬🇧",
    equipe: "McLaren",
    logo: "icons/mclaren.png",
    estatisticas: {
      corridas: 18,
      vitorias: 5,
      podios: 10,
      poles: 7,
      pontos: 98
    }
  },

  {
    ano: 2009,
    piloto: "Jenson Button",
    bandeira: "🇬🇧",
    equipe: "Brawn GP",
    logo: "icons/brawn.png",
    estatisticas: {
      corridas: 17,
      vitorias: 6,
      podios: 9,
      poles: 4,
      pontos: 95
    }
  },

  {
    ano: 2010,
    piloto: "Sebastian Vettel",
    bandeira: "🇩🇪",
    equipe: "Red Bull",
    logo: "icons/redbull.png",
    estatisticas: {
      corridas: 19,
      vitorias: 5,
      podios: 10,
      poles: 10,
      pontos: 256
    }
  },

  {
    ano: 2011,
    piloto: "Sebastian Vettel",
    bandeira: "🇩🇪",
    equipe: "Red Bull",
    logo: "icons/redbull.png",
    estatisticas: {
      corridas: 19,
      vitorias: 11,
      podios: 17,
      poles: 15,
      pontos: 392
    }
  },

  {
    ano: 2012,
    piloto: "Sebastian Vettel",
    bandeira: "🇩🇪",
    equipe: "Red Bull",
    logo: "icons/redbull.png",
    estatisticas: {
      corridas: 20,
      vitorias: 5,
      podios: 10,
      poles: 6,
      pontos: 281
    }
  },

  {
    ano: 2013,
    piloto: "Sebastian Vettel",
    bandeira: "🇩🇪",
    equipe: "Red Bull",
    logo: "icons/redbull.png",
    estatisticas: {
      corridas: 19,
      vitorias: 13,
      podios: 16,
      poles: 9,
      pontos: 397
    }
  },

  {
    ano: 2014,
    piloto: "Lewis Hamilton",
    bandeira: "🇬🇧",
    equipe: "Mercedes",
    logo: "icons/Mercedesa.png",
    estatisticas: {
      corridas: 19,
      vitorias: 11,
      podios: 16,
      poles: 7,
      pontos: 384
    }
  },

  {
    ano: 2015,
    piloto: "Lewis Hamilton",
    bandeira: "🇬🇧",
    equipe: "Mercedes",
    logo: "icons/Mercedesa.png",
    estatisticas: {
      corridas: 19,
      vitorias: 10,
      podios: 17,
      poles: 11,
      pontos: 381
    }
  },

  {
    ano: 2016,
    piloto: "Nico Rosberg",
    bandeira: "🇩🇪",
    equipe: "Mercedes",
    logo: "icons/Mercedesa.png",
    estatisticas: {
      corridas: 21,
      vitorias: 9,
      podios: 16,
      poles: 8,
      pontos: 385
    }
  },

  {
    ano: 2017,
    piloto: "Lewis Hamilton",
    bandeira: "🇬🇧",
    equipe: "Mercedes",
    logo: "icons/Mercedesa.png",
    estatisticas: {
      corridas: 20,
      vitorias: 9,
      podios: 13,
      poles: 11,
      pontos: 363
    }
  },

  {
    ano: 2018,
    piloto: "Lewis Hamilton",
    bandeira: "🇬🇧",
    equipe: "Mercedes",
    logo: "icons/Mercedesa.png",
    estatisticas: {
      corridas: 21,
      vitorias: 11,
      podios: 17,
      poles: 11,
      pontos: 408
    }
  },

  {
    ano: 2019,
    piloto: "Lewis Hamilton",
    bandeira: "🇬🇧",
    equipe: "Mercedes",
    logo: "icons/Mercedesa.png",
    estatisticas: {
      corridas: 21,
      vitorias: 11,
      podios: 17,
      poles: 5,
      pontos: 413
    }
  },

  {
    ano: 2020,
    piloto: "Lewis Hamilton",
    bandeira: "🇬🇧",
    equipe: "Mercedes",
    logo: "icons/Mercedesa.png",
    estatisticas: {
      corridas: 17,
      vitorias: 11,
      podios: 14,
      poles: 10,
      pontos: 347
    }
  },

  {
    ano: 2021,
    piloto: "Max Verstappen",
    bandeira: "🇳🇱",
    equipe: "Red Bull",
    logo: "icons/redbull.png",
    estatisticas: {
      corridas: 22,
      vitorias: 10,
      podios: 18,
      poles: 10,
      pontos: 395.5
    }
  },

  {
    ano: 2022,
    piloto: "Max Verstappen",
    bandeira: "🇳🇱",
    equipe: "Red Bull",
    logo: "icons/redbull.png",
    estatisticas: {
      corridas: 22,
      vitorias: 15,
      podios: 17,
      poles: 7,
      pontos: 454
    }
  },

  {
    ano: 2023,
    piloto: "Max Verstappen",
    bandeira: "🇳🇱",
    equipe: "Red Bull",
    logo: "icons/redbull.png",
    estatisticas: {
      corridas: 22,
      vitorias: 19,
      podios: 21,
      poles: 12,
      pontos: 575
    }
  },

  {
    ano: 2024,
    piloto: "Max Verstappen",
    bandeira: "🇳🇱",
    equipe: "Red Bull",
    logo: "icons/redbull.png",
    estatisticas: {
      corridas: 24,
      vitorias: 9,
      podios: 14,
      poles: 8,
      pontos: 437
    }
  },

  {
    ano: 2025,
    piloto: "Lando Norris",
    bandeira: "🇬🇧",
    equipe: "McLaren",
    logo: "icons/mclaren.png",
    estatisticas: {
      corridas: 24,
      vitorias: 7,
      podios: 18,
      poles: 7,
      pontos: 423
    }
  }

];



/* =========================================================
   CONFIGURAÇÃO DOS CARDS
========================================================= */

const CONFIGURACAO_CARDS = {

    /* Posição padrão */
    padrao: {

        /* Quanto o card sobe/desce */
        deslocamentoY: -40,

        /* Quanto o card vai para esquerda/direita */
        deslocamentoX: 0

    },


    /* =====================================================
       CONFIGURAÇÕES INDIVIDUAIS
       
       Se algum ano precisar de ajuste diferente,
       coloque aqui.
       
       Exemplo:
       
       1988: {
           deslocamentoY: -80,
           deslocamentoX: 20
       }
    ===================================================== */

    // 1988: {
    //     deslocamentoY: -80,
    //     deslocamentoX: 20
    // },

};


/* =========================================================
   ELEMENTOS
========================================================= */

const containerPilotos =
    document.getElementById(
        "f1-campeoes-pilotos-timeline"
    );


/* =========================================================
   PEGAR CONFIGURAÇÃO
========================================================= */

function pegarConfiguracaoCard(ano) {

    return {

        ...CONFIGURACAO_CARDS.padrao,

        ...(CONFIGURACAO_CARDS[ano] || {})

    };

}


/* =========================================================
   LIMPAR POSIÇÃO DO CARD
========================================================= */

function limparPosicaoCard(card) {

    card.style.left = "";
    card.style.top = "";
    card.style.right = "";
    card.style.bottom = "";
    card.style.transform = "";

}


/* =========================================================
   FECHAR TODOS OS CARDS
========================================================= */

function fecharTodosCards() {

    document
        .querySelectorAll(
            ".f1-campeao-piloto-card.ativo"
        )
        .forEach(card => {

            card.classList.remove("ativo");

            limparPosicaoCard(card);

        });

}


/* =========================================================
   POSICIONAR CARD NO CENTRO DA TELA
========================================================= */

function posicionarCard(card, ano) {

    const config =
        pegarConfiguracaoCard(ano);


    /*
       IMPORTANTE:

       O card usa position: fixed.

       Assim ele fica centralizado na tela,
       independentemente de onde o ano esteja
       na timeline.

       Isso evita que os cards das colunas
       inferiores saiam da tela.
    */


    card.style.left = "50%";
    card.style.top = "50%";

    card.style.right = "auto";
    card.style.bottom = "auto";


    /*
       translateX(-50%)
       centraliza horizontalmente.

       translateY(-50%)
       centraliza verticalmente.

       Depois aplicamos os ajustes manuais.
    */

    card.style.transform =
        `
        translate(
            calc(-50% + ${config.deslocamentoX}px),
            calc(-50% + ${config.deslocamentoY}px)
        )
        scale(1)
        `;
}


/* =========================================================
   ABRIR CARD
========================================================= */

function abrirCard(card, ano) {

    fecharTodosCards();


    card.classList.add("ativo");


    /*
       Espera o CSS mostrar o card
       para depois aplicar a posição.
    */

    requestAnimationFrame(() => {

        posicionarCard(
            card,
            ano
        );

    });

}


/* =========================================================
   CRIAR TIMELINE
========================================================= */

function criarTimelinePilotos() {

    if (!containerPilotos) {

        console.warn(
            "Container dos campeões de pilotos não encontrado."
        );

        return;

    }


    containerPilotos.innerHTML = "";


    campeoesPilotos.forEach(campeao => {

        const item =
            document.createElement("div");


        item.className =
            "f1-campeao-piloto";


        item.innerHTML = `

            <div class="f1-campeao-piloto-conteudo">

                <span class="f1-campeao-piloto-ano">
                    ${campeao.ano}
                </span>

                <span class="f1-campeao-piloto-nome">
                    ${campeao.piloto}
                </span>

            </div>


            <div class="f1-campeao-piloto-card">

                <button
                    type="button"
                    class="f1-campeao-piloto-card-fechar"
                    aria-label="Fechar"
                >
                    ×
                </button>


                <div class="f1-campeao-piloto-card-header">

                    <span class="f1-campeao-piloto-card-ano">
                        ${campeao.ano}
                    </span>

                    <span class="f1-campeao-piloto-card-bandeira">
                        ${campeao.bandeira}
                    </span>

                </div>


                <h3 class="f1-campeao-piloto-card-nome">
                    ${campeao.piloto}
                </h3>


                <div class="f1-campeao-piloto-card-equipe">

                    <img
                        src="${campeao.logo}"
                        alt="Logo da ${campeao.equipe}"
                        class="f1-campeao-piloto-card-logo"
                    >

                    <span>
                        ${campeao.equipe}
                    </span>

                </div>


                <div class="f1-campeao-piloto-card-linha"></div>


                <div class="f1-campeao-piloto-estatisticas">

                    <div class="f1-campeao-piloto-estatistica">

                        <span>🏁</span>

                        <div>

                            <small>CORRIDAS</small>

                            <strong>
                                ${campeao.estatisticas.corridas}
                            </strong>

                        </div>

                    </div>


                    <div class="f1-campeao-piloto-estatistica">

                        <span>🏆</span>

                        <div>

                            <small>VITÓRIAS</small>

                            <strong>
                                ${campeao.estatisticas.vitorias}
                            </strong>

                        </div>

                    </div>


                    <div class="f1-campeao-piloto-estatistica">

                        <span>🥇</span>

                        <div>

                            <small>PÓDIOS</small>

                            <strong>
                                ${campeao.estatisticas.podios}
                            </strong>

                        </div>

                    </div>


                    <div class="f1-campeao-piloto-estatistica">

                        <span>📊</span>

                        <div>

                            <small>PONTOS</small>

                            <strong>
                                ${campeao.estatisticas.pontos}
                            </strong>

                        </div>

                    </div>

                </div>


                <div class="f1-campeao-piloto-card-footer">

                    <span>
                        CAMPEÃO MUNDIAL
                    </span>

                </div>

            </div>

        `;


        containerPilotos.appendChild(item);


        /* =================================================
           ELEMENTOS
        ================================================= */

        const card =
            item.querySelector(
                ".f1-campeao-piloto-card"
            );


        const fechar =
            item.querySelector(
                ".f1-campeao-piloto-card-fechar"
            );


        /* =================================================
           CLICAR NO ANO / CAMPEÃO
        ================================================= */

        item.addEventListener(
            "click",
            event => {

                /*
                   Se clicou no botão fechar,
                   não faz nada aqui.
                */

                if (
                    event.target.closest(
                        ".f1-campeao-piloto-card-fechar"
                    )
                ) {

                    return;

                }


                event.stopPropagation();


                /*
                   Se o card já estiver aberto,
                   fecha.
                */

                if (
                    card.classList.contains("ativo")
                ) {

                    card.classList.remove("ativo");

                    limparPosicaoCard(card);

                    return;

                }


                /*
                   Abre no centro.
                */

                abrirCard(
                    card,
                    campeao.ano
                );

            }
        );


        /* =================================================
           BOTÃO FECHAR
        ================================================= */

        fechar.addEventListener(
            "click",
            event => {

                event.preventDefault();

                event.stopPropagation();


                card.classList.remove(
                    "ativo"
                );


                limparPosicaoCard(card);

            }
        );

    });

}


/* =========================================================
   CLICAR FORA
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !event.target.closest(
                ".f1-campeao-piloto"
            )
        ) {

            fecharTodosCards();

        }

    }
);


/* =========================================================
   ESC FECHA
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            fecharTodosCards();

        }

    }
);


/* =========================================================
   REDIMENSIONAR TELA
========================================================= */

window.addEventListener(
    "resize",
    () => {

        const card =
            document.querySelector(
                ".f1-campeao-piloto-card.ativo"
            );


        if (!card) {

            return;

        }


        const ano =
            card
                .querySelector(
                    ".f1-campeao-piloto-card-ano"
                )
                ?.textContent
                .trim();


        if (!ano) {

            return;

        }


        posicionarCard(
            card,
            ano
        );

    }
);


/* =========================================================
   INICIAR
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        criarTimelinePilotos
    );

} else {

    criarTimelinePilotos();

}



/* =========================================================
   GENEALOGIA F1
========================================================= */


/* =========================================================
   DADOS
========================================================= */

const genealogiasF1 = [

    {
        nome: "Ferrari",

        equipes: [

            {
                nome: "Ferrari",
                inicio: 1950,
                fim: 2026,
                cor: "#D40000",
                logo: "icons/ferrari.png"
            }

        ]
    },


    {
        nome: "McLaren",

        equipes: [

            {
                nome: "McLaren",
                inicio: 1966,
                fim: 2026,
                cor: "#FF8000",
                logo: "icons/mcl (1).png"
            }

        ]
    },


    {
        nome: "Mercedes",

        equipes: [

            {
                nome: "Tyrrell",
                inicio: 1970,
                fim: 1998,
                cor: "#168A45",
                logo: "icons/tyrrell.png"
            },

            {
                nome: "BAR",
                inicio: 1999,
                fim: 2005,
                cor: "#BDBDBD",
                logo: "icons/bar.png"
            },

            {
                nome: "Honda",
                inicio: 2006,
                fim: 2008,
                cor: "#FFFFFF",
                logo: "icons/honda.png"
            },

            {
                nome: "Brawn",
                inicio: 2009,
                fim: 2009,
                cor: "#B6FF00",
                logo: "icons/brawn.png"
            },

            {
                nome: "Mercedes",
                inicio: 2010,
                fim: 2026,
                cor: "#00A19C",
                logo: "icons/Mercedesa.png"
            }

        ]
    },


    {
        nome: "Williams",

        equipes: [

            {
                nome: "Williams",
                inicio: 1978,
                fim: 2026,
                cor: "#05A9D9",
                logo: "icons/WilliamsF1.png"
            }

        ]
    },


    {
        nome: "Alpine",

        equipes: [

            {
                nome: "Toleman",
                inicio: 1981,
                fim: 1985,
                cor: "#FFFFFF",
                logo: "icons/toleman.png"
            },

            {
                nome: "Benetton",
                inicio: 1986,
                fim: 2001,
                cor: "#008C45",
                logo: "icons/benetton.png"
            },

            {
                nome: "Renault",
                inicio: 2002,
                fim: 2010,
                cor: "#FFD700",
                logo: "icons/renault.png"
            },

            {
                nome: "Lotus Renault",
                inicio: 2011,
                fim: 2011,
                cor: "#111111",
                logo: "icons/lotus-renault.png"
            },

            {
                nome: "Lotus",
                inicio: 2012,
                fim: 2015,
                cor: "#111111",
                logo: "icons/lotus.png"
            },

            {
                nome: "Renault",
                inicio: 2016,
                fim: 2020,
                cor: "#FFD700",
                logo: "icons/renault.png"
            },

            {
                nome: "Alpine",
                inicio: 2021,
                fim: 2026,
                cor: "#ff00b4",
                logo: "icons/AlpineF1.png"
            }

        ]
    },


    {
        nome: "Racing Bulls",

        equipes: [

            {
                nome: "Minardi",
                inicio: 1985,
                fim: 2005,
                cor: "#333333",
                logo: "icons/minardi.png"
            },

            {
                nome: "Toro Rosso",
                inicio: 2006,
                fim: 2019,
                cor: "#1E3A8A",
                logo: "icons/ToroRosso.png"
            },

            {
                nome: "AlphaTauri",
                inicio: 2020,
                fim: 2023,
                cor: "#EEEEEE",
                logo: "icons/AlphaTauri.png"
            },

            {
                nome: "RB",
                inicio: 2024,
                fim: 2026,
                cor: "#6699FF",
                logo: "icons/racingbulls.svg"
            }

        ]
    },


    {
        nome: "Aston Martin",

        equipes: [

            {
                nome: "Jordan",
                inicio: 1991,
                fim: 2005,
                cor: "#FFD700",
                logo: "icons/jordan.png"
            },

            {
                nome: "Midland",
                inicio: 2006,
                fim: 2006,
                cor: "#777777",
                logo: "icons/midland.png"
            },

            {
                nome: "Spyker",
                inicio: 2007,
                fim: 2007,
                cor: "#E87511",
                logo: "icons/spyker.png"
            },

            {
                nome: "Force India",
                inicio: 2008,
                fim: 2018,
                cor: "#EEEEEE",
                logo: "icons/force.svg"
            },

            {
                nome: "Racing Point",
                inicio: 2019,
                fim: 2020,
                cor: "#F596C8",
                logo: "icons/rp.svg"
            },

            {
                nome: "Aston Martin",
                inicio: 2021,
                fim: 2026,
                cor: "#006F62",
                logo: "icons/aston.png"
            }

        ]
    },


    {
        nome: "Audi",

        equipes: [

            {
                nome: "Sauber",
                inicio: 1993,
                fim: 2005,
                cor: "#777777",
                logo: "icons/sauber.png"
            },

            {
                nome: "BMW Sauber",
                inicio: 2006,
                fim: 2009,
                cor: "#FFFFFF",
                logo: "icons/bmw.png"
            },

            {
                nome: "Sauber",
                inicio: 2010,
                fim: 2017,
                cor: "#777777",
                logo: "icons/sauber.png"
            },

            {
                nome: "Alfa Romeo",
                inicio: 2018,
                fim: 2023,
                cor: "#8B0000",
                logo: "icons/alfa.png"
            },

            {
                nome: "Sauber",
                inicio: 2024,
                fim: 2025,
                cor: "#008000",
                logo: "icons/kick.png"
            },

            {
                nome: "Audi",
                inicio: 2026,
                fim: 2026,
                cor: "#D5D5D5",
                logo: "icons/audi.png"
            }

        ]
    },


    {
        nome: "Red Bull",

        equipes: [

            {
                nome: "Stewart",
                inicio: 1997,
                fim: 1999,
                cor: "#FFFFFF",
                logo: "icons/stewart.png"
            },

            {
                nome: "Jaguar",
                inicio: 2000,
                fim: 2004,
                cor: "#00A651",
                logo: "icons/jaguar.png"
            },

            {
                nome: "Red Bull",
                inicio: 2005,
                fim: 2026,
                cor: "#0600EF",
                logo: "icons/redbull.png"
            }

        ]
    },


    {
        nome: "Haas",

        equipes: [

            {
                nome: "Haas",
                inicio: 2016,
                fim: 2026,
                cor: "#FFFFFF",
                logo: "icons/HaasF1.png"
            }

        ]
    },


    {
        nome: "Cadillac",

        equipes: [

            {
                nome: "Cadillac",
                inicio: 2026,
                fim: 2026,
                cor: "#111111",
                logo: "icons/cadillac.png"
            }

        ]
    }

];


/* =========================================================
   ELEMENTOS
========================================================= */

const linesContainer =
    document.getElementById("f1-lines");

const card =
    document.getElementById("f1-card-linha");

const cardLogo =
    document.getElementById("f1-card-linha-logo");

const cardPeriod =
    document.getElementById("f1-card-linha-period");

const cardName =
    document.getElementById("f1-card-linha-name");

const cardLineage =
    document.getElementById("f1-card-linha-lineage");

const cardClose =
    document.getElementById("f1-card-linha-close");


/* =========================================================
   CRIAR EQUIPE
========================================================= */

function createTeam(
    team,
    track,
    lineage
) {

    const bar =
        document.createElement("button");


    bar.type =
        "button";


    bar.className =
        "f1-team";


    bar.style.setProperty(
        "--team-color",
        team.cor
    );

	const cor = team.cor.toLowerCase();

if (
    cor === "#ffffff" ||
    cor === "#fff" ||
    cor === "#eeeeee" ||
    cor === "#d5d5d5" ||
    cor === "#bdbdbd"
) {
    bar.classList.add("light-team");
}


    /* =====================================================
       LOGO
    ===================================================== */

    if(team.logo) {

        const img =
            document.createElement("img");


        img.src =
            team.logo;


        img.alt =
            team.nome;


        img.onerror = () => {

            img.remove();

        };


        bar.appendChild(img);

    }


    /* =====================================================
       NOME
    ===================================================== */

    const name =
        document.createElement("span");


    name.textContent =
        team.nome;


    bar.appendChild(name);


    /* =====================================================
       CARD
    ===================================================== */

    bar.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            showCard(
                team,
                lineage
            );

        }
    );


    track.appendChild(bar);

}


/* =========================================================
   CRIAR LINHA
========================================================= */

function createLine(lineage) {

    const line =
        document.createElement("div");


    line.className =
        "f1-line";


    /* =====================================================
       NOME
    ===================================================== */

    const name =
        document.createElement("div");


    name.className =
        "f1-line-name";


    name.textContent =
        lineage.nome;


    line.appendChild(name);


    /* =====================================================
       TRACK
    ===================================================== */

    const track =
        document.createElement("div");


    track.className =
        "f1-track";


    line.appendChild(track);


    /* =====================================================
       INSERE LINHA
    ===================================================== */

    linesContainer.appendChild(line);


    /* =====================================================
       EQUIPES
    ===================================================== */

    lineage.equipes.forEach(
        team => {

            createTeam(
                team,
                track,
                lineage.nome
            );

        }
    );

}


/* =========================================================
   CRIAR TIMELINE
========================================================= */

function createTimeline() {

    if(!linesContainer) {
        return;
    }


    linesContainer.innerHTML =
        "";


    /*
       Ordenação cronológica.

       Quem surgiu primeiro fica acima.
    */

    const ordered =
        [...genealogiasF1].sort(
            (a, b) => {

                const firstA =
                    Math.min(
                        ...a.equipes.map(
                            team =>
                                team.inicio
                        )
                    );


                const firstB =
                    Math.min(
                        ...b.equipes.map(
                            team =>
                                team.inicio
                        )
                    );


                return firstA - firstB;

            }
        );


    ordered.forEach(
        lineage => {

            createLine(lineage);

        }
    );

}


/* =========================================================
   MOSTRAR CARD
========================================================= */

function showCard(
    team,
    lineage
) {

    if(!card) {
        return;
    }


    cardLogo.src =
        team.logo || "";


    cardLogo.alt =
        team.nome;


    cardPeriod.textContent =
        team.inicio === team.fim
            ? `${team.inicio}`
            : `${team.inicio} — ${team.fim}`;


    cardName.textContent =
        team.nome;


    cardLineage.textContent =
        lineage;


    card.classList.add(
        "show"
    );


    card.setAttribute(
        "aria-hidden",
        "false"
    );

}


/* =========================================================
   FECHAR CARD
========================================================= */

function closeCard() {

    if(!card) {
        return;
    }


    card.classList.remove(
        "show"
    );


    card.setAttribute(
        "aria-hidden",
        "true"
    );

}


if(cardClose) {

    cardClose.addEventListener(
        "click",
        closeCard
    );

}


/* =========================================================
   CLIQUE FORA
========================================================= */

document.addEventListener(
    "click",
    event => {

        if(
            !event.target.closest(
                ".f1-card-linha"
            ) &&
            !event.target.closest(
                ".f1-team"
            )
        ) {

            closeCard();

        }

    }
);


/* =========================================================
   ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if(
            event.key === "Escape"
        ) {

            closeCard();

        }

    }
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function initF1() {

    createTimeline();

}


if(
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initF1
    );

} else {

    initF1();

}




/* =========================================================
   MAIORES CAMPEÕES DA FÓRMULA 1
   JS
========================================================= */


/* =========================================================
   DADOS DOS CAMPEÕES
========================================================= */

const campeoesF1 = [

    /* =====================================================
       7 TÍTULOS
    ===================================================== */

    {
        nome: "Michael Schumacher",
        pais: "🇩🇪",
        nacionalidade: "ALEMANHA",
        titulos: 7,
        anos: [1994, 1995, 2000, 2001, 2002, 2003, 2004],
        imagem: "history/Schumacher.avif"
    },

    {
        nome: "Lewis Hamilton",
        pais: "🇬🇧",
        nacionalidade: "REINO UNIDO",
        titulos: 7,
        anos: [2008, 2014, 2015, 2017, 2018, 2019, 2020],
        imagem: "history/lewis.jpg"
    },


    /* =====================================================
       5 TÍTULOS
    ===================================================== */

    {
        nome: "Juan Manuel Fangio",
        pais: "🇦🇷",
        nacionalidade: "ARGENTINA",
        titulos: 5,
        anos: [1951, 1954, 1955, 1956, 1957],
        imagem: "history/fangio.webp"
    },


    /* =====================================================
       4 TÍTULOS
    ===================================================== */

    {
        nome: "Alain Prost",
        pais: "🇫🇷",
        nacionalidade: "FRANÇA",
        titulos: 4,
        anos: [1985, 1986, 1989, 1993],
        imagem: "history/prost.jpg"
    },

    {
        nome: "Sebastian Vettel",
        pais: "🇩🇪",
        nacionalidade: "ALEMANHA",
        titulos: 4,
        anos: [2010, 2011, 2012, 2013],
        imagem: "history/vettel.jpeg"
    },

    {
        nome: "Max Verstappen",
        pais: "🇳🇱",
        nacionalidade: "PAÍSES BAIXOS",
        titulos: 4,
        anos: [2021, 2022, 2023, 2024],
        imagem: "history/Max.jpeg"
    },


    /* =====================================================
       3 TÍTULOS
    ===================================================== */

    {
        nome: "Ayrton Senna",
        pais: "🇧🇷",
        nacionalidade: "BRASIL",
        titulos: 3,
        anos: [1988, 1990, 1991],
        imagem: "history/senna.jpeg"
    },

    {
        nome: "Nelson Piquet",
        pais: "🇧🇷",
        nacionalidade: "BRASIL",
        titulos: 3,
        anos: [1981, 1983, 1987],
        imagem: "history/piquet.jpg"
    },

    {
        nome: "Jackie Stewart",
        pais: "🇬🇧",
        nacionalidade: "REINO UNIDO",
        titulos: 3,
        anos: [1969, 1971, 1973],
        imagem: "history/stewart.jpeg"
    },

    {
        nome: "Niki Lauda",
        pais: "🇦🇹",
        nacionalidade: "ÁUSTRIA",
        titulos: 3,
        anos: [1975, 1977, 1984],
        imagem: "history/lauda.jpg"
    },

    {
        nome: "Jack Brabham",
        pais: "🇦🇺",
        nacionalidade: "AUSTRÁLIA",
        titulos: 3,
        anos: [1959, 1960, 1966],
        imagem: "history/brabham.jpg"
    },


    /* =====================================================
       2 TÍTULOS
    ===================================================== */

    {
        nome: "Alberto Ascari",
        pais: "🇮🇹",
        nacionalidade: "ITÁLIA",
        titulos: 2,
        anos: [1952, 1953],
        imagem: "history/ascari.jpeg"
    },

    {
        nome: "Graham Hill",
        pais: "🇬🇧",
        nacionalidade: "REINO UNIDO",
        titulos: 2,
        anos: [1962, 1968],
        imagem: "history/hill.jpeg"
    },

    {
        nome: "Emerson Fittipaldi",
        pais: "🇧🇷",
        nacionalidade: "BRASIL",
        titulos: 2,
        anos: [1972, 1974],
        imagem: "history/fittipaldi.jpeg"
    },

    {
        nome: "Jim Clark",
        pais: "🇬🇧",
        nacionalidade: "REINO UNIDO",
        titulos: 2,
        anos: [1963, 1965],
        imagem: "history/clark.jpg"
    },

    {
        nome: "Fernando Alonso",
        pais: "🇪🇸",
        nacionalidade: "ESPANHA",
        titulos: 2,
        anos: [2005, 2006],
        imagem: "history/alonso.jpeg"
    },

    {
        nome: "Mika Häkkinen",
        pais: "🇫🇮",
        nacionalidade: "FINLÂNDIA",
        titulos: 2,
        anos: [1998, 1999],
        imagem: "history/hakkinen.jpg"
    },


    /* =====================================================
       1 TÍTULO
    ===================================================== */

    {
        nome: "Giuseppe Farina",
        pais: "🇮🇹",
        nacionalidade: "ITÁLIA",
        titulos: 1,
        anos: [1950],
        imagem: "history/farina.jpeg"
    },

    {
        nome: "Mike Hawthorn",
        pais: "🇬🇧",
        nacionalidade: "REINO UNIDO",
        titulos: 1,
        anos: [1958],
        imagem: "history/Hawthorn.jpg"
    },

    {
        nome: "Phil Hill",
        pais: "🇺🇸",
        nacionalidade: "ESTADOS UNIDOS",
        titulos: 1,
        anos: [1961],
        imagem: "history/phil.jpeg"
    },

    {
        nome: "John Surtees",
        pais: "🇬🇧",
        nacionalidade: "REINO UNIDO",
        titulos: 1,
        anos: [1964],
        imagem: "history/surtees.jpeg"
    },

    {
        nome: "Denny Hulme",
        pais: "🇳🇿",
        nacionalidade: "NOVA ZELÂNDIA",
        titulos: 1,
        anos: [1967],
        imagem: "history/hulme.jpg"
    },

    {
        nome: "Jochen Rindt",
        pais: "🇦🇹",
        nacionalidade: "ÁUSTRIA",
        titulos: 1,
        anos: [1970],
        imagem: "history/rindt.webp"
    },

    {
        nome: "Mario Andretti",
        pais: "🇺🇸",
        nacionalidade: "ESTADOS UNIDOS",
        titulos: 1,
        anos: [1978],
        imagem: "history/andretti.jpg"
    },

    {
        nome: "Jody Scheckter",
        pais: "🇿🇦",
        nacionalidade: "ÁFRICA DO SUL",
        titulos: 1,
        anos: [1979],
        imagem: "history/scheckters.jpeg"
    },

    {
        nome: "Alan Jones",
        pais: "🇦🇺",
        nacionalidade: "AUSTRÁLIA",
        titulos: 1,
        anos: [1980],
        imagem: "history/jones.jpeg"
    },

    {
        nome: "Keke Rosberg",
        pais: "🇫🇮",
        nacionalidade: "FINLÂNDIA",
        titulos: 1,
        anos: [1982],
        imagem: "history/keke.jpg"
    },

    {
        nome: "Nigel Mansell",
        pais: "🇬🇧",
        nacionalidade: "REINO UNIDO",
        titulos: 1,
        anos: [1992],
        imagem: "history/nigel.jpeg"
    },

    {
        nome: "Damon Hill",
        pais: "🇬🇧",
        nacionalidade: "REINO UNIDO",
        titulos: 1,
        anos: [1996],
        imagem: "history/hill.jpg"
    },

    {
        nome: "Jacques Villeneuve",
        pais: "🇨🇦",
        nacionalidade: "CANADÁ",
        titulos: 1,
        anos: [1997],
        imagem: "history/ville.jpg"
    },

    {
        nome: "Kimi Räikkönen",
        pais: "🇫🇮",
        nacionalidade: "FINLÂNDIA",
        titulos: 1,
        anos: [2007],
        imagem: "history/kimi.jpeg"
    },

    {
        nome: "Jenson Button",
        pais: "🇬🇧",
        nacionalidade: "REINO UNIDO",
        titulos: 1,
        anos: [2009],
        imagem: "history/button.jpg"
    },

    {
        nome: "Nico Rosberg",
        pais: "🇩🇪",
        nacionalidade: "ALEMANHA",
        titulos: 1,
        anos: [2016],
        imagem: "history/rosberg.jpg"
    },

    {
        nome: "Lando Norris",
        pais: "🇬🇧",
        nacionalidade: "REINO UNIDO",
        titulos: 1,
        anos: [2025],
        imagem: "history/lando.jpg"
    }

];


/* =========================================================
   CONFIGURAÇÃO DAS CATEGORIAS
========================================================= */

const categoriasF1 = [

    {
        titulos: 7,
        classe: "f1-campeoes-sete"
    },

    {
        titulos: 5,
        classe: "f1-campeoes-cinco"
    },

    {
        titulos: 4,
        classe: "f1-campeoes-quatro"
    },

    {
        titulos: 3,
        classe: "f1-campeoes-tres"
    },

    {
        titulos: 2,
        classe: "f1-campeoes-dois"
    },

    {
        titulos: 1,
        classe: "f1-campeoes-um"
    }

];


/* =========================================================
   TÍTULOS DAS CATEGORIAS
========================================================= */

const textosCategorias = {

    7: {
        kicker: "",
        titulo: "",
        classe: "f1-campeoes-sete"
    },

    5: {
        kicker: "SEGUNDO MAIOR NÚMERO DE TÍTULOS",
        titulo: "Uma lenda acima de gerações"
    },

    4: {
        kicker: "TETRACAMPEÕES",
        titulo: "Quatro vezes no topo"
    },

    3: {
        kicker: "TRICAMPEÕES",
        titulo: "Três títulos mundiais"
    },

    2: {
        kicker: "BICAMPEÕES",
        titulo: "Duas vezes campeões"
    },

    1: {
        kicker: "CAMPEÕES MUNDIAIS",
        titulo: "Uma vez no topo"
    }

};


/* =========================================================
   CRIAR ANOS
========================================================= */

function criarAnos(anos) {

    return anos
        .map(ano => {

            return `
                <span>
                    ${ano}
                </span>
            `;

        })
        .join("");

}


/* =========================================================
   CRIAR TÍTULO DA SEÇÃO
========================================================= */

function criarTituloSecao(titulos) {

    if (titulos === 7) {

        return "";

    }


    const dados =
        textosCategorias[titulos];


    return `

        <div class="f1-campeores-secao-titulo">

            <span>
                ${titulos}×
            </span>

            <div>

                <small>
                    ${dados.kicker}
                </small>

                <h3>
                    ${dados.titulo}
                </h3>

            </div>

        </div>

    `;

}


/* =========================================================
   CRIAR CARD
========================================================= */

function criarCard(campeao, indice, titulos) {

    const brasileiro =
        campeao.nacionalidade === "BRASIL";


    const classeBrasileiro =
        brasileiro
            ? " f1-campeao-brasileiro"
            : "";


/* =====================================================
   CARD DOS 7 TÍTULOS
===================================================== */

if (titulos === 7) {

    return `

        <article
            class="f1-campeao-card f1-campeao-7${classeBrasileiro}"
            tabindex="0"
            role="button"
        >

            <div class="f1-campeao-card-imagem">

                <img
                    src="${campeao.imagem}"
                    alt="${campeao.nome}"
                    loading="lazy"
                >

            </div>

            <div class="f1-campeao-card-overlay"></div>

            <div class="f1-campeao-card-conteudo">

                <span class="f1-campeao-card-pais">
                    ${campeao.pais} ${campeao.nacionalidade}
                </span>

                <div class="f1-campeao-card-titulo">

                    <strong>
                        ${campeao.titulos}×
                    </strong>

                    <span>
                        CAMPEÃO MUNDIAL
                    </span>

                </div>

                <h3>
                    ${campeao.nome}
                </h3>

                <div class="f1-campeao-card-anos">

                    ${criarAnos(campeao.anos)}

                </div>

            </div>

        </article>

    `;

}

    /* =====================================================
       CARDS DAS DEMAIS CATEGORIAS
    ===================================================== */

    return `

        <article
            class="f1-campeao-card f1-campeao-${titulos}${classeBrasileiro}"
            tabindex="0"
            role="button"
        >

            <img
                src="${campeao.imagem}"
                alt="${campeao.nome}"
                loading="lazy"
            >

            <div class="f1-campeao-card-overlay"></div>

            <div class="f1-campeao-card-conteudo">

                <span class="f1-campeao-card-pais">
                    ${campeao.pais} ${campeao.nacionalidade}
                </span>

                <strong>
                    ${campeao.titulos}×
                </strong>

                <h3>
                    ${campeao.nome}
                </h3>

                <div class="f1-campeao-card-anos">

                    ${criarAnos(campeao.anos)}

                </div>

            </div>

        </article>

    `;

}


/* =========================================================
   CRIAR CATEGORIA
========================================================= */

function criarCategoria(categoria) {

    const campeoes =
        campeoesF1.filter(
            campeao =>
                campeao.titulos === categoria.titulos
        );


    if (!campeoes.length) {

        return "";

    }


    /* =====================================================
       7 TÍTULOS
    ===================================================== */

    if (categoria.titulos === 7) {

        return `

            <section class="f1-campeoes-sete">

                <div class="f1-campeoes-sete-grid">

                    ${campeoes
                        .map(
                            (campeao, indice) =>
                                criarCard(
                                    campeao,
                                    indice,
                                    7
                                )
                        )
                        .join("")}

                </div>

            </section>

        `;

    }


    /* =====================================================
       DEMAIS CATEGORIAS
    ===================================================== */

    const gridClasse =
        `f1-campeoes-${categoria.titulos === 5
            ? "cinco"
            : categoria.titulos === 4
                ? "quatro"
                : categoria.titulos === 3
                    ? "tres"
                    : categoria.titulos === 2
                        ? "dois"
                        : "um"
        }-grid`;


    /*
       Fangio possui apenas um card,
       então não precisa de grid próprio.
    */

    if (categoria.titulos === 5) {

        return `

            <section class="f1-campeoes-cinco">

                ${criarTituloSecao(5)}

                ${criarCard(
                    campeoes[0],
                    0,
                    5
                )}

            </section>

        `;

    }


    return `

        <section
            class="f1-campeoes-${categoria.titulos === 4
                ? "quatro"
                : categoria.titulos === 3
                    ? "tres"
                    : categoria.titulos === 2
                        ? "dois"
                        : "um"
            }"
        >

            ${criarTituloSecao(
                categoria.titulos
            )}

            <div class="${gridClasse}">

                ${campeoes
                    .map(
                        (campeao, indice) =>
                            criarCard(
                                campeao,
                                indice,
                                categoria.titulos
                            )
                    )
                    .join("")}

            </div>

        </section>

    `;

}


/* =========================================================
   CRIAR TODA A PÁGINA
========================================================= */

function criarMaioresCampeoes() {

    const container =
        document.querySelector(
            ".f1-maiores-campeoes-section"
        );


    if (!container) {

        console.warn(
            "Seção .f1-maiores-campeoes-section não encontrada."
        );

        return;

    }


    /*
       Mantém o cabeçalho.
       Remove somente o conteúdo antigo
       depois do header.
    */

    const header =
        container.querySelector(
            ".f1-maiores-campeoes-header"
        );


    const footer =
        container.querySelector(
            ".f1-maiores-campeoes-footer"
        );


    container
        .querySelectorAll(
            `
            .f1-campeoes-sete,
            .f1-campeoes-cinco,
            .f1-campeoes-quatro,
            .f1-campeoes-tres,
            .f1-campeoes-dois,
            .f1-campeoes-um
            `
        )
        .forEach(secao => {

            secao.remove();

        });


    /*
       Cria as categorias.
    */

    const fragment =
        document.createDocumentFragment();


    categoriasF1.forEach(
        categoria => {

            const temp =
                document.createElement("div");


            temp.innerHTML =
                criarCategoria(categoria);


            while (temp.firstElementChild) {

                fragment.appendChild(
                    temp.firstElementChild
                );

            }

        }
    );


    /*
       Insere antes do rodapé.
    */

    if (footer) {

        container.insertBefore(
            fragment,
            footer
        );

    } else {

        container.appendChild(
            fragment
        );

    }


    configurarInteracoes(
        container
    );


    configurarAnimacao(
        container
    );

}


/* =========================================================
   INTERAÇÕES
========================================================= */

function configurarInteracoes(container) {

    const cards =
        container.querySelectorAll(
            ".f1-campeao-card"
        );


    cards.forEach(card => {


        /* =================================================
           MOUSE ENTER
        ================================================= */

        card.addEventListener(
            "mouseenter",
            () => {

                cards.forEach(outro => {

                    if (outro !== card) {

                        outro.classList.add(
                            "f1-card-desfocado"
                        );

                    }

                });

            }
        );


        /* =================================================
           MOUSE LEAVE
        ================================================= */

        card.addEventListener(
            "mouseleave",
            () => {

                cards.forEach(outro => {

                    outro.classList.remove(
                        "f1-card-desfocado"
                    );

                });

            }
        );


        /* =================================================
           CLIQUE
        ================================================= */

        card.addEventListener(
            "click",
            () => {

                const selecionado =
                    card.classList.contains(
                        "f1-card-selecionado"
                    );


                cards.forEach(outro => {

                    outro.classList.remove(
                        "f1-card-selecionado"
                    );

                });


                if (!selecionado) {

                    card.classList.add(
                        "f1-card-selecionado"
                    );

                }

            }
        );


        /* =================================================
           TECLADO
        ================================================= */

        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    card.click();

                }

            }
        );

    });

}


/* =========================================================
   ANIMAÇÃO AO ENTRAR NA TELA
========================================================= */

function configurarAnimacao(container) {

    const cards =
        container.querySelectorAll(
            ".f1-campeao-card"
        );


    if (
        !("IntersectionObserver" in window)
    ) {

        cards.forEach(card => {

            card.classList.add(
                "f1-card-visivel"
            );

        });

        return;

    }


    const observer =
        new IntersectionObserver(
            entradas => {

                entradas.forEach(
                    entrada => {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.classList.add(
                                "f1-card-visivel"
                            );


                            observer.unobserve(
                                entrada.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    cards.forEach(card => {

        observer.observe(card);

    });

}


/* =========================================================
   CLIQUE FORA DOS CARDS
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            event.target.closest(
                ".f1-campeao-card"
            )
        ) {

            return;

        }


        document
            .querySelectorAll(
                ".f1-card-selecionado"
            )
            .forEach(card => {

                card.classList.remove(
                    "f1-card-selecionado"
                );

            });

    }
);


/* =========================================================
   ESC FECHA SELEÇÃO
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {

            return;

        }


        document
            .querySelectorAll(
                ".f1-card-selecionado"
            )
            .forEach(card => {

                card.classList.remove(
                    "f1-card-selecionado"
                );

            });

    }
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function iniciarMaioresCampeoes() {

    criarMaioresCampeoes();

}


/* =========================================================
   DOM READY
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        iniciarMaioresCampeoes
    );

} else {

    iniciarMaioresCampeoes();

}