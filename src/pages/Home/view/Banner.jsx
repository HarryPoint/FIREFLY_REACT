import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import BannerAnim, { Element } from 'rc-banner-anim';
import styled from 'styled-components';
import 'rc-banner-anim/assets/index.css';
import {actionHomeGetBanner} from '../actions';
const BgElement = Element.BgElement;

const StyledBannerBox = styled.div`
  height: 473px;
  position: relative;
  overflow: hidden;
  .banner {
    height: 100%;
  }
  .bg {
    height: 100%;
  }
`;

class Banner extends Component {
  componentDidMount () {
    // this.props.getBanner()
  }
  render () {
    if(this.props.banner.length) {
      return (<StyledBannerBox>
        <BannerAnim prefixCls="banner">
          {
            this.props.banner.map((itm, idx) => <Element key={idx}>
              <BgElement key="bg" className="bg" style={{background: `url(${itm}) center/cover no-repeat`}}/>
            </Element>)
          }
        </BannerAnim>
      </StyledBannerBox>)
    } else {
      return <StyledBannerBox/>
    }

  }
}

Banner.propTypes = {
  banner: PropTypes.array,
  getBanner: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => {
  return {
    banner: state.home.banner.data
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getBanner: () => {
      dispatch(actionHomeGetBanner())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
