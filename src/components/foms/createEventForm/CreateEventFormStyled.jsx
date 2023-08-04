import { styled } from "styled-components";

export const StyledForm = styled.form`
  position: relative;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  padding: 40px 16px 40px 16px;

  & .submitButton {
    width: 100%;
    margin-top: 40px;
    padding: 16px;
    border-radius: 8px;
    border: none;
    ${({ theme }) => theme.fontBody};
    color: #fff;
  }

  & .enable {
    background-color: ${({ theme }) => theme.primaryColor};
    &:hover {
      background-color: ${({ theme }) => theme.hoverColor};
    }
  }

  & .disable {
    background-color: ${({ theme }) => theme.divider};
  }
`;
