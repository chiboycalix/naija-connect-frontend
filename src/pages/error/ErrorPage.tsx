import { useRouteError, useNavigate } from "react-router-dom";
import { Button, Result } from "antd";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError() as any;
  return (
    <Result
      status={error.status}
      title={error.statusText}
      subTitle={
        error.status === 404
          ? "Sorry, the page you visited does not exist."
          : "Sorry, something went wrong."
      }
      extra={<Button type="primary" onClick={() => navigate("/")}>Back Home</Button>}
    />
  );
}
