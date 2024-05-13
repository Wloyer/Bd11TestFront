import React from 'react';

function Button({ href, target, className, children }) {
  return (
    <a href={href} target={target} className={`button ${className}`}>
      <button>{children}</button>
      <span></span>
    </a>
  );
}

export default Button;