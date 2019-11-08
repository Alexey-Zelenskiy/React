import React, {Component} from 'react'

import EditorPost from "../editor-post/editor-post";
import './post-list-item.scss';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false,
            modal: false,
            value: ''
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
        this.onOpenModal = this.onOpenModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // console.log('Value', this.state.value);
        event.preventDefault();
        this.setState({
                open: false
            }
        );
    }

    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    onOpenModal() {
        this.setState(({open}) => ({
                open: !open
            })
        )
    }

    render() {
        const {label,onDelete} = this.props;
        const {important, like} = this.state;
        const {open} = this.state;
        const {value} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important'
        }
        if (like) {
            classNames += ' like'
        }
        const modal = () => {
            return (
                <form onSubmit={this.handleSubmit} className="isModal">
                    <input
                        type="text"
                        placeholder="Введите текст"
                        className="form-control new-post-label"
                        value={this.state.value} onChange={this.handleChange}
                    />
                    <button type='text' className='btn' onClick={this.onChangeText}><i
                        className="fa fa-pencil-square-o"/></button>
                </form>
            )
        };
        return (
            <div className={classNames}>
                <div>
                    <span className="app-list-item-label" onClick={this.onLike}>
                        {value ? value : label}
                    </span>
                    {/*<div className="post-list-item d-flex">{new Date().toLocaleTimeString()}</div>*/}
                </div>
                {open && modal()}

                <div className="d-flex justify-content-center align-items-center">
                    <button type='button' className='btn btn-pen' onClick={this.onOpenModal}>
                        <i className="fa fa-pencil"/>
                    </button>
                    <button type="button" className="btn-star btn-sm" onClick={this.onImportant}>
                        <i className="fa fa-star"/>
                    </button>
                    <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fa fa-trash-o"/>
                    </button>
                    <i className="fa fa-heart"/>
                </div>
            </div>
        )
    }
}
