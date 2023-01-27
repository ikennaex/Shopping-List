import React from 'react'
import {FaTrashAlt} from "react-icons/fa";
import LineItem from './LineItem';

const ItemList = (props) => {

    const { items, handleCheck, handleDelete } = props;
  return (
    <ul>
        {items.map((item) => (
            <LineItem
                key = {item.id}
                item = {item}
                handleCheck = {handleCheck}
                handleDelete = {handleDelete} 
                aria-label = {`Delete ${item.item}`}
            />
        ))}
      </ul>
      )
}

export default ItemList