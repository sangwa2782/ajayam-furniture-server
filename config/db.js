import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-iakdzbn-shard-00-00.f4vauok.mongodb.net:27017,ac-iakdzbn-shard-00-01.f4vauok.mongodb.net:27017,ac-iakdzbn-shard-00-02.f4vauok.mongodb.net:27017/AJAYAM?ssl=true&replicaSet=atlas-vbctgw-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error whirle connecting database ', error);
    }
}

export default Connection;