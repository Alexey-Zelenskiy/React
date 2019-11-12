import React, {Component} from 'react';
import {Button, Col, Container, Row} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component {

    state = {
        visible: true
    };

    onHideRandomChar = (visible) => {
        this.setState({
            visible: !visible
        });
    };

    render() {

        const {visible} = this.state;

        return (
          <>
              <Container>
                  <Header/>
              </Container>
              <Container>
                  <Row>
                      <Col lg={{size: 5, offset: 0}}>
                          <Button className="d-flex"
                                  onClick={() => {
                                      this.onHideRandomChar(visible)
                                  }}>{visible ? 'Скрыть' : 'Показать'}</Button>
                          {visible && <RandomChar/>}
                      </Col>
                  </Row>
                  <Row>
                      <Col md='6'>
                          <ItemList/>
                      </Col>
                      <Col md='6'>
                          <CharDetails/>
                      </Col>
                  </Row>
              </Container>
          </>
        );
    }
};
