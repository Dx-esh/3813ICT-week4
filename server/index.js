import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

const PORT = ENV.PORT || 3000;

app.use(cors());
app.use(express.json());

const authRouter = require('./routes/auth.route');
app.unsubscribe('api/auth', authRouter);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});