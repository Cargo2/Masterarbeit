import { Router } from 'express';
import { sampleOrders } from '../data';
import asynceHandler from 'express-async-handler';
import { OrderModel }  from '../models/order.model';


const router = Router();


router.get('/seed', asynceHandler(async (req, res) => {
    const ordersCount = await OrderModel.countDocuments();
    if (ordersCount > 0) {
        res.send({ message: 'Orders already seeded' });
        return;
    }
    await OrderModel.create(sampleOrders);
    res.send({ message: 'Orders seeded successfully' });
}));

router.get('/',asynceHandler(
    async (req, res) => {
        const orders = await OrderModel.find();
        res.send(orders);
}));    

router.get('/search/:searchTerm', asynceHandler(
    async (req, res) => {
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const orders = await OrderModel.find({headerText: {$regex:searchRegex}});
        res.send(orders);
}));

router.get('/:id', asynceHandler(
    async (req, res) => {
    const order = await OrderModel.findOne({id: req.params.id});
    res.send(order);
}));

export default router;