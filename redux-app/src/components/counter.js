import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import '../index.css'

const Counter = ({counter, inc, dec, refresh}) => {
  return (
    <div className="jumbotron">
      <div className="app">
        <div className="content-container">
          <h1 className="counter">{counter}</h1>
          <div className="button-container">
            <button onClick={inc} className="button plus"/>
            <button onClick={dec} className="button minus"/>
            <button onClick={refresh} className="button ref"/>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);