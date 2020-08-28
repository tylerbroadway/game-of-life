/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useCallback } from 'react';
import produce from 'immer';

const Grid = () => {
  const numCols = 50;
  const numRows = 50;

  const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, -1],
    [1, 1],
    [-1, 1],
    [1, 0],
    [-1, 0]
  ]

  const createEmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }

    return rows
  }

  const [grid, setGrid] = useState(() => {
    return createEmptyGrid();
  });

  const [fast, setFast] = useState(false);
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);

  runningRef.current = running;

  const runSim = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid(g => {
      return produce(g, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSim, fast ? 100 : 1000);
  }, []);

  return (
    <div className='grid-container'>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols}, 10px)`
      }}>
        {grid.map((rows, i) => 
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                })

                setGrid(newGrid);
              }}
              style={{
                width: 10,
                height: 10,
                backgroundColor: grid[i][k] ? 'red' : 'white',
                border: '1px solid black'
              }}
            />
          ))
        )}
      </div>
          <button onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSim();
            }
          }}>
            {running ? 'Stop Simulation' : 'Run Simulation'}
          </button>
          <button onClick={() => {
            setGrid(createEmptyGrid())
          }}>
            Clear
          </button>
          <button onClick={() => {
            const rows = [];
            for (let i = 0; i < numRows; i++) {
              rows.push(Array.from(Array(numCols), () => Math.random() > .8 ? 1 : 0));
            }
        
            setGrid(rows)
          }}>
            Random
          </button>
          <span style={{ marginLeft: "20px" }} />
          <label>Simulation Speed: </label>
          <button onClick={() => setFast(true)}>Fast</button>
          <button onClick={() => setFast(false)}>Slow</button>
    </div>
  )
}

export default Grid;
