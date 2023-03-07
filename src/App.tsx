import { Routes, Route } from 'react-router-dom'
import { Layout } from './pages/Layout';
import { Homepage } from './pages/Homepage';
import { Loginpage } from './pages/Loginpage';
import { NewsPage } from './pages/NewsPage';
import { Profilepage } from './pages/Profilepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />}/>
        <Route path='/login' element={<Loginpage />}/>
        <Route path='/profile' element={<Profilepage />}/>
        <Route path='/news' element={<NewsPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
