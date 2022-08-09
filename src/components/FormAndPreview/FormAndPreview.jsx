import React, { Component } from "react";
import { HashRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

import db  from "../../database";

class FormAndPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mintcount: 0,
    };
  }



componentDidMount = async () => {
    window.scrollTo(0, 0);
    console.log(this.props);
};

callClaimPunkFromApp = (e) => {
    let mintCount = document.getElementById('mintcount').value;
    e.preventDefault();
      this.props.claimPunk(
        mintCount
      );
};



  render() {
    return (
      <div>

        <div class="container">
        <div class="card col-md-12 text-center" >
                    <div class="card-body">
                    Click Mint and Accept on Metamask

                    </div>
        </div>
        </div>

        <form onSubmit={this.callClaimPunkFromApp} className="pt-4 mt-1">
          <div className="row">
          <div className="col-md-12">
            FREE MINT, Limit to 10 per wallet
            <div>
              <input
                required
                value="10"
                type="number"
                name="mintcount"
                id="mintcount"
                className="form-control"
                placeholder="Mint Count"
              />
            </div>

              <hr className="my-2" />
            <div>
              <button
                id="mintBtn22"
                style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
                type="submit"
                className="btn mt-4 btn-block btn-outline-primary"
              >
                Public Mint
              </button>
              </div>
            </div>
          </div>
        </form>

          <hr className="my-4" />
              TFNLab &copy; 2022. All rights reserved.
          <hr className="my-4" />
      </div>
    );
  }
}

export default FormAndPreview;
