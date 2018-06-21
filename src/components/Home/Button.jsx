import React from 'react';
import '../.././styles/css/App.css';

const Button = ({name, url,style_class}) => {
    return (
        <a href={url}>
            <button className={style_class}> {name} </button>
        </a>
    )
  }

export default Button;