//  W3C에서 제공하는 표준 미디어쿼리 범위

export const breakpoints = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  // lg: "992px",
  lg: "1023px",
  xl: "1200px",
};

/* 사용예제
const Title = styled.h1`
  font-size: 20px;
  text-align: center;

  @media (min-width: ${breakpoints.sm}) {
    font-size: 24px;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 28px;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 32px;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 36px;
  }
`;
 */
