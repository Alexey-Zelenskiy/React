import React, {Component} from 'react'
import './post-list-item.scss';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'

export default class PostListItem extends Component {

    state = {
        modal: false,
        deleted: false,
        value: ''
    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    handleSubmit = (event) => {
        // console.log('Value', this.state.value);
        event.preventDefault();
        this.setState({
              open: false
          }
        );
    };


    onOpenModal = () => {
        this.setState(({open}) => ({
              open: !open
          })
        )
    };

    ofDeleted = () => {
        this.setState(({deleted}) => ({
            deleted: !deleted
        }))
    };

    render() {
        const {label, onDelete, onToggleUpdate, important, like,id} = this.props;
        const {open, deleted} = this.state;
        const {value} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';
        let classNames_ = 'd-flex justify-content-center align-items-center';
        if (important) {
            classNames += ' important'
        }
        if (like) {
            classNames += ' like'
        }
        const modal = () => {
            return (
              <form onSubmit={this.handleSubmit} className="isModal d-flex">
                  <input
                    type="text"
                    placeholder="Введите текст"
                    className="form-control new-post-label"
                    value={this.state.value} onChange={this.handleChange}
                  />
                  <button type='text' className='btn'><i
                    className="fa fa-pencil-square-o"/></button>
              </form>
            )
        };
        const formDeleted = () => {
            return (
              <Modal isOpen={this.ofDeleted} toggle={this.ofDeleted}>
                  <ModalHeader>Удаление записи</ModalHeader>
                  <ModalBody>
                      Вы точно собираетесь удалить запись?
                  </ModalBody>
                  <ModalFooter>
                      <Button color="primary" onClick={onDelete}>Да, точно</Button>{' '}
                      <Button color="secondary" onClick={this.ofDeleted}>Нет</Button>
                  </ModalFooter>
              </Modal>
            )

        };
        return (
          <div className={classNames}>
              <div>
                    <span className="app-list-item-label" onClick={()=>{onToggleUpdate(id)}}>
                        {value ? value : label}
                    </span>
              </div>
              {open && modal()}
              <div className={classNames_}>
                  <button type='button' className='btn btn-pen' onClick={this.onOpenModal}>
                      <i className="fa fa-pencil"/>
                  </button>
                  <button type="button" className="btn-star btn-sm" onClick={()=>{onToggleUpdate(id,true)}}>
                      <i className="fa fa-star"/>
                  </button>
                  <button type="button" className="btn-trash btn-sm" onClick={this.ofDeleted}>
                      <i className="fa fa-trash-o"/>
                  </button>
                  {deleted && formDeleted()}
                  <i className="fa fa-heart"/>
              </div>
          </div>
        )
    }
}
