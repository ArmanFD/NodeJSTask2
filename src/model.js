import mongoose from "mongoose";

const {Schema,model} = mongoose;

const bookSchema = new Schema({
    title: {type: String,required: true} ,
    author: {type: String,required: true} ,
    pages: {type: Number,required: true} ,
    description: {type: String,required: true} 
},
{
    collection: "Books"
})

export const Book = model("Book", bookSchema)