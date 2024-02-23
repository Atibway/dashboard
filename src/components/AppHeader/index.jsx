import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { BorderLeftOutlined, MailOutline } from '@mui/icons-material';
import { Badge, Drawer, Image, List, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { getComments, getOrders } from '../../APIs';


function AppHeader() {
  
  const[comments, setComments]= useState([])
  const[orders, setOrders]= useState([])
const [commentsOpen, setCommentsOpen] = useState(false)
const [notificationOpen, setNotificationOpen] = useState(false)
useEffect(()=>{
getComments().then((res)=>{
setComments(res.comments)
})
getOrders().then((res)=>{
setOrders(res.products)
})


},[])

  return (
    <div className='header'>
      <Image
        style={{ width: '50px', borderRadius: '50%' }}
        src='https://img.lovepik.com/element/40172/7089.png_1200.png'
      ></Image>
      <div className='myName'>Atiidu's Dashboard</div>
      <Space>
        <Badge count={comments.length}>
          <MailOutline
            style={{ fontSize: '24px' }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>

        <Badge count={orders.length}>
          <NotificationsActiveIcon
            style={{ fontSize: '24px' }}
            onClick={() => {
              setNotificationOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
        title='Comments'
      >
        <List dataSource={comments} renderItem={(item)=>{

        return (
          <List.Item>
            <Typography.Paragraph strong> {item.body}</Typography.Paragraph>
          </List.Item>
        );
        }}></List>
      </Drawer>
      <Drawer
        open={notificationOpen}
        onClose={() => {
          setNotificationOpen(false);
        }}
        maskClosable
        title='Notifications'
      >
        <List dataSource={orders} renderItem={(orders)=>{
          
          return <List.Item>{orders.title}</List.Item>
        }}></List>
      </Drawer>
    </div>
  );
}
export default AppHeader;
