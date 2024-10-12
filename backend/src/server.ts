import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import orderRouter from './router/order.router';
import userRouter from './router/user.router';
import { dbConnect } from './configs/database.config';
dbConnect();


const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:4200',
}));

app.use("/api/orders", orderRouter);
app.use("/api/user", userRouter);


const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

