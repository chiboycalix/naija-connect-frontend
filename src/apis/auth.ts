import axios from "axios";

export interface AxiosError {
  response: {
    data: {
      message: string;
    }
  }
}
interface ILoginPayload {
  email: string;
  password: string;
}

export const loginUser = async (loginPayload: ILoginPayload) => {
  return axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, loginPayload);
};
