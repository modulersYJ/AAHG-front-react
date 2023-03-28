import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: yellow;
  text-decoration: none;
  &:focus {
    outline: none;
  }
`;
