import { DataTable } from 'mantine-datatable';
import { Text,} from '@mantine/core';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PAGE_SIZES = [18, 9];

const thietBi = [ { tendangnhap: 'tuyetnguyen@12', thoigiantacdong: '01/12/2021 15:12:17', ipthuchien: "192.168.3.1",thaotac:'Cập nhật thông tin dịch vụ DV_01'},
  {  tendangnhap: 'tuyetnguyen@12', thoigiantacdong: '01/12/2021 15:12:17', ipthuchien: "192.168.3.1",thaotac:'Cập nhật thông tin dịch vụ DV_01'},
  {  tendangnhap: 'tuyetnguyen@12', thoigiantacdong: '01/12/2021 15:12:17', ipthuchien: "192.168.3.1",thaotac:'Cập nhật thông tin dịch vụ DV_01'},
  {  tendangnhap: 'tuyetnguyen@12', thoigiantacdong: '01/12/2021 15:12:17', ipthuchien: "192.168.3.1",thaotac:'Cập nhật thông tin dịch vụ DV_01'},
  {  tendangnhap: 'tuyetnguyen@12', thoigiantacdong: '01/12/2021 15:12:17', ipthuchien: "192.168.3.1",thaotac:'Cập nhật thông tin dịch vụ DV_01'},
  {  tendangnhap: 'tuyetnguyen@12', thoigiantacdong: '01/12/2021 15:12:17', ipthuchien: "192.168.3.1",thaotac:'Cập nhật thông tin dịch vụ DV_01'},
  {  tendangnhap: 'tuyetnguyen@12', thoigiantacdong: '01/12/2021 15:12:17', ipthuchien: "192.168.3.1",thaotac:'Cập nhật thông tin dịch vụ DV_01'},
  {  tendangnhap: 'tuyetnguyen@12', thoigiantacdong: '01/12/2021 15:12:17', ipthuchien: "192.168.3.1",thaotac:'Cập nhật thông tin dịch vụ DV_01'},
  {  tendangnhap: 'tuyetnguyen@12', thoigiantacdong: '01/12/2021 15:12:17', ipthuchien: "192.168.3.1",thaotac:'Cập nhật thông tin dịch vụ DV_01'},
  {  tendangnhap: 'tuyetnguyen@12', thoigiantacdong: '01/12/2021 15:12:17', ipthuchien: "192.168.3.1",thaotac:'Cập nhật thông tin dịch vụ DV_01'},
  {  tendangnhap: 'tuyetnguyen@12', thoigiantacdong: '01/12/2021 15:12:17', ipthuchien: "192.168.3.1",thaotac:'Cập nhật thông tin dịch vụ DV_01'},
  {  tendangnhap: 'tuyetnguyen@12', thoigiantacdong: '01/12/2021 15:12:17', ipthuchien: "192.168.3.1",thaotac:'Cập nhật thông tin dịch vụ DV_01'},]
  


export const TableNhatky = () => {
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
        { accessor: 'thoigiantacdong',
        title:'Thời gian tác động' }
        ,
        { accessor: 'ipthuchien',
        title: 'IP thực hiện', }
        ,
        { accessor: 'thaotac',
        title: 'Thao tác thực hiện', }
        ,
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