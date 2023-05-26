import React from "react";
import { ConfigProvider } from "antd";
import Layout from "./container/Layout";

type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
};

const defaultData: ThemeData = {
  borderRadius: 6,
  colorPrimary: "#008751",
};

const App = () => {
  const [themeData, setThemeData] = React.useState<ThemeData>(defaultData);
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: themeData.colorPrimary,
            borderRadius: themeData.borderRadius,
            linkHoverDecoration: "none",
            colorLink: themeData.colorPrimary,
            colorLinkHover: themeData.colorPrimary,
            colorLinkActive: themeData.colorPrimary,
          },
        }}
      >
        <Layout setThemeData={setThemeData} />
      </ConfigProvider>
    </>
  );
};

export default App;
