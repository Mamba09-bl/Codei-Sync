// import mongoose from "mongoose";

// const signupSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   password: String,
// });

// const signup = mongoose.models.signup || mongoose.model("signup", signupSchema);
// export default signup;

import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const Signup = mongoose.models.signup || mongoose.model("signup", signupSchema);

export default Signup;
