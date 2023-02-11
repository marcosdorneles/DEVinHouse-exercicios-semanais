// Utilizando o setInterval, crie uma função que mostre o horário atual e atualize automaticamente a cada 1 segundos.

function updateTime() {
    const now = new Date();
    const dataFormatada = now.toLocaleDateString('pt-BR')
    console.log(`${hours}:${minutes}:${seconds}`);
  }

  setInterval(updateTime, 1000);
  