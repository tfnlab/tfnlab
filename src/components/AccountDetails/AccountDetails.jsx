import React from "react";

const AccountDetails = ({ accountAddress, accountBalance }) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">Welcome</h1>
        <div class="card col-md-12" >
          <div class="card-body">
            <h4>We make art NFT collectables</h4>
            <img src="images/parts/body/0.png" style="position: absolute; top: 0;left: 0;"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
