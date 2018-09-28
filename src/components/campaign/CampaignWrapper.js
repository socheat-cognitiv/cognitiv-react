import React, {Component} from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
      user : state.user
  };
};
class ConnectedCampaignWrapper extends Component {
  render() {
    return ( 
    <div className="col-xs-12">
      <h1>Campaign Overview</h1>
    </div>
    )
  }
};

const CampaignWrapper = connect(mapStateToProps)(ConnectedCampaignWrapper);
export default CampaignWrapper;