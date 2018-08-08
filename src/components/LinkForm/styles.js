import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 20px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  display: block;
  margin-bottom: 10px;
  border: ${props => props.theme.INPUT_INITIAL_BORDER};
  width: 100%;
  max-width: 400px;
  border-left: ${props => props.theme.INPUT_BORDER_LEFT};
  padding: ${props => props.theme.INPUT_PADDING};
  background: ${props => props.theme.POPUP_BACKGROUND};
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  max-width: 400px;
  min-height: 50px;
  border: ${props => props.theme.INPUT_INITIAL_BORDER};
  border-left: ${props => props.theme.INPUT_BORDER_LEFT};
  padding: ${props => props.theme.INPUT_PADDING};
  margin-bottom: 20px;
  background: ${props => props.theme.POPUP_BACKGROUND};
`;

export const Submit = styled.input`
  cursor: pointer;
  border: ${props => props.theme.INPUT_BORDER_LEFT};
  background: ${props => props.theme.POPUP_BACKGROUND};
`;
