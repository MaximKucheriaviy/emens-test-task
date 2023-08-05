import { styled } from "styled-components";
import { DataPikerStyled } from "../datepiker/DataPikerStyled";

export const StyledCategoryPicker = styled(DataPikerStyled)`
  margin-bottom: ${(props) => props.margin_bottom || "20px"};
  margin-top: 0;
  & .mainButton {
    height: 56px;
  }
  @media screen and (min-width: 1280px) {
    width: 372px;
  }
`;

export const CategoryPickerModal = styled.div`
  z-index: 1000;
  position: absolute;
  top: calc(100% + 8px);
  left: 0px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  background-color: white;
  padding: 0px 16px;

  & .categoryButton {
    display: block;
    padding: 16px 0px;
    width: 100%;
    text-align: left;
    border: none;

    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    background-color: #fff;

    color: ${({ theme }) => theme.hardGray};
    border-bottom: 1px solid ${({ theme }) => theme.divider};
    &:hover {
      color: ${({ theme }) => theme.primaryColor};
    }
  }
`;
