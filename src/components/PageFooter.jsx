import React, { Component } from 'react';
import styled from 'styled-components';
// import {Link} from 'react-router-dom';
import myCss from '@/styleSnippets';

const StyledBg = styled.div`
  background: #fff;
  padding-top: 24px;
`;
const StyledStep = styled.ul`
  ${myCss.wrapper}
  ${myCss.rowCenterStretch}
  padding: 0 ;
  height: 120px;
`;
const StyledStepItem = styled.li`
  ${myCss.colCenterStart}
  mark {
    display: block;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: #dfdfdf;
    color: #fff;
    line-height: 38px;
    font-weight: bold;
    font-size: 28px;
    font-family: ${props => props.theme.ff_en};
  }
  span {
    display: block;
    padding-top: 13px;
    font-size: ${props => props.theme.fz_md};
    color: ${props => props.theme.fc_info};
  }
`;
const StyledStepLine = styled.li`
  width: 122px;
`;
const StyledCopy = styled.div`
  color: ${props => props.theme.fc_info};
  ${myCss.rowBetween}
  ${myCss.wrapper}
  padding: 40px 0 34px 0;
  p {
    margin: 0;
  }
  span {
    display: inline-block;
    padding: 0 10px;
  }
`;
class PageFooter extends Component {
  render() {
    return (
      <StyledBg>
        <StyledStep>
          <StyledStepItem>
            <mark>01</mark>
            <span>下单未开始，订单随时退</span>
          </StyledStepItem>
          <StyledStepLine></StyledStepLine>
          <StyledStepItem>
            <mark>02</mark>
            <span>30 分钟未接单，订单自动退</span>
          </StyledStepItem>
          <StyledStepLine></StyledStepLine>
          <StyledStepItem>
            <mark>03</mark>
            <span>消费不满意，为您来免单</span>
          </StyledStepItem>
          <StyledStepLine></StyledStepLine>
          <StyledStepItem>
            <mark>04</mark>
            <span>假一赔三</span>
          </StyledStepItem>
        </StyledStep>
        <StyledCopy>
          <p>
            <span>客服电话：028-80008000</span>
            <span>咨询时间：7*24小时</span>
            <span>|</span>
            <span>客服 QQ： 888888888</span>
            <span>咨询时间：7*24小时</span>
          </p>
          <p>
            <span>帮助中心</span>
            <span>|</span>
            <span>服务保障</span>
            <span>|</span>
            <span>陪玩守则</span>
          </p>
        </StyledCopy>
      </StyledBg>
    );
  }
}
export default PageFooter
