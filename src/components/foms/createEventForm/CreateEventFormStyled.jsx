import { styled } from "styled-components";

export const StyledForm = styled.form`
  position: relative;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  padding: 40px 16px 40px 16px;
  @media screen and (min-width: 768px) {
    width: 688px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 24px 40px 24px;
  }
  & .formContainer {
    display: flex;
    flex-direction: column;
    column-gap: 24px;
    flex-wrap: wrap;
    @media screen and (min-width: 768px) {
      height: 480px;
    }
  }
  & .submitButton {
    width: 100%;
    @media screen and (min-width: 768px) {
      width: 192px;
      display: block;
      margin-left: auto;
    }
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
