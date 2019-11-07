import React, {Component} from 'react'

import './post-list.css';

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
        const {posts} = this.props;
        const elements = posts.filter(el => {
            return this.isObject(el)
        }).map((item) => {
            const {id, ...itemProps} = item;
            return (
                <li key={id} className="list-group-item">
                    <PostListItem {...itemProps}/>
                </li>
            )
        });
        return (
            <ul className="app-list list-group">
                {elements}
            </ul>
        )
    }
}
