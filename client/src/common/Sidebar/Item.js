import React from 'react';
function Item(props) {
  return (
    <li className={"nav-item " + props.className}>
        <a className="nav-link" href={props.href}>
        {props.icon}
        {props.text}</a>
    </li>
  );
}
export default Item;