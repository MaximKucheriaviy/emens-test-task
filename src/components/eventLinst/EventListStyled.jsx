import { styled } from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  width: 272px;
  margin-left: auto;
  margin-right: auto;
  grid-row-gap: 24px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 24px;
    grid-template-columns: 300px 300px;
    grid-gap: 24px;
    width: auto;
    align-items: center;
  }
`;
