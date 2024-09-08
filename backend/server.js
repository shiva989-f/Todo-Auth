import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routers/index.js";
import { APP_PORT, MONGO_URI } from "./config/index.js";

const app = express();
const PORT = APP_PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());
// Route for APIs
app.use("/api", routes);

// Connecting to the database
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.error(err));


app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}/`);
});
