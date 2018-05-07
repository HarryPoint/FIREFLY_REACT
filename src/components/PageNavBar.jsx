import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import myCss from '@/styleSnippets';
import logoImg from '@/assets/logo.png';
const Search = Input.Search;

const StyledRow = styled(Row)`
  ${myCss.wrapper}
`;
const LogoLink = styled(Link)`
  img {
    height: 60px;
  }
`;

const Ul = styled.ul`
  font-size: 16px;
  display: flex;
  list-style: none;
  li {
    position: relative;

    a {
      position: relative;
      z-index: 2;
      display: block;
      color: #000;
      padding: 30px 20px 0 20px;
      line-height: 60px;
      transition: all .3s;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 0;
      z-index: 1;
      background-color: #ffba0a;
      transition: height .3s, opacity .3s;
    }

    &.on, &:hover {

      a {
        color: #fff;
      }

      &::after {
        height: 100%;
      }
    }
    &:hover {
      &::after {
        opacity: .8;
      }
    }
  }
`;

const StyledSearch = styled(Search)`
  .ant-input {
    border-radius: 16px;
  }
`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: space-between;
`;

const StyledSpan = styled.span`
  color: #000;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    color: #ffb835;
  }
`;

class TopNavBar extends Component {
  render() {
    return (
      <div>
        <StyledRow type="flex" justify="space-between" align="middle">
          <Col span={4}>
            <LogoLink to="/"><img src={logoImg} alt=""/></LogoLink>
          </Col>
          <Col span={8}>
            <Ul>
              <li className="on"><Link to="/">首页</Link></li>
              <li><Link to="/userCenter">全部大神</Link></li>
              <li><Link to="/topics">APP下载</Link></li>
            </Ul>
          </Col>
          <Col span={4}>
            <StyledSearch></StyledSearch>
          </Col>
          <StyledCol span={5}>
            <StyledSpan>我的订单</StyledSpan>
            <StyledSpan>消息中心</StyledSpan>
            <StyledSpan>注册/登录</StyledSpan>
          </StyledCol>
        </StyledRow>
      </div>
    );
  }
}
export default TopNavBar
