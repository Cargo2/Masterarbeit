import { Router } from 'express';
import { sample_users } from '../data';
import jwt from 'jsonwebtoken';
import asynceHandler from 'express-async-handler';
import { User, UserModel } from '../models/users.models';

const router = Router();

router.get('/seed', asynceHandler(async (req, res) => {
    const userCount = await UserModel.countDocuments();
    if (userCount > 0) {
        res.send({ message: 'Users already seeded' });
        return;
    }
    await UserModel.create(sample_users);
    res.send({ message: 'Orders seeded successfully' });
}));

router.post('/login', asynceHandler(
    async (req, res) => {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email, password });

    if (user) {
        res.send(generateTokenReponse(user));
    } else {
        res.status(401).send({ message: 'Invalid email or password' });
    }
}));

const generateTokenReponse = (user : User) => {
    const token = jwt.sign({
      email:user.email, isAdmin: user.isAdmin
    },"LalaSomerandomLA",{
      expiresIn:"30d"
    });
  
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      address: user.address,
      isAdmin: user.isAdmin,
      token: token
    };
  }

export default router;