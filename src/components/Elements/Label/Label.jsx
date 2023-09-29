import React from 'react';

const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <div>
      <label htmlFor={htmlFor} className='mb-3 '>{children}</label>
    </div>
  );
};

export default Label;
