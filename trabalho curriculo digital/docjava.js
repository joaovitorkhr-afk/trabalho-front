// Seleciona o botão pelo ID
const botaoTema = document.getElementById("botaoTema");

// Adiciona o evento de clique
botaoTema.addEventListener("click", function () {

    // Adiciona ou remove a classe tema-claro do body
    document.body.classList.toggle("tema-claro");

    // Altera o texto do botão
    if (document.body.classList.contains("tema-claro")) {
        botaoTema.innerText = "Tema Escuro";
    } else {
        botaoTema.innerText = "Tema Claro";
    }

});