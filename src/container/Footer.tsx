import React from "react";
import { Layout, ColorPicker } from "antd";
import type { Color, ColorPickerProps } from "antd/es/color-picker";
const { Footer } = Layout;

const FooterComponent = ({ setThemeData }: { setThemeData: any }) => {
  const primaryColor = localStorage.getItem("primaryColor") || "#008751";
  const [colorHex, setColorHex] = React.useState<Color | string>(primaryColor);
  const [formatHex] = React.useState<ColorPickerProps["format"]>("hex");

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
  return (
    <Footer>
      <ColorPicker
        onChange={handleChange}
        format={formatHex}
        value={colorHex}
      />
    </Footer>
  );
};

export default FooterComponent;
