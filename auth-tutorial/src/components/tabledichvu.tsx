import { DataTable } from 'mantine-datatable';
import { Text,} from '@mantine/core';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import { useEffect, useState } from 'react';
import { getList } from '../firebase/crud';

const PAGE_SIZES = [18, 9];

interface DichVu {
  maDichVu: string;
  tenDichVu: string;
  moTa: string;
  trangThaiHD: string;

}
export const TableDichvu = () => {
  const [DichVu, setDichVu] = useState<DichVu[]>([])
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(DichVu.slice(0, pageSize));
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dichVuList = await getList<DichVu>({ collectionName: 'DichVu' });
        setDichVu(dichVuList);
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
    const updatedRecords = DichVu.slice(from, to);
    setRecords(updatedRecords);
  }, [page, pageSize, DichVu]);

  
  return (
    <DataTable className='tbl1'
      withBorder
      borderRadius="sm"
      withColumnBorders
      striped
      records={records}
      columns={[
        {
          accessor: 'maDichVu',
          title: 'Mã dịch vụ',
          textAlignment: 'left',
        },
        { accessor: 'tenDichVu',
        title:'Tên dịch vụ ' }
        ,
        { accessor: 'moTa',
        title: 'Mô tả', }
        ,
        { accessor: 'trangthaihd',
        title: 'Trạng thái hoạt động',
        render: ({trangThaiHD}) => (
          <Text className='txt-trangthai' title={trangThaiHD} weight={300}>
            <Badge color={trangThaiHD === "Hoạt động" ? "#35C75A" : "#EC3740"} status={trangThaiHD === "Hoạt động" ? "success" : "error"} />{" "}{trangThaiHD}
          </Text>
            )},
        { accessor: '',
        render: ({maDichVu}) => (
            <Link to={`/Chitietdichvu/${maDichVu}`}>
            <Text className='chitiet1'  color='#4277FF'>
            Chi tiết
            </Text>
            </Link>
          )
         },
         { accessor: '',
          render: ({ maDichVu }) => (
            <Link to={`/Capnhatdichvu/${maDichVu}`}>
           <Text className='chitiet1' color='#4277FF' >
           Cập nhật
            </Text>
            </Link>
          )
          },
      ]}
      
      totalRecords={DichVu.length}
      recordsPerPage={pageSize}
      page={page}
      onPageChange={(p) => setPage(p)}
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setPageSize}
    />
  );
}