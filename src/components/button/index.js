import Styled from 'styled-components';

const Button = Styled.button`
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.theme.backgroundButton};
  font-weight: 500;
`;

export default Button;