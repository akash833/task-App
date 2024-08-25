import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose
    .connect(url, { dbName: "Taskapp" })
    .then((data) => {
      console.log(
        "Successfully connected to the database",
        data.connection.host
      );
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};

export { connectDB };
