const Hard = [{ "nome_pt": "El Salvador", "nome_en": "El Salvador", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg" }, { "nome_pt": "Comores", "nome_en": "Comoros", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg" }, { "nome_pt": "Djibouti", "nome_en": "Djibouti", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg" }, { "nome_pt": "Chade", "nome_en": "Chad", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg" }, { "nome_pt": "Mali", "nome_en": "Mali", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg" }, { "nome_pt": "Costa do Marfim", "nome_en": "Ivory Coast", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg" }, { "nome_pt": "Santa Lúcia", "nome_en": "Saint Lucia", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg" }, { "nome_pt": "Nicarágua", "nome_en": "Nicaragua", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg" }, { "nome_pt": "República Centro-Africana", "nome_en": "Central African Republic", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg" }, { "nome_pt": "Micronésia", "nome_en": "Micronesia", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg" }]
const Medio = [{ "nome_pt": "Nepal", "nome_en": "Nepal", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg" }, { "nome_pt": "Vietnã", "nome_en": "Vietnam", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" }, { "nome_pt": "Mongólia", "nome_en": "Mongolia", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg" }, { "nome_pt": "Finlândia", "nome_en": "Finland", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg" }, { "nome_pt": "Jamaica", "nome_en": "Jamaica", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg" }, { "nome_pt": "Egito", "nome_en": "Egypt", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" }, { "nome_pt": "Bulgária", "nome_en": "Bulgaria", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg" }, { "nome_pt": "Áustria", "nome_en": "Austria", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg" }, { "nome_pt": "Cazaquistão", "nome_en": "Kazakhstan", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg" }, { "nome_pt": "Hungria", "nome_en": "Hungary", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg" }, { "nome_pt": "Nova Zelândia", "nome_en": "New Zealand", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" }]
const Facil = [{ "nome_pt": "França", "nome_en": "France", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" }, { "nome_pt": "Brasil", "nome_en": "Brazil", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" }, { "nome_pt": "Alemanha", "nome_en": "Germany", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" }, { "nome_pt": "México", "nome_en": "Mexico", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" }, { "nome_pt": "Coreia do Sul", "nome_en": "South Korea", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" }, { "nome_pt": "Estados Unidos", "nome_en": "United States", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" }, { "nome_pt": "Arábia Saudita", "nome_en": "Saudi Arabia", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" }, { "nome_pt": "Reino Unido", "nome_en": "United Kingdom", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg" }, { "nome_pt": "Japão", "nome_en": "Japan", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg" }, { "nome_pt": "Canadá", "nome_en": "Canada", "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" }]
var rodada = 0;
var Nivel;
var nomePais;
var coutryName;
var countdownInterval;
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
}

function atualizar() {
  document.getElementById("enunciado").innerText = "BANDEIRA " + (rodada + 1) + "/" + Nivel.length;
  nomePais = Nivel[rodada].nome_pt;
  coutryName = Nivel[rodada].nome_en;
  document.getElementById("bandeira").src = Nivel[rodada].bandeira;
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
