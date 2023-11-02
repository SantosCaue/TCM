var visivel = false
const footer = document.getElementsByTagName("footer");
const navegacao = document.getElementsByTagName("nav")[0];

if (document.cookie.length == 0) {
  document.cookie = "idioma=" + "portugues" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
}
traduzido();

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
}

function traduzido() {
  const h1 = document.getElementsByTagName("h1");
  const span = document.getElementsByTagName("span");
  if (getCookie("idioma") == "ingles") {
    document.querySelector("title").innerHTML = "COUNTRIES";
    h1[0].innerText = "COUNTRY WIKI";
    span[3].innerText = "CONTINENTS";
    span[5].innerText = "COUNTRIES";
    span[7].innerText = "CHANGE LANGUAGE";
    footer[0].innerHTML = "<p> COPYRIGHT CAUÊ GONÇALVES SANTOS &COPY; 2023</p>";
    document.getElementsByTagName("html")[0].lang = "en";
  } else if (getCookie("idioma") == "portugues") {
    document.querySelector("title").innerHTML = "PAÍSES";
    h1[0].innerText = "WIKI DOS PAÍSES";
    span[3].innerText = "CONTINENTES";
    span[5].innerText = "PAÍSES";
    span[7].innerText = "MUDAR IDIOMA";
    footer[0].innerHTML = "<p>TODOS OS DIREITOS RESERVADOS CAUÊ GONÇALVES SANTOS &COPY; 2023</p>"
    document.getElementsByTagName("html")[0].lang = "pt-br";
  }
  ListaDePaises()
}


// Faz a requisição para o arquivo JSON externo
function ListaDePaises() {
  let n = 0;
  fetch('assets/json/lista_paises.json')
    .then(response => response.json()) // Converte a resposta para JSON
    .then(data => {
      if (getCookie("idioma") == "ingles") {
        data.sort((a, b) => a.nome_en.localeCompare(b.nome_en));
        data.forEach(item => {
          const nomePt = item.nome_pt;
          const nomeEn = item.nome_en;
          const bandeira = item.bandeira;
          document.querySelectorAll(".bandeira")[n].querySelector("img").src = bandeira;
          document.querySelectorAll(".bandeira")[n].querySelector("img").alt = nomeEn + " flag";
          document.getElementsByClassName("nome")[n].innerHTML = nomeEn;
          document.getElementsByTagName("main")[0].querySelectorAll("a")[n].href = nomeEn.toLowerCase().replace(" ", "_") + ".html";
          n++
        });
      } else if (getCookie("idioma") == "portugues") {
        data.sort((a, b) => a.nome_pt.localeCompare(b.nome_pt));
        data.forEach(item => {
          const nomePt = item.nome_pt;
          const nomeEn = item.nome_en;
          const bandeira = item.bandeira;
          document.querySelectorAll(".bandeira")[n].querySelector("img").src = bandeira;
          document.querySelectorAll(".bandeira")[n].querySelector("img").alt = "bandeira de" + nomePt;
          document.getElementsByClassName("nome")[n].innerHTML = nomePt;
          document.getElementsByTagName("main")[0].querySelectorAll("a")[n].href = nomeEn.toLowerCase().replace(" ", "_") + ".html";
          n++
        });
      }

    })

    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });
}