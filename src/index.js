import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const port = Number(process.env.PORT) || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is up and running on port - ${port}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDB connection error - `, error);
    process.exit(1);
  });
