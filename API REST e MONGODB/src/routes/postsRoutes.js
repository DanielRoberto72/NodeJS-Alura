import express from "express";
import postController from "../controllers/postsController.js";

const router = express.Router()

router
    .get("/posts", postController.listarPosts)
    .get("/posts/busca/", postController.listarPostsByCategoria)
    .get("/posts/:id", postController.listarPostsById)
    .post("/posts", postController.cadastrarPosts)
    .put("/posts/:id", postController.atualizarPosts)
    .delete("/posts/:id", postController.removerPost)

export default router