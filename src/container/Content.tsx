import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const ContentComponent = ({
  colorBgContainer,
}: {
  colorBgContainer: string;
}) => {
  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
      }}
    >
      <Outlet />
    </Content>
  );
};

export default ContentComponent;
