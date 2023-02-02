import styled from "styled-components";

export const SubContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0 10px;
    .card-container {
    }
  }
  .card-container {
    flex: 4;
    margin: 25px 0 10px;
    display: flex;
    flex-direction: row;

    .card-img-container {
      flex: 3;

      img {
        max-width: 100%;
        min-height: 100%;
        cursor: pointer;
      }
    }

    .card-content-container {
      flex: 7;
      padding: 0 10px;
      h3 {
        margin-top: 0;
        color: ${({ theme }) => theme.grayishBlue};
        font-weight: 600;
      }
      h6 {
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.softRed};
        }
      }
    }
  }
`;
