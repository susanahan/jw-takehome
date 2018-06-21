import React from "react";
import {ItemObjDisplay} from './Items';
import '../.././styles/css/App.css';


const Features = ({featuresData}) => {
    let feature_title=featuresData[0].primary.features_header[0].text;
    return(
    <div className='features-pg'>        
    <h4>{feature_title}</h4>
        <div className='main-content'>
        {  
            featuresData[0].items.map(item => {
                return (
                        <ItemObjDisplay item={item} />
                )
            })
        }
      </div>
        </div>
    )

 }

export default Features;


