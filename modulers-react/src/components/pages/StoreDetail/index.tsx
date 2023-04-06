import React from "react";
import styled from "styled-components";
import { OutletDefault } from "../../common/Outlet";
import HotelGalleryWithThumbnails from "./HotelGalleryWithThumbnails";

const StoreDetail = (): JSX.Element => {
  return (
    <OutletDefault>
      <HotelGalleryWithThumbnails />
    </OutletDefault>
  );
};

export default StoreDetail;
