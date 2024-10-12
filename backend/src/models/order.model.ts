import { model, Schema } from 'mongoose';

export interface Order {
    id: string;
    headerText: string;
    description: string;
    module: string[];
    spro: string[];
    stack: string;
    conditions: string;
    usecase: string;
    orderType: string;
    dueDate: Date;
    communcation: string[];
    remote: number;
    contactdirect: string;
    expense: string;  
    startDate: string; 
    tags: string[];

}

export const OrderSchema = new Schema<Order>(
    {
        id: {type: String, required: true},
        headerText: {type: String, required: true},
        description: {type: String, required: true},
        module: {type: [String], required: false},
        spro: {type: [String], required: false},
        stack: {type: String, required: false},
        conditions: {type: String, required: false},
        usecase: {type: String, required: false},
        orderType: {type: String, required: false},
        dueDate: {type: Date, required: false},
        communcation: {type: [String], required: false},
        remote: {type: Number, required: false},
        contactdirect: {type: String, required: false},
        expense: {type: String, required: false},
        startDate: {type: String, required: false},
        tags: {type: [String], required: false}
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
    }
);    

export const OrderModel = model<Order>('Order', OrderSchema);