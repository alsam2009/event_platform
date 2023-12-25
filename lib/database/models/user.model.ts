import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String } || null,
  firstName: { type: String, required: true },
  lastName: { type: String } || null,
  photo: { type: String},
})

const User = models.User || model('User', UserSchema);

export default User;