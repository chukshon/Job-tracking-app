import UserModel from '../models/user.js'
import { StatusCodes } from 'http-status-codes'
import { badRequestError } from '../errors/index.js'

const register = async (req, res, next) => {
  const { name, email, password } = req.body

  const emailExists = await UserModel.findOne({ email })
  if (emailExists) {
    throw new badRequestError('Email already exists')
  }
  if (!name || !email || !password) {
    throw new badRequestError('Please provide all values')
  }
  const user = await UserModel.create({ name, email, password })
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
      location: user.location,
      lastName: user.lastName,
    },
    token,
    location: user.location,
  })
}

const login = async (req, res) => {
  res.send('login user')
}

const updateUser = async (req, res) => {
  res.send('update user')
}

export { register, login, updateUser }
