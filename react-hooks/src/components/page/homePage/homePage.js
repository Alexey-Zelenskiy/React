import React, {Component} from 'react'
import RandomItem from "../../randomItem";
import {Button, Col, Row} from 'reactstrap';
export default class Home extends Component {

  constructor(props) {
    super(props);

    const data = new Date(),
      date = 'Date: ' + data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate(),
      time = 'Time: ' + data.getHours() + '.' + data.getMinutes() + '.' + data.getSeconds();
    this.state = {
      date: date,
      time: time,
    };
  }

  componentDidMount() {
    this.timerId = setInterval(this.updateItem, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    const {date, time} = this.state;
    const {visible} = this.props;
    const {onHideRandomChar} = this.props;
    return (
      <div>
        <Row>
          <Col lg={{size: 5, offset: 0}}>
            <Button className="d-flex"
                    onClick={() => onHideRandomChar(visible)}>{visible ? 'Hide random char' : 'Show random char'}</Button>
            {visible && <RandomItem interval={15000}/>}
          </Col>
        </Row>
        <h1 className='text-info d-flex'>Welcome to GOT DB</h1>
        <div className='text-info'>{date}</div>
        <div className='text-info'>{time}</div>
      </div>
    )
  }
};