import { DataTable } from 'mantine-datatable';
import { Text,} from '@mantine/core';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import { useEffect, useState } from 'react';
import { getList } from '../firebase/crud';

const PAGE_SIZES = [18, 9];
interface CapSo {
  stt: string;
  tenKhachhang: string;
  tenDichvu: string;
  thoiGiancap: string;
  hanSudung: string;
  trangThaihoatdong:string;
  nguonCap:string;
}


export const TableCapso = () => {
  const [CapSo, setCapSo] = useState<CapSo[]>([])
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(CapSo.slice(0, pageSize));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const capSoList = await getList<CapSo>({ collectionName: 'CapSo' });
        setCapSo(capSoList);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  
  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    const updatedRecords = CapSo.slice(from, to);
    setRecords(updatedRecords);
  }, [page, pageSize, CapSo]);

  
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
            accessor: 'tenKhachhang',
          title:'Tên khách hàng' 
        },
          { accessor: 'tenDichvu',
          title: 'Tên dịch vụ ' 
        },
      { accessor: 'thoiGiancap',
          title: 'Thời gian cấp', 
          render: ({thoiGiancap}) => (
            <Text className='txt-trangthai'>
              {new Date(thoiGiancap).toLocaleString("vi-VN", {
              hour: "numeric",
              minute: "numeric",
              hour12: false, // Use 24-hour format
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
            </Text>
          )     }
          ,
          { accessor: 'hanSudung',
          title: 'Hạn sử dụng', 
          render: ({hanSudung}) => (
            <Text className='txt-trangthai'>{new Date(hanSudung).toLocaleString("vi-VN", {
              hour: "numeric",
              minute: "numeric",
              hour12: false, // Use 24-hour format
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}</Text>
          )     
        }
          ,
          { accessor: 'trangThaihoatdong',
          title: 'Trạng thái hoạt động',
          render: ({ trangThaihoatdong }) => (
              <Text className='txt-trangthai' title={trangThaihoatdong} weight={300}>
              <Badge color={trangThaihoatdong === "Đang chờ" ? "#4277FF" : trangThaihoatdong === "Đã sử dụng"? "#535261": trangThaihoatdong === "Bỏ qua"? "#E73F3F": "#000000"} status={trangThaihoatdong === "Đã sử dụng" ? "success": trangThaihoatdong === "Bỏ qua" ? "success": "error"}  />{" "}{trangThaihoatdong}
            </Text>
              )},
  
              { accessor: 'nguonCap',
              title: 'Nguồn cấp', 
              }
              ,
              { accessor: '',
              render: ({stt}) => (
                  <Link to={`/chitietcapso/${stt}`}>
                  <Text className='chitiet1'  color='#4277FF'>
                  Chi tiết
                  </Text>
                  </Link>
              )
              },
        ]
        }
      
      totalRecords={CapSo.length}
      recordsPerPage={pageSize}
      page={page}
      onPageChange={(p) => setPage(p)}
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setPageSize}
    />
  );
}