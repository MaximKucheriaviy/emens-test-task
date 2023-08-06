import { styled } from "styled-components";
import { StyedCretePage } from "../createEvent/createEventPageStyled";

export const EventPageStyled = styled(StyedCretePage)`
  padding-bottom: 263px;
  @media screen and (min-width: 768px) {
    padding-bottom: 263px;
  }

  & h2 {
    margin-top: 24px;
    margin-bottom: 24px;
    @media screen and (min-width: 1280px) {
      width: 628px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  & .eventCard {
    border-radius: 8px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);
    background-color: white;
    @media screen and (min-width: 768px) {
      width: 688px;
      margin-left: auto;
      margin-right: auto;
    }
    @media screen and (min-width: 1280px) {
      width: 628px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  & .imageThumb {
    height: 168px;
    @media screen and (min-width: 768px) {
      height: 272px;
    }
    overflow: hidden;
    border-radius: 8px;
  }
  & .infoThumb {
    padding: 24px 16px 40px 16px;
    & p {
      ${({ theme }) => theme.fontCaption}
      color: #49454F;
    }
    & .additionalInfo {
      margin-top: 24px;
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      & div {
        padding: 6px 12px;
        border-radius: 8px;
        box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);
        ${({ theme }) => theme.fontBody}
        color: ${({ theme }) => theme.primaryColor};
      }
      & .High {
        color: ${({ theme }) => theme.pink};
      }
      & .Medium {
        color: ${({ theme }) => theme.medium};
      }
      & .Low {
        color: ${({ theme }) => theme.low};
      }
    }
    & .buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;

      @media screen and (min-width: 768px) {
        justify-content: flex-end;
        gap: 16px;
      }
      & button {
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.primaryColor};
        padding: 8px 0px;
        width: 108px;
      }
      & .edit {
        background-color: white;
        text-align: center;
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; /* 133.333% */
        color: ${({ theme }) => theme.primaryColor};
      }
      & .delete {
        text-align: center;
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; /* 133.333% */
        background-color: ${({ theme }) => theme.primaryColor};
        color: white;
      }
    }
  }
`;
