import React, {Component} from 'react';

import AppHeader from '../app-header/';
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css'

const App = () => {

    const data = [
        0,
        [],
        undefined,
        false,
        {label: 'Going to learn React', important: true, id: 's'},
        {label: 'This is so good', important: false, id:'d'},
        {label: 'I need a break...', important: false,id:'v'}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
};
export default App;