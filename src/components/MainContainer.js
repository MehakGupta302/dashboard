import React from "react";
import "./MainContainer.css";
import Banner from "../image/1.jpg";
import CardMain from "./CardMain";
import Card1 from "../image/card1.jpg";
import Card2 from "../image/card2.jpg";
import Card3 from "../image/card3.jpg";
import Card4 from "../image/card4.jpg";
import Card5 from "../image/card5.jpg";
import Card6 from "../image/card6.jpg";
import MainRightTopCard from "./MainRightTopCard";
import MainRightBottomCard from "./MainRightBottomCard";

function MainContainer() {
  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="textContainer">
            <h1>Round Hall</h1>
            <h2>1.5 ETH</h2>
            <p>Uploaded by Alexander Vernof</p>
            <div className="bid">
              <a href="www" className="button">
                Bid Now
              </a>
              <p>
                Ending In <span>2d:15h:20m</span>
              </p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href="www" className="button2">
                Popular
              </a>
            </div>
            <div className="filter_buttons">
              <a href="www" className="button">
                All
              </a>
              <a href="www" className="button2">
                Illustration
              </a>
              <a href="www" className="button2">
                Art
              </a>
              <a href="ww" className="button2">
                Games
              </a>
            </div>
          </div>

          <main>
            <CardMain imgSrc={Card1} title={"Cubic Thunder"} hearts={"65"} />
            <CardMain imgSrc={Card2} title={"Pokemon Ball"} hearts={"65"} />
            <CardMain imgSrc={Card3} title={"Pyramid God"} hearts={"65"} />
            <CardMain imgSrc={Card4} title={"Stunning Cube"} hearts={"65"} />
            <CardMain imgSrc={Card5} title={"Start Crystal"} hearts={"65"} />
            <CardMain imgSrc={Card6} title={"Crystal Bird"} hearts={"65"} />
          </main>
        </div>
      </div>
      <div className="right">
        <MainRightTopCard />
        <MainRightBottomCard />
      </div>
    </div>
  );
}

export default MainContainer;