import React, {Component} from 'react'
import ItemList from "../../itemList/itemList";
import Details, {Field} from "../../details";
import ErrorMessage from "../../errorMessage";
import gotService from "../../../services/gotService";
import RowBlock from "../../rowBlock";

export default class CharacterPage extends Component {

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
        getData={this.gotService.getAllCharacters}
        renderItem={({name, gender}) => `${name}(${gender})`}
      />
    );

    const itemDetails = (
      <Details itemId={this.state.selectedItem} getData={this.gotService.getCharacters} title={'Выберите, пожалуйста, персонажа из списка'}>
        <Field
          field='gender'
          label='Gender'
        />
        <Field
          field='born'
          label='Born'
        />
        <Field
          field='died'
          label='Died'
        />
        <Field
          field='culture'
          label='Culture'
        />
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

