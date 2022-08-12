import React from 'react'

function SidebarVideo({ data }) {
    const { title, duration, views } = data;
  return (
    <div className='content__filmBox'>
      <div className='filmBox__film'>
        <span>{duration}</span>
      </div>
      <h3>{title}</h3>
      <div className='filmBox__footer'>
        <div className='filmBox__iconWrapper'/>
        <p>{views}</p>
      </div>
    </div>
  )
}

export default SidebarVideo