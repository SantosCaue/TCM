var visivel = false;
const navegacao = document.querySelector("nav");
const Hard = [{ "nome_en": "Nigeria", "nome_pt": "Nigéria", "capital_en": "Abuja", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg" }, { "nome_en": "Burkina Faso", "nome_pt": "Burquina Faso", "capital_en": "Ouagadougou", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg" }, { "nome_en": "Guyana", "nome_pt": "Guiana", "capital_en": "Georgetown", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg" }, { "nome_en": "Seychelles", "nome_pt": "Seicheles", "capital_en": "Victoria", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg" }, { "nome_en": "Turkmenistan", "nome_pt": "Turcomenistão", "capital_en": "Ashgabat", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg" }, { "nome_en": "Botswana", "nome_pt": "Botsuana", "capital_en": "Gaborone", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg" }, { "nome_en": "Somalia", "nome_pt": "Somália", "capital_en": "Mogadishu", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg" }, { "nome_en": "Andorra", "nome_pt": "Andorra", "capital_en": "Andorra la Vella", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg" }, { "nome_en": "Moldova", "nome_pt": "Moldávia", "capital_en": "Chisinau", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg" }, { "nome_en": "Suriname", "nome_pt": "Suriname", "capital_en": "Paramaribo", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg" }];
const Medio = [{ "nome_en": "Vietnam", "nome_pt": "Vietnã", "capital_en": "Hanoi", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" }, { "nome_en": "Portugal", "nome_pt": "Portugal", "capital_en": "Lisbon", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" }, { "nome_en": "Egypt", "nome_pt": "Egito", "capital_en": "Cairo", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" }, { "nome_en": "Chile", "nome_pt": "Chile", "capital_en": "Santiago", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg" }, { "nome_en": "North Korea", "nome_pt": "Coreia do Norte", "capital_en": "Pyongyang", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg" }, { "nome_en": "Australia", "nome_pt": "Austrália", "capital_en": "Canberra", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg" }, { "nome_en": "Serbia", "nome_pt": "Sérvia", "capital_en": "Belgrade", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg" }, { "nome_en": "Bosnia and Herzegovina", "nome_pt": "Bósnia e Herzegovina", "capital_en": "Sarajevo", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg" }, { "nome_en": "Turkey", "nome_pt": "Turquia", "capital_en": "Ankara", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" }, { "nome_en": "Mexico", "nome_pt": "México", "capital_en": "Mexico City", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" }];
const Facil = [{ "nome_en": "Brazil", "nome_pt": "Brasil", "capital_en": "Brasília", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" }, { "me_en": "China", "nome_pt": "China", "capital_en": "Beijing", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg" }, { "nome_en": "France", "nome_pt": "França", "capital_en": "Paris", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" }, { "nome_en": "United Kingdom", "nome_pt": "Reino Unido", "capital_en": "London", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_Kingdom.svg" }, { "nome_en": "Spain", "nome_pt": "Espanha", "capital_en": "Madrid", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" }, { "nome_en": "Japan", "nome_pt": "Japão", "capital_en": "Tokyo", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg" }, { "nome_en": "South Korea", "nome_pt": "Coreia do Sul", "capital_en": "Seoul", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" }, { "nome_en": "Italy", "nome_pt": "Itália", "capital_en": "Rome", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg" }, { "nome_en": "Argentina", "nome_pt": "Argentina", "capital_en": "Buenos Aires", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" }, { "nome_en": "Austria", "nome_pt": "Áustria", "capital_en": "Vienna", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg" }];
var preload = [];
var rodada = 0;
var Nivel;
var capital;

if (document.cookie.length == 0) {
  document.cookie = "idioma=" + "portugues" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
}
traduzido();


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

function embaralhaVetor(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function menulateral() {
  if (!visivel) {
    document.querySelector("#menu").querySelector("svg").style.rotate = '90deg';
    navegacao.style.height = parseFloat(window.getComputedStyle(document.querySelector("main")).height) + parseFloat(window.getComputedStyle(document.querySelector("footer")).height) + 'px';;
    navegacao.style.padding = '1.5vh'
    setTimeout(function () {
      navegacao.querySelector('ul').style.display = 'flex';
    }, 300)
    visivel = true;
  } else {
    document.querySelector("#menu").querySelector("svg").style.rotate = '0deg';
    navegacao.style.height = '0%';
    navegacao.style.padding = '0px';
    navegacao.querySelector('ul').style.display = 'none';
    visivel = false;
  }
}


function ChamarQuiz(dificuldade) {
  switch (dificuldade) {
    case 1:
      Nivel = Facil;
      document.querySelector("#level").value = "Facil"
      break;
    case 2:
      Nivel = Medio;
      document.querySelector("#level").value = "Médio"
      break;
    case 3:
      Nivel = Hard;
      document.querySelector("#level").value = "Hard"
      break;
  }
  embaralhaVetor(Nivel);
  document.getElementById("dificuldade").style.display = 'none';
  document.getElementsByTagName("form")[0].style.display = 'flex';
  atualizar();
  contagemregressiva();
  for (d = 0; d < Nivel.length; d++) {
    img = new Image();
    img.src = Nivel[d].bandeira;
    preload.push(img);
  }
}

function atualizar() {
  var nome;
  if (getCookie("idioma") == "portugues") {
    document.getElementById("enunciado").innerText = "RODADA " + (rodada + 1) + "/" + Nivel.length;
    nome = Nivel[rodada].nome_pt;
  } else {
    document.getElementById("enunciado").innerText = "ROUND " + (rodada + 1) + "/" + Nivel.length;
    nome = Nivel[rodada].nome_en;
  }
  document.querySelector("#nomePais").innerHTML = nome;
  const foto = Nivel[rodada].bandeira;
  capital = Nivel[rodada].capital_en;
  document.getElementById("imagem").src = foto;
}

function pontuar() {
  if (document.getElementById('resposta').value.toLowerCase() == capital.toLowerCase()) {
    document.getElementById('resposta').value = null;
    rodada++;
    if (rodada == Nivel.length) {
      acabar("ganhar");
      clearInterval(countdownInterval);
    } else {
      atualizar();
    }
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function contagemregressiva() {
  let remainingSeconds = 90;
  countdownInterval = setInterval(function () {
    const countdownElement = document.getElementById("temporizador");
    remainingSeconds--;

    if (remainingSeconds <= 0) {
      acabar("tempo");
      clearInterval(countdownInterval);
    } else {
      countdownElement.textContent = `${formatTime(remainingSeconds)}`;
    }
  }, 1000); // Atualiza a cada segundo (1000 milissegundos)
}

function acabar(metodo) {
  switch (metodo) {
    case "tempo":
      document.getElementsByTagName("form")[0].style.display = 'none';
      document.getElementsByTagName("form")[1].style.display = 'flex';
      document.getElementById("resultado").innerText = fimT;
      break;
    case "ganhar":
      document.getElementById("resultado").innerText = fimW;
      document.getElementsByTagName("form")[0].style.display = 'none';
      document.getElementsByTagName("form")[1].style.display = 'flex';
      break;
  }
  document.querySelector("#tempo").value = 90 - countdownInterval;
  document.querySelector("#pontuacao").value = rodada;

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
  atualizar();
}
var fimT;
var fimW;
function traduzido() {
  if (getCookie("idioma") == "ingles") {
    document.getElementsByTagName("h1")[0].innerText = "COUNTRY WIKI";
    document.getElementsByTagName("span")[3].innerText = "CONTINENTS";
    document.getElementsByTagName("span")[5].innerText = "COUNTRIES";
    document.getElementsByTagName("span")[7].innerText = "RANDOM COUNTRY"
    document.getElementsByTagName("span")[9].innerText = "CHANGE LANGUAGE";
    document.getElementsByTagName("footer")[0].innerHTML = "<p> COPYRIGHT CAUÊ GONÇALVES SANTOS &COPY; 2023</p>"
    fimT = `Seu tempo acabou. Você conseguiu acertar ${rodada} capitais`
    fimW = `Parabéns você conseguiu acertar todas bandeiras`
  } else if (getCookie("idioma") == "portugues") {
    document.getElementsByTagName("h1")[0].innerText = "WIKI DOS PAÍSES";
    document.getElementsByTagName("span")[3].innerText = "CONTINENTES";
    document.getElementsByTagName("span")[5].innerText = "PAÍSES";
    document.getElementsByTagName("span")[7].innerText = "PAÍS ALEATÓRIO"
    document.getElementsByTagName("span")[9].innerText = "MUDAR IDIOMA";
    document.getElementsByTagName("footer")[0].innerHTML = "<p>TODOS OS DIREITOS RESERVADOS CAUÊ GONÇALVES SANTOS &COPY; 2023</p>";
    fimT = `Your time has ended. You got right ${rodada} capitals`;
    fimW = `Congratulations you got all answers right`;
  }
}