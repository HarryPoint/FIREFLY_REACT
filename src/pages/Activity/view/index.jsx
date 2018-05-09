import React, { Component } from 'react';
import PageNavBar from '@cp/PageNavBar';
import PageWrapper from '@cp/PageWrapper';
import PageFooter from '@cp/PageFooter';
import Content from './Content';

class Home extends Component {
  render() {
    return (<div>
      <PageNavBar></PageNavBar>
      <PageWrapper>
          <Content></Content>
      </PageWrapper>
      <PageFooter></PageFooter>
    </div>);
  }
}
export default Home;
