import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import { Link, useParams } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { edit, getData } from '../../firebase/crud';
import { message } from 'antd';

interface DichVu {
  maDichVu: string;
  tenDichVu: string;
  moTa: string;
}

function Capnhatdichvu() {
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

  const {id} = useParams()
  const breadCrumbData = [ "Dịch vụ","Danh sách dịch vụ","Chi tiết","Cập nhật"]
  const [DichVu, setDichVu] = useState<DichVu | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
       if(id) {
        const data = await getData({ collectionName: 'DichVu',id:  id});
        setDichVu(data as DichVu);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  fetchData();
  }, []);


  useEffect(() => { 
    if(DichVu) {
      setMaDichVu(DichVu.maDichVu)
      setTenDichVu(DichVu.tenDichVu)
      setMoTa(DichVu.moTa)
    }
  },[DichVu])

  const handleUpdate = async () => {
    try {
      if(id) {
        await edit({data: {maDichVu: maDichVu, tenDichVu:tenDichVu,moTa:moTa}, collectionName: "DichVu", id: maDichVu})
        message.success("Thanh cong")
      }
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
        value={maDichVu}
        onChange={(e)=> setMaDichVu(e.target.value)}
        readOnly>
        </input>
        </div> 
        <div className='input'>
      <span className='ma'>Tên dịch vụ : <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu'
        placeholder="Nhập tên dịch vụ"
        value={tenDichVu} onChange={(e)=> setTenDichVu(e.target.value)}>
        </input>
        </div> 
        </div>
        <div className='area4'>
      <div className='input'>
      <span className='ma'>Mô tả:</span>
        <input id='mota'
        placeholder="Mô tả dịch vụ"
        value={moTa} onChange={(e)=> setMoTa(e.target.value)}>
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
        <button className='thietbinew' onClick={handleUpdate}>Cập nhật</button>
      </div>
    </div>
    
  )
}
export default Capnhatdichvu