import styled from "styled-components";

export const SideContentContainer = styled.div`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.veryDarkBlue};
  color: hsl(36, 100%, 99%);
  padding: 15px 15px;
  font-family: "Inter", sans-serif;

  h2 {
    color: ${({ theme }) => theme.softOrange};
    font-size: 32px;
    margin: 0;
    cursor: pointer;
  }

  .side-content {
    border-bottom: 1px solid hsl(36, 100%, 99%);
    padding: 20px 0;

    h5 {
      margin: 10px 0;
      color: ${({ theme }) => theme.offWhite};
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.softOrange};
      }
    }

    p {
      margin-bottom: 10px;
      line-height: 1.9;
    }

    &:nth-child(4) {
      border-bottom: none;
    }
  }
`;
