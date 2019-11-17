import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import gotService from "../../services/gotService";
import './charDetails.css'
import ErrorMessage from "../errorMessage";
import Spinner from "../spinner";

export default class CharDetails extends Component {
    gotService = new gotService();

    state = {
        char: null,
        loading: false,
        error: false
    };


    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar()
        }

    }

    componentDidCatch() {
        this.setState({
            error: true,
            loading: false
        })
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            error: false
        });
    };

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.gotService.getCharacters(charId)
          .then(this.onCharLoaded)
    }

    render() {

        if (!this.state.char) {
            return (
              <>
                  <span className="select-error d-block">Please select character</span>
                  <div className="char-details rounded">
                      <Spinner/>
                  </div>
              </>
            )
        }
        if (this.state.error) {
            return <ErrorMessage/>
        }
        const {char, loading} = this.state;


        return (
          <div className="char-details rounded">
              {loading ? <Spinner/> : <View char={char}/>}
          </div>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
      <>
          <h4>{name}</h4>
          <ListGroup>
              <ListGroupItem className=" d-flex justify-content-between">
                  <span className="term">Gender</span>
                  <span>{gender}</span>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                  <span className="term">Born</span>
                  <span>{born}</span>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                  <span className="term">Died</span>
                  <span>{died}</span>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                  <span className="term">Culture</span>
                  <span>{culture}</span>
              </ListGroupItem>
          </ListGroup>
      </>
    )
};