import React, { Component } from 'react';
import data from './data.json';
import './styles/css/App.css';
import Header from './components/Home/Header';
import Features from './components/Home/Features';
import Section from './components/Home/Section';
import FooterNav from './components/Nav/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAPI: data.results[0].data
    };
   }


  render() {
    const { dataAPI } = this.state;

 console.log(dataAPI)
    return (
      <div>
        <Header headerData={dataAPI['header-group'][0]} 
                heroData={dataAPI['hero-image']} 
                subheadData={dataAPI['subhead']}
                buttonData={dataAPI['button']}/>

        <Features featuresData={dataAPI['body']} />
        <Section  sectionLeftData={dataAPI['body'][1]} 
                  sectionRightData={dataAPI['body'][2]} />
           <FooterNav />
        </div>
    );
  }
}
 
export default App;