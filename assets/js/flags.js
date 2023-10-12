Hard = ['el salvador', 'comoros', 'djibouti', 'chad', 'mali', 'ivory coast', 'saint Lucia', 'nicaragua', 'central africa', 'micronesia'];
Medio = ['nepal', 'vietnam', 'mongolia', 'finland', 'jamaica', 'egypt', 'bulgaria', 'austria', 'kazakhstan', 'hungary', 'new zealand']
Facil = ['france', 'brazil', 'germany', 'mexico', 'south korea', 'united states', 'saudi arabia', 'united kingdom', 'japan', 'canada']
rodada = 0;
var Nivel;
var nomePais;
var coutryName;
let dados = new Map();
function ChamarQuiz(dificuldade) {
  switch (dificuldade) {
    case 1:
      Nivel = Facil;
      break;
    case 2:
      Nivel = Medio;
      break;
    case 3:
      Nivel = Hard;
      break;
  }
  document.getElementById("dificuldade").style.display = 'none';
  document.getElementsByTagName("form")[0].style.display = 'flex';
  buscar();
  contagemregressiva();
}
function buscar() {
  fetch('assets/json/arquivo_compilado.json')
    .then(response => response.json())
    .then(data => {
      for (let n = 0; n < Nivel.length; n++) {
        dados.set(Nivel[n], data[Nivel[n]]);
      }
      atualizar()
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });

  }
function atualizar() {
  document.getElementById("enunciado").innerText = "BANDEIRA " + (rodada + 1) + "/" + Nivel.length;
  const nomePt = dados.get(Nivel[rodada]).nome_pt;
  const nomeEn = dados.get(Nivel[rodada]).nome_en;
  const bandeira = dados.get(Nivel[rodada]).bandeira;
  nomePais = nomePt;
  coutryName = nomeEn;
  document.getElementById("bandeira").src = bandeira;
}

function pontuar() {
  if (document.getElementById('resposta').value.toLowerCase() == nomePais.toLowerCase() || document.getElementById('resposta').value.toLowerCase() == coutryName.toLowerCase()) {
    document.getElementById('resposta').value = null;
    rodada++;
    if (rodada == Nivel.length) {
      document.getElementById("resultado").innerText = "Parabéns você conseguiu acertar todas bandeiras";
      document.getElementsByTagName("form")[0].style.display = 'none';
      document.getElementsByTagName("form")[1].style.display = 'flex';
      clearInterval(countdownInterval);
    }else{
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
  const countdownElement = document.getElementById("temporizador");
  let remainingSeconds = 90;
  const countdownInterval = setInterval(function () {
    remainingSeconds--;

    if (remainingSeconds <= 0) {
      clearInterval(countdownInterval);
      document.getElementsByTagName("form")[0].style.display = 'none';
      document.getElementsByTagName("form")[1].style.display = 'flex';
      document.getElementById("resultado").innerText = "Seu tempo acabou. Você consegui acertar " + rodada + " bandeideras";
    } else {
      countdownElement.textContent = `${formatTime(remainingSeconds)}`;
    }
  }, 1000); // Atualiza a cada segundo (1000 milissegundos)
}