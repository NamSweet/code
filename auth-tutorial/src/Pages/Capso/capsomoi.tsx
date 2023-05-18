import { useState } from 'react';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import { Link } from 'react-router-dom';
import { Center } from '@mantine/core';


function Capsomoi() {
  const breadCrumbData = ["Cấp số", "Danh sách cấp số", "Cấp số mới"]
  const [isPopupOpen, setPopupOpen] = useState(false);


  const handlePrintClick = () => {
    setPopupOpen(true);

  };

 
  const handleCloseClick = () => {
    setPopupOpen(false);
  };
  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
      <span className='bieudocapso'>Quản lý cấp số</span>
     <div className='inputhemthietbi'>
            <h1 className='txtcapsonew'>CẤP SỐ MỚI</h1>
            <h3 className='txtcdvkhlc'>Dịch vụ khách hàng lựa chọn</h3>
            <select   className="cacdvso">
              <option className="" value="">Tất cả</option>
              <option className="" value="">Khám sản - Phụ khoa</option>
              <option className="" value="">Khám răng hàm mặt</option>
              <option className="" value="">Khám tai mũi họng</option>
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
                      <h2 className='txtpop2'>2001201</h2>
                      <h5 className='txtpop3'>DV: Khám răng hàm mặt <strong className='txtpop4'>(tại quầy số 1)</strong></h5>
                      </div>
                      <div className='footer-popup'>
                      <div><span className='textfooterpopup' style={{marginRight: 8}}>Thời gian cấp:</span><span className='textfooterpopup'>09:30 11/10/2021</span></div>
                      <div><span className='textfooterpopup' style={{marginRight: 8*2}}>Hạn sử dụng:</span><span className='textfooterpopup'>17:30 11/10/2021</span></div>             
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