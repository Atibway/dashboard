import { AppsOutageRounded, MenuOutlined, Person, ShopOutlined, ShoppingCart, VerifiedUserOutlined } from "@mui/icons-material";
import { Drawer, Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AppSideBar() {
const [openMenu, setOpenMenu]= useState(false)

 
  return (
    <div className='side-bar'>
      <span className="menuBarResp">
        <MenuBar />
      </span>

      <span className='headerResponsive'>
        <MenuOutlined
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </span>
      <Drawer
        style={{ width: '190px' }}
        placement='left'
        open={openMenu}
        onClick={() => {
          setOpenMenu(false);
        }}
      >
        <MenuBar />
      </Drawer>
    </div>
  );
}

const MenuBar=()=>{
 const navigate = useNavigate();
  return (
    <Menu
      mode='vertical'
      className='side-menu-vertical'
      onClick={(item) => {
        //item.key
        navigate(item.key);
      }}
      items={[
        {
          label: 'Dashboard',
          key: '/',
          icon: <AppsOutageRounded />,
        },
        {
          label: 'Inventory',
          key: '/inventory',
          icon: <ShopOutlined />,
        },
        {
          label: 'Orders',
          key: '/orders',
          icon: <ShoppingCart />,
        },
        {
          label: 'Customers',
          key: '/customers',
          icon: <Person />,
        },
      ]}
    ></Menu>
  );
}
export default AppSideBar;