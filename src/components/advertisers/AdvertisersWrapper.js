import React, {Component} from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
      user : state.user
  };
};
class ConnectedAdvertisersWrapper extends Component {
  render() {
    return ( 
    <div className="col-xs-12">
      <h1>Advertisers Overview</h1>
    </div>
    )
  }
};

const AdvertisersWrapper = connect(mapStateToProps)(ConnectedAdvertisersWrapper);
export default AdvertisersWrapper;