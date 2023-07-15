window.onload = function (){
    cookieGerador();
}
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
        footeraltura = parseFloat(footeraltura)
        setTimeout(function () {
            document.getElementsByTagName("nav")[0].style.height = footeraltura + mainaltura + "px";
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
    console.log(getCookie("idioma"))
    if(getCookie("idioma") ==  "portugues"){
    document.cookie = "idioma=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "idioma=" + "ingles" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
    document.getElementsByTagName("h1")[0].innerText = "COUNTRY WIKI";
    document.getElementsByTagName("span")[3].innerText = "CONTINENTS";
    document.getElementsByTagName("span")[5].innerText = "COUNTRIES";
    document.getElementsByTagName("span")[7].innerText = "CHANGE LANGUAGE";
    }else if(getCookie("idioma") == "ingles"){
    document.cookie = "idioma=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "idioma=" + "portugues" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
    document.getElementsByTagName("h1")[0].innerText = "WIKI DOS PAÍSES";
    document.getElementsByTagName("span")[3].innerText = "CONTINENTES";
    document.getElementsByTagName("span")[5].innerText = "PAÍSES";
    document.getElementsByTagName("span")[7].innerText = "MUDAR IDIOMA";
    }
}
