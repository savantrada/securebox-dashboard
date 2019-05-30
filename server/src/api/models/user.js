import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  user_token: {
    type: String,
  },
});

UserSchema.pre("save", function save(next) {
  const self = this;
  bcrypt.hash(self.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    self.password = hash;
    return next();
  });
});

UserSchema.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};

export default mongoose.model("User", UserSchema);
