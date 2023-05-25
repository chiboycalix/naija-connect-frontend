import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const { Header } = Layout;

const HeaderComponent = ({
  setCollapsed,
  collapsed,
  colorBgContainer,
}: {
  collapsed: boolean;
  colorBgContainer: string;
  setCollapsed: (collapsed: boolean) => void;
}) => {
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </Header>
  );
};

export default HeaderComponent;