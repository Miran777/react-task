import { Outlet, useParams } from 'react-router-dom'
import CustomLink from '../components/CustomLink'



export const Layout = () => {
    

  return (
    <div>
        <header className='p-8 bg-gray-200 flex justify-center gap-10 align-center text-center text-2xl'>
            <CustomLink to='/'><li>Home</li></CustomLink>
            <CustomLink to='/news'><li>News</li></CustomLink>
            <CustomLink to='/profile'><li>Profile</li></CustomLink>
            <CustomLink to='/login'><li>Login</li></CustomLink>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}