import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import booksRoute from './routes/booksRoute.js'

dotenv.config();

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('database crud actions!')
})

app.use('/books', booksRoute)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('App connected to database!');

    app.listen(5555, () => {
      console.log('Server Running..!');
    })
  })
  .catch((error) => {
    console.log(error);
  })