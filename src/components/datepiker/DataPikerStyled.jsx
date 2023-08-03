import { styled } from "styled-components";

export const DataPikerStyled = styled.div`
  position: relative;
  & .title {
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: ${({ theme }) => theme.primaryColor};
  }
  & .mainButton {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ theme }) => theme.fomtCaption};
    line-height: 24px;
    font-size: 16px;
    width: 100%;
    padding: 16px 12px 16px 12px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.divider};
    &:focus {
      outline: 1px solid ${({ theme }) => theme.primaryColor};
    }
    background-color: transparent;
    & .activeChevron,
    & .disabledChevron {
      stroke: ${({ theme }) => theme.primaryColor};
    }
    & .disabledChevron {
      transform: rotateZ(180deg);
    }
  }
`;

export const DataPikerModal = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  background-color: white;
  padding: 20px;
  & .monthSelector {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & p {
      color: ${({ theme }) => theme.hardGray};
    }
    & .year {
      margin-left: 4px;
    }
    & .left {
      transform: rotateZ(90deg);
      stroke: #000;
    }
    & .right {
      transform: rotateZ(-90deg);
      stroke: #000;
    }
  }
`;
