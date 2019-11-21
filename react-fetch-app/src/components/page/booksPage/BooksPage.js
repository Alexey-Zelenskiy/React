import React, {Component} from 'react'
import ErrorMessage from "../../errorMessage";
import ItemList from "../../itemList";
import gotService from "../../../services/gotService";
import {withRouter} from 'react-router-dom'

class BooksPage extends Component {
  gotService = new gotService();

  state = {
    error: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    })
  }


  render() {

    if (this.state.error) {
      return <ErrorMessage/>
    }

    return (
      <div className='d-flex'>
        <ItemList
          onItemSelected={(itemId) => {
            this.props.history.push(itemId)
          }}
          getData={this.gotService.getAllBooks}
          renderItem={({name, released}) => `${name}(${released})`}
        />
        <h1 className='text-info'>Выберите кингу из списка</h1>
      </div>
    )
  }
}

export default withRouter(BooksPage);