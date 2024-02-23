import { CurrencyExchange, CurrencyPound, Person, ShoppingBagOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Space, Statistic, Table } from 'antd';
import Card from 'antd/es/card/Card';

import Typography from 'antd/es/typography/Typography';
import { useEffect, useState } from 'react';
import { getCustomers, getOrders, getProducts, getRevenue} from '../../APIs';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const[orders, setOrders] = useState(0)
  const[products, setProducts] = useState(0)
  const[customers, setCustomers] = useState(0)
  const[revenue, setRevenue] = useState(0)

  useEffect(()=>{
    getOrders().then((res)=>{
      setOrders(res.total)
      setRevenue(res.total);
    })
    getCustomers().then((res)=>{
      setCustomers(res.total)
    })
    getProducts().then((res)=>{
      setProducts(res.total)
    })
    
  },[])
  return (
    <div>
      <Typography.Title style={{ display: 'block', padding: '10px' }}>
        Dashboard
      </Typography.Title>

      <Space className='boards' key={20} direction='horizontal'>
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: 'green',
                backgroundColor: 'rgba(0, 255, 0,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={'Orders'}
          value={orders}
        />
        <DashboardCard
          icon={
            <ShoppingBagOutlined
              style={{
                color: 'blue',
                backgroundColor: 'rgba(0, 0, 255,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={'Inventory'}
          value={products}
        />
        <DashboardCard
          icon={
            <Person
              style={{
                color: 'purple',
                backgroundColor: 'rgba(0, 255, 255,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={'Customers'}
          value={customers}
        />
        <DashboardCard
          icon={
            <CurrencyExchange
              style={{
                color: 'red',
                backgroundColor: 'rgba(255, 0, 0,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={'Revenue'}
          value={revenue}
        />
      </Space>
      <Space className='tableChat' style={{ padding: '20px' }}>
        <RecentOrders />
        <DashboardChart />
      </Space>
    </div>
  );
  
}
const DashboardCard = ({title,value,icon}) => {
  return (
    <Card >
      <Space direction='horizontal'>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};
 const RecentOrders =()=>{
const [dataSource, setDataSource]= useState([])
const [loading, setLoading]= useState(false)
  useEffect(()=>{
setLoading(true)
getOrders().then((res)=>{
 setDataSource(res.products.splice(0,3))
 setLoading(false)
})

  },[])

  return (
    <>
    <Typography.Text>Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'Quantity',
            dataIndex: 'quantity',
          },
          {
            title: 'price',
            dataIndex: 'price',
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
 }

 const DashboardChart = ()=>{
const [revenueData, setRevenueData] = useState({labels:[],datasets:[]})

useEffect(()=>{
   getRevenue().then((res)=>{
    const labels = res.carts.map(cart=>{
      return `User-${cart.userId}`
    })

    const data = res.carts.map((cart)=>{
      return cart.discountedTotal;
    })
  
    const dataSource = {
      labels,
      datasets: [
        {
          label: 'Revenue',
          data: data,
          backgroundColor: 'rgba(255, 0, 0, 1)',
        },
      ],
    };

    setRevenueData(dataSource)

  })
},[])



 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Order Revenue',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


  return (
    <Card style={{height:250,width:500}}>
      <Bar options={options} data={revenueData} />
    </Card>
  ); 
 }
export default Dashboard;
