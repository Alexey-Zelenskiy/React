import React, {Component} from 'react'
import './editor.scss'

export default class EditorPost extends Component {
  state = {
    text: ''
  };

  render() {
    return (
      <div className="isModal">
        <input
          type="text"
          placeholder="Введите текст"
          className="form-control new-post-label"
          ref={(input) => {
            this.text = input
          }}
        />
        <button type='text' className='btn'><i className="fa fa-pencil-square-o"/></button>
      </div>
    )
  }
}
;