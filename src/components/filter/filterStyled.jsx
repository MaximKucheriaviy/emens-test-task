import { styled } from "styled-components";

export const StyledFilter = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: transparent;

  & .selector {
    position: absolute;
    top: ${({ repoition }) => repoition.top + window.scrollY}px;
    left: ${({ repoition }) => repoition.left}px;
    background-color: white;
    ${({ theme }) => theme.fontTitle}
    color: ${({ theme }) => theme.primaryColor};
    width: ${({ width }) => width}px;

    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    border-radius: 8px;

    & button {
      &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.divider};
      }
    }
    & .mainButton {
      padding: 16px 16px;
      ${({ theme }) => theme.fontTitle}
      border: none;
      width: 100%;
      text-align: left;
      height: 100%;
      background-color: transparent;
      color: ${({ theme }) => theme.primaryColor};
      display: flex;
      justify-content: space-between;
      & svg {
        stroke: ${({ theme }) => theme.primaryColor};
      }
      border-bottom: 1px solid ${({ theme }) => theme.divider};
    }

    & .selectorButton {
      display: block;
      margin-top: 4px;
      border: none;
      background-color: transparent;
      padding: 8px 24px;
      text-align: left;

      display: flex;
      justify-content: space-between;
      width: 100%;
      ${({ theme }) => theme.fontCaption};
      color: ${({ theme }) => theme.divider};
      &:hover {
        color: ${({ theme }) => theme.hoverColor};
        & .arrowUp,
        & .arrowDown {
          stroke: ${({ theme }) => theme.hoverColor};
        }
      }

      & .arrowDown {
        transform: rotateZ(180deg);
      }
      & .arrowUp,
      & .arrowDown {
        stroke: ${({ theme }) => theme.divider};
      }
    }
  }
`;
