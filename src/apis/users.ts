import axios from "axios";

export interface AxiosError {
  response: {
    data: {
      message: string;
    }
  }
}

export const fetchUsers = async () => {
  return axios.get(`${import.meta.env.VITE_API_BASE_URL}/users`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("naijaConnectJWT")}`,
    }
  });
}