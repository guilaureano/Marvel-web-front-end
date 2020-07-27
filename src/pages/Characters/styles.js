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

export const Series = styled.section`
  ul {
    list-style: none;
    padding: 16px 0px;

    li {
      padding: 24px;
      background: #fff;
      min-height: 48px;

      & + li {
        padding-top: 0px;
      }

      strong {
        font-size: 18px;
      }
    }
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
    margin-bottom: 16px;
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
