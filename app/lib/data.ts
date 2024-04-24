import mongoose, { Schema } from 'mongoose';
import { config } from 'dotenv';

config();
mongoose.connect(process.env.MONGODB_URI!);

const UserSchema = new Schema({
  email: String,
  name: String,
  name_last: String,
  password: String,
  phone: String,
  booking: String,
});

export async function fetchAllUsers() {
  const User = mongoose.model('User', UserSchema);

  const data = await User.find().select('email -_id');

  return data;
}
