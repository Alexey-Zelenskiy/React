import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import './itemList.css'
import gotService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

export default class ItemList extends Component {

  gotService = new gotService();

  state = {
    charList: null,
    error: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    })
  }


  componentDidMount() {
    this.gotService.getAllCharacters()
      .then((charList) => {
        this.setState({
          charList
        })
      })
  }

  uniqueId = () => {
    return `f${(~~(Math.random() * 1e8)).toString(16)}`
  };

  renderItems(arr) {
    const id = this.uniqueId();
    return arr.map((item, i) => {
      return (
        <ListGroupItem key={id} onClick={() => this.props.onCharSelected(41 + i)}>
          {item.name}
        </ListGroupItem>
      )
    })
  }

  render() {

    const {charList} = this.state;

    if (!charList) {
      return <Spinner/>
    }

    if (this.state.error) {
      return <ErrorMessage/>
    }

    const items = this.renderItems(charList);

    return (
      <ListGroup className="item-list list-group">
        {items}
      </ListGroup>
    );
  }
}