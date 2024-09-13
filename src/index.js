import dotenv from "dotenv";
import connectDBs from "./db/index.js";
import { app } from "./app.js";

// const app = express()
dotenv.config({
  path: "./env",
});

connectDBs()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at the port ${process.env.PORT}`);
    });
  })

  .catch((error) => {
    console.log("db connection failed", error);
  });
