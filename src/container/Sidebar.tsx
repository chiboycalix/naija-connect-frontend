import { Layout, Menu, theme } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { sidebarStyles } from "./styles/sidebar.styles";
import FooterComponent from "./Footer";

const { Sider } = Layout;

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  const { pathname } = useLocation();
  const appTheme = "light";

  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme={appTheme}
      style={sidebarStyles.sidebar}
    >
      <div className="demo-logo-vertical" style={{ ...sidebarStyles.logo }}>
        <h1 style={sidebarStyles.logoText}>
          <Link to="/" style={{ color: colorPrimary }}>
            {collapsed ? "NC" : "NaijaConnect"}
          </Link>
        </h1>
      </div>
      <Menu
        theme={appTheme}
        mode="inline"
        defaultSelectedKeys={[pathname]}
        items={[
          {
            key: "/" || "/dashboard",
            icon: <UserOutlined />,
            label: <Link to={`dashboard`}>Dashboard</Link>,
          },
          {
            key: "/users",
            icon: <UserOutlined />,
            label: <Link to={`users`}>Users</Link>,
          },
          {
            key: "/roles",
            icon: <VideoCameraOutlined />,
            label: <Link to={`roles`}>Roles</Link>,
          },
        ]}
      />
      <FooterComponent />
    </Sider>
  );
};

export default Sidebar;
