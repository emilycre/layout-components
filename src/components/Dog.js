import React from 'react';

export default function Dog() {
  const dog = {
    name: 'Neil',
    age: '5',
    weight: '25lbs'
  };

  return (
    <dl>
      <dt>Name:</dt>
      <dd>{dog.name}</dd>

      <dt>Age:</dt>
      <dd>{dog.age}</dd>

      <dt>Weight:</dt>
      <dd>{dog.weight}</dd>
    </dl>
  );
}
