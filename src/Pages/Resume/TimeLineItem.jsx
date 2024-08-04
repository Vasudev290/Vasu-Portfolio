import React from 'react'

const TimeLineItem = ({category, title, date, description}) => {
  return (
    <li className='timeline-item'>
        <span>{category}</span>
        <h4 className='h4 timeline-item-title'>{title}</h4>
        <span>{date}</span>
        <p className='timeline-text'>{description}</p>
    </li>
  )
}

export default TimeLineItem