import UserModel from '../models/user.js'

const register = async (req, res) => {
  try {
    const user = await UserModel.create(req.body)
    res.status(201).json({ user })
  } catch (err) {
    res.status(500).json({ msg: 'there was an error' })
  }
}

const login = async (req, res) => {
  res.send('login user')
}

const updateUser = async (req, res) => {
  res.send('update user')
}

export { register, login, updateUser }
