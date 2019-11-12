import React, {Component} from 'react';

import AppHeader from '../app-header/';
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.scss'
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px; 
`;

export default class App extends Component {
  state = {
    data: [
      {label: 'Going to learn React', important: false, id: 1},
      {label: 'This is so good', important: false, id: 2},
      {label: 'I need a break...', important: false, id: 3}
    ],
    term: '',
    filter: 'all'
  };

  deleteItem = (id) => {
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
  };

  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: this.uniqueId()
    };
    if (newItem.label.length === 0) {
      return (
        alert('Введите текст')
      )
    } else {
      this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
          data: newArr
        }
      })
    }
  };

  uniqueId = () => {
    return `f${(~~(Math.random() * 1e8)).toString(16)}`
  };

  onToggleUpdate = (id, isImportant = false) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];
      const newItem = isImportant ? {...old, important: !old.important} : {...old, like: !old.like};

      console.log(isImportant);

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr
      }
    })
  };

  searchPost = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1
    });
  };

  filterPost = (items, filter) => {
    if (filter === 'like') {
      return items.filter(item => item.like)
    } else {
      return items;
    }
  };

  onUpdateSearch = (term) => {
    this.setState({term})
  };

  onFilterSelect = (filter) => {
    this.setState({filter})
  };

  render() {
    const {data, term, filter} = this.state;
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
    return (
      <AppBlock>
        <AppHeader
          liked={liked}
          allPosts={allPosts}
        />
        <div className="search-panel d-flex">
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
          />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleUpdate={this.onToggleUpdate}
        />
        <PostAddForm onAdd={this.addItem}/>
      </AppBlock>
    )
  };
}
