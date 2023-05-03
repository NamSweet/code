import ForgotPassword from './routes/forgotPassword' 
import PasswordReset from './routes/passwordReset'
import { useContext, useEffect } from 'react'
import { Routes , Route, useNavigate } from 'react-router-dom' 
import { AuthContext } from './context/auth-context'
import RequireAuth from './components/require-auth'
import Home from './routes/home'
import Profile from './routes/profile'
import Dashboard from './Pages/Dashboard'
import Thietbi from './Pages/Thietbi'
import Dichvu from './Pages/Dichvu'
import Capso from './Pages/Capso'
import Baocao from './Pages/Baocao'
import Caidathethong from './Pages/Caidathethong'

function App() {
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()
  console.log('User:', !!currentUser);
  useEffect(() => {
    if (currentUser) {
      navigate('/dashboard')
    }
  }, [currentUser])
    
  return (
    <Routes>
      
      <Route index element={<Home />} />
      <Route path="profile" element={
        <RequireAuth>
          <Profile />
        </RequireAuth>}
      />
      <Route 
          path="forgotPassword" 
          element={<ForgotPassword />} 
        />
         <Route 
          path="passwordReset" 
          element={<PasswordReset />} 
        />
       <Route 
          path='dashboard' 
          element={<Dashboard/>}
          />
          <Route 
          path='Thietbi' 
          element={<Thietbi/>}
          />
          <Route 
          path='Dichvu' 
          element={<Dichvu/>}
          />
          <Route 
          path='Capso' 
          element={<Capso/>}
          />
           <Route 
          path='Baocao' 
          element={<Baocao/>}
          />
           <Route 
          path='Caidathethong' 
          element={<Caidathethong/>}
          />
    </Routes>
    
  )
}

export default App
