import React from "react";

const AccountDetails = ({ accountAddress, accountBalance }) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">Welcome to TFNLab</h1>
        <div class="card col-md-12" >
          <div class="card-body">
            <h4>Non-Fungilbe Token Lab</h4>
            <p className="lead">TFNLab creates art products, services and experiences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
