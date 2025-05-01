import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ Mongo DB connection successful`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
