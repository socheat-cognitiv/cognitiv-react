import React, {Component} from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
      user : state.user
  };
};
class ConnectedBeaconReportWrapper extends Component {
  render() {
    return ( 
    <div className="col-xs-12">
      <h1>Beacon Report</h1>
    </div>
    )
  }
};

const BeaconReport = connect(mapStateToProps)(ConnectedBeaconReportWrapper);
export default BeaconReport;