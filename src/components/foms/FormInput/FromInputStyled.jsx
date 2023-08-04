import { styled } from "styled-components";

export const StyledInput = styled.div`
  height: ${(props) => (props.field ? "180px" : "100px")};
  & .title {
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: ${({ theme }) => theme.primaryColor};
  }
  & .inputDiv {
    margin-top: 8px;
    position: relative;
  }
  & input,
  & textarea {
    ${({ theme }) => theme.fontCaption};
    line-height: 24px;
    font-size: 16px;
    width: 100%;
    padding: 16px 40px 16px 12px;
    border-radius: 8px;
    border: 1px solid
      ${(props) => (!props.error ? props.theme.divider : props.theme.pink)};
    &:focus {
      outline: 1px solid ${({ theme }) => theme.primaryColor};
    }
  }
  & textarea {
    resize: none;
    height: 124px;
    display: block;
    box-sizing: border-box;
  }

  & .errorMessage {
    margin-top: 4px;
    color: ${({ theme }) => theme.pink};
    padding-right: 19px;
    text-align: right;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
  }
  & .resetButton {
    position: absolute;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    background-color: none;
    top: 16px;
    right: 12px;
    background-color: transparent;
    & svg {
      stroke: ${(props) =>
        !props.error ? props.theme.primaryColor : props.theme.pink};
    }
  }
`;
