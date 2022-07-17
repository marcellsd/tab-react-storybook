import { useState } from 'react';
import React, { createContext } from 'react';
import './App.css';
import { Tab, TabProps } from './components/Tab';
import { TabForm } from './components/TabForm';

const emptyTab: TabProps = {
  tabsData:[
]
}

const TabContext = createContext(emptyTab)

function App() {
  const [tabs, setTabs] = useState(emptyTab)

  function updateTabs(tabNames:string[], tabTexts:string[]){
   let tabData: TabProps = {tabsData:[]}
   for(let i=0; i<tabNames.length; i++){
    tabData.tabsData.push({tabName: tabNames[i], tabText: tabTexts[i]}) 
   }
    setTabs(tabData)
  }

  return (
    <div>
      <TabForm onSubmit={updateTabs}/>
      <TabContext.Provider value={tabs}>  
        <TabContext.Consumer>
          {tab => <Tab {...tab}/>}
        </TabContext.Consumer>
      </TabContext.Provider>
      
    </div>
  );
}

export default App;
