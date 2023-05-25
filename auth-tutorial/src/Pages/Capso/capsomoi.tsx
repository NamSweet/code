import { useEffect, useState } from 'react';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import { Link } from 'react-router-dom';
import { add, getData } from '../../firebase/crud';
import { message } from 'antd';

interface CapSo {
  stt: string;
  tenDichvu: string;
  thoiGiancap: string;
  hanSudung: string
}


function Capsomoi() {
  const [tenDichvu, setTenDichvu] = useState("")
  const [stt, setSTT] = useState("");
  const [capSo, setCapSo] = useState<CapSo | undefined>();
  const breadCrumbData = ["Cấp số", "Danh sách cấp số", "Cấp số mới"]
  const [isPopupOpen, setPopupOpen] = useState(false);


  const handlePrintClick = () => {
   if(tenDichvu) {
      handleAdd()
     setPopupOpen(true);
   } else {
    message.warning("Chua chon dich vu")
   }
  };

 
  const handleCloseClick = () => {
    setPopupOpen(false);
  };

  const handleAdd = async () => {
    try {
      const names = ["Nguyễn Ái Vân", "Lê Huỳnh Đức", "Đỗ Phương Nam", "Nguyễn Minh Nhật", "Lê Thị Cẩm Tiên"];
      const randomIndex = Math.floor(Math.random() * names.length);
      const tenKhachhang= names[randomIndex]

      const min = 2001201;
      const max = 2009999;
      const generatedRandomSTT = Math.floor(Math.random() * (max - min + 1) + min);
      const randomSTTString = generatedRandomSTT.toString();
      setSTT(randomSTTString);
      
      const thoiGiancap = new Date().toString();
      const hanSudung = new Date();
      hanSudung.setDate(hanSudung.getDate() + 7);
      hanSudung.setHours(23);
      hanSudung.setMinutes(0)

     await add({data: {stt: randomSTTString,tenKhachhang: tenKhachhang, tenDichvu:tenDichvu,thoiGiancap: thoiGiancap, hanSudung: hanSudung.toString(), trangThaihoatdong: "Đang chờ", nguonCap: "Hệ thống"}, collectionName: "CapSo", id: randomSTTString})
    message.success("Thanh cong")
    } catch (error) {
     message.error("That bai")
    }
   }

   useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData({collectionName: "CapSo", id: stt })
        setCapSo(data as CapSo)
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  fetchData();
  }, [stt]);
   
  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
      <span className='bieudocapso'>Quản lý cấp số</span>
     <div className='inputhemthietbi'>
            <h1 className='txtcapsonew'>CẤP SỐ MỚI</h1>
            <h3 className='txtcdvkhlc'>Dịch vụ khách hàng lựa chọn</h3>
            <select className="cacdvso" onChange={(e)=> setTenDichvu(e.target.value)}>
              <option className="" value="">Tất cả</option>
              <option className="" value="Khám sản - Phụ khoa">Khám sản - Phụ khoa</option>
              <option className="" value="Khám răng hàm mặt">Khám răng hàm mặt</option>
              <option className="" value="Khám tai mũi họng">Khám tai mũi họng</option>
            </select>
            <div className='btncapso'>
            <Link to='/Capso'>
              <button className='huycapso'>Hủy bỏ</button>
              </Link>
              <button type='button' className='capsoinput' onClick={handlePrintClick}>In số</button>
            </div>
               {/* Cửa sổ pop-up */}
                {isPopupOpen && (
                  <>
                  <div className="popup">
                    <div className="popup-content">
                      <span className="close" onClick={handleCloseClick}>&times;</span>
                      <div className='textpopup'>
                      <h3 className='txtpop1'>Số thứ tự được cấp</h3>
                      <h2 className='txtpop2'>{capSo?.stt}</h2>
                      <h5 className='txtpop3'>DV: {capSo?.tenDichvu} <strong className='txtpop4'>(tại quầy số 1)</strong></h5>
                      </div>
                      <div className='footer-popup'>
                      <div><span className='textfooterpopup' style={{marginRight: 8}}>Thời gian cấp:</span><span className='textfooterpopup'>{capSo && new Date(capSo.thoiGiancap).toLocaleString("vi-VN", {
  hour: "numeric",
  minute: "numeric",
  hour12: false, // Use 24-hour format
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
})}</span></div>
                      <div><span className='textfooterpopup' style={{marginRight: 8*2}}>Hạn sử dụng:</span><span className='textfooterpopup'>{capSo && new Date(capSo.hanSudung).toLocaleString("vi-VN", {
  hour: "numeric",
  minute: "numeric",
  hour12: false, // Use 24-hour format
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
})}</span></div>             
                      </div>
                    </div>
                  </div>
                   
                  </>
                )}
              </div>
             </div>
    
  )
}
export default Capsomoi