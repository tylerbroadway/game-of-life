import React, { useState } from 'react';

const Grid = () => {
  const numCols = 50;
  const numRows = 50;

  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }

    return rows
  });

  console.log(grid);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${numCols}, 10px)`
    }}>
      {grid.map((rows, i) => 
        rows.map((col, k) => (
          <div
            key={`${i}-${k}`}
            style={{
              width: 10,
              height: 10,
              backgroundColor: grid[i][k] ? 'black' : undefined,
              border: '1px solid black'
            }}
          />
        ))
      )}
    </div>
  )
}

export default Grid;
