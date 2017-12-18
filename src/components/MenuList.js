import React from 'react';

import { Link } from 'react-router-dom';

export const MenuList = (props) => {
  const listItems = props.items.map((item, i) => (
    <Link onClick={props.handleMenuClick} key={'menuItem_' + i} className="item" to={'/' + item}>
      {item}
    </Link>
  ));
  return listItems;
}
