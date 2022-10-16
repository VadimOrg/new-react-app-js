import React, { useState } from 'react'
import prettyMilliseconds from 'pretty-ms'

import './App.css'

function App() {
  const [unitCount, setUnitCount] = useState({
    id: '5',
    libOption: 'unitCount',
    value: 0,
    date: 83545
  })

  const data = [
    {
      id: '1',
      libOption: 'secondsDecimalDigits',
      value: 2,
      date: 235455663
    },
    {
      id: '2',
      libOption: 'millisecondsDecimalDigits',
      value: 1,
      date: 235455663
    },
    {
      id: '3',
      libOption: 'keepDecimalsOnWholeSeconds',
      value: true,
      date: 235455663
    },
    {
      id: '4',
      libOption: 'compact',
      value: true,
      date: 235455663
    },
    {
      id: '5',
      libOption: 'unitCount',
      value: 2,
      date: 235455663
    },
    {
      id: '6',
      libOption: 'verbose',
      value: true,
      date: 235455663
    },
    {
      id: '7',
      libOption: 'separateMilliseconds',
      value: true,
      date: 235455663
    },
    {
      id: '8',
      libOption: 'formatSubMilliseconds',
      value: true,
      date: 235455663
    },
    {
      id: '9',
      libOption: 'colonNotation',
      value: true,
      date: 235455663
    }
  ]

  // const unitCount = {
  //   id: '5',
  //   libOption: 'unitCount',
  //   value: Number(value),
  //   date: 235455663
  // }
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '300px',
        paddingTop: '50px',
        paddingBottom: '50px',
        marginRight: 'auto',
        marginLeft: 'auto'
      }}
    >
      <div style={{ marginBottom: '40px' }}>
        <h2>All pretty-ms options in action</h2>
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              padding: '10px',
              border: '1px solid #000',
              borderRadius: '5px',
              marginBottom: '20px'
            }}
          >
            <span style={{ display: 'block', marginBottom: '5px' }}>{item.libOption}</span>
            <span>{prettyMilliseconds(item.date, { [item.libOption]: item.value })}</span>
          </div>
        ))}
      </div>
      <div>
        <h2>UnitCount option playground</h2>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            style={{
              width: '100%',
              maxWidth: '100px',
              height: '40px',
              border: '1px solid #000',
              borderRadius: '5px'
            }}
            onChange={(e) => setUnitCount({ ...unitCount, value: Number(e.target.value) })}
          />
        </div>
        <div style={{ padding: '10px', border: '1px solid #000', borderRadius: '5px' }}>
          <span style={{ display: 'block', marginBottom: '5px' }}>{unitCount.libOption}</span>
          <span>
            {prettyMilliseconds(unitCount.date, { [unitCount.libOption]: unitCount.value })}
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
