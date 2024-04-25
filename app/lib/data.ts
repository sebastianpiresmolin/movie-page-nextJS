import { connect } from './DbConnect';
import mongoose from 'mongoose';
import { UserSchema } from './schemas';

connect();

export let User: any;

if (mongoose.models.User) {
  User = mongoose.model('User');
} else {
  User = mongoose.model('User', UserSchema);
}

export async function fetchAllUsers() {
  const data = await User.find().select('email -_id');

  return data;
}
