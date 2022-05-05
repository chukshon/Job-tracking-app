import UserModel from '../models/user.js'
import { StatusCodes } from 'http-status-codes'
import { badRequestError, UnAuthenticatedError } from '../errors/index.js'

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
  const { email, password } = req.body

  if (!email || !password) {
    throw new badRequestError('Please provide all values')
  }
  const user = await UserModel.findOne({ email }).select('+password')
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials')
  }
  const token = user.createJWT()
  user.password = undefined
  res.status(StatusCodes.OK).json({ user, token, location: user.location })
}

const updateUser = async (req, res) => {
  const user = req.user
  res.status(StatusCodes.OK).json({ user })
}

export { register, login, updateUser }
