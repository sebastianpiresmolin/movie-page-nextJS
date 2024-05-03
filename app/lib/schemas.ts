import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Please provide your name'],
  },
  name_last: {
    type: String,
    required: [true, 'Please provide your last name'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  phone: {
    type: Number,
    required: [true, 'Please provide your phone number'],
  },
  booking: {
    type: Array,
    required: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

export const MovieSchema = new Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
});
