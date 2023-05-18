import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';

function Caidathethong() {
  const breadCrumbData = [ "Dịch vụ"]
  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
    </div>
  )
}
export default Caidathethong