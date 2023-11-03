var visivel = false;
const navegacao = document.querySelector("nav");
const Hard = [{"PaisEn": "", "PaisPT": "", "link": "" },];
const Medio = [{"PaisEn": "", "PaisPT": "", "link": "" },];
const Facil = [{"PaisEn": "Brazil", "PaisPT": "Brasil", "link": "assets/imgs/redentor.jpg" },];
var preload = [];
var rodada = 0;
var Nivel;
var nomePais;
var coutryName;

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
      navegacao.style.height = parseFloat(window.getComputedStyle(document.querySelector("main")).height) + parseFloat(window.getComputedStyle(document.querySelector("footer")).height) + 'px';      ;
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
  contagemregressiva();
  for(d =0; d < Nivel.length; d++){
    img = new Image();
    img.src = Nivel[d].bandeira;
    preload.push(img);
  }
}

function atualizar() {
  document.getElementById("enunciado").innerText = "RODADA " + (rodada + 1) + "/" + Nivel.length;
  const nomePt = Nivel[rodada].PaisPT;
  const nomeEn = Nivel[rodada].PaisEn;
  const foto = Nivel[rodada].link;
  nomePais = nomePt;
  coutryName = nomeEn;
  document.getElementById("imagem").src = foto;
}

function pontuar() {
  if (document.getElementById('resposta').value.toLowerCase() == nomePais.toLowerCase() || document.getElementById('resposta').value.toLowerCase() == coutryName.toLowerCase()) {
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
      document.getElementById("resultado").innerText = "Seu tempo acabou. Você consegui acertar " + rodada + " bandeideras";
      break;
    case "ganhar":
      document.getElementById("resultado").innerText = "Parabéns você conseguiu acertar todas bandeiras";
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
}

function traduzido() {
  if (getCookie("idioma") == "ingles") {
    document.getElementsByTagName("h1")[0].innerText = "COUNTRY WIKI";
    document.getElementsByTagName("span")[3].innerText = "CONTINENTS";
    document.getElementsByTagName("span")[5].innerText = "COUNTRIES";
    document.getElementsByTagName("span")[7].innerText = "RANDOM COUNTRY"
    document.getElementsByTagName("span")[9].innerText = "CHANGE LANGUAGE";
    document.getElementsByTagName("footer")[0].innerHTML = "<p> COPYRIGHT CAUÊ GONÇALVES SANTOS &COPY; 2023</p>"
  } else if (getCookie("idioma") == "portugues") {
    document.getElementsByTagName("h1")[0].innerText = "WIKI DOS PAÍSES";
    document.getElementsByTagName("span")[3].innerText = "CONTINENTES";
    document.getElementsByTagName("span")[5].innerText = "PAÍSES";
    document.getElementsByTagName("span")[7].innerText = "PAÍS ALEATÓRIO"
    document.getElementsByTagName("span")[9].innerText = "MUDAR IDIOMA";
    document.getElementsByTagName("footer")[0].innerHTML = "<p>TODOS OS DIREITOS RESERVADOS CAUÊ GONÇALVES SANTOS &COPY; 2023</p>"
  }
}