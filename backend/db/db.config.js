import mongoose, { connect } from "mongoose"

export const connectDB = async (databaseUrl, databaseName) => {

    const DbOptions = {dbName : databaseName}
    try{
        mongoose.set("strictQuery" , false)
        await mongoose.connect(databaseUrl, DbOptions)

        // let admin = await User

        console.log("Database Connected Successfully..");
    }catch(err){
        console.log("Database Not connected", err);
        process.exit(1)
    }
}