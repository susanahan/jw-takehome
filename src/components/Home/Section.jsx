import React from "react";

const Section = ({sectionLeftData, sectionRightData}) => {

let left_img = sectionLeftData.primary.image.url;
let left_header= sectionLeftData.primary.section_header.map((title)=>{return title.text});
let left_text = sectionLeftData.primary.section_text.map((text)=>{return text.text});
let right_img = sectionRightData.primary.image.url;
let right_header= sectionRightData.primary.section_header.map((title)=>{return title.text});
let right_text = sectionRightData.primary.section_text.map((text)=>{return text.text});

    return (
        <div className='section-pg'>
        <div className='section-container'>
            <div className='section-item1'><img id='section-img' src={left_img} alt='monetization-img'/></div>
            <div className='section-item2'><h3 id='section-list'>{left_header}</h3>
                <p id='section-list'>{left_text}</p></div>
            </div>

            <div className='section-container'>
            <div className='section-item1'><h3>{right_header}</h3>                
            <p>{right_text}</p></div> 

            <div className='section-item2'><img id='section-img' src={right_img} alt='developer-tools-img' /></div>

        </div>
        </div>
     
    )
}

export default Section;
