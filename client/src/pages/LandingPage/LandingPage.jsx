
import React, { useState } from 'react';
import { images } from '../../assets';
import { useStateContext, StateProvider } from '../../providers/StateProvider';
import Header from './Header';
import PageSelector from '../../components/PageSelector';
import Home from './Home';
import Profile from './Profile';

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState('home'); // home | will | josh | ...members
  const [currentPageType, setCurrentPageType] = useState('system'); // system | profile

  return (
    <StateProvider 
      state={{
        currentPage, 
        setCurrentPage, 
        currentPageType, 
        setCurrentPageType
      }}>
      <Header/>
      <PageSelector>
        <Home name="home"/>
        <Profile name="will"/>
      </PageSelector>
    </StateProvider>
  )
}


export default LandingPage;


