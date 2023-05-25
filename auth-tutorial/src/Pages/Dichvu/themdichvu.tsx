import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { message } from 'antd';
import { add } from '../../firebase/crud';

function Themdichvu() {

  const [maDichVu, setMaDichVu] = useState("")
  const [tenDichVu, setTenDichVu] = useState("")
  const [moTa, setMoTa] = useState("")
  
  

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
  const breadCrumbData = [ "Dịch vụ","Danh sách dịch vụ","Thêm dịch vụ"]

  const handleAdd = async () => {
    try {
     await add({data: {maDichVu: maDichVu, tenDichVu:tenDichVu,moTa:moTa,trangThaiHD:"Hoạt động"}, collectionName: "DichVu", id: maDichVu})
    message.success("Thanh cong")
    } catch (error) {
     message.error("That bai")
    }
   }

  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
      <span className='bieudocapso'>Quản lý dịch vụ</span>
      <div className='inputhemthietbi'>
      <span className='txtthongtin'>Thông tin dịch vụ</span>
      <div className='area3'>
      <div className='input'>
      <span className='ma'>Mã dịch vụ:  <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu'
        placeholder="Nhập mã dịch vụ"
        onChange={(e)=> setMaDichVu(e.target.value)}>
        </input>
        </div> 
        <div className='input'>
      <span className='ma'>Tên dịch vụ : <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu'
        placeholder="Nhập tên dịch vụ"
        onChange={(e)=> setTenDichVu(e.target.value)}>
        </input>
        </div> 
      
        </div>
        <div className='area4'>
      <div className='input'>
      <span className='ma'>Mô tả:</span>
        <input id='mota'
        placeholder="Nhập mô tả"
        onChange={(e)=> setMoTa(e.target.value)}>
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
        <button className='thietbinew' onClick={handleAdd}>Thêm dịch vụ</button>
      </div>
    </div>
    
  )
}
export default Themdichvu