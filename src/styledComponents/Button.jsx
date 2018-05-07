import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';

const backgroundColor = theme.variants('mode', 'type', {
  primary: { light: '#ffba0a', dark: '#ffba0a' },
  info: { light: '#2d8cf0', dark: '#2d8cf0' },
  success: { light: '#19be6b', dark: '#19be6b' },
  warning: { light: '#ff9900', dark: '#ff9900' },
  error: { light: '#ed3f14', dark: '#ed3f14' },
});
const Button = styled.button`
  background-color: ${backgroundColor};
  &:hover {
    opacity: .5;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'error'])
};

Button.defaultProps = {
  type: 'primary',
};
export default Button;
