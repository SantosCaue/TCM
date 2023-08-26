bandeirasNivelHard = ['el salvador', 'comoros', 'djibouti', 'chad', 'mali', 'ivory coast'];
fetch('assets/paisesdados/'+ bandeirasNivelHard[2] +'.json')
    .then(response => response.json()) // Converte a resposta para JSON
    .then(data => {
          const nomePt = data.nome_pt;
          const nomeEn = data.nome_en;
          const bandeira = data.bandeira;
          document.getElementById("bandeira").src = bandeira;
    })
  
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });
