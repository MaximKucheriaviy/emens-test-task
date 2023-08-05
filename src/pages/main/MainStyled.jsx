import { styled } from "styled-components";
export const MainStyled = styled.section`
  padding-top: 40px;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-right: 40px;
    padding-left: 40px;
  }
  & h2 {
    ${({ theme }) => theme.fontH2};
    color: ${({ theme }) => theme.hardGray};
    margin-top: 24px;
  }
  & .buttonsDiv {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
    & button {
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;

      border: none;
      box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
      border-radius: 8px;
    }

    & .active {
      stroke: ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.primaryColor};
    }
  }
  & .randomGenerator {
    margin-top: 40px;
    ${({ theme }) => theme.fontH2}

    & button {
      background-color: ${({ theme }) => theme.primaryColor};
      border: none;
      ${({ theme }) => theme.fontBody}
      padding: 8px 24px;

      border-radius: 8px;
      box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
      color: #fff;
      &:hover {
        background-color: ${({ theme }) => theme.hoverColor};
      }
    }
  }

  & .paginate {
    width: 272px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    padding: 10px;

    display: flex;
    justify-content: center;
    @media screen and (min-width: 768px) {
      gap: 40px;
      width: 688px;
    }

    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    & .p-item,
    & .break,
    & .next,
    & .previous {
      width: 64px;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;

      text-align: center;
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      color: ${({ theme }) => theme.divider};
      & svg {
        &:hover {
          stroke: ${({ theme }) => theme.hoverColor};
        }
      }
      &:hover {
        color: ${({ theme }) => theme.hoverColor};
        stroke: ${({ theme }) => theme.hoverColor};
      }
    }

    & a {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & .nextChevron {
      stroke: ${({ theme }) => theme.divider};
      transform: rotateZ(-90deg);
    }
    & .prevChevron {
      stroke: ${({ theme }) => theme.divider};
      transform: rotateZ(90deg);
    }

    & .activeClass {
      color: ${({ theme }) => theme.primaryColor};
    }
  }
`;

export const FileterButton = styled.button`
  background-color: #fff;
  ${({ theme }) => theme.fontTitle};
  & svg {
    stroke: ${(props) => (!props.active ? "#000" : props.theme.primaryColor)};
  }
  width: 56px;
  @media screen and (min-width: 768px) {
    width: auto;
    padding: 0px 16px;
  }
`;

export const SortButton = styled.button`
  background-color: #fff;
  ${({ theme }) => theme.fontTitle};
  & svg {
    stroke: ${(props) => (!props.active ? "#000" : props.theme.primaryColor)};
  }
  width: 56px;
  @media screen and (min-width: 768px) {
    width: auto;
    padding: 0px 16px;
  }
`;

export const AddButton = styled.button`
  ${({ theme }) => theme.fontTitle};
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }
  width: 56px;
  @media screen and (min-width: 768px) {
    width: auto;
    padding: 0px 12px;
  }
  color: white;
  background-color: ${({ theme }) => theme.primaryColor};
`;
