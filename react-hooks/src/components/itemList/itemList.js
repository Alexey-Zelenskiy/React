import React, {useEffect, useState} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import './itemList.css'
import Spinner from "../spinner";

function ItemList({getData, renderItem, onItemSelected}) {

  const [itemList, updateList] = useState([]);

  useEffect(() => {
    getData()
      .then((data) => {
        updateList(data)
      })
  }, []);

  function renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      const label = renderItem(item);
      return (
        <ListGroupItem key={id} onClick={() => onItemSelected(id)}>
          {label}
        </ListGroupItem>
      )
    })
  }

  if (!itemList) {
    return <Spinner/>
  }

  const items = renderItems(itemList);

  return (
    <ListGroup className="item-list list-group">
      {items}
    </ListGroup>
  );
}

export default ItemList;