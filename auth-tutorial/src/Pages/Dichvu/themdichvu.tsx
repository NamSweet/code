import { RightOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';

function Themdichvu() {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };
  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb='Thiết bị'/>
      <RightOutlined className='icon1'/>
      <span className='txtds1'>Danh sách dịch vụ</span>
      <RightOutlined className='icon23'/>
      <span className='txtttb'>Thêm dịch vụ</span>
      <span className='bieudocapso'>Quản lý dịch vụ</span>
      <div className='inputhemthietbi'>
      <span className='txtthongtin'>Thông tin dịch vụ</span>
      <div className='area3'>
      <div className='input'>
      <span className='ma'>Mã dịch vụ:  <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu'
        placeholder="201">
        </input>
        </div> 
        <div className='input'>
      <span className='ma'>Tên dịch vụ : <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu'
        placeholder="Khám tim mạch">
        </input>
        </div> 
      
        </div>
        <div className='area4'>
      <div className='input'>
      <span className='ma'>Mô tả:</span>
        <input id='mota'
        placeholder="Mô tả dịch vụ">
        </input>
        </div>
        </div>
        <div className='area5'>
        <span className='txtquytac'>Quy tắc cấp số</span>
        <div>
      <label>
        <input
           type="checkbox"
           name="checkbox1"
           checked={checkboxes.checkbox1}
           onChange={handleCheckboxChange}
        />
            <span className='cce'>Tăng tự động từ: </span>
      </label>
      <input id='sott'
        placeholder="0001">
        </input>
        <span className='cce'>Đến</span>
        <input id='sott'
        placeholder="9999">
        </input>
    </div>
    <div>
      <label>
        <input
            type="checkbox"
            name="checkbox2"
            checked={checkboxes.checkbox2}
            onChange={handleCheckboxChange}
        />
            <span className='cce'>Prefix: </span>
      </label>
      <input id='sott1'
        placeholder="0001">
        </input>
    </div>
    <div>
      <label>
        <input
         type="checkbox"
         name="checkbox3"
         checked={checkboxes.checkbox3}
         onChange={handleCheckboxChange}
        />
            <span className='cce'>Surfix: </span>
      </label>
      <input id='sott1'
        placeholder="0001">
        </input>
    </div>
    <div>
      <label>
        <input
           type="checkbox"
           name="checkbox4"
           checked={checkboxes.checkbox4}
           onChange={handleCheckboxChange}
        />
            <span className='cce'>Reset mỗi ngày </span>
      </label>
    </div>
        <span className='txtcanhbao'><span style={{color: "#FF4747",}}>*</span>Là trường thông tin bắt buộc</span>
        </div>
      </div>
      <div className='btnthemthietbi'>
      <Link to='/Dichvu'>
        <button className='huythietbi'>Hủy bỏ</button>
        </Link>
        <button className='thietbinew'>Thêm dịch vụ</button>
      </div>
    </div>
    
  )
}
export default Themdichvu