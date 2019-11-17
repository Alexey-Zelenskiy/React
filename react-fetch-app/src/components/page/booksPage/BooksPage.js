import React, {Component} from 'react'
import ErrorMessage from "../../errorMessage";
import ItemList from "../../itemList";
import Details, {Field} from "../../details";
import RowBlock from "../../rowBlock";
import gotService from "../../../services/gotService";

export default class BooksPage extends Component {
  gotService = new gotService();

  state = {
    selectedItem: null,
    error: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    })
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
  };

  render() {

    if (this.state.error) {
      return <ErrorMessage/>
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllBooks}
        renderItem={({name, released}) => `${name}(${released})`}
      />
    );

    const itemDetails = (
      <Details itemId={this.state.selectedItem}  getData={this.gotService.getBooks} title={'Выберите, пожалуйста, книгу из списка '}>
        <Field field='name' label='Name'/>
        <Field field='numberOfPages' label='NumberOfPages'/>
        <Field field='publisher' label='Publisher'/>
        <Field field='released' label='Released'/>
      </Details>
    );

    return (
      <RowBlock
        left={itemList}
        right={itemDetails}
      />
    )
  }
}