import React from "react";
import { Layout, Button, ColorPicker } from "antd";
import { useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { headerStyles } from "./styles/header.styles";
import { LoginOutlined } from "@ant-design/icons";
import type { Color, ColorPickerProps } from "antd/es/color-picker";
const { Header } = Layout;

const HeaderComponent = ({
  setCollapsed,
  collapsed,
  colorBgContainer,
  setThemeData,
}: {
  collapsed: boolean;
  colorBgContainer: string;
  setCollapsed: (collapsed: boolean) => void;
  setThemeData: any;
}) => {
  const primaryColor = localStorage.getItem("primaryColor") || "#008751";
  const [colorHex, setColorHex] = React.useState<Color | string>(primaryColor);
  const [formatHex] = React.useState<ColorPickerProps["format"]>("hex");
  const navigate = useNavigate();

  const hexString = React.useMemo(
    () => (typeof colorHex === "string" ? colorHex : colorHex.toHexString()),
    [colorHex]
  );

  React.useEffect(() => {
    setThemeData((prev: any) => ({
      ...prev,
      colorPrimary: hexString,
    }));
    localStorage.setItem("primaryColor", hexString);
  }, [hexString, setThemeData]);

  const handleChange = (color: any) => {
    setColorHex(color);
  };
const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("primaryColor");
    navigate("/login");
}
  return (
    <Header
      style={{
        ...headerStyles.header,
        padding: 0,
        background: colorBgContainer,
      }}
    >
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
      <div style={headerStyles.rightNav}>
        <LoginOutlined size={150} style={{cursor: "pointer", fontSize: "18px"}} onClick={handleLogout}/>
        <ColorPicker
          onChange={handleChange}
          format={formatHex}
          value={colorHex}
        />
      </div>
    </Header>
  );
};

export default HeaderComponent;
