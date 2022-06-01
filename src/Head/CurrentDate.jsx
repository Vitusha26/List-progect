import React from 'react'

export default function CurrentDate() {

  const date = new Date();
  const options = { month: 'long'};
  const today = String(date.getDate()).padStart(2, '0') + ' ' + Intl.DateTimeFormat('en-US', options).format(date) + ' ' + date.getFullYear();

  return (
    <div className='currentDate'>
      <h2 className='today'>Today</h2>
        <p className='date'>{today}</p>
    </div>
  )
}
