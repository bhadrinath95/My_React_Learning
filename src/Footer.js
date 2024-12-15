import React from 'react'

const Footer = ({length}) => {
    const year = new Date();
  return (
    <footer>List {length === 1 ? "Item" : "Items"}: {length}; Copyright &copy; {year.getFullYear()}</footer>
  )
}

export default Footer