import { DataTable } from 'mantine-datatable';
import { Text,} from '@mantine/core';
import { Badge } from 'antd';
import { useEffect, useState } from 'react';

const PAGE_SIZES = [18, 9];

const thietBi = [ { id: '2010001', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Đã hoàn thành',trangthaikn:'Mất kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },
  { id: '2010002', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Đã hoàn thành',trangthai:'Đã hoàn thành', dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },
  { id: '2010003', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Đang thực hiện',trangthaikn:'',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật'},
  { id: '2010004', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Vắng',trangthaikn:'Kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật'},
  { id: '2010005', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Đã hoàn thành',trangthaikn:'Mất kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },
  { id: '2010006', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Đang thực hiện',trangthaikn:'Kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },
  { id: '2010007', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Vắng',trangthaikn:'Kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },
  { id: '2010008', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Đã hoàn thành',trangthaikn:'Kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },
  { id: '2010009', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Vắng',trangthaikn:'Kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },
  { id: '20100010', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Đang thực hiện',trangthaikn:'Kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật'},
  { id: '20100011', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Đã hoàn thành',trangthaikn:'Kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },
  { id: '20100012', Ten: 'Kiosk', diachiip: "Hoạt động ", trangthaihd: 'Đã hoàn thành',trangthaikn:'Mất kết nối',dichvusd:'Khám tim mạch, Khám mắt...',chitiet:'Chi tiết',capnhat:'Cập nhật' },]


export const Tablechitietchvu = () => {
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
    <DataTable className='tbl100'
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
        { accessor: 'trangthaihd',
        title: 'Trạng thái hoạt động',
        render: ({ trangthaihd }) => (
          <Text className='txt-trangthai' title={trangthaihd} weight={300}>
            <Badge color={trangthaihd === "Đã hoàn thành" ? "#35C75A" : trangthaihd === "Đang thực hiện"? "#5490EB": trangthaihd === "Vắng"? "#6C7585": "#000000"} status={trangthaihd === "Đang thực hiện" ? "success": trangthaihd === "Vắng" ? "success": "error"}  />{" "}{trangthaihd}
          </Text>
            )},
       
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