import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/status', (req, res) => {
  res.json({ status: 'Server is running!' });
});

app.listen(3000, () => console.log('🚀 Server at http://localhost:3000'));

