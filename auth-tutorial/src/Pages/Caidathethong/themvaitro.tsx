
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';

import { Link } from 'react-router-dom';
import '../../css/thietbi.css'
import { ChangeEvent, useState } from 'react';

function ThemVaitro() {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
  });

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };
  const breadCrumbData = [ "Cài đặt hệ thống","Vai trò","Thêm vai trò"]
  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
      <span className='bieudocapso'>Danh sách vai trò</span>
      <div className='bgrcapnhatvaitro'>
      <span className='txtthongtin'>Thông tin vai trò</span>
      <div className='arealeft'>
      <div className=''>
      <span className='ma'>Tên vai trò: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapvaitro1'
        placeholder="Nhập tên vai trò">
        </input>
        <span className='ma'>Mô tả:</span>
        <input id='nhapmota2'
        
        placeholder="Nhập mô tả">
        </input>
        <div>
        <span className='txtcanhbao'><span style={{color: "#FF4747",}}>*</span>Là trường thông tin bắt buộc</span>
        </div> 
        </div>
      </div>
      <div className='arearight'>
        <div>
      <span className='ma'>Phân quyền chức năng: <span style={{color: "#FF4747",}}>*</span></span>
      </div>
      <div className='bgr'>
        <div className='areaphanquyen'>
        <div>
          <span className='txtnhomA'>nhóm chức năng A</span>
        </div>
        <label>
        <input
          type="checkbox"
           name="checkbox1"
           checked={checkboxes.checkbox1}
           onChange={handleCheckboxChange}
        />
            <span className='cce'>Tất cả</span>
      </label>
      <label>
        <input
          type="checkbox"
          
           name="checkbox2"
           checked={checkboxes.checkbox2}
           onChange={handleCheckboxChange}
        />
            <span className='cce'>Chức năng x</span>
      </label>
      <label>
        <input
          type="checkbox"
          
           name="checkbox3"
           checked={checkboxes.checkbox3}
           onChange={handleCheckboxChange}
        />
            <span className='cce'>Chức năng y</span>
      </label>
      <label>
        <input
          type="checkbox"
          
           name="checkbox4"
           checked={checkboxes.checkbox4}
           onChange={handleCheckboxChange}
        />
            <span className='cce'>Chức năng z</span>
      </label>
        <div>
          <span className='txtnhomA'>nhóm chức năng B</span>
        </div>
        <label>
        <input
          type="checkbox"
           name="checkbox5"
           checked={checkboxes.checkbox5}
           onChange={handleCheckboxChange}
        />
            <span className='cce'>Tất cả</span>
      </label>
      <label>
        <input
          type="checkbox"
          
           name="checkbox6"
           checked={checkboxes.checkbox6}
           onChange={handleCheckboxChange}
        />
            <span className='cce'>Chức năng x</span>
      </label>
      <label>
        <input
          type="checkbox"
          
           name="checkbox7"
           checked={checkboxes.checkbox7}
           onChange={handleCheckboxChange}
        />
            <span className='cce'>Chức năng y</span>
      </label>
      <label>
        <input
          type="checkbox"
          
           name="checkbox8"
           checked={checkboxes.checkbox8}
           onChange={handleCheckboxChange}
        />
            <span className='cce'>Chức năng z</span>
      </label>
        </div>
      </div>
      </div>
    </div>
    <div className='btnthemthietbi'>
        <Link to='/Vaitro'>
        <button className='huythietbi'>Hủy bỏ</button>
        </Link>
        <button className='thietbinew'>Thêm</button>
      </div>
    </div>
    
  )
}
export default ThemVaitro