import mongoose from 'moongose';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect('',{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: falsem
        });
        console.log(`Mongo connected: ${conn.connection.host}`);
    }catch(error){
        console.log(`Error: ${error}`);
        process.exit(1);
    }
}
export default connectDB;