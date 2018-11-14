import React from "react";
import "./Page1.css";
import ImageFile from "./image.svg";

const homeBackground=(props)=>{

return(
<div className="container" >



<div className="mobileHomePage">
    <div className="containsTitle">


    <h1><span className="title">Don't miss</span> the Shuttle ever again</h1>

    </div>
    <div className="homePageImg">
        <img src={ImageFile} alt=""/>
    </div>

</div>

</div>
)

};

export default homeBackground;
