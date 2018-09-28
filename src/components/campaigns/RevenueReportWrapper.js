import React, {Component} from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
      user : state.user
  };
};
class ConnectedRevenueReportWrapper extends Component {
  render() {
    return ( 
    <div className="col-xs-12">
      <h1>Revenue Report</h1>
    </div>
    )
  }
};

const RevenueReport = connect(mapStateToProps)(ConnectedRevenueReportWrapper);
export default RevenueReport;