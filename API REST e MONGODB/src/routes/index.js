import express from "express";
import posts from "./postsRoutes.js"

const routes= (app) => {
    app.route('/').get((req, res)=>{
        res.status(200).send({titulo: "Curso de node"})
    })

    app.use(
        express.json(),
        posts
    )
}

export default routes