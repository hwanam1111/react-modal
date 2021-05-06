import styled from 'styled-components';

export const AlertWrapper = styled.div`
  width: 300px;
  padding: 5px 16px 10px;
  border-radius: 4px;
  word-break: break-all;

  &.success {
    color: rgb(183, 223, 185);
    background-color: rgb(7, 17, 7);
  }

  &.info {
    color: rgb(255, 213, 153);
    background-color: rgb(25, 15, 0);
  }

  &.warning {
    color: rgb(255, 213, 153);
    background-color: rgb(25, 15, 0);
  }

  &.error {
    color: rgb(250, 179, 174);
    background-color: rgb(24, 6, 5);
  }
`;

export const AlertTitle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
  }

  & > div > svg {
    margin-right: 8px;
    font-size: 1.4em;
  }

  & > div > h1 {
    font-size: 1em;
  }

  & > button {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    background: unset;
    color: #fff;
    font-size: 1em;
    cursor: pointer;
  }
`;

export const AlertMessage = styled.div`
  margin-top: 10px;
`;
