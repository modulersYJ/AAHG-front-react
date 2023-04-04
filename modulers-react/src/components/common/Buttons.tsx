import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: yellow;
  text-decoration: none;
  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.input`
  background-color: red;
  color: white;
  width: 100px;
  height: 50px;
  font-size: large;
  border-radius: 20px;
  border: 0px;
  margin: 10px;
  padding: 10px;
`;
export const RoundButton = styled.button`
  background-color: red;
  color: white;
  width: 100px;
  height: 50px;
  font-size: large;
  border-radius: 20px;
  border: 0px;
  margin: 10px;
  padding: 10px;
`;
