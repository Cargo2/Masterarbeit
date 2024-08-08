import {Order} from './app/shared/models/Orders';

export const sampleOrders: Order[] = [

        {
            id: '1',
            headerText: 'User Exit einrichten',
            description: 'This is a description for order 1',
            module: ['module1', 'module2'],
            spro: ['spro1', 'spro2'],
            stack: 'stack1',
            conditions: 'conditions1',
            usecase: 'usecase1',
            orderType: 'assets/workbench.png',
            dueDate: new Date(),
            communcation: ['communication1', 'communication2'],
            remote: 1,
            contactdirect: 'contactdirect1',
            expense: 'expense1'
        },
        {
            id: '2',
            headerText: 'Order 2',
            description: 'This is a description for order 2',
            module: ['module1', 'module2'],
            spro: ['spro1', 'spro2'],
            stack: 'stack1',
            conditions: 'conditions1',
            usecase: 'usecase1',
            orderType: 'assets/customizing.jpg',
            dueDate: new Date(),
            communcation: ['communication1', 'communication2'],
            remote: 1,
            contactdirect: 'contactdirect1',
            expense: 'expense1'
        }
]

