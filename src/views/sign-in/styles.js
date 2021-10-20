import Styled from 'styled-components';

export const Layout = Styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundMain};
  color: ${props => props.theme.colorText};
`;

export const Container = Styled.div`
  width: 448px;
  padding: 32px;
  border-radius: 8px;
  background-color: ${props => props.theme.backgroundSecond};
`;