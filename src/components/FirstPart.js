import React from 'react';
import "../bootstrap.min.css";
import "./Body.scss";
import { IoIosCall } from "react-icons/io";

const FirstPart = () => (
    <div className="container">
        <div className="row intro">
            <div className="col-sm">
                <a href="###" className="sitelogo"> bills.com </a>
            </div>
            <div className="col-sm">
                <p className="alignment"><IoIosCall className="callicon"/> <span className="numbercustom"> (233) 356-2918 </span></p>
            </div>
        </div>
    </div>
)

export default FirstPart