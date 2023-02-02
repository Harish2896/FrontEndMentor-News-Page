import heroImage from "../../../assets/images/image-web-3-desktop.jpg";
import SideContent from "./SideContent/SideContent";
import { MainContentContainer } from "../../../styles/MainContent.styled";

const MainContent = () => {
  return (
    <MainContentContainer>
      <article className="main-hero-image">
        <img src={heroImage} alt="" />
      </article>
      <article className="main-heading">
        <h1 id="mainHeading">The Bright Future of Web 3.0?</h1>
      </article>
      <article className="main-content">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>READ MORE</button>
      </article>
      <article className="side-container">
        <SideContent />
      </article>
    </MainContentContainer>
  );
};

export default MainContent;
