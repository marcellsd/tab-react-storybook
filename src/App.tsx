import React from 'react';
import './App.css';
import { Tab } from './components/Tab';
import { TabForm } from './components/TabForm';

function App() {
  const tabsData = [
    {
        tabName: 'tab 1',
        tabText: 'Texto do primeiro tab'
    },
    {
        tabName: 'tab 2',
        tabText: 'Texto do segundo tab'
    },
    {
        tabName: 'tab 3',
        tabText: 'Texto do terceiro tab'
    },
    {
        tabName: 'tab 4',
        tabText: 'Texto do quarto tab'
    },
    
]
  return (
    <div>  
      <Tab 
      tabsData={tabsData}
      />
      <TabForm></TabForm>
    </div>

  );
}

export default App;
