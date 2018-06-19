import React, { Component } from 'react';
import data from './data.json';
//import axios from 'axios';
import './styles/css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userList: []
    };
   }


  render() {
    console.log(this.state.userList);
    const elem = data.results[0].data;
    console.log('data =>', elem);

    console.log('headergroup', elem['header-group'][0]);
    return (
      <div className='bg-img'>
          <ul>
            hiii
        {/* {Object.keys(elem).map((v, i) => <li key={i}>{v} {data[v]}</li> )} */}
          {/* {
            data.map(function(movie){
              return <li>{movie.id} - {movie.title}</li>;
            })
          } */}
          </ul>
        </div>
    );
  }
}
 
export default App;