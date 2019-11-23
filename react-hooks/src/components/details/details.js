import React, {useEffect, useState} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import './details.css'
import Spinner from "../spinner";

const Field = ({item, field, label}) => {
    return (
      <ListGroupItem className=" d-flex justify-content-between">
          <span className="term">{label}</span>
          <span>{item[field]}</span>
      </ListGroupItem>
    )
};

export {Field};

function Details({itemId, getData, children}) {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        updateItem();
        setLoading(true)
    }, [itemId]);

    function updateItem() {
        if (!itemId) {
            return;
        }
        setLoading(true);
        getData(itemId)
          .then(res => {
              setItem(res)
              setLoading(false)
          })
    }

    if (!item) {
        return (
          <>
              <span className="select-error d-block">{this.props.title}</span>
              <div className="char-details rounded">
                  <Spinner/>
              </div>
          </>
        )
    }

    const {name} = item;
    return (
      <div className="char-details rounded">
          {loading ? <Spinner/> :
            <>
                <h4>{name}</h4>
                <ListGroup>
                    {React.Children.map(children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                    }
                </ListGroup>
            </>
          }
      </div>
    );
}

export default Details
