import React from 'react';

const Input = (props) => {
  const { type = 'text', className, placeholder, id ,username} = props;
  return (
    <div>
    
        <input
        username={username}
          id={id}
          type={type}
          placeholder={placeholder}
          className={`px-3 py-2 border border-gray-300 rounded ${className}`}
        />
    </div>
  );
};

export default Input;
