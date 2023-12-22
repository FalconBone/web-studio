import { useState } from 'react';
import Applications from './Applications/Applications';
import Deal from './Deal/Deal';
import DealList from './DealList/DealList';
import Files from './Files/Files';
import classes from './Main.module.css';
import {Routes, Route} from 'react-router-dom'
import Cookie from './Cookie/Cookie';
import CookieGet from './Cookie/CookieGet';


function Main() {

  return (
      <div className={classes.container}>
        <Routes>
          <Route path="/deals" element={<DealList />} />
          <Route path="/applications" element={<Applications/>} />
          <Route path="/deal/:id/*" element={<Deal/>} />
          <Route path="/files" element={<Files/>} />
          <Route path='/cookie' element={<Cookie/>}/>
          <Route path='/cookieGet' element={<CookieGet/>}/>
        </Routes>
      </div>
  );
}

export default Main;
