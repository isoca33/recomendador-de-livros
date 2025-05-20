let livros = [
  { titulo: "A Hora da Estrela", faixaEtaria: 14, generos: ["literatura brasileira", "romance", "drama"] },
  { titulo: "Dom Casmurro", faixaEtaria: 14, generos: ["literatura brasileira", "romance", "realismo"] },
  { titulo: "Vidas Secas", faixaEtaria: 16, generos: ["literatura brasileira", "romance", "realismo social"] },
  { titulo: "Macunaíma", faixaEtaria: 16, generos: ["literatura brasileira", "modernismo", "aventura"] },
  { titulo: "O Quinze", faixaEtaria: 14, generos: ["literatura brasileira", "romance", "realismo social"] },
  { titulo: "A Paixão Segundo G.H.", faixaEtaria: 18, generos: ["literatura brasileira", "romance", "existencialismo"] },
  { titulo: "Lavoura Arcaica", faixaEtaria: 18, generos: ["literatura brasileira", "romance", "modernismo"] }
];

let idadeUsuarioLivro;
let gostaLiteraturaBrasileira, gostaRomance, gostaDrama, gostaRealismo, gostaRealismoSocial, gostaModernismo, gostaAventura, gostaExistencialismo;
let livrosRecomendados = [];

// Obter a entrada do usuário ANTES de setup() rodar
// Isso garante que os prompts aconteçam assim que o script carrega,
// e não interfere na criação do canvas do p5.js.
idadeUsuarioLivro = parseInt(prompt("Qual sua idade?"));
gostaLiteraturaBrasileira = prompt("Você gosta de literatura brasileira? (sim/não)").toLowerCase() === "sim";
gostaRomance = prompt("Você gosta de romance? (sim/não)").toLowerCase() === "sim";
gostaDrama = prompt("Você gosta de drama? (sim/não)").toLowerCase() === "sim";
gostaRealismo = prompt("Você gosta de realismo? (sim/não)").toLowerCase() === "sim";
gostaRealismoSocial = prompt("Você gosta de realismo social? (sim/não)").toLowerCase() === "sim";
gostaModernismo = prompt("Você gosta de modernismo? (sim/não)").toLowerCase() === "sim";
gostaAventura = prompt("Você gosta de aventura? (sim/não)").toLowerCase() === "sim";
gostaExistencialismo = prompt("Você gosta de existencialismo? (sim/não)").toLowerCase() === "sim";

function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Livros", 20, 30);

  // Lógica de recomendação
  for (let livro of livros) {
    if (idadeUsuarioLivro >= livro.faixaEtaria) {
      if (
        (gostaLiteraturaBrasileira && livro.generos.includes("literatura brasileira")) ||
        (gostaRomance && livro.generos.includes("romance")) ||
        (gostaDrama && livro.generos.includes("drama")) ||
        (gostaRealismo && livro.generos.includes("realismo")) ||
        (gostaRealismoSocial && livro.generos.includes("realismo social")) ||
        (gostaModernismo && livro.generos.includes("modernismo")) ||
        (gostaAventura && livro.generos.includes("aventura")) ||
        (gostaExistencialismo && livro.generos.includes("existencialismo"))
      ) {
        livrosRecomendados.push(livro.titulo);
      }
    }
  }

  // Exibir resultados
  if (livrosRecomendados.length > 0) {
    text("Livros recomendados para você:", 20, 70);
    for (let i = 0; i < livrosRecomendados.length; i++) {
      text("- " + livrosRecomendados[i], 40, 100 + i * 25);
    }
  } else {
    text("Nenhum livro disponível para sua idade e preferências.", 20, 70);
  }
}

// Não é necessário uma função draw() para esta aplicação específica
// porque tudo é desenhado uma vez em setup().
// Se você quisesse elementos dinâmicos ou interação do usuário na tela,
// então você usaria uma função draw().
// function draw() {
//  // código de desenho entra aqui se necessário
// }
