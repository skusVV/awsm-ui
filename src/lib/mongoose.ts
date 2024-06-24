import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let isConnected = false; // Track the connection

export const connectToDatabase = async () => {
  if (isConnected) {
    return;
  }

  // @ts-expect-error "it okay"
  await mongoose.connect(uri, options);
  isConnected = true;
  console.log("Connected to MongoDB");
};