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
    traduzido();
  }  

  function traduzido() {
    if (getCookie("idioma") == "ingles") {
      document.getElementsByTagName("h1")[0].innerText = "COUNTRY WIKI";
      document.getElementsByTagName("span")[3].innerText = "CONTINENTS";
      document.getElementsByTagName("span")[5].innerText = "COUNTRIES";
      document.getElementsByTagName("span")[7].innerText = "RANDOM COUNTRY"
      document.getElementsByTagName("span")[9].innerText = "CHANGE LANGUAGE";
      document.getElementsByClassName("subtitulo")[0].innerHTML = "GEOGRAPHY QUIZ";
      document.getElementsByClassName("subtitulo")[1].innerHTML = "WHERE IS IT";
      document.getElementsByClassName("subtitulo")[2].innerHTML = "GUESS THE FLAG";
      document.getElementsByTagName("footer")[0].innerHTML = "<p> COPYRIGHT CAUÊ GONÇALVES SANTOS &COPY; 2023</p>";
    } else if (getCookie("idioma") == "portugues") {
      document.getElementsByTagName("h1")[0].innerText = "WIKI DOS PAÍSES";
      document.getElementsByTagName("span")[3].innerText = "CONTINENTES";
      document.getElementsByTagName("span")[5].innerText = "PAÍSES";
      document.getElementsByTagName("span")[7].innerText = "PAÍS ALEATÓRIO"
      document.getElementsByTagName("span")[9].innerText = "MUDAR IDIOMA";
      document.getElementsByClassName("subtitulo")[0].innerHTML = "QUIZ GEOGRÁFICO";
      document.getElementsByClassName("subtitulo")[1].innerHTML = "ONDE FICA";
      document.getElementsByClassName("subtitulo")[2].innerHTML = "ACERTE A BANDEIRA";
      document.getElementsByTagName("footer")[0].innerHTML = "<p>TODOS OS DIREITOS RESERVADOS CAUÊ GONÇALVES SANTOS &COPY; 2023</p>"
    }
  }