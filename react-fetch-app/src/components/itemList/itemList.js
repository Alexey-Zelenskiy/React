import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import './itemList.css'
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";
import propTypes from 'prop-types'

class ItemList extends Component {


  static defaultProps = {
    onItemSelected: () => {
    }
  };
  static propTypes = {
    onItemSelected: propTypes.func
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    })
  }

  renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.renderItem(item);
      return (
        <ListGroupItem key={id} onClick={() => this.props.onItemSelected(id)}>
          {label}
        </ListGroupItem>
      )
    })
  }

  render() {
    const {data} = this.props;
    const items = this.renderItems(data);

    return (
      <ListGroup className="item-list list-group">
        {items}
      </ListGroup>
    );
  }
}

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      error: false,
      id: null,
      loading:true
    };

    componentDidMount() {
      const {getData} = this.props;

      getData()
        .then((data) => {
          this.setState({
            data,
            loading:false
          })
        })
    }

    render() {
      if (this.state.error) {
        return <ErrorMessage/>
      }
      const {data,loading} = this.state;
      if (!data) {
        return <Spinner/>
      }
      return (
        loading?<Spinner/>:<View {...this.props} data={data}/>
      )
    }
  };
};
export default withData(ItemList);