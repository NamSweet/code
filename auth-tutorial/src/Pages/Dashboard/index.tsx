
import CalendarOutlined from '@ant-design/icons/lib/icons/CalendarOutlined';
import CarryOutOutlined from '@ant-design/icons/lib/icons/CarryOutOutlined';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import '../../css/Dashboard.css'
import ArrowUpOutlined from '@ant-design/icons/lib/icons/ArrowUpOutlined';
import ArrowDownOutlined from '@ant-design/icons/lib/icons/ArrowDownOutlined';
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';
import ProfileOutlined from '@ant-design/icons/lib/icons/ProfileOutlined';
import WaveChart  from '../../components/bieudo';
import {  useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RightBar from '../../components/right_bar';




function Dashboard() {
  const [selectedOption] = useState('');
  const navigate = useNavigate();

  const data = [2000,3500, 4221, 3300]
  const categories = ['1', '13', '19', '31']

  const handleOptionChange = (event: any) => {
    const selectedValue = event.target.value;
    navigate(selectedValue);
  
    }

  useEffect(() => {
    console.log(selectedOption)
  }, [selectedOption])
  const breadCrumbData = [ "Dashboard"]
  return(
    <>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
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
   <span className='txt1'>Bảng thống kê theo ngày</span>
   <span className='txt3'>Xem theo <select   className="time txt-selectbox" defaultValue="ngay" onChange={handleOptionChange}>
        <option className="txt-selectbox" value="ngay">Ngày</option>
        <option className="txt-selectbox" value="tuan">Tuần</option>
        <option className="txt-selectbox" value="thang">Tháng</option>
      </select></span>
   </div>
      <span className='txt2'>Tháng 11/2021</span>
      <WaveChart data={data} categories={categories}/>
      </div>
      <RightBar/> 
    </>
  )
}
export default Dashboard
