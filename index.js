const heroi = {
    nome: "Super Herói",
    xp: 8000,
  };
  
  // Estrutura de decisão para determinar o nível com base na quantidade de experiência
  let nivel;
  
  if (heroi.xp < 1000) {
    nivel = "Ferro";
  } else if (heroi.xp <= 2000) {
    nivel = "Bronze";
  } else if (heroi.xp <= 5000) {
    nivel = "Prata";
  } else if (heroi.xp <= 7000) {
    nivel = "Ouro";
  } else if (heroi.xp <= 9000) {
    nivel = "Ascendente";
  } else if (heroi.xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }
  
  // Exibição da mensagem final
  console.log(`O herói de nome ${heroi.nome} está no nível de ${nivel}.`);