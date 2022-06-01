import React from 'react'
import CurrentDate from "./CurrentDate";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className='headerBlock'>
      <Logo />
      <CurrentDate />
    </div>
  )
}
