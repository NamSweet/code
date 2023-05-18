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
import Tuan from './components/tuan'
import Thang from './components/thang'
import Themthietbi from './Pages/Thietbi/themthietbi'
import Chitiet from './Pages/Thietbi/chitiet'
import Capnhat from './Pages/Thietbi/capnhat'
import Themdichvu from './Pages/Dichvu/themdichvu'
import Chitietdichvu from './Pages/Dichvu/chitietdichvu'
import Capnhatdichvu from './Pages/Dichvu/capnhatdichvu'
import Capsomoi from './Pages/Capso/capsomoi'
import Chitietcapso from './Pages/Capso/chitietcapso'
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
          path="/themthietbi" 
          element={<Themthietbi />} 
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
          path='dashboard/tuan' 
          element={<Tuan/>}
          />
            <Route 
          path='dashboard/thang' 
          element={<Thang/>}
          />
          <Route 
          path='/Chitietthietbi' 
          element={<Chitiet/>}
          />
          <Route 
          path='/Capnhatthietbi' 
          element={<Capnhat/>}
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
          path='/Dichvu/themdichvu' 
          element={<Themdichvu/>}
          /> 
          
          
           <Route 
          path='/chitietdichvu' 
          element={<Chitietdichvu/>}
          />
           <Route 
          path='/capnhatdichvu' 
          element={<Capnhatdichvu/>}
          />
          <Route 
          path='Capso' 
          element={<Capso/>}
          />
           <Route 
          path='/capsomoi' 
          element={<Capsomoi/>}
          />
           <Route 
          path='/chitietcapso' 
          element={<Chitietcapso/>}
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
