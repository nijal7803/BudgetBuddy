const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/conn");
const port = process.env.PORT || 5000;

const app = express();
dotenv.config();

connectDB();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//user routes
app.use("/api/v1/users", require("./routes/userRoute"));

//transaction routes
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
