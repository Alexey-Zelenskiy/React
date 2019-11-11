import React, {Component} from 'react'
import {Button} from 'reactstrap';
import './post-add-form.scss';

import styled from "styled-components";

const PostAddBlock = styled.form`
  display: flex;
  margin-top: 20px;
  .new-post-label{
  width: auto;
  flex-grow: 1;
  margin-right: 3px;
  }
`;

export default class PostAddForm extends Component {

    state = {
        text: ''
    };

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    };

    render() {
        return (
          <form
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}
          >
              <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"
                onChange={this.onValueChange}
                value={this.state.text}
              />
              <Button type="submit" outline color="secondary">
                  Добавить
              </Button>
          </form>
        )
    }
};