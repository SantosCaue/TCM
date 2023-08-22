const footer = document.getElementsByTagName("footer");
const navegacao = document.getElementsByTagName("nav")[0];

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
    if(getCookie("idioma") ==  "portugues"){
    document.cookie = "idioma=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "idioma=" + "ingles" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
    }else if(getCookie("idioma") == "ingles"){
    document.cookie = "idioma=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "idioma=" + "portugues" + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/";
    }
    traduzido();
}

let n = 0;
let j = 1;
// Faz a requisição para o arquivo JSON externo
fetch('assets/paisesdados/arquivo_compilado.json')
    .then(response => response.json()) // Converte a resposta para JSON
    .then(data => {
      
      if(getCookie("idioma") == "ingles"){
      data.sort((a, b) => a.nome_en.localeCompare(b.nome_en));
      data.forEach(item => {
        const nomePt = item.nome_pt;
        const nomeEn = item.nome_en;
        const bandeira = item.bandeira;
        document.getElementsByTagName("img")[j].src = bandeira;
        document.getElementsByClassName("nome")[n].innerHTML = nomeEn;
        document.getElementsByTagName("main")[0].querySelectorAll("a")[n].href = nomeEn.toLowerCase()+".html";
        n++
        j++
    });
      }else if(getCookie("idioma") ==  "portugues"){
      data.sort((a, b) => a.nome_en.localeCompare(b.nome_pt));
      data.forEach(item => {
        const nomePt = item.nome_pt;
        const nomeEn = item.nome_en;
        const bandeira = item.bandeira;
        document.getElementsByTagName("img")[j].src = bandeira;
        document.getElementsByClassName("nome")[n].innerHTML = nomePt;
        document.getElementsByTagName("main")[0].querySelectorAll("a")[n].href = nomeEn.toLowerCase()+".html";
        n++
        j++
    });
      }
        // Agora você pode usar os dados no seu site
        
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
    });