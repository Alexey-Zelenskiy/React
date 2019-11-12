import React, {Component} from 'react'
import {ListGroup} from 'reactstrap';
import './post-list.scss';

import PostListItem from '../post-list-item'

export default class PostList extends Component {

  isObject = (val) => {
    return val != null && val.constructor.name === 'Object';
  };

  render() {
    const {posts, onDelete, onToggleUpdate} = this.props;
    const elements = posts.filter(el => {
      return this.isObject(el)
    }).map((item) => {
      return (
        <li key={item.id} className="list-group-item">
          <PostListItem
            {...item}
            onDelete={() => onDelete(item.id)}
            onToggleUpdate={onToggleUpdate}
          />
        </li>
      )
    });
    return (
      <ListGroup className="app-list">
        {elements}
      </ListGroup>
    )
  }
}
