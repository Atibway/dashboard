import Typography from 'antd/es/typography/Typography';
import { useEffect, useState } from 'react';
import { getCustomers } from '../../APIs';
import { Avatar, Rate, Space, Table } from 'antd';

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);
  return (
    <Space direction='vertical' size={20}>
      <Typography.Title>Customers</Typography.Title>

      <Table
        loading={loading}
        columns={[
          {
            title: 'Id',
            dataIndex: 'id',
          },
          {
            title: 'image',
            dataIndex: 'image',
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: 'FirstName',
            dataIndex: 'firstName',
          },

          {
            title: 'LastName',
            dataIndex: 'lastName',
          },

          {
            title: 'Email',
            dataIndex: 'email',
          },
          {
            title: 'Phone',
            dataIndex: 'phone',
          },
          {
            title: 'BirthDate',
            dataIndex: 'birthDate',
          },
          {
            title: 'address',
            dataIndex: 'address',
            render: (address) => {
              return (
                <span>
                  {address.address} - {address.city}
                </span>
              );
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}
export default Customers;
