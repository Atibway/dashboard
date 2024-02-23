import Typography from 'antd/es/typography/Typography';
import { useEffect, useState } from 'react';
import { getProducts } from '../../APIs';
import { Avatar, Rate, Space, Table } from 'antd';
import { Rating } from '@mui/material';

function Inventory() {
  const [loading, setLoading]= useState(false)
  const [dataSource, setDataSource]= useState([])

  useEffect(()=>{
    setLoading(true)
    getProducts().then(res=>{
      setDataSource(res.products)
      setLoading(false);
    })
  },[])
  return (
    <Space direction='vertical' size={20}>
      <Typography.Title>inventory</Typography.Title>

      <Table
      loading={loading}
        columns={[
          {
            title: 'Thumbnail',
            dataIndex: 'thumbnail',
            render: (link)=>{
              return <Avatar src={link}/>
            }
          },
          {
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'Price',
            dataIndex: 'price',
            render: (value)=>{
              return <span>${value}</span>
            }
          },
          {
            title: 'Rating',
            dataIndex: 'rating',
            render: (Rating)=>{
              return <Rate value={Rating} allowHalf disabled/>
            }
          },
          {
            title: 'Stock',
            dataIndex: 'stock',
          },

          {
            title: 'Brand',
            dataIndex: 'brand',
          },
          {
            title: 'Category',
            dataIndex: 'category',
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5
        }}
      ></Table>
    </Space>
  );
  
}
export default Inventory;
