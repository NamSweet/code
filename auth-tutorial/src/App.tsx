import ForgotPassword from './routes/forgotPassword' 
import PasswordReset from './routes/passwordReset'
import { useContext, useEffect } from 'react'
import { Routes , Route, useNavigate } from 'react-router-dom' 
import { AuthContext } from './context/auth-context'
import RequireAuth from './components/require-auth'
import Home from './routes/home'
import Profile from './routes/profile'

function App() {
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  // NOTE: console log for testing purposes
  console.log('User:', !!currentUser);

  // Check if currentUser exists on initial render
  useEffect(() => {
    if (currentUser) {
      navigate('/profile')
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
    </Routes>
  )
}

export default App
