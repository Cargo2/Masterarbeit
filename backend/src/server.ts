import express from 'express';
import cors from 'cors';
import { sample_users, sampleOrders } from './data';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:4200',
}));

app.get('/api/orders', (req, res) => {
    res.send(sampleOrders);
});

app.get('/api/orders/search/:searchTerm', (req, res) => {
    const searchTerm = req.params.searchTerm;
    const orders = sampleOrders.filter(order => order.headerText.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(orders);
});

app.get('/api/orders/:id', (req, res) => {
    const id = req.params.id;
    const order = sampleOrders.find(order => order.id === id) ?? {};
    res.send(order);
});

app.post('/api/user/login', (req, res) => {
    const { email, password } = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);

    if (user) {
        res.send(generateTokenResponse(user));
    } else {
        res.status(401).send({ message: 'Invalid email or password' });
    }
});

const generateTokenResponse = (user:any) => {
    const token = jwt.sign({ email:user.email, isAdmin: user.isAdmin }, "SomeRandomLaLa", { 
        expiresIn: '30d' 
    });

    user.token = token;
    return user;
}

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

