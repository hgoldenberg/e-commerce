import React from "react";
import { connect } from "react-redux";
import ReviewList from './ReviewList';
import { withRouter} from "react-router"

class ReviewListContainer extends React.Component {

  render() {
    return (
      <ReviewList/>
    );
  }
}

export default withRouter(connect(null, null)(ReviewListContainer));
