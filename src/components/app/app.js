import React, {Component} from 'react';

import AppHeader from '../app-header/';
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import nextId from "react-id-generator";

import './app.scss'
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px; 
`;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: false, id: 1},
                {label: 'This is so good', important: false, id: 2},
                {label: 'I need a break...', important: false, id: 3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.uniqueId=this.uniqueId.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
                const index = data.findIndex(elem =>
                    elem.id === id
                );
                const before = data.slice(0, index);
                const after = data.slice(index + 1);

                const newArr = [...before, ...after];

                return {
                    data: newArr
                }
            }
        );
    }

    addItem(body) {
        console.log(body);
        const newItem = {
            label: body,
            important: false,
            id: this.uniqueId()
        };
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
    uniqueId() {
        return `f${(~~(Math.random()*1e8)).toString(16)}`
    }
    render() {
        const {data} = this.state;
        {console.log(data)}
        return (
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={data}
                    onDelete={this.deleteItem}
                />
                <PostAddForm onAdd={this.addItem}/>
            </AppBlock>
        )
    }
    ;
}
