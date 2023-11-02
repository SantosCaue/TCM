var visivel = false;

var url = window.location.href;
var partes = url.split('/');
var nomeArquivo = partes[partes.length - 1];
var pais = nomeArquivo.split(".")[0].replace("_", " ");

//CASO NÃO TENHA COOKIE GERA COOKIE
if (document.cookie.length == 0) {
  document.cookie = "idioma=" + "portugues" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
}
traduzido();
pegarDados();
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

function traduzir() {
  if (getCookie("idioma") == "portugues") {
    document.cookie = "idioma=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "idioma=" + "ingles" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
  } else if (getCookie("idioma") == "ingles") {
    document.cookie = "idioma=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "idioma=" + "portugues" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
  }
  pegarDados();
  traduzido();
}

function pegarDados(){
  fetch('assets/json/arquivo_compilado.json')
    .then(response => response.json())
    .then(jsonData => {
      const elemento = jsonData[pais];
      document.getElementById("mapa").src = elemento.mapa;
      document.getElementById("bandeira").src = elemento.bandeira;
      if (getCookie("idioma") == "portugues") {
        document.getElementById("country").innerHTML = elemento.nome_pt;
        document.getElementById("descricao").innerText = elemento.descricao_pt;
        document.getElementById("populacao").innerText = "POPULAÇÃO: " + elemento.populacao + " habitantes";
        document.getElementById("pib").innerText = "PIB: US$" + elemento.pib;
        document.getElementById("area").innerText = "ÁREA: " + elemento.area + "km²";
        document.getElementById("moeda").innerText = "MOEDA: " + elemento.moeda_pt;
        document.getElementById("idioma").innerText = "IDIOMA: " + elemento.idioma_pt;
        document.getElementById("capital").innerText = "CAPITAL: " + elemento.capital_pt;
        document.getElementById("bibliografia").innerText = "FONTE: CIA WORLD FACTBOOK";
      } else if (getCookie("idioma") == "ingles") {
        document.getElementById("country").innerHTML = elemento.nome_en;
        document.getElementById("descricao").innerText = elemento.descricao_en;
        document.getElementById("populacao").innerText = "POPULATION: " + elemento.populacao + " habitantes";
        document.getElementById("pib").innerText = "GDP: US$" + elemento.pib;
        document.getElementById("area").innerText = "AREA: " + elemento.area + "km²";
        document.getElementById("moeda").innerText = "CURRENCY: " + elemento.moeda_en;
        document.getElementById("idioma").innerText = "LANGUAGE: " + elemento.idioma_en;
        document.getElementById("capital").innerText = "CAPITAL: " + elemento.capital_en;
        document.getElementById("bibliografia").innerText = "SOURCE: CIA WORLD FACTBOOK";
      }
    })
    .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

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
