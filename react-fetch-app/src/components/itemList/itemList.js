import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import './itemList.css'
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

export default class ItemList extends Component {


  state = {
    itemList: null,
    error: false,
    id: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    })
  }

  componentDidMount() {

    const {getData} = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList
        })
      })
  }


  renderItems(arr) {
    return arr.map((item) => {
      return (
        <ListGroupItem key={item.id} onClick={() => this.props.onCharSelected(item.id)}>
          {item.name}
        </ListGroupItem>
      )
    })
  }

  render() {

    if (this.state.error) {
      return <ErrorMessage/>
    }

    const {itemList} = this.state;

    if (!itemList) {
      return <Spinner/>
    }

    const items = this.renderItems(itemList);

    return (
      <ListGroup className="item-list list-group">
        {items}
      </ListGroup>
    );
  }
}