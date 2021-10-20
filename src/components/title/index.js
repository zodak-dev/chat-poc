import Styled from 'styled-components';

const Title = Styled.h1`
  margin: 0;
  font-size: 24px;
  color: ${props => props.theme.colorTitle};
`;

export default Title;