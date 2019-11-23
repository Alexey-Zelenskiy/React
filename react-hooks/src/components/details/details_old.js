import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import gotService from "../../services/gotService";
import './details.css'
import ErrorMessage from "../errorMessage";
import Spinner from "../spinner";

const Field = ({item, field, label}) => {
  return (
    <ListGroupItem className=" d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </ListGroupItem>
  )
};

export {Field};
export default class Details extends Component {
  gotService = new gotService();

  state = {
    item: null,
    loading: false,
    error: false
  };


  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem()
    }

  }

  componentDidCatch() {
    this.setState({
      error: true,
      loading: false
    })
  }

  onItemLoaded = (item) => {
    this.setState({
      item,
      loading: false,
      error: false
    });
  };

  updateItem() {
    const {itemId, getData} = this.props;
    if (!itemId) {
      return;
    }
    this.setState({
      loading: true
    });
    getData(itemId)
      .then(this.onItemLoaded)
  }

  render() {
    const {item, loading} = this.state;
    if (!item) {
      return (
        <>
          <span className="select-error d-block">{this.props.title}</span>
          <div className="char-details rounded">
            <Spinner/>
          </div>
        </>
      )
    }
    if (this.state.error) {
      return <ErrorMessage/>
    }
    const {name} = item;
    return (
      <div className="char-details rounded">
        {loading ? <Spinner/> :
          <>
            <h4>{name}</h4>
            <ListGroup>
              {React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item})
              })
              }
            </ListGroup>
          </>
        }
      </div>
    );
  }
}
