import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import myCss from '@/styleSnippets';

const LoadingBox = styled.div`
  ${myCss.rowCenterCenter}
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;
const PageLoading = () => {
  return (<LoadingBox><Spin></Spin></LoadingBox>)
};

export default PageLoading;
