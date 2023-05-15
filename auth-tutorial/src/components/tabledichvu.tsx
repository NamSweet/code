import { DataTable } from 'mantine-datatable';
import { Text,} from '@mantine/core';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import { useEffect, useState } from 'react';

const PAGE_SIZES = [18, 9];

const thietBi = [ { id: 'KIO_01', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Ngưng hoạt động',trangthaikn:'Mất kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },
  { id: 'KIO_01', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Hoạt động',trangthaikn:'Kết nối', dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },
  { id: 'KIO_01', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Hoạt động',trangthaikn:'Mất kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật'},
  { id: 'KIO_01', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Ngưng hoạt động',trangthaikn:'Kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật'},
  { id: 'KIO_01', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Hoạt động',trangthaikn:'Mất kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },
  { id: 'KIO_01', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Ngưng hoạt động',trangthaikn:'Kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },
  { id: 'KIO_01', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Hoạt động',trangthaikn:'Kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },
  { id: 'KIO_01', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Hoạt động',trangthaikn:'Kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },
  { id: 'KIO_01', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Hoạt động',trangthaikn:'Kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },
  { id: 'KIO_01', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Hoạt động',trangthaikn:'Kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật'},
  { id: 'KIO_01', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Hoạt động',trangthaikn:'Kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },
  { id: 'KIO_01', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Hoạt động',trangthaikn:'Mất kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },]


export const TableDichvu = () => {
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
          title: 'Mã dịch vụ',
          textAlignment: 'left',
        },
        { accessor: 'Ten',
        title:'Tên dịch vụ ' }
        ,
        { accessor: 'diachiip',
        title: 'Mô tả', }
        ,
        { accessor: 'trangthaihd',
        title: 'Trạng thái hoạt động',
        render: ({ trangthaihd }) => (
          <Text className='txt-trangthai' title={trangthaihd} weight={300}>
            <Badge color={trangthaihd === "Hoạt động" ? "#35C75A" : "#EC3740"} status={trangthaihd === "Hoạt động" ? "success" : "error"} />{" "}{trangthaihd}
          </Text>
            )},
        { accessor: '',
        render: ({ chitiet }) => (
            <Link to={'/chitietdichvu'}>
            <Text className='chitiet1'  color='#4277FF'>
               {chitiet.slice(0,8)}
            </Text>
            </Link>
          )
         },
         { accessor: '',
          render: ({ capnhat }) => (
            <Link to={'/capnhatdichvu'}>
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