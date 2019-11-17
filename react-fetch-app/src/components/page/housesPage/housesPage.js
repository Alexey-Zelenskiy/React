import React, {Component} from 'react'
import ItemList from "../../itemList/itemList";
import Details, {Field} from "../../details";
import ErrorMessage from "../../errorMessage";
import gotService from "../../../services/gotService";
import RowBlock from "../../rowBlock";

export default class HousesPage extends Component {

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
        getData={this.gotService.getAllHouses}
        renderItem={({name}) => `${name}`}
      />
    );

    const itemDetails = (
      <Details itemId={this.state.selectedItem} getData={this.gotService.getHouses} title={'Выберите, пожалуйста, дом из списка'}>
        <Field
          field='region'
          label='Region'
        />
        <Field
          field='words'
          label='Words'
        />
        <Field
          field='coatOfArms'
          label='CoatOfArms'
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

