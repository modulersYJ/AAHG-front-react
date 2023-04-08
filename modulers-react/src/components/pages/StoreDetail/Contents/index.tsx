import React, { useState } from "react";
import styled from "styled-components";
import Reviews from "./ContentReview";
import ContentOptions from "./ContentOptions";

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
      component: (
        <ContentContainer>
          <span>
            미래공방은 8년 이상의 업력과 풍부한 경험을 가진 3D 프린터 맞춤형
            제작 전문 업체입니다.
          </span>
          <br />
          <br />
          여러분의 다양한 요구와 디자인에 맞추어 맞춤형 제품을 만들어드립니다.
          예를 들어, 여러분이 원하는 캐릭터피규어, 키홀더, 스마트폰 케이스 등
          다양한 제품을 맞춤형으로 제작할 수 있습니다.
          <br />
          <br />
          미래공방의 3D 프린터는 고정밀도와 높은 품질을 자랑하며, 다양한 소재를
          사용할 수 있습니다. 이를 통해 여러분의 다양한 요구와 디자인에 부합하는
          최적화된 제품을 제공할 수 있습니다. 우리는 또한 여러분의 요구에 따라
          다양한 크기와 디자인의 제품을 제작할 수 있습니다.
          <br />
          <br />
          미래공방은 대량 생산이 아닌 맞춤형 제품 제작에 중점을 둡니다. 따라서
          여러분은 미래공방과 함께 협력하며 자신만의 독특한 제품을 만들어 낼 수
          있습니다.
          <br />
          <br />
          우리는 또한 여러분의 안전을 최우선으로 생각합니다. 따라서 미래공방의
          3D 프린터는 최신 기술과 안전장치를 갖추고 있으며, 제품의 안전성과
          신뢰성을 보장합니다.
          <br />
          <br />
          또한 미래공방은 제품 제작 과정에서 환경을 고려합니다. 우리는
          친환경적인 소재와 재료를 사용하고, 최소한의 폐기물을 생산합니다. 이를
          통해 우리는 지속 가능한 제품 생산에 앞장서고 있습니다.
          <br />
          <br />
          미래공방의 팀은 여러분의 소중한 창작물을 최고의 작품으로 만들어
          내겠다는 열정과 풍부한 경험을 앞장세워, 앞으로도 여러분의 다양한
          요구에 부합하여 최고의 퀄리티와 서비스를 제공하겠습니다.
        </ContentContainer>
      ),
    },
    {
      id: 2,
      label: "주문/옵션",
      component: <ContentOptions />,
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
