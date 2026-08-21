import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.route.js';

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});