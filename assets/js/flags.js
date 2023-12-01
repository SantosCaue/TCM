var visivel = false;
const navegacao = document.querySelector("nav");
const Hard = [{ "nome_pt": "El Salvador", "nome_en": "El Salvador", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg" }, { "nome_pt": "Comores", "nome_en": "Comoros", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg" }, { "nome_pt": "Djibouti", "nome_en": "Djibouti", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg" }, { "nome_pt": "Chade", "nome_en": "Chad", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg" }, { "nome_pt": "Mali", "nome_en": "Mali", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg" }, { "nome_pt": "Costa do Marfim", "nome_en": "Ivory Coast", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg" }, { "nome_pt": "Santa Lúcia", "nome_en": "Saint Lucia", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg" }, { "nome_pt": "Nicarágua", "nome_en": "Nicaragua", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg" }, { "nome_pt": "República Centro-Africana", "nome_en": "Central African Republic", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg" }, { "nome_pt": "Micronésia", "nome_en": "Micronesia", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg" }]
const Medio = [{ "nome_pt": "Nepal", "nome_en": "Nepal", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg" }, { "nome_pt": "Vietnã", "nome_en": "Vietnam", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" }, { "nome_pt": "Mongólia", "nome_en": "Mongolia", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg" }, { "nome_pt": "Finlândia", "nome_en": "Finland", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg" }, { "nome_pt": "Jamaica", "nome_en": "Jamaica", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg" }, { "nome_pt": "Egito", "nome_en": "Egypt", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" }, { "nome_pt": "Bulgária", "nome_en": "Bulgaria", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg" }, { "nome_pt": "Áustria", "nome_en": "Austria", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg" }, { "nome_pt": "Cazaquistão", "nome_en": "Kazakhstan", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg" }, { "nome_pt": "Hungria", "nome_en": "Hungary", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg" }, { "nome_pt": "Nova Zelândia", "nome_en": "New Zealand", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" }]
const Facil = [{ "nome_pt": "França", "nome_en": "France", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" }, { "nome_pt": "Brasil", "nome_en": "Brazil", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" }, { "nome_pt": "Alemanha", "nome_en": "Germany", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" }, { "nome_pt": "México", "nome_en": "Mexico", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" }, { "nome_pt": "Coreia do Sul", "nome_en": "South Korea", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" }, { "nome_pt": "Estados Unidos", "nome_en": "United States", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" }, { "nome_pt": "Arábia Saudita", "nome_en": "Saudi Arabia", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" }, { "nome_pt": "Reino Unido", "nome_en": "United Kingdom", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg" }, { "nome_pt": "Japão", "nome_en": "Japan", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg" }, { "nome_pt": "Canadá", "nome_en": "Canada", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" }]
var rodada = 0;
var Nivel;
var nomePais;
var coutryName;
var preload = [];
if (document.cookie.length == 0) {
  document.cookie = "idioma=" + "portugues" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
}
let remainingSeconds = 90;
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
      navegacao.style.height = parseFloat(window.getComputedStyle(document.querySelector("main")).height) + parseFloat(window.getComputedStyle(document.querySelector("footer")).height) + 'px';      ;
      navegacao.style.padding = '1.5vh'
      navegacao.querySelector('ul').style.display = 'flex';
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
      document.querySelector("#level").value = "Facil;"
      break;
    case 2:
      Nivel = Medio;
      document.querySelector("#level").value = "Médio;"
      break;
    case 3:
      Nivel = Hard;
      document.querySelector("#level").value = "Hard;"
      break;
  }
  embaralhaVetor(Nivel);
  document.getElementById("dificuldade").style.display = 'none';
  document.getElementsByTagName("form")[0].style.display = 'flex';
  atualizar();
  countdownInterval;
  for(d =0; d < Nivel.length; d++){
    img = new Image();
    img.src = Nivel[d].bandeira;
    preload.push(img);
  }
}

function atualizar() {
  document.getElementById("enunciado").innerText = "BANDEIRA " + (rodada + 1) + "/" + Nivel.length;
  nomePais = Nivel[rodada].nome_pt;
  coutryName = Nivel[rodada].nome_en;
  document.getElementById("bandeira").src = Nivel[rodada].bandeira;
}

function pontuar() {
  if (document.getElementById('resposta').value.toLowerCase() == nomePais.toLowerCase() || document.getElementById('resposta').value.toLowerCase() == coutryName.toLowerCase()) {
    document.getElementById('resposta').value = null;
    rodada++;
    if (rodada == Nivel.length) {
      clearInterval(countdownInterval);
      acabar("ganhar");
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

const countdownInterval = setInterval(function () {
  const countdownElement = document.getElementById("temporizador");
  remainingSeconds--;

  if (remainingSeconds <= 0) {
    clearInterval(countdownInterval);
    acabar("tempo");
  } else {
    countdownElement.innerText = `${formatTime(remainingSeconds)}`;
  }
}, 1000); // Atualiza a cada segundo (1000 milissegundos)



function acabar(metodo) {
switch (metodo) {
  case "tempo":
    document.getElementsByTagName("form")[0].style.display = 'none';
    document.getElementsByTagName("form")[1].style.display = 'flex';
    document.getElementById("resultado").innerText = fimT.split("|")[0] + rodada + fimT.split("|")[2];
    break;
  case "ganhar":
    document.getElementById("resultado").innerText = fimW;
    document.getElementsByTagName("form")[0].style.display = 'none';
    document.getElementsByTagName("form")[1].style.display = 'flex';
    break;
}
document.querySelector("#tempo").value = 90 - remainingSeconds;
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
  setTimeout(function(){
    navegacao.style.height = parseFloat(window.getComputedStyle(document.querySelector("main")).height) + parseFloat(window.getComputedStyle(document.querySelector("footer")).height) + 'px';
    }, 100)
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
    document.getElementById("choice").innerText = "Choose The Difficulty"
    document.getElementsByClassName("escolha")[0].innerText = "EASY";
    document.getElementsByClassName("escolha")[1].innerText = "MEDIUM";
    document.getElementsByClassName("escolha")[2].innerText = "HARD";
    document.getElementsByTagName("footer")[0].innerHTML = "<p> COPYRIGHT CAUÊ GONÇALVES SANTOS &COPY; 2023</p>"
    fimT = `Your time has ended. You got right ${rodada} capitals`;
    fimW = `Congratulations you got all answers right`;
    document.getElementById("username").innerText = "Enter your username";
  } else if (getCookie("idioma") == "portugues") {
    document.getElementsByTagName("h1")[0].innerText = "WIKI DOS PAÍSES";
    document.getElementsByTagName("span")[3].innerText = "CONTINENTES";
    document.getElementsByTagName("span")[5].innerText = "PAÍSES";
    document.getElementsByTagName("span")[7].innerText = "PAÍS ALEATÓRIO";
    document.getElementById("choice").innerText = "Escolha a Dificuldade"
    document.getElementsByClassName("escolha")[0].innerText = "FÁCIL";
    document.getElementsByClassName("escolha")[1].innerText = "MÉDIO";
    document.getElementsByClassName("escolha")[2].innerText = "DÍFICIL";
    document.getElementsByTagName("span")[9].innerText = "MUDAR IDIOMA";
    document.getElementsByTagName("footer")[0].innerHTML = "<p>TODOS OS DIREITOS RESERVADOS CAUÊ GONÇALVES SANTOS &COPY; 2023</p>"
    fimT = `Seu tempo acabou. Você conseguiu acertar ${rodada} capitais`
    fimW = `Parabéns você conseguiu acertar todas bandeiras`
    document.getElementById("username").innerText = "Digite o seu nome de usuário";
  }
}
