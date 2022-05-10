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

app.get('/livros', (req, res)=>{
    res.status(200).send(livros)
})

app.post('/livros', (req, res)=>{
    livros.push(req.body),
    res.status(201).send("Livro cadastrado com sucesso")
})

export default app