import styled from 'styled-components';
import theme from 'styled-theming';
import PropTypes from 'prop-types';

const color = theme.variants('mode', 'type', {
  primary: { light: '#ffba0a', dark: '#ffba0a' },
  info: { light: '#2d8cf0', dark: '#2d8cf0' },
  success: { light: '#19be6b', dark: '#19be6b' },
  warning: { light: '#ff9900', dark: '#ff9900' },
  error: { light: '#ed3f14', dark: '#ed3f14' },
  base: { light: '#111111', dark: '#111111' },
  light1: { light: '#111111', dark: '#111111' },
  light2: { light: '#111111', dark: '#111111' },
  light3: { light: '#111111', dark: '#111111' },
});
const Txt = styled.span`
  color: ${color};
  font-size: ${props => props.fz}px;
`;

Txt.propTypes = {
  type: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'error', 'base', 'light1', 'light2', 'light3']),
  fz: PropTypes.string,
};

Txt.defaultProps = {
  type: 'base',
  fz: '12'
};

export default Txt;
