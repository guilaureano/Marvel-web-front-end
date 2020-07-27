import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
`;

export const Form = styled.form`
  display: flex;

  input {
    border: 0;
    color: #3a3a3a;
    flex: 1;
    height: 64px;
    padding: 0px 24px;

    &::placeholder {
      color: #ccc
    }
  }

  button {
    background: #e62429;
    border: 0;
    color: #fff;
    font-weight: bold;
    height: 64px;
    width: 200px;

    &:hover {
      background: #8c1211;
      color: #fff;
      transition: background-color .3s;
    }
  }
`;

export const Wrap = styled.div`
  margin-top: 40px;
  min-height: 568px;
`;

export const Pagination = styled.div`
  align-items: center;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;

  button {
    background: #e62429;
    border: 0;
    color: #fff;
    font-weight: bold;
    height: 64px;
    width: 200px;

    &:hover {
      background: #8c1211;
      color: #fff;
      transition: background-color .3s;
    }
  }
`;
