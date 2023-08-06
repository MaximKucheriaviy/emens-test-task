import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledCard = styled.li`
  height: 480px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  position: relative;
  background-color: #fff;

  & img {
    height: 343px;
  }
  & .descriptionThumb {
    width: 100%;
    background-color: transparent;
    position: absolute;
    left: 0;
    bottom: 0;
    padding-bottom: 16px;
    & .timeLocation {
      display: flex;
      justify-content: space-between;
      padding: 8px 0px;
      ${({ theme }) => theme.fontCaption}
      color: ${({ theme }) => theme.primaryColor};
      background: rgba(255, 255, 255, 0.8);
      line-height: 24px; /* 171.429% */
      padding: 8px 16px;
    }
    & .title {
      ${({ theme }) => theme.fontTitle}
      padding: 0px 16px;
      padding-top: 16px;
      padding-bottom: 8px;
      background-color: #fff;
    }
    & .description {
      padding: 8px 16px;
      height: 72px;
      overflow: hidden;
      background-color: #fff;
    }
  }
  & .topItems {
    position: absolute;
    left: 12px;
    top: 12px;
    display: flex;
    gap: 12px;
    & div {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
      padding: 6px 12px;
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
  & .hiddenBlock {
    display: none;
    text-align: right;
    padding-top: 16px;
    padding-right: 16px;
  }
  &:hover {
    .hiddenBlock {
      display: block;
    }
  }
`;

export const MoreInfo = styled(NavLink)`
  display: inline-block;
  padding: 10px 24px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 8px;
  color: #fff;
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }
`;
