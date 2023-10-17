if (document.cookie.length == 0) {
  document.cookie = "idioma=" + "portugues" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
}
traduzido();
var enunciado;
var alternativaA;
var alternativaB;
var alternativaC;
var alternativaD;

//MÉTODO QUE RETORNA O VALOR DO COOKIE 🤓☝️ NA VDD NÃO É UM MÉTODO É UMA FUNÇÃO 
function getCookie(name) {
  var cookieArr = document.cookie.split("; ");
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (name === cookiePair[0]) {
      return cookiePair[1];
    }
  }
  return null;
}

function menulateral() {
  navegacao = document.getElementsByTagName("nav")[0];
  mainaltura = window.getComputedStyle(document.getElementsByTagName("main")[0]).height;
  footeraltura = window.getComputedStyle(document.getElementsByTagName("footer")[0]).height;
  if (navegacao.style.display == "none" || window.getComputedStyle(navegacao).display == "none") {
    document.getElementsByTagName("ul")[0].style.display = "flex";
    navegacao.classList.remove("desaparecer");
    document.getElementsByTagName("svg")[0].classList.remove("contragira_barras");
    document.getElementsByTagName("svg")[0].classList.add("gira_barras");
    navegacao.style.display = "flex";
    navegacao.style.height = "0px";
    navegacao.classList.add("aparecer");
    mainaltura = parseFloat(mainaltura);
    footeraltura = parseFloat(footeraltura);
    navaltura = footeraltura + mainaltura + "px";
    animacao = document.querySelectorAll('.aparecer');
    animacao.forEach(elemento => {
      elemento.style.setProperty('--joazin', navaltura);
    });

    setTimeout(function () {
      document.getElementsByTagName("nav")[0].style.height = navaltura;
    }, 500);
  } else {
    navegacao.classList.remove("aparecer");
    document.getElementsByTagName("svg")[0].classList.add("contragira_barras");
    document.getElementsByTagName("svg")[0].classList.remove("gira_barras");
    navegacao.classList.add("desaparecer");
    document.getElementsByTagName("ul")[0].style.display = "none";
    setTimeout(function () {
      navegacao.style.display = "none";
    }, 950);
  }
}
/**
 * {"EnunciadoPt": "",
 "APt": "",
 "BPt": "",
 "CPt": "",
 "DPt": "",
 "EnunciadoEn": "",
 "AEn": "",
 "BEn": "",
 "CEn": "",
 "DEn": "",
 "Gabarito": 0
} 
*/
const Hard = [];
const Medio = [{ "EnunciadoPt": "Qual desses não faz parte dos 10 países mais populosos", "APt": "México", "BPt": "Rússia", "CPt": "Bangladesh", "DPt": "Etiópia", "EnunciadoEn": "Which of those isn't one of the 10 most populous countries of the world?", "AEn": "Mexico", "BEn": "Russia", "CEn": "Bangladesh", "DEn": "Etiopia", "Gabarito": 3 }, { "EnunciadoPt": "Qual é o continente com mais países?", "APt": "Ásia", "BPt": "Europa", "CPt": "África", "DPt": "Oceania", "EnunciadoEn": "Which continent has the most countries?", "AEn": "Asia", "BEn": "Europe", "CEn": "Africa", "DEn": "Oceania", "Gabarito": 0 }, { "EnunciadoPt": "Qual o maior país da África?", "APt": "Argélia", "BPt": "Sudão", "CPt": "Somália", "DPt": "RD Congo", "EnunciadoEn": "What is the biggest country in Africa?", "AEn": "Algeria", "BEn": "Sudan", "CEn": "Somalia", "DEn": "DR Congo", "Gabarito": 0 }, { "EnunciadoPt": "", "APt": "", "BPt": "", "CPt": "", "DPt": "", "EnunciadoEn": "", "AEn": "", "BEn": "", "CEn": "", "DEn": "", "Gabarito": 0 } ];
const Facil = [{ "EnunciadoPt": "Qual o maior país do mundo?", "APt": "China", "BPt": "França", "CPt": "Rússia", "DPt": "Brasil", "EnunciadoEn": "What is the largest country in the world?", "AEn": "China", "BEn": "France", "CEn": "Russia", "DEn": "Brazil", "Gabarito": 2 }, { "EnunciadoPt": "Qual desses países não faz fronteira com a Rússia?", "APt": "Polonia", "BPt": "Alemanha", "CPt": "Belarus", "DPt": "China", "EnunciadoEn": "Which of those countries doesn't border Russia?", "AEn": "Poland", "BEn": "Germany", "CEn": "Belarus", "DEn": "China", "Gabarito": 1 }, { "EnunciadoPt": "O monte everest se localiza em que continente?", "APt": "América do Sul", "BPt": "Ásia", "CPt": "África", "DPt": "Oceania", "EnunciadoEn": "In which continent Mt Everest is located?", "AEn": "South America", "BEn": "Asia", "CEn": "Africa", "DEn": "Oceania", "Gabarito": 1 }, { "EnunciadoPt": "Que país a capital é Berlim?", "APt": "Alemanha", "BPt": "Moldávia", "CPt": "Bélgica", "DPt": "Sri Lanka", "EnunciadoEn": "What country has Berlin as it capital?", "AEn": "Germany", "BEn": "Moldova", "CEn": "Belgium", "DEn": "Sri Lanka", "Gabarito": 0 }, { "EnunciadoPt": "Qual desses países não tem litoral?", "APt": "Paquistão", "BPt": "Suíça", "CPt": "Grécia", "DPt": "Japão", "EnunciadoEn": "What country in this list is Landlocked?", "AEn": "Pakistan", "BEn": "Japan", "CEn": "Greece", "DEn": "Switzerland", "Gabarito": 3 }];
var rodada = 0;
var Nivel;
var pontos = 0;

function ChamarQuiz(dificuldade) {
  switch (dificuldade) {
    case 1:
      Nivel = Facil;
      break;
    case 2:
      Nivel = Medio;
      break;
    case 3:
      Nivel = Hard;
      break;
  }
  document.getElementById("dificuldade").style.display = 'none';
  document.getElementsByTagName("form")[0].style.display = 'flex';

  for (r = 0; r < Nivel.length; r++) {
    var QA = document.createElement("p");
    var inputA = document.createElement("input");
    QA.classList.add("resposta");
    inputA.name = "questao" + r;
    inputA.id = r + "A";
    inputA.setAttribute("onchange", "pontuar()");
    inputA.type = "radio";
    var labelA = document.createElement("label");
    labelA.setAttribute("for", inputA.id);
    QA.appendChild(inputA);
    QA.appendChild(labelA);

    var QB = document.createElement("p");
    var inputB = document.createElement("input")
    QB.classList.add("resposta");
    inputB.name = "questao" + r;
    inputB.id = r + "B";
    inputB.setAttribute("onchange", "pontuar()");
    inputB.type = "radio";
    var labelB = document.createElement("label");
    labelB.setAttribute("for", inputB.id);
    QB.appendChild(inputB);
    QB.appendChild(labelB);

    var QC = document.createElement("p");
    var inputC = document.createElement("input");
    QC.classList.add("resposta");
    inputC.name = "questao" + r;
    inputC.id = r + "C";
    inputC.setAttribute("onchange", "pontuar()");
    inputC.type = "radio";
    var labelC = document.createElement("label");
    labelC.setAttribute("for", inputC.id);
    QC.appendChild(labelC);
    QC.appendChild(inputC);

    var QD = document.createElement("p");
    var inputD = document.createElement("input");
    QD.classList.add("resposta");
    inputD.name = "questao" + r;
    inputD.id = r + "D";
    inputD.setAttribute("onchange", "pontuar()");
    inputD.type = "radio";
    var labelD = document.createElement("label");
    labelD.setAttribute("for", inputD.id);
    QD.appendChild(inputD);
    QD.appendChild(labelD);

    document.getElementById("ladoesquerdo").appendChild(QA);
    document.getElementById("ladoesquerdo").appendChild(QB);
    document.getElementById("ladodireito").appendChild(QC);
    document.getElementById("ladodireito").appendChild(QD);
  }
  atualizar();
  traduzirQuestoes();
}

function atualizar() {
  document.getElementById("enunciado").innerText = enunciado;
  if (rodada != 0) {
    for (d = 0; d < 4; d++)
      document.getElementsByName("questao" + (rodada - 1))[d].parentNode.style.display = 'none';
  }
  for (d = 0; d < 4; d++) {
    document.getElementsByName("questao" + rodada)[d].parentNode.style.display = 'flex';
    if (d == 0) {
      document.getElementsByName("questao" + rodada)[d].parentNode.querySelector("label").innerHTML = alternativaA;
    } else if (d == 1) {
      document.getElementsByName("questao" + rodada)[d].parentNode.querySelector("label").innerHTML = alternativaB;
    } else if (d == 2) {
      document.getElementsByName("questao" + rodada)[d].parentNode.querySelector("label").innerHTML = alternativaC;
    } else {
      document.getElementsByName("questao" + rodada)[d].parentNode.querySelector("label").innerHTML = alternativaD;

    }
  }
}


function pontuar() {
  if (document.getElementsByName("questao" + rodada)[Nivel[rodada].Gabarito].checked) {
    pontos++;
  }
  rodada++;
  if (rodada == Nivel.length) {
    if (getCookie("idioma") == "portugues") {
      document.getElementById("resultado").innerText = "Parabéns você acertou " + pontos + " questões.";
    } else { document.getElementById("resultado").innerText = "Congrats you got " + pontos + " questions right."; }
    document.getElementsByTagName("form")[0].style.display = 'none';
    document.getElementsByTagName("form")[1].style.display = 'flex';
  } else {
    traduzirQuestoes();
    atualizar();
  }

}

function traduzir() {
  if (getCookie("idioma") == "portugues") {
    document.cookie = "idioma=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "idioma=" + "ingles" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
  } else if (getCookie("idioma") == "ingles") {
    document.cookie = "idioma=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "idioma=" + "portugues" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
  }
  traduzido();
  traduzirQuestoes();
}

function traduzido() {
  if (getCookie("idioma") == "ingles") {
    document.getElementsByTagName("h1")[0].innerText = "COUNTRY WIKI";
    document.getElementsByTagName("span")[3].innerText = "CONTINENTS";
    document.getElementsByTagName("span")[5].innerText = "COUNTRIES";
    document.getElementsByTagName("span")[7].innerText = "RANDOM COUNTRY"
    document.getElementsByTagName("span")[9].innerText = "CHANGE LANGUAGE";
    document.getElementById("choice").innerText = "Choose The Difficulty"
    document.getElementsByClassName("escolha")[0].innerText = "EASY";
    document.getElementsByClassName("escolha")[1].innerText = "MEDIUM";
    document.getElementsByClassName("escolha")[2].innerText = "HARD";
    document.getElementsByTagName("footer")[0].innerHTML = "<p> COPYRIGHT CAUÊ GONÇALVES SANTOS &COPY; 2023</p>";

  } else if (getCookie("idioma") == "portugues") {
    document.getElementsByTagName("h1")[0].innerText = "WIKI DOS PAÍSES";
    document.getElementsByTagName("span")[3].innerText = "CONTINENTES";
    document.getElementsByTagName("span")[5].innerText = "PAÍSES";
    document.getElementsByTagName("span")[7].innerText = "PAÍS ALEATÓRIO"
    document.getElementsByTagName("span")[9].innerText = "MUDAR IDIOMA";
    document.getElementById("choice").innerText = "Escolha a Dificuldade"
    document.getElementsByClassName("escolha")[0].innerText = "FÁCIL";
    document.getElementsByClassName("escolha")[1].innerText = "MÉDIO";
    document.getElementsByClassName("escolha")[2].innerText = "DÍFICIL";
    document.getElementsByTagName("footer")[0].innerHTML = "<p>TODOS OS DIREITOS RESERVADOS CAUÊ GONÇALVES SANTOS &COPY; 2023</p>"
  }
}

function traduzirQuestoes() {
  if (getCookie("idioma") == "portugues") {

    enunciado = "PERGUNTA " + (rodada + 1) + ": " + Nivel[rodada].EnunciadoPt;
    alternativaA = Nivel[rodada].APt;
    alternativaB = Nivel[rodada].BPt;
    alternativaC = Nivel[rodada].CPt;
    alternativaD = Nivel[rodada].DPt;
  } else {
    enunciado = "QUESTION " + (rodada + 1) + ": " + Nivel[rodada].EnunciadoEn;
    alternativaA = Nivel[rodada].AEn;
    alternativaB = Nivel[rodada].BEn;
    alternativaC = Nivel[rodada].CEn;
    alternativaD = Nivel[rodada].DEn;
  }
  atualizar();
}