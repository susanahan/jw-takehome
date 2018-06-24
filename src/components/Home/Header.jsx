import React from 'react';
import Button from './Button';
import HeaderNav from '.././Nav/NavBar';
import '../.././styles/css/App.css';

const Header = ({headerData, heroData, subheadData, buttonData}) => {
    let HeaderImg = headerData.icon.url;
    let HeaderTitle = headerData.title[0].text;
    let HeaderSub = subheadData[0].text;
    let HeaderBtnUrl = buttonData.url;
    let HeroImg = heroData.url;
    return (
        <div className='header-page'>
            <HeaderNav />
            <p>
                <img className='icon' src={HeaderImg} alt="jw-platform-icon"/>
                {HeaderTitle}
            </p>

            <p id='sub'>{HeaderSub}</p>
            <Button
                style_class='btn-info'
                name='Get Started'
                url={HeaderBtnUrl}
                />
            <br />
            <img className='center' src={HeroImg} alt='hero-icon' />
        </div>
      )
  }

export default Header;