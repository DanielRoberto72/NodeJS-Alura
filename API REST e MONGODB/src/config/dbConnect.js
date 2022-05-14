import mongoose from "mongoose"

mongoose.connect("mongodb+srv://danielRobertoDB:senha@cluster0.rry3x.mongodb.net/nodeJs")


let db = mongoose.connection
export default db;