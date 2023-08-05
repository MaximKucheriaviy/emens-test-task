import { DataPikerStyled } from "../datepiker/DataPikerStyled";
import { styled } from "styled-components";

export const TimePickerStyled = styled(DataPikerStyled)`
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    width: 308px;
  }
`;

export const TymePickerModal = styled.div`
  z-index: 1000;
  position: absolute;
  top: calc(100% + 8px);
  left: 0px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  background-color: white;
  padding: 20px;
  & div,
  & button {
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & button {
    display: block;
    border: none;
    background-color: transparent;
    padding: 0;
    color: ${({ theme }) => theme.divider};
  }

  & .timeNumber {
    width: 22px;
  }
  & .topLine {
    display: flex;
    padding: 12px 10px;
    gap: 59px;
  }
  & .middleLine {
    margin-top: 8px;
    margin-bottom: 8px;
    display: flex;
    & .currentTime {
      display: flex;
      padding: 12px 10px;
      gap: 24px;
      align-items: center;
      & .points {
        width: 8px;
        text-align: center;
      }
    }
    color: ${({ theme }) => theme.hardGray};
    border-bottom: 1px solid ${({ theme }) => theme.divider};
    border-top: 1px solid ${({ theme }) => theme.divider};
    & .dayButton {
      color: ${({ theme }) => theme.hardGray};
    }
  }
  & .bottomLine {
    display: flex;
    & .timeButtons {
      display: flex;
      padding: 12px 10px;
      gap: 59px;
    }
  }

  & .dayButton {
    padding: 16px 12px;
  }
`;
