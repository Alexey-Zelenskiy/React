import React, {useState,useEffect} from 'react';

import './randomItem.css'
import Spinner from "../spinner";
import {ListGroup, ListGroupItem} from "reactstrap";
import ErrorMessage from "../errorMessage";
import propTypes from 'prop-types'
import gotService from "../../services/gotService";

function RandomItem({interval, timerId}) {

    const newGotService = new gotService();

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        updateItem();
        timerId = setInterval(updateItem, interval);
        clearInterval(timerId)
    },[timerId]);


    function updateItem() {
        const id = Math.floor(Math.random() * 140 + 25);
        newGotService.getCharacters(id)
          .then(res => {
              setItem(res);
              setLoading(false);
              setError(false)
          })
          .catch(reason => {
              setError(true);
              setLoading(false)
          })
    }


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

export default RandomItem;

RandomItem.defaultProps = {
    interval: 15000
};

RandomItem.propTypes = {
    interval: propTypes.number
};

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