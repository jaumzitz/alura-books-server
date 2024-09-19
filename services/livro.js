const fs = require("fs")
const dadosLivros = "livros.json"

function getTodosLivros() {
    return JSON.parse(fs.readFileSync(dadosLivros))
}

function getLivroPorId(id) {
    const livros = getTodosLivros()

    const livroFiltrado = livros.filter( livro => livro.id === id)[0]

    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = getTodosLivros();

    const novaListaDeLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = getTodosLivros();
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    
    //... = spread
    //Spread extrai as propriedades de um objeto iterável.

    /*
    var parts = ["shoulders", "knees"];
    var lyrics = ["head", ...parts, "and", "toes"];
     >> ["head", "shoulders", "knees", "and", "toes"]
    
    */


    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes}

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivro(id) {
    let livrosAtuais = getTodosLivros()

    const indexLivro = livrosAtuais.findIndex(livro => livro.id === id)

    livrosAtuais.splice(indexLivro, 1)

    /*
        Outra opção sem precisar buscar o index:

        const livrosFiltrados = livros.filter(livro => livro.id != id)
    
    */

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))


}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivro
}
