var url = window.location.href;
var partes = url.split('/');
var nomeArquivo = partes[partes.length - 1];
var pais = "assets/paisesdados/" + nomeArquivo.split(".")[0] + ".json";

//CASO NÃO TENHA COOKIE GERA COOKIE
if (document.cookie.length == 0) {
  document.cookie = "idioma=" + "portugues" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
}


//MÉTODO QUE RETORNA O VALOR DO COOKIE
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


//FUNÇÃO DO MENU BONITO
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

function traduzir() {
  if (getCookie("idioma") == "portugues") {
    document.cookie = "idioma=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "idioma=" + "ingles" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
  } else if (getCookie("idioma") == "ingles") {
    document.cookie = "idioma=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "idioma=" + "portugues" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
  }
  loadCountryData();
  traduzido();
}
console.log(getCookie("idioma"));
function loadCountryData() {
  var ajaxRequest = new XMLHttpRequest();
  ajaxRequest.open('GET', pais, true);
  ajaxRequest.onreadystatechange = function () {
    if (ajaxRequest.readyState === 4 && ajaxRequest.status === 200) {
      const jsonText = ajaxRequest.responseText;
      const jsonData = JSON.parse(jsonText);

      if (getCookie("idioma") == "portugues") {
        document.getElementById("country").innerHTML = jsonData.nome_pt;
        document.getElementById("descricao").innerText = jsonData.descricao_pt;
        document.getElementById("populacao").innerText = "POPULAÇÃO: " + jsonData.populacao + " habitantes";
        document.getElementById("pib").innerText = "PIB: US$" + jsonData.pib;
        document.getElementById("area").innerText = "ÁREA: " + jsonData.area + "km²";
        document.getElementById("moeda").innerText = "MOEDA: " + jsonData.moeda_pt;
        document.getElementById("idioma").innerText = "IDIOMA: " + jsonData.idioma_pt;
        document.getElementById("capital").innerText = "CAPITAL: " + jsonData.capital_pt;
        document.getElementById("bibliografia").innerText = "FONTE: CIA WORLD FACTBOOK";
      } else if (getCookie("idioma") == "ingles") {
        document.getElementById("country").innerHTML = jsonData.nome_en;
        document.getElementById("descricao").innerText = jsonData.descricao_en;
        document.getElementById("populacao").innerText = "POPULATION: " + jsonData.populacao + " habitantes";
        document.getElementById("pib").innerText = "GDP: US$" + jsonData.pib;
        document.getElementById("area").innerText = "AREA: " + jsonData.area + "km²";
        document.getElementById("moeda").innerText = "CURRENCY: " + jsonData.moeda_en;
        document.getElementById("idioma").innerText = "LANGUAGE: " + jsonData.idioma_en;
        document.getElementById("capital").innerText = "CAPITAL: " + jsonData.capital_en;
        document.getElementById("bibliografia").innerText = "SOURCE: CIA WORLD FACTBOOK";
      }
      document.getElementById("mapa").src = jsonData.mapa;
      document.getElementById("bandeira").src = jsonData.bandeira;
    }
  };
  ajaxRequest.send();
}

window.addEventListener('DOMContentLoaded', loadCountryData,);


function traduzido() {
  if (getCookie("idioma") == "ingles") {
    document.getElementsByTagName("h1")[0].innerText = "COUNTRY WIKI";
    document.getElementsByTagName("span")[3].innerText = "CONTINENTS";
    document.getElementsByTagName("span")[5].innerText = "COUNTRIES";
    document.getElementsByTagName("span")[7].innerText = "CHANGE LANGUAGE";
    document.getElementsByTagName("footer")[0].innerHTML = "<p> COPYRIGHT CAUÊ GONÇALVES SANTOS &COPY; 2023</p>"
  } else if (getCookie("idioma") == "portugues") {
    document.getElementsByTagName("h1")[0].innerText = "WIKI DOS PAÍSES";
    document.getElementsByTagName("span")[3].innerText = "CONTINENTES";
    document.getElementsByTagName("span")[5].innerText = "PAÍSES";
    document.getElementsByTagName("span")[7].innerText = "MUDAR IDIOMA";
    document.getElementsByTagName("footer")[0].innerHTML = "<p>TODOS OS DIREITOS RESERVADOS CAUÊ GONÇALVES SANTOS &COPY; 2023</p>"
  }
}

window.onload = function () {
  traduzido();
}