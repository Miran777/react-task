import { useState } from 'react'
import { IUserState, logInOut } from '../store/userSlice'
import { useAppSelector } from '../hooks/useAppSelector'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useNavigate } from 'react-router-dom'


export const Loginpage = () => {
  const { isAuth, password, username } = useAppSelector<IUserState>(state => state.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [pass, setPass] = useState('')
  const [usName, setUsName] = useState('')
  const [userError, setUserError] = useState('')
  const [passError, setPassError] = useState('')


  const errorLogin = () => {
    if(username !== usName) setUserError('user is not correct')
    else setUserError('')
    if(password !== pass) setPassError('pass is not correct')
    else setPassError('')
  }

  const handleLogin = (e:any) => {
    e.preventDefault()
    if (username === usName && password === pass) {
      setUserError('')
      setPassError('')
      dispatch(logInOut()) 
      navigate('/profile', {replace: true} )
    } else errorLogin()
  }

  const handleExit = () => {
    dispatch(logInOut())
  }



  return (
    <div>
      {
      !isAuth ? 
      <form className='py-10 px-20 border-2 border-blue-400'>
        <p className='text-red-500'>{userError}</p>
        <input className='mb-5 py-[3px] border-2 border-blue-400 w-64'  type="text" name='uname' placeholder='username' value={usName} onChange={e => setUsName(e.target.value)}/>
        <p className='text-red-500'>{passError}</p>
        <input className='mb-5 py-[3px] border-2 border-blue-400 w-64' type='password' name='pass' placeholder='password' value={pass} onChange={e => setPass(e.target.value)}/>
        <br />
        <button className='px-10 py-2 bg-blue-400 rounded-sm text-white transition duration-300 hover:opacity-80' onClick={e => handleLogin(e)}>login</button>
      </form> :
      <div className='flex flex-col items-center'>
        <h1 className='text-center text-2xl text-blue-700 py-20 uppercase'>You are logged in!</h1>
        <button className='w-[100px] rounded-sm text-white py-2 bg-blue-500' onClick={handleExit}>Exit</button>
      </div>
    }
    </div>
  )
}