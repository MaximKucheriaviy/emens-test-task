import { styled } from "styled-components";
export const MainStyled = styled.section`
  padding-top: 40px;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 40px;
  & .buttonsDiv {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
    & button {
      width: 56px;
      height: 56px;
      border: none;
      box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
      border-radius: 8px;
    }

    & .active {
      stroke: ${({ theme }) => theme.primaryColor};
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

    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    & .p-item,
    & .break,
    & .next,
    & .previous {
      width: 40px;
      height: 40px;
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
  & svg {
    stroke: ${(props) => (!props.active ? "#000" : props.theme.primaryColor)};
  }
`;

export const SortButton = styled.button`
  background-color: #fff;
  & svg {
    stroke: ${(props) => (!props.active ? "#000" : props.theme.primaryColor)};
  }
`;

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
`;
