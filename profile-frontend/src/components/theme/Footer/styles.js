import styled from 'styled-components';

export const Wrapper = styled.div`
  .footer-dark {
    width: 100%;
    padding: 4rem 0rem 2rem 0rem;
    background: #66bd88;
    color: #000;
  }
  .footer-light {
    width: 100%;
    padding: 4rem 0rem 2rem 0rem;
    background: #e3e1d5;
    color: #000;
  }
  .powered {
    margin-top: 30px;
  }
  .powered p {
    margin-bottom: 8px;
  }

  @media (min-width: 680px) {
    .root-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  a img {
    margin-right: 15px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const Details = styled.div`
  h2,
  a,
  span {
    color: #212121;
    margin-bottom: 10px;
  }
`;
