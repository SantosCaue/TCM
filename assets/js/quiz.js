visivel = false;
const navegacao = document.querySelector("nav");
if (document.cookie.length == 0) {
    document.cookie = "idioma=" + "portugues" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
  }
  traduzido();
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
    traduzido();
    setTimeout(function(){
      navegacao.style.height = parseFloat(window.getComputedStyle(document.querySelector("main")).height) + parseFloat(window.getComputedStyle(document.querySelector("footer")).height) + 'px';
      }, 100)
  }  

  function traduzido() {
    if (getCookie("idioma") == "ingles") {
      document.getElementsByTagName("h1")[0].innerText = "COUNTRY WIKI";
      document.getElementsByTagName("span")[3].innerText = "CONTINENTS";
      document.getElementsByTagName("span")[5].innerText = "COUNTRIES";
      document.getElementsByTagName("span")[7].innerText = "RANDOM COUNTRY";
      document.getElementsByTagName("span")[9].innerText = "CHANGE LANGUAGE";
      document.getElementsByClassName("subtitulo")[0].innerHTML = "GEOGRAPHY QUIZ";
      document.getElementsByClassName("subtitulo")[1].innerHTML = "CAPITALS";
      document.getElementsByClassName("subtitulo")[2].innerHTML = "GUESS THE FLAG";
      document.getElementsByTagName("footer")[0].innerHTML = "<p> COPYRIGHT CAUÊ GONÇALVES SANTOS &COPY; 2023</p>";
    } else if (getCookie("idioma") == "portugues") {
      document.getElementsByTagName("h1")[0].innerText = "WIKI DOS PAÍSES";
      document.getElementsByTagName("span")[3].innerText = "CONTINENTES";
      document.getElementsByTagName("span")[5].innerText = "PAÍSES";
      document.getElementsByTagName("span")[7].innerText = "CAPITAIS"
      document.getElementsByTagName("span")[9].innerText = "MUDAR IDIOMA";
      document.getElementsByClassName("subtitulo")[0].innerHTML = "QUIZ GEOGRÁFICO";
      document.getElementsByClassName("subtitulo")[1].innerHTML = "ONDE FICA";
      document.getElementsByClassName("subtitulo")[2].innerHTML = "ACERTE A BANDEIRA";
      document.getElementsByTagName("footer")[0].innerHTML = "<p>TODOS OS DIREITOS RESERVADOS CAUÊ GONÇALVES SANTOS &COPY; 2023</p>"
    }
  }