import mongoose from "mongoose"
const  PostSchema = mongoose.Schema(

{
    id: {type: String},
    titulo: {type: String, required: true},
    imagem: {type: String},
    categoria: {type: String},
    conteudo: {type: String, required: true},
    slug: {type: String},
    autor: {type: String, required: true},
    views: {type: Number}

})
var Posts = mongoose.model("posts", PostSchema)

export default Posts