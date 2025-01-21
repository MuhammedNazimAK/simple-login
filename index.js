const express = require("express");
const session = require("express-session");
const userRouter = require("./routes/userRouter");
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.set("view engine", "hbs");
app.set("views", "views");


app.use("/", userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
