import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <GreyFooter>
      <div id="page-footer">
        <div className="footer-top">
          <div className="footer-container">
            <div className="footer-info">
              <p className="footer-title">개인정보처리방침</p>
              <p className="footer-title">취소/환불 정책</p>
              <div className="footer-txt">
                <p className="address">
                  03722 서울특별시 서대문구 연세로 50 연세대학교 <br />
                  신촌ㆍ국제/미래 : 1599-1885
                </p>
                <p className="copyright">
                  COPYRIGHT© YONSEI UNIV. ALL RIGHTS RESERVED.
                </p>
              </div>
            </div>
            <div className="footer-cscenter">
              <p className="footer-title">LearnUs YONSEI 사용문의</p>
              <div className="footer-txt">
                <p className="num">02-2123-4201 ~ 4205</p>
                <p className="cs_info">
                  평일 09:00 ~ 17:20 (점심시간 12:00 ~ 13:00) <br />
                  토,일요일 및 공휴일은 쉽니다.
                </p>
                <p className="cs_link"></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-container">
            <div className="footer-sns"></div>
          </div>
        </div>

        <div id="back-top" style={{ display: "block" }}>
          <a href="#top">
            <span></span>
          </a>
        </div>
        <div id="ajax_loading_submit">&nbsp;</div>
        <div id="ajax_loading_container">
          <div id="ajax_loading_submit_img"></div>
        </div>
      </div>
    </GreyFooter>
  );
};

export default Footer;

const GreyFooter = styled.footer`
  /* min-height: 130px; */
  width: auto;
  background-color: #242323;
  display: block;
  color: white;
  padding: 0px 30px;
  /*
  justify-content: center;
  align-items: center;
  font-size: xx-large;
  font-weight: bolder; */
`;
