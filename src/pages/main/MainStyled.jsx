import { styled } from "styled-components";
export const MainStyled = styled.section`
  padding-top: 40px;
  padding-right: 24px;
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
