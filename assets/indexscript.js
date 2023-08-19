const h1 = document.getElementsByTagName("h1");
const h2 = document.getElementsByTagName("h2")
const span = document.getElementsByTagName("span");
const footer = document.getElementsByTagName("footer");
const topicos = document.getElementsByClassName("topico");
const bottomright = document.getElementsByClassName("right")[1];
const bottomleft = document.getElementsByClassName("left")[1];
const topleft = document.getElementsByClassName("left")[0];
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

function cookieGerador(){
    console.log(document.cookie)
    if(document.cookie.length == 0){
        document.cookie = "idioma=" + "portugues" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
    }
}

function menulateral() {
  navegacao = document.getElementsByTagName("nav")[0];
  var mainaltura = window.getComputedStyle(document.getElementsByTagName("main")[0]).height;
  var footeraltura = window.getComputedStyle(footer[0]).height;
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
    var navaltura = footeraltura + mainaltura + "px";
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

function traduzir(){
    console.log(getCookie("idioma"));
    if(getCookie("idioma") ==  "portugues"){
    document.cookie = "idioma=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "idioma=" + "ingles" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
    }else if(getCookie("idioma") == "ingles"){
    document.cookie = "idioma=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "idioma=" + "portugues" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
    }
    traduzido();
}

function traduzido(){
    if (getCookie("idioma") == "ingles") {
      h1[0].innerText = "COUNTRY WIKI";
      h2[0].innerText = "CONTINENTS";
      topleft.querySelectorAll("a")[0].innerText = "AMERICA";
      topleft.querySelectorAll("a")[1].innerText = "AFRICA";
      topleft.querySelectorAll("a")[2].innerText = "ASIA";
      span[3].innerText = "CONTINENTS";
      span[5].innerText = "COUNTRIES";
      span[7].innerText = "CHANGE LANGUAGE";
      footer[0].innerHTML = "<p> COPYRIGHT CAUÊ GONÇALVES SANTOS &COPY; 2023</p>";
      bottomleft.querySelectorAll("p")[0].innerHTML = "Country of the day"
      document.getElementById("textodown").innerHTML = 'THE COUNTRY OF THE DAY IS <span id="nomepais"></span>, KNOW MORE ABOUT THIS COUNTRY AND ITS GEOGRAPHY';
      topicos[0].querySelector("p").innerText = "FLAGS OF THE WORLD AND THEIR MEANING";
      topicos[1].querySelector("p").innerText = "LIST OF THE BEST COUNTRIES TO TRAVEL";
      topicos[2].querySelector("p").innerText = "WHICH COUNTRIES HAVE THE HIGHEST HDI OF ALL?";
      bottomright.querySelector("p").innerText = "KNOW ALL ABOUT HISTORICAL FLAGS AND THEIR MEANINGS, REASONS AND STYLES.";
    } else if (getCookie("idioma") == "portugues") {
      h1[0].innerText = "WIKI DOS PAÍSES";
      h2[0].innerText = "CONTINENTES"
      topleft.querySelectorAll("a")[0].innerText = "AMÉRICA";
      topleft.querySelectorAll("a")[1].innerText = "ÁFRICA";
      topleft.querySelectorAll("a")[2].innerText = "ÁSIA";
      span[3].innerText = "CONTINENTES";
      span[5].innerText = "PAÍSES";
      span[7].innerText = "MUDAR IDIOMA";
      footer[0].innerHTML = "<p>TODOS OS DIREITOS RESERVADOS CAUÊ GONÇALVES SANTOS &COPY; 2023</p>"
      bottomleft.querySelectorAll("p")[0].innerHTML = "País do dia"
      document.getElementById("textodown").innerHTML = 'O PAÍS DO DIA É <span id="nomepais"></span>, CONHEÇA MAIS SOBRE ESSE PAÍS E SUA GEOGRAFIA';
      topicos[0].querySelector("p").innerText = "BANDEIRAS DO MUNDO E SEUS SIGNIFICADOS";
      topicos[1].querySelector("p").innerText = "LISTA DOS MELHORES PAÍSES PARA VIAJAR";
      topicos[2].querySelector("p").innerText = "QUAIS SÃO OS PAÍSES COM O MAIOR IDH DO MUNDO?";
      bottomright.querySelector("p").innerText = "CONHEÇA SOBRE BANDEIRAS HISTÓRICAS E SEUS SIGNIFICADOS, RAZÕES, E ESTILOS.";
    }
    loadJSONFileAndProcess();
    footeraltura = parseFloat(footer[0].style.height);
    mainaltura = parseFloat(document.getElementsByTagName("main")[0].style.height);
    navaltura = footeraltura + mainaltura + "px";
    console.log(navaltura);
    navegacao.style.height = navaltura;
  }

// Função para obter a data atual no formato "DD_MM"
function getFormattedDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  return `${day}_${month}`;
}


// Função para buscar o elemento correspondente no JSON e atualizar o <h2>
function updateH2WithPaisPortugues(jsonData) {
  const formattedDate = getFormattedDate();
  const elemento = jsonData[formattedDate];
  if (elemento) {
      document.getElementById('paisdodiabandeira').src = elemento.Bandeira;
      document.getElementsByClassName("left")[1].onclick = function(){window.location.href = elemento.Arquivo;};
      if(getCookie("idioma") ==  "portugues"){
        document.getElementById("nomepais").innerHTML = elemento.PAISportugues.toUpperCase();
      }else{
        document.getElementById("nomepais").innerHTML = elemento.PAISingles.toUpperCase();

      }
  }
}

// Função para carregar o JSON externo e chamar a função de atualização do <h2>
function loadJSONFileAndProcess() {
  fetch('assets/paisesdados/paisdodia.json')
      .then(response => response.json())
      .then(jsonData => updateH2WithPaisPortugues(jsonData))
      .catch(error => console.error('Erro ao carregar o arquivo JSON:', error)); //chatgpt fez isso mas sei pq tem isso nn
}


  
  window.onload = function(){
    traduzido();
    cookieGerador();
        };
//parando pra pensar eu acho q deveria ter usado xml sobre json
