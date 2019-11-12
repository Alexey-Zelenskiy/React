import React, {Component} from 'react';
import styled from "styled-components";
import { ListGroup, ListGroupItem } from 'reactstrap';

import './charDetails.css'

export default class CharDetails extends Component {

    render() {
        return (
            <div className="char-details rounded">
                <h4>John Snow</h4>
                <ListGroup>
                    <ListGroupItem className=" d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>1783</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>1820</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>First</span>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}