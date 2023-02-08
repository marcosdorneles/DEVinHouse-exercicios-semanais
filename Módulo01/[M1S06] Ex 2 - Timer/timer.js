// Utilizando o setInterval, crie uma função que mostre o horário atual e atualize automaticamente a cada 1 segundos.

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
  }
  
  setInterval(updateTime, 1000);
  