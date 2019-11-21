import React, {Component} from 'react';
import {Col, Container, Row, Button} from 'reactstrap';
import Header from '../header';
import ErrorMessage from "../errorMessage";
import CharacterPage from "../page/characterPage";
import gotService from "../../services/gotService";
import BooksPage from "../page/booksPage";
import HousesPage from "../page/housesPage";
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import BooksItem from "../page/booksPage/booksItemPage";
import Home from "../page/homePage";
import NotFound from "../page/notFound";

export default class App extends Component {

  gotService = new gotService();

  state = {
    error: false,
    visible: true
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    })
  }

  onHideRandomChar = (visible) => {
    this.setState({
      visible: !visible
    });
  };

  render() {

    const {error, visible} = this.state;

    if (error) {
      return <ErrorMessage/>
    }

    return (
      <Router>
        <div className="app">
          <Container>
            <Header/>
          </Container>
          <Container>
            <Route path='/' exact render={() => {
              return <Home onHideRandomChar={this.onHideRandomChar} visible={visible}/>
            }}/>
            <Route path='/characters' component={CharacterPage}/>
            <Route path='/houses' component={HousesPage}/>
            <Route path='/books' exact component={BooksPage}/>
            <Route path='/books/:id' render={
              ({match}) => {
                const {id} = match.params;
                return <BooksItem bookId={id}/>
              }
            }/>
            <Route path='/404' component={() => <NotFound/>}/>
            <Redirect from='*' to='/404'/>
          </Container>
        </div>
      </Router>
    );
  }
};