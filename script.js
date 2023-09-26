// Obtenha a referência para o elemento "sim" por meio de seu ID
var simElement = document.getElementById("sim");

// Obtenha a referência para o elemento de imagem por meio de seu ID
var imagemElement = document.getElementById("imagem");

// Adicione um ouvinte de evento de clique ao elemento "sim"
simElement.addEventListener("click", function() {
    // Altere o atributo src da imagem para o URL da imagem que deseja exibir
    imagemElement.src = "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-golfinho-um-exemplo-animal-pertencente-ao-grupo-dos-mamiferos-5bd334f3235f1.jpg";
    // Exiba a imagem definindo a propriedade display como "block"
    imagemElement.style.display = "block";
});
