import React from "react";

var QRCode = require("qrcode.react");
let currentDate = new Date().getFullYear();
const ThirdPart = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm">
        <QRCode value="https://debt.bills.com/ct#step/estimated_debt" />
      </div>
      <div className="col-sm"></div>
      <div className="col-sm"></div>
    </div>
    <br />
    <div className="row">
      <p>
        {" "}
        ** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
        aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
        qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
        illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et
        accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias
        excepturi sint occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum
        fuga.
      </p>
        <span className="footersectionone"> &copy; {currentDate} Bills.com.All Rights Reserved. </span>
        <div className="row">
            <span>
                <br />
                <a href="##"> Privacy Policy. |</a>
                <a href="##"> Terms of Use |</a>
                <a href="##"> Contact Us </a>
            </span>
        </div>
    </div>
  </div>
)
export default ThirdPart
