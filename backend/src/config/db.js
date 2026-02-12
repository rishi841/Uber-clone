import mongoose from "mongoose";

export const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected successfully -->", mongoose.connection.host);
    } catch (err) {
        console.error("MONGODB connection failed ---> ", err.message);
        process.exit(1);
    }
};
