import React, {Component} from 'react'
import {ListGroup, ListGroupItem, Media} from 'reactstrap';

import './app.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bestsellers: [],
            coffee:[]
        }

    }

    componentDidMount() {
        this.gerResource();
        this.gerCoffe();
    }

    gerResource() {
        fetch('./db.json')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({
                    bestsellers: res.bestsellers
                })
            })
    }

    gerCoffe() {
        fetch('./db.json')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({
                    coffee: res.coffee
                })
            })
    }

    render() {
        const imgStyle = {
            'width': '10%',
            'height': '10%'
        };
        return (
            <div className='app'>
            <ListGroup className="random-block">
                {this.state.bestsellers.map((el) => {
                    return (
                        <ListGroupItem>
                            <div className="app-list-item d-flex justify-content-between">
                                <h1 className="d-flex">Name: {el.name}</h1>
                                <img style={imgStyle} src={el.url} alt=""/>
                                <h1 className="d-flex">Price: {el.price}</h1>
                            </div>
                            <hr/>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
            </div>
        )
    }
}