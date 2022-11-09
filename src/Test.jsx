import React from 'react';

const Test = ({ count, handleClick }) => {

  const someElement = <div>наш count</div>;

  const getElement = () => {
    return <div>Наш элемент</div>
  }

  return (
    <>
      <div>
        счетчик {count === 3 ? someElement : count }
        {getElement()}
      </div>
      <button onClick={handleClick}>Нажми</button>
    </>
  );
};

export { Test };