import "./Card.css";
import React from 'react'

const Card = (props) => {
    const Png = props.png;
  return (
    <div className="CompactCard"
        style={{
            background: props.color.backGround,
            boxShadow: props.color.boxShadow,
        }}>
    <div className="radialBar">
        <span>{props.title}</span>
    </div>
    <div className="detail">
        <Png />
        <span>{props.value}</span>
    </div>
    </div>
  )
}

export default Card