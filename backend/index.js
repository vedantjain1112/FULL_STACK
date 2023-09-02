const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

connectToMongo();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/items", require("./routes/items"));
app.use("/api/paymentRoute", require("./routes/paymentRoute"));

app.get("/api/getKey", (req, res) => {
  res.status(200).json({ key: "rzp_test_mSh9sSJK3V8zjq" });
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Backend is running at port - http://localhost:5000`);
});
