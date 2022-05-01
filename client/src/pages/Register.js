import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/registerPage'
import { useAppContext } from '../context/appContext'
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
}

const Register = () => {
  const { isLoading, showAlert, displayAlert, clearAlert } = useAppContext()
  const [values, setValues] = useState(initialState)
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      clearAlert()
      return
    }
    console.log(values)
  }
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {/* Name field */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            values={values.name}
            handleChange={handleChange}
          />
        )}
        {/* Email field */}
        <FormRow
          type='text'
          name='email'
          values={values.email}
          handleChange={handleChange}
        />
        {/* Passoword field */}
        <FormRow
          type='password'
          name='password'
          values={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
