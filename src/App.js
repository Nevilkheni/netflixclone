
import React from 'react';
import './App.css'
import './index'
import Net from './components/Net';
import Header from './components/Header';

const App = () => {

  return (
    
    <div className='main'>
    <Header/>
    <div className='net'>
      <Net 
        name='The Dark'
        src='/dark.jpg' 
        title='A Netflix Original Series'
        link='https://vegamovies.haus/narappa-2024-hd-multi-language-1080p-720p-480p-vegamovies/' 
      />
      <Net 
      name='The Dark Wecked'
        src='/1.jpg' 
        title='A Netflix Original Series'
        link='https://vegamovies.haus/narappa-2024-hd-multi-language-1080p-720p-480p-vegamovies/' 
      />
      <Net 
      name='Beafraid of Dark'
        src='/2.jpg' 
        title='A Netflix Original Series'
        link='https://vegamovies.haus/narappa-2024-hd-multi-language-1080p-720p-480p-vegamovies/' 
      />
      <Net 
      name=' Dark 2003'
        src='/3.jpeg' 
        title='A Netflix Original Series'
        link='https://vegamovies.haus/narappa-2024-hd-multi-language-1080p-720p-480p-vegamovies/' 
      />
      <Net 
      name='The Dark'
        src='/4.jpg' 
          title='A Netflix Original Series'
        link='https://vegamovies.haus/narappa-2024-hd-multi-language-1080p-720p-480p-vegamovies/' 
      />
      <Net 
      name='The Dark Final Season'
        src='/5.jpeg' 
          title='A Netflix Original Series'
        link='https://vegamovies.haus/narappa-2024-hd-multi-language-1080p-720p-480p-vegamovies/' 
      />
      <Net 
      name='Agatha'
        src='/agatha.jpg' 
          title='A Netflix Original Series'
        link='https://vegamovies.haus/narappa-2024-hd-multi-language-1080p-720p-480p-vegamovies/' 
      />
      <Net 
      name='Form'
        src='/from.jpg' 
          title='A Netflix Original Series'
        link='https://vegamovies.haus/narappa-2024-hd-multi-language-1080p-720p-480p-vegamovies/' 
      />
      <Net 
      name='Lurks'
        src='/lurks.jpg' 
          title='A Netflix Original Series'
        link='https://vegamovies.haus/narappa-2024-hd-multi-language-1080p-720p-480p-vegamovies/' 
      />
      <Net 
      name='The Shed'
        src='/The-Shed.jpg' 
          title='A Netflix Original Series'
        link='https://vegamovies.haus/narappa-2024-hd-multi-language-1080p-720p-480p-vegamovies/' 
      />
      
      </div>
      
    </div>
  );
};

export default App;
