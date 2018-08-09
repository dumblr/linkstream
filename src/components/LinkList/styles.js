import styled from 'styled-components';

export const ListWrapper = styled.div`
  padding: 20px;
`;

export const EachListItem = styled.div`
  padding-left: 10px;
  border-left: ${props => props.theme.INPUT_BORDER_LEFT};
  margin-bottom: 20px;
`;

export const LinkTitle = styled.h1`
  font-size: 22px;
  line-height: 26px;
  margin: 0 0 17px;
`;

export const LinkTag = styled.a`
  text-decoration: ${props => props.theme.TEXT_DECORATION};
  border-bottom: ${props => props.theme.LINK_BORDER_STYLE};
  transition: ${props => props.theme.LINKBACK_LINK_TRANS};
  color: ${props => props.theme.LINK_COLOR};
  &:hover {
    border-bottom: ${props => props.theme.LINK_BORDER_HOVER};
  }
`;

export const LinkDescription = styled.p`
  font-size: 13px;
  line-height: 15px;
  margin: 0 0 10px;
  max-width: 640px;
`;

export const LinkTime = styled.small`
  font-size: 10px;
  line-height: 12px;
`;

export const LinkDelete = styled.button`
  display: block;
  cursor: pointer;
  border: ${props => props.theme.INPUT_BORDER_LEFT};
  background: ${props => props.theme.POPUP_BACKGROUND};
`;
