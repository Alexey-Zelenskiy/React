import React, {Component} from 'react'
<<<<<<< HEAD
import {Col, Row} from 'reactstrap'
import ItemList from "../itemList/itemList";
import CharDetails from "../charDetails";
import ErrorMessage from "../errorMessage";

export default class CharacterPage extends Component {

  state = {
    selectedChar: 130,
    error: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    })
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  };


  render() {

    if (this.state.error) {
      return <ErrorMessage/>
    }

    return (
      <Row>
        <Col md='6'>
          <ItemList onCharSelected={this.onCharSelected}/>
        </Col>
        <Col md='6'>
          <CharDetails charId={this.state.selectedChar}/>
        </Col>
      </Row>
=======
import {Col, Row, Container} from 'reactstrap'
import ItemList from "../itemList/itemList";
import CharDetails from "../charDetails";

export default class CharacterPage extends Component{
  render() {
    return(

>>>>>>> lesson-08
    )
  }
}