import mongoose from "mongoose";

const connecDB = async () => {
    try{
        const connect=await mongoose.connect(`${process.env.CONNECTION_STRING}`);
        console.log("Sucessfully connected to DB");

    }catch(error){
        console.log(error);
        process.exit(1);

    }
};

export default connecDB