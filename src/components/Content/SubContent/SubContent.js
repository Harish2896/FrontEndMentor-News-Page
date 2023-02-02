import { SubContentContainer } from "../../../styles/SubContent.styled";
import retroPcImg from "../../../assets/images/image-retro-pcs.jpg";
import topLaptopImg from "../../../assets/images/image-top-laptops.jpg";
import gamingGrowthImg from "../../../assets/images/image-gaming-growth.jpg";

const SubContent = () => {
  return (
    <SubContentContainer>
      <div className="card-container">
        <div className="card-img-container">
          <img src={retroPcImg} alt="cardImage" className="card-image" />
        </div>
        <div className="card-content-container">
          <h3>01</h3>
          <h6>Reviving Retro PCs</h6>
          <p>What happens when old PCs are given modren upgrades?</p>
        </div>
      </div>
      <div className="card-container">
        <div className="card-img-container">
          <img src={topLaptopImg} alt="cardImage" className="card-image" />
        </div>
        <div className="card-content-container">
          <h3>02</h3>
          <h6>Top 10 Laptops of 2022</h6>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="card-container">
        <div className="card-img-container">
          <img src={gamingGrowthImg} alt="cardImage" className="card-image" />
        </div>
        <div className="card-content-container">
          <h3>03</h3>
          <h6>The Growth of Gaming</h6>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </SubContentContainer>
  );
};

export default SubContent;
