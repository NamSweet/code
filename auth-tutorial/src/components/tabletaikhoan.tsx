import { DataTable } from 'mantine-datatable';
import {  Text} from '@mantine/core';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Badge } from 'antd';
import { getList } from '../firebase/crud';

const PAGE_SIZES = [18, 9];
interface TaiKhoan {
  tenDangnhap: string;
  hoTen: string;
  sdt:string;
  Email: string;
  vaiTro: string;
  tinhTrang: string;
 
}

export const TableTaikhoan = () => {
  const [TaiKhoan, setTaiKhoan] = useState<TaiKhoan[]>([])
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(TaiKhoan.slice(0, pageSize));
  
  useEffect(() => {
    setPage(1);
  }, [pageSize]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const taiKhoanList = await getList<TaiKhoan>({ collectionName: 'TaiKhoan' });
        setTaiKhoan(taiKhoanList);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    const updatedRecords = TaiKhoan.slice(from, to);
    setRecords(updatedRecords);
  }, [page, pageSize, TaiKhoan]);
 
  
  return (
    <DataTable className='tbl1'
      withBorder
      borderRadius="sm"
      withColumnBorders
      striped
      records={records}
      columns={[
        {
          accessor: 'tenDangnhap',
          title: 'Tên đăng nhập',
          textAlignment: 'left',
        },
        { accessor: 'hoTen',
        title:'Họ tên' }
        ,
        { accessor: 'sdt',
        title: 'Số điện thoại', }
        ,
        { accessor: 'Email',
        title: 'Email', }
        ,
        { accessor: 'vaiTro',
        title: 'Vai trò', }
        ,
        { accessor: 'tinhTrang',
        title: 'Trạng thái hoạt động',
        render: ({ tinhTrang }) => (
          <Text className='txt-trangthai' title={tinhTrang} weight={300}>
            <Badge color={tinhTrang === "Hoạt động" ? "#35C75A" : "#EC3740"} status={tinhTrang === "Ngưng hoạt động" ? "success" : "error"} />{" "}{tinhTrang}
          </Text>
            )},
         { accessor: '',
          render: ({ tenDangnhap }) => (
            <Link to={`/capnhattaikhoan/${tenDangnhap}`}>
           <Text className='chitiet1' color='#4277FF' >
           Cập nhật
            </Text>
            </Link>
          )
          },
      ]}
      
      totalRecords={TaiKhoan.length}
      recordsPerPage={pageSize}
      page={page}
      onPageChange={(p) => setPage(p)}
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setPageSize}
    />
  );
}