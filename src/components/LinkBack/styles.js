import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 11px;
  line-height: 12px;
  margin: 0;
  color: #fff;
  font-weight: normal;

  > a {
    color: rgba(129, 209, 209, 1);
    transition: all 3s ease;
    &:hover {
      color: rgba(234, 222, 200, 1);
    }
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 10px 10px 20px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  padding: 3px 10px;
  margin: 0;
  cursor: pointer;
  background-color: #000;
  color: rgba(129, 209, 209, 1);
  border: 1px solid rgba(129, 209, 209, 1);
  transition: all 3s ease;
  outline: none;

  &:hover {
    color: rgba(234, 222, 200, 1);
    border: 1px solid rgba(234, 222, 200, 1);
  }
`;
