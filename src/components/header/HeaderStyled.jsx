import { styled } from "styled-components";

export const StyldHeader = styled.header`
  padding: 24px;

  border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
  background: #fefcff;
  & .topLine {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 56px;
  }
  & h1 {
    ${({ theme }) => theme.fontHero}
  }
  & .languageSelector {
    & button:hover {
      color: ${({ theme }) => theme.primaryColor};
    }

    position: relative;

    width: 69px;

    background: #fff;

    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    & .openButton {
      width: 100%;
      height: 100%;
      padding: 12px 4px 12px 12px;

      display: flex;
      align-items: center;
      gap: 4px;

      border: none;
      background-color: inherit;
      border-radius: 8px;
    }
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
      border: none;
      outline: none;
      ${({ theme }) => theme.fontCaption}
      color: ${({ theme }) => theme.primaryColor};

      &::placeholder {
        color: #888;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 100%;
      }
    }
    & button {
      width: 24px;
      height: 24px;
      padding: 0;
      border: none;
      border-radius: 8px;
      background-color: transparent;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0px;
  top: calc(100% + 12px);

  display: ${(props) => (props.visible ? "box" : "none")};
  width: 69px;
  padding: 16px 12px;

  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  & button {
    height: 20px;
    &:last-child {
      margin-top: 8px;
    }

    color: ${({ theme }) => theme.divider};
    border: none;
    background-color: inherit;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.divider};
  }
`;
