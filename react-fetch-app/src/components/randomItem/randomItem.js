import React, {Component} from 'react';

import './randomItem.css'
import gotService from "../../services/gotService";
import Spinner from "../spinner";
import {ListGroup, ListGroupItem} from "reactstrap";
import ErrorMessage from "../errorMessage";
import propTypes from 'prop-types'

export default class RandomItem extends Component {
    gotService = new gotService();
    state = {
        item: {},
        loading: true,
        error: false
    };

    static defaultProps = {
            interval: 15000
    };

    static propTypes ={
      interval:propTypes.number
    };


    componentDidMount() {
        this.updateItem();
        this.timerId = setInterval(this.updateItem, this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    onItemLoaded = (item) => {
        this.setState({
            item,
            loading: false,
            error: false,
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updateItem = () => {
        const id = Math.floor(Math.random() * 140 + 25);
        this.gotService.getCharacters(id)
          .then(this.onItemLoaded)
          .catch(this.onError)
    };


    render() {
        const {item, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View item={item}/> : null;

        return (
          <div className="random-block rounded">
              {errorMessage}
              {spinner}
              {content}
          </div>
        );
    }
}


const View = ({item}) => {
    const {name, gender, born, died, culture} = item;
    return (
      <>
          <h4>Random Character: {name}</h4>
          <ListGroup className="list-group-flush">
              <ListGroupItem className="d-flex justify-content-between">
                  <span className="term">Gender </span>
                  <span>{gender}</span>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                  <span className="term">Born </span>
                  <span>{born}</span>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                  <span className="term">Died </span>
                  <span>{died}</span>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                  <span className="term">Culture </span>
                  <span>{culture}</span>
              </ListGroupItem>
          </ListGroup>
      </>
    )
};