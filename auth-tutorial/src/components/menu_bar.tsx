import { Menu } from 'antd'
import { RiDashboardLine } from "react-icons/ri";
import { FiMonitor } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { TbSettings2 } from "react-icons/tb";
import {RiFileChartLine} from "react-icons/ri";
import {HiOutlineSquare3Stack3D  } from "react-icons/hi2";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import {BsThreeDotsVertical} from "react-icons/bs"

const MenuBar = () => {
    const { signOut } = useContext(AuthContext);
    const navigate = useNavigate();
  return (
    <div>
      <div className='SideMenu'>
      <img className="logomini" src="../src/img/logo.png"></img>
     
        <Menu className='menu'
        onClick={(item) =>{
          navigate(item.key);
        }}
        
         items={[
          {
            label: <span style={{color: "#7E7D88"}}>Dashboard</span>,
            icon: <RiDashboardLine/>,
            key:'/dashboard'
          },
          {
            label: <span style={{color: "#7E7D88"}}>Thiết bị</span>,
            key:'/Thietbi',
            icon: <FiMonitor/>,
          },
          {
            label: <span style={{color: "#7E7D88"}}>Dịch vụ</span>,
            key:'/Dichvu',
            icon: <RiQuestionAnswerLine/>,
          },
          {
            label:  <span style={{color: "#7E7D88"}}>Cấp số</span>,
            key:'/Capso',
            icon: <HiOutlineSquare3Stack3D/>,
          },
          {
            label: <span style={{color: "#7E7D88"}}>Báo cáo</span>,
            key:'/Baocao',
            icon: <RiFileChartLine/>,
          },
          {
            label:  <span style={{color: "#7E7D88"}}>Cài đặt hệ thống <span style={{verticalAlign: -3.9}}><BsThreeDotsVertical/></span></span>,
            key:'/Caidathethong',
            icon: <TbSettings2/>,
            children: [
              {
                label: <span style={{color: "#7E7D88"}} className=''>Quản lý vai trò</span>,
                key:'/Vaitro',
              },
              {
                label: <span style={{color: "#7E7D88"}} className=''>Quản lý tài khoản</span>,
                key:'/Taikhoan',
              },
              {
                label: <span style={{color: "#7E7D88"}} className=''>Nhật ký người dùng</span>,
                key:'/Nhatky',
              }
            ]
          },
        ]}
        >
        </Menu>
        </div>
        <button className='signout' onClick={signOut}><span className='logout'><FiLogOut size={30}/></span>Đăng xuất</button>
    </div>
  )
}

export default MenuBar
