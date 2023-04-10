import axios from "axios";

export interface RegisterData {
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

export const registerUser = async (data: RegisterData) => {
  const response = await axios.post("/api/user/register", data);
  return response.data;
};
