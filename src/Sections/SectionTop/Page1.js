import React, { Component } from "react";
import "./Page1.css";
import ImageFile from "../../assets/ic_cellphone.png";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import GooglePlayDownload from "../../assets/google-play-badge.png";
import AppStore from "../../assets/AppStore.png";

class Page1 extends Component {
  render() {
    return (
      <ScrollableAnchor id={"home-scroll"}>
        <div className="Page1-section">
          <div className="containsTitle">
            <div className="title-text">
              <h1>
                <span className="title">Don't miss</span> the Shuttle ever again
              </h1>
            </div>
            <div className="download-buttons">
              <div className="download-button__playstore">
                <img src={GooglePlayDownload} alt="" />
              </div>
              <div className="download-button__appstore">
                <img src={AppStore} alt="" />
              </div>
            </div>
          </div>
          <div className="homePageImg">
            <img src={ImageFile} alt="" />
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Page1;
