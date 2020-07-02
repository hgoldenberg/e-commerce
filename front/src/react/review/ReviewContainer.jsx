import React from "react";
import { connect } from "react-redux";
import Review from './Review';
import { fetchProduct } from "../../redux/actions/products";
import { fetchCreateStarts } from "../../redux/actions/puntaje";
import { fetchCreateComentario } from "../../redux/actions/comentarios";
import { withRouter} from "react-router";
class ReviewContainer extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      stars: 0,
      comentario: ""
    }
    
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount() {
    this.props.fetchProduct(this.props.id);
    console.log(this.props.user.id)
  }

  handleChange(event){
    console.log(event)
    switch(event.target.name){
      case 'comentario' :  this.setState({comentario: event.target.value});
    }
    console.log(event)
    if(!event.target.name){
      this.setState({stars: event})
    }
    
    console.log(event)
  };

  handleClick(){
    const { fetchCreateStarts, fetchCreateComentario, product , user , history} = this.props;
    const { stars, comentario } = this.state;
    console.log('product', product.id)
    console.log('user', user.id)
    console.log('starts', stars)
    console.log('comentario', comentario)
    fetchCreateComentario(product.id, user.id, comentario)
    fetchCreateStarts(product.id, user.id, stars)
    history.push('/reviews')
  };

  render() {
    const { product, user } = this.props;
    const { stars, comentario } = this.state;
    return (
      <Review
        user={user}
        product={product}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        stars={stars}
        comentario = {comentario}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.productsReducers.one,
    id: ownProps.match.params.id,
    user: state.logUserReducer.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    fetchCreateStarts: (product, user, stars) => dispatch(fetchCreateStarts(product, user, stars)),
    fetchCreateComentario: (product, user, comentario) => dispatch(fetchCreateComentario(product, user, comentario)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewContainer));
