  import { DataTable } from 'mantine-datatable';
  import { Text,} from '@mantine/core';
  import { Link } from 'react-router-dom';
  import { Badge } from 'antd';
  import { useEffect, useState } from 'react';
  import { getList } from '../firebase/crud';

  const PAGE_SIZES = [18, 9];

  interface ThietBi {
    maThietBi: string;
    tenThietbi: string;
    diaChiIP: string;
    trangThaiHD: string;
    trangThaiKN: string;
    dichVusudung: string;
    loaiThietbi: string;
    tenDangnhap: string;
    matKhau: string;
  }

  export const TableThietBi = () => {
    const [thietBi, setThietBi] = useState<ThietBi[]>([])
    const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
    const [page, setPage] = useState(1);
    const [records, setRecords] = useState(thietBi.slice(0, pageSize));

    useEffect(() => {
      const fetchData = async () => {
        try {
          const thietBiList = await getList<ThietBi>({ collectionName: 'ThietBi' });
          setThietBi(thietBiList);
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
      const updatedRecords = thietBi.slice(from, to);
      setRecords(updatedRecords);
    }, [page, pageSize, thietBi]);

    
    return (
      <DataTable className='tbl1'
        withBorder
        borderRadius="sm"
        withColumnBorders
        striped
        records={records}
        columns={[
          {
            accessor: 'maThietBi',
            title: 'Mã thiết bị',
            textAlignment: 'left',
          },
          { accessor: 'tenThietbi',
          title:'Tên thiết bị' }
          ,
          { accessor: 'diaChiIP',
          title: 'Địa chỉ IP', }
          ,
          { accessor: 'trangthaihd',
          title: 'Trạng thái hoạt động',
          render: ({ trangThaiHD }) => (
            <Text className='txt-trangthai' title={trangThaiHD} weight={300}>
              <Badge color={trangThaiHD === "Hoạt động" ? "#35C75A" : "#EC3740"} status={trangThaiHD === "Hoạt động" ? "success" : "error"} />{" "}{trangThaiHD}
            </Text>
              )},
          {
            accessor: 'trangthaikn',
            title: 'Trạng thái kết nối', 
            render: ({ trangThaiKN }) => (
              <Text className='txt-trangthai' title={trangThaiKN} weight={300}>
                <Badge color={trangThaiKN === "Kết nối" ? "#35C75A" : "#EC3740"} status={trangThaiKN === "Kết nối" ? "success" : "error"} />{" "}{trangThaiKN}
              </Text>
                )},
          { accessor: 'dichvusd',
          title: 'Dịch vụ sử dụng',
          render: ({ dichVusudung }) => (
            <Text className='txt-trangthai' weight={300} color='#535261'>
              {dichVusudung.slice(0,200)}<br/><span className='xemthem'>Xem thêm</span>
            </Text>
          ),
          },
          
          { accessor: '',
          render: ({maThietBi}) => (
              <Link to={`/Chitietthietbi/${maThietBi}`}>
              <Text className='chitiet1'  color='#4277FF'>
                Chi tiết
              </Text>
              </Link>
            )
          },
          { accessor: '',
            render: ({maThietBi}) => (
              <Link to={`/Capnhatthietbi/${maThietBi}`}>
            <Text className='chitiet1' color='#4277FF' >
            Cập nhật
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