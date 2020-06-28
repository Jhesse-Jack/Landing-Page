import React from 'react';
import "../bootstrap.min.css";
import "./Body.scss";
import { IoIosCall } from "react-icons/io";

const FirstPart = () => (
    <div>
        <div className="header row">
            <div className="col-sm-2">

            </div>
            <div className="sitelogo col-sm-5">
                <a href="###" className=""> bills.com </a>
            </div>
            <div className="col-sm">
                <p className="alignment"><IoIosCall className="callicon"/> <span className="numbercustom"> (233) 356-2918 </span></p>
            </div>
        </div>
    </div>
)

export default FirstPart