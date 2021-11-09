import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import blogRoutes from "./routes/blogs.js";
import userRoutes from "./routes/users.js";
import passport from "passport";
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
// import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";

const app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://priceless-raman-2d8bb2.netlify.app/");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
dotenv.config();
app.use(passport.initialize());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors({"origin": "https://priceless-raman-2d8bb2.netlify.app"}));
app.options("*", cors());

app.use("/blogs",cors(), blogRoutes);
app.use("/auth/google",cors(), userRoutes);


const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`MongoDB Connected and server running on port: ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err.message);
  });
