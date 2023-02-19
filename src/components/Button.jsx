import React from 'react';

function Button(props){
  const { onClick, children } = props;

  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;