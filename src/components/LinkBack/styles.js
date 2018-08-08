import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 11px;
  line-height: 12px;
  margin: 0;
  color: ${props => props.theme.LINKBACK_COLOR};
  font-weight: normal;

  > a {
    color: ${props => props.theme.LINKBACK_LINK_COLOR};
    transition: ${props => props.theme.LINKBACK_LINK_TRANS};
    &:hover {
      color: ${props => props.theme.LINKBACK_LINK_HOVER};
    }
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 10px 10px 20px;
  background-color: ${props => props.theme.LINKBACK_BG};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  padding: 3px 10px;
  margin: 0;
  cursor: pointer;

  background-color: ${props => props.theme.POPUP_LINK_COLOR};
  color: ${props => props.theme.LINKBACK_LINK_COLOR};
  border: 1px solid ${props => props.theme.LINKBACK_LINK_COLOR};
  transition: all 3s ease;
  outline: none;
  &:hover {
    color: ${props => props.theme.LINKBACK_LINK_HOVER};
    border: 1px solid ${props => props.theme.LINKBACK_LINK_HOVER};
  }
`;
