import React, { useState } from "react";
import { GrInProgress } from "react-icons/gr";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import "../bootstrap.min.css";
import "../General.css";

const MyComponent = () => {
  const [value, setValue] = useState(1000)

  return (
    <RangeSlider
      value={value}
      onChange={changeEvent => setValue(changeEvent.target.value)}
      size='lg'
    />
  )
}

const SecondPart = () => (
  <div>
    <div className="container">
        <GrInProgress />
        <br />
        <br />
        <div className="row">
            <div className="col-sm-1">

            </div>
            <div className="col-sm-10">
                <div className="cardedits card">
                    <div className="card-body">
                    <br />
                        <div className="titleedits">
                            <span className="title"><h2> Choose your debt amount </h2></span>
                            <div className="row">
                              <div className="col-sm-3">

                              </div>
                              <div className="col-sm-6">
                                <span className="trial"> <MyComponent /> </span>
                              </div>
                              <div className="col-sm-3">

                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-1">
            </div>
        </div>
        <br />
    </div>
  </div>
)
export default SecondPart
