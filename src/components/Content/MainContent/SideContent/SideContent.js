import { SideContentContainer } from "../../../../styles/SideContent.styled";

const SideContent = () => {
  return (
    <SideContentContainer>
      <h2>New</h2>
      <div className="side-content">
        <h5>Hydrogen VS Electric Cars</h5>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div className="side-content">
        <h5>The Downsides of AI Artistry</h5>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div className="side-content">
        <h5>Is VC Funding Drying Up? </h5>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </SideContentContainer>
  );
};

export default SideContent;
