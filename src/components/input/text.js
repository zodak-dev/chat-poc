import Styled from 'styled-components';

const InputText = Styled.input`
  width: 100%;
  padding: 16px 12px;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.theme.backgroundInput};
  color: ${props => props.theme.colorText};
  font-weight: 500;

  :active, :focus {
    outline: 1px solid ${props => props.theme.colorPlaceholder}80;
  }

  ::placeholder {
    color: ${props => props.theme.colorPlaceholder};
  }
`;

export default InputText;