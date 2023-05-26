import React, { useState } from "react";
import { Layout, theme } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import HeaderComponent from "./Header";
import ContentComponent from "./Content";

const Index = ({ setThemeData }: { setThemeData: any }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  React.useEffect(() => { 
    if(pathname === '/') {
      navigate("/dashboard")
    }
  }, [pathname]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed}/>
      <Layout>
        <HeaderComponent setCollapsed={setCollapsed} collapsed={collapsed} colorBgContainer={colorBgContainer} setThemeData={setThemeData}/>
        <ContentComponent colorBgContainer={colorBgContainer} />
      </Layout>
    </Layout>
  );
};

export default Index;
