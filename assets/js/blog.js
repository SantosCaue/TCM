const h1 = document.getElementsByTagName("h1");
const h2 = document.getElementsByTagName("h2")
const span = document.getElementsByTagName("span");
const footer = document.getElementsByTagName("footer");
const topicos = document.getElementsByClassName("topico");
const bottomright = document.getElementsByClassName("right")[1];
const bottomleft = document.getElementsByClassName("left")[1];
const topleft = document.getElementsByClassName("left")[0];
const navegacao = document.querySelector("nav");
var visivel = false;

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

if (document.cookie.length == 0) {
  document.cookie = "idioma=" + "portugues" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
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
    }, 100);
}

function traduzido() {
  if (getCookie("idioma") == "ingles") {
    document.getElementsByTagName("html")[0].lang = "en";
    h1[0].innerText = "COUNTRY WIKI";
    topleft.querySelectorAll("a")[0].innerText = "AMERICA";
    topleft.querySelectorAll("a")[1].innerText = "AFRICA";
    topleft.querySelectorAll("a")[2].innerText = "ASIA";
    span[3].innerText = "CONTINENTS";
    span[5].innerText = "COUNTRIES";
    span[7].innerText = "RANDOM COUNTRY";
    span[9].innerText = "CHANGE LANGUAGE";
    footer[0].innerHTML = "<p> COPYRIGHT CAUÊ GONÇALVES SANTOS &COPY; 2023</p>";
  } else if (getCookie("idioma") == "portugues") {
    document.getElementsByTagName("html")[0].lang = "pt-br";
    h1[0].innerText = "WIKI DOS PAÍSES";
    h2[0].innerText = "CONTINENTES"
    topleft.querySelectorAll("a")[0].innerText = "AMÉRICA";
    topleft.querySelectorAll("a")[1].innerText = "ÁFRICA";
    topleft.querySelectorAll("a")[2].innerText = "ÁSIA";
    span[3].innerText = "CONTINENTES";
    span[5].innerText = "PAÍSES";
    span[7].innerText = "PAÍS ALEATÓRIO";
    span[9].innerText = "MUDAR IDIOMA";
    footer[0].innerHTML = "<p>TODOS OS DIREITOS RESERVADOS CAUÊ GONÇALVES SANTOS &COPY; 2023</p>"
  }
}

window.onload = function () {
  traduzido();
};
