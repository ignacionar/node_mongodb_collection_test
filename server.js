import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { PostRouter } from './routes/Post.routes.js';

connectDB();

dotenv.config();

const server = express();

const PORT = process.env.PORT || 3000;

server.use(express.json());

server.use('/post', PostRouter)

server.get('/', (req, res) => {
  res.json({ message: 'You should initialize the requests at /api/<entity>'});
})

server.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
})

