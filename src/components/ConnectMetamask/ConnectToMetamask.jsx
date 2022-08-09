import React from "react";

import Web3 from 'web3';

const ConnectToMetamask = ({ connectToMetamask }) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">
          TFNLab
        </h1>
        <p>Own a piece of digital art that is completely unique and one of a kind.</p>
        <hr className="my-4" />
        <a href="https://opensea.io/collection/microgreens0x" ><img class="img-fluid" src="/images/main.logo.gif" /></a>

        <hr className="my-4" />
        <button
          onClick={connectToMetamask}
          className="btn btn-primary d-flex align-items-center"
          style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
        >
          Connect Wallet
        </button>
      </div>

      <div className="container">
        <hr className="my-4" />
            TFNLab &copy; 2022 All rights reserved.
        <hr className="my-4" />
      </div>
    </div>

  );
};

export default ConnectToMetamask;