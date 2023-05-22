import ForgotPassword from './routes/forgotPassword' 
import PasswordReset from './routes/passwordReset'
import { useContext, useEffect } from 'react'
import { Routes , Route, useNavigate } from 'react-router-dom' 
import { AuthContext } from './context/auth-context'
import RequireAuth from './components/require-auth'
import Home from './routes/login'
import Profile from './routes/profile'
import Dashboard from './Pages/Dashboard'
import Thietbi from './Pages/Thietbi'
import Dichvu from './Pages/Dichvu'
import Capso from './Pages/Capso'
import Baocao from './Pages/Baocao'
import Caidathethong from './Pages/Caidathethong/vaitro'
import Tuan from './components/tuan'
import Thang from './components/thang'
import Themthietbi from './Pages/Thietbi/themthietbi'
import Chitiet from './Pages/Thietbi/chitietthietbi'
import Capnhat from './Pages/Thietbi/capnhatthietbi'
import Themdichvu from './Pages/Dichvu/themdichvu'
import Chitietdichvu from './Pages/Dichvu/chitietdichvu'
import Capnhatdichvu from './Pages/Dichvu/capnhatdichvu'
import Capsomoi from './Pages/Capso/capsomoi'
import Chitietcapso from './Pages/Capso/chitietcapso'
import Vaitro from './Pages/Caidathethong/vaitro'
import CapnhatVaitro from './Pages/Caidathethong/capnhatvaitro'
import ThemVaitro from './Pages/Caidathethong/themvaitro'
import Taikhoan from './Pages/Caidathethong/taikhoan'
import ThemTaiKhoan from './Pages/Caidathethong/themtaikhoan'
import CapnhatTaikhoan from './Pages/Caidathethong/capnhattaikhoan'
import Nhatky from './Pages/Caidathethong/nhakyhoatdong'
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="profile" element={
          <Profile />}
      />
      <Route 
          path="forgotPassword" 
          element={<ForgotPassword />} 
        />
        <Route
          path="/themthietbi" 
          element={<Themthietbi/>} 
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
          path='/Chitietthietbi/:id' 
          element={<Chitiet/>}
          />
          <Route 
          path='/Capnhatthietbi/:id' 
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
          path='/Chitietdichvu/:id' 
          element={<Chitietdichvu/>}
          />
           <Route 
          path='/capnhatdichvu/:id' 
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
          path='vaitro' 
          element={<Vaitro/>}
          />
            <Route 
          path='capnhatvaitro' 
          element={<CapnhatVaitro/>}
          />
            <Route 
          path='themvaitro' 
          element={<ThemVaitro/>}
          />
            <Route 
          path='Taikhoan' 
          element={<Taikhoan/>}
          />
           <Route 
          path='themtaikhoan' 
          element={<ThemTaiKhoan/>}
          />
           <Route 
          path='capnhattaikhoan' 
          element={<CapnhatTaikhoan/>}
          />
            <Route 
          path='nhatky' 
          element={<Nhatky/>}
          />
    </Routes>
    
  )
}

export default App
