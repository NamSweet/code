import { DataTable } from 'mantine-datatable';
import {  Text} from '@mantine/core';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Badge } from 'antd';

const PAGE_SIZES = [18, 9];

const thietBi = [ { tendangnhap: 'tuyetnguyen@12', hoten: 'Nguyen Văn A', sdt: "0919256712",email:'tuyetnguyen123@gmail.com',vaitro:"Kế toán",trangthaihd:"Hoạt động",capnhat:'Cập nhật'},
                  { tendangnhap: 'tuyetnguyen@12', hoten: 'Nguyen Văn B', sdt: "0919256712",email:'tuyetnguyen123@gmail.com',vaitro:"Kế toán",trangthaihd:"Hoạt động",capnhat:'Cập nhật'},
                  { tendangnhap: 'tuyetnguyen@14', hoten: 'Nguyen Văn C', sdt: "0919256712",email:'tuyetnguyen123@gmail.com',vaitro:"Kế toán",trangthaihd:"Hoạt động",capnhat:'Cập nhật'},
                  { tendangnhap: 'tuyetnguyen@16', hoten: 'Nguyen Văn D', sdt: "0919256712",email:'tuyetnguyen123@gmail.com',vaitro:"Kế toán",trangthaihd:"Ngưng hoạt động",capnhat:'Cập nhật'},
                  { tendangnhap: 'tuyetnguyen@18', hoten: 'Nguyen Văn E', sdt: "0919256712",email:'tuyetnguyen123@gmail.com',vaitro:"Kế toán",trangthaihd:"Hoạt động",capnhat:'Cập nhật'},
                  { tendangnhap: 'tuyetnguyen@20', hoten: 'Nguyen Văn F', sdt: "0919256712",email:'tuyetnguyen123@gmail.com',vaitro:"Kế toán",trangthaihd:"Hoạt động",capnhat:'Cập nhật'},
                  { tendangnhap: 'tuyetnguyen@20', hoten: 'Nguyen Văn G', sdt: "0919256712",email:'tuyetnguyen123@gmail.com',vaitro:"Kế toán",trangthaihd:"Hoạt động",capnhat:'Cập nhật'},
                  { tendangnhap: 'tuyetnguyen@20', hoten: 'Nguyen Văn H', sdt: "0919256712",email:'tuyetnguyen123@gmail.com',vaitro:"Kế toán",trangthaihd:"Ngưng hoạt động",capnhat:'Cập nhật'},
                  { tendangnhap: 'tuyetnguyen@20', hoten: 'Nguyen Văn I', sdt: "0919256712",email:'tuyetnguyen123@gmail.com',vaitro:"Kế toán",trangthaihd:"Hoạt động",capnhat:'Cập nhật'},]


export const TableTaikhoan = () => {
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
      columns={[
        {
          accessor: 'tendangnhap',
          title: 'Tên đăng nhập',
          textAlignment: 'left',
        },
        { accessor: 'hoten',
        title:'Họ tên' }
        ,
        { accessor: 'sdt',
        title: 'Số điện thoại', }
        ,
        { accessor: 'email',
        title: 'Email', }
        ,
        { accessor: 'vaitro',
        title: 'Vai trò', }
        ,
        { accessor: 'trangthaihd',
        title: 'Trạng thái hoạt động',
        render: ({ trangthaihd }) => (
          <Text className='txt-trangthai' title={trangthaihd} weight={300}>
            <Badge color={trangthaihd === "Hoạt động" ? "#35C75A" : "#EC3740"} status={trangthaihd === "Ngưng hoạt động" ? "success" : "error"} />{" "}{trangthaihd}
          </Text>
            )},
         { accessor: '',
          render: ({ capnhat }) => (
            <Link to={'/capnhattaikhoan'}>
           <Text className='chitiet1' color='#4277FF' >
          {capnhat.slice(0,8)}
            </Text>
            </Link>
          )
          },
      ]}
      
      totalRecords={thietBi.length}
      recordsPerPage={pageSize}
      page={page}
      onPageChange={(p) => setPage(p)}
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setPageSize}
    />
  );
}