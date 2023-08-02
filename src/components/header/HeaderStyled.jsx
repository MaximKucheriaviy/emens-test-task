import { styled } from "styled-components";

export const StyldHeader = styled.header`
  border-bottom: 1px solid #7b61ff;
  background: #fefcff;
  & .topLine {
    display: flex;
  }
  & h1 {
    ${({ theme }) => {
      console.log(theme);

      return theme.fontHero;
    }}
  }
  & .languageSelector {
    border: none;
    background-color: white;
  }
  & .searchField {
    width: 272px;
    padding: 12px;
    margin-top: 24px;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    & .icon {
    }
    & input {
      flex-grow: 1;
    }
  }
`;
