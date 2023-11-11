var visivel = false;
const navegacao = document.querySelector("nav");
var url = window.location.href;
var partes = url.split('/');
var nomeArquivo = partes[partes.length - 1];
const pais = nomeArquivo.split(".")[0].replaceAll("_", " ");

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
        navegacao.style.height = parseFloat(window.getComputedStyle(document.querySelector("main")).height) + parseFloat(window.getComputedStyle(document.querySelector("footer")).height) + 'px';;
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
    pegarDados();
    traduzido();
    setTimeout(function(){
    navegacao.style.height = parseFloat(window.getComputedStyle(document.querySelector("main")).height) + parseFloat(window.getComputedStyle(document.querySelector("footer")).height) + 'px';
    }, 100)
}

function pegarDados() {
    document.querySelector("#lista").innerHTML = "";
    fetch('assets/json/continentes.json')
        .then(response => response.json())
        .then(jsonData => {
            const elemento = jsonData[pais];
            if (getCookie("idioma") == "portugues") {
                document.getElementById("country").innerHTML = elemento.nome_pt;
                document.getElementById("descricao").innerText = elemento.descricao_pt;
                document.getElementById("populacao").innerText = "POPULAÇÃO: " + elemento.populacao + " habitantes";
                document.getElementById("pib").innerText = "PIB: US" + elemento.pib;
                document.getElementById("area").innerText = "ÁREA: " + elemento.area + "km²";
                const vetor = elemento.paises;
                vetor.sort((a, b) => a.nome_pt.localeCompare(b.nome_pt));
                vetor.forEach(element => {
                    item = document.createElement("li");
                    item.innerHTML = element.nome_pt;
                    document.querySelector("#lista").appendChild(item);
                });
            } else if (getCookie("idioma") == "ingles") {
                document.getElementById("country").innerHTML = elemento.nome_en;
                document.getElementById("descricao").innerText = elemento.descricao_en;
                document.getElementById("populacao").innerText = "POPULATION: " + elemento.populacao + " habitantes";
                document.getElementById("pib").innerText = "GDP: US" + elemento.pib;
                document.getElementById("area").innerText = "AREA: " + elemento.area + "km²";
                const vetor = elemento.paises;
                vetor.sort((a, b) => a.nome_en.localeCompare(b.nome_en));
                vetor.forEach(element => {
                    item = document.createElement("li");
                    item.innerHTML = element.nome_en;
                    document.querySelector("#lista").appendChild(item);
                });
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