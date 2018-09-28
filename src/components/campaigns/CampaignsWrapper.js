import React, {Component} from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
      user : state.user
  };
};
class ConnectedCampaignsWrapper extends Component {
  render() {
    return ( 
    <div className="col-xs-12">
      <h1>Campaigns Overview</h1>
    </div>
    )
  }
};

const CampaignsWrapper = connect(mapStateToProps)(ConnectedCampaignsWrapper);
export default CampaignsWrapper;