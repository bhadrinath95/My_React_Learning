import React from 'react';
import { FaTrash  } from 'react-icons/fa6';
import { FaRegFaceSadCry } from "react-icons/fa6";
import ItemsList from './ItemsList';

const Content = ({items, handleCheck, handleDelete}) => {

  return (
    <>
      {items.length ? (
        <ul>
          <ItemsList
            items = {items}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
          />
        </ul>
      ): (
        <p style = {  {marginTop: "2rem"}  }>Your list is empty <FaRegFaceSadCry /></p>
      )
      }
    </>
  )
}

export default Content