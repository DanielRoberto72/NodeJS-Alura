import express from "express"
import db from "./config/dbConnect.js"
import Posts from "./models/Post.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", ()=>{
    console.log("Conectado com sucesso no Banco de dados")
})

const app = express()
app.use(express.json())
routes(app)
export default app