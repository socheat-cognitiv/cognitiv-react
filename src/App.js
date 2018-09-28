import React, {Component} from "react";
import { connect } from "react-redux";
import InternalLayout from './layouts/InternalLayout';
import NoAuthLayout from './layouts/NoAuthLayout';
import PublicLayout from './layouts/PublicLayout';

const mapStateToProps = (state) => {
  return { user : state.user };
};

class ConnectedApp extends Component {
  render() {
    const { private_key, public_key, user_type, expiration_date } = this.props.user;
    const todays_date = Number(new Date());
    if(private_key && public_key && expiration_date >= todays_date){
      switch(user_type) {
        case 39:
        return <InternalLayout />
      default:
        return <NoAuthLayout />
      }
    }else{
      return <PublicLayout/>
    }
  }
};
const App = connect(mapStateToProps)(ConnectedApp);
export default App;
