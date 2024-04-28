import React from 'react';
const Button = (props) => {
  const { children, className, onClick, type = 'submit', disabled } = props;
  console.log(onclick)
  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        className={`px-3 py2 rounded-sm text-white ${className}`}
        onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
