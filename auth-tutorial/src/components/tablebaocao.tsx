import { DataTable } from 'mantine-datatable';
import { Text,} from '@mantine/core';
import { Badge, Checkbox, Dropdown, Menu } from 'antd';
import { useEffect, useState } from 'react';
import {TiArrowUnsorted} from "react-icons/ti";
import { getList } from '../firebase/crud';

const PAGE_SIZES = [18, 9];
interface BaoCao {
  stt: string;
  tenDichvu: string;
  thoiGiancap: string;
  trangThaihoatdong:string;
  nguonCap:string;
}

export const TableBaocao = () => {
  const [baoCao, setBaoCao] = useState<BaoCao[]>([])
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(baoCao.slice(0, pageSize));
  const [initialRecords] = useState(baoCao); 
  const [filters, setFilters] = useState<Record<ColumnType, string[] | undefined>>({} as Record<ColumnType, string[] | undefined>);

  type ColumnType = keyof typeof baoCao[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baoCaoList = await getList<BaoCao>({ collectionName: 'CapSo' });
        setBaoCao(baoCaoList);
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
          { accessor: 'tenDichvu',
          title: (
           <div className='table-title'>
           <Text>Tên dịch vụ</Text> 
          <Dropdown overlayStyle={{maxHeight: 198, width: 226}} overlay={renderDropdown('tenDichvu')}>
          <div style={{fontSize: 12, cursor: "pointer"}}><TiArrowUnsorted/></div>
          </Dropdown>
           </div>
           
          ) 
        },
      { accessor: 'thoiGiancap',
          title: (
            <div className='table-title'>
            <Text>Thời gian cấp</Text> 
            <Dropdown overlay={renderDropdown('thoiGiancap')}>
             <div style={{fontSize: 12, cursor: "pointer"}}><TiArrowUnsorted/></div>  
             </Dropdown>
            </div>
           ),
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
          ) }
          ,
          { accessor: 'trangThaihoatdong',
          title:(
            <div className='table-title'>
            <Text>Tình trạng</Text> 
            <Dropdown overlay={renderDropdown('trangThaihoatdong')}>
             <div style={{fontSize: 12, cursor: "pointer"}}><TiArrowUnsorted/></div>
             </Dropdown>
            </div>
            
           ) ,
          render: ({ trangThaihoatdong }) => (
              <Text className='txt-trangthai' title={trangThaihoatdong} weight={300}>
              <Badge color={trangThaihoatdong === "Đang chờ" ? "#4277FF" : trangThaihoatdong === "Đã sử dụng"? "#535261": trangThaihoatdong === "Bỏ qua"? "#E73F3F": "#000000"} status={trangThaihoatdong === "Đã sử dụng" ? "success": trangThaihoatdong === "Bỏ qua" ? "success": "error"}  />{" "}{trangThaihoatdong}
            </Text>
              )},
  
              { accessor: 'nguonCap',
              title:(
                <div className='table-title'>
                <Text>Nguồn cấp</Text> 
                <Dropdown overlay={renderDropdown("nguonCap")}>
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