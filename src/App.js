import React from 'react';
import Aside from './components/Aside/aside'
import AsideRight from './components/AsideRight/asideRight'
import Search from './components/IMG/search.png'
import CardChoices from './components/CardChoices/cardChoices'
import Card from './components/Card/card'
import CardAdd from './components/CardAdd/cardAdd'

function App() {
  return (
    <body>
      <Aside />
      <main>
      <div className="mainHeader">
        <div className="title">PostBook</div>
        <div className="controles">
          <img src={Search} alt="search" />
        </div>  
      </div>
      <div className="mainContent" id="style-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <CardAdd />
      </div>
      </main>
      <AsideRight />
    </body>
  );
}

export default App;
