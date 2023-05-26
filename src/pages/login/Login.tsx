import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, ConfigProvider, Form, Input, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginStyles } from "./login.styles";
import { AxiosError, loginUser } from "../../apis/auth";

const inputSize = "large";
type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
};

const defaultData: ThemeData = {
  borderRadius: 6,
  colorPrimary: "#008751",
};

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  // Mutations
  const {
    mutate,
    isLoading,
    isError,
    error,
    isSuccess,
  }: {
    mutate: ({ email, password }: { email: string; password: string }) => void;
    isLoading: boolean;
    error: AxiosError | null;
    isError: boolean;
    isSuccess: boolean;
  } = useMutation({
    mutationFn: loginUser,
  });

  const onFinish = (values: { email: string; password: string }) => {
    mutate({
      email: values.email,
      password: values.password,
    });

    navigate("/")
  };

  if (isError) {
    messageApi.open({
      type: "error",
      content: error?.response?.data?.message,
      key: "loginMessages",
    });
  }
  if (isSuccess) {
    messageApi.open({
      type: "success",
      content: "Login was successful",
      key: "loginMessages",
    });
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: defaultData.colorPrimary,
          borderRadius: defaultData.borderRadius,
        },
      }}
    >
      {contextHolder}
      {/* @ts-ignore */}
      <div style={loginStyles.container}>
        <h1
          style={{ ...loginStyles.brandName, color: defaultData.colorPrimary }}
        >
          NaijaConnect
        </h1>
        <div style={loginStyles.content}>
          <Form
            name="normal_login"
            style={loginStyles.form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                size={inputSize}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                size={inputSize}
              />
            </Form.Item>
            <div style={loginStyles.rememberForgotPass}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox style={loginStyles.remberMe}>Remember me</Checkbox>
              </Form.Item>

              <a href="" style={{ color: defaultData.colorPrimary }}>
                Forgot password
              </a>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={loginStyles.loginButton}
                size="large"
                loading={isLoading}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default App;
