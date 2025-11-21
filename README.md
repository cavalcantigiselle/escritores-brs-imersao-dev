# Acervo de Escritores Brasileiros

Este é um projeto simples de front-end que exibe uma coleção de escritores e escritoras da literatura brasileira. A aplicação permite visualizar os autores em formato de cards e fazer uma busca dinâmica para filtrar os resultados por nome ou descrição.

## 🚀 Funcionalidades

*   **Listagem de Autores:** Exibe todos os escritores a partir de um arquivo `data.json`.
*   **Busca Dinâmica:** Filtra os autores em tempo real conforme o usuário digita no campo de busca. A busca é realizada tanto no nome quanto na descrição do autor.
*   **Links Externos:** Cada card contém um link "Saiba Mais" que direciona para uma página com mais informações sobre o autor.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

*   **HTML5:** Para a estrutura da página.
*   **CSS3:** Para a estilização dos componentes.
*   **JavaScript (ES6+):** Para a interatividade, manipulação do DOM e a lógica de busca.
*   **JSON:** Como formato para armazenar os dados dos escritores.

## 📂 Estrutura dos Arquivos

```
BASE DE CONHECIMENTO/
├── 📄 index.html      # Arquivo principal da página
├── 🎨 style.css       # Folha de estilos
├── 📜 script.js       # Lógica de busca e renderização dos cards
└── 🗃️ data.json       # Banco de dados com as informações dos escritores
```

## 🏃 Como Executar o Projeto

Por utilizar a função `fetch()` do JavaScript para carregar os dados do arquivo `data.json`, o projeto precisa ser executado a partir de um servidor web local para funcionar corretamente. Abrir o `index.html` diretamente no navegador pode causar um erro de CORS.

A maneira mais fácil de executar é usando a extensão **Live Server** no Visual Studio Code:

1.  Instale a extensão Live Server no VS Code.
2.  Abra a pasta do projeto no VS Code.
3.  Clique com o botão direito no arquivo `index.html`.
4.  Selecione a opção "Open with Live Server".

Isso iniciará um servidor local e abrirá o projeto no seu navegador padrão.

## 🤝 Como Contribuir

Você pode contribuir facilmente adicionando novos escritores ao acervo. Para isso, basta editar o arquivo `data.json` e adicionar um novo objeto ao array, seguindo a estrutura abaixo:

```json
{
  "nome": "Nome do Autor",
  "descricao": "Breve descrição sobre o autor e sua obra.",
  "ano": "Período de vida (ex: 1900 a 1980)",
  "link": "https://link-para-mais-informacoes.com/"
}
```

---

*Projeto desenvolvido por Giselle Cavalcanti.*

