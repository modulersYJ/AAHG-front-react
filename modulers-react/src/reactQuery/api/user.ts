import axios from "axios";
import { API_BASE_URL } from "../url";

export interface IRegisterData {
  username: string;
  password: string;
  nickname: string;
  email: string;
  gender: string;
  birth_date: string;
  phone_num: string;
  svc_use_pcy_agmt: string;
  ps_info_proc_agmt: string;
  loc_base_svc_agmt: string;
  mkt_info_recv_agmt: string;
  push_agmt: string;
  interests: string;
}

export const registerUser = async (data: IRegisterData) => {
  const response = await axios.post(`${API_BASE_URL}/user/register`, data);
  return response.data;
};
