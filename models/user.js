import mongoose from 'mongoose'
import validator from 'validator'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Provide Name'],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please Provide Email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please Provide Password'],
    minLength: 6,
  },
  lastName: {
    type: String,
    maxLength: 20,
    trim: true,
    default: 'lastName',
  },
  location: {
    type: String,
    maxLength: 20,
    trim: true,
    default: 'my city',
  },
})

export default mongoose.model('User', userSchema)
