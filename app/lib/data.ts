import { connect } from './DbConnect';
import mongoose from 'mongoose';
import { UserSchema } from './schemas';

connect();

export const User = mongoose.model('User', UserSchema);

export async function fetchAllUsers() {
  const data = await User.find().select('email -_id');

  return data;
}
