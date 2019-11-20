import React, {Component} from 'react'
import gotService from "../../../services/gotService";
import Details, {Field} from "../../details";

export default class BooksItem extends Component {
  gotService = new gotService();

  render() {
    return (
      <Details itemId={this.props.bookId} getData={this.gotService.getBooks}
               title={'Выберите, пожалуйста, книгу из списка '}>
        <Field field='name' label='Name'/>
        <Field field='numberOfPages' label='NumberOfPages'/>
        <Field field='publisher' label='Publisher'/>
        <Field field='released' label='Released'/>
      </Details>
    )
  }

}
