const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivro} = require("../services/livro")



function getLivros(req, res) {
    try {

        const livros = getTodosLivros()
        res.send(livros)
        
    } catch (error) {
        res.status(500)
        res.send()
    }
}

function getLivro(req, res) {
    try {
        
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            
        res.status(422) .send('Id não processável'); return
        }    

        

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body


        if (req.body.nome) {
            insereLivro(livroNovo)
            
            res
                .status(201)
                .send("Livro inserido com sucesso")

        } else {
            res
                .status(422)
                .send("O nome é obrigatório")
        }

    } catch (error) {
        res
            .status(500)
            .send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id
        const body = req.body

        if (id && Number(id)) {
            modificaLivro(body, id)
        res.send(body);
        } else {
            
        res
            .status(422) 
            .send('Id não processável');
        }  

        

    } catch (error) {
        res
            .status(500)
            .send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletaLivro(id)
            res.send("Livro deletado com sucesso")
        } else {
                
            res
                .status(422) 
                .send('Id não processável');
        }  

    } catch (error) {
        res
            .status(500)
            .send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}