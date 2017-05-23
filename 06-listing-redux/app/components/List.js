import React from 'react';

const List = ({ items }) => {
  const listItems = items.map(item => <li key={item}>{item}</li>);
  return <ul>{listItems}</ul>;
};

export default List;
