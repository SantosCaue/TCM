var visivel = false;
const navegacao = document.querySelector("nav");
const Hard = [{"nome_en":"Nigeria","nome_pt":"Nigéria","capital_en":"Abuja","capital_pt":"Abuja","bandeira":"https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg"},{"nome_en":"Burkina Faso","nome_pt":"Burquina Faso","capital_en":"Ouagadougou","capital_pt":"Uagadugu","bandeira":"https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg"},{"nome_en":"Guyana","nome_pt":"Guiana","capital_en":"Georgetown","capital_pt":"Georgetown","bandeira":"https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg"},{"nome_en":"Seychelles","nome_pt":"Seicheles","capital_en":"Victoria","capital_pt":"Vitória","bandeira":"https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg"},{"nome_en":"Turkmenistan","nome_pt":"Turcomenistão","capital_en":"Ashgabat","capital_pt":"Asgabade","bandeira":"https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg"},{"nome_en":"Botswana","nome_pt":"Botsuana","capital_en":"Gaborone","capital_pt":"Gaborone","bandeira":"https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg"},{"nome_en":"Somalia","nome_pt":"Somália","capital_en":"Mogadishu","capital_pt":"Mogadíscio","bandeira":"https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg"},{"nome_en":"Andorra","nome_pt":"Andorra","capital_en":"Andorra la Vella","capital_pt":"Andorra-a-Velha","bandeira":"https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg"},{"nome_en":"Moldova","nome_pt":"Moldávia","capital_en":"Chisinau","capital_pt":"Quixinau","bandeira":"https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg"},{"nome_en":"Suriname","nome_pt":"Suriname","capital_en":"Paramaribo","capital_pt":"Paramaribo","bandeira":"https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg"}];
const Medio = [{"nome_en":"Vietnam","nome_pt":"Vietnã","capital_en":"Hanoi","capital_pt":"Hanói","bandeira":"https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"},{"nome_en":"Portugal","nome_pt":"Portugal","capital_en":"Lisbon","capital_pt":"Lisboa","bandeira":"https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"},{"nome_en":"Egypt","nome_pt":"Egito","capital_en":"Cairo","capital_pt":"Cairo","bandeira":"https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg"},{"nome_en":"North Korea","nome_pt":"Coreia do Norte","capital_en":"Pyongyang","capital_pt":"Pionguiangue","bandeira":"https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg"},{"nome_en":"Australia","nome_pt":"Austrália","capital_en":"Canberra","capital_pt":"Camberra","bandeira":"https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"},{"nome_en":"Serbia","nome_pt":"Sérvia","capital_en":"Belgrade","capital_pt":"Belgrado","bandeira":"https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg"},{"nome_en":"Bosnia and Herzegovina","nome_pt":"Bósnia e Herzegovina","capital_en":"Sarajevo","capital_pt":"Saraievo","bandeira":"https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg"},{"nome_en":"Turkey","nome_pt":"Turquia","capital_en":"Ankara","capital_pt":"Ancara","bandeira":"https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"},{"nome_en":"Mexico","nome_pt":"México","capital_en":"Mexico City","capital_pt":"Cidade do México","bandeira":"https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg"},{"nome_en":"Chile","nome_pt":"Chile","capital_en":"Santiago","capital_pt":"Santiago","bandeira":"https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg"}];
const Facil = [{"nome_en":"Brazil","nome_pt":"Brasil","capital_en":"Brasília","capital_pt":"Brasília","bandeira":"https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"},{"nome_en":"China","nome_pt":"China","capital_en":"Beijing","capital_pt":"Pequim","bandeira":"https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"},{"nome_en":"France","nome_pt":"França","capital_en":"Paris","capital_pt":"Paris","bandeira":"https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"},{"nome_en":"United Kingdom","nome_pt":"Reino Unido","capital_en":"London","capital_pt":"Londres","bandeira":"https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg"},{"nome_en":"Spain","nome_pt":"Espanha","capital_en":"Madrid","capital_pt":"Madrid","bandeira":"https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"},{"nome_en":"Japan","nome_pt":"Japão","capital_en":"Tokyo","capital_pt":"Tóquio","bandeira":"https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg"},{"nome_en":"South Korea","nome_pt":"Coreia do Sul","capital_en":"Seoul","capital_pt":"Seul","bandeira":"https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg"},{"nome_en":"Italy","nome_pt":"Itália","capital_en":"Rome","capital_pt":"Roma","bandeira":"https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"},{"nome_en":"Argentina","nome_pt":"Argentina","capital_en":"Buenos Aires","capital_pt":"Buenos Aires","bandeira":"https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"},{"nome_en":"Austria","nome_pt":"Áustria","capital_en":"Vienna","capital_pt":"Viena","bandeira":"https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg"}];
var preload = [];
var rodada = 0;
var Nivel;
var capitalEn;
var capitalPt;

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
  capitalEn = Nivel[rodada].capital_en;
  capitalPt = Nivel[rodada].capital_pt;
  document.getElementById("imagem").src = foto;
}

function pontuar() {
  if (document.getElementById('resposta').value.toLowerCase() == capitalEn.toLowerCase() || document.getElementById('resposta').value.toLowerCase() == capitalPt.toLowerCase()) {
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

function contagemregressiva() {
  let remainingSeconds = 90;
  countdownInterval = setInterval(function () {
    const countdownElement = document.getElementById("temporizador");
    remainingSeconds--;

    if (remainingSeconds <= 0) {
      clearInterval(countdownInterval);
      acabar("tempo");
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
    document.getElementById("choice").innerText = "Choose The Difficulty"
    document.getElementsByClassName("escolha")[0].innerText = "EASY";
    document.getElementsByClassName("escolha")[1].innerText = "MEDIUM";
    document.getElementsByClassName("escolha")[2].innerText = "HARD";
    document.getElementsByTagName("span")[9].innerText = "CHANGE LANGUAGE";
    document.getElementsByTagName("footer")[0].innerHTML = "<p> COPYRIGHT CAUÊ GONÇALVES SANTOS &COPY; 2023</p>"
    fimT = `Your time has ended. You got right ${rodada} capitals`;
    fimW = `Congratulations you got all answers right`;
    document.getElementById("username").innerText = "Type your username";
  } else if (getCookie("idioma") == "portugues") {
    document.getElementsByTagName("h1")[0].innerText = "WIKI DOS PAÍSES";
    document.getElementsByTagName("span")[3].innerText = "CONTINENTES";
    document.getElementsByTagName("span")[5].innerText = "PAÍSES";
    document.getElementsByTagName("span")[7].innerText = "PAÍS ALEATÓRIO";
    document.getElementsByTagName("span")[9].innerText = "MUDAR IDIOMA";
    document.getElementById("choice").innerText = "Choose The Difficulty"
    document.getElementsByClassName("escolha")[0].innerText = "FÁCIL";
    document.getElementsByClassName("escolha")[1].innerText = "MÉDIO";
    document.getElementsByClassName("escolha")[2].innerText = "DIFÍCIL";
    document.getElementsByTagName("footer")[0].innerHTML = "<p>TODOS OS DIREITOS RESERVADOS CAUÊ GONÇALVES SANTOS &COPY; 2023</p>";
    fimT = `Seu tempo acabou. Você conseguiu acertar ${rodada} capitais`
    fimW = `Parabéns você conseguiu acertar todas bandeiras`
    document.getElementById("username").innerText = "Digite o seu nome de usuário";
  }
}