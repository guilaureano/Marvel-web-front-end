import styled from 'styled-components';

export const CharacterInfo = styled.section`
  margin-top: 40px;

  header {
    align-items: center;
    border-block-end: 3px solid #e62429;
    display: flex;

    img {
      height: 260px;
      margin-right: 80px;
      width: 226px;
    }

    strong {
      font: 48px Roboto, sans-serif;
      font-weight: bold;
      color: #fff;
      line-height: 56px;
    }
  }
`;

export const Form = styled.form`
  div {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    padding: 16px 0px;

    h6 {
      margin-bottom: 8px;
    }

    input {
      border: 0;
      color: #3a3a3a;
      width: 100%;
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
  }
  #divBtn {
    align-items: center;
  }
`;

export const Voltar  = styled.div`
  a {
    align-items: center;
    background: #e62429;
    border-radius: 5px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 16px 24px;
    text-decoration: none;
    width: 120px;

    &:hover {
      background: #8c1211;
      color: #fff;
    }
  }
`;

export const Wrap = styled.div`
  margin-top: 40px;
  min-height: 568px;
`;
