import React, {Component} from 'react';

import './header.css'

export default class Header extends Component {

  render() {
    return (
      <div className="header-block">
        <h3 className="header-title">
          <a href="#">
            Game of Thrones DB
          </a>
        </h3>
        <ul className="header-links">
          <li>
            <a href="#">Characters</a>
          </li>
          <li>
            <a href="#">Houses</a>
          </li>
          <li>
            <a href="#">Books</a>
          </li>
        </ul>
      </div>
    );
  }
};

