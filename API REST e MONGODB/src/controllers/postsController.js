import Posts from "../models/Post.js"

class postController{

    static listarPosts = (req, res) =>{
        Posts.find((err,Posts)=>{
        res.status(200).json(Posts)
        })
    }

    static listarPostsById = (req, res)=>{
        const id = req.params.id
        Posts.findById(id, (err, Posts)=>{
            if(err){
                res.status(400).send({message: `${err.message} - Post não encontrado`})
            }else{
                res.status(200).send(Posts)
            }
        })
    }

    static listarPostsByCategoria = (req, res)=>{
        const categoria = req.query.categoria
        Posts.find({'categoria': categoria }, {}, (err, Posts)=>{
            if(err){
                res.status(400).send({message: `${err.message} - Categoria não encontrada`})
            }else{
                res.status(200).send(Posts)
            }
        })
    }

    static cadastrarPosts = (req, res) =>{
        let post = new Posts(req.body)
        post.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar post.`})
            }else{
                res.status(201).send(post.toJSON())
            }
        })
        
        }
    static atualizarPosts = (req, res)=>{
        const id = req.params.id
        Posts.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao atualizar post.`})
            }else{
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            }
        })
    }
    static removerPost = (req, res)=>{
        const id = req.params.id
        Posts.findByIdAndDelete(id, (err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - Post não pode ser deletado`})
            }else{
                res.status(200).send({message: 'Post deletado com sucesso'})
            }
        })
    }



    }

    



export default postController