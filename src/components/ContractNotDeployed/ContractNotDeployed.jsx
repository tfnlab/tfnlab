import React from "react";

const ContractNotDeployed = () => {
  return (
    <div className="jumbotron">
      <h3>TFNLab Contract Not Deployed To This Network.</h3>
      <hr className="my-4" />
      <p className="lead">
        Please Connect Metamask to Ethereum Network.
      </p>
    </div>
  );
};

export default ContractNotDeployed;
