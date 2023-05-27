import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  firstName: string;
  lastName: number;
  email: string;
  role: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    width: "20%",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "20%",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    width: "20%",
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    width: "20%",
    render: (_) => (
      <>
        <Button>More</Button>
      </>
    ),
  },
];

const UsersTable = ({ isError, isLoading, data, error }: {isError: boolean; isLoading: boolean; data: any, error: any}) => {

  return (
    <Table columns={columns} dataSource={data} rowKey={(record) => record.email} loading={isLoading}/>
  );
}

export default UsersTable;
