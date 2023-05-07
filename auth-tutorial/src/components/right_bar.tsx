import { Badge, Progress, Space } from "antd"
import Calendar from 'react-calendar';
import { FiMonitor } from "react-icons/fi"
import 'react-calendar/dist/Calendar.css';
import { RiQuestionAnswerLine } from "react-icons/ri";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
 

const RightBar = () => {

  return (
    <div className="dataright">
     <h3 className="txt4">Tổng quan</h3>
     <div className="thongso">  
          <div className="khungthongso">
                 <Progress className="circle" type="circle" percent={90} size={60} strokeColor={{ '0%': '#FF7506', '100%': '#FF7506' }} />
                 <Space direction="vertical" size={3}>
                 <span className="txtsolieu">4.221</span>
                 <span className="tenthongso"><FiMonitor /> Thiết bị</span>
                 </Space>
                 <Space direction="vertical" size={3} style={{marginLeft: 37}}>
                 <Space size={4}>
                 <Badge color="#FFD130" />
                    <span className="txt6">Đang hoạt động</span>
                    <span className="txt5" style={{color: "#FF7506", marginLeft: 8}}>3.799</span>
               </Space>
                 <Space size={4}>
                 <Badge color="#7E7D88" />
                 <span className="txt6">Ngưng hoạt động</span>
                    <span className="txt5" style={{color: "#FF7506"}}>422</span>
               </Space>              
                 </Space>
          </div>
          <div className="khungthongso">
          <Progress className="circle" type="circle" percent={76} size={60} strokeColor={{ '0%': '#4277FF', '100%': '#4277FF' }} />
                 <Space direction="vertical" size={3}>
                 <span className="txtsolieu">276</span>
                 <span className="tenthongso1"><RiQuestionAnswerLine/> Dịch vụ</span>
                 </Space>
                 <Space direction="vertical" size={3} style={{marginLeft: 37}}>
                 <Space size={4}>
                 <Badge color="#4277FF" />
                    <span className="txt6">Đang hoạt động</span>
                    <span className="txt5" style={{color: "#4277FF", marginLeft: 8}}>210</span>
               </Space>
                 <Space size={4}>
                 <Badge color="#7E7D88" />
                 <span className="txt6">Ngưng hoạt động</span>
                    <span className="txt5" style={{color: "#4277FF"}}>66</span>
               </Space>              
                 </Space>
          </div>
          <div className="khungthongso">
          <Progress className="circle" type="circle" percent={86} size={60} strokeColor={{ '0%': '#35C75A', '100%': '#35C75A' }} />
                 <Space direction="vertical" size={3}>
                 <span className="txtsolieu">4.221</span>
                 <span className="tenthongso2"> <HiOutlineSquare3Stack3D/> Cấp số</span>
                 </Space>
                 <Space direction="vertical" size={0} style={{marginLeft: 37}}>
                 <Space size={4}>
                 <Badge color="#35C75A" />
                    <span className="txt6">Đang hoạt động</span>
                    <span className="txt5" style={{color: "#35C75A", marginLeft: 8}}>3.721</span>
               </Space>
                 <Space size={4}>
                 <Badge color="#7E7D88" />
                 <span className="txt6">Ngưng hoạt động</span>
                    <span className="txt5" style={{color: "#35C75A"}}>486</span>
               </Space>              
               <Space size={4}>
                 <Badge color="#F178B6" />
                 <span className="txt6">Ngưng hoạt động</span>
                    <span className="txt5" style={{color: "#35C75A"}}>32</span>
               </Space>                 
                 </Space>
          </div>
     </div>
     <Calendar className="lich"/>
    </div>
  )
}

export default RightBar
