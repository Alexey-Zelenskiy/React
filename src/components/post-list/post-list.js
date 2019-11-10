import React, {Component} from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import './post-list.scss';

import PostListItem from '../post-list-item'

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.isObject = this.isObject.bind(this);
    }

    isObject(val) {
        return val != null && val.constructor.name === 'Object';
    }

    render() {
        const {posts,onDelete,onToggleImportant,onToggleLiked} = this.props;
        const elements = posts.filter(el => {
            return this.isObject(el)
        }).map((item) => {
            const {id, ...itemProps} = item;
            return (
                <li key={id} className="list-group-item">
                    <PostListItem
                        {...itemProps}
                        onDelete={()=> onDelete(id)}
                        onToggleImportant={()=>onToggleImportant(id)}
                        onToggleLiked={()=>onToggleLiked(id)}
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
