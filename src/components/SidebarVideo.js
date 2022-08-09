import React from 'react'

function SidebarVideo({ data }) {
    const { title, duration, views } = data;
  return (
    <div>
        {title}
    </div>
  )
}

export default SidebarVideo