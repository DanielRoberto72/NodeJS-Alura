import express from "express"
import db from "./config/dbConnect.js"
import Posts from "./models/Post.js"

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", ()=>{
    console.log("Conectado com sucesso no Banco de dados")
})

const app = express()
app.use(express.json())

// const livros =[
//     {id: 1, "Titulo": "Velozes e furiosos"},
//     {id: 2, "Titulo": "Velozes e furiosos 10"},

// ]


app.get('/posts', (req, res)=>{
    Posts.find((err,Posts)=>{
        res.status(200).json(Posts)
    })
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    res.json(Posts[index])
})

app.get('/livros', (req, res)=>{
    res.status(200).send(Posts)
})

app.post('/livros', (req, res)=>{
    Posts.push(req.body),
    res.status(201).send("Livro cadastrado com sucesso")
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    Posts[index].Titulo = req.body.titulo
    res.json(Posts)
})

app.delete('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    Posts.splice(index, 1)
    res.send(`Livro ${req.params.id} removido com sucesso`)
})

function buscaLivro(id){
    return Posts.findIndex(livro => livro.id == id)
}

export default app