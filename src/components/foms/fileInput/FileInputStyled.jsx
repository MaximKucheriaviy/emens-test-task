import { StyledInput } from "../FormInput/FromInputStyled";
import { styled } from "styled-components";

export const StyledFileInput = styled(StyledInput)`
  background-color: white;

  & input {
    display: none;
  }

  & .inputDiv {
    ${({ theme }) => theme.fontCaption};
    line-height: 24px;
    font-size: 16px;
    width: 100%;
    padding: 16px 40px 16px 12px;
    border-radius: 8px;
    border: 1px solid
      ${(props) => (!props.error ? props.theme.divider : props.theme.pink)};
  }
`;
