import { DataTable } from 'mantine-datatable';
import { Text,} from '@mantine/core';
import { Badge, Checkbox, Dropdown, Menu } from 'antd';
import { useEffect, useState } from 'react';
import {TiArrowUnsorted} from "react-icons/ti";

const PAGE_SIZES = [18, 9];

export const baoCao = [ { stt: '2010001', tendichvu: "Khám tim mạch",thoigiancap:'14:35 - 07/11/2021',trangthaihd: 'Đang chờ',nguoncap:'Kiosk'},
  { stt: '2010002', tendichvu: "Khám sản - Phụ Khoa",thoigiancap:'14:35 - 07/11/2021', trangthaihd: 'Đã sử dụng',nguoncap:'Kiosk'},
  { stt: '2010003', tendichvu: "Khám răng hàm mặt",thoigiancap:'14:35 - 07/11/2021',trangthaihd: 'Đang chờ',nguoncap:'Hệ thống'},
  { stt: '2010004', tendichvu: "Khám tai mũi họng",thoigiancap:'14:35 - 07/11/2021',trangthaihd: 'Đã sử dụng',nguoncap:'Kiosk'},
  { stt: '2010005', tendichvu: "Khám hô hấp",thoigiancap:'14:35 - 07/11/2021',trangthaihd: 'Đang chờ',nguoncap:'Hệ thống' },
  { stt: '2010006', tendichvu: "Khám tổng quát",thoigiancap:'14:35 - 07/11/2021',trangthaihd: 'Đã sử dụng',nguoncap:'Hệ thống'},
  { stt: '2010007', tendichvu: "Khám tai mũi họng",thoigiancap:'14:35 - 07/11/2021',trangthaihd: 'Đang chờ',nguoncap:'Kiosk'},
  { stt: '2010008', tendichvu: "Khám tổng quát",thoigiancap:'14:35 - 07/11/2021',trangthaihd: 'Đã sử dụng',nguoncap:'Hệ thống'},
  { stt: '2010009', tendichvu: "Khám tai mũi họng",thoigiancap:'14:35 - 07/11/2021',trangthaihd: 'Bỏ qua',nguoncap:'Hệ thống'},
  { stt: '20100010', tendichvu: "Khám tổng quá",thoigiancap:'14:35 - 07/11/2021',trangthaihd: 'Bỏ qua',nguoncap:'Kiosk'},
  { stt: '20100011', tendichvu: "Khám tai mũi họng",thoigiancap:'14:35 - 07/11/2021',trangthaihd: 'Đã sử dụng',nguoncap:'Hệ thống'},
  { stt: '20100012', tendichvu: "Khám tai mũi họng",thoigiancap:'14:35 - 07/11/2021',trangthaihd: 'Đã sử dụng',nguoncap:'Kiosk'},]

  type ColumnType = keyof typeof baoCao[0];

export const TableBaocao = () => {
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(baoCao.slice(0, pageSize));
  const [initialRecords] = useState(baoCao); 
  const [filters, setFilters] = useState<Record<ColumnType, string[] | undefined>>({} as Record<ColumnType, string[] | undefined>);

  
  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    const filteredRecords = baoCao.filter((record) => {
      // Kiểm tra xem mỗi dòng dữ liệu có khớp với các bộ lọc đã chọn hay không
      return Object.entries(filters).every(([key, value]) => {
        if (Array.isArray(value)) {
          return value.includes(record[key as keyof typeof record]);
        } else {
          return record[key as keyof typeof record] === value;
        }
      });
    });
  
    if (filteredRecords.length === 0) {
      setRecords(initialRecords.slice(0, pageSize));
    } else {
      setRecords(filteredRecords.slice(from, to));
    }
  }, [page, pageSize, filters, initialRecords, baoCao]);

  const handleFilterChange = (column: ColumnType, values: string[] | ((prevValues: string[] | undefined) => string[])): void => {
    if (typeof values === 'function') {
      const prevValues = filters[column] ?? [];
      const newValues = values(prevValues);
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters, [column]: newValues };
  
        // Kiểm tra xem đã bỏ check hết trong cột hay chưa
        const isColumnEmpty = Object.values(updatedFilters).every((filter) => filter === undefined || filter.length === 0);
        if (isColumnEmpty) {
          delete updatedFilters[column]; // Xóa bỏ bộ lọc của cột đó nếu đã bỏ check hết
        }
  
        return updatedFilters;
      });
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters, [column]: values };
  
        // Kiểm tra xem đã bỏ check hết trong cột hay chưa
        const isColumnEmpty = Object.values(updatedFilters).every((filter) => filter === undefined || filter.length === 0);
        if (isColumnEmpty) {
          delete updatedFilters[column]; // Xóa bỏ bộ lọc của cột đó nếu đã bỏ check hết
        }
  
        return updatedFilters;  
      });
    }
  };
  
  const renderDropdown = (column: ColumnType) => (
    <Menu>
      {Array.from(new Set(baoCao.map((record) => record[column]))).map((value) => (
        <Menu.Item key={value}>
          <Checkbox
            checked={filters[column]?.includes(value)}
            onChange={(e) => {
              const isChecked = e.target.checked;
              handleFilterChange(column, (prevValues: string[] | undefined) => {
                if (isChecked) {
                  return [...(prevValues ?? []), value];
                } else {
                  const tempPrevValues: any = prevValues;
                  return (tempPrevValues ?? []).filter((v: any) => v !== value);
                }
              });
            }}
          >
            {value}
          </Checkbox>
        </Menu.Item>
      ))}
    </Menu>
  ); 
  
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
            title:(
              <div className='table-title'>
              <Text>Số thứ tự</Text> 
              <Dropdown overlay={renderDropdown('stt')}>
             <div style={{fontSize: 12, cursor: "pointer"}}><TiArrowUnsorted/></div>
             </Dropdown>
              </div>
              
             ) ,
          },
          { accessor: 'tendichvu',
          title: (
           <div className='table-title'>
           <Text>Tên dịch vụ</Text> 
          <Dropdown overlayStyle={{maxHeight: 198, width: 226}} overlay={renderDropdown('tendichvu')}>
          <div style={{fontSize: 12, cursor: "pointer"}}><TiArrowUnsorted/></div>
          </Dropdown>
           </div>
           
          ) 
        },
      { accessor: 'thoigiancap',
          title: (
            <div className='table-title'>
            <Text>Thời gian cấp</Text> 
            <Dropdown overlay={renderDropdown('thoigiancap')}>
             <div style={{fontSize: 12, cursor: "pointer"}}><TiArrowUnsorted/></div>
             </Dropdown>
            </div>
           )}
          ,
          { accessor: 'trangthaihd',
          title:(
            <div className='table-title'>
            <Text>Tình trạng</Text> 
            <Dropdown overlay={renderDropdown('trangthaihd')}>
             <div style={{fontSize: 12, cursor: "pointer"}}><TiArrowUnsorted/></div>
             </Dropdown>
            </div>
            
           ) ,
          render: ({ trangthaihd }) => (
              <Text className='txt-trangthai' title={trangthaihd} weight={300}>
              <Badge color={trangthaihd === "Đang chờ" ? "#4277FF" : trangthaihd === "Đã sử dụng"? "#535261": trangthaihd === "Bỏ qua"? "#E73F3F": "#000000"} status={trangthaihd === "Đã sử dụng" ? "success": trangthaihd === "Bỏ qua" ? "success": "error"}  />{" "}{trangthaihd}
            </Text>
              )},
  
              { accessor: 'nguoncap',
              title:(
                <div className='table-title'>
                <Text>Nguồn cấp</Text> 
                <Dropdown overlay={renderDropdown("nguoncap")}>
             <div style={{fontSize: 12, cursor: "pointer"}}><TiArrowUnsorted/></div>
             </Dropdown>
                </div>
                
               ) 
              }
        ]
        }
      
      totalRecords={baoCao.length}
      recordsPerPage={pageSize}
      page={page}
      onPageChange={(p) => setPage(p)}
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setPageSize}
    />
  );
}