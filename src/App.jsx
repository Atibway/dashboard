

import { Space } from "antd";
import "./App.css"
import AppSideBar from "./components/SideMenu"
import AppHeader from './components/AppHeader';

import AppPageContent from "./components/PageContent";
import AppFooter from "./components/AppFooter";




const App = ()=>{
  return (
    <div className="App">
<AppHeader/>
<div className="sideMenuAndPageContent">
<AppSideBar></AppSideBar>
<AppPageContent></AppPageContent>
</div>

<AppFooter/>
    </div>
  );

    }
export default App
