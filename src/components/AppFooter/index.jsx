import { Typography } from "antd"

function AppFooter() {

 return (
   <div className='footer'>
     <Typography.Link href='tel:+256763088831'>+256763088831</Typography.Link>
     <Typography.Link href='https://www.google.com' target={'_blank'}>
       Privacy Policy
     </Typography.Link>
     <Typography.Link href='https://www.google.com' target={'_blank'}>
       Terms of Use
     </Typography.Link>
   </div>
 );
}
export default AppFooter