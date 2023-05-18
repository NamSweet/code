import { DataTable } from 'mantine-datatable';
import { Text,} from '@mantine/core';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import { useEffect, useState } from 'react';

const PAGE_SIZES = [18, 9];

const thietBi = [ { stt: '2010001', Ten: 'Lê Huỳnh Ái Vân', tendichvu: "Khám tim mạch",thoigiancap:'14:35 - 07/11/2021',hansd:'14:35 - 12/11/2021',trangthaihd: 'Đang chờ',nguoncap:'Kiosk', chitiet:'Chi tiết'},
  { stt: '2010002', Ten: 'Huỳnh Ái Vân', tendichvu: "Khám sản - Phụ Khoa",thoigiancap:'14:35 - 07/11/2021', hansd:'14:35 - 12/11/2021', trangthaihd: 'Đã sử dụng',nguoncap:'Kiosk',chitiet:'Chi tiết'},
  { stt: '2010003', Ten: 'Lê Ái Vân', tendichvu: "Khám răng hàm mặt",thoigiancap:'14:35 - 07/11/2021',hansd:'14:35 - 12/11/2021', trangthaihd: 'Đang chờ',nguoncap:'Hệ thống',chitiet:'Chi tiết'},
  { stt: '2010004', Ten: 'Nguyễn Ái Vân', tendichvu: "Khám tai mũi họng",thoigiancap:'14:35 - 07/11/2021',hansd:'14:35 - 12/11/2021', trangthaihd: 'Đã sử dụng',nguoncap:'Kiosk',chitiet:'Chi tiết'},
  { stt: '2010005', Ten: 'Lê Ái Vân', tendichvu: "Khám hô hấp",thoigiancap:'14:35 - 07/11/2021',hansd:'14:35 - 12/11/2021', trangthaihd: 'Đang chờ',nguoncap:'Hệ thống',chitiet:'Chi tiết' },
  { stt: '2010006', Ten: 'Nguyễn Ái Vân', tendichvu: "Khám tổng quát",thoigiancap:'14:35 - 07/11/2021',hansd:'14:35 - 12/11/2021', trangthaihd: 'Đã sử dụng',nguoncap:'Hệ thống',chitiet:'Chi tiết'},
  { stt: '2010007', Ten: 'Trần Thị Ái Vân', tendichvu: "Khám tai mũi họng",thoigiancap:'14:35 - 07/11/2021',hansd:'14:35 - 12/11/2021', trangthaihd: 'Đang chờ',nguoncap:'Kiosk',chitiet:'Chi tiết'},
  { stt: '2010008', Ten: 'Lê Huỳnh Nghĩa', tendichvu: "Khám tổng quát",thoigiancap:'14:35 - 07/11/2021',hansd:'14:35 - 12/11/2021', trangthaihd: 'Đã sử dụng',nguoncap:'Hệ thống',chitiet:'Chi tiết'},
  { stt: '2010009', Ten: 'Lê Huỳnh Đức', tendichvu: "Khám tai mũi họng",thoigiancap:'14:35 - 07/11/2021',hansd:'14:35 - 12/11/2021', trangthaihd: 'Bỏ qua',nguoncap:'Hệ thống',chitiet:'Chi tiết'},
  { stt: '20100010', Ten: 'Phạm Văn Mạnh', tendichvu: "Khám tổng quá",thoigiancap:'14:35 - 07/11/2021',hansd:'14:35 - 12/11/2021', trangthaihd: 'Bỏ qua',nguoncap:'Kiosk',chitiet:'Chi tiết'},
  { stt: '20100011', Ten: 'Lê Thị Cẩm Tiên', tendichvu: "Khám tai mũi họng",thoigiancap:'14:35 - 07/11/2021',hansd:'14:35 - 12/11/2021', trangthaihd: 'Đã sử dụng',nguoncap:'Hệ thống',chitiet:'Chi tiết'},
  { stt: '20100012', Ten: 'Lê Huỳnh Nghĩa', tendichvu: "Khám tai mũi họng",thoigiancap:'14:35 - 07/11/2021',hansd:'14:35 - 12/11/2021', trangthaihd: 'Đã sử dụng',nguoncap:'Kiosk',chitiet:'Chi tiết'},]


export const TableCapso = () => {
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(thietBi.slice(0, pageSize));
  
  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(thietBi.slice(from, to));
  }, [page, pageSize]);

  
  return (
    <DataTable className='tbl1'
      withBorder
      borderRadius="sm"
      withColumnBorders
      striped
      records={records}
      columns={
        [
          {
            accessor: 'stt',
            title: 'STT',
          },
          { 
            accessor: 'Ten',
          title:'Tên khách hàng' 
        },
          { accessor: 'tendichvu',
          title: 'Tên dịch vụ ' 
        },
      { accessor: 'thoigiancap',
          title: 'Thời gian cấp', }
          ,
          { accessor: 'hansd',
          title: 'Hạn sử dụng', }
          ,
          { accessor: 'trangthaihd',
          title: 'Trạng thái hoạt động',
          render: ({ trangthaihd }) => (
              <Text className='txt-trangthai' title={trangthaihd} weight={300}>
              <Badge color={trangthaihd === "Đang chờ" ? "#4277FF" : trangthaihd === "Đã sử dụng"? "#535261": trangthaihd === "Bỏ qua"? "#E73F3F": "#000000"} status={trangthaihd === "Đã sử dụng" ? "success": trangthaihd === "Bỏ qua" ? "success": "error"}  />{" "}{trangthaihd}
            </Text>
              )},
  
              { accessor: 'nguoncap',
              title: 'Nguồn cấp', 
              }
              ,
              { accessor: '',
              render: ({ chitiet }) => (
                  <Link to={'/chitietcapso'}>
                  <Text className='chitiet1'  color='#4277FF'>
                  {chitiet.slice(0,8)}
                  </Text>
                  </Link>
              )
              },
        ]
        }
      
      totalRecords={thietBi.length}
      recordsPerPage={pageSize}
      page={page}
      onPageChange={(p) => setPage(p)}
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setPageSize}
    />
  );
}