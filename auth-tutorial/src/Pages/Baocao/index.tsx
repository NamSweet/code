
import { CaretRightOutlined, DownloadOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import Datepicker from '../../components/datepicker';
import '../../css/capso.css'
import { TableBaocao, baoCao } from '../../components/tablebaocao';


function Baocao() {
  const breadCrumbData = [ "Báo cáo", "Lập báo cáo"]
  const tableData = baoCao;
  const csvContent = convertToCSV(tableData);

  function convertToCSV(data: any) {
    const csvRows = [];
  
    const columns = Object.keys(data[0]);
    csvRows.push(columns.join(','));
  
    
    for (const row of data) {
      const values = columns.map(column => {
        const value = row[column];
        
        return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
      });
      csvRows.push(values.join(','));
    }
  
    return csvRows.join('\n');
  }

  function downloadCSV(csvContent: string | number | boolean, fileName: string) {
    const link = document.createElement('a');
    link.href = `data:text/csv;charset=utf-8,${encodeURIComponent(csvContent)}`;
    link.download = fileName;
    link.click();
  }

  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
     <div className='area10'>
     <div><span className='txtchontime'>Chọn thời gian<div className='cc'><Datepicker/><Datepicker/></div></span>
      <CaretRightOutlined className='cccs2'/></div>
      </div> 
      <div>
        <TableBaocao/>
      </div>
      <div style={{userSelect: "none", cursor: "pointer"}} className='themthietbi' onClick={() => downloadCSV(csvContent, 'report.csv')}>
       <DownloadOutlined className='iconthem'/>
       <span className='txtthemthietbi'>Tải về</span> 
      </div>
    </div>
  )
}
export default Baocao