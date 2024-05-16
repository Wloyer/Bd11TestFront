import React from 'react';

function Button({ href, target, className, children }) {
  return (
    <a href={href} target={target} className={`button custom-button ${className}`}>
      <button>{children}</button>
      <span className='span-home'></span>
    </a>
  );
}

export default Button;
