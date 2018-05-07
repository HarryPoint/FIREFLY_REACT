import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import PageNavBar from '@cp/PageNavBar';
import ContentBox from './ContentBox';
import Banner from './Banner';
import Content from './Content';
import PageFooter from '@cp/PageFooter';

class Home extends Component {
  render() {
    return (<div>
      <PageNavBar></PageNavBar>
      <ContentBox>
        <Banner></Banner>
        <Content></Content>
      </ContentBox>
      <PageFooter></PageFooter>
    </div>);
  }
}
export default Home;
