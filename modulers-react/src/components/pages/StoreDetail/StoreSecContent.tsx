import React, { useState } from "react";
import styled from "styled-components";
import Reviews from "./Contents/ContentReview";

type TabButtonProps = {
  isActive: boolean;
};

const StoreSecContent: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabButtonClick = (index: number) => {
    setActiveTabIndex(index);
  };

  const tabButtons = [
    {
      id: 1,
      label: "업체 소개",
      component: <ContentContainer>업체 소개</ContentContainer>,
    },
    {
      id: 2,
      label: "주문/옵션",
      component: <ContentContainer>메뉴</ContentContainer>,
    },
    {
      id: 3,
      label: "리뷰",
      component: (
        <ContentContainer>
          <Reviews />
        </ContentContainer>
      ),
    },
  ];

  return (
    <Container>
      <TabList>
        {tabButtons.map((tabButton, index) => (
          <TabButton
            key={tabButton.id}
            isActive={activeTabIndex === index}
            onClick={() => handleTabButtonClick(index)}
          >
            {tabButton.label}
          </TabButton>
        ))}
      </TabList>
      <MainContent>{tabButtons[activeTabIndex].component}</MainContent>
    </Container>
  );
};

const Container = styled.div``;

const ContentContainer = styled.div`
  padding: 15px;
`;

const TabList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;

const TabButton = styled.li<TabButtonProps>`
  flex: 1;
  text-align: center;
  padding: 1rem;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  color: ${(props) => (props.isActive ? "#000" : "#aaa")};
  cursor: pointer;
`;

const MainContent = styled.div`
  padding: 1rem;
  border-top: 1px solid #ccc;
`;

export default StoreSecContent;
