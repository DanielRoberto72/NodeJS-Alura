import mongoose from "mongoose"

mongoose.connect("mongodb+srv://danielRobertoDB:U1XlDZ6wJlyLjJEC@cluster0.rry3x.mongodb.net/nodeJs")


let db = mongoose.connection
export default db;