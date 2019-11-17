import React, {Component} from 'react';
import {Button, Col, Container, Row} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from "../errorMessage";
import CharacterPage from "../characterPage";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

export default class App extends Component {

  state = {
    visible: true,
    error: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    })
  }

  onHideRandomChar = () => {
    this.setState((state) => {
      return {
        visible: !state.visible
      }
    });
  };

  render() {

    const {visible, error} = this.state;

    if (error) {
      return <ErrorMessage/>
    }

    return (
      <>
        <Container>
          <Header/>
        </Container>
        <Container>
          <Row>
            <Col lg={{size: 5, offset: 0}}>
              <Button className="d-flex"
                      onClick={() => this.onHideRandomChar()}>{visible ? 'Hide random char' : 'Show random char'}</Button>
              {visible && <RandomChar/>}
            </Col>
          </Row>
          <CharacterPage/>
          {/*<Row>*/}
          {/*  <Col md='6'>*/}
          {/*    <ItemList onCharSelected={this.onCharSelected}/>*/}
          {/*  </Col>*/}
          {/*  <Col md='6'>*/}
          {/*    <CharDetails charId={this.state.selectedChar}/>*/}
          {/*  </Col>*/}
          {/*</Row>*/}
          {/*<Row>*/}
          {/*  <Col md='6'>*/}
          {/*    <ItemList onCharSelected={this.onCharSelected}/>*/}
          {/*  </Col>*/}
          {/*  <Col md='6'>*/}
          {/*    <CharDetails charId={this.state.selectedChar}/>*/}
          {/*  </Col>*/}
          {/*</Row>*/}
        </Container>
      </>
    );
  }
};
