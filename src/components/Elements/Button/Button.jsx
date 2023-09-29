import React from 'react';
const Button = (props) => {
  const { children, className, onClick, type = 'submit', disabled } = props;
  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        className={`px-3 py2 rounded-sm bg-sky-500 text-white ${className}`}
        onClick={() => onClick()}>
        {children}
      </button>
    </div>
  );
};

export default Button;
