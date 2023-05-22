
import { RightOutlined } from '@ant-design/icons';
import { List } from 'antd';
import { useState } from 'react';
import { TbBellFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';


interface Props {
  breadCrumb: string[]
}

const data = [
  {
    title: 'Nguyễn Thị Thùy Dung',
  },
  {
    title: 'Nguyễn Thiên Chinh',
  },
  {
    title: 'Võ Thị Kim Liên',
  },
  {
    title: 'Hoàng Nguyễn Quốc Huy',
  },
  {
    title: 'Võ Ngọc Lan Anh',
  },  
  {
    title: 'Nguyễn Thị Trúc Anh',
  },
  {
    title: 'Hoàng Nguyễn Quốc Huy',
  },
];

const TopBar = ({breadCrumb}: Props) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleThongBao = () => {
    setPopupOpen(!isPopupOpen);

  };
  return (
    <div className='thongtincanhan'>
    <div>
    <Link to='/profile'>
        <img className='avt1' src="../src/img/avatar1.png"/>
      </Link>
      <button className='btnthongbao' onClick={handleThongBao}><span className='bell'><TbBellFilled/></span></button>
      <span className='tx6'>Xin chào</span>
    <span className='tx7'>Lê Quỳnh Ái Vân</span>
    </div>
      <div className='breadcrumb'>
        {breadCrumb.map ((value, index) => (
  <div key={index}>
     <span className='txt1'>{value}</span>
           <RightOutlined id='arrowRight' style={{ width: 20, height: 20, fontSize: 20, color: "#7E7D88" }} />
  </div>
        ))}
      </div>
      {isPopupOpen && (
        <div className="popup-thongbao">
          <div className='thongbao'>Thông báo</div>
          <List itemLayout='horizontal'
          style={{paddingLeft: 24}}
          className='popup-data'
          dataSource={data}
          renderItem={(item :any, index) => (
            <List.Item>
              <List.Item.Meta
                title={<div className='title-popup' key={index}>Người dùng: {item.title}</div>}
                description={<div className='time-popup'>Thời gian nhận số: 12h20 ngày 30/11/2021</div>}
              />
            </List.Item>
          )}
        />
        </div>
      )}
      
    </div>
  )
}

export default TopBar
