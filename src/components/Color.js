import React from 'react';

export default function Color() {
  const color = {
    name: 'Navy.',
    hex: '#000080',
    rgb: {
      red: 0,
      green: 0,
      blue: 128
    }
  };

  return (
    <dl>
      <dt>Name:</dt>
      <dd>{color.name}</dd>
      
      <dt>Hex:</dt>
      <dd>{color.hex}</dd>

      <dt>RGB:</dt>
      <dd>Red: {color.rgb.red}</dd>
      <dd>Green: {color.rgb.green}</dd>
      <dd>Blue: {color.rgb.blue}</dd>
    </dl>
  );
}
