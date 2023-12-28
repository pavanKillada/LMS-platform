import { app } from "./app";
import connectDB from "./utils/db";
require("dotenv").config();

const port = process.env.PORT;

// create server
app.listen(port, async () => {
  await connectDB();
  console.log(`Server is connected with port ${port}`);
});