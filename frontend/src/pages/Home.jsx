import logo from '../logo.svg';

import React from 'react';

import Mainpage from '../components/mainpage';
import Menu from '../components/Menu';
import Dishes from '../components/dishes';
import Menudishes from '../components/menudishes';
import Prefooter from '../components/prefooter';



const Home =()=>
{
    return (
        
      <React.Fragment>
        <Mainpage></Mainpage>
       <Menudishes></Menudishes>
       <Prefooter></Prefooter>
       </React.Fragment>
      
    )
}
export default Home;