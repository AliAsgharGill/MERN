import mongoose from "mongoose";
const connectDB = async () => {
  const res = await mongoose.connect("mongodb://localhost:27017/Blog");
  if (res) {
    console.log(`MongoDB Connected: ${res.connection.host}`);
  }

  //   try {
  //     const conn = await mongoose.connect(process.env.MONGO_URI, {
  //       useUnifiedTopology: true,
  //       useNewUrlParser: true,
  //       useCreateIndex: true,
  //     });
  //     console.log(`MongoDB Connected: ${conn.connection.host}`);
  //   } catch (error) {
  //     console.error(`Error: ${error.message}`);
  //     process.exit(1);
  //   }
};

export default connectDB;
