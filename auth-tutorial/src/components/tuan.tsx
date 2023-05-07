import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuBar from "./menu_bar";
import TopBar from "./top_bar";
import { ArrowDownOutlined, ArrowUpOutlined, CalendarOutlined, CarryOutOutlined, ProfileOutlined, UserOutlined } from "@ant-design/icons";
import WaveChart from "./bieudo";
import "../css/Dashboard.css"
import RightBar from "./right_bar";

function Tuan() {
  const [selectedOption] = useState('');
  const navigate = useNavigate();

  const data = [2000, 3500, 4221, 3300]
  const categories = ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"]

  const handleOptionChange = (event: any) => {
    const selectedValue = event.target.value;
    navigate(selectedValue);
  
    }

  useEffect(() => {
    console.log(selectedOption)
  }, [selectedOption])

  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb='Dashboard'/>
      <span className='bieudocapso'>Biểu đồ cấp số</span>
    <div className='middashboard'>
     <div className='data1'>    
        <div className='datatop'>
         <div className='sttdc'>
         <CalendarOutlined className='iconlich'/>
         </div>
         <span className='tieudedata'>Số thứ tự đã cấp</span>
        </div>
        <div className='databottom'>
         <span className='solieu'>4.221</span>
         <div className='hieusuat'>
           <ArrowUpOutlined className='iconhieusuat'/>
           <span className='phantram'>32,41%</span>
         </div>
         </div>
     </div>
     <div className='data2'>    
        <div className='datatop'>
         <div className='sttdsd'>
         <CarryOutOutlined className='iconlich2'/>
         </div>
         <span className='tieudedata'>Số thứ tự đã sử dụng</span>
        </div>
        <div className='databottom'>
         <span className='solieu'>3.721</span>
         <div className='hieusuat2'>
           <ArrowDownOutlined className='iconhieusuat2'/>
           <span className='phantram2'>32,41%</span>
         </div>
         </div>
     </div>
     <div className='data3'>    
        <div className='datatop'>
         <div className='sttdch'>
         <UserOutlined className='iconnguoicho'/>
         </div>
         <span className='tieudedata'>Số thứ tự đang chờ</span>
        </div>
        <div className='databottom'>
         <span className='solieu'>468</span>
         <div className='hieusuat'>
           <ArrowUpOutlined className='iconhieusuat2'/>
           <span className='phantram'>56,41%</span>
         </div>
         </div>
     </div>
     <div className='data4'>    
        <div className='datatop'>
         <div className='sttdbq'>
         <ProfileOutlined className='iconmiss'/>
         </div>
         <span className='tieudedata'>Số thứ tự đã bỏ qua</span>
        </div>
        <div className='databottom'>
         <span className='solieu'>32</span>
         <div className='hieusuat2'>
           <ArrowDownOutlined className='iconhieusuat'/>
           <span className='phantram2'>22.41%</span>
         </div>
         </div>
     </div>
    </div>
    <div className='bangthongkedulieu'>
   <div className='topbieudo'>
   <span className='txt1'>Bảng thống kê theo tuần</span>
   <span className='txt3'>Xem theo  <select  className="time txt-selectbox" defaultValue="/dashboard/tuan" onChange={handleOptionChange}>
        <option className="txt-selectbox" value="/dashboard">Ngày</option>
        <option className="txt-selectbox" value="/dashboard/tuan">Tuần</option>
        <option className="txt-selectbox" value="/dashboard/thang">Tháng</option>
      </select></span>
   </div>
      <span className='txt2'>Tháng 11/2021</span>
      <WaveChart data={data} categories={categories}/>
      </div>
      <RightBar/> 
    </div>
  )
}
export default Tuan