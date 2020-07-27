import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 124px;

  figure {
    display: inline-block;
    position: relative;
    margin-top: 220px;

    img {
      width: 978px;
    }

    figcaption {
      position: absolute;
      top: 145px;
      right: 20px;
      font-size: 32px;
      color: #fff;
    }
  }
`;

