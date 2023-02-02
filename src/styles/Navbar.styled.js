import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  .logo {
    margin-top: 5px;
  }

  .nav-links {
    min-width: 50%;
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .link:hover {
      color: ${({ theme }) => theme.softRed};
    }
  }

  .menu-icon {
    width: 40px;
    height: 20px;
    margin: auto 5px auto 0;
  }

  .nav-links-mobile {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    min-width: 70%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.offWhite};

    .link {
      margin: 10px 0 10px 30px;
      font-size: 32px;
      color: black;
      &:hover {
        color: ${({ theme }) => theme.softRed};
      }
    }

    .close-menu-icon {
      width: 32px;
      margin-left: auto;
      margin-bottom: 40px;
      padding-top: 10px;
      padding-right: 10px;
    }
  }

  @media (min-width: 768px) {
    .menu-icon {
      display: none;
    }
    .close-menu-icon {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  }
`;
