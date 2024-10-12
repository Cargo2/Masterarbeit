import mongoose, {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URI!, {
    } as ConnectOptions).then(() => {
        console.log('Connected to the database');
    }).catch((error) => {
        console.log('Error connecting to the database', error);
    });
}

