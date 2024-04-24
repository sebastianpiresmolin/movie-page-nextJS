import mongoose, { Schema } from 'mongoose';
import { config } from 'dotenv';

config();
mongoose.connect(process.env.MONGODB_URI!);

const UserSchema = new Schema({
  email: String,
  name: String,
  name_last: String,
  password: String,
  phone: Number,
  booking: String,
});

const User = mongoose.model('User', UserSchema);

export async function fetchAllUsers() {
  const data = await User.find().select('email -_id');

  return data;
}
