import { useQuery } from "@tanstack/react-query";
import UsersTable from "./UsersTable";
import { fetchUsers } from "../../apis/users";

const ListUsers = () => {
  const { isLoading, error, data, isError } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
  });
  return <UsersTable isLoading={isLoading} error={error} data={data?.data}isError={isError} />;
};

export default ListUsers;
