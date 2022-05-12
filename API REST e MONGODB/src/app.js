import express from "express"

const app = express()
app.use(express.json())

const livros =[
    {id: 1, "Titulo": "Velozes e furiosos"},
    {id: 2, "Titulo": "Velozes e furiosos 10"},

]


app.get('/', (req, res)=>{
    res.status(200).send('curso de node')
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    res.json(livros[index])
})

app.get('/livros', (req, res)=>{
    res.status(200).send(livros)
})

app.post('/livros', (req, res)=>{
    livros.push(req.body),
    res.status(201).send("Livro cadastrado com sucesso")
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    livros[index].Titulo = req.body.titulo
    res.json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    livros.splice(index, 1)
    res.send(`Livro ${req.params.id} removido com sucesso`)
})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app