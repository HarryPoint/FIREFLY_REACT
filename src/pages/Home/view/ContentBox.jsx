import styled from 'styled-components';
import bannerBg from '@/assets/banner_bg.png';

const ContentBox = styled.div`
  background: ${props => props.theme.c_default} url(${bannerBg}) no-repeat;
  padding-top: 67px;
  padding-bottom: 40px;
`;

export default ContentBox;
