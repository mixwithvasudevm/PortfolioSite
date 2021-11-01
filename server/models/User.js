import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
});
const User = mongoose.model("User", BlogSchema);


User.collection.indexExists({ "username" : 1 }, function(err, results){
  console.log(results);
  if ( results === true) {
    // Dropping an Index in MongoDB
    User.collection.dropIndex( { "username" : 1 } , function(err, res) {
        if (err) {
            console.log('Error in dropping index!', err);
        }
    });
  } else {
    console.log("Index doesn't exisit!");
  }
});
export default User;
