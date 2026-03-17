import mongoose from "mongoose";

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("Database Connected");
    });
  } catch (error) {
    console.error("MongoDB Connection Failed :", error);
    process.exit(1);
  }
}

export default connectToDB;
