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
      .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
}


  
  window.onload = function(){
    traduzido();
    cookieGerador();
    loadJSONFileAndProcess();
        };
