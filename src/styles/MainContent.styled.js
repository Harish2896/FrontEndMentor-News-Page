import styled from "styled-components";

export const MainContentContainer = styled.div`
  margin: 0 5px;
  @media (min-width: 768px) {
    display: grid;
    gap: 1.3rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 0.4fr;
  }

  .main-hero-image {
    grid-column: span 2;
    img {
      min-height: 100%;
      object-fit: cover;
    }
  }
  .side-container {
    grid-column-start: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    height: auto;
  }
  .main-heading {
    h1 {
      font-size: 50px;
      font-weight: 700;
    }
  }
  .main-content {
    p {
      margin-bottom: 30px;
    }
    button {
      border: none;
      color: ${({ theme }) => theme.offWhite};
      background-color: ${({ theme }) => theme.softRed};
      font-size: 10px;
      letter-spacing: 3px;
      font-weight: 700;
      padding: 12px 35px;
      margin-bottom: 20px;
      &:hover {
        background-color: black;
      }
    }
  }
`;
