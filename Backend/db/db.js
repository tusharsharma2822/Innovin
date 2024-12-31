import mongoose from "mongoose";

// console.log(process.env.MONGO_URI)

function connectToDatabase(){
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("Connected to MongoDB Database");
    }).catch((error) => {
        console.log("Error connecting to MongoDB Database", error);
    }); 
}

export default connectToDatabase;