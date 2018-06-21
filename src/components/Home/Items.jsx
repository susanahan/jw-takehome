import React from 'react';
import Button from './Button'

export const ItemObjDisplay =(props) =>{
    let btnText = props.item.button.text;
    let btnUrl = props.item.button.url;
    let feature_title = props.item.feature_title[0].text;
    let feature_description = props.item.feature_description[0].text;
    let list_header = props.item.list_header[0].text;
    let list = props.item.list.map(el => {
        return(
            <p>
                {el.text}
            </p>
        )
    })
    return(
            <div className='card'>
            <div className='card'><h3>{feature_title} </h3></div>
            <div className='card'><p id='p-list'>{feature_description}</p></div>
            <div className='card'><h4>{list_header}</h4> </div>
            <div className='card'><p>{list}</p></div>
            <Button style_class='btn-learn' name={btnText} url={btnUrl}/>
            </div>

    )
}