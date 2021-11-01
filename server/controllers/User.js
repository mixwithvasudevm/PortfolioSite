import User from "../models/user.js";
import dotenv from "dotenv";
import passport from "passport";
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';

dotenv.config();


// let loginData;

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       callbackURL: "http://localhost:5000/auth/google/secert",
//       userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       const newUser = {
//         googleId: profile.id,
//         email: profile.emails[0].value,
//       };
//       console.log(profile);
//       try {
//         let user = await User.findOne({ googleId: profile.id });

//         if (user) {
//           console.log(user);
//           loginData = user;
//           done(null, user);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   )
// );
// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });
// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });



export const getUser = async (req, res) => {
  console.log(req.body.googleId);
  const {id} = req.body.googleId;
  try {
    const post = await User.findById(id);
    if(post)
    {
      console.log(post);
    res.status(200).send("okay");
    }
    else
    {
      res.status(200).send("not okay");
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const redirect= async (req, res) => {

};

