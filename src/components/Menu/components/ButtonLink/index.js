import React from 'react';

function ButtonLink(props) {
  const title = `Acesse: ${props.children}`;

  return (
    <a href={props.href} className={props.className} title={title}>
      {props.children}
    </a>
  );
}

export default ButtonLink;