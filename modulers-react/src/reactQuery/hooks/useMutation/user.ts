import { useMutation } from "react-query";
import { registerUser } from "../../api";

export const useRegisterUser = () => {
  return useMutation(registerUser);
};
