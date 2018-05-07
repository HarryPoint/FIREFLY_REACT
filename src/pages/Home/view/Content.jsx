import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import myCss from '@/styleSnippets';
import PropTypes from 'prop-types';
import {actionHomeGetRecommend} from '../actions';

const StyledContentBox = styled.div`
  ${myCss.wrapper}
`;

const StyledRecommendItm = styled(Link)`
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: white;
  line-height: 1;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    box-shadow: 0px 2px 10px 1px rgba(0,0,0,.2);
  }
`;

const StyledRecommendList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

const StyledRecommendListPanel = styled.div`
  padding: 30px;
  width: 870px;
  box-sizing: border-box;
  background: #fff;
  h1 {
    color: ${props => props.theme.fc_default};
    font-size: ${props => props.theme.fz_xl};
    margin-bottom: 30px;
  }
`;


class Content extends Component {
  componentDidMount () {
    this.props.getRecommend()
  }
  render () {
    let arr = []
    for (let i = 0; i < 6; i++) {
      arr.push(<StyledRecommendItm key={i} to="/userCenter">
        <figure>
          <section>
            <mark>王者荣耀</mark>
            <span>女</span>
          </section>
          <figcaption>
            <div>
              <span>九湖</span>
              <mark></mark>
            </div>
            <div>
              <span>接单223次</span>
              <mark><strong>50Y</strong>/小时</mark>
            </div>
          </figcaption>
        </figure>
      </StyledRecommendItm>)
    }
    return (<StyledContentBox>
      <StyledRecommendListPanel>
        <h1>推荐陪玩</h1>
        <StyledRecommendList>
          {arr}
        </StyledRecommendList>
      </StyledRecommendListPanel>
    </StyledContentBox>)
  }
}

Content.propTypes = {
  recommend: PropTypes.array,
  getRecommend: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => {
  return {
    recommend: state.home.recommend.data
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getRecommend: () => {
      dispatch(actionHomeGetRecommend())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
