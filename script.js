let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("#busca"); // 1. Seleciona o campo de busca
let dados = []; // Armazenará todos os dados do JSON

// 2. Adiciona um "ouvinte" para o evento de digitação no campo de busca
campoBusca.addEventListener("input", () => {
    const termoBuscado = campoBusca.value.toLowerCase();
    const dadosFiltrados = dados.filter(dado => {
        // 3. Filtra os dados: busca no nome e na descrição
        return (
            dado.nome.toLowerCase().includes(termoBuscado) ||
            dado.descricao.toLowerCase().includes(termoBuscado)
        );
    });

    renderizarCards(dadosFiltrados); // 4. Renderiza apenas os cards filtrados
});

// A função agora se chama carregarDados para ser mais descritiva
async function iniciarBusca() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados); // Renderiza todos os cards na carga inicial
}

function renderizarCards(cardsParaRenderizar) {
    cardContainer.innerHTML = ""; // Limpa o container antes de adicionar novos cards
    
    for (let dado of cardsParaRenderizar){
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.ano}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba Mais</a>`
        cardContainer.appendChild(article);
    }
}

iniciarBusca(); // Inicia o processo ao carregar a página