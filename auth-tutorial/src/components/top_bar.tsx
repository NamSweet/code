
import { RightOutlined } from '@ant-design/icons';
import React from 'react';
import { TbBellFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';


interface Props {
  breadCrumb: string[]
}

const TopBar = ({breadCrumb}: Props) => {
  return (
    <div className='thongtincanhan'>
    <div>
    <Link to='/profile'>
        <img className='avt1' src="../src/img/avatar1.png"/>
      </Link>
      <button className='btnthongbao'><span className='bell'><TbBellFilled/></span></button>
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
       
    
    </div>
  )
}

export default TopBar
