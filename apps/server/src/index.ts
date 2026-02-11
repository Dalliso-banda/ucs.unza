import express from 'express';
import 'dotenv/config';
import authRoutes from './routes/auth.js';
import blogRoutes from './routes/blogs.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

app.listen(3000, () => console.log('🚀 Server at http://localhost:3000'));

