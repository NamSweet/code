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
            label:  <span style={{color: "#7E7D88"}}>Cài đặt hệ thống</span>,
            key:'/Caidathethong',
            icon: <TbSettings2/>,
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
