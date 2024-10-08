import styled from "styled-components";

export const Box = styled.div`
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: start;
  margin: 0;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-right: 60px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterItem = styled.span`
  margin-left: 10px;

  @media (max-width: 800px) {
    font-size: 0rem;
  }
`;

export const FooterLink = styled.a`
  color: black;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #0866ff;
    transition: 200ms ease-in;
  }
`;
