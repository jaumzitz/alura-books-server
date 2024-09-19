const express = require("express")

const app = express()
app.use(express.json())

const port = 8000

const rotaLivro = require('./routes/livro')


app.use('/livros', rotaLivro);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})