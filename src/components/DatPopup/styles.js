import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #000;
  padding: 20px;
  margin: 20px;
  position: absolute;
  top: 35px;
  right: 0;
  max-width: 300px;
  background: ${props => props.theme.POPUP_BACKGROUND};
`;

export const Title = styled.h3`
  font-size: 14px;
  line-height: 17px;
  margin: 0 0 15px;

  > a {
    color: ${props => props.theme.POPUP_LINK_COLOR};
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0 20px;
`;

export const ListItem = styled.li`
  font-size: 12px;
  line-height: 15px;

  > a {
    color: ${props => props.theme.POPUP_LINK_COLOR};
  }
`;
