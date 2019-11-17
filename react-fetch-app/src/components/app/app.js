import React, {Component} from 'react';
import {Button, Col, Container, Row} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from "../errorMessage";
import CharacterPage from "../page/characterPage";
import ItemList from "../itemList";
import Details from "../details";
import gotService from "../../services/gotService";
  import BooksPage from "../page/booksPage";
import HousesPage from "../page/housesPage";

  export default class App extends Component {

    gotService = new gotService();

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
            <h1 className="text-info">Character</h1>
            <CharacterPage/>
            <hr/>
            <h1 className="text-info">Books</h1>
            <BooksPage/>
            <hr/>
            <h1 className="text-info">Houses</h1>
            <HousesPage/>
          </Container>
        </>
      );
    }
  };
