import React, {Component} from 'react';
import styled from "styled-components";
import { ListGroup, ListGroupItem } from 'reactstrap';

const CharDetail = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
        
    h4{
     margin-bottom: 20px;
    text-align: center;
    }
`;
export default class CharDetails extends Component {

    render() {
        return (
            <CharDetail className="rounded">
                <h4>John Snow</h4>
                <ListGroup>
                    <ListGroupItem className=" d-flex justify-content-between">
                        <span className="font-weight-bold">Gender</span>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="font-weight-bold">Born</span>
                        <span>1783</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="font-weight-bold">Died</span>
                        <span>1820</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="font-weight-bold">Culture</span>
                        <span>First</span>
                    </ListGroupItem>
                </ListGroup>
            </CharDetail>
        );
    }
}