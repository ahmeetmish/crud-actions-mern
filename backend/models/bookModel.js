import mongoose from "mongoose"

const Schema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publishedYear: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

export const Book = mongoose.model('books', Schema)