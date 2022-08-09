import React from "react";

const AccountDetails = ({ accountAddress, accountBalance }) => {
  return (
    <div>
      <div className="jumbotron">
        <div class="card col-md-12" >
          <div class="card-body">
            <h4>We make art NFT collectables</h4>
            <img src="images/parts/body/0.png" style={{ height: '100%', width: '100%'}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
