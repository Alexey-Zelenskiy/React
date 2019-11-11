import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from "styled-components";
export default class ItemList extends Component {

    render() {
        return (
            <ListGroup className="list-group">
                <ListGroupItem>
                    John Snow
                </ListGroupItem>
                <ListGroupItem>
                    Brandon Stark
                </ListGroupItem>
                <ListGroupItem>
                    Geremy
                </ListGroupItem>
            </ListGroup>
        );
    }
}