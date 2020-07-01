import React from "react";
import { connect } from "react-redux";
import Review from './Review';
import { withRouter} from "react-router"

class ReviewContainer extends React.Component {

  render() {
    return (
      <Review/>
    );
  }
}

export default withRouter(connect(null, null)(ReviewContainer));
