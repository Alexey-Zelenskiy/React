import React from 'react'
import {Button} from 'reactstrap';
import './post-add-form.scss';

import styled from "styled-components";

const PostAddBlock = styled.div`
  display: flex;
  margin-top: 20px;
  .new-post-label{
  width: auto;
  flex-grow: 1;
  margin-right: 3px;
  }
`;

const PostAddForm = ({onAdd}) => {
    return (
        <PostAddBlock>
            <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <Button type="submit" outline color="secondary" onClick={() => onAdd('Hello')}>
                Добавить
            </Button>
        </PostAddBlock>
    )
};
export default PostAddForm;