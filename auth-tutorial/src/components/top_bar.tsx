
import { TbBellFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

interface Props {
  breadCrumb: string
}

const TopBar = ({breadCrumb}: Props) => {
  return (
    <div className='thongtincanhan'>
    <Link to='/profile'><img className='avt1' src="../src/img/avatar1.png"/></Link>
      <span className='tx5'>{breadCrumb}</span>
      <button className='btnthongbao'><span className='bell'><TbBellFilled/></span></button>
      <span className='tx6'>Xin chào</span>
    <span className='tx7'>Lê Quỳnh Ái Vân</span>
    </div>
  )
}

export default TopBar
