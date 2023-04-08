import React from "react";

import { OutletDefault } from "../../common/Outlet";
import MySwiper from "./MySwiper";
import images from "./images";
import StoreSecContent from "./Contents";
import styled from "styled-components";

export default function StoreDetail(): JSX.Element {
  return (
    <OutletDefault>
      <Container>
        <section className="store-sec-head">
          <MySwiper images={images} />
        </section>
        <StoreSecContent />
      </Container>
    </OutletDefault>
  );
}

const Container = styled.div`
  margin: 120px auto 0px auto;
`;
