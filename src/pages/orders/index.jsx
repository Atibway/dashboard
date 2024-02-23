import Typography from 'antd/es/typography/Typography';
import { useEffect, useState } from 'react';
import { getOrders, getProducts } from '../../APIs';
import { Avatar, Rate, Space, Table } from 'antd';
import { Rating } from '@mui/material';

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);
  return (
    <Space direction='vertical' size={20}>
      <Typography.Title>Orders</Typography.Title>

      <Table
        loading={loading}
        columns={[
          {
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'Price',
            dataIndex: 'price',
            render: (value) => {
              return <span>${value}</span>;
            },
          },
          {
            title: 'discountPercentage',
            dataIndex: 'discountPercentage',
            render: (value) => {
              return <span>${value}</span>;
            },
          },
          {
            title: 'Quantity',
            dataIndex: 'quantity',
          },
          {
            title: 'Total',
            dataIndex: 'total',
          },

          {
            title: 'discountPercentage',
            dataIndex: 'discountPercentage',
            render: (value)=>{
              return <span>{value}%</span>
            }
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
export default Orders;
