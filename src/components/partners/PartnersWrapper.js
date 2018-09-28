import React, {Component} from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
      user : state.user
  };
};
class ConnectedPartnersWrapper extends Component {
  render() {
    return ( 
    <div className="col-xs-12">
      <h1>Partners Overview</h1>
    </div>
    )
  }
};

const PartnersWrapper = connect(mapStateToProps)(ConnectedPartnersWrapper);
export default PartnersWrapper;