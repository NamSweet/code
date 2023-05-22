import { DataTable } from 'mantine-datatable';
import { Text,} from '@mantine/core';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import { useEffect, useState } from 'react';

const PAGE_SIZES = [18, 9];

const thietBi = [ { id: 'Kế toán', Songuoidung: '6', mota: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",capnhat:'Cập nhật'},
  { id: 'Bác sĩ', Songuoidung: '6', mota: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",capnhat:'Cập nhật'},
  { id: 'Lễ tân', Songuoidung: '6', mota: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",capnhat:'Cập nhật'},
  { id: 'Quản lý', Songuoidung: '6', mota: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",capnhat:'Cập nhật'},
  { id: 'Admin', Songuoidung: '6', mota: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",capnhat:'Cập nhật'},
  { id: 'Superadmin', Songuoidung: '6', mota: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",capnhat:'Cập nhật'},]


export const TableVaitro = () => {
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
          accessor: 'id',
          title: 'Tên vai trò',
          textAlignment: 'left',
        },
        { accessor: 'Songuoidung',
        title:'Số người dùng' }
        ,
        { accessor: 'mota',
        title: 'Mô tả', }
        ,
         { accessor: '',
          render: ({ capnhat }) => (
            <Link to={'/capnhatvaitro'}>
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