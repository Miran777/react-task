import React from 'react'
import { useAppSelector } from '../hooks/useAppSelector'
import { Navigate } from 'react-router-dom'

export const Profilepage = () => {
  const {isAuth} = useAppSelector(state => state.user)



  

  return (
    <div>
      {
        !isAuth ? 
        <Navigate to='/login' replace={true} /> :
        <h1 className='text-3xl uppercase text-center pt-20'>Your Profile</h1>
      }
    </div>
  )
}