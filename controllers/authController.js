import UserModel from '../models/user.js'

const register = async (req, res, next) => {
  const user = await UserModel.create(req.body)
  res.status(201).json({ user })
}

const login = async (req, res) => {
  res.send('login user')
}

const updateUser = async (req, res) => {
  res.send('update user')
}

export { register, login, updateUser }
