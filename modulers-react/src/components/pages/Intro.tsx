import React from "react";
import styled, { keyframes } from "styled-components";
import NetworkGlobe from "./IntroSubs/NetworkGlobe";
import { useNavigate } from "react-router-dom";

export default function Intro(): JSX.Element {
  const navigate = useNavigate();

  const onClickNavGen = () => {
    navigate("/generate");
  };
  return (
    <Container style={{ width: "100%" }}>
      <Head style={{}}>
        <TitleSection>
          <SiteTitle>AAHG</SiteTitle>
          <SiteDescription>
            당신이 상상한 굿즈가 어느새 집 앞에
            <br />
            'AAHG, Already At Home Your Goods'
          </SiteDescription>
        </TitleSection>
        <NetworkGlobe />
      </Head>
      <div
        style={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px" }}
      >
        <NavButton onClick={onClickNavGen}>시작하기</NavButton>
      </div>
      <Content />
    </Container>
  );
}

const Container = styled.div`
  background-color: #121212;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  gap: 150px;
  align-items: center;
  padding: 2rem;
`;

// const NetworkGlobe = styled.div`
//   width: 100px;
//   height: 100px;
//   border: 2px solid #ffffff;
//   border-radius: 50%;
//   animation: ${rotatingAnimation} 10s linear infinite;
// `;

const TitleSection = styled.div`
  text-align: right;
`;

const SiteTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SiteDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const Content = styled.div`
  flex: 1;
`;

const NavButton = styled.button`
  width: 150px;
  background-color: #9600fac7;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  cursor: pointer;
  border-radius: 4px;

  margin-left: auto;
`;
